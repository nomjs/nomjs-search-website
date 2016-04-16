import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import $ from 'jquery';
import 'devbridge-autocomplete';
import {SearchService} from './search-service';
import {SuggestionService} from './suggestion-service';

// Autocomplete provided by https://github.com/devbridge/jQuery-Autocomplete
@inject(Element, SearchService, SuggestionService, Router)
export class SearchBarCustomElement {
  constructor(element, searchService, suggestionService, router) {
    this.element = element;
    this.searchService = searchService;
    this.suggestionService = suggestionService;
    this.router = router;
  }

  // TODO implement custom lookup function so xhr can be handled by a service
  attached() {
    $('#packageSearch').autocomplete({
      serviceUrl: this.searchService.SERVICE_URL,
      transformResult: this.transformResult.bind(this),
      formatResult: this.formatResult.bind(this),
      onSelect: this.onSelect.bind(this)
    });
  }

  transformResult(response, originalQuery) {
    // TODO delegate to search (or suggestion?) service to transform response
    // temp return the sample data to verify xhr flow is correct
    let transformed = {
      suggestions: [
        { value: '@aaa/aaa', data: { scope: '@aaa', name: 'aaa', description: 'The aaa module'} },
        { value: '@aaa/foo', data: { scope: '@aaa', name: 'foo', description: 'The foo module'} },
        { value: '@bbb/foo', data: { scope: '@bbb', name: 'foo', description: 'Look at that, bbb also has a foo'} },
        { value: '@john/aaa-api', data: { scope: '@john', name: 'aaa-api', description: 'This has some html <br> that should be <a href="http://go-there">sanitized</a>'} }
      ]
    };
    return transformed;
  }

  formatResult(suggestion, currentValue) {
    return this.suggestionService.formatSuggestion(suggestion, currentValue);
  }

  onSelect(suggestion) {
    let url = this.router.generate('package', {name: encodeURIComponent(suggestion.value)});
    this.router.navigate(url);
  }
}
