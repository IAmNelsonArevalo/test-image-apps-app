import { useSelector } from "react-redux";
import useAuthSelectors from "./auth";
import useComplementsSelectors from "./complements";

const useSelectors = () => {
  return {
    useSelector,
    useAuthSelectors,
    useComplementsSelectors
  };
}

export default useSelectors;
