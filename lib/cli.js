const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  run() {
    // Prompt the user with a series of questions using inquirer
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "Enter text for the logo. (Must not be more than 3 characters.)",
          // Validate the user input to ensure it meets certain criteria
          validate: (text) =>
            text.length <= 3 ||
            "The message must not contain more than 3 characters",
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter a text color",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Select a shape for the logo",
          // Provide the user with a list of choices for the shape type
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter a shape color",
        },
      ])
      .then(({ text, textColor, shapeType, shapeColor }) => {
        // Create an instance of the selected shape based on user input
        let shape;
        switch (shapeType) {
          case "circle":
            shape = new Circle();
            break;

          case "square":
            shape = new Square();
            break;

          default:
            shape = new Triangle();
            break;
        }
        // Set the color of the selected shape
        shape.setColor(shapeColor);

        // Create an instance of the SVG class
        const svg = new SVG();
        // Set text and text color for the SVG
        svg.setText(text, textColor);
        // Set the shape for the SVG
        svg.setShape(shape);
        // Write the SVG rendering to the "logo.svg" file
        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        // Log a success message when logo generation is complete
        console.log("Generated logo.svg");
      })
      .catch((error) => {
        // Log an error message if any errors occur during the process
        console.log(error);
        console.log("Oops! Something went wrong.");
      });
  }
}

// Export the CLI for external use
module.exports = CLI;
