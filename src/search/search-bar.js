import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import $ from 'jquery';
import 'devbridge-autocomplete';
import {SearchService} from './search-service';
import {SuggestionService} from './suggestion-service';
import {AppConfig} from '../app-config';

// Autocomplete provided by https://github.com/devbridge/jQuery-Autocomplete
@inject(Element, SearchService, SuggestionService, Router, AppConfig)
export class SearchBarCustomElement {
  constructor(element, searchService, suggestionService, router, appConfig) {
    this.element = element;
    this.searchService = searchService;
    this.suggestionService = suggestionService;
    this.router = router;
    this.appConfig = appConfig;
    this.loginUrl = this.initLoginUrl(this.appConfig);
  }

  initLoginUrl(appConfig) {
    // TODO what scopes are needed? Maybe server side config should provide this information...
    // let scopes = 'user:email';
    return `https://github.com/login/oauth/authorize?scope=user:email&client_id=${appConfig.config.githubOauthClientId}`;
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

  login(evt) {
    evt.preventDefault();
    // TODO http GET from here or via nomjs-registry GET https://github.com/login/oauth/authorize
  }
}
