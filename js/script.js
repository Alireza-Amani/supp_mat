// Event handling
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("#data_show_button").addEventListener("click", function () {
      console.log("Plotted")
      Plotly.newPlot("map_plotly", data, layout)
  });
});
