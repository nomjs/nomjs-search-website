import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import $ from 'jquery';
import 'devbridge-autocomplete';
import {SuggestionService} from './suggestion-service';

// Autocomplete provided by https://github.com/devbridge/jQuery-Autocomplete
@inject(Element, SuggestionService, Router)
export class SearchBarCustomElement {
  constructor(element, suggestionService, router) {
    this.element = element;
    this.suggestionService = suggestionService;
    this.router = router;
  }

  // TODO Imitate search data from https://registry.npmjs.org/-/_view/byKeyword?startkey=['express']&endkey=['express',{}]&group_level=3
  // Reference: http://stackoverflow.com/questions/13657140/how-to-get-all-npm-packages-that-match-a-particular-keyword-in-json-format
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

  onSelect(suggestion) {
    let url = this.router.generate('package', {name: encodeURIComponent(suggestion.value)});
    this.router.navigate(url);
  }
}
