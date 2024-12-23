# Bullet Textarea  

**Bullet Textarea** is a React component designed to simplify the creation and management of bullet-point lists. Each line in the `textarea` is automatically formatted as a bullet point, making it an ideal tool for organizing thoughts, creating lists, or managing structured content in your applications.  

![Bullet Textarea Demo](https://example.com/demo-image.png)

---

## Features  

- Automatically prepends bullets (`❖`) to each line.  
- Easily create structured lists with intuitive keyboard shortcuts (e.g., `Enter` for a new bullet).  
- Lightweight and customizable.  
- Compatible with modern React versions.  

---

## Installation  

To add `bullet-textarea` to your project, run:  

```bash  
npm install bullet-textarea  
```  

or  

```bash  
yarn add bullet-textarea  
```  

---

## Usage  

Here’s a basic example to get started:  

```jsx  
import React from 'react';  
import BulletTextarea from 'bullet-textarea';  

const App = () => {  
  const handleChange = (value) => {  
    console.log('Updated Value:', value);  
  };  

  return (  
    <div>  
      <h1>Bullet Textarea Demo</h1>  
      <BulletTextarea defaultValue="❖ First Item\n❖ Second Item" onChange={handleChange} />  
    </div>  
  );  
};  

export default App;  
```  

### Props  

| Prop          | Type     | Default      | Description                                                 |  
|---------------|----------|--------------|-------------------------------------------------------------|  
| `defaultValue`| `string` | `❖ `         | Initial text in the textarea. Must start with bullets.      |  
| `onChange`    | `func`   | `undefined`  | Callback function triggered whenever the text changes.       |  

---

## Customization  

### Styling  
You can customize the component’s appearance by overriding the `textarea` styles:  

```jsx  
<BulletTextarea  
  defaultValue="❖ My Bullet Point"  
  onChange={(value) => console.log(value)}  
  style={{ width: '500px', height: '300px', fontFamily: 'Arial' }}  
/>  
```  

### Default Bullet Style  
The default bullet character is `❖`. You can modify the bullet logic in your code to use a different character, such as `-` or `•`.  

---

## Development  

### Running Locally  

Clone the repository:  
```bash  
git clone https://github.com/umeshthapa121/bullet-textarea.git  
cd bullet-textarea  
```  

Install dependencies:  
```bash  
npm install  
```  

Run the development server:  
```bash  
npm run dev  
```  

Run tests:  
```bash  
npm run test  
```  

---

## Contributing  

Contributions are welcome! Please follow these steps:  
1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature-name`.  
3. Commit your changes: `git commit -m 'Add feature'`.  
4. Push to your branch: `git push origin feature-name`.  
5. Open a pull request.  

---

## License  

This project is licensed under the [ISC License](LICENSE).  

---

## Support  

If you encounter any issues, feel free to open a bug report in the [issues section](https://github.com/umeshthapa121/bullet-textarea/issues).  

---

### Keywords  
React, bullet, textarea, list management, UI component, text editor  

Let me know if you need further modifications or enhancements!