const groceryItem = require('../models/groceryItemModel');

exports.seedData = function(res) {
    // seed database
    const items = [{
        name: "Ice Cream",
        purchased: false
    }, {
        name: "Waffles",
        purchased: false
    }, {
        name: "Candy",
        purchased: true
    }, {
        name: "snarks",
        purchased: true
    }];
    groceryItem.create(items, function(err, result){
        if (err) throw err;
        res.send(result);
    });
};