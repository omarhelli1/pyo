
//  bdd

import SessionModel from "./session.model";
import Theme from "./theme.model";

// pour formation
export default interface FormationModel{
  id: number;
  nom:string;
  description:string;
  prix: number;
  theme: Theme;
  session: SessionModel[]
};
