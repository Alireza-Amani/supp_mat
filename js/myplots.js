let csvstring = "";
let csv_path = "datasets/sites_info.json";
let map_data = Array();
let lats = Array();
let longs = Array();
let site_id = Array();
let site_days = Array();
let site_climate = Array();
let custom_data = { days: site_days };
let a1 = 2;

// variables for plotly
let data = Array();
let layout = {};

let promise_1 = new Promise((resolve, reject) => {
  $ajaxUtils.sendGetRequest(csv_path, function (request) {
    csvstring = request.responseText;
    resolve(csvstring);
  });
});

promise_1.then(() => {
  // map_data = Papa.parse(csvstring).data;
  map_data = JSON.parse(csvstring);

  for (let i1 = 0; i1 < map_data.length; i1++) {
    site_id[i1] = map_data[i1]["ID"];
    site_days[i1] = map_data[i1]["days"];
    lats[i1] = map_data[i1]["latitude"];
    longs[i1] = map_data[i1]["longitude"];
    site_climate[i1] = map_data[i1]["Koppen_2"];
  }

  // scatter map
  data = [
    {
      type: "scattergeo",
      mode: "markers",
      text: site_id,
      customdata: site_days,
      meta: site_climate,
      hovertemplate:
        "Site ID: %{text}<extra></extra><br> Days: %{customdata} <br> Climate: %{meta}",
      lon: longs,
      lat: lats,
      marker: {
        size: 6,
        color: "#000000",
        line: {
          width: 1,
        },
      },
      // name: "FLUXNET sites",
      textposition: [
        "top right",
        "top left",
        "top center",
        "bottom right",
        "top right",
        "top left",
        "bottom right",
        "bottom left",
        "top right",
        "top right",
      ],
    },
  ];

  layout = {
    title: false,
    autosize: true,
    // height: 1000,
    // width: 1000,
    margin: {
      autoexpand: false,
      l: 5,
      r: 5,
      b: 0,
      t: 0,
      pad: 4,
    },
    // paper_bgcolor: "#000000",
    font: {
      family: "Droid Serif, serif",
      size: 10,
    },
    titlefont: {
      size: 26,
    },
    geo: {
      scope: "world",
      resolution: 110,
      lonaxis: {
        range: [-180, 180],
      },
      lataxis: {
        range: [-90, 90],
      },

      showrivers: true,
      rivercolor: "#fff",
      showlakes: true,
      lakecolor: "#fff",
      showland: true,
      landcolor: "#EAEAAE",
      countrycolor: "#d3d3d3",
      countrywidth: 1.5,
      subunitcolor: "#d3d3d3",
    },
  };
});

//
//
//
// input variables for each experiment
let inputvars_mainExperiment = {
  invar_names: [
    "Net Radiation",
    "Specific Humidity",
    "Air temperature",
    "NDVI",
    "LAI",
    "Vapor Pressure Deficit",
    "Soil Moisture",
    "Atmospheric Pressure",
  ],
  importance_score: [
    0.306, 0.1754, 0.1129, 0.0999, 0.0971, 0.0856, 0.0694, 0.0535,
  ],
};

var data_hbarplot_inputvar_mainExp = [
  {
    type: "bar",
    orientation: "h",
    x: inputvars_mainExperiment.importance_score,
    y: inputvars_mainExperiment.invar_names,
  },
];

var layout_hbarplot_inputvar_mainExp = {
  xaxis: {
    title: "Importance Score",
    titlefont: {
      size: 30,
    },
    tickfont: {
      size: 20,
    },
  },
  yaxis: {
    autorange: "reversed",
    tickfont: {
      size: 20,
    },
  },
  autosize: false,
  height: 800,
  width: 1200,

  margin: {
    autoexpand: false,
    l: 245,
    r: 5,
    b: 120,
    t: 100,
    pad: 5,
  },
};

var config_hbarplot_inputvar_mainExp = {
  responsive: true,
};

// ------------ *********      YOO HAH HAHAHAH
// input vars for vegetation robustness experiment
let inputvars_vegetationExperiment = {
  invar_names: [
    "Net Radiation",
    "Air temperature",
    "LAI",
    "Vapor Pressure Deficit",
    "Specific Humidity",
    "Atmospheric Pressure",
    "Soil Moisture",
    "NDVI",
  ],
  importance_score: [
    0.3147, 0.166, 0.1256, 0.1163, 0.1075, 0.0625, 0.0556, 0.0515,
  ],
};

var data_hbarplot_inputvar_vegetationExp = [
  {
    type: "bar",
    orientation: "h",
    x: inputvars_vegetationExperiment.importance_score,
    y: inputvars_vegetationExperiment.invar_names,
  },
];

// input vars for climate robustness experiment
let inputvars_climateExperiment = {
  invar_names: [
    "Net Radiation",
    "LAI",
    "Air temperature",
    "Vapor Pressure Deficit",
    "NDVI",
    "Soil Moisture",
    "Specific Humidity",
    "Atmospheric Pressure",
  ],
  importance_score: [
    0.3202, 0.1516, 0.1382, 0.0909, 0.0839, 0.083, 0.0787, 0.0532,
  ],
};

var data_hbarplot_inputvar_climateExp = [
  {
    type: "bar",
    orientation: "h",
    x: inputvars_climateExperiment.importance_score,
    y: inputvars_climateExperiment.invar_names,
  },
];

// input vars for temporal separation experiment
let inputvars_temporalExperiment = {
  invar_names: [
    "Net Radiation",
    "Specific Humidity",
    "Air temperature",
    "NDVI",
    "LAI",
    "Soil Moisture",
    "Vapor Pressure Deficit",
    "Relative Humidity",
    "Atmospheric Pressure",
    "Wind Speed",
    "is_Arid",
    "is_Forest",
  ],
  importance_score: [
    0.3393, 0.1429, 0.0974, 0.0839, 0.0755, 0.062, 0.058, 0.0471, 0.0402,
    0.0291, 0.0131, 0.0112,
  ],
};

var data_hbarplot_inputvar_temporalExp = [
  {
    type: "bar",
    orientation: "h",
    x: inputvars_temporalExperiment.importance_score,
    y: inputvars_temporalExperiment.invar_names,
  },
];




