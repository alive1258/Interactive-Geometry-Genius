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
    if (
      isNaN(totalPrice) ||
      totalPrice <= 0 ||
      totalPrice == "" ||
      totalPrice !== "number"
    ) {
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
    if (
      isNaN(totalPrice) ||
      totalPrice <= 0 ||
      totalPrice == "" ||
      totalPrice !== "number"
    ) {
      alert("please provide a valid number");
      return;
    }
    areaCalculation(productName, totalPrice.toFixed(2));
  });
