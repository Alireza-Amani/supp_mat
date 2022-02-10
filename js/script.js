// Event handling
document.addEventListener("DOMContentLoaded", function (event) {
  document
    .querySelector("#data_show_button")
    .addEventListener("click", function () {
      console.log("Plotted");

      Plotly.newPlot(
        "map_plotly",
        data,
        layout
      );
    });

  // $("#data_complete").focusout(function () {
  //   console.log("data_complete Not focused");
  //   if ($(this).children(":mouseover").length == 0) {
  //     console.log("No Child focused");
  //     $("#data_section").collapse("hide");
  //   }
  // });

  // $("#data_section").collapse("hide");

  //
  Plotly.newPlot(
    "hbarplot_plotly",
    data_hbarplot_inputvar_mainExp,
    layout_hbarplot_inputvar_mainExp,
    config_hbarplot_inputvar_mainExp
  );
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
