import * as types from './actionTypes.jsx';
import helpers from './../helpers/restHelpers.jsx';

export function loadGroceryItemsSuccess(items) {
    return { type: types.LOAD_GROCERY_ITEMS, items };
}

export function addGroceryItemsSuccess(newItem) {
    return { type: types.CREATE_ITEM_SUCCESS, newItem };
}

export function deleteGroceryItemsSuccess(itemName) {
    return { type: types.DELETE_ITEM_SUCCESS, itemName };
}
export function updateGroceryItemsSuccess(item) {
    return { type: types.UPDATE_ITEM_SUCCESS, item };
}

export function loadGroceryItems() {
    return function(dispatch) {
        helpers.get("api/items")
        .then(function(items) {
                dispatch(loadGroceryItemsSuccess(items));
            });
    };
}

export function addItem(newItem) {
    return function(dispatch) {
        helpers.post("api/items", newItem).then(function(response) {
            if(response.status) {
                dispatch(addGroceryItemsSuccess(newItem));
            } else {console.log('Sorry');}
        })
    };
}

export function deleteItem(itemName) {
    return function(dispatch) {
        dispatch(deleteGroceryItemsSuccess(itemName));
    };
}

export function updateItem(item) {
    return function(dispatch) {
        dispatch(updateGroceryItemsSuccess(item));
    };
}