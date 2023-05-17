import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import useAuthActions from "./auth";
import useComplementsActions from "./complements";

const useActions = () => {
  /** Variables */
  const dispatch: Dispatch<any> = useDispatch();

  return {
    dispatch,
    useAuthActions,
    useComplementsActions
  };
}

export default useActions;
