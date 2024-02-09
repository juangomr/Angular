export interface Planeta {
  count: string;
  next: number;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}
