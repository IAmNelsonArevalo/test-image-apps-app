import { ContainerTemplate } from "../../../styles/general.styles";
import {
  CardTable,
  CardText,
  CreateDelivery,
  CreateDeliveryText,
  FilterContainer,
  LabelText,
  Select,
  UserContainer,
  UserNameText
} from "./ListDeliveries.styles";
import useControllers from "../../../controllers";
import { map } from "lodash";
import { FC } from "react";

const ListDeliveries: FC<{navigation: any}> = ({navigation}) => {
  /** Controllers */
  const { useScreenHooks } = useControllers();
  const { useListDeliveries } = useScreenHooks();
  const { auth, statuses } = useListDeliveries();

  console.log(statuses);

  const countries = ["Egypt", "Canada", "Australia", "Ireland"]

  return (
    <ContainerTemplate style={{ alignItems: "flex-start", justifyContent: "flex-start" }}>
      <UserContainer>
        <UserNameText>Bienvenido {auth.data.user.name.split(" ")[0]} {auth.data.user.name.split(" ")[1]}</UserNameText>
        <CreateDelivery onPress={() => navigation.navigate('CreateDelivery' as never)}>
          <CreateDeliveryText>Crear envio</CreateDeliveryText>
        </CreateDelivery>
        <LabelText>Filtrar por:</LabelText>
        <FilterContainer>
          {
            map(statuses, (item: any, index: number) => (
              <CardTable key={index}>
                <CardText>
                {item.translation_status}
                </CardText>
              </CardTable>
            ))
          }
        </FilterContainer>
      </UserContainer>
    </ContainerTemplate>
  );
};

export default ListDeliveries;
