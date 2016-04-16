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

  attached() {
    $('#packageSearch').autocomplete({
      lookup: this.lookup.bind(this),
      formatResult: this.formatResult.bind(this),
      onSelect: this.onSelect.bind(this)
    });
  }

  detached() {
    $('#packageSearch').autocomplete('dispose');
  }

  lookup(query, done) {
    this.searchService.searchPackage(query)
      .then( (results) => done(results) );
  }

  formatResult(suggestion, currentValue) {
    return this.suggestionService.formatSuggestion(suggestion, currentValue);
  }

  onSelect(suggestion) {
    let url = this.router.generate('package', {name: encodeURIComponent(suggestion.value)});
    this.router.navigate(url);
  }
}
