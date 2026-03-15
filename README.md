# domtest
A minimal DOM implementation for testing purposes.

## Features
- Provides a `Document` object with a `createElement` method
- Supports appending children, setting text content, and setting attributes
- Includes test cases covering basic DOM operations

## Usage
To use this library, import the `Document` class from `domtest.js`:

```javascript
import { Document } from './domtest.js';

const doc = new Document();
const div = doc.createElement('div');
div.textContent = 'Hello, world!';
console.log(div.toString()); // Output: <div>Hello, world!</div>
```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.