"use strict";
const configVariables = require('./config');

module.exports= {
    getDbConnection :function() {
        return 'mongodb://' + configVariables.username +
            ':' + configVariables.password +
            '@ds245885.mlab.com:45885/grocery';
    }
};

