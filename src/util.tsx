import numeral from 'numeral';
import { COUNTRIES } from './types';

export const sortData = (data: COUNTRIES[]) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.TotalConfirmed > b.TotalConfirmed) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const prettyPrintStat = (stat: boolean) =>
  stat ? `+${numeral(stat).format('0.0a')}` : '+0';
