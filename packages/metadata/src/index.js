import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { csvParse, autoType } from 'd3-dsv';

const PROD_BASE_URL = 'https://election66.wevis.info';

const OUT_DIR = 'dist';
const INPUT_DIR = 'src';
const FILENAME = 'projects';

if (!existsSync(OUT_DIR)) {
	mkdirSync(OUT_DIR);
}

const data = csvParse(
	readFileSync(`${INPUT_DIR}/${FILENAME}.csv`, 'utf-8'),
	autoType
).map(({ ComingSoon, URL, ...rest }) => ({
	...rest,
	URL: URL.replace(PROD_BASE_URL, ''),
	ComingSoon: ComingSoon === 'Yes',
}));

writeFileSync(
	`${OUT_DIR}/${FILENAME}.json`,
	JSON.stringify(data, undefined, 2)
);
