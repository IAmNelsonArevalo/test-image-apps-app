import { useForm } from "react-hook-form";
import useModels from "../../../models";
import { useEffect } from "react";
import useApi from "../../../api";
import { useNavigation } from "@react-navigation/native";

const useEditDelivery = () => {
  /** Navigation */
  const navigation = useNavigation();
  /** Api */
  const {useActions} = useApi();
  const {dispatch, useComplementsActions} = useActions();
  const {actEditDelivery} = useComplementsActions();
  /** Use Form */
  const {control, setValue, reset, handleSubmit} = useForm({mode: "onChange"});
  /** Models */
  const {useSelectors} = useModels();
  const {useSelector, useComplementsSelectors} = useSelectors();
  const {deliverySelector, statusesSelector} = useComplementsSelectors();
  const delivery = useSelector(deliverySelector);
  const statuses = useSelector(statusesSelector);

  const handleEdit = (data?: any) => {
    console.log("la data", data)
    dispatch(actEditDelivery({
      data,
      onError: (error) => console.error(error),
      onSuccess: () => {
        navigation.navigate('ListDeliveries' as never)
      }
    }))
  }

  useEffect(() => {
    reset(delivery)
  }, [])

  return {
    delivery,
    control,
    setValue,
    handleSubmit,
    handleEdit,
    statuses
  };
};

export default useEditDelivery;
