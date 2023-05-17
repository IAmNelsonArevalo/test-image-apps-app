import { useState } from "react";
import { useForm } from "react-hook-form";
import useApi from "../../../api";
import { useNavigation } from "@react-navigation/native";

const useCreateDelivery = () => {
    /** Api */
    const { useActions } = useApi();
    const {dispatch, useComplementsActions} = useActions();
    const { actCreateDelivery } = useComplementsActions();
    
    /** Variables */
    const {navigate} = useNavigation();

    /** States */
    const [step, setStep] = useState<number>(1);

    /** Use Form */
    const {control, setValue, handleSubmit, setError, reset} = useForm({mode: "onChange"});

    const openModalAddress = () => {
        setStep(3);
    }

    const closeModalAddress = () => {
        setStep(2);
    }

    const handlerDelivery = (data?: any) => {
        if(!data.sender_name || data.sender_name === "") {
            setError("sender_name",  {
                type: "validate",
                message: "El nombre de la persona que envia es requerido."
            });
        } else if(!data.sender_phone || data.sender_phone === "") {
            setError("sender_phone",  {
                type: "validate",
                message: "El telefono de la persona que envia es requerido."
            });
        } else if(!data.sender_document || data.sender_document === "") {
            setError("sender_document",  {
                type: "validate",
                message: "El documento de la persona que envia es requerido."
            });
        } else if(!data.recipient_name || data.recipient_name === "") {
            setError("recipient_name",  {
                type: "validate",
                message: "El nombre de la persona que recibe es requerido."
            });
        } else if(!data.recipient_document || data.recipient_document === "") {
            setError("recipient_document",  {
                type: "validate",
                message: "El documento de la persona que recibe es requerido."
            });
        } else if(!data.recipient_phone || data.recipient_phone === "") {
            setError("recipient_phone",  {
                type: "validate",
                message: "El telefono de la persona que recibe es requerido."
            });
        } else if(!data.recipient_address || data.recipient_address === "") {
            setError("recipient_address",  {
                type: "validate",
                message: "La direccion de destino es requerido."
            });
        } else if(!data.sender_address || data.sender_address === "") {
            setError("sender_address",  {
                type: "validate",
                message: "La direccion de partida es requerido."
            });
        } else {
            dispatch(actCreateDelivery({
                data,
                onError: (error) => console.error(error),
                onSuccess: () => {
                    reset({
                        sender_name: undefined,
                        sender_phone: undefined,
                        sender_document: undefined,
                        recipient_name: undefined,
                        recipient_document: undefined,
                        recipient_phone: undefined,
                        recipient_address: undefined,
                        sender_address: undefined
                    });
                    navigate('ListDeliveries' as never);
                },
            }))
        }
    }

    return {
        step,
        control,
        setValue,
        openModalAddress,
        closeModalAddress,
        setStep,
        handleSubmit,
        handlerDelivery
    };
}

export default useCreateDelivery;