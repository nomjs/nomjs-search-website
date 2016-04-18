import {inject} from 'aurelia-framework';
import {PackageService} from './package-service';

@inject(PackageService)
export class Package {
  constructor(packageService) {
    this.packageService = packageService;
  }

  activate(params) {
    return this.packageService.retrievePackage(params.name)
      .then( result => this.package = result);
  }
}
