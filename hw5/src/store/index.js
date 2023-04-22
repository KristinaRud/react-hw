import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { comicsReducer, appReducer, orderReducer, favoriteReducer} from "../reducer";




const store = configureStore({
	reducer: {
		order: orderReducer,
		favorite: favoriteReducer,
		comics: comicsReducer,
		app: appReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk),
	devTools: true,
});
export default store;
