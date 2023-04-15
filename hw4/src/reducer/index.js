import appReducer, { actionCurrentComics, actionModal } from "./app.slice"
//import tvReducer, {actionFetchPageTv, actionFetchSliderTv} from "./tv.slice"
import comicsReducer, { actionFetchSliderComics } from "./comics.slice"
import favoriteReducer, { actionSetFavorite, actionToggleFavorite } from "./favorite.slice"
import orderReducer, { actionSetOrder, actionAddOrder, actionIncrementCount, actionDecrementCount, actionDeleteOrderItem } from "./order.slice"

export {
	appReducer, actionCurrentComics, actionModal,
	comicsReducer, actionFetchSliderComics,
	favoriteReducer, actionSetFavorite, actionToggleFavorite,
	orderReducer, actionSetOrder, actionAddOrder, actionIncrementCount, actionDecrementCount, actionDeleteOrderItem
}
