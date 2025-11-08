var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Departamento_1 = new ol.format.GeoJSON();
var features_Departamento_1 = format_Departamento_1.readFeatures(json_Departamento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamento_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_1.addFeatures(features_Departamento_1);
var lyr_Departamento_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamento_1, 
                style: style_Departamento_1,
                popuplayertitle: 'Departamento',
                interactive: true,
                title: '<img src="styles/legend/Departamento_1.png" /> Departamento'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Departamento_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Departamento_1];
lyr_Departamento_1.set('fieldAliases', {'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', 'video': 'video', 'imagen': 'imagen', 'wiki': 'wiki', });
lyr_Departamento_1.set('fieldImages', {'NOMBDEP': '', 'COUNT': '', 'FIRST_IDDP': '', 'HECTARES': '', 'video': '', 'imagen': '', 'wiki': '', });
lyr_Departamento_1.set('fieldLabels', {'NOMBDEP': 'no label', 'COUNT': 'no label', 'FIRST_IDDP': 'no label', 'HECTARES': 'no label', 'video': 'no label', 'imagen': 'no label', 'wiki': 'no label', });
lyr_Departamento_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});