const express = require('express');
import React from 'react';
import ReactDOMServer from 'react-dom/server';
const router = express.Router();
const app = express();
const groceryItems = require('./../models/groceryItemModel');

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './../../app/reducers/index.jsx';
import GroceryItemList from './../../app/components/GroceryItemList.jsx';

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('./../../app/index.ejs', {});
    const store = createStore(counterApp);

    groceryItems.find(function(error, doc) {
        const generated = ReactDOMServer.renderToString(
            <Provider store={store}>
                <GroceryItemList />
            </Provider>
        );
        res.render('./../../app/index.ejs', {reactOutput: generated});
    });
});

module.exports = router;