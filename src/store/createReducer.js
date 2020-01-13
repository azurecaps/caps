import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { connectRouter } from 'connected-react-router';

import {
    CapsuleReducer,
    loginReducer,
    NotionReducer,
} from './../reducers';

export const createReducer = (history) =>
    combineReducers({
        capsule: CapsuleReducer,
        login: loginReducer,
        router: connectRouter(history),
        routing: routerReducer,
        notion: NotionReducer,
    });
