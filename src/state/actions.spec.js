/* Bishal */

import * as actions from "../state/actions";
import * as ActionTypes from '../state/actionTypes';
import * as filterTypes from '../configs/filterScenarios';
import axios from 'axios';
var mockResult = {};

describe("testing get products", () => {
    it("should get all products", async () => {
        await axios.get('https://reactprojectdbserver.azurewebsites.net/products')
            .then(response => {
                mockResult = response.data;
            })
        const expectedActions = [
            { type: ActionTypes.INIT_PRODUCTS, payload: {value: mockResult} }
        ]
        let actionFn = actions.fetchAllProducts({type: '',params: []});
        let dispatch = jest.fn();
        let products = await actionFn(dispatch);
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch.mock.calls[1]).toEqual(expectedActions);
    })

    it("should get top 4 products", async () => {
        await axios.get('https://reactprojectdbserver.azurewebsites.net/products?_sort=views&_order=desc&_limit=4')
            .then(response => {
                mockResult = response.data;
            })
        const expectedActions = [
            { type: ActionTypes.INIT_PRODUCTS, payload: {value: mockResult} }
        ]
        let actionFn = actions.fetchAllProducts({type: filterTypes.BESTSELLER,params: []});
        let dispatch = jest.fn();
        let products = await actionFn(dispatch);
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch.mock.calls[1]).toEqual(expectedActions);
    })
})

