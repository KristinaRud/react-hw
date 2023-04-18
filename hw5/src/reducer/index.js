import appReducer, { actionCurrentComics, actionModal } from "./app.slice"
import comicsReducer, { actionFetchSliderComics } from "./comics.slice"
import favoriteReducer, { actionSetFavorite, actionToggleFavorite } from "./favorite.slice"
import orderReducer, { actionSetOrder, actionAddOrder, actionIncrementCount, actionDecrementCount, actionDeleteOrderItem } from "./order.slice"
import formReducer, {actionForm, actionConfirm} from "./form.slice"

export {
	appReducer, actionCurrentComics, actionModal,
	comicsReducer, actionFetchSliderComics,
	favoriteReducer, actionSetFavorite, actionToggleFavorite,
	orderReducer, actionSetOrder, actionAddOrder, actionIncrementCount, actionDecrementCount, actionDeleteOrderItem,
	formReducer, actionForm, actionConfirm
}
