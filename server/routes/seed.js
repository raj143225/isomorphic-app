const express = require('express');
const router = express.Router();
const seedApi = require('../controllers/seedController');

router.get('/seedData', function(req, res) {
    seedApi.seedData(res);
});

module.exports = router;