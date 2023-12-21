import { createStoreHook } from "react-redux";
import rootReducer from "./reducer/Reducer";
import { legacy_createStore } from "redux";

const store = legacy_createStore(rootReducer);

export default store;
