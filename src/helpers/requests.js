/**
 *
 * @param {string} queryParamsAsString - params for the donors end-point
 *
 * @returns {object|undefined} - If success, returns object, else returns undefined
 */
const getRelatedArticles = async (queryParamsAsString) => {
  try {
    const response = await fetch(`https://www.devex.com/api/public/search/articles?${queryParamsAsString}`);
    if (response.ok) {
      return await response.json();
    }

    return response
      .json()
      .then(parsedData => {
        console.log(`${parsedData.error || response.status}: ${parsedData.message || response.statusText}`);
      }).catch(() => {
        console.log(`${response.status}: ${response.statusText}`);
      });
  } catch (error) {
    console.log(error.toString());
  }
};

export {
  getRelatedArticles
};
