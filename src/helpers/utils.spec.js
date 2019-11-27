import { filterDatasetForHeatMap } from './utils'

describe('#filterDatasetForHeatMap', () => {

  const resultWithFundingNewsTopic = {
    news_topics: [ { name: '[FU] Funding' } ],
    locations: [
      {
        location: { lat: 123, lng: 456}
      },
      {
        location: { lat: 789, lng: 1012}
      }
    ]
  }

  describe('when filters arg is an empty', () => {
    it('directly spits out the same data arg', () => {
      const data = [ resultWithFundingNewsTopic ];
      expect(filterDatasetForHeatMap(data, [])).toEqual(data)
    })
  })

  describe('when a news_topics filter is present', () => {
    const data = [
      resultWithFundingNewsTopic,
      {
        news_topics: [{ name: '[GH] Global Health' }],
        locations: []
      },
      {
        news_topics: [{ name: '[WS] Water & Sanitation' }],
        locations: []
      }
    ];
    describe('when there is a news_topics filter that has lowercase', () => {
      it('filters the data', () => {
        const filters = [ { news_topics: ['[FU] Funding']} ];
        const expectedResult = [
          resultWithFundingNewsTopic.locations[0].location,
          resultWithFundingNewsTopic.locations[1].location
        ];
        expect(filterDatasetForHeatMap(data, filters)).toEqual(expectedResult)
      })
    })

    describe('when there is a location filter has uppercase country names', () => {
      it('filters the data', () => {
        const filters = [ { news_topics: ['[FU] FUNDING'] } ];
        const expectedResult = [
          resultWithFundingNewsTopic.locations[0].location,
          resultWithFundingNewsTopic.locations[1].location
        ];

        expect(filterDatasetForHeatMap(data, filters)).toEqual(expectedResult)
      })
    })
  })
})
