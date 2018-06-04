// function initMap() {
//     var options = {
//         zoom: 13,
//         center: {
//             lat: 43.1236,
//             lng: -79.1989
//         }
//     }
//     var map = new google.maps.Map(document.querySelector('#map'), options);

// }
///////////////////////////////////////////////////
// var map = document.querySelector('#map');

var leafyMap = L.map('map').setView([51.505, -0.09], 13);

// var geojsonLayer = L.geoJSON(thorold);
// geojsonLayer.addTo(map);
///////////////////////////////////////////////////



var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

// L.marker([51.5, -0.09]).addTo(mymap);

// L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

// L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);