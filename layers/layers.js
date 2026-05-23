var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Study_Area_1 = new ol.format.GeoJSON();
var features_Study_Area_1 = format_Study_Area_1.readFeatures(json_Study_Area_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Study_Area_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Study_Area_1.addFeatures(features_Study_Area_1);var lyr_Study_Area_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Study_Area_1, 
                style: style_Study_Area_1,
                title: '<img src="styles/legend/Study_Area_1.png" /> Study_Area'
            });var format_Sale_properties_2 = new ol.format.GeoJSON();
var features_Sale_properties_2 = format_Sale_properties_2.readFeatures(json_Sale_properties_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sale_properties_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Sale_properties_2.addFeatures(features_Sale_properties_2);var lyr_Sale_properties_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sale_properties_2, 
                style: style_Sale_properties_2,
                title: '<img src="styles/legend/Sale_properties_2.png" /> Sale_properties'
            });var format_Juliana_Park_3 = new ol.format.GeoJSON();
var features_Juliana_Park_3 = format_Juliana_Park_3.readFeatures(json_Juliana_Park_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Juliana_Park_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Juliana_Park_3.addFeatures(features_Juliana_Park_3);var lyr_Juliana_Park_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Juliana_Park_3, 
                style: style_Juliana_Park_3,
                title: '<img src="styles/legend/Juliana_Park_3.png" /> Juliana_Park'
            });var format_Trees_4 = new ol.format.GeoJSON();
var features_Trees_4 = format_Trees_4.readFeatures(json_Trees_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trees_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Trees_4.addFeatures(features_Trees_4);var lyr_Trees_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trees_4, 
                style: style_Trees_4,
                title: '<img src="styles/legend/Trees_4.png" /> Trees'
            });var format_Swimming_Pools_5 = new ol.format.GeoJSON();
var features_Swimming_Pools_5 = format_Swimming_Pools_5.readFeatures(json_Swimming_Pools_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Swimming_Pools_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Swimming_Pools_5.addFeatures(features_Swimming_Pools_5);var lyr_Swimming_Pools_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Swimming_Pools_5, 
                style: style_Swimming_Pools_5,
                title: '<img src="styles/legend/Swimming_Pools_5.png" /> Swimming_Pools'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Study_Area_1.setVisible(true);lyr_Sale_properties_2.setVisible(true);lyr_Juliana_Park_3.setVisible(true);lyr_Trees_4.setVisible(true);lyr_Swimming_Pools_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Study_Area_1,lyr_Sale_properties_2,lyr_Juliana_Park_3,lyr_Trees_4,lyr_Swimming_Pools_5];
lyr_Study_Area_1.set('fieldAliases', {'id': 'id', 'shape_area': 'shape_area', });
lyr_Sale_properties_2.set('fieldAliases', {'id': 'id', 'propertynu': 'propertynu', 'streetnumb': 'streetnumb', 'streetname': 'streetname', 'bedrooms': 'bedrooms', 'bathrooms': 'bathrooms', 'dining_roo': 'dining_roo', 'lounges': 'lounges', 'garages': 'garages', 'open_plan': 'open_plan', 'ownerid': 'ownerid', 'ownerfirst': 'ownerfirst', 'ownersurna': 'ownersurna', 'valyear': 'valyear', 'valuations': 'valuations', });
lyr_Juliana_Park_3.set('fieldAliases', {'id': 'id', });
lyr_Trees_4.set('fieldAliases', {'id': 'id', });
lyr_Swimming_Pools_5.set('fieldAliases', {'id': 'id', 'pool': 'pool', });
lyr_Study_Area_1.set('fieldImages', {'id': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Sale_properties_2.set('fieldImages', {'id': 'TextEdit', 'propertynu': 'TextEdit', 'streetnumb': 'TextEdit', 'streetname': 'TextEdit', 'bedrooms': 'TextEdit', 'bathrooms': 'TextEdit', 'dining_roo': 'TextEdit', 'lounges': 'TextEdit', 'garages': 'TextEdit', 'open_plan': 'TextEdit', 'ownerid': 'TextEdit', 'ownerfirst': 'TextEdit', 'ownersurna': 'TextEdit', 'valyear': 'TextEdit', 'valuations': 'TextEdit', });
lyr_Juliana_Park_3.set('fieldImages', {'id': 'Range', });
lyr_Trees_4.set('fieldImages', {'id': 'Range', });
lyr_Swimming_Pools_5.set('fieldImages', {'id': 'TextEdit', 'pool': 'TextEdit', });
lyr_Study_Area_1.set('fieldLabels', {'id': 'no label', 'shape_area': 'inline label', });
lyr_Sale_properties_2.set('fieldLabels', {'id': 'no label', 'propertynu': 'inline label', 'streetnumb': 'inline label', 'streetname': 'inline label', 'bedrooms': 'inline label', 'bathrooms': 'inline label', 'dining_roo': 'inline label', 'lounges': 'inline label', 'garages': 'inline label', 'open_plan': 'inline label', 'ownerid': 'inline label', 'ownerfirst': 'inline label', 'ownersurna': 'inline label', 'valyear': 'inline label', 'valuations': 'inline label', });
lyr_Juliana_Park_3.set('fieldLabels', {'id': 'no label', });
lyr_Trees_4.set('fieldLabels', {'id': 'no label', });
lyr_Swimming_Pools_5.set('fieldLabels', {'id': 'no label', 'pool': 'inline label', });
lyr_Swimming_Pools_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});