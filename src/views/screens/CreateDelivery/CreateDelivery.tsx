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
  FormGroup,
  Label,
  StyledChangeAddress,
  StyledInput,
  TitlePage,
} from "./CreateDelivery.styles";
import {Controller} from "react-hook-form";
import {
  InputComponentProps,
  InputProps,
} from "../../../models/interfaces/create-delivery.interfaces";
import MapView from "react-native-maps";

const Input: FC<InputProps> = ({control, name, keyboard}) => {
  const InputComponent = (props: InputComponentProps) => {
    /** Props */
    const {field} = props;

    return (
      <StyledInput
        value={field.value}
        onChangeText={(e: any) => field.onChange(e)}
        keyboardType={keyboard}
      />
    );
  };

  // @ts-ignore
  return <Controller name={name} control={control} render={InputComponent} />;
};

const CreateDelivery: FC<{navigation: any}> = ({navigation}): JSX.Element => {
  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useCreateDelivery} = useScreenHooks();
  const {step, control, openModalAddress} = useCreateDelivery();

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
            <Label>Direccion de recogida</Label>
            <Input name="sender_phone" control={control} keyboard="numeric" />
            <StyledChangeAddress onPress={openModalAddress}>
              <Text>Cambiar Direccion</Text>
            </StyledChangeAddress>
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
        </Fragment>
      ) : (
        <Fragment>
          <View style={styles.container}>

            <GooglePlacesAutocomplete
              GooglePlacesDetailsQuery={{fields: "geometry"}}
              fetchDetails={true} // you need this to fetch the details object onPress
              placeholder="Search"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(details?.geometry?.location);
              }}
              query={{
                key: "AIzaSyDj4gHG9g92rnRm5axUR5Dl4IgIMZcfWXA",
                language: "en",
              }}
              onFail={error => console.error(error)}
            />
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
