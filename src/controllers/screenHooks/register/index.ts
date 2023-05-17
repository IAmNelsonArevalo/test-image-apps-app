import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import useApi from "../../../api";

const useRegister = () => {
  /** Variables */
  const navigation = useNavigation();

  /** Api */
  const { useActions } = useApi();
  const { dispatch, useAuthActions } = useActions();
  const { actRegister } = useAuthActions();

  /** Use Form */
  const { control, handleSubmit, setError, reset } = useForm({ mode: "onChange" });

  const handleRegister = (data?: any) => {
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
    } else if (!data.name || data.name === "") {
      setError("password", {
        message: "Queremos conocerte, por eso necesitamos saber tu nombre",
        type: "validate"
      });
    } else if (!data.phone || data.phone === "") {
      setError("password", {
        message: "Tu telefono es requerido para poder contactarte para informarte sobre tus entregas.",
        type: "validate"
      });
    } else {
      dispatch(actRegister({
        data,
        onError: (error) => console.error(error),
        onSuccess: () => {
          reset({
            name: undefined,
            email: undefined,
            phone: undefined,
            password: undefined
          });

          navigation.navigate('Login' as never);
        }
      }));

    }
  }

  return {
    control,
    handleRegister,
    handleSubmit
  };
}

export default useRegister;
