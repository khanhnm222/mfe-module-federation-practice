import moment from 'moment';
import { DATE_FORMAT } from './constants';

export default {
  currencyUSD(value: string | number) {
    return "$" + value;
  },
  formatDate(date: string, format = DATE_FORMAT.default){
    return moment(date).format(format);
  }
};
