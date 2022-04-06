let data = [
  ["lindi", 90],
  ["mardi", 78],
  ["mercredi", 35],
  ["jeudi", 60],
  ["vendredi", 15],
  ["samedi", 50],
  ["dimanch", 80],
];

window.onload = function() {
  const inputs = document.querySelectorAll("input").forEach((input, index) => {input.value = data[index][1]})
}

function drow() {
  var dataSet = anychart.data.set(getData());
  var seriesData = dataSet.mapAs({ x: 0, value: 1 });
  // create a line chart
  var chart = anychart.line();
  // configure the chart title text settings
  chart.title(
    "histogramme des personnes ayant trouvé un stage dans la semaine "
  );
  // set the y axis title
  chart.yAxis().title("% des personnes qui trouvent un stage ");

  // create a line series with the mapped data
  var lineChart = chart.line(seriesData);
  // set the container id for the line chart
  chart.container("container");
  // draw the line chart

  chart.draw();
}

let changeData = (e) => {
  let value = e.target.value;
  let day = e.target.name;
  data.map((data) => {
    if (data[0] == day) {
      data[1] = parseInt(value);
    }
  });

  document.querySelector("#container").innerHTML = "";
  drow();
};

function getData() {
  let input = document.querySelector("tbody");
  input.addEventListener("change", changeData);
  console.log(input);
  return data;
}

drow();
