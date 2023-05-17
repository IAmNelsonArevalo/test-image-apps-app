import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import useViews from "./views";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import useConfig from "./config";

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

  /** Views */
  const { useScreens } = useViews();
  const { Home, Login, Register, ListDeliveries, CreateDelivery } = useScreens();

  /** Config */
  const { useRedux } = useConfig();
  const { store, persist } = useRedux();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ListDeliveries" component={ListDeliveries} />
            <Stack.Screen name="CreateDelivery" component={CreateDelivery}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
};

export default App;
