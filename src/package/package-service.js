import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class PackageService {
  constructor(http) {
    this.http = http;
  }

  // any processing needed or just dump the whole json in the view model?
  transform(result) {
    return result;
  }

  // This works given that nom-registry has implemented: feature/2-endpoint-package-info-no-redirect
  retrievePackage(name) {
    return this.http.fetch(`/api/${name}?proxynpm=true`)
      .then(response => response.json())
      .then(result => this.transform(result));
  }
}
