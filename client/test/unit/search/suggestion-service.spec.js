import {SuggestionService} from '../../../src/search/suggestion-service';

describe('SuggestionService', () => {
  let suggestionService;
  beforeEach(() => {
    suggestionService = new SuggestionService();
  });
  describe('formatSuggestion', () => {
    it('Formats a suggestion for auto complete', () => {
      // Given
      let suggestion = {
        value: 'foo',
        data: {name: 'foo', description: 'the foo package'}
      };
      let currentValue = 'fo';
      // When
      let result = suggestionService.formatSuggestion(suggestion, currentValue);
      // Then
      expect(result).toEqual('<strong>fo</strong>o<div class="suggestion-sub">the foo package</div>');
    });
    it('Removes HTML from description', () => {
      // Given
      let suggestion = {
        value: 'foo',
        data: {name: 'foo', description: 'the <h1>foo</h1> package'}
      };
      let currentValue = 'fo';
      // When
      let result = suggestionService.formatSuggestion(suggestion, currentValue);
      // Then
      expect(result).toEqual('<strong>fo</strong>o<div class="suggestion-sub">the foo package</div>');
    });
  });
});
