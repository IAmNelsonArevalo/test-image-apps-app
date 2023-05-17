import { FC, Fragment } from "react";
import { Image, Text } from "react-native";
import { ContainerTemplate } from "../../../styles/general.styles";
import { FormGroup, GoBackButton, Input, Label, LoginSubmit, LoginSubmitText, TitleLogin } from "./Login.styles";
import useControllers from "../../../controllers";
import { Controller } from "react-hook-form";

const Login: FC<{navigation: any}> = ({navigation}): JSX.Element => {
  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useLogin} = useScreenHooks();
  const {control, handleLogin, handleSubmit} = useLogin();

  return (
    <Fragment>
      <ContainerTemplate>
        <GoBackButton onPress={() => navigation.navigate('Home')}>
          <Image source={require("../../../assets/images/Back.png")} />
        </GoBackButton>
        <TitleLogin>Ingresemos!</TitleLogin>
        <FormGroup>
          <Label>Correo Electronico</Label>
          <Controller
            name="email"
            control={control}
            render={({field}) => {
              return (
                <Input
                  value={field.value}
                  onChangeText={(e: any) => field.onChange(e)}
                  autoCapitalize="none"
                  keyboardType="default"
                  placeholder="Ingresa tu correo electronico"
                />
              );
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label>Contraseña</Label>
          <Controller
            name="password"
            control={control}
            render={({field}) => {
              return (
                <Input
                  value={field.value}
                  onChangeText={(e: any) => field.onChange(e)}
                  keyboardType="default"
                  autoCapitalize="none"
                  placeholder="Ingresa tu contraseña"
                  secureTextEntry={true}/>
              );
            }}
          />
        </FormGroup>
        <LoginSubmit onPress={handleSubmit(handleLogin)}>
          <LoginSubmitText>Ingresar</LoginSubmitText>
        </LoginSubmit>
      </ContainerTemplate>
    </Fragment>
  );
};

export default Login;
