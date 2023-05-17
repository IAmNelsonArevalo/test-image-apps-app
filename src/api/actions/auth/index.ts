import { Dispatch } from "redux";
/** Local Modules */
import useProviders from "../../providers";
import useTypes from "../../../types";
/** Interfaces & Types */
import { LoginActionProps } from "models/interfaces/login.interfaces";
import { RegisterActionsInterface } from "models/interfaces/register.interfaces";

const useAuthActions = () => {
  /** Providers */
  const { useAuthProviders } = useProviders();
  const { register, login } = useAuthProviders();

  /** Types */
  const { useAuthTypes } = useTypes();
  const { LOGIN } = useAuthTypes();

  const actRegister = (request: RegisterActionsInterface) => async () => {
    const { onSuccess, onError, data } = request;
    try {
      const res = await register(data);

      if(res.data.transaction.status) {
        onSuccess && onSuccess();
      } else {
        onError && onError(res.data.message.content);
      }
    } catch (error) {
      onError && onError(error);
    }
  };

  const actLogin = (request: LoginActionProps) => async (dispatch: Dispatch) => {
    const { data, onError, onSuccess } = request;

    try {
      const res = await login(data);

      dispatch({
        type: LOGIN,
        payload: res.data
      });

      onSuccess && onSuccess();
    } catch (error: any) {
      console.error(error)
      onError && onError(error);
    }
  }

  return {
    actRegister,
    actLogin
  };
};

export default useAuthActions;
