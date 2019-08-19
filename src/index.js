import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './AppRoute';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './redux/reducers/RootReducer';
import { Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import history from './services/history';

const store = createStore(RootReducer, applyMiddleware(thunk));

window.store = store;
ReactDOM.render(
    <Provider store ={store}>        
        <Router history={history} basename={process.env.REACT_APP_ROUTER_BASE || ''}>
            <div>
                <AppRoute />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.register();
