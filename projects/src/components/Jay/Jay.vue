<template>
  <div id="mapCanvas">
    This is the Campuses page.
  </div>
</template>

<script>
export default {
  name: 'campus',
  data() {
    return {
      campuses: [
        {
          name: "Auckland",
          position: { lat: -36.856864, lng: 174.764417 }
        },
        {
          name: "Christchurch",
          position: { lat: -43.520430, lng: 172.567893 }
        },
        {
          name: "Wellington",
          position: { lat: -41.279016, lng: 174.780304 }
        }
      ],
      //set up map - NZ
      mapConfig: {
        center: { lat: -40.9006, lng: 174.8860 },
        zoom: 12,
        styles: [
          {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
              {
                "hue": "#ff6800"
              },
              {
                "saturation": "20"
              },
              {
                "lightness": "-8"
              },
              {
                "gamma": "1.00"
              },
              {
                "weight": "1.12"
              }
            ]
          }
        ]
      }

    }
  },
  methods: {
    initMap: function() {
      var map = new google.maps.Map(document.getElementById('mapCanvas'), this.mapConfig),
        //create the Places service
        service = new google.maps.places.PlacesService(map);

      //perform a nearby search
      service.nearbySearch({
        location: { lat: -40.9006, lng: 174.8860 },
        radius: 500
      }, callback);
    },

    callback: function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        createMarker(results);
      }
    },

    createMarker: function(campuses) {
      for (var i = 0, campus; campus = campuses[i]; i++) {
        var image = {
          url: campus.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        var marker = new google.maps.Marker({
          map: map,
          icon: image,
          title: campus.name,
          position: campus.geometry.location
        });
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mapCanvas {
  height: 100%;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
