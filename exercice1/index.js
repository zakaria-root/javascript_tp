
function featchAttribut() {
  let rows = document.querySelector("#rows").value;
  let cols = document.querySelector("#cols").value;
  // window.location.href = `./table.html`;
  // console.log("row: " + rows + " cols  = " + cols);
  let display = document.querySelector("#display");
  display.innerHTML = makeTable(rows, cols);
}

function makeTable(rows, cols) {
  let table = "<table class='table table-striped ' border=1 >";
  for (let index1 = 0; index1 < rows; index1++) {
    table += "<tr>";
    for (let index2 = 0; index2 < cols; index2++) {
      table += "<td>" + index1 + " " + index2 + "</td>";
    }
    table += "</tr>";
  }
  table += "</table>";
  return table;
}
