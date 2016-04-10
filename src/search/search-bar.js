import {inject} from 'aurelia-framework';
import $ from 'jquery';
import 'devbridge-autocomplete';

// Autocomplete provided by https://github.com/devbridge/jQuery-Autocomplete
@inject(Element)
export class SearchBarCustomElement {
  constructor(element) {
    this.element = element;
  }

  attached() {
    $('#packageSearch').autocomplete({
      onSelect: this.onSelect.bind(this),
      lookup: this.localPackages(),   // TODO replace with ajax serviceUrl
      formatResult: this.formatResult.bind(this)
    });
  }

  // Taking a guess at what search response might look like
  localPackages() {
    return [
      { value: '@aaa/aaa', data: { scope: '@aaa', name: 'aaa', description: 'The aaa module'} },
      { value: '@aaa/foo', data: { scope: '@aaa', name: 'foo', description: 'The foo module'} },
      { value: '@bbb/foo', data: { scope: '@bbb', name: 'foo', description: 'Look at that, bbb also has a foo'} }
    ];
  }

  // Future: Navigate to package detail page
  onSelect(suggestion) {
    console.log(`you suggested ${suggestion.value}, ${suggestion.data}`);
  }

  // TODO Can aurelia templating be used and does it sanitize?
  // http://ilikekillnerds.com/2016/01/enhancing-at-will-using-aurelias-templating-engine-enhance-api/
  formatResult(suggestion, currentValue) {
    return `${suggestion.value} <br> ${suggestion.data.description}`;
  }
}
