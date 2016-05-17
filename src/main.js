// import {HttpClient} from 'aurelia-fetch-client';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  // TODO After config endpoint is available in nom-registry, load it here before app startup
  // It will have information like github oauth url
  // Proof of concept to verify can make http call before app startup
  // let httpClient = new HttpClient();
  // httpClient.fetch('https://api.github.com/users')
  //   .then(response => response.json())
  //   .then(users => {
  //     aurelia.start().then(() => aurelia.setRoot());
  //   });
  aurelia.start().then(() => aurelia.setRoot());
}
