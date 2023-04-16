import { createSlice } from "@reduxjs/toolkit";
import { sendRequest } from "../helpers/sendRequest";
import { API_URL } from "../configs/API";



const initialState = {
	slider: [],
	// page: {},
	isLoading: true,
}
const comicsSlice = createSlice({
	name: "comics",
	initialState,
	reducers: {
		actionComicsSlider: (state, { payload }) => {
			state.slider = [...payload];
		},
		// actionCinemaPage: (state, {payload}) => {
		// 	state.page = {...payload}
		// },
		actionLoading: (state, { payload }) => {
			state.isLoading = payload
		}
	}
})

export const { actionComicsSlider, actionLoading } = comicsSlice.actions

export const actionFetchSliderComics = () => (dispatch) => {
	dispatch(actionLoading(true));
	return sendRequest(`${API_URL}`)
		.then((data) => {
			dispatch(actionComicsSlider(data));
			dispatch(actionLoading(false));
		})

}
// export const actionFetchPageCinema = (id) => (dispatch) => {

// 	return sendRequest(`${API_URL}/movie/${id}?api_key=${API_KEY_3}`)
// 		.then((data) => {
// 			const {
// 				backdrop_path,
// 				poster_path,
// 				original_title,
// 				title,
// 				genres,
// 				runtime,
// 				overview,
// 				release_date
// 			} = data;
// 			dispatch(actionCinemaPage({
// 				backdrop_path,
// 				poster_path,
// 				original_title,
// 				title,
// 				genres,
// 				runtime,
// 				overview,
// 				release_date
// 			}));
// 		})
// }
export default comicsSlice.reducer
