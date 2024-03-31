import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, 
    persistReducer,
    FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import  dishes from './dishesSlice';
import cart from './cartSlice';



const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({dishes, cart});

const persistedReducer = persistReducer( persistConfig, rootReducer);



export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
export const persistor = persistStore(store);