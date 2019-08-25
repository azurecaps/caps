import {createStore as createReduxStore} from "redux";

import {createReducer} from "./createReducer";

export const createStore = (initialState = {}) => {
    const reducer = createReducer();

    return createReduxStore(reducer, initialState);
};
