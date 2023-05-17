import useProviders from "../../providers";
import useTypes from "../../../types";
import { ActionPropsInterface } from "../../../models/interfaces/general.interfaces";
import { Dispatch } from "redux";
import { CreateDeliveryAction, EditDeliveryAction } from "../../../models/interfaces/create-delivery.interfaces";

const useComplementsActions = () => {
  /** Providers */
  const { useComplementsProviders } = useProviders();
  const { getStatuses, createDelivery, getDeliveries, editDelivery } = useComplementsProviders();

  /** Types */
  const { useComplementsTypes } = useTypes();
  const { GET_STATUSES, GET_DELIVERIES } = useComplementsTypes();

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

  const actGetDeliveries = (request: ActionPropsInterface) => async (dispatch: Dispatch) => {
    const { onError } = request;
    try {
      const res = await getDeliveries();

      dispatch({
        type: GET_DELIVERIES,
        payload: res.data.data
      });
    } catch (error) {
      onError && onError(error);
    }
  };

  const actCreateDelivery = (request: CreateDeliveryAction) => async (dispatch: Dispatch) => {
    const { onError, onSuccess, data } = request;
    try {
      const res = await createDelivery(data);

      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  };

  const actEditDelivery = (request: EditDeliveryAction) => async (dispatch: Dispatch) => {
    const { onError, onSuccess, data } = request;
    try {
      const res = await editDelivery(data);

      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  };

  return {
    actGetStatuses,
    actGetDeliveries,
    actEditDelivery,
    actCreateDelivery
  };
};

export default useComplementsActions;
