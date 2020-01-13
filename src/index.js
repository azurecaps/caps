import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import * as serviceWorker from './serviceWorker';
import {createStore} from './store/createStore';
import {Provider} from 'react-redux';
import {Switch} from 'react-router';
import {ConnectedRouter} from "connected-react-router";
import {history} from "./store/createStore";
import {getRoutes} from "./router";
// import App from './components/App';
// import LoginPage from "./Pages/Login/LoginPage";


// Create Redux store
const store = createStore();

//ReactDOM.render(<App />, document.getElementById('root'));

// Render App
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Switch>
                    {getRoutes(store)}
                    {/*<App/>*/}
                </Switch>
        </>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
