import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from "react-hook-form";
import { ActionPropsInterface } from "./general.interfaces";

export interface InputProps {
  name: string;
  control: Control;
  keyboard:
    | "default"
    | "numeric"
    | "email-address"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "number-pad"
    | "phone-pad"
    | "name-phone-pad"
    | "decimal-pad"
    | "twitter"
    | "web-search"
    | "visible-password";
  disable?: boolean;
}

export interface InputComponentProps {
  field: ControllerRenderProps<FieldValues>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}

export interface CreateDeliveryAction extends ActionPropsInterface {
  data: any
}

export interface EditDeliveryAction extends ActionPropsInterface {
  data: any
}