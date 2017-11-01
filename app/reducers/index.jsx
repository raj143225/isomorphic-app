import {combineReducers} from 'redux';
import groceryItems from './groceryItemsReducer.jsx';

const rootReducer = combineReducers({
    groceryItems
});

export default rootReducer;