let serial = 0;

// triangle
document
  .getElementById("triangleCalculate")
  .addEventListener("click", function () {
    serial += 1;

    const productName = document.getElementById("title-1").innerText;

    const firstInputTriangleField = getFirstInputFieldValueById("first-input");

    const secondInputTriangleField =
      getSecondInputFieldValueById("second-input");

    const totalPrice = 0.5 * firstInputTriangleField * secondInputTriangleField;
    if (isNaN(totalPrice) || totalPrice <= 0 || totalPrice == "") {
      alert("please provide a valid number");
      return;
    }
    areaCalculation(productName, totalPrice.toFixed(2));
  });

// rectangle
document
  .getElementById("rectangleCalculate")
  .addEventListener("click", function () {
    serial += 1;

    const productName = document.getElementById("title-2").innerText;

    const firstInputTriangleField = getFirstInputFieldValueById(
      "Rectangle-first-input"
    );

    const secondInputTriangleField = getSecondInputFieldValueById(
      "Rectangle-second-input"
    );

    const totalPrice = firstInputTriangleField * secondInputTriangleField;
    if (isNaN(totalPrice) || totalPrice <= 0 || totalPrice == "") {
      alert("please provide a valid number");
      return;
    }
    areaCalculation(productName, totalPrice.toFixed(2));
  });

//Parallelogram
document
  .getElementById("parallelogramCalculate")
  .addEventListener("click", function () {
    serial += 1;

    const productName = document.getElementById("title-3").innerText;

    const firstElementParallelogram = getFirstElementValueById(
      "parallelogram-first-value"
    );

    const secondElementParallelogram = getSecondElementValueById(
      "parallelogram-second-value"
    );
    const totalPrice = firstElementParallelogram * secondElementParallelogram;

    areaCalculation(productName, totalPrice.toFixed(2));
  });
// Rhombus
document
  .getElementById("rhombusCalculate")
  .addEventListener("click", function () {
    serial += 1;

    const productName = document.getElementById("title-4").innerText;

    const firstElementRhombus = getFirstElementValueById("rhombus-first-value");

    const secondElementRhombus = getSecondElementValueById(
      "rhombus-second-value"
    );
    const totalPrice = 0.5 * firstElementRhombus * secondElementRhombus;

    areaCalculation(productName, totalPrice.toFixed(2));
  });

// Pentagon
document
  .getElementById("pentagonCalculate")
  .addEventListener("click", function () {
    serial += 1;

    const productName = document.getElementById("title-5").innerText;

    const firstElementPentagon = getFirstElementValueById(
      "pentagon-first-value"
    );

    const secondElementPentagon = getSecondElementValueById(
      "pentagon-second-value"
    );
    const totalPrice = 0.5 * firstElementPentagon * secondElementPentagon;

    areaCalculation(productName, totalPrice.toFixed(2));
  });

// Ellipse
document
  .getElementById("ellipseCalculate")
  .addEventListener("click", function () {
    serial += 1;

    const productName = document.getElementById("title-6").innerText;

    const firstElementPentagon = getFirstElementValueById(
      "ellipse-first-value"
    );

    const secondElementPentagon = getSecondElementValueById(
      "ellipse-second-value"
    );
    const totalPrice = 3.14 * firstElementPentagon * secondElementPentagon;
    areaCalculation(productName, totalPrice.toFixed(2));
  });
// blog
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});
