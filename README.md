# Bullet Textarea

**Bullet Textarea** is a lightweight JavaScript utility for managing bullet-pointed text input in a textarea element. It automatically adds bullet points at the beginning of each new line or when the user starts typing.

## Features
- Automatically adds a bullet point (`\u2022`) at the start of the first line.
- Inserts a bullet point on each new line when pressing Enter.
- Simple integration with plain JavaScript, Node.js, or module-based projects.
- Easily customizable bullet styles.

## Installation

### Install via npm (if published):
```bash
npm install bullet-textarea
```

### Clone the Repository:
Alternatively, you can clone this repository and include `index.js` in your project.

```bash
git clone <repository-url>
```

## Usage

### 1. Add a Textarea Element to Your HTML
Include a `<textarea>` element in your HTML file:

```html
<textarea id="bullet-textarea" rows="10" cols="50" placeholder="Start typing..."></textarea>
```

### 2. Import and Initialize the Component

#### Using Node.js/CommonJS:
```javascript
const BulletTextarea = require('bullet-textarea');

// Initialize the Bullet Textarea
const bulletTextarea = new BulletTextarea('#bullet-textarea');
```

#### Using ES Modules:
```javascript
import BulletTextarea from 'bullet-textarea';

// Initialize the Bullet Textarea
const bulletTextarea = new BulletTextarea('#bullet-textarea');
```

#### Directly in the Browser:
Include the script in your HTML:
```html
<script src="./index.js"></script>
<script>
  const bulletTextarea = new BulletTextarea('#bullet-textarea');
</script>
```

### 3. Test the Functionality
1. Open your webpage in a browser.
2. Start typing in the textarea.
3. Observe that:
   - The first character will prepend a bullet point (`\u2022`).
   - Pressing **Enter** creates a new line with a bullet point.

## Customization

### Change Bullet Point Symbol
To use a different bullet style (e.g., `-` or `*`), modify the `bullet` variable in the `handleInput` method:

```javascript
const bullet = '-'; // Use '-' instead of '\u2022'
```

### Example:
```javascript
handleInput(event) {
  const bullet = '-'; // Custom bullet point
  ...
}
```

## License
This project is licensed under the ISC License. See the LICENSE file for more details.

## Author
**Umesh Thapa**

Feel free to reach out for support or feature requests!

