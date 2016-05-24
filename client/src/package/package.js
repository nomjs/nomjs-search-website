export class Package {
  constructor() { }

  activate(params) {
    // TODO get package from nomjs-registry, by name?
    // for now, just build it from params
    this.package = {
      name: decodeURIComponent(params.name)
    };
  }
}
