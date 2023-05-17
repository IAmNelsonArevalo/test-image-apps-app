import useHelpers from "../../../helpers";

const useComplementsSelectors = () => {
    /** Helpers */
    const {useCreateSelector} = useHelpers();
    const {createSelector} = useCreateSelector();

    const statusesSelector = createSelector(
        (state: any) => state.statuses,
        (statuses: any) => statuses.statuses
    );

    return {
        statusesSelector
    }
}

export default useComplementsSelectors;