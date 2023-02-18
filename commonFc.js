// Triangle and Rectangle function

function getFirstInputFieldValueById(firstInputFieldId) {
  const inputField = document.getElementById(firstInputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

function getSecondInputFieldValueById(secondInputFieldId) {
  const secondInputField = document.getElementById(secondInputFieldId);

  const secondInputFieldString = secondInputField.value;
  const secondInputFieldValue = parseFloat(secondInputFieldString);
  secondInputField.value = "";
  return secondInputFieldValue;
}

//   Parallelogram,Rhombus, Pentagon,Ellipse function
function getFirstElementValueById(firstElementId) {
  const firstElement = document.getElementById(firstElementId);
  const firstElementString = firstElement.innerText;
  const firstElementValue = parseFloat(firstElementString);
  return firstElementValue;
}
function getSecondElementValueById(secondElementId) {
  const secondElement = document.getElementById(secondElementId);
  const secondElementString = secondElement.innerText;
  const secondElementValue = parseFloat(secondElementString);
  return secondElementValue;
}

//   all areaCalculation

function areaCalculation(names, total) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${serial} </td>
      <td>${names}</td>
      <td>${total}cm<sup>2</sup></td>
      <td>
      <button class="btn btn-sm btn-red-500" >Square</button>
      </td>
  
  `;
  container.appendChild(tr);
}
// mouse hover color

let color = [
  "#3C9EE7",
  "#E7993C",
  "#a21caf",
  "#67e8f9",
  "#E73C99",
  "#7e22ce",
  "#be123c",
  "#3CE746",
  "#3f6212",
  "#E7993C",
  "#34d399",
  "#78350f",
];
let colors = ["#ffff"];
// cards-1
document.getElementById("card-1").addEventListener("mouseenter", function () {
  document.getElementById("card-1").style.background =
    color[Math.floor(Math.random() * color.length)];
});
document.getElementById("card-1").addEventListener("mouseleave", function () {
  document.getElementById("card-1").style.background =
    colors[Math.floor(Math.random() * colors.length)];
});
// card-2

document.getElementById("card-2").addEventListener("mouseenter", function () {
  document.getElementById("card-2").style.background =
    color[Math.floor(Math.random() * color.length)];
});
document.getElementById("card-2").addEventListener("mouseleave", function () {
  document.getElementById("card-2").style.background =
    colors[Math.floor(Math.random() * colors.length)];
});
// card-3
document.getElementById("card-3").addEventListener("mouseenter", function () {
  document.getElementById("card-3").style.background =
    color[Math.floor(Math.random() * color.length)];
});
document.getElementById("card-3").addEventListener("mouseleave", function () {
  document.getElementById("card-3").style.background =
    colors[Math.floor(Math.random() * colors.length)];
});

// card-4

document.getElementById("card-4").addEventListener("mouseenter", function () {
  document.getElementById("card-4").style.background =
    color[Math.floor(Math.random() * color.length)];
});
document.getElementById("card-4").addEventListener("mouseleave", function () {
  document.getElementById("card-4").style.background =
    colors[Math.floor(Math.random() * colors.length)];
});
// card-5
document.getElementById("card-5").addEventListener("mouseenter", function () {
  document.getElementById("card-5").style.background =
    color[Math.floor(Math.random() * color.length)];
});
document.getElementById("card-5").addEventListener("mouseleave", function () {
  document.getElementById("card-5").style.background =
    colors[Math.floor(Math.random() * colors.length)];
});
// card-6
document.getElementById("card-6").addEventListener("mouseenter", function () {
  document.getElementById("card-6").style.background =
    color[Math.floor(Math.random() * color.length)];
});
document.getElementById("card-6").addEventListener("mouseleave", function () {
  document.getElementById("card-6").style.background =
    colors[Math.floor(Math.random() * colors.length)];
});

