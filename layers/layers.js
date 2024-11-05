var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Granja_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Granja",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Granja_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9059016.885932, 1501410.741527, -9058738.709548, 1501719.361257]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Granja_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Granja_1];
