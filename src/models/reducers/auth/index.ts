import useHelpers from "../../../helpers";
import useTypes from "../../../types";

const useAuthReducers = () => {
  /** Helpers */
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  /** Types */
  const { useAuthTypes } = useTypes();
  const { LOGIN } = useAuthTypes();

  const auth = createReducer({"token": "", "user": {}}, {
    [LOGIN](state: any, action: any) {
      return {
        ...state,
        ...action.payload
      };
    }
  });

  return {
    auth
  };
};

export default useAuthReducers;
