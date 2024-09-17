const model = require('../models/url_model.js');
const shortid = require('shortid');

async function handleGenerateShortURL(req, res) {
    const postmanBody = req.body;
    console.log(postmanBody);
    console.log(req.body)
  
    if (!postmanBody) {
        return res.status(400).send({ error: 'Invalid' });
    }

    const shortURL = shortid();

    try {
        const result = await model.create({
            originalURL: postmanBody.originalURL,
            shortURL: shortURL
        });

        res.status(201).json(result);
    } catch (error) {
       
        res.status(500).send({ error: 'Server error' });
    }
}

async function handleRedirections (req, res){
    const shortID = req.params.shortID;
   const entry = await model.findOneAndUpdate(shortID, {
        $push: {
            visitHistory:{
                timestamp: Date.now()
            }
        }
    });
    res.redirect(entry.originalURL);
}

async function handleAnalytics(req,res) {
    const shortURL = req.params.shortURL
    const analytics = await model.findOneAndUpdate(shortURL, );

    console.log(analytics.visitHistory.length)
    res.status(200).json({length: analytics.visitHistory.length})


}

module.exports = {
    handleGenerateShortURL,
    handleRedirections,
    handleAnalytics
};
