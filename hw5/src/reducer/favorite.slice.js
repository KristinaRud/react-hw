import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    favoriteList: [],
}
const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        actionSetFavorite: (state, { payload }) => {
            state.favoriteList = [...payload];
        },
        actionToggleFavorite: (state, { payload }) => {
            const index = state.favoriteList.findIndex((el) => el.id === payload.id);
            if (index === -1) {
                state.favoriteList.push(payload);
            } else {
                state.favoriteList.splice(index, 1);
            }
            localStorage.setItem(`arrFavorite`, JSON.stringify(state.favoriteList));
        }
    }
})

export const { actionSetFavorite, actionToggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
