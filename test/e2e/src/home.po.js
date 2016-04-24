export class HomePageObject {

  constructor() {

  }

  getCurrentPageTitle() {
    return browser.getTitle();
  }

  navigateTo(href) {
    element(by.css('a[href="' + href + '"]')).click();
    return browser.waitForRouterComplete();
  }
}
