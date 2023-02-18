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
