import useHelpers from "../../../helpers";

const useAuthSelectors = () => {
  /** Helpers */
  const {useCreateSelector} = useHelpers();
  const {createSelector} = useCreateSelector();

  const authSelectors = createSelector(
    (state: any) => state.auth,
    (auth: any) => auth
  );

  return {
    authSelectors
  };
}

export default useAuthSelectors;
