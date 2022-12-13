import axios from "axios";
import { useQuery } from "react-query";

const url = "https://api.covid19api.com";

const SUMMARY_QUERY = "SUMMARY_QUERY";

const getSummary = async () => {
  let changeableUrl = `${url}/summary`;

  try {
    const { data } = await axios.get(changeableUrl);

    return data;
  } catch (error) {
    return error;
  }
};

export const useSummaryQuery = () => {
  const query = useQuery({
    queryKey: [SUMMARY_QUERY],
    queryFn() {
      return getSummary();
    },
  });

  // const Countries = sortData(query?.data?.Countries || []);

  return {
    ...query,
    // data: {
    //   ...query.data,
    //   Countries: Countries,
    // },
  };
};

const COUNTRIES_QUERY = "COUNTRIES_QUERY";

const getCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);

    return data;
  } catch (error) {
    return error;
  }
};

export const useCountriesQuery = () => {
  return useQuery({
    queryKey: [COUNTRIES_QUERY],
    queryFn() {
      return getCountries();
    },
  });
};
const COUNTRY_QUERY = "COUNTRY_QUERY";

const getDayOneCountry = async ({ params }: { params?: string }) => {
  try {
    const currentDate = new Date().toISOString();
    const before7Daysdate = new Date(
      Date.now() - 7 * 24 * 60 * 60 * 1000
    ).toISOString();

    const { data } = await axios.get(`${url}/country/${params}`, {
      params: {
        // One Week
        from: before7Daysdate,
        to: currentDate,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
};

export const useDayOneCountryQuery = ({
  params,
  enabled = false,
}: {
  params?: string;
  enabled?: boolean;
}) => {
  return useQuery({
    queryKey: [COUNTRY_QUERY],
    queryFn() {
      return getDayOneCountry({ params: params });
    },
    enabled,
  });
};
