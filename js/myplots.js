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
