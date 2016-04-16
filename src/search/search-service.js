import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class SearchService {
  // TODO Replace with nom registry api endpoint when implemented
  SERVICE_URL = '/sample-data/search.json'

  constructor(http) {
    this.http = http;
  }

  // TODO Implement actual transformation of registry results
  transform(results) {
    let transformed = {
      suggestions: [
        { value: '@aaa/aaa', data: { scope: '@aaa', name: 'aaa', description: 'The aaa module'} },
        { value: '@aaa/foo', data: { scope: '@aaa', name: 'foo', description: 'The foo module'} },
        { value: '@bbb/foo', data: { scope: '@bbb', name: 'foo', description: 'Look at that, bbb also has a foo'} },
        { value: '@john/aaa-api', data: { scope: '@john', name: 'aaa-api', description: 'This has some html <br> that should be <a href="http://go-there">sanitized</a>'} }
      ]
    };
    return transformed;
  }

  searchPackage(query) {
    return this.http.fetch(`${this.SERVICE_URL}?query=${query}`)
      .then(response => response.json())
      .then(results => this.transform(results));
  }
}
