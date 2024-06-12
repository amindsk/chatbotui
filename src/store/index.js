import { configureStore, combineReducers } from '@reduxjs/toolkit';
import dashboardReducer from '../screens/Dashboard/dashboardSlice';
import commonReducer from '../common/commonSlice';
import chatReducer from '../screens/Chat/chatSlice';


const appReducer = combineReducers({
  dashboard: dashboardReducer,
  common: commonReducer,
  chat: chatReducer,
});

const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});

export const dispatch = store.dispatch;

export default store;