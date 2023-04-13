import * as aq from 'arquero';
import fs from 'fs';

const INPUT =
	'apps/electionsim/scripts/2019_with_PT_projection.xlsx - Sheet1.csv';

const OUTPUT = 'apps/electionsim/static/data/popularity-projection-2566.csv';

const popularity = await aq.loadCSV(INPUT);

const output = popularity
	.select({
		จังหวัด: 'province',
		เขต: 'electorialDistrictNumber',
		พรรค: 'party',
		ผลคะแนน: 'points',
	})
	.derive({
		party: aq.escape((d) => (d.party === 'อนาคตใหม่' ? 'ก้าวไกล' : d.party)),
	});

output.print();

fs.writeFileSync(OUTPUT, output.toCSV());
