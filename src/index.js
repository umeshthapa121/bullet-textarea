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
    if (this.textarea.value.trim() === "") {
      this.textarea.value = "\u2022 "; // Bullet point at the start if empty
    }

    this.textarea.addEventListener("input", (event) => this.handleInput(event));
  }

  handleInput(event) {
    const bullet = "\u2022"; // Unicode for bullet
    const newLength = event.target.value.length;
    const characterCode = event.target.value.substr(-1).charCodeAt(0);

    if (newLength > this.previousLength) {
      // If the user pressed Enter (newline), add a bullet point
      if (characterCode === 10) {
        // Check if the new line starts with a bullet point, if not, add it
        if (!event.target.value.includes(bullet)) {
          event.target.value = event.target.value + bullet + ' ';
        }
      } else if (newLength === 1) {
        // If it's the first character (after initialization), add a bullet point at the start
        event.target.value = bullet + ' ' + event.target.value;
      }
    }

    this.previousLength = newLength;
  }
}

module.exports = BulletTextarea;
