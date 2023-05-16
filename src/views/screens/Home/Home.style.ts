import styled from 'styled-components/native';
import { TouchableOpacity } from "react-native";

export const CenterContent = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LogoContainer = styled.View`
  width: 60%;
  margin-top: 30px;
`;

export const LogoImage = styled.Image`
  width: 100%;
`;

export const StyledText = styled.Text`
  color: red;
`;

export const StyledTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 32.5532px;
  line-height: 49px;
  color: #171321;
`;

export const StyledSubtitle = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  color: #171321;
  width: 80%;
`;

export const ButtonLogin = styled(TouchableOpacity)`
  margin-top: 20px;
  background: #743D73;
  border-radius: 20px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
`;

export const LoginButton = styled.Text`

  color: #fff;
  font-style: normal;
  font-weight: 600;
  font-size: 24.5561px;
  line-height: 37px;
  width: 100%;
`;

export const RegisterButton = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 14.1064px;
  line-height: 21px;
  text-align: center;
  color: #743D73;
`;
