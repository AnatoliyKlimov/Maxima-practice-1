import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from "redux-persist";

import storage from "@/store/storage";
import { productsSlice } from "@/domain/products";
import { wishlistSlice } from "@/domain/wishlist";
import { recommendationsSlice } from "@/domain/recommendations";

const persistConfig = {
	key: "state",
	safelist: ["products", "wishlist", "recommendations"],
	timeout: 200,
	storage
};

const rootReducer = combineReducers({
	products: productsSlice.slice.reducer,
	wishlist: wishlistSlice.slice.reducer,
	recommendations: recommendationsSlice.slice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
	return configureStore({
		reducer: persistedReducer,
		devTools: process.env.NODE_ENV !== "production",
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
				}
			})
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
