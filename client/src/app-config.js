export class AppConfig {
  constructor() {
    this._config = {};
  }

  get config() {
    return this._config;
  }

  set config(newValue) {
    this._config = newValue;
  }
}
