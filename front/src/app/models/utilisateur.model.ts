import Entreprise from "./entreprise.model";
export default interface UtilisateurModel{

  id?: number;
  nom: string;
  prenom: string;
  date_naissance: Date;
  entreprise: Entreprise;
  role: string;
  mail: String;
  service_id: number;
  adresse_id: number;
};
