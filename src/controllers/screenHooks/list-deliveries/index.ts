import { useEffect } from "react";
import useApi from "../../../api";
import useModels from "../../../models";

const useListDeliveries = () => {
    /** Api */
    const {useActions} = useApi();
    const {dispatch, useComplementsActions} = useActions();
    const {actGetStatuses, actGetDeliveries} = useComplementsActions();

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useAuthSelectors, useComplementsSelectors} = useSelectors();
    const {authSelectors} = useAuthSelectors();
    const {statusesSelector, deliveriesSelector} = useComplementsSelectors();
    const auth = useSelector(authSelectors);
    const statuses = useSelector(statusesSelector);
    const deliveries = useSelector(deliveriesSelector);

    useEffect(() => {
        dispatch(actGetStatuses({
            onError: (error) => console.error(error)
        }));

        dispatch(actGetDeliveries({
            onError: (error) => console.error(error)
        }))
    }, [])

    return {
        auth,
        statuses,
        deliveries
    };
}

export default useListDeliveries;
