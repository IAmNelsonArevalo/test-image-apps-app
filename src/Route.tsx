import {useSelector} from "react-redux";
import useAuthSelectors from "./models/selectors/auth";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import useViews from "./views";

const Route = () => {
  const login = useSelector(useAuthSelectors().authSelectors);
  const Stack = createNativeStackNavigator();

  /** Views */
  const {useScreens} = useViews();
  const {
    Home,
    Login,
    Register,
    ListDeliveries,
    CreateDelivery,
    Detail,
    EditDelivery,
  } = useScreens();

  return (
    <Stack.Navigator
      initialRouteName={login.token !== "" ? "ListDeliveries" : "Home"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ListDeliveries" component={ListDeliveries} />
      <Stack.Screen name="CreateDelivery" component={CreateDelivery} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="EditDelivery" component={EditDelivery} />
    </Stack.Navigator>
  );
};

export default Route;
