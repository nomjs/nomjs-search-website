import {inject, LogManager} from 'aurelia-framework';
import {PackageService} from './package-service';

let logger = LogManager.getLogger('Package');

@inject(PackageService)
export class Package {
  constructor(packageService) {
    this.packageService = packageService;
  }

  activate(params) {
    return this.packageService.retrievePackage(params.name)
      .then( result => this.package = result)
      .catch(err => {
        err.json().then(errObj => {
          logger.error(errObj.error);
          // navigate to no results found page?
        });
      });
  }
}
