import React, {FC, Fragment, ReactElement, ReactNode, useState} from "react";
import {ContainerTemplate} from "../../../styles/general.styles";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {GoBackButton} from "../Login/Login.styles";
// @ts-ignore
import PlacesInput from "react-native-places-input";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import useControllers from "../../../controllers";
import {
  ButtonAccepted,
  ButtonNext,
  ButtonText,
  FormGroup,
  Label,
  StyledChangeAddress,
  StyledInput,
  TextAccepted,
  TitlePage,
} from "./CreateDelivery.styles";
import {Controller} from "react-hook-form";
import {
  InputComponentProps,
  InputProps,
} from "../../../models/interfaces/create-delivery.interfaces";
import MapView, {Marker} from "react-native-maps";

export const Input: FC<InputProps> = ({control, name, keyboard, disable}) => {
  const InputComponent = (props: InputComponentProps) => {
    /** Props */
    const {field, formState} = props;

    return (
      <Fragment>
        <StyledInput
          value={field.value}
          onChangeText={(e: any) => field.onChange(e)}
          keyboardType={keyboard}
          editable={disable ? false : true}
          selectTextOnFocus={disable ? false : true}
        />
        {formState.errors[name] && (
          <Text style={{color: "red", fontSize: 12}}>
            {formState.errors[name]?.message as ReactNode}
          </Text>
        )}
      </Fragment>
    );
  };

  // @ts-ignore
  return <Controller name={name} control={control} render={InputComponent} />;
};

const CreateDelivery: FC<{navigation: any}> = ({navigation}): JSX.Element => {
  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useCreateDelivery} = useScreenHooks();
  const {
    step,
    control,
    openModalAddress,
    setValue,
    closeModalAddress,
    setStep,
    handleSubmit,
    handlerDelivery,
  } = useCreateDelivery();

  /** States */
  const [type, setType] = useState("sender");
  const [coordenates, setCoordenates] = useState<any>({
    latitude: 37.78825, // Latitud del marcador
    longitude: -122.4324,
  });

  return (
    <ContainerTemplate>
      {step === 1 ? (
        <Fragment>
          <GoBackButton onPress={() => navigation.navigate("ListDeliveries")}>
            <Image source={require("../../../assets/images/Back.png")} />
          </GoBackButton>
          <TitlePage>Nueva Entrega</TitlePage>
          <FormGroup>
            <Label>Nombre del remitente</Label>
            <Input name="sender_name" control={control} keyboard="default" />
          </FormGroup>
          <FormGroup>
            <Label>Documento del remitente</Label>
            <Input
              name="sender_document"
              control={control}
              keyboard="numeric"
            />
          </FormGroup>
          <FormGroup>
            <Label>Telefono del remitente</Label>
            <Input name="sender_phone" control={control} keyboard="numeric" />
          </FormGroup>
          <FormGroup>
            <Label>Nombre del destinatario</Label>
            <Input name="recipient_name" control={control} keyboard="default" />
          </FormGroup>
          <FormGroup>
            <Label>Documento del destinatario</Label>
            <Input
              name="recipient_document"
              control={control}
              keyboard="numeric"
            />
          </FormGroup>
          <FormGroup>
            <Label>Telefono del destinatario</Label>
            <Input
              name="recipient_phone"
              control={control}
              keyboard="numeric"
            />
          </FormGroup>
          <ButtonNext onPress={() => setStep(2)}>
            <ButtonText>Siguiente</ButtonText>
          </ButtonNext>
        </Fragment>
      ) : step === 2 ? (
        <Fragment>
          <GoBackButton onPress={() => setStep(1)}>
            <Image source={require("../../../assets/images/Back.png")} />
          </GoBackButton>
          <TitlePage>Nueva Entrega</TitlePage>
          <FormGroup>
            <Label>Direccion de recogida</Label>
            <Input
              name="sender_address"
              control={control}
              keyboard="numeric"
              disable
            />
            <StyledChangeAddress
              onPress={() => {
                setType("sender");
                openModalAddress();
              }}
            >
              <Text>Cambiar Direccion</Text>
            </StyledChangeAddress>
          </FormGroup>
          <FormGroup>
            <Label>Direccion de destino</Label>
            <Input
              name="recipient_address"
              control={control}
              keyboard="default"
              disable
            />
            <StyledChangeAddress
              onPress={() => {
                setType("recipient");
                openModalAddress();
              }}
            >
              <Text>Cambiar Direccion</Text>
            </StyledChangeAddress>
          </FormGroup>
          <ButtonNext onPress={handleSubmit(handlerDelivery)}>
            <ButtonText>Enviar</ButtonText>
          </ButtonNext>
        </Fragment>
      ) : (
        <Fragment>
          <View style={styles.container}>
            <MapView
              style={{flex: 1, height: "50%", marginBottom: 20}}
              region={coordenates}
              minZoomLevel={15}
            >
              <Marker coordinate={coordenates} />
            </MapView>
            <GooglePlacesAutocomplete
              styles={{height: "20%"}}
              GooglePlacesDetailsQuery={{fields: "geometry"}}
              fetchDetails={true} // you need this to fetch the details object onPress
              placeholder="Search"
              onPress={(data, details = null) => {
                setCoordenates({
                  latitude: details?.geometry?.location.lat,
                  longitude: details?.geometry?.location.lng,
                });
                if (type === "sender") {
                  setValue("sender_address", data.description);
                  setValue("sender_latitude", details?.geometry?.location.lat);
                  setValue("sender_longitude", details?.geometry?.location.lng);
                } else {
                  setValue("recipient_address", data.description);
                  setValue(
                    "recipient_latitude",
                    details?.geometry?.location.lat,
                  );
                  setValue(
                    "recipient_longitude",
                    details?.geometry?.location.lng,
                  );
                }
              }}
              query={{
                key: "AIzaSyDj4gHG9g92rnRm5axUR5Dl4IgIMZcfWXA",
                language: "en",
              }}
              onFail={error => console.error(error)}
            />
            <ButtonAccepted onPress={closeModalAddress}>
              <TextAccepted>Aceptar</TextAccepted>
            </ButtonAccepted>
          </View>
        </Fragment>
      )}
    </ContainerTemplate>
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

export default CreateDelivery;
