import { createSlice } from "@reduxjs/toolkit";
import { sendRequest } from "../helpers/sendRequest";
import { API_URL } from "../configs/API";



const initialState = {
	slider: [],
	isLoading: true,
}
const comicsSlice = createSlice({
	name: "comics",
	initialState,
	reducers: {
		actionComicsSlider: (state, { payload }) => {
			state.slider = [...payload];
		},
		actionLoading: (state, { payload }) => {
			state.isLoading = payload
		},
		actionUpdate: (state, {payload})=>{
			if(localStorage.getItem(`arrFavorite`)){
				const favor = (JSON.parse(localStorage.getItem(`arrFavorite`)))?.map((el) => {
					const index = payload.findIndex((item) => item.id === el.id);
					if (index !== 1) {
					  return payload[index];
					}
				});
				localStorage.setItem(`arrFavorite`, JSON.stringify(favor));
			}

			if(localStorage.getItem(`arrOrder`)){
				const order = (JSON.parse(localStorage.getItem(`arrOrder`)))?.map((el) => {
					const index = payload.findIndex((item) => item.id === el.id);
					if (index !== 1) {
					  return { ...payload[index], count: el.count };
					}
				});
				localStorage.setItem(`arrOrder`, JSON.stringify(order));
			}
		}
	}
})

export const { actionComicsSlider, actionLoading, actionUpdate } = comicsSlice.actions

export const actionFetchSliderComics = () => (dispatch) => {
	dispatch(actionLoading(true));
	return sendRequest(`${API_URL}`)
		.then((data) => {
			dispatch(actionComicsSlider(data));
			dispatch(actionLoading(false));
			dispatch(actionUpdate(data));
		})

}

export default comicsSlice.reducer
