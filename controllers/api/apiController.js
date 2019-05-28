var request = require('request');

module.exports = {
   initMap
};

var map;
function initMap(req, res) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

