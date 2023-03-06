# @thailand-election-2023/styles

Shared stylesheets according to the [design systems](https://www.figma.com/file/5YYW7g5vVLDufj7bqTSIWy/Election66?node-id=21%3A319&t=4vETje2S116fIWLm-1)

## Set up

1. Add this package to the dependencies in the app's `package.json`

```json
  dependencies: {
    "@thailand-election-2023/styles": "*"
  }
```

2. Import `index.css` into the project. Note that importing global css file is different between each framwork.

```js
import '@thailand-election-2023/styles/dist/index.css';
```

## Usage

### Global stylesheet: index.css

index.css provides

- Style reset using [Tailwind preflight](https://tailwindcss.com/docs/preflight)
- Color CSS variables
- Typography CSS classes

See the example in [doc/index.html](doc/index.html)

### Extend with Tailwind

If the app use Tailwind, base `tailwind.config.js` can be extended. Note that `index.css` still needed to be import because of css variables, and preflight should be disabled.

```js
// tailwind.config.js in your app

module.exports = {
	presets: [require('@thailand-election-2023/styles/tailwind.config.js')],
	corePlugins: {
		preflight: false,
	},
	// ...
};
```
