export type COUNTRIES = {
  ID: string;
  TotalConfirmed: number;
  TotalRecovered: number;
  TotalDeaths: number;
};

export type SUMMARY_DATA = {
  data: {
    Global: {
      NewConfirmed: number;
      NewRecovered: number;
      NewDeaths: number;
    };
    Date: Date;
    Countries: COUNTRIES[];
  };
  isLoading: boolean;
};

export interface COUNTRIES_DATA {
  name: string;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {};
  idd: {};
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {};
  translations: {};
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  flag: string;
  population: number;
  fifa: string;
  timezones: string[];
  continents: string[];
  startOfWeek: string;
}
