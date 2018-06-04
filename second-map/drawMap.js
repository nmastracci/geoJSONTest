function initMap() {
    var options = {
        zoom: 13,
        center: {
            lat: 43.1236,
            lng: -79.1989
        }
    }
    var map = new google.maps.Map(document.querySelector('#map'), options);

}