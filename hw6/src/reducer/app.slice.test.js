import appSlice from "./app.slice";
import { actionModal, actionCurrentComics } from "../reducer"

const initialState = {
    currentComics: [],
    isModal: false,
};

describe('App reducer work', () => {
    test('should return the initial state', () => {
        expect(appSlice(undefined, { type: undefined })).toEqual(initialState);
    });

    test('should changed isModal', () => {
        expect(appSlice(initialState, { type: actionModal, payload: true })).toEqual({
            currentComics: [],
            isModal: true,
        });
    });

    test('should changed currentComics', () => {
        expect(appSlice(initialState, { type: actionCurrentComics, payload: { id: '1', title: 'test' } })).toEqual({
            currentComics: { id: '1', title: 'test' },
            isModal: false,
        })
    })

});
