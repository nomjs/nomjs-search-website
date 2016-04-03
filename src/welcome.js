import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Welcome {
  heading = 'Welcome to the nomjs!';
  firstName = 'John';
  lastName = 'Doe';
  previousValue = this.fullName;

  constructor(http) {
    this.http = http;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }

  // verify that api proxy is working
  activate() {
    return this.http.fetch('/api')
      .then(response => response.json())
      .catch(err => console.log(err));
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
