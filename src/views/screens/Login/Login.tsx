import { FC, Fragment } from "react";
import { Image, Text } from "react-native";
import { ContainerTemplate } from "../../../styles/general.styles";
import { FormGroup, GoBackButton, Input, Label, LoginSubmit, LoginSubmitText, TitleLogin } from "./Login.styles";

const Login: FC<{navigation: any}> = ({navigation}): JSX.Element => {
  return (
    <Fragment>
      <ContainerTemplate>
        <GoBackButton onPress={() => navigation.navigate('Home')}>
          <Image source={require("../../../assets/images/Back.png")} />
        </GoBackButton>
        <TitleLogin>Ingresemos!</TitleLogin>
        <FormGroup>
          <Label>Correo Electronico</Label>
          <Input keyboardType="default" placeholder="Ingresa tu correo electronico" />
        </FormGroup>
        <FormGroup>
          <Label>Contraseña</Label>
          <Input keyboardType="default" placeholder="Ingresa tu correo electronico" secureTextEntry={true}/>
        </FormGroup>
        <LoginSubmit>
          <LoginSubmitText>Ingresar</LoginSubmitText>
        </LoginSubmit>
      </ContainerTemplate>
    </Fragment>
  );
};

export default Login;
