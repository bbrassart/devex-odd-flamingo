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

/**
 * @param {array} data - Array containing results
 * @param {array} filters - Array containing filters
 * @param {object} filters[0] - One filter object
 * @returns {object} Filtered data
 */

const sortDatasetBasedOnFilters = (data, filters) => {
  if(!filters.length) {
    return data;
  }
  const filteredResults = [];
  filters.forEach(filterObj => {
    data.forEach(result => {
      const filterName = Object.keys(filterObj)[0];
      if(
        !!Object.keys(result[filterName]).length
      ) {
        if(matchesWithLocationFilter(result, filterObj[filterName])) {
          filteredResults.push(result)
        }
      }
    })
  });

  return filteredResults;
};

const matchesWithLocationFilter = (result, arrayOfLocationFilter) => {
  const downcasedFilters = arrayOfLocationFilter.map(ele => ele.toLowerCase())
  return result.locations.some(loc => !!loc && downcasedFilters.includes(loc.name.toLowerCase()));
};

export {
  generateHeatMapData,
  sortDatasetBasedOnFilters
};

