import useLogin from "./login";
import useRegister from "./register";
import useListDeliveries from "./list-deliveries";
import useCreateDelivery from "./create-delivery";
import useDetail from "./detail";
import useEditDelivery from "./edit-delivery";

const useScreenHooks = () => {
  return {
    useLogin,
    useRegister,
    useListDeliveries,
    useCreateDelivery,
    useDetail,
    useEditDelivery
  };
}

export default useScreenHooks;
