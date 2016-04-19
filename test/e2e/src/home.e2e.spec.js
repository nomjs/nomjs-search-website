import {HomePageObject} from './home.po';

describe('home view', () => {
  let homePo;

  beforeEach(() => {
    homePo = new HomePageObject();
    browser.loadAndWaitForAureliaPage('http://localhost:9000');
  });

  it('should load the page and display the initial page title', () => {
    expect(homePo.getCurrentPageTitle()).toBe('Home | nom is not npm');
  });
});
