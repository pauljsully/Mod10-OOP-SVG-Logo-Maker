const SVG = require("./svg");
const { Square } = require("./shapes");


test("should render a 300 x 200 svg element", () => {

  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
  // Create a new instance of the SVG class
  const svg = new SVG();
  // Assert that the rendered SVG matches the expected SVG markup
  expect(svg.render()).toEqual(expectedSvg);
});


test("should append text element", () => {

  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';

  const svg = new SVG();
  // Set text element with the letter "A" and white color
  svg.setText("A", "white");
  // Assert that the rendered SVG matches the expected SVG markup
  expect(svg.render()).toEqual(expectedSvg);
});


test("should set text message and color", () => {
 
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
  const svg = new SVG();
  // Set text element with the message "SVG" and color #333
  svg.setText("SVG", "#333");
  // Assert that the rendered SVG matches the expected SVG markup
  expect(svg.render()).toEqual(expectedSvg);
});


test("should throw if text exceeds 3 characters", () => {
  // Define the expected error when attempting to set text exceeding 3 characters
  const expectedError = new Error("Text must not exceed 3 characters.");

  const svg = new SVG();
  // Assert that setting text exceeding 3 characters throws the expected error
  expect(() => svg.setText("HELLO", "#333")).toThrow(expectedError);
});


test("should include a shape", () => {

  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';

  const svg = new SVG();

  svg.setText("SVG", "#333");
  // Create a new instance of the Square shape and set its color
  const square = new Square();
  square.setColor("dodgerblue");

  svg.setShape(square);
  // Assert that the rendered SVG matches the expected SVG markup
  expect(svg.render()).toEqual(expectedSvg);
});
