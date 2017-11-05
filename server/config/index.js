"use strict";
const configVariables = require('./config');

module.exports= {
    getDbConnection :function() {
        return 'mongodb://' + configVariables.username +
            ':' + configVariables.password +
            configVariables.database;
    }
};

