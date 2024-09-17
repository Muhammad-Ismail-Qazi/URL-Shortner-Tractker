const express = require('express');

const router = express.Router();

const {handleGenerateShortURL,handleRedirections,handleAnalytics} = require('../controllers/controllers.js');

//Post Route

router.post('/',handleGenerateShortURL );

router.get('/:shortId',handleRedirections);

router.get('/analytics/:id',handleAnalytics);


module.exports = router;