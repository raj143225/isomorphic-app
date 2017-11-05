const express = require('express');
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {RouterContext, match } from 'react-router';
const hist = require('history');
const router = express.Router();
const app = express();
const groceryItems = require('./../models/groceryItemModel');

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './../../app/reducers/index.jsx';
//import GroceryItemList from './../../app/components/GroceryItemList.jsx';
import appRoutes from './../../app/routes.jsx';

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('./../../app/index.ejs', {});
    const store = createStore(counterApp);

    //
    const location = hist.createLocation(req.path);
    match({
        routes: appRoutes,
        location: location
    }, (err, redirectLocation, renderProps) => {
        groceryItems.find(function(error, doc) {
            const generated = ReactDOMServer.renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );
            res.render('./../../app/index.ejs', {reactOutput: generated});
        });
    });
    //
});

module.exports = router;