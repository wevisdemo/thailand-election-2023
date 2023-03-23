# @thailand-election-2023/components

Shared web-component elements, using [SolidJS](https://www.solidjs.com/) and [solid-element](https://github.com/solidjs/solid/tree/main/packages/solid-element).

## Set up

Add this package to the dependencies in the app's `package.json`

```json
{
	"dependencies": {
		"@thailand-election-2023/components": "*"
	}
}
```

Dynamic import once on client-side JavaScript such as

- React's `useEffect`, Svelte's `onMount`, or Vue's `mount` in layout file
- Nuxt client plugin (Need to test)

### For Vue and Nuxt

Vue will throw a warning because the component is not recognize by Vue. This can be fix by ignore the element start with `-election`.

For Nuxt 2, add the following config in `nuxt.config.js`:

```js
export default {
	// existing config...
	vue: {
		config: {
			ignoredElements: [/election-\w*/];
		}
	}
}
```

For Vue 2:

```js
Vue.config.ignoredElements = [/election-\w*/];
```

```js
// Client-side Javascript
useEffect() {
  import('@thailand-election-2023/components')
};
```

## Usage

Just use as a HTML element. Only `election-bottom` require props as following example.

### Header

No props required.

```html
<election-header></election-header>
```

### Bottom

The variation will change base on current path and given `index-path`, `about-path` props.

```html
<election-bottom
	index-path="/designyourmp"
	about-path="/designyourmp/about"
></election-bottom>
```

### Footer

No props required.

```html
<election-footer></election-footer>
```

### Cookie

No props required. This component will automatically initialize analytics code without extra config.

```html
<election-cookie></election-cookie>
```
