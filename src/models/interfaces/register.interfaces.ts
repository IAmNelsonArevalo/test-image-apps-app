import { ActionPropsInterface } from "./general.interfaces";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  document_type: number;
  document: string;
  phone: string;
}

export interface RegisterActionsInterface extends ActionPropsInterface {
  data: RegisterData | {};
}
