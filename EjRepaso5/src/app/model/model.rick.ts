export interface Rick {
    results: Result[];
}

export interface Result {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: []
    url: string,
    created: string,
}

export interface Episodio {
    results: Results[];
}

export interface Results {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: [],
}

export interface Localizacion{
    results: Resultados[],
}

export interface Resultados{
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: [],
}