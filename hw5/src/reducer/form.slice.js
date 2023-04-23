import { createSlice } from "@reduxjs/toolkit";
import { actionSetOrder } from "./order.slice";

const initialState = {
    data:{
        firstName: "",
        lastName: "",
		age: "",
		address: "",
		phone: "",
        order:[],
    }
}
const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		actionForm: (state, { payload }) => {
			state.data = {...payload};
		}
	}
})

export const {actionForm} = formSlice.actions;
export default formSlice.reducer;
