const express = require('express');
import React from 'react';
import ReactDOMServer from 'react-dom/server';
const router = express.Router();
const groceryItems = require('./../models/groceryItemModel');
require('babel-core/register');

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('./../../app/index.ejs', {});
    const application = React.createFactory(require('./../../app/components/GroceryItemList.jsx'));
    groceryItems.find(function(error, doc) {
        const generated = ReactDOMServer.renderToString(application({
            items:doc
        }));
        console.log("==============================5");
        res.render('./../../app/index.ejs', {reactOutput: generated});
    });
});

module.exports = router;