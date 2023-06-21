import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import navigatorReducer from './reducers/NavigatorReducer';
import DataReducer from './reducers/DataReducer';

export default configureStore({
  reducer: {
    navigator: navigatorReducer,
    data: DataReducer,
  },
});
