import {combineReducers, configureStore} from "@reduxjs/toolkit"
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore"
import storage from "redux-persist/lib/storage"

import categoriesReducer from "./categories/categoriesSlice"
import productsReducer from "./products/productsSlice"
import recommendedReducer from "./recommended/recommendedSlice"
import cartReducer from "./cart/cartSlice"
import userReducer from "./user/userSlice"
import ordersReducer from "./orders/ordersSlice"

const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    recommended: recommendedReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart", "user"]
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    //Agregar middleware para que no se queje de que el estado no es serializable (por el persist)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store)