import { writable } from 'svelte/store';

export enum ScaleAns {
	Scale0 = "scale0",
	Scale10 = "scale10",
	Scale30 = "scale30",
	Scale50 = "scale50",
	Scale70 = "scale70",
	Scale90 = "scale90",
	Scale100 = "scale100",
}

export enum PollAns {
	Nida = "nida",
	Dusit = "dusit",
	Thairath = "thairath",
	Prapok = "prapok",
	Super = "super",
}

export type Party = string;

export interface InputStore {
	input: {
		quiz1: ScaleAns | undefined,
		quiz2: ScaleAns | undefined,
		quiz3: ScaleAns | undefined,
		quiz4: ScaleAns | undefined,
		quiz5: ScaleAns | undefined,
		quiz6: PollAns | undefined,
		quiz7: boolean | undefined,
		quiz8: {
			from?: Party,
			to?: Party,
			percent?: ScaleAns
		} | undefined,
	}
}

const initialInput: InputStore = {input: {
	quiz1: undefined,
	quiz2: undefined,
	quiz3: undefined,
	quiz4: undefined,
	quiz5: undefined,
	quiz6: undefined,
	quiz7: undefined,
	quiz8: undefined,
}}


const createInputStore = () => {
	const { subscribe, update } = writable<InputStore>(initialInput);

	return {
		subscribe,
		updateQuize1: (ans: ScaleAns) => {
			update(({input, ...state}) => ({
				...state,
				input: {
					...input,
					quiz1: ans,
				}
			}))
		},
		updateQuize2: (ans: ScaleAns) => {
			update(({input, ...state}) => ({
				...state,
				input: {
					...input,
					quiz2: ans,
				}
			}))
		},
		updateQuize3: (ans: ScaleAns) => {
			update(({input, ...state}) => ({
				...state,
				input: {
					...input,
					quiz3: ans,
				}
			}))
		},
		updateQuize4: (ans: ScaleAns) => {
			update(({input, ...state}) => ({
				...state,
				input: {
					...input,
					quiz4: ans,
				}
			}))
		},
		updateQuize5: (ans: ScaleAns) => {
			update(({input, ...state}) => ({
				...state,
				input: {
					...input,
					quiz5: ans,
				}
			}))
		},
		updateQuize6: (ans: PollAns) => {
			update(({input, ...state}) => ({
				...state,
				input: {
					...input,
					quiz6: ans,
				}
			}))
		},
		updateQuize7: (ans: boolean) => {
			update(({input, ...state}) => ({
				...state,
				input: {
					...input,
					quiz7: ans,
				}
			}))
		},
		updateQuize8From: (ans: Party) => {
			update(({input, ...state}) => ({
				...state,
				input: {
					...input,
					quiz8: {
						...input.quiz8, 
						from: ans
					},
				}
			}))
		},
		updateQuize8To: (ans: Party) => {
			update(({input, ...state}) => ({
				...state,
				input: {
					...input,
					quiz8: {
						...input.quiz8, 
						to: ans
					},
				}
			}))
		},
		updateQuize8Percent: (ans: ScaleAns) => {
			update(({input, ...state}) => ({
				...state,
				input: {
					...input,
					quiz8: {
						...input.quiz8, 
						percent: ans
					},
				}
			}))
		}
	};
};

export const input = createInputStore();