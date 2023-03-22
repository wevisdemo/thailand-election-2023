import { existsSync, cpSync, rmSync } from 'fs';
import { join } from 'path';
import projectMetadata from '@thailand-election-2023/metadata/dist/projects.json' assert { type: 'json' };

interface ProjectConfig {
	source: string;
	destination: string;
	isUnderConstruction: boolean;
}

const APPS_DIR = 'apps';
const BUILD_DIR = 'dist';
const constructionArtifactPath = join(
	'../',
	APPS_DIR,
	'underconstruction',
	BUILD_DIR
);

const subProjects: ProjectConfig[] = [
	...projectMetadata
		.filter(({ URL }) => URL.startsWith('/'))
		.map(({ URL, ComingSoon }) => ({
			source: URL,
			destination: URL,
			isUnderConstruction:
				process.env.BUILD_TARGET === 'production' && ComingSoon,
		})),
	{
		source: '/landing',
		destination: '/',
		isUnderConstruction: false,
	},
];

console.log(`Build target: ${process.env.BUILD_TARGET || 'default'}`);

console.log(`${subProjects.length} sub-projects found.`);

if (existsSync(BUILD_DIR)) {
	rmSync(BUILD_DIR, { recursive: true });
}

subProjects.forEach(({ source, destination, isUnderConstruction }) => {
	const buildArtifactsPath = join('../', APPS_DIR, source, BUILD_DIR);
	const isBuildArtifactExist = existsSync(buildArtifactsPath);

	if (isUnderConstruction) {
		console.log(`${source} is coming soon. Copying underconstruction page...`);
	} else if (!isBuildArtifactExist) {
		console.warn(
			`${source} built artifacts is not found at ${buildArtifactsPath}. Copying underconstruction page...`
		);
	} else {
		console.log(`${source} found! Copying...`);
	}

	cpSync(
		isUnderConstruction || !isBuildArtifactExist
			? constructionArtifactPath
			: buildArtifactsPath,
		join(BUILD_DIR, destination),
		{
			recursive: true,
		}
	);
});

console.log('Completed!');
