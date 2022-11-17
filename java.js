let InputBox = document.getElementById("inputBox");
let Output = document.getElementById("output");
let num;

function InputFields(t) {
  InputBox.innerHTML = "";
  num = parseInt(t.value);
  for (let i = 0; i < num; i++) {
    for (let i = 0; i < num; i++) {
      InputBox.innerHTML += "<input class='valueInput' />";
    }
    InputBox.innerHTML += "<br/>";
  }
}

function UserInputMatrix() {
  let Inputs = document.getElementsByClassName("valueInput");
  let InputValues = [];
  let Matrix = [];
  for (const element of Inputs) {
    InputValues.push(parseInt(element.value));
  }
  while (InputValues.length) Matrix.push(InputValues.splice(0, num));
  return Matrix;
}

function Calculation_TransitiveClosure() {
  let graph = UserInputMatrix();
  let result = [graph];

  for (let k = 0; k < num; k++) {
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        result[i][j] = result[i][j] || (result[i][k] && result[k][j]);
      }
    }
  }
  Output.innerHTML = "";
  for (const element of result) {
    for (let j = 0; j < result.length; j++) {
      Output.innerHTML += element[j];
    }
    Output.innerHTML += "<br/>";
  }
}
