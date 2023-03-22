/* @refresh reload */
import { customElement } from 'solid-element';
import Bottom from './bottom/bottom';
import Footer from './footer/footer';
import Header from './header/header';

customElement('election-header', Header);
customElement('election-bottom', { indexPath: '', aboutPath: '' }, Bottom);
customElement('election-footer', Footer);
