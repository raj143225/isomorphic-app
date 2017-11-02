import * as types from '../actions/actionTypes.jsx';
import initialState from './initialState.jsx';

export default function groceryItemsReducer(state = initialState.items, action = {}) {
    switch (action.type){
        case types.LOAD_GROCERY_ITEMS:
            return action.items;
        case types.CREATE_ITEM_SUCCESS:
            return [ ...state, Object.assign({}, action.newItem)];
        case types.DELETE_ITEM_SUCCESS:
        {
            const newState = Object.assign([], state);
            const indexOfCatToDelete = state.findIndex(item => {
                return item.name == action.itemName;
            });
            newState.splice(indexOfCatToDelete, 1);
            return newState;
        }
        case types.UPDATE_ITEM_SUCCESS:
            return [
                ...state.filter(item => item.name !== action.item.name),
                Object.assign({}, action.item)
            ];
        default:
            return state;
    }
}