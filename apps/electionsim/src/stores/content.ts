import { writable } from 'svelte/store';

export enum Content {
	Intro = 0,
	Analytics = 1,
	Election62 = 2,
	ReCalculate = 3,
	Quiz1 = 4,
	Quiz2 = 5,
	Quiz3 = 6,
	Quiz4 = 7,
	Quiz5 = 8,
	Quiz6 = 9,
	Quiz7 = 10,
	Quiz8 = 11,
	Calculate = 12,
}

export interface ContentStore {
	currentContent: Content;
	isFinished: boolean;
}

const initialContent: ContentStore = { currentContent: Content.Intro, isFinished: false }

const createContentManagerStore = () => {
	const { subscribe, update } = writable<ContentStore>(initialContent);

	return {
		subscribe,
		updateContent: (newContent: Content) => {
			update((store) => ({
				...store,
				currentContent: newContent
			}))
		}
	};
};

export const contentManager = createContentManagerStore();
