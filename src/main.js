import {HttpClient} from 'aurelia-fetch-client';
import {AppConfig} from './app-config';

export function configure(aurelia) {
  let httpClient = aurelia.container.get(HttpClient);
  let appConfig = aurelia.container.get(AppConfig);
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  httpClient.fetch('api/-/config')
    .then(response => response.json())
    .then(config => {
      appConfig.config = config;
      aurelia.start().then(() => aurelia.setRoot());
    });
}
