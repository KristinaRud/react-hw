import favoriteSlice from "./favorite.slice";
import { actionSetFavorite, actionToggleFavorite } from "../reducer"

const initialState = {
    favoriteList: [],
}

describe('Favorite reducer work', () => {
    test('should return the initial state', () => {
        expect(favoriteSlice(undefined, { type: undefined })).toEqual(initialState);
    });

    test('should changed favoriteList', () => {
        expect(favoriteSlice(initialState, { type: actionSetFavorite, payload: [{ id: '1', title: 'test' }] })).toEqual({
            favoriteList: [{ id: '1', title: 'test' }],
        })
    });

    test('should changed favoriteList delete favor', () => {
        expect(favoriteSlice({
            favoriteList: [{ id: '1', title: 'test' }, { id: '2', title: 'test' }],
        }, { type: actionToggleFavorite, payload: { id: '1', title: 'test' } })).toEqual({
            favoriteList: [{ id: '2', title: 'test' }],
        });
    });

    test('should changed favoriteList add favor', () => {
        expect(favoriteSlice({
            favoriteList: [{ id: '1', title: 'test' }],
        }, { type: actionToggleFavorite, payload: { id: '2', title: 'test' } })).toEqual({
            favoriteList: [{ id: '1', title: 'test' }, { id: '2', title: 'test' }],
        })
    });

});
