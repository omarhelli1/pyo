

export default interface SessionModel{
  id:number;
  date: Date;
  formation_id: number;
  prix:number;
  lien:string;
  lieu:string;

  type: string;
  confirmation_formateur: boolean;
  adresse_id: number;

};
