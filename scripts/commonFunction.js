const valueOfInputField = (inputId) => {
  const inputField = document.getElementById(inputId);
  const inputFieldValue = parseFloat(inputField.value);

  return inputFieldValue;
};
const setResult = (elementId, area) => {
  document.getElementById(elementId).innerText = area;
};

const allArea = (formula, setInput) => {
  // Area
  const area = formula;
  // showing result
  setResult(setInput, area);
};

const calculateTriangleArea = () => {
  const formula =
    0.5 *
    valueOfInputField("triangle-base") *
    valueOfInputField("triangle-height");
  allArea(formula, "triangle-result");
};
const calculateRectangleArea = () => {
  const formula =
    valueOfInputField("rectangle-w") * valueOfInputField("rectangle-l");
  allArea(formula, "rectangle-result");
};
const calculateParallelogram = () => {
  const formula =
    valueOfInputField("parallelogram-base") *
    valueOfInputField("parallelogram-height");
  allArea(formula, "parallelogram-result");
};
const calculateRhombus = () => {
  const formula =
    0.5 * valueOfInputField("rhombus-d1") * valueOfInputField("rhombus-d2");
  allArea(formula, "rhombus-result");
};

const calculatePentagon = () => {
  const formula =
    0.5 * valueOfInputField("pentagon-p") * valueOfInputField("pentagon-base");
  allArea(formula, "pentagon-result");
};
const calculateEllipse = () => {
  const formula =
    3.1416 * valueOfInputField("semi-major") * valueOfInputField("semi-minor");
  allArea(formula, "ellipse-result");
};
