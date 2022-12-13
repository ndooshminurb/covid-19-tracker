import axios from 'axios';
import { useQuery } from 'react-query';

const url = 'https://restcountries.com/v3.1/';

export const ALL_COUNTRIES = 'ALL_COUNTRIES';

const getAllCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/all`);

    return data;
  } catch (error) {
    return error;
  }
};

export const useAllCountriesQuery = (enabled = false) => {
  return useQuery({
    queryKey: [ALL_COUNTRIES],
    queryFn() {
      return getAllCountries();
    },
    enabled,
  });
};
