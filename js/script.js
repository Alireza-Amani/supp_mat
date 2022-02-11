// Event handling
document.addEventListener("DOMContentLoaded", function (event) {
  document
    .querySelector("#data_show_button")
    .addEventListener("click", function () {
      Plotly.newPlot("map_plotly", data, layout);
    });

  document
    .querySelector("#button_mainExpinputvars_plot")
    .addEventListener("click", function () {
      Plotly.newPlot(
        "hbarplot_plotly",
        data_hbarplot_inputvar_mainExp,
        layout_hbarplot_inputvar_mainExp,
        config_hbarplot_inputvar_mainExp
      );
    });

  document
    .querySelector("#button_vegetationExpinputvars_plot")
    .addEventListener("click", function () {
      Plotly.newPlot(
        "hbarplot_plotly",
        data_hbarplot_inputvar_vegetationExp,
        layout_hbarplot_inputvar_mainExp,
        config_hbarplot_inputvar_mainExp
      );
    });

  document
    .querySelector("#button_climateExpinputvars_plot")
    .addEventListener("click", function () {
      Plotly.newPlot(
        "hbarplot_plotly",
        data_hbarplot_inputvar_climateExp,
        layout_hbarplot_inputvar_mainExp,
        config_hbarplot_inputvar_mainExp
      );
    });
  document
    .querySelector("#button_temporalExpinputvars_plot")
    .addEventListener("click", function () {
      Plotly.newPlot(
        "hbarplot_plotly",
        data_hbarplot_inputvar_temporalExp,
        layout_hbarplot_inputvar_mainExp,
        config_hbarplot_inputvar_mainExp
      );
    });

  // ************** hyperparameter section

  document
    .querySelectorAll('input[name="experiment_hyperparam"]')
    .forEach((elem) => {
      elem.addEventListener("change", function (event) {
        experiment_radio = event.target.value;
        console.log(experiment_radio);
      });
    });

  document
    .querySelectorAll('input[name="model_hyperparam"]')
    .forEach((elem) => {
      elem.addEventListener("change", function (event) {
        model_radio = event.target.value;
        console.log(model_radio);
      });
    });
}); // end of DOMloaded

let experiment_radio = "Main";
let model_radio = "RF";

// --------------------- ********
//
//
//
//

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
  // $("#data_complete").focusout(function () {
  //   console.log("data_complete Not focused");
  //   if ($(this).children(":mouseover").length == 0) {
  //     console.log("No Child focused");
  //     $("#data_section").collapse("hide");
  //   }
  // });

  // $("#data_section").collapse("hide");

  //
});
