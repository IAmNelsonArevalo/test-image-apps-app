import { useState } from "react";
import { useForm } from "react-hook-form";

const useCreateDelivery = () => {
    /** States */
    const [step, setStep] = useState<number>(1);

    /** Use Form */
    const {control, setValue} = useForm({mode: "onChange"});

    const openModalAddress = () => {
        setStep(2);
    }

    return {
        step,
        control,
        setValue,
        openModalAddress
    };
}

export default useCreateDelivery;