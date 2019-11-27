var GeoJSON = require('geojson')

const generateHeatMapData = data => GeoJSON.parse(data, {Point: ['lat', 'lng']})

const getHeatMapData = (data) => {
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
  const filteredData = filterDatasetForHeatMap(data, filters);
  return getHeatMapData(filteredData)
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
    const filterName = Object.keys(filterObj)[0]
    switch(filterName) {
      case 'news_topics':
        data.forEach(result => {

          if( !!Object.keys(result.news_topics).length ) {
            const downcasedFilters = filterObj.news_topics.map(ele => ele.toLowerCase())
            result.news_topics.forEach(newsTopic => {
              if (
                !!newsTopic.name &&
                downcasedFilters.includes(newsTopic.name.toLowerCase())
              ) {
                filteredResults.push(result)
              }
            });
          }
        })
        break;
      case 'publish_date':
        data.forEach(result => {
          const { minDate, maxDate } = filterObj.publish_date

          if ( result.publish_date > minDate && result.publish_date < maxDate ) {
            filteredResults.push(result)
          }
        })

        break;
      default:
        break;
    }
  });
  return filteredResults
}

export {
  getHeatMapData,
  filterDatasetForHeatMap,
  processPartialDataForHeatMap
}

