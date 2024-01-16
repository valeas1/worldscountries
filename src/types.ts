export interface IState {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
      };
    };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  flags: {
    svg: string;
  };
  cca3: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {};
  borders: string[];
}
