import { sortDatasetBasedOnFilters } from './utils'

describe('#sortDatasetBasedOnFilters', () => {

  const resultWithAustriaLocation = {
    locations: [
      undefined,
      {
        name: 'Austria',
        location: {
          lat: 47.516321,
          lng: 14.55072
        }
      }
    ]
  }

  describe('when filters arg is an empty', () => {
    it('directly spits out the same data arg', () => {
      const data = [ resultWithAustriaLocation ];
      expect(sortDatasetBasedOnFilters(data, [])).toEqual(data)
    })
  })

  describe('when a location filter is present', () => {
    const data = [
      resultWithAustriaLocation,
      { locations: [ { name: 'France' } ] },
      { locations: [ { name: 'Spain' } ] }
    ];
    describe('when there is a location filter has lowercase country names', () => {
      it('filters the data', () => {
        const filters = [ { locations: ['austria', 'spain'] } ];
        const expectedResult = [resultWithAustriaLocation, { locations: [ { name: 'Spain' } ] }];

        expect(sortDatasetBasedOnFilters(data, filters)).toEqual(expectedResult)
      })
    })

    describe('when there is a location filter has uppercase country names', () => {
      it('filters the data', () => {
        const filters = [ { locations: ['AUSTRIA', 'Spain'] } ];
        const expectedResult = [resultWithAustriaLocation, { locations: [ { name: 'Spain' } ] }];

        expect(sortDatasetBasedOnFilters(data, filters)).toEqual(expectedResult)
      })
    })
  })
})
