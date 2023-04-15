import { createSlice } from "@reduxjs/toolkit";



const initialState = {
	currentComics: [],
	// profile: {
	// 	name: "John",
	// 	lastName: "Doe",
	// 	email: "John@gmail.com",
	// },
	isModal: false,
}
const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		actionModal: (state, { payload }) => {
			state.isModal = payload;
		},
		actionCurrentComics: (state, { payload }) => {
			state.currentComics = { ...payload };
		},
	}
})

export const { actionModal, actionCurrentComics } = appSlice.actions
export default appSlice.reducer
