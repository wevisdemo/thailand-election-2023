import { loadCSV, escape, desc } from 'arquero';
import { writeFileSync } from 'fs';
import { join } from 'path';

const data = await loadCSV('./polls.csv');

const cleanedPoll = data
	.filter(escape((d) => d.party && !d.party.includes('อื่นๆ')))
	.derive({
		popularity: escape((d) => +d['popularity (%)'].replace('%', '')),
	})
	.rename({
		poll_source: 'source',
		poll_date: 'date',
	})
	.select('party', 'popularity', 'source', 'date');

const pollIndex = cleanedPoll
	.select('source', 'date')
	.dedupe()
	.derive({
		filename: escape((d) => `poll-${d.source}.csv`),
	})
	.print();

writeFileSync('../src/data/polls.json', JSON.stringify(pollIndex.objects()));

pollIndex.objects().forEach(({ source, filename }) => {
	const records = cleanedPoll
		.filter(escape((d) => d.source === source))
		.select('party', 'popularity')
		.orderby(desc('popularity'))
		.print();

	writeFileSync(join('../static/data', filename), records.toCSV());
});
