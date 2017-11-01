import * as types from '../actions/actionTypes.jsx';
import initialState from './initialState.jsx';

export default function groceryItemsReducer(state = initialState.items, action = {}) {
    switch (action.type){
        case types.LOAD_GROCERY_ITEMS:
            return action.items
        default:
            return state;
    }
}