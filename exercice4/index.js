
let timeouotId;
function start() {
  let str = document.querySelector("#string").value;
  str = str.split("");
  timeouotId = setInterval(function () {
    var char = str.pop();
    str = [char, ...str];
    display.innerHTML += "<h3> [ "+str+" ] </h3>";
    console.log(str);
  }, 1000);
}
