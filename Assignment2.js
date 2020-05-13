mapboxgl.accessToken = "pk.eyJ1IjoiZGxtNTg5IiwiYSI6ImNrNTg5NmFrMjBjYWEzbm80dTk2bzVvcTQifQ.uSqt_zKktbLWt-5D9mIbSg";
var map = new mapboxgl.Map({
   container: "map",  //container id in HTML
   style: "mapbox://styles/dlm589/ck6tfgu6n4idu1io9znelasuo",  //stylesheet location
   center: [-79.3853,43.644],  // specify where the starting point is, longitude/latitude43° 39" 3.8520"" N and 79° 20" 49.2540"
   zoom: 15, // starting zoom level
   pitch: 75,
   bearing: -18,
   antialias: true
});

map.on("load", function(){
  // Insert the layer beneath any symbol layer.
      var layers = map.getStyle().layers;
      var layersLabel;
      for (var i = 0; i < layers.length; i++)
      {
        if (layers[i].type === "symbol" && layers[i].layout["text-field"])
        {
          layersLabel = layers[i].id;
          break;
      }
  }
map.addSource(
    "ZoningHeight",
    {
        "type" : "vector",
        "url" : "mapbox://dlm589.4dt6xcpi"
    });


map.addLayer({ // adding the building layer from the map
    "id": "3D-buildings",
    "source": "composite",
    "source-layer": "building",
    "filter": ["==","extrude","true"],
    "type": "fill-extrusion",
    "minzoom": 15,
    "paint":
    {
      "fill-extrusion-color":
      [
        "interpolate",
        ["linear"],
        ["get", "height"],
        0,"#fcfbfd",16.404199475,"#efedf5",
        32.80839895,"#dadaeb",65.6167979,"#bcbddc",
        131.2335958,"#9e9ac8",229.65879265,"#807dba",
        295.27559055,"#6a51a3",393.7007874,"#54278f",
        984.2519685,"#3f007d" //unit is in feet
      ], //set building colour
      "fill-extrusion-height": // set the variable that will determine the building heights
      [
          "interpolate",
          ["linear"],
          ["zoom"],
          3,
          ["get", "height"]
      ]
    }

  },layersLabel);
  map.addLayer({ //adding the zoning layer to see which buildings are taller than the zoned height (Section 37)
      "id": "ZoningHeight_3D",
      "source": "ZoningHeight",
      "source-layer": "ZoningHeight-6qg10t",
      "type": "fill-extrusion",
      "paint":
      {
        "fill-extrusion-color":
        [
            "interpolate", ["linear"],["get","HT_HEIGHT"],
            5,"#a50f15",10,"#de2d26",35,"#fb6a4a",55,"#fc9272",70,"#fcbba1",100,"#fee5d9"

        ], //set building colour
        "fill-extrusion-height":["get","HT_HEIGHT"],
        "fill-extrusion-opacity": 0.7
      }
  },layersLabel);

});
