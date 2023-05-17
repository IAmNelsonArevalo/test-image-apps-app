import { useEffect } from "react";
import useApi from "../../../api";
import useModels from "../../../models";

const useListDeliveries = () => {
    /** Api */
    const {useActions} = useApi();
    const {dispatch, useComplementsActions} = useActions();
    const {actGetStatuses} = useComplementsActions();

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useAuthSelectors, useComplementsSelectors} = useSelectors();
    const {authSelectors} = useAuthSelectors();
    const {statusesSelector} = useComplementsSelectors();
    const auth = useSelector(authSelectors);
    const statuses = useSelector(statusesSelector);

    useEffect(() => {
        dispatch(actGetStatuses({
            onError: (error) => console.error(error)
        }));
    }, [])

    return {
        auth,
        statuses,
    };
}

export default useListDeliveries;
