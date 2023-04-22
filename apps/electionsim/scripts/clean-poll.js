import * as aq from 'arquero';
import fs from 'fs';

const INPUT = './poll-mock.csv';

const OUTPUT = '../src/data/poll-dusit.csv';

const data = await aq.loadCSV(INPUT);

const output = data
	.filter(aq.escape((d) => !d.party.includes('อื่นๆ')))
	.derive({
		popularity: aq.escape((d) => +d['popularity (%)'].replace('%', '')),
	})
	.select('party', 'popularity')
	.print();

fs.writeFileSync(OUTPUT, output.toCSV());
