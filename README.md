# domtest

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A minimal DOM implementation that simulates the browser's Document Object Model (DOM) for testing in Deno environments.

This library provides a global `document` object, allowing you to write DOM manipulation code without a browser.

## Features

- Provides a global `document` object, mimicking browser behavior
- Create elements with `document.createElement()`
- Append child nodes with `node.appendChild()`
- Set text content with the `node.textContent` property
- Set attributes via property setters (e.g., `node.href`)
- Serialize elements to HTML strings with `node.toString()`

## Requirements

- Deno 1.x

## Usage

Import `domtest.js` to populate the global `document` object. You can then use it as you would in a browser.

```javascript
import './domtest.js';

const link = document.createElement('a');
link.textContent = 'JIG';
link.href = 'https://jig.jp/';

console.log(link.toString());
// Output: <a href='https://jig.jp/'>JIG</a>

const div = document.createElement('div');
div.appendChild(link);

console.log(div.toString());
// Output: <div><a href='https://jig.jp/'>JIG</a></div>
```

## Testing

To run the included tests, execute the following command in your terminal:

```sh
deno test domtest.test.js
```

## License

MIT License — see [LICENSE](LICENSE).