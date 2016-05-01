import moment from 'moment';

export class DateHumanizeValueConverter {
  toView(value) {
    let result;
    if (value) {
      result = moment(value).fromNow();
    } else {
      result = '';
    }
    return result;
  }
}
