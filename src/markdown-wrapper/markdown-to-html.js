import {inject, bindable} from 'aurelia-framework';
import {markdown} from 'markdown/lib';

@inject(Element)
export class MarkdownToHtml {
  @bindable content;

  constructor(element) {
    this.element = element;
  }

  contentChanged() {
    if (this.content) {
      this.toMarkdown = markdown.toHTML(this.content);
    } else {
      this.toMarkdown = 'No README available.';
    }
  }
}
