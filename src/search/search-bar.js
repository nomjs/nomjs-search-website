import {inject} from 'aurelia-framework';
import $ from 'jquery';
import 'devbridge-autocomplete';

@inject(Element)
export class SearchBarCustomElement {
  constructor(element) {
    this.element = element;
  }

  attached() {
    // TODO serviceUrl, for now, just some static lookup data
    $('#packageSearch').autocomplete({
      onSearchComplete: this.onSearchComplete.bind(this),
      onSelect: this.onSelect.bind(this),
      lookup: this.localPackages()
    });
  }

  localPackages() {
    return [
      { value: '@aaa/aaa', data: '/aaa' },
      { value: '@bbb/bbb', data: '/bbb' },
      { value: '@aaabbb/bbb', data: '/bbb' }
    ];
  }

  onSearchComplete(query, suggestions) {
    console.log(`${query} ${suggestions}`);
  }

  onSelect(suggestion) {
    console.log(`you suggested ${suggestion.value}, ${suggestion.data}`);
  }
}
