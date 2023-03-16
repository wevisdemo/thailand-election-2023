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

```js
// Client-side Javascript
useEffect() {
  import('@thailand-election-2023/components')
};
```

## Usage

Just use as a HTML element. None of them require props.

```html
<election-header></election-header>
<election-bottom></election-bottom>
<election-footer></election-footer>
```
