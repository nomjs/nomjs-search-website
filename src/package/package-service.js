import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class PackageService {
  constructor(http) {
    this.http = http;
  }

  transform(result) {
    // any processing needed or just dump the whole json in the view model?
    return result;
  }

  // TODO nom returns 308 redirect to npm couch db but that fails on CORS
  // consider instead a nom endpoint that proxies to npm and returns the response instead
  retrievePackage(name) {
    return this.http.fetch(`/api/${name}`)
      .then(response => response.json())
      .then(result => this.transform(result));
  }
}
