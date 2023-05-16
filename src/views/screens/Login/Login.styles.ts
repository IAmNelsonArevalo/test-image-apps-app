import styled from "styled-components/native";

export const TitleLogin = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 32.5532px;
  line-height: 49px;
  color: #171321;
`;

export const GoBackButton = styled.TouchableOpacity`
  background: #FE6F23;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  position: absolute;
  top: 5%;
  left: 5%;
`;

export const FormGroup = styled.View`
  margin-top: 20px;
  width: 80%;
`;

export const Label = styled.Text`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  border: 1px solid #743D73;
  border-radius: 10px;
  height: 50px;
  padding: 10px;
  width:100%;
`;

export const LoginSubmit = styled.TouchableOpacity`
  margin-top: 30px;
  background: #FE6F23;
  padding-left: 60px;
  padding-right: 60px;
  height: 45px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginSubmitText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 15px;
`;
