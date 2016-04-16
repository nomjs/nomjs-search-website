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

  transform(searchResponse) {
    let suggestions = searchResponse.rows.map( (sr) => {
      return {
        value: sr.key[1],
        data: {
          name: sr.key[1],
          description: sr.key[2]
        }
      };
    });
    return { suggestions: suggestions };
  }

  searchPackage(query) {
    return this.http.fetch(`${this.SERVICE_URL}?query=${query}`)
      .then(response => response.json())
      .then(results => this.transform(results));
  }
}
