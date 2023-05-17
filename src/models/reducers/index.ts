import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import useAuthReducers from "./auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useComplementsReducers from "./complements";

const useReducers = () => {
  return combineReducers({
    ...useAuthReducers(),
    ...useComplementsReducers()
  });
}

const persistConfig = {
  key: "root",
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, useReducers());

export default persistedReducer;
