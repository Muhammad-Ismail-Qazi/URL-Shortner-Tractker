const mongoose = require('mongoose');

async function connectdb(URL){
    await mongoose.connect(URL);
    console.log('Connected to MongoDB is as progress');
}

module.exports = {
    connectdb
};