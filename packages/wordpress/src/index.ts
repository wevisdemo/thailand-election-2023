import { createPostsFetcher, Post, SiteConfig } from './post-fetcher';

const weVisConfig: SiteConfig = {
	apiRoot: 'https://wevis.info/wp-json/wp/v2',
	electionTagId: 41, // https://wevis.info/wp-json/wp/v2/tags?search=เลือกตั้ง
	mediaTargetSize: 'small-thumb',
};

export { Post };

export const fetchWeVisElectionPosts = createPostsFetcher(weVisConfig);
