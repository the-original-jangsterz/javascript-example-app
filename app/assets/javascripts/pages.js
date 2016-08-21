function initMap() {
  var locations = [
    {lat: -25.363, lng: 131.044, title: 'Uluru', description: 'This is a place in Australia.'},
    {lat: 0, lng: 0, title: 'Prime Meridian', description: 'This is the center of the world.'},
    {lat: 26.212, lng: 127.680, title: 'Okinawa', description: 'This is an island off the coast of Japan.'}
  ];
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: locations[0]
  });

  for (var i = 0; i < locations.length; i++) {
    addMarker(locations[i]);
  }

  function addMarker(location) {
    var infowindow = new google.maps.InfoWindow({
      content: location.description
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: location.title
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
}


