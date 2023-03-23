/* @refresh reload */
import { Component, createSignal, Show, For } from 'solid-js';
import { noShadowDOM } from 'component-register';
import css from './cookie.module.css';
import {
	cookieOptions,
	DAYS_TO_EXPIRE,
	langs,
	LOCALSTORAGE_COOKIE_EXPIRE_AT_KEY,
	LOCALSTORAGE_COOKIE_KEY,
	POLICY_URL,
	translation,
} from './cookie-config';

type CookieSetting = Record<string, boolean>;

const Cookie: Component = () => {
	noShadowDOM();

	const [isShow, setIsShow] = createSignal(false);
	const [isSettingOpen, setIsSettingOpen] = createSignal(false);
	const [activeLang, setActiveLang] = createSignal(langs[0]);
	const [selectedCookies, setSelectedCookies] = createSignal({});

	const localStorageCookieSetting = localStorage.getItem(
		LOCALSTORAGE_COOKIE_KEY
	);

	const localStorageCookieExpireAt = localStorage.getItem(
		LOCALSTORAGE_COOKIE_EXPIRE_AT_KEY
	);

	if (
		localStorageCookieSetting &&
		localStorageCookieExpireAt &&
		new Date().getTime() < new Date(+localStorageCookieExpireAt).getTime()
	) {
		onAccept(JSON.parse(localStorageCookieSetting) as CookieSetting);
	} else {
		localStorage.removeItem(LOCALSTORAGE_COOKIE_KEY);
		localStorage.removeItem(LOCALSTORAGE_COOKIE_EXPIRE_AT_KEY);

		setIsShow(true);
	}

	function createCookieSetting(value: boolean) {
		return cookieOptions.reduce(
			(obj, option) => ({ ...obj, [option]: value }),
			{}
		);
	}

	function saveSetting(options: CookieSetting) {
		const expiredAtMs =
			new Date().getTime() + DAYS_TO_EXPIRE * 24 * 60 * 60 * 1000;

		localStorage.setItem(LOCALSTORAGE_COOKIE_KEY, JSON.stringify(options));
		localStorage.setItem(LOCALSTORAGE_COOKIE_EXPIRE_AT_KEY, `${expiredAtMs}`);

		onAccept(options);

		setIsShow(false);
	}

	function onAccept(options: CookieSetting) {
		// TODO: INIT ANALYTICS HERE
	}

	return (
		<Show when={isShow()}>
			<div
				class={`${css.cookie} ${
					isSettingOpen() ? css.cookie_popup : css.cookie_banner
				}`}
			>
				<Show when={isSettingOpen()}>
					<button
						class={css.cookie__close}
						onClick={() => setIsSettingOpen(false)}
					>
						<svg width="13" height="13" viewBox="0 0 13 13">
							<rect
								x="13"
								y="1.41431"
								width="15"
								height="2"
								transform="rotate(135 13 1.41431)"
								fill="white"
							/>
							<rect
								x="2.39355"
								y="0.0314941"
								width="15"
								height="2"
								transform="rotate(45 2.39355 0.0314941)"
								fill="white"
							/>
						</svg>
					</button>
				</Show>

				<div class={css.cookie__container}>
					<div class={css.cookie__lang}>
						<For each={langs}>
							{(lang) => (
								<button
									class={
										activeLang() === lang ? '' : css.cookie__lang__inactive
									}
									onClick={() => setActiveLang(lang)}
								>
									{lang}
								</button>
							)}
						</For>
					</div>

					<Show when={isSettingOpen()}>
						<div class={css.cookie__options}>
							<h2 class="typo-b3">{translation.setting[activeLang()]}</h2>
							<div>
								<input type="checkbox" id="cookie-necessary" checked disabled />
								<label for="cookie-necessary">Strictly Necessary Cookies</label>
							</div>
							<For each={cookieOptions}>
								{(option) => (
									<div>
										<input
											type="checkbox"
											id={`cookie-${option.toLowerCase()}`}
											checked={selectedCookies()[option]}
											onChange={(event) =>
												setSelectedCookies({
													...selectedCookies(),
													[option]: event.currentTarget.checked,
												})
											}
										/>
										<label for={`cookie-${option.toLowerCase()}`}>
											{option}
											{` `}Cookies
										</label>
									</div>
								)}
							</For>
						</div>
					</Show>

					<div class={`${css.cookie__body} typo-b5`}>
						{
							translation[isSettingOpen() ? 'popupBody' : 'bannerBody'][
								activeLang()
							]
						}{' '}
						<a href={POLICY_URL} target="_blank">
							{translation.policyLink[activeLang()]}
						</a>
					</div>

					<div class={`${css.cookie__actions} typo-b6`}>
						<Show
							when={isSettingOpen()}
							fallback={
								<button
									onClick={() => {
										setSelectedCookies(createCookieSetting(false));
										setIsSettingOpen(true);
									}}
								>
									{translation.setting[activeLang()]}
								</button>
							}
						>
							<button onClick={() => saveSetting(selectedCookies())}>
								{translation.save[activeLang()]}
							</button>
						</Show>

						<button onClick={() => saveSetting(createCookieSetting(true))}>
							{translation.acceptAll[activeLang()]}
						</button>
					</div>
				</div>
			</div>
		</Show>
	);
};

export default Cookie;
