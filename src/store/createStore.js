import {createStore as createReduxStore} from "redux";
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose} from 'redux'
import { routerMiddleware } from 'connected-react-router'
import {createReducer} from "./createReducer";

export const history = createBrowserHistory();

export const createStore = (initialState = {}) => {
    const reducer = createReducer(history);

    compose(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
        ),
    );
    const store = createReduxStore(reducer, initialState);

    return store;
};
