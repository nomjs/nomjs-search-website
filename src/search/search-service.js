import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class SearchService {
  SERVICE_URL = '/sample-data/search.json'

  constructor(http) {
    this.http = http;
  }

  // TODO transform response for autocomplete before returning
  searchPackage() {
    return this.http.fetch('/sample-data/search.json')
      .then(response => response.json());
  }
}
