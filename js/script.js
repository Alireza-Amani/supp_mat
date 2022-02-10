// Event handling
document.addEventListener("DOMContentLoaded", function (event) {
  document
    .querySelector("#data_show_button")
    .addEventListener("click", function () {
      console.log("Plotted");
      Plotly.newPlot("map_plotly", data, layout);
    });

    $("#data_complete").focusout(function () {
    console.log("#data_complete lost focus!");
    $("#data_section").collapse("hide");
  });
  
});

// JQuerry
$(document).ready(function () {
  console.log("JQuery speaking");

  // $("#data_show_button").focus(function () {
  //   console.log("data button focused!");
  // });

  // $("#data_complete").focusout(function () {
  //   console.log("#data_complete lost focus!");
  //   $("#data_section").collapse("hide");
  // });
});
