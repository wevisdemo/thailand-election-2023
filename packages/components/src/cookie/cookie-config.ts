export const LOCALSTORAGE_COOKIE_KEY = 'cookieSetting';
export const LOCALSTORAGE_COOKIE_EXPIRE_AT_KEY = 'cookieSettingExpireAt';
export const POLICY_URL = 'https://wevis.info/cookies_1-3/';
export const DAYS_TO_EXPIRE = 30;
export const cookieOptions = ['Performance'];
export const langs = ['ไทย', 'EN'];
export const translation: Record<string, Record<string, string>> = {
	bannerBody: {
		ไทย: 'เว็บไซต์นี้ใช้คุกกี้เพื่อเพิ่มประสิทธิภาพและประสบการณ์ที่ดีในการใช้งานเว็บไซต์ โดยเราจะใช้คุกกี้เมื่อท่านเข้ามาหน้าเว็บไซต์ คุณสามารถอ่านรายละเอียดเพิ่มเติมได้ที่',
		EN: 'This website uses cookies to improve your online experience. They were placed on your browser when you launched this website. You can read more detail by clicking',
	},
	popupBody: {
		ไทย: 'คุกกี้เหล่านี้จำเป็นสำหรับการทำงานของเว็บไซต์และไม่สามารถปิดได้จากหน้าเว็บไซต์ อย่างไรก็ตาม ท่านสามารถบล็อคการใช้งานคุกกี้ได้จากบราวเซอร์ของท่านซึ่งอาจจะส่งผลกระทบกับการใช้งานเว็บไซต์ได้ คุณสามารถอ่านรายละเอียดเพิ่มเติมได้ที่',
		EN: 'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information. You can read more detail by clicking Cookie Policy',
	},
	policyLink: {
		ไทย: 'นโยบายคุกกี้',
		EN: 'Cookie Policy',
	},
	acceptAll: {
		ไทย: 'ยอมรับทั้งหมด',
		EN: 'Accept all',
	},
	setting: {
		ไทย: 'การตั้งค่าคุกกี้',
		EN: 'Cookie setting',
	},
	save: {
		ไทย: 'บันทึกการตั้งค่า',
		EN: 'Save setting',
	},
};
