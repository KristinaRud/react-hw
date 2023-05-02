import orderSlice from "./order.slice";
import {actionSetOrder, actionAddOrder, actionIncrementCount, actionDecrementCount, actionDeleteOrderItem } from "../reducer"

const initialState = {
    orderList: [],
}

describe('Order reducer work', () => {
    test('should return the initial state', () => {
        expect(orderSlice(undefined, { type: undefined })).toEqual(initialState);
    });

    test('should changed orderList', () => {
        expect(orderSlice(initialState, { type: actionSetOrder, payload: [{ id: '1', title: 'test' }] })).toEqual({
            orderList: [{ id: '1', title: 'test' }],
        })
    });

    test('should changed orderList delete order', () => {
        expect(orderSlice({
            orderList: [{ id: '1', title: 'test', count:1 }, { id: '2', title: 'test', count:1}],
        }, { type: actionDeleteOrderItem, payload: { id: '1', title: 'test' } })).toEqual({
            orderList: [{ id: '2', title: 'test', count:1}],
        });
    });

    test('should changed orderList add new order', () => {
        expect(orderSlice({orderList: [{ id: '1', title: 'test', count:1}]}, { type: actionAddOrder, payload: { id: '2', title: 'test'} })).toEqual({
            orderList: [{ id: '1', title: 'test', count:1 }, { id: '2', title: 'test', count:1}],
        })
    });

    test('should changed orderList add one else item order', () => {
        expect(orderSlice({orderList: [{ id: '1', title: 'test', count:1}, { id: '2', title: 'test', count:1}]}, { type: actionAddOrder, payload: { id: '2', title: 'test'} })).toEqual({
            orderList: [{ id: '1', title: 'test', count:1 }, { id: '2', title: 'test', count:2}],
        })
    });

    test('should changed orderList del one item count', () => {
        expect(orderSlice({
            orderList: [{ id: '1', title: 'test', count:2 }, { id: '2', title: 'test', count:1}],
        }, { type: actionDecrementCount, payload: { id: '1', title: 'test' } })).toEqual({
            orderList: [{ id: '1', title: 'test', count:1 }, { id: '2', title: 'test', count:1}],
        });
    });

    test('should changed orderList add one item count', () => {
        expect(orderSlice({
            orderList: [{ id: '1', title: 'test', count:2 }, { id: '2', title: 'test', count:1}]
        }, { type: actionIncrementCount, payload: { id: '2', title: 'test'} })).toEqual({
            orderList: [{ id: '1', title: 'test', count:2 }, { id: '2', title: 'test', count:2}],
        })
    });

});
