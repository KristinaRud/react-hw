import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:{
        firstName: "igor tobolyakov",
        lastName: "igor tobolyakov",
		age: "20",
		address: "Ukraine, Kiev",
		phone: "0730000000",
        order:[],
    }
}
const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		actionForm: (state, { payload }) => {
			state.data = {...payload};
		},
        actionConfirm:(state)=>{
            localStorage.removeItem(`arrOrder`);
            console.log("Order is confirm", JSON.stringify(state.data));
        }
	}
})

export const {actionForm, actionConfirm} = formSlice.actions
export default formSlice.reducer
