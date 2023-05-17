import useHelpers from "../../../helpers";
import useTypes from "../../../types";

const useComplementsReducers = () => {
  /** Helpers */
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  /** Types */
  const { useComplementsTypes } = useTypes();
  const { GET_STATUSES, GET_DELIVERIES } = useComplementsTypes();

  const statuses = createReducer({"statuses": []}, {
    [GET_STATUSES](state: any, action: any) {
      return {
        ...state,
        statuses: action.payload
      };
    }
  });

  const deliveries = createReducer({"deliveries": []}, {
    [GET_DELIVERIES](state: any, action: any) {
      return {
        ...state,
        deliveries: action.payload
      };
    }
  });

  return {
    statuses,
    deliveries
  };
}

export default useComplementsReducers;
