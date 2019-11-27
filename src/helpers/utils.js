var GeoJSON = require('geojson')

const generateHeatMapData = data => GeoJSON.parse(data, {Point: ['lat', 'lng']})

const processAllDataForHeatMap = (data) => {
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

  return  generateHeatMapData(dataToParse);
}

const processPartialDataForHeatMap = (data, filters) => {
  const filteredData = filterDatasetForHeatMap(data, filters)
  return generateHeatMapData(filteredData)
};

/**
 * @param {array} data - Array containing results
 * @param {array} filters - Array containing filters
 * @param {object} filters[0] - One filter object
 * @returns {object} Filtered data
 */

const filterDatasetForHeatMap = (data, filters) => {
  if(!filters.length) {
    return data;
  }
  const filteredResults = [];
  filters.forEach(filterObj => {
    data.forEach(result => {
      const filterName = Object.keys(filterObj)[0]
      if( !!Object.keys(result[filterName]).length ) {
        const downcasedFilters = filterObj[filterName].map(ele => ele.toLowerCase())
        result[filterName].forEach(newsTopic => {
          if (
            !!newsTopic.name &&
            downcasedFilters.includes(newsTopic.name.toLowerCase())
          ) {
            if(
              result.locations.length
            ) {
              result.locations.forEach(location => {
                if(!!location && !!location.location) {
                  filteredResults.push(location.location)
                }

              });
            }
          }
        });
      }
    })
  })
  return filteredResults
}

export {
  processAllDataForHeatMap,
  filterDatasetForHeatMap,
  processPartialDataForHeatMap
}

