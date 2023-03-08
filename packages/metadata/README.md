# @thailand-election-2023/metadata

This package parse project metadata CSV into JSON file

## Set up

Add this package to the dependencies in the app's `package.json`

```json
{
	"dependencies": {
		"@thailand-election-2023/metadata": "*"
	}
}
```

## Usage

Import parsed JSON file from the package

```js
import projectMetadata from '@thailand-election-2023/metadata/dist/projects.json';

console.log(projectMetadata);
```

Example data

```json
[
	{
		"ThName": "4 ปีผ่านมา ส.ส. ทำอะไรกันในสภาบ้าง?",
		"EnName": "They Work For Us",
		"Partner": "WeVis",
		"Subtitle": "ทวนความจำกับผลงานการลงมติและการย้ายพรรคของ ส.ส. ชุดล่าสุด",
		"Tag": "ผลงานที่ผ่านมา",
		"URL": "https://theyworkforus.wevis.info/",
		"Path": "theyworkforus",
		"OrderLaunch": 1,
		"OrderPre": 5,
		"ComingSoon": false
	}
	// ...
]
```

## Update the metadata

Replace or make changes to `src/projects.csv`
