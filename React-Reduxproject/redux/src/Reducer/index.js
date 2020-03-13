import { combineReducers } from 'redux';
import countReducer from '../Reducer/Reducer';

const allReducer = combineReducers({
    counter: countReducer
});

export default allReducer;