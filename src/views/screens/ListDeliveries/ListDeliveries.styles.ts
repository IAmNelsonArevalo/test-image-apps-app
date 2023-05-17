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

export const CardText = styled.Text`
  color: #000000;
`;

export const LabelText = styled.Text`
  font-weight: 600;
  margin-top: 10px;
`;

export const CardDelivery = styled.View`
  background: #f2f2f2;
  border-radius: 15.5172px;
`;
