import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class SearchService {
  // TODO Replace with nom registry api endpoint when implemented
  SERVICE_URL = 'fake-api/sample-data/search.json'

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration();
    });
    this.http = http;
  }

  // TODO Remove this when nom registry search endpoint is available
  tempClientFilter(rows, query) {
    return rows.filter( (r) => {
      return r.key[1].includes(query);
    });
  }

  transform(query, searchResponse) {
    let filteredRows = this.tempClientFilter(searchResponse.rows, query);
    let suggestions = filteredRows.map( (sr) => {
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
      .then(results => this.transform(query, results));
  }
}
