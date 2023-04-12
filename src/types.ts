export interface Pokemon extends weight, height {
    id: string
    number: string
    name: string
    classification: string
    types: string[]
    resistant: string[]
    weaknesses: string[]
    fleeRate: number
    maxCP: number
    maxHP: number
    image: string
}

export interface weight {
    weight: minMax
}

export interface height {
    height: minMax
}

export interface minMax {
    minimum: number
    maximum: number
}

export enum Type {
    Grass = "Grass",
    Poison = "Poison",
    Fire = "Fire",
    Water = "Water",
    Flying = "Flying",
    Bug = "Bug",
    Normal = "Normal",
    Electric = "Electric",
    Ground = "Ground",
    Fairy = "Fairy",
    Fighting = "Fighting",
    Psychic = "Psychic",
    Steel = "Steel",
    Ice = "Ice",
    Ghost = "Ghost"
}