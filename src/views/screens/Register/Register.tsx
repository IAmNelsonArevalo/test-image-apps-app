import { FC, Fragment } from "react";
import { GoBackButton, RegisterSubmit, TitleRegister } from "./Register.styles";
import { Image } from "react-native";
import { ContainerTemplate } from "../../../styles/general.styles";
import { FormGroup, Input, Label, LoginSubmitText } from "../Login/Login.styles";
import useControllers from "../../../controllers";
import { Controller } from "react-hook-form";

const Register: FC<{ navigation: any }> = ({ navigation }): JSX.Element => {
  /** Controllers */
  const { useScreenHooks } = useControllers();
  const { useRegister } = useScreenHooks();
  const { control, handleRegister, handleSubmit } = useRegister();

  return (
    <Fragment>
      <ContainerTemplate>
        <GoBackButton onPress={() => navigation.navigate("Home")}>
          <Image source={require("../../../assets/images/Back.png")} />
        </GoBackButton>
        <TitleRegister>Registro!</TitleRegister>
        <FormGroup>
          <Label>Nombre completo</Label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => {
              return (
                <Input
                  value={field.value}
                  onChangeText={(e: any) => field.onChange(e)}
                  autoCapitalize="none"
                  keyboardType="default"
                  placeholder="Ingresa tu nombre completo"
                />
              );
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label>Telefono</Label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => {
              return (
                <Input
                  value={field.value}
                  onChangeText={(e: any) => field.onChange(e)}
                  keyboardType="numeric" placeholder="Ingresa tu telefono"
                />
              );
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label>Correo Electronico</Label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => {
              return (
                <Input
                  autoCapitalize="none"
                  value={field.value}
                  onChangeText={(e: any) => field.onChange(e)}
                  keyboardType="default" placeholder="Ingresa tu correo electronico"
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
            render={({ field }) => {
              return (
                <Input
                  autoCapitalize="none"
                  value={field.value}
                  onChangeText={(e: any) => field.onChange(e)}
                  keyboardType="default" placeholder="Ingresa tu contraseña" secureTextEntry={true}
                />
              );
            }}
          />
        </FormGroup>
        <RegisterSubmit onPress={handleSubmit(handleRegister)}>
          <LoginSubmitText>Registrarse</LoginSubmitText>
        </RegisterSubmit>
      </ContainerTemplate>
    </Fragment>
  );
};

export default Register;
