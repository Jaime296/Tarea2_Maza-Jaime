window.onload = init;

function init(){
	const map = new ol.Map({	
		view: new ol.View ({
			center: ol.proj.transform([-79.8067, -3.5333], 'EPSG:4326', 'EPSG:3857' ),
			zoom: 9.8,
			minZoom: 9.8
			
		}),
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()
			})
		],
		target:"js-map"
	})
	

	
		const cantones = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url:"https://geoserver.idesinde.com:8443/geoserver/ows?",
			params:{
				LAYERS: "MAZA%3ACantones_ElOro",
				FORMAT:"image/png",
				TRANSPARENT: true
			},
			attributions: '<a href=https://www.geoportaligm.gob.ec/portal/index.php/descarga-de-servicios-wms-del-igm/>IGM</a>'
			
			
			
		})
	})
	map.addLayer(cantones);
	
	const Poblados = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url:"https://geoserver.idesinde.com:8443/geoserver/ows?",
			params:{
				LAYERS: "MAZA:Poblados El Oro",
				FORMAT:"image/png",
				TRANSPARENT: true
			},
			attributions: '<a href=https://geoserver.idesinde.com:8443/geoserver/wms?request=GetMap&service=wms&width=800&height=800&FORMAT=image/png&VERSION=1.3.0&LAYERS=MAZA%3APoblados%20El%20Oro&CRS=EPSG:32717&BBOX=550000,9550000,700000,9700000</a>'
			
			
			
		})
	})
	map.addLayer(Poblados);
	
	const vias = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url:"https://geoserver.idesinde.com:8443/geoserver/ows?",
			params:{
				LAYERS: "MAZA:VIAS",
				FORMAT:"image/png",
				TRANSPARENT: true
			},
			attributions: '<a href=https://geoserver.idesinde.com:8443/geoserver/wms?request=GetMap&service=wms&width=800&height=800&FORMAT=image/png&VERSION=1.3.0&LAYERS=MAZA%3AVIAS&CRS=EPSG:32717&BBOX=550000,9550000,700000,9700000</a>'
			
			
			
		})
	})
	map.addLayer(vias);
	
}


