import {SearchService} from '../../../src/search/search-service';

describe('SearchService', () => {
  let searchService;
  beforeEach(() => {
    searchService = new SearchService();
  });
  describe('transform', () => {
    let verifyResult = function(result, expectedValue, expectedName, expectedDescription) {
      expect(result.value).toEqual(expectedValue);
      expect(result.data.name).toEqual(expectedName);
      expect(result.data.description).toEqual(expectedDescription);
    };
    it('transforms nom registry search results to autocomplete results', () => {
      // Given
      let searchResponse = {
        rows: [{
          key: ['koa', 'ac-koa', 'Modules for building Atlassian Connect and HipChat Connect add-ons'],
          value: 1
        }, {
          key: ['koa', 'ac-koa-hipchat', 'A Koa.js library for building Atlassian Connect HipChat add-ons'],
          value: 1
        }, {
          key: ['koa', 'ac-koa-hipchat-keenio', 'Simple Keen.io-based analytics capture for AC Koa HipChat'],
          value: 1
        }]
      };
      // When
      let transformed = searchService.transform(searchResponse);
      // Then
      expect(transformed.suggestions.length).toEqual(3);
      verifyResult(transformed.suggestions[0], 'ac-koa', 'ac-koa', 'Modules for building Atlassian Connect and HipChat Connect add-ons');
      verifyResult(transformed.suggestions[1], 'ac-koa-hipchat', 'ac-koa-hipchat', 'A Koa.js library for building Atlassian Connect HipChat add-ons');
      verifyResult(transformed.suggestions[2], 'ac-koa-hipchat-keenio', 'ac-koa-hipchat-keenio', 'Simple Keen.io-based analytics capture for AC Koa HipChat');
    });
    it('returns empty autocomplete list when registry search results are empty', () => {
      // Given
      let searchResponse = {
        rows: []
      };
      // When
      let transformed = searchService.transform(searchResponse);
      // Then
      expect(transformed.suggestions.length).toEqual(0);
    });
  });
});
