import { ScaleAns } from '../stores/input';

export const quiz1ToWord = (key: ScaleAns | undefined): string[] => {
	switch (key) {
		case ScaleAns.Scale0:
			return ['เลือกตัวบุคคล', '10 ใน 10 คน'];

		case ScaleAns.Scale10:
			return ['เลือกตัวบุคคล', '9 ใน 10 คน'];

		case ScaleAns.Scale30:
			return ['เลือกตัวบุคคล', '7 ใน 10 คน'];

		case ScaleAns.Scale50:
			return ['เลือกคน/พรรค', 'เท่าๆกัน'];

		case ScaleAns.Scale70:
			return ['เลือกพรรค', '7 ใน 10 คน'];

		case ScaleAns.Scale90:
			return ['เลือกพรรค', '9 ใน 10 คน'];

		case ScaleAns.Scale100:
			return ['เลือกพรรค', '10 ใน 10 คน'];

		default:
			return ['', ''];
	}
};

export const quiz2ToWord = (key: ScaleAns | undefined): string[] => {
	switch (key) {
		case ScaleAns.Scale0:
			return ['เปลี่ยนไปเลือก', '0 ใน 10 คน'];

		case ScaleAns.Scale10:
			return ['เปลี่ยนไปเลือก', '1 ใน 10 คน'];

		case ScaleAns.Scale30:
			return ['เปลี่ยนไปเลือก', '3 ใน 10 คน'];

		case ScaleAns.Scale50:
			return ['เปลี่ยนไปเลือก', '5 ใน 10 คน'];

		case ScaleAns.Scale70:
			return ['เปลี่ยนไปเลือก', '7 ใน 10 คน'];

		case ScaleAns.Scale90:
			return ['เปลี่ยนไปเลือก', '9 ใน 10 คน'];

		case ScaleAns.Scale100:
			return ['เปลี่ยนไปเลือก', '10 ใน 10 คน'];

		default:
			return ['', ''];
	}
};

export const quiz3ToWord = (key: ScaleAns | undefined): string[] => {
	switch (key) {
		case ScaleAns.Scale0:
			return ['เทให้ก้าวไกล', '3 ใน 10 คน'];

		case ScaleAns.Scale10:
			return ['เทให้ก้าวไกล', '2 ใน 10 คน'];

		case ScaleAns.Scale30:
			return ['เทให้ก้าวไกล', '1 ใน 10 คน'];

		case ScaleAns.Scale50:
			return ['ผลโหวต', 'ไม่เปลี่ยนแปลง'];

		case ScaleAns.Scale70:
			return ['เทให้เพื่อไทย', '1 ใน 10 คน'];

		case ScaleAns.Scale90:
			return ['เทให้เพื่อไทย', '2 ใน 10 คน'];

		case ScaleAns.Scale100:
			return ['เทให้เพื่อไทย', '3 ใน 10 คน'];

		default:
			return ['', ''];
	}
};

export const quiz4ToWord = (key: ScaleAns | undefined): string[] => {
	switch (key) {
		case ScaleAns.Scale0:
			return ['เทให้พรรคร่วมรัฐบาลอื่น', '3 ใน 10 คน'];

		case ScaleAns.Scale10:
			return ['เทให้พรรคร่วมรัฐบาลอื่น', '2 ใน 10 คน'];

		case ScaleAns.Scale30:
			return ['เทให้พรรคร่วมรัฐบาลอื่น', '1 ใน 10 คน'];

		case ScaleAns.Scale50:
			return ['ผลโหวต', 'ไม่เปลี่ยนแปลง'];

		case ScaleAns.Scale70:
			return ['เทให้ 2 พรรคนี้', '1 ใน 10 คน'];

		case ScaleAns.Scale90:
			return ['เทให้ 2 พรรคนี้', '2 ใน 10 คน'];

		case ScaleAns.Scale100:
			return ['เทให้ 2 พรรคนี้', '3 ใน 10 คน'];

		default:
			return ['', ''];
	}
};

export const quiz5ToWord = (key: ScaleAns | undefined): string[] => {
	switch (key) {
		case ScaleAns.Scale0:
			return ['เปลี่ยนใจเลือกฝ่ายค้าน', '3 ใน 10 คน'];

		case ScaleAns.Scale10:
			return ['เปลี่ยนใจเลือกฝ่ายค้าน', '2 ใน 10 คน'];

		case ScaleAns.Scale30:
			return ['เปลี่ยนใจเลือกฝ่ายค้าน', '1 ใน 10 คน'];

		case ScaleAns.Scale50:
			return ['ผลโหวต', 'ไม่เปลี่ยนแปลง'];

		case ScaleAns.Scale70:
			return ['เปลี่ยนใจเลือกฝ่ายรัฐบาล', '1 ใน 10 คน'];

		case ScaleAns.Scale90:
			return ['เปลี่ยนใจเลือกฝ่ายรัฐบาล', '2 ใน 10 คน'];

		case ScaleAns.Scale100:
			return ['เปลี่ยนใจเลือกฝ่ายรัฐบาล', '3 ใน 10 คน'];

		default:
			return ['', ''];
	}
};

export const quiz8ToWord = (key: ScaleAns | undefined): string[] => {
	switch (key) {
		case ScaleAns.Scale0:
			return ['เปลี่ยนใจ', '0 ใน 10 คน'];

		case ScaleAns.Scale10:
			return ['เปลี่ยนใจ', '1 ใน 10 คน'];

		case ScaleAns.Scale30:
			return ['เปลี่ยนใจ', '3 ใน 10 คน'];

		case ScaleAns.Scale50:
			return ['เปลี่ยนใจ', '5 ใน 10 คน'];

		case ScaleAns.Scale70:
			return ['เปลี่ยนใจ', '7 ใน 10 คน'];

		case ScaleAns.Scale90:
			return ['เปลี่ยนใจ', '9 ใน 10 คน'];

		case ScaleAns.Scale100:
			return ['เปลี่ยนใจ', '10 ใน 10 คน'];

		default:
			return ['', ''];
	}
};
