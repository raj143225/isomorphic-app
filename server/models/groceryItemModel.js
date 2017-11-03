"use strict";
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groceryItemSchema = new Schema({
    name: String,
    purchased: Boolean
});

const groceryItem = mongoose.model('groceryItemSchema', groceryItemSchema);

module.exports = groceryItem;