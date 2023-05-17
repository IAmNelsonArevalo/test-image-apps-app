import Home from './Home';
import Login from "./Login";
import Register from "./Register";
import ListDeliveries from "./ListDeliveries";
import CreateDelivery from './CreateDelivery';

const useScreens = () => {
  return {
    Home,
    Login,
    Register,
    ListDeliveries,
    CreateDelivery
  };
};

export default useScreens;
