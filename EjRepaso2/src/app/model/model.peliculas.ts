export interface Peliculas {
    peliculas: Pelicula[];
}

export interface Pelicula {
    id: number,
    titulo: string,
    actores: Actor[],
}

export interface Actor {
    nombre: string,
    genero: string,
    edad: number,
}