// index.js

/**
 * Bullet Textarea Component
 * A simple utility for creating and managing bullet-pointed text inputs.
 */

class BulletTextarea {
    constructor(selector) {
      this.textarea = document.querySelector(selector);
      if (!this.textarea) {
        throw new Error("Textarea element not found");
      }
  
      this.previousLength = 0;
      this.initialize();
    }
  
    initialize() {
      this.textarea.addEventListener("input", (event) => this.handleInput(event));
    }
  
    handleInput(event) {
      const bullet = "\u2022";
      const newLength = event.target.value.length;
      const characterCode = event.target.value.substr(-1).charCodeAt(0);
  
      if (newLength > this.previousLength) {
        if (characterCode === 10) { // Enter key
          event.target.value = `${event.target.value}${bullet} `;
        } else if (newLength === 1) { // First character
          event.target.value = `${bullet} ${event.target.value}`;
        }
      }
  
      this.previousLength = newLength;
    }
  }
  
  // Example Usage
  // Ensure there is a textarea element with an ID or class (e.g., #bullet-textarea) in your HTML
  // const bulletTextarea = new BulletTextarea("#bullet-textarea");
  
  module.exports = BulletTextarea;
  