/* @refresh reload */
import type { Component } from 'solid-js';
import { noShadowDOM } from 'component-register';

const Footer: Component = () => {
	noShadowDOM();

	return <p class="text-center py-20">Footer component</p>;
};

export default Footer;
