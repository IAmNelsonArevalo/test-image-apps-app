import useHelpers from "../../../helpers";
import useTypes from "../../../types";

const useComplementsReducers = () => {
  /** Helpers */
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  /** Types */
  const { useComplementsTypes } = useTypes();
  const { GET_STATUSES } = useComplementsTypes();

  const statuses = createReducer({"statuses": []}, {
    [GET_STATUSES](state: any, action: any) {
      return {
        ...state,
        statuses: action.payload
      };
    }
  });

  return {
    statuses
  };
}

export default useComplementsReducers;
