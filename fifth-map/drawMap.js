mapboxgl.accessToken = 'pk.eyJ1Ijoibm1hc3RyYWNjaSIsImEiOiJjamkwanM3ZTkxOHl1M2twZGtxbXlkbHVhIn0.8FA150ofp_Ai4ANsDpYlDg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-81.25162124633789,
        42.98206224605642
    ],
    zoom: 16,
    // interactive: false,
    pitch: 47,
    localIdeographFontFamily: 'Raleway',
    collectResourceTiming: true
});

map.on('load', function () {
    map.addSource("London", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-81.24825239181519,
                            42.98261166410607
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-81.25162124633789,
                            42.98206224605642
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [-81.25022649765015,
                                    42.98495056028901
                                ],
                                [-81.24960422515869,
                                    42.983757577381226
                                ],
                                [-81.24765157699585,
                                    42.98432267743389
                                ],
                                [-81.24823093414307,
                                    42.985499952526624
                                ],
                                [-81.25022649765015,
                                    42.98495056028901
                                ]
                            ]
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
        "source": "London",
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
        "source": "London",
        "paint": {
            "circle-color": "#C965FF",
            "circle-radius": 6
        },
        "filter": ["==", "$type", "Point"],

    });

    //ADDING MOVING COW    
    // let lat = -79.2234206199646;
    // let lng = 43.12563828907712;
    // let pointLat = -79.22168254852295;
    // let pointLng = 43.1202506607777;

    // map.addSource('littleCow', {
    //     "type": "geojson",
    //     "data": {
    //         "type": "Feature",
    //         "properties": {},
    //         "geometry": {
    //             "type": "Point",
    //             "coordinates": [lat, lng]
    //         }
    //     }
    // });


    // setInterval(() => {
    //     lat += 0.00002;
    //     lng += -0.00004;


    //     map.getSource('littleCow').setData({
    //         "type": "Feature",
    //         "properties": {},
    //         "geometry": {
    //             "type": "Point",
    //             "coordinates": [lat, lng]
    //         }
    //     });

    // }, 1500);
    // setInterval(() => {
    //     pointLat += 0.00005;
    //     pointLng += 0.00005;

    //     map.getSource('thorold').setData({
    //         "type": "Feature",
    //         "properties": {},
    //         "geometry": {
    //             "type": "Point",
    //             "coordinates": [pointLat, pointLng]
    //         }
    //     });
    // }, 1000);

    // map.addLayer({
    //     "id": "moving point",
    //     "source": "littleCow",
    //     "type": "circle",
    //     "paint": {
    //         "circle-color": "#E80CC8",
    //         "circle-radius": 10
    //     },
    //     "panBy": {
    //         "duration": 1000,
    //         "animate": true,
    //         "offset": [-79.22168254852295,
    //             43.1202506607777
    //         ]
    //     }
    // });


});