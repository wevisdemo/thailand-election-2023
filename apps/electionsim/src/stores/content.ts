import { writable } from 'svelte/store';

export enum Content {
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
	EditQuiz = 13,
	Result = 14,
}

export interface ContentStore {
	currentContent: Content;
	isFinished: boolean;
	isQuizing: boolean;
}

const initialContent: ContentStore = {
	currentContent: Content.Analytics,
	isFinished: false,
	isQuizing: false,
};

const createContentManagerStore = () => {
	const { subscribe, update } = writable<ContentStore>(initialContent);

	return {
		subscribe,
		updateContent: (newContent: Content) => {
			update((store) => ({
				...store,
				currentContent: newContent,
			}));
		},
		toggleFinished: () => {
			update((store) => ({
				...store,
				isFinished: true,
			}));
		},
		reset: () => {
			update((store) => ({
				...store,
				isFinished: false,
			}));
		},
		startQuiz: () => {
			update((store) => ({
				...store,
				isQuizing: true,
			}));
		},
		endQuiz: () => {
			update((store) => ({
				...store,
				isQuizing: false,
			}));
		},
	};
};

export const contentManager = createContentManagerStore();
