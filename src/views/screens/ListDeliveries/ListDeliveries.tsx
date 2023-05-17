import {ContainerTemplate} from "../../../styles/general.styles";
import {
  CardDelivery,
  CardDeliveryId,
  CardDeliveryImage,
  CardDeliveryName,
  CardDeliveryStatus,
  CardDeliveryStatusName,
  CardTable,
  CardText,
  CreateDelivery,
  CreateDeliveryText,
  FilterContainer,
  GoBackButton,
  LabelText,
  Select,
  UserContainer,
  UserNameText,
} from "./ListDeliveries.styles";
import useControllers from "../../../controllers";
import {map} from "lodash";
import {FC, useEffect, useState} from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ListDeliveries: FC<{navigation: any}> = ({navigation}) => {
  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useListDeliveries} = useScreenHooks();
  const {auth, statuses, deliveries, handleDetail, logout} = useListDeliveries();

  /** States */
  const [newDeliveries, setNewDeliveries] = useState(deliveries);
  const [idLast, setIdLast] = useState("");

  const getStatusColor = (id: string) => {
    return statuses.find((item: any) => item._id === id);
  };

  const filterDelivery = (id: string) => {
    if (idLast === id) {
      setIdLast("");
      setNewDeliveries(deliveries);
    } else {
      let newDeliveriesFiltered = deliveries.filter(
        (item: any) => item.status_id === id,
      );
      setIdLast(id);
      setNewDeliveries(newDeliveriesFiltered);
    }
  };

  return (
    <ContainerTemplate
      style={{alignItems: "flex-start", justifyContent: "flex-start"}}
    >
      <UserContainer>
        <UserNameText>
          Bienvenido {auth.data.user.name.split(" ")[0]}{" "}
          {auth.data.user.name.split(" ")[1]}
        </UserNameText>
        <CreateDelivery
          onPress={() => navigation.navigate("CreateDelivery" as never)}
        >
          <CreateDeliveryText>Crear envio</CreateDeliveryText>
        </CreateDelivery>
        <LabelText>Filtrar por:</LabelText>
        <FilterContainer>
          {map(statuses, (item: any, index: number) => (
            <CardTable
              key={index}
              onPress={() => filterDelivery(item._id)}
              style={
                idLast === item._id
                  ? {backgroundColor: item.color_status}
                  : {backgroundColor: "#f2f2f2"}
              }
            >
              <CardText active={idLast === item._id}>
                {item.translation_status}
              </CardText>
            </CardTable>
          ))}
        </FilterContainer>
        <ScrollView style={{marginBottom: 100}}>
          {map(newDeliveries, (item: any, index: number) => (
            <TouchableOpacity onPress={() => handleDetail(item)}>
              <CardDelivery key={index}>
                <CardDeliveryImage
                  source={require("../../../assets/images/truck-icon.png")}
                />
                <View>
                  <CardDeliveryName>{item.sender_name}</CardDeliveryName>
                  <CardDeliveryId numberOfLines={1}>#{item._id}</CardDeliveryId>
                </View>
                <View>
                  <CardDeliveryStatus
                    style={{
                      backgroundColor: getStatusColor(item.status_id)
                        .color_status,
                    }}
                  >
                    <CardDeliveryStatusName>
                      {getStatusColor(item.status_id).translation_status}
                    </CardDeliveryStatusName>
                  </CardDeliveryStatus>
                </View>
              </CardDelivery>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </UserContainer>
      <GoBackButton onPress={logout}>
        <Text style={{color: "#fff", fontSize: 14, fontWeight: "600"}}>
          Cerrar Sesion
        </Text>
      </GoBackButton>
    </ContainerTemplate>
  );
};

export default ListDeliveries;
