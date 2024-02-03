class SVG {
  constructor() {
    // Initialize textElement and shapeElement properties
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    // Generate the SVG markup with the combined shape and text elements
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }

  setText(message, color) {
    // Validate the length of the message to ensure it doesn't exceed 3 characters
    if (message.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }
    // Set the textElement property with the formatted text element
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
  }

  setShape(shape) {
    // Set the shapeElement property with the rendered shape markup
    this.shapeElement = shape.render();
  }
}

// Export the SVG class for external use
module.exports = SVG;
