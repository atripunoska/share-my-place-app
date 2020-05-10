export class Map {
  constructor(coords) {
    // this.coordinates = coords;
    this.render(coords);
  }
  render(coords) {
    document.getElementById("map").innerHTML = "";
    const map = new ol.Map({
      target: "map",
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([coords.lng, coords.lat]),
        zoom: 16,
      }),
    });
    const layer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [
          new ol.Feature({
            geometry: new ol.geom.Point(
              ol.proj.fromLonLat([coords.lng, coords.lat])
            ),
          }),
        ],
      }),
    });
    map.addLayer(layer);
  }
}
