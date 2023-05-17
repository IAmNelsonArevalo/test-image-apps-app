import { ActionPropsInterface } from "./general.interfaces";

export interface LoginData {
  email?: string;
  password?: string;
}

export interface LoginActionProps extends ActionPropsInterface {
  data: LoginData | {};
  onErrorForm: (message: string) => void;
}

export interface User {
  id: number;
  uid: string;
  name: string;
  email: string;
  phone: string;
  document_type_id: number;
  document: string;
  status_id: string;

}

export interface AuthSelectorState {
  token: string;
  user: User | any;
}
