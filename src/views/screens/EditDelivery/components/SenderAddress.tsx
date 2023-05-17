import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Marker } from "react-native-maps";
import { ButtonAccepted, TextAccepted } from "../../CreateDelivery/CreateDelivery.styles";

const SenderAddress = (props: any) => {
    /** Props */
    const {setValue, delivery, onClose} = props;

    const [coordenatesSender, setCoordenatesSender] = useState({
        latitude: delivery.sender_latitude,
        longitude: delivery.sender_longitude
      });

    return (
        <View style={styles.container}>
        <MapView
          style={{flex: 1, height: "50%", marginBottom: 20}}
          // @ts-ignore
          region={coordenatesSender}
          minZoomLevel={15}
        >
          <Marker coordinate={coordenatesSender} />
        </MapView>
        <GooglePlacesAutocomplete
          styles={{height: "20%"}}
          GooglePlacesDetailsQuery={{fields: "geometry"}}
          fetchDetails={true} // you need this to fetch the details object onPress
          placeholder="Search"
          onPress={(data, details = null) => {
            setCoordenatesSender({
              latitude: details?.geometry?.location.lat,
              longitude: details?.geometry?.location.lng,
            });
              setValue("sender_address", data.description);
              setValue("sender_latitude", details?.geometry?.location.lat);
              setValue("sender_longitude", details?.geometry?.location.lng);
            
          }}
          query={{
            key: "AIzaSyDj4gHG9g92rnRm5axUR5Dl4IgIMZcfWXA",
            language: "en",
          }}
          onFail={error => console.error(error)}
        />
        <ButtonAccepted onPress={onClose}>
          <TextAccepted>Aceptar</TextAccepted>
        </ButtonAccepted>
      </View>
    );
}

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

export default SenderAddress;