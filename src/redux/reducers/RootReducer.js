import { combineReducers } from 'redux';
import login from './LoginReducer';

const RootReducer = combineReducers({
    login
});

export default RootReducer;