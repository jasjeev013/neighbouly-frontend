import { configureStore } from "@reduxjs/toolkit";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./redux/user/user";
import orgReducer from './redux/org/org'
import allorgReducer from './redux/org/allorg'
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
    user: userReducer,
    org:orgReducer,
    allorg:allorgReducer
  });
  
  // Create persist config
  const persistConfig = {
    key: 'root',
    storage,
  };
  
  // Create a persisted reducer
  const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer:{
     user:persistedReducer,
    }
})
export const persistor = persistStore(store);
export default store;