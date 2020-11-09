export interface Ability {
  ability: {
    name: string;
    url: string;
  }  
}

export interface Type {
  type: {
    name: string;
    url: string;
  }
}

export interface Stat {
  stat: {
    name: string;
    url: string;
  }
}

export interface PokemonItem {
  id?: number,
  name: string;
  url?: string;
  imageUrl?: string;
  description?: string;
  information?: {
    height: number;
    weight: number;
    gender: string;
  },
  abilities?: Ability[];
  stats?: Stat[];
  types?: Type[];
}


