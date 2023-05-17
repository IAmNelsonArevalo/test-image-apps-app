import useHelpers from "../../../helpers";

const useComplementsSelectors = () => {
    /** Helpers */
    const {useCreateSelector} = useHelpers();
    const {createSelector} = useCreateSelector();

    const statusesSelector = createSelector(
        (state: any) => state.statuses,
        (statuses: any) => statuses.statuses
    );

    const deliveriesSelector = createSelector(
        (state: any) => state.deliveries,
        (deliveries: any) => deliveries.deliveries
    );


    return {
        statusesSelector,
        deliveriesSelector
    }
}

export default useComplementsSelectors;