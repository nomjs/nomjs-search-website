import {inject} from 'aurelia-framework';
import $ from 'jquery';
import 'devbridge-autocomplete';
import {SuggestionService} from './suggestion-service';

// Autocomplete provided by https://github.com/devbridge/jQuery-Autocomplete
@inject(Element, SuggestionService)
export class SearchBarCustomElement {
  constructor(element, suggestionService) {
    this.element = element;
    this.suggestionService = suggestionService;
  }

  attached() {
    $('#packageSearch').autocomplete({
      lookup: this.localPackages(),   // TODO replace with ajax serviceUrl
      formatResult: this.formatResult.bind(this),
      onSelect: this.onSelect.bind(this)
    });
  }

  // Taking a guess at what search response might look like
  localPackages() {
    return [
      { value: '@aaa/aaa', data: { scope: '@aaa', name: 'aaa', description: 'The aaa module'} },
      { value: '@aaa/foo', data: { scope: '@aaa', name: 'foo', description: 'The foo module'} },
      { value: '@bbb/foo', data: { scope: '@bbb', name: 'foo', description: 'Look at that, bbb also has a foo'} },
      { value: '@john/aaa-api', data: { scope: '@john', name: 'aaa-api', description: 'This has some html <br> that should be <a href="http://go-there">sanitized</a>'} }
    ];
  }

  formatResult(suggestion, currentValue) {
    return this.suggestionService.formatSuggestion(suggestion, currentValue);
  }

  // Future: Navigate to package detail page
  onSelect(suggestion) {
    // console.log(`you suggested ${suggestion.value}, ${suggestion.data}`);
  }
}
