import {inject} from 'aurelia-framework';

@inject(Element)
export class SearchBarCustomElement {
  constructor(element) {
    this.element = element;
  }
}
