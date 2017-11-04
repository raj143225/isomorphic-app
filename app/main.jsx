import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './stores/configureStore.jsx';
import { Provider } from 'react-redux';
import GroceryItemList from './components/GroceryItemList.jsx';
import {loadGroceryItems} from './actions/groceryItemsActions.jsx';

const store = configureStore();
store.dispatch(loadGroceryItems());

render(
    <Provider store={store}>
        <GroceryItemList />
    </Provider>, app
);
