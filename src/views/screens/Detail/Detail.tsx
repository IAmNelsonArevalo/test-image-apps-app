import {Image, Text, TouchableOpacity, View} from "react-native";
import {ContainerTemplate} from "../../../styles/general.styles";
import {GoBackButton} from "../Login/Login.styles";
import useControllers from "../../../controllers";
import {EditButton, SenderName, Title} from "./Detail.styles";
import MapView, {Marker} from "react-native-maps";

const Detail = ({navigation}: any) => {
  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useDetail} = useScreenHooks();
  const {delivery, statuses} = useDetail();
  console.log(navigation.getState());
  return (
    <ContainerTemplate>
      <EditButton onPress={() => navigation.navigate('EditDelivery')}>
        <Text style={{color: "#fff", fontSize: 13, fontWeight: "600"}}>Editar Entrega</Text>
      </EditButton>
      <GoBackButton onPress={() => navigation.navigate("ListDeliveries")}>
        <Image source={require("../../../assets/images/Back.png")} />
      </GoBackButton>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          paddingHorizontal: "5%",
          marginTop: 50
        }}
      >
        <View>
          <Title>Datos del remitente:</Title>
          <SenderName>Nombre: {delivery.sender_name}</SenderName>
          <SenderName>Documento: {delivery.sender_document}</SenderName>
          <SenderName>Telefono: {delivery.sender_phone}</SenderName>
        </View>

        <View style={{marginTop: 20}}>
          <Title>Datos del destinatario:</Title>
          <SenderName>Nombre: {delivery.recipient_name}</SenderName>
          <SenderName>Documento: {delivery.recipient_document}</SenderName>
          <SenderName>Telefono: {delivery.recipient_phone}</SenderName>
        </View>
        <View style={{marginTop: 20}}>
          <Title>Estado del envio:</Title>
          <TouchableOpacity
            style={{
              backgroundColor: statuses.find(
                (item: any) => item._id === delivery.status_id,
              ).color_status,
              maxWidth: "25%",
              borderRadius: 5,
              height: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{color: "#fff", fontWeight: "600"}}>
              {
                statuses.find((item: any) => item._id === delivery.status_id)
                  .translation_status
              }
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <Title>Puntos de recogida y entrega:</Title>
          <Text>Punto Recogida: {delivery.sender_address}</Text>
          <Text>Punto Destino: {delivery.recipient_address}</Text>
          <View style={{ height: 150, marginTop: 20 }}>
            <MapView
              style={{flex: 1, marginBottom: 20}}
              region={
                {
                  latitude: delivery.sender_latitude,
                  longitude: delivery.sender_longitude,
                } as any
              }
              minZoomLevel={11}
            >
              <Marker
                coordinate={{
                  latitude: delivery.sender_latitude,
                  longitude: delivery.sender_longitude,
                }}
              />
              <Marker
                coordinate={{
                  latitude: delivery.recipient_latitude,
                  longitude: delivery.recipient_longitude,
                }}
              />
            </MapView>
          </View>
        </View>
      </View>
      
    </ContainerTemplate>
  );
};

export default Detail;
