import {HttpClient} from 'aurelia-fetch-client';
import {LogManager} from 'aurelia-framework';
import {AppConfig} from './app-config';

const logger = LogManager.getLogger('main');

export function configure(aurelia) {
  let httpClient = aurelia.container.get(HttpClient);
  let appConfig = aurelia.container.get(AppConfig);
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  httpClient.fetch('api/config')
    .then(response => response.json())
    .then(config => {
      appConfig.config = config;
      aurelia.start().then(() => aurelia.setRoot());
    })
    .catch(err => {
      logger.error('Unable to configure application.', err);
    });
}
