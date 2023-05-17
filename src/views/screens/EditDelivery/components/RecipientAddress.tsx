import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import MapView, {Marker} from "react-native-maps";
import {View, StyleSheet} from "react-native";
import {
  ButtonAccepted,
  TextAccepted,
} from "../../CreateDelivery/CreateDelivery.styles";
import {useState} from "react";

const RecipientAddress = (props: any) => {
  /** Props */
  const {delivery, setValue, onClose} = props;
  const [coordenatesRecipient, setCoordenatesRecipient] = useState({
    latitude: delivery.recipient_latitude,
    longitude: delivery.recipient_longitude,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={{flex: 1, height: "50%", marginBottom: 20}}
        // @ts-ignore
        region={coordenatesRecipient}
        minZoomLevel={15}
      >
        <Marker coordinate={coordenatesRecipient} />
      </MapView>
      <GooglePlacesAutocomplete
        GooglePlacesDetailsQuery={{fields: "geometry"}}
        fetchDetails={true}
        placeholder="Search"
        onPress={(data, details = null) => {
          setCoordenatesRecipient({
            latitude: details?.geometry?.location.lat,
            longitude: details?.geometry?.location.lng,
          });
          setValue("recipient_address", data.description);
          setValue("recipient_latitude", details?.geometry?.location.lat);
          setValue("recipient_longitude", details?.geometry?.location.lng);
        }}
        query={{
          key: "AIzaSyDj4gHG9g92rnRm5axUR5Dl4IgIMZcfWXA",
          language: "en",
        }}
        onFail={(error: any) => console.error(error)}
      />
      <ButtonAccepted onPress={onClose}>
        <TextAccepted>Aceptar</TextAccepted>
      </ButtonAccepted>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: "5%",
    backgroundColor: "#ecf0f1",
    width: "100%",
    height: "20%",
  },
});

export default RecipientAddress;
