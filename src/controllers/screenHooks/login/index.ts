import { useForm } from "react-hook-form";
import useApi from "../../../api";
import { useNavigation } from "@react-navigation/native";

const useLogin = () => {
  /** Variables */
  const navigation = useNavigation();

  /** Api */
  const { useActions } = useApi();
  const { dispatch, useAuthActions } = useActions();
  const { actLogin } = useAuthActions();

  /** Use Form */
  const { control, handleSubmit, setError, reset } = useForm({ mode: "onChange" });

  const handleLogin = (data?: any) => {
    if (!data.email || data.email === "") {
      setError("email", {
        message: "El correo electronico es requerido.",
        type: "validate"
      });
    } else if (!data.password || data.password === "") {
      setError("password", {
        message: "La contrasena es requerida.",
        type: "validate"
      });
    } else {
      dispatch(
        actLogin({
          data,
          onSuccess: () => {
            reset({
              email: undefined,
              password: undefined
            });
            navigation.navigate('ListDeliveries' as never);
          },
          onError: (error) => console.log(error),
          onErrorForm: (error) => console.log(error)
        })
      )
    }
  };

  return {
    control,
    handleLogin,
    handleSubmit
  };
};

export default useLogin;
