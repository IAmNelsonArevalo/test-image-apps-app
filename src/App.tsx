import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import useViews from "./views";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import useConfig from "./config";
import Route from "./Route";

const App: FC = (): JSX.Element => {
  /** Variables */
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white"
    }
  };

  /** Config */
  const { useRedux } = useConfig();
  const { store, persist } = useRedux();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <NavigationContainer theme={MyTheme}>
          <Route/>
        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
};

export default App;
