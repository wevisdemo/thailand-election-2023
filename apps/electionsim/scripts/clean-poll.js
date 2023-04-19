import * as aq from 'arquero';
import fs from 'fs';

const INPUT =
	'apps/electionsim/scripts/[WeVis-BX] Public View - Required Data - Poll.csv';

const OUTPUT = 'apps/electionsim/static/data/poll-dusit.csv';

const data = await aq.loadCSV(INPUT);

const output = data
	.filter(aq.escape((d) => !d.party.includes('อื่นๆ')))
	.derive({
		popularity: aq.escape((d) => +d['popularity (%)'].replace('%', '')),
	})
	.select('party', 'popularity')
	.print();

fs.writeFileSync(OUTPUT, output.toCSV());
