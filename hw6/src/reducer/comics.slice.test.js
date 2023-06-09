import comicsSlice, { actionLoading } from "./comics.slice";
import * as actions from "../reducer";
jest.mock('../helpers/sendRequest');

const initialState = {
    slider: [],
    isLoading: true,
};

describe('Comics reducer work', () => {
    test('should return the initial state', () => {
        expect(comicsSlice(undefined, { type: undefined })).toEqual(initialState);
    });

    // test('should get slider', () => {
    //     expect(comicsSlice(initialState, { type: actionComicsSlider, payload: [{ id: '1', title: 'test' }] })).toEqual({
    //         slider: [{ id: '1', title: 'test' }],
    //         isLoading: true,
    //     })
    // });

    // test('should changed slider with count', () => {
    //     expect(comicsSlice(initialState, { type: actionUpdate, payload: [{ id: "1", count: "1" }] })).toEqual({
    //         slider: [{ id: "1", count: "1" }],
    //         isLoading: true,
    //     });
    // });

    // test('should changed slider without count', () => {
    //     expect(comicsSlice(initialState, { type: actionUpdate, payload: { id: "1" } })).toEqual({
    //         slider: [{ id: "1", count: "1" }],
    //         isLoading: true,
    //     });
    // });

    // test('should changed isLoading', () => {
    //     expect(comicsSlice(initialState, { type: actionLoading, payload: false })).toEqual({
    //         slider: [],
    //         isLoading: false,
    //     })
    // })

});
