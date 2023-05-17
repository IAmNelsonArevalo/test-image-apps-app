import { styled } from "styled-components/native";

export const TitlePage = styled.Text`
    font-style: normal;
    font-weight: 900;
    font-size: 24.6923px;
    line-height: 29px;
    color: #000000;
`;

export const Label = styled.Text`
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 5px;
`;

export const FormGroup = styled.View`
    width: 80%;
    margin-top: 20px;
`;

export const StyledInput = styled.TextInput`
    border: 1px solid #743D73;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 13px;
`;

export const StyledChangeAddress = styled.TouchableOpacity`
    margin-top: 5px;
    font-weight: 600;
`;

export const ButtonAccepted = styled.TouchableOpacity`
    position: absolute;
    bottom: 5%;
    left: 5%;
    z-index: 1;
    background-color: #FE6F23;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: 10px;
`;

export const TextAccepted = styled.Text`
    color: white;
    font-weight: 600;
`;

export const ButtonNext = styled.TouchableOpacity`
    background-color: #FE6F23;
    margin-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    color: white;
    font-weight: 600;
`;