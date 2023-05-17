import {Image, StyleSheet, Text, View} from "react-native";
import {ContainerTemplate} from "../../../styles/general.styles";
import useControllers from "../../../controllers";
import {Fragment, useState} from "react";
import {GoBackButton} from "../Login/Login.styles";
import {
  ButtonNext,
  ButtonText,
  FormGroup,
  Label,
  StyledChangeAddress,
  TitlePage,
} from "../CreateDelivery/CreateDelivery.styles";
import {Input} from "../CreateDelivery/CreateDelivery";
import RecipientAddress from "./components/RecipientAddress";
import SenderAddress from "./components/SenderAddress";
import {
  CardTable,
  CardText,
  FilterContainer,
} from "../ListDeliveries/ListDeliveries.styles";
import {map} from "lodash";

const EditDelivery = ({navigation}: any) => {
  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useEditDelivery} = useScreenHooks();
  const {delivery, control, setValue, handleEdit, handleSubmit, statuses} =
    useEditDelivery();

  /** States */
  const [step, setStep] = useState(1);
  const [sender, setSender] = useState(false);
  const [recipient, setRecipient] = useState(false);
  const [idLast, setIdLast] = useState(delivery.status_id);

  const filterDelivery = (id: string) => {
    setIdLast(id);
    setValue("status_id", id);
  };

  return (
    <ContainerTemplate>
      {step === 1 ? (
        <Fragment>
          <GoBackButton onPress={() => navigation.push("ListDeliveries")}>
            <Image source={require("../../../assets/images/Back.png")} />
          </GoBackButton>
          <TitlePage>Editar Entrega</TitlePage>
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
      ) : (
        <Fragment>
          {!sender && !recipient && (
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
                <StyledChangeAddress onPress={() => setSender(true)}>
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
                <StyledChangeAddress onPress={() => setRecipient(true)}>
                  <Text>Cambiar Direccion</Text>
                </StyledChangeAddress>
              </FormGroup>
              <FormGroup>
                <Label>Cambiar Estado</Label>
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
              </FormGroup>
              <ButtonNext onPress={handleSubmit(handleEdit)}>
                <ButtonText>Enviar</ButtonText>
              </ButtonNext>
            </Fragment>
          )}
        </Fragment>
      )}
      {sender && (
        <SenderAddress
          delivery={delivery}
          setValue={setValue}
          onClose={() => setSender(false)}
        />
      )}
      {recipient && (
        <RecipientAddress
          delivery={delivery}
          setValue={setValue}
          onClose={() => setRecipient(false)}
        />
      )}
    </ContainerTemplate>
  );
};

export default EditDelivery;
