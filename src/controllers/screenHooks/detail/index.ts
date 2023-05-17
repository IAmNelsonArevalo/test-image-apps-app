import useModels from "../../../models";

const useDetail = () => {
    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useComplementsSelectors} = useSelectors();
    const {deliverySelector, statusesSelector} = useComplementsSelectors();
    const delivery = useSelector(deliverySelector);
    const statuses = useSelector(statusesSelector);

    return {
        delivery,
        statuses
    };
}

export default useDetail;