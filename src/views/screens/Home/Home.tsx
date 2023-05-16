import { FC, JSX } from "react";
import { Image, TouchableOpacity } from "react-native";
import { ContainerTemplate } from "../../../styles/general.styles";
import {
  ButtonLogin,
  CenterContent,
  LoginButton,
  LogoContainer,
  LogoImage, RegisterButton,
  StyledSubtitle,
  StyledText,
  StyledTitle
} from "./Home.style";

const Home: FC<{navigation: any;}> = ({navigation}): JSX.Element => {
  return (
    <ContainerTemplate>
      <CenterContent>
        <LogoContainer>
          <LogoImage source={require("../../../assets/images/logo.png")} style={{ resizeMode: "stretch" }} />
        </LogoContainer>
        <Image source={require("../../../assets/images/track-delivery.png")} style={{resizeMode: "stretch", height: '45%', width: "70%"}}/>
        <StyledTitle>N Air Delivery</StyledTitle>
        <StyledSubtitle>
          ¡Bienvenido a nuestra aplicación logística, donde puedes rastrear, contratar y gestionar tus envíos de manera
          fácil y eficiente!
        </StyledSubtitle>
        <ButtonLogin>
          <LoginButton onPress={() => navigation.navigate('Register')}>
            Ingresemos
          </LoginButton>
        </ButtonLogin>
        <StyledSubtitle style={{marginTop: 30}}>
          Aun no tienes una cuenta, vamos a
        </StyledSubtitle>
        <TouchableOpacity style={{marginBottom: 0}} onPress={() => navigation.navigate('Register')}><RegisterButton>Registrarnos!</RegisterButton></TouchableOpacity>
      </CenterContent>
    </ContainerTemplate>
  );
};

export default Home;
