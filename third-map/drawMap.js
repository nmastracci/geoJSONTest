mapboxgl.accessToken = 'pk.eyJ1Ijoibm1hc3RyYWNjaSIsImEiOiJjamkwanM3ZTkxOHl1M2twZGtxbXlkbHVhIn0.8FA150ofp_Ai4ANsDpYlDg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-79.21923637390137,
        43.1227879169323
    ],
    zoom: 15
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

    map.addSource('littleCow', {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [-79.2234206199646,
                    43.12563828907712
                ]
            }
        }
    });

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