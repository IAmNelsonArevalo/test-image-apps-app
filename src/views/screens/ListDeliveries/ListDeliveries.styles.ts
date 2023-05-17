import styled from "styled-components/native";
import SelectDropdown from "react-native-select-dropdown";

export const UserContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 5%;
  padding-top: 5%;
  position: relative;
`;

export const UserNameText = styled.Text`
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 25px;
  color: #000000;
`;

export const CreateDelivery = styled.TouchableOpacity`
  margin-top: 20px;
  background: #743d73;
  padding-left: 30px;
  padding-right: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

export const CreateDeliveryText = styled.Text`
  color: #fff;
  font-weight: 600;
`;

export const Select = styled(SelectDropdown)`
  border: 1px solid #743d73;
`;

export const FilterContainer = styled.View`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 98%;
  padding-bottom: 20px;
`;

export const CardTable = styled.TouchableOpacity`
  width: 30%;
  background: #f2f2f2;
  border-radius: 20px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardText = styled.Text<{active: boolean;}>`
  ${({active}) => active ? "color: #fff; font-weight: 600;" : "color: #000;"}
`;

export const LabelText = styled.Text`
  font-weight: 600;
  margin-top: 10px;
`;

export const CardDelivery = styled.View`
  background: #f2f2f2;
  border-radius: 15.5172px;
  flex-direction: row;
  display: flex;
  padding: 20px;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
`;

export const CardDeliveryImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const CardDeliveryName = styled.Text`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
`;

export const CardDeliveryId = styled.Text`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  width: 120px;
`;

export const CardDeliveryStatus = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-size: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CardDeliveryStatusName = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 12px;
`;

export const GoBackButton = styled.TouchableOpacity`
  background: #FE6F23;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  position: absolute;
  bottom: 5%;
  right: 5%;
  padding-left: 20px;
    padding-right: 20px;

    height: 40px;
`;