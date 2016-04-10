import {inject} from 'aurelia-framework';
import $ from 'jquery';
import 'devbridge-autocomplete';
import sanitizeHtml from 'sanitize-html';

// Autocomplete provided by https://github.com/devbridge/jQuery-Autocomplete
@inject(Element)
export class SearchBarCustomElement {
  constructor(element) {
    this.element = element;
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

  // TODO Move sanitizing to suggestion service
  formatResult(suggestion, currentValue) {
    let sanitizeOpts = {
      allowedTags: [],
      allowedAttributes: []
    };
    let line1 = sanitizeHtml(suggestion.value, sanitizeOpts);
    let line2 = sanitizeHtml(suggestion.data.description, sanitizeOpts);
    return `${line1} <br> ${line2}`;
  }

  // Future: Navigate to package detail page
  onSelect(suggestion) {
    // console.log(`you suggested ${suggestion.value}, ${suggestion.data}`);
  }
}
