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
