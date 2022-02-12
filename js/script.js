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

  $("input:radio").on("change", function (e) {
    if (e.currentTarget.name === "experiment_hyperparam") {
      experiment_radio = e.currentTarget.value;
      console.log(experiment_radio);
    } else {
      model_radio = e.currentTarget.value;
      console.log(model_radio);
    }
    console.log("Frank God Sinatra");
    if (experiment_radio === "Main") {
      if (model_radio === "RF") {
        $("#main_rf_hyperparams").show();
        $("#codes_hyperparameter pre").not("#main_rf_hyperparams").hide();
        console.log(model_radio + " " + experiment_radio);
      } else if (model_radio === "LGBM") {
        $("#main_lgbm_hyperparams").show();
        $("#codes_hyperparameter pre").not("#main_lgbm_hyperparams").hide();
        console.log(model_radio + " " + experiment_radio);
      }
    } else if (experiment_radio === "Vegetation Robustness") {
      if (model_radio === "RF") {
        $("#vegetation_rf_hyperparams").show();
        $("#codes_hyperparameter pre").not("#vegetation_rf_hyperparams").hide();
        console.log(model_radio + " " + experiment_radio);
      } else if (model_radio === "LGBM") {
        $("#vegetation_lgbm_hyperparams").show();
        $("#codes_hyperparameter pre")
          .not("#vegetation_lgbm_hyperparams")
          .hide();
        console.log(model_radio + " " + experiment_radio);
      }
    } else if (experiment_radio === "Climate Robustness") {
      if (model_radio === "RF") {
        $("#climate_rf_hyperparams").show();
        $("#codes_hyperparameter pre").not("#climate_rf_hyperparams").hide();
        console.log(model_radio + " " + experiment_radio);
      } else if (model_radio === "LGBM") {
        $("#climate_lgbm_hyperparams").show();
        $("#codes_hyperparameter pre").not("#climate_lgbm_hyperparams").hide();
        console.log(model_radio + " " + experiment_radio);
      }
    } else {
      if (model_radio === "RF") {
        $("#temporal_rf_hyperparams").show();
        $("#codes_hyperparameter pre").not("#temporal_rf_hyperparams").hide();
        console.log(model_radio + " " + experiment_radio);
      } else if (model_radio === "LGBM") {
        $("#temporal_lgbm_hyperparams").show();
        $("#codes_hyperparameter pre").not("#temporal_lgbm_hyperparams").hide();
        console.log(model_radio + " " + experiment_radio);
      }
    }
  });
}); // end of DOMloaded

// ************** hyperparameter section
let experiment_radio = "";
let model_radio = "";
let radio_buttons = undefined;
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
