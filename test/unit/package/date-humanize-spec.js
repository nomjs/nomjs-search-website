import {DateHumanizeValueConverter} from '../../../src/package/date-humanize';

describe('DateHumanizeValueConverter', () => {
  let dateHumanizeVC;
  beforeEach(() => {
    dateHumanizeVC = new DateHumanizeValueConverter();
  });

  it('Converts a date', () => {
    let value = '2014-03-17T12:05:33.599Z';
    expect(dateHumanizeVC.toView(value)).not.toBe(null);
  });

  it('Returns an empty string when not provided a value', () => {
    expect(dateHumanizeVC.toView()).toEqual('');
  });
});
