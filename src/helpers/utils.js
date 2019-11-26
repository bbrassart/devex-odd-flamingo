var GeoJSON = require('geojson');

const generateHeatMapData = (data) => {
  const dataToParse = [];
  data.forEach((result) => {
    if(!!Object.keys(result.locations).length) {
      result.locations.forEach((loc) => {
        if (!!Object.keys(loc).length) {
          dataToParse.push(loc.location);
        }

      });
    }
  });

  return  GeoJSON.parse(dataToParse, {Point: ['lat', 'lng']});
};

export {
  generateHeatMapData
};

