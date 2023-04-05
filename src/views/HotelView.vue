<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibW9uaWs4MSIsImEiOiJjbGcybzh4bnMwN2U0M3JxZXViZjdnNTFxIn0.tYWCzzr1kZ6-D5eqnvYfTA';

export default {
  name: 'MapComponent',
  data() {
    return {
      map: null,
      coordinates: [
        [51.337776, 35.699444],
        [51.3570112, 35.6967472],
        [51.337776, 35.699444]
      ]
    };
  },
  mounted() {
    this.initMap();
    this.addMarkers();
  },
  methods: {
    initMap() {
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:   [51.337776, 35.699444],
        zoom: 14
      });
    },
    addMarkers() {
      this.coordinates.forEach(coord => {
        const el = document.createElement('div');
        el.className = 'marker';

        new mapboxgl.Marker(el)
          .setLngLat(coord)
          .addTo(this.map)
          .setPopup(new mapboxgl.Popup({ offset: 25 })
            .setHTML('<h3>Marker Popup</h3><p>This is a popup that opens when you click on a marker.</p>')
          );
      });
    }
  }
};

</script>

<style>
  #map {
    height: 300px;
    width: 100%;
    overflow: hidden;
  }

  .marker {
     position: relative;
  }
  .marker::after {
     content: "\f015";
     font-family: "Font Awesome 5 Free";
     position: absolute;
     top: 0;
    right: 0;
  }
  .mapboxgl-popup-content {
    background-color: #fff;
    padding: 20px;
  }
</style>


