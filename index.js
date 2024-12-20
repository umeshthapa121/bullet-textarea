// index.js
class BulletTextarea {
    constructor(selector) {
      this.textarea = document.querySelector(selector);
      if (!this.textarea) {
        throw new Error("Textarea element not found");
      }
  
      this.initialize();
    }
  
    initialize() {
      this.textarea.addEventListener("keydown", (event) => this.handleKeydown(event));
    }
  
    handleKeydown(event) {
      const { key } = event;
  
      // Handle new line with bullet point
      if (key === "Enter") {
        event.preventDefault();
  
        const { selectionStart, selectionEnd, value } = this.textarea;
        const bullet = "➤ ";
  
        // Insert bullet point at the new line
        const beforeCursor = value.slice(0, selectionStart);
        const afterCursor = value.slice(selectionEnd);
        const newValue = `${beforeCursor}\n >${afterCursor}`;
  
        this.textarea.value = newValue;
  
        // Move cursor to the correct position
        const cursorPosition = selectionStart + bullet.length + 1;
        this.textarea.setSelectionRange(cursorPosition, cursorPosition);
      }
    }
  }
  module.exports = BulletTextarea;
  