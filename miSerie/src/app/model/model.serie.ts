export interface Serie {
  id: string;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: [];
  status: string;
  runtime: number;
  averageRuntime: number;
  ended: null;
  officialSite: string;
  schedule: {
    time: string;
    days: [];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  };
  webChannel: null;
  dvdCountry: null;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
}
