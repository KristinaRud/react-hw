import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderList: [],
}
const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        actionSetOrder: (state, { payload }) => {
            state.orderList = [...payload];
            // localStorage.setItem("arrOrder", payload);
        },
        actionAddOrder: (state, { payload }) => {
            const index = state.orderList.findIndex((el) => el.id === payload.id);
            if (index === -1) {
                state.orderList.push({ ...payload, count: 1 });
            } else {
                state.orderList[index].count += 1;
            }
            localStorage.setItem("arrOrder", JSON.stringify(state.orderList));
        },
        actionIncrementCount: (state, { payload }) => {
            const index = state.orderList.findIndex((el) => el.id === payload.id);
            if (index !== -1) {
                state.orderList[index].count += 1;
            }
            localStorage.setItem("arrOrder", JSON.stringify(state.orderList));
        },
        actionDecrementCount: (state, { payload }) => {
            const index = state.orderList.findIndex((el) => el.id === payload.id);
            if (index !== -1 && state.orderList[index].count > 1) {
                state.orderList[index].count -= 1;
            }
            localStorage.setItem("arrOrder", JSON.stringify(state.orderList));
        },
        actionDeleteOrderItem: (state, { payload }) => {
            const index = state.orderList.findIndex((el) => el.id === payload.id);
            if (index !== -1) {
                state.orderList.splice(index, 1);
            }
            localStorage.setItem(`arrOrder`, JSON.stringify(state.orderList));
        }
    }
})

export const { actionSetOrder, actionAddOrder, actionIncrementCount, actionDecrementCount, actionDeleteOrderItem } = orderSlice.actions;
export default orderSlice.reducer;
