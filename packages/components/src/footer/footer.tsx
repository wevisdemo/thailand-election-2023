/* @refresh reload */
import type { Component } from 'solid-js';
import { noShadowDOM } from 'component-register';
import css from './footer.module.css';

const Footer: Component = () => {
	noShadowDOM();

	return <p class={css.footer}>Footer component</p>;
};

export default Footer;
