import Home from './Home';
import Login from "./Login";
import Register from "./Register";
import ListDeliveries from "./ListDeliveries";
import CreateDelivery from './CreateDelivery';
import Detail from './Detail';
import EditDelivery from './EditDelivery';

const useScreens = () => {
  return {
    Home,
    Login,
    Register,
    ListDeliveries,
    CreateDelivery,
    Detail,
    EditDelivery
  };
};

export default useScreens;
