
var map;
var userLocale = { lat: 37.7749, lng: -122.431297 };
var markerLocation = null;
function initMap(req, res) {
   map = new google.maps.Map(document.getElementById('map'), {
      center: userLocale,
      zoom: 9,
      mapTypeId: 'hybrid'
   });
   var marker = new google.maps.Marker({ position: userLocale, map: map, draggable: true });
   markerLocation = marker.position;
   google.maps.event.addListener(map, 'click', function(event) {
      placeMarker(event.latLng);
   });
   
   function placeMarker(location) {
       marker.setPosition(location);
       map.panTo(location);
       markerLocation = location;
   }
   
}
