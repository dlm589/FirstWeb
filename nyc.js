mapboxgl.accessToken = 'pk.eyJ1IjoiZGxtNTg5IiwiYSI6ImNrNTg5NmFrMjBjYWEzbm80dTk2bzVvcTQifQ.uSqt_zKktbLWt-5D9mIbSg';

var map = new mapboxgl.Map({
  container: 'map', // container element id
  style: 'mapbox://styles/dlm589/ck9wcq6600bls1ipaosht6v2o',
  center: [-79.3853,43.664],  // specify where the starting point is, longitude/latitude43° 39" 3.8520"" N and 79° 20" 49.2540"
  bearing: -18,
  zoom: 11.5
});
/*
Now instead of following their way of dealing with the data, we need to create a new layer
 that will change symbol (i.e. from june to july) as we drag the time slider. therefore everytime
 we drag it across, we update the fields that gets displayed.
*/

map.on('load', function() {
      map.addSource("bikeUsage_source",{
        "type": 'vector',
        "url": 'mapbox://dlm589.byy3kmxa' // replace this with the url of your own geojson
      });
      map.addLayer({
        "id": 'bike',
        "type": 'circle',
        "source" : "bikeUsage_source",
        "source-layer": "BikeUsage2018-dnklw4",
        "paint": {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['to-number', ['get', 'BikeTrip_5']],
            10,2,
            50, 4,
            100, 6,
            150, 8,
            200, 14,
            400, 20,
            600, 24
          ],
          'circle-color': [
            'interpolate',
            ['linear'],
            ['to-number', ['get', 'BikeTrip_5']],
            0, '#d53e4f',
            5, '#fc8d59',
            10, '#fee08b',
            50, '#e6f598',
            100, '#99d594',
            500, '#3288bd'
          ],
          'circle-opacity': 0.8
        }
      });

      var day
      document.getElementById('filters').addEventListener('change', function(e) {
       day = e.target.value
        console.log(e.target.value)
        // update the map filter

        map.setFilter('bike', ['==', ['get', 'BikeTrip_4'], day]);
      });
      document.getElementById('slider').addEventListener('input', function(e) {
          var hour = parseInt(e.target.value);
          console.log("Hour is " + e.target.value);
          if (day == null)
          {
            var hourField = "Mon_" + hour;
            day = "Monday";
          }
          else {
            var hourField = day.slice(0,3) +"_" + hour;
          }
          // update the map
          map.setFilter('bike', ['==', ['get', 'BikeTrip_4'], hourField]);

          // converting 0-23 hour to AMPM format
          var ampm = hour >= 12 ? 'PM' : 'AM';
          var hour12 = hour % 12 ? hour % 12 : 12;

          // update text in the UI
          document.getElementById('active-hour').innerText = hour12 + ampm;
      });

});

// pop-up
var popup = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: false
  });
map.on("mouseenter","bike",function(e){
    map.getCanvas().style.cursor = "pointer"; //make the mouse cursor pointy
  });
map.on("mouseleave","bike",function(e){
    map.getCanvas().style.cursor = ""; //go back to the null cursor
  });
map.on("click", "bike", function(e){
  //if there is a feature there, do the following

  var day;
  if (features.length > 0){
      var feature = features[0]; //store the first element as 'feature'

      popup.setLngLat(e.lngLat); //place the popup window at the lng and lat where your click event happened
      //add stuff to the pop up:
      popup.setHTML("<b>Station Name: </b> <br>" + feature.properties.StationD_1 + "<br>" + //station id
                    "<hr> " +
                    "<b>Station ID: </b> " + feature.properties.StationDat + "<br>"+
                    "<b>Capacity: </b> " + feature.properties.StationD_4 + "<br>" + //this is station capacity
                    "<b>Day: </b> " + feature.properties.BikeTrip_2 + " (whole year) <br>" +
                    "<b>Ride Count: </b> " + feature.properties.BikeTrip_5);
      popup.addTo(map); //finally add the pop up to the map
  }
});


//hiistograms
