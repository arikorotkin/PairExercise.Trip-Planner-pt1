const mapboxgl = require("mapbox-gl");
const pinDown = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJpbWtkciIsImEiOiJjazZsanFubzUwY3JhM2RuMGExcXUwdXduIn0.8lND4AH6O4gZUuTUHj0d4A';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const createdPin = pinDown('restaurant', [-87.6354, 41.8885]);
console.log(createdPin);
new mapboxgl.Marker(createdPin[0]).setLngLat(createdPin[1]).addTo(map);

console.log('testing');