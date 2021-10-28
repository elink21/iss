//Setting up am4map
let map = am4core.create("mapDiv", am4maps.MapChart);
map.geodata = am4geodata_worldLow;

am4core.useTheme(am4themes_animated);

map.projection = new am4maps.projections.Miller();

let polygonSeries = new am4maps.MapPolygonSeries();

polygonSeries.useGeodata = true;

let polygonTemplate = polygonSeries.mapPolygons.template;

polygonTemplate.tooltipText = "{name}";

polygonTemplate.polygon.fillOpacity = 0.6;

let hs = polygonTemplate.states.create("hover");

hs.properties.fill = map.colors.getIndex(0);

map.series.push(polygonSeries);

let imageSeries = map.series.push(new am4maps.MapImageSeries());
imageSeries.mapImages.template.propertyFields.longitude = "longitude";
imageSeries.mapImages.template.propertyFields.latitude = "latitude";
imageSeries.mapImages.template.tooltipText = "{title}";
imageSeries.mapImages.template.propertyFields.url = "url";

var colorSet = new am4core.ColorSet();

var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
circle.radius = 8;
circle.propertyFields.fill = "color";
circle.nonScaling = false;

//End of configuration code
