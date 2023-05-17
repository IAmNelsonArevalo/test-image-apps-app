import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useComplementsProviders = () => {
  const getStatuses = () => {
    const request = axios.get('/statuses/get-statuses');
    return trackPromise(request);
  }

  return {
    getStatuses
  };
}

export default useComplementsProviders;
