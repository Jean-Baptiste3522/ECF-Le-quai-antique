export interface Menu {
  titre: string;
  formules: Formule[];
}

export interface Formule {
  nom: string;
  description: string;
  prix: number;
}
