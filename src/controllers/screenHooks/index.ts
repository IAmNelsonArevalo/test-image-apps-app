import useLogin from "./login";
import useRegister from "./register";
import useListDeliveries from "./list-deliveries";
import useCreateDelivery from "./create-delivery";

const useScreenHooks = () => {
  return {
    useLogin,
    useRegister,
    useListDeliveries,
    useCreateDelivery
  };
}

export default useScreenHooks;
