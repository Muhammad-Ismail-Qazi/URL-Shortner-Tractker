const express = require('express');

const {connectdb} = require('./config/db_connection.js');

const router = require('./routes/routes.js');

const app = express();

const port = 8001;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Route
app.use('/url',router);

//connect db
connectdb('mongodb://127.0.0.1:27017/url_shortener').then(()=>{
    console.log("Database connected");
})


//create server 
app.listen(port, function(){
    console.log("listen port: " + port);
});