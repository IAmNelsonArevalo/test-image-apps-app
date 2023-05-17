import useProviders from "../../providers";
import useTypes from "../../../types";
import { ActionPropsInterface } from "../../../models/interfaces/general.interfaces";
import { Dispatch } from "redux";

const useComplementsActions = () => {
  /** Providers */
  const { useComplementsProviders } = useProviders();
  const { getStatuses } = useComplementsProviders();

  /** Types */
  const { useComplementsTypes } = useTypes();
  const { GET_STATUSES } = useComplementsTypes();

  const actGetStatuses = (request: ActionPropsInterface) => async (dispatch: Dispatch) => {
    const { onError } = request;
    try {
      const res = await getStatuses();

      dispatch({
        type: GET_STATUSES,
        payload: res.data.data
      });
    } catch (error) {
      onError && onError(error);
    }
  };

  return {
    actGetStatuses
  };
};

export default useComplementsActions;
