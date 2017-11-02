import express from 'express';

const router = express.Router();

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


/* GET users listing. */
router.get('/items', function(req, res, next) {
    res.send(items);
});

/* POST users listing. */
router.post('/items', function(req, res, next) {
    let newItem = req.body;
    newItem['purchased'] = JSON.parse(newItem['purchased']);
    items.push(newItem);
    res.send({status:1, message:'success'});
});

module.exports = router;