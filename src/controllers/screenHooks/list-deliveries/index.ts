import { useEffect, useMemo } from "react";
import useApi from "../../../api";
import useModels from "../../../models";
import { useIsFocused, useNavigation } from "@react-navigation/native";

const useListDeliveries = () => {
    const navigation = useNavigation();
    /** Api */
    const {useActions} = useApi();
    const {dispatch, useComplementsActions, useAuthActions} = useActions();
    const {actGetStatuses, actGetDeliveries, actSetDelivery} = useComplementsActions();
    const {actLogout} = useAuthActions();

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useAuthSelectors, useComplementsSelectors} = useSelectors();
    const {authSelectors} = useAuthSelectors();
    const {statusesSelector, deliveriesSelector} = useComplementsSelectors();
    const auth = useSelector(authSelectors);
    const statuses = useSelector(statusesSelector);
    const deliveries = useSelector(deliveriesSelector);

    const handleDetail = (data: any) => {
        dispatch(actSetDelivery({
            onError: (error) => console.error(error),
            onSuccess: () => {
                navigation.navigate('Detail' as never)
            },
            data   
        }))
    }

    dispatch(actGetStatuses({
        onError: (error) => console.error(error)
    }));

    dispatch(actGetDeliveries({
        onError: (error) => console.error(error)
    }))

    const logout = () => {
        dispatch(actLogout({
            onSuccess: () => navigation.navigate('Home' as never)
        }))
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            dispatch(actGetStatuses({
                onError: (error) => console.error(error)
            }));
    
            dispatch(actGetDeliveries({
                onError: (error) => console.error(error)
            }))
        })
            
        
        
    }, [])

    return {
        auth,
        statuses,
        deliveries,
        handleDetail,
        logout
    };
}

export default useListDeliveries;
