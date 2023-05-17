import axios from "axios";
/** @ts-ignore */
import useAuthProviders from "./auth";
import useComplementsProviders from "./complements";

const useProviders = () => {
  axios.defaults.baseURL = "http://127.0.0.1:8000/api";

  return {
    useAuthProviders,
    useComplementsProviders
  };
}

export default useProviders;
