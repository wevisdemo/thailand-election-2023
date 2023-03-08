# @thailand-election-2023/wordpress

[WeVis](https://wevis.info) WordPress API fetching utility

## Setup

Add this package to the dependencies in the app's `package.json`

```json
"dependencies": {
  "@thailand-election-2023/wordpress": "*",
},
```

## Usage

Import and call the function

```ts
import { fetchWeVisElectionPosts } from '@thailand-election-2023/wordpress';

const weVisPosts = await fetchWeVisElectionPosts();
```

`fetchWeVisElectionPosts` functions receive optional options object which can specify

- `limit` amount of latest posts
- `tag` additional tag to filter posts

```ts
const lastestThreePosts = await fetchWeVisElectionPosts({ limit: 3 });
```

The function return `Promise<Post[]>`

```ts
interface Post {
	id: number;
	title: string;
	image: string;
	date: string;
	link: string;
}
```
