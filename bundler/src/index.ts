import { existsSync, cpSync } from 'fs';
import { join } from 'path';
import projectMetadata from '@thailand-election-2023/metadata/dist/projects.json' assert { type: 'json' };

interface ProjectConfig {
	source: string;
	destination: string;
}

const ROOT_URL = 'https://election66.wevis.info/';
const APPS_DIR = 'apps';
const BUILD_DIR = 'dist';

const subProjects: ProjectConfig[] = [
	...projectMetadata
		.filter(({ URL }) => URL.includes(ROOT_URL))
		.flatMap(({ URL }) => {
			const projectPath = URL.replace(ROOT_URL, '').replaceAll('/', '');

			return {
				source: projectPath,
				destination: projectPath,
			};
		}),
	{
		source: 'landing',
		destination: '/',
	},
];

console.log(`${subProjects.length} sub-projects found.`);

subProjects.forEach(({ source, destination }) => {
	const buildArtifactsPath = join('../', APPS_DIR, source, BUILD_DIR);

	if (existsSync(buildArtifactsPath)) {
		console.log(`Copying ${source}...`);

		cpSync(buildArtifactsPath, join(BUILD_DIR, destination), {
			recursive: true,
		});
	} else {
		console.warn(
			`[Warning] ${source} built artifacts is not found at ${buildArtifactsPath}`
		);
	}
});

console.log('Completed');
