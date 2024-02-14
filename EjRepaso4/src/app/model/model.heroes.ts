export interface Heroe {
    squadName: String,
    homeTown: String,
    formed: Number,
    secretBase: String,
    active: Boolean,
    members: Miembros[]
}

export interface Miembros {
    name: String,
    age: Number,
    secretIdentity: String,
    powers: []
}
