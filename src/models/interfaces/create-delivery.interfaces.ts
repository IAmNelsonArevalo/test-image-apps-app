import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from "react-hook-form";

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
}

export interface InputComponentProps {
  field: ControllerRenderProps<FieldValues>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}
