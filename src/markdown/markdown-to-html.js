import {inject, bindable} from 'aurelia-framework';
import {markdown} from 'markdown/lib';

@inject(Element)
export class MarkdownToHtml {
  @bindable content;

  constructor(element) {
    this.element = element;
  }

  contentChanged() {
    this.toMarkdown = markdown.toHTML(this.content);
  }
}
