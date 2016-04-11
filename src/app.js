export class App {
  configureRouter(config, router) {
    config.title = 'nom is not npm';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home/home', nav: false, title: 'Home'},
      { route: 'package/:name', name: 'package', moduleId: 'package/package', nav: false, title: 'Package'}
    ]);

    this.router = router;
  }
}
