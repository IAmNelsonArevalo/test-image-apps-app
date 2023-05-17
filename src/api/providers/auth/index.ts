import axios from "axios";
import { RegisterData } from "../../../models/interfaces/register.interfaces";
import { LoginData } from "../../../models/interfaces/login.interfaces";
import { trackPromise } from "react-promise-tracker";

const useAuthProviders = () => {
  const register = (data: RegisterData | {}) => {
    const request = axios.post('/users/register', data);
    return trackPromise(request);
  };

  const login = (data: LoginData | {}) => {
    const request = axios.post('/users/login', data);
    return trackPromise(request);
  }

  return {
    register,
    login
  };
}

export default useAuthProviders;
