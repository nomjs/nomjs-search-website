export class App {
  configureRouter(config, router) {
    config.title = 'nom is not npm';
    config.map([
      { route: ['', 'home'], name: 'home',      moduleId: 'home/home',      nav: false, title: 'Home' }
    ]);

    this.router = router;
  }
}
