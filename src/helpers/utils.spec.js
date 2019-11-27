import { filterDatasetForHeatMap } from './utils'

describe('#filterDatasetForHeatMap', () => {
  const resultWithFundingNewsTopic = {
    news_topics: [ { name: '[FU] Funding' } ],
  }

  describe('when filters arg is an empty', () => {
    it('directly spits out the same data arg', () => {
      const data = [ resultWithFundingNewsTopic ];
      expect(filterDatasetForHeatMap(data, [])).toEqual(data)
    })
  })

  describe('when two news_topics filter is present', () => {
    const data = [
      resultWithFundingNewsTopic,
      { news_topics: [{name: '[GH] Global Health'}] },
      { news_topics: [{name: '[WS] Water & Sanitation'}] }
    ];
    describe('when there is a news_topics filter that has lowercase', () => {
      it('filters the data', () => {
        const filters = [{news_topics: ['[FU] Funding', '[GH] Global Health']}];

        const expectedResult = [
          resultWithFundingNewsTopic,
          { news_topics: [{name: '[GH] Global Health'}] }
        ];

        expect(filterDatasetForHeatMap(data, filters)).toEqual(expectedResult)
      })
    })

    describe('when there is a location filter has uppercase country names', () => {
      it('filters the data', () => {
        const filters = [{news_topics: ['[FU] FUNDING']}];
        const expectedResult = [resultWithFundingNewsTopic];

        expect(filterDatasetForHeatMap(data, filters)).toEqual(expectedResult)
      })
    })
  })

  describe('when a publish_date filter is present', () => {
    const mostRecentResult = { publish_date: '2019-11-14' }
    const oldestResult = { publish_date: '2017-12-24' }

    const data = [
      mostRecentResult,
      oldestResult
    ]
    it('filters the data', () => {
      const filters = [
        {
          publish_date: {
            min_date: '2018-01-24',
            max_date: '2019-12-05'
          }
        }
      ]

      const expectedResult = [ mostRecentResult ]

      expect(filterDatasetForHeatMap(data, filters)).toEqual(expectedResult)
    });
  })

})
