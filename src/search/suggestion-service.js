import $ from 'jquery';
import 'devbridge-autocomplete';
import sanitizeHtml from 'sanitize-html';

const SANITIZE_OPTS = {
  allowedTags: [],
  allowedAttributes: []
};

export class SuggestionService {
  constructor() { }

  santizeText(text) {
    return sanitizeHtml(text, SANITIZE_OPTS);
  }

  formatSuggestion(suggestion, currentValue) {
    let line1 = $.Autocomplete.formatResult(suggestion, currentValue);
    let line2 = this.santizeText(suggestion.data.description);
    return `${line1} <br> ${line2}`;
  }
 }
