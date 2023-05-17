import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useComplementsProviders = () => {
  const getStatuses = () => {
    const request = axios.get('/statuses/get-statuses');
    return trackPromise(request);
  }

  const createDelivery = (data: any) => {
    const request = axios.post('/deliveries/create-delivery', data);
    return trackPromise(request);
  }

  const editDelivery = (data: any) => {
    const request = axios.post('/deliveries/edit-delivery', data);
    return trackPromise(request);
  }

  const getDeliveries = () => {
    const request = axios.get('/deliveries/get-deliveries');
    return trackPromise(request);
  }

  return {
    getStatuses,
    createDelivery,
    editDelivery,
    getDeliveries
  };
}

export default useComplementsProviders;
