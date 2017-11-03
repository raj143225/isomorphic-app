import express from 'express';
const groceryItems = require('../models/groceryItemModel');

const router = express.Router();


/* GET users listing. */
router.get('/items', function(req, res, next) {
    groceryItems.find(function(error, doc) {
        if(error) throw error;
        res.send(doc);
    });
});

/* POST users listing. */
router.post('/items', function(req, res, next) {
    let newItem = req.body;
    newItem['purchased'] = JSON.parse(newItem['purchased']);
    const groceryItem = groceryItems(newItem);
    groceryItem.save(function(error, data){
        if(error) throw error;
        res.send({status:1, message:'success'});
    });
});


/* POST users listing. */
router.delete('/items/:id', function(req, res, next) {
    groceryItems.findByIdAndRemove(req.body.id, function(err){
        if(err) throw err;
        res.send({status:1, message:'Deleted'});
    });
});

module.exports = router;