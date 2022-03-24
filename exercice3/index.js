let op;
let number = "";
let result = "";

// ----------------- initialisation ----------------

function setValue(g, v) {
  console.log("v = " + v);
  if (g == 2) {
    if (v == "=") {
      if (result != "") calculateResult();
      else result = number;
      displayResult(result);
      return;
    } else if (v == "CE") {
      return clearScreen();
    } else if (v == "C") {
      !isNaN(Number(number.charAt(number.length - 1))) ||
      number.charAt(number.length - 1) == "."
        ? (number = number.substring(0, number.length - 1))
        :'';
      (number =='') && (result = '');
    } else {
      op = v;
      if (result != "") calculateResult();
      else result = number;
      number = "";
    }
  } else {
    number += v;
  }
  // console.log("number " + number);
  // console.log("result " + result);
  displayValue(v);
  // console.log("op " + op);
}

// ------------------- insertion --------------------------

function deleteLastChar(str) {
  let newStr = str.substring(0, str.length - 1);
  document.querySelector("#display").innerHTML = newStr;
}
// ------------------ supprimer le deriner caracctaire ----------

function clearScreen() {
  let display = document.querySelector("#display");
  display.innerHTML = "|";
  op = "";
  number = "";
  result = "";
}

// ---------------------- effacer l'ecran ------------------------- 

function calculateResult() {
  if (op == "+") {
    result =  Number(result) + Number(number);
  } else if (op == "-") {
    result = Number(result) - Number(number);
  } else if (op == "*") {
    result = Number(result) * Number(number);
  } else if (op == "/") {
    result = Number(result) / Number(number);
  }
}

// -------------------------- calcule arithmetique ----------------------------

function displayResult(result) {
  let display = document.querySelector("#display");
  display.innerHTML = result;
}

function displayValue(value) {
  let display = document.querySelector("#display");

  value == "C"
    ? deleteLastChar(display.innerHTML)
    : (display.innerHTML += value);
}

// ----------------------------- affichage de resulta ---------------------------