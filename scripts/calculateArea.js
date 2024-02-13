const valueOfInputField = (inputId) => {
  const inputField = document.getElementById(inputId);
  const inputFieldValue = parseFloat(inputField.value);

  return inputFieldValue;
};
const setResult = (elementId, area) => {
  document.getElementById(elementId).innerText = area;
};

// Calculating the area of triangle.
const calculateTriangleArea = () => {
  // base
  const base = valueOfInputField("triangle-base");
  //   height
  const height = valueOfInputField("triangle-height");

  //   Area
  const area = 0.5 * base * height;

  // Showing result
  setResult("triangle-result", area);
};

// Calculating the area of rectangle.
const calculateRectangleArea = () => {
  const width = valueOfInputField("rectangle-w");
  const length = valueOfInputField("rectangle-l");

  // area
  const area = width * length;
  // showing result
  setResult("rectangle-result", area);
};

// Calculating the area of parallelogram
const calculateParallelogram = () => {
  const base = valueOfInputField("parallelogram-base");
  const height = valueOfInputField("parallelogram-height");

  // Area
  const area = base * height;
  // showing result
  setResult("parallelogram-result", area);
};

// Calculating the are of Rhombus
const calculateRhombus = () => {
  const d1 = valueOfInputField("rhombus-d1");
  const d2 = valueOfInputField("rhombus-d2");

  // Area
  const area = d1 * d2;

  // showing result
  setResult("rhombus-result", area);
};

// Calculating the result of pentagon

const calculatePentagon = () => {
  const pentagonPerimeter = valueOfInputField("pentagon-p");
  const base = valueOfInputField("pentagon-base");

  // Area
  const area = pentagonPerimeter * base;

  // showing result
  setResult("pentagon-result", area);
};

// Calculating the result of ellipse

const calculateEllipse = () => {
  const ellipseMajor = valueOfInputField("semi-major");
  const ellipseMinor = valueOfInputField("semi-minor");

  // Area
  const area = 3.1416 * ellipseMajor * ellipseMinor;
  // Showing result
  setResult("ellipse-result", area);
};
