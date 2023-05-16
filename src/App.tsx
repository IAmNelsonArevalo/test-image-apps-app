import {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import useViews from './views';

const App: FC = (): JSX.Element => {
  /** Variables */
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  /** Views */
  const {useScreens} = useViews();
  const {Home} = useScreens();

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
