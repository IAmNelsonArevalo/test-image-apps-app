import useCreateSelector from "./create_selector";
import useCreateReducer from "./create_reducer";

const useHelpers = () => {
  return {
    useCreateSelector,
    useCreateReducer
  };
}

export default useHelpers;
