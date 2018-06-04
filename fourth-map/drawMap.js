mapboxgl.accessToken = 'pk.eyJ1Ijoibm1hc3RyYWNjaSIsImEiOiJjamkwanM3ZTkxOHl1M2twZGtxbXlkbHVhIn0.8FA150ofp_Ai4ANsDpYlDg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-79.21923637390137,
        43.1227879169323
    ],
    zoom: 15,
    interactive: false,
    pitch: 45,
    localIdeographFontFamily: 'Raleway',
    collectResourceTiming: true
});

map.on('load', function () {
    map.addSource("Thorold", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-79.22266960144043,
                                    43.1244480399358
                                ],
                                [-79.22086715698242,
                                    43.12209879603942
                                ],
                                [-79.21923637390137,
                                    43.1227879169323
                                ],
                                [-79.21550273895262,
                                    43.122913210806125
                                ],
                                [-79.21567440032959,
                                    43.12696946134016
                                ],
                                [-79.22266960144043,
                                    43.1244480399358
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-79.21633958816528,
                            43.12180904970972
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-79.22316312789917,
                            43.12280357868055
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-79.22273397445677,
                            43.12086149132032
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-79.22168254852295,
                            43.1202506607777
                        ]
                    }
                }
            ]
        }
    });
    //BUILDINGS 
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
                "interpolate", ["linear"],
                ["zoom"],
                15, 0,
                15.05, ["get", "height"]
            ],
            'fill-extrusion-base': [
                "interpolate", ["linear"],
                ["zoom"],
                15, 0,
                15.05, ["get", "min_height"]
            ],
            'fill-extrusion-opacity': .6
        }
    }, labelLayerId);

    //GENERIC AREA
    map.addLayer({
        "id": "Neighbourhood",
        "type": "fill",
        "source": "Thorold",
        "paint": {
            "fill-color": "#555",
            "fill-opacity": 0.5
        },
        "filter": ["==", "$type", "Polygon"]
    });

    //POINTS
    map.addLayer({
        "id": "Monsignor Clancy School",
        "type": "circle",
        "source": "Thorold",
        "paint": {
            "circle-color": "#C965FF",
            "circle-radius": 6
        },
        "filter": ["==", "$type", "Point"],

    });

    //ADDING MOVING COW    
    let lat = -79.2234206199646;
    let lng = 43.12563828907712;
    let pointLat = -79.22168254852295;
    let pointLng = 43.1202506607777;

    map.addSource('littleCow', {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [lat, lng]
            }
        }
    });


    setInterval(() => {
        lat += 0.00002;
        lng += -0.00004;


        map.getSource('littleCow').setData({
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [lat, lng]
            }
        });

    }, 1500);
    setInterval(() => {
        pointLat += 0.00005;
        pointLng += 0.00005;

        map.getSource('thorold').setData({
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [pointLat, pointLng]
            }
        });
    }, 1000);

    map.addLayer({
        "id": "moving point",
        "source": "littleCow",
        "type": "circle",
        "paint": {
            "circle-color": "#E80CC8",
            "circle-radius": 10
        },
        "panBy": {
            "duration": 1000,
            "animate": true,
            "offset": [-79.22168254852295,
                43.1202506607777
            ]
        }
    });


});