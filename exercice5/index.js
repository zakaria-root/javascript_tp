var display = false;
function displayTab(tab,element) {
  if (!display) {
    document.getElementById("list_element").className = "list_element";
    document.getElementById(tab).className = "";
    document.getElementById(element).style.borderBottom = 0;
  } else {
    document.getElementById("list_element").className = "hide_element";
    document.getElementById(tab).className = "hide_element";
    document.getElementById(element).style.borderBottom = '1px solid black';
  }
  display = !display;
}
