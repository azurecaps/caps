import { combineReducers } from "redux";
//import { routerReducer } from "react-router-redux";

import {
    CapsuleReducer
} from './../reducers';

export const createReducer = () =>
    combineReducers({
        capsule: CapsuleReducer,
      //  routing: routerReducer,
    });
