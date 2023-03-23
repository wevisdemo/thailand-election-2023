/* @refresh reload */
import { customElement } from 'solid-element';
import Bottom from './bottom/bottom';
import Footer from './footer/footer';
import Header from './header/header';
import Cookie from './cookie/cookie';

customElement('election-header', Header);
customElement('election-bottom', { indexPath: '', aboutPath: '' }, Bottom);
customElement('election-footer', Footer);
customElement('election-cookie', Cookie);
