import * as types from './actionTypes.jsx';

export function loadGroceryItemsSuccess(items) {
    return { type: types.LOAD_GROCERY_ITEMS, items };
}

export function loadCourses() {
    return function(dispatch) {
        const initial = [{
            name: "Ice Cream"
        }, {
            name: "Waffles"
        }, {
            name: "Candy",
            purchased: true
        }, {
            name: "snarks"
        }];
        dispatch(loadGroceryItemsSuccess(initial));
    };
}