const express = require('express')
const app = express() 
const path = require('path'); 

//serve static assests to handle any http request
app.use(express.static('client'))



app.listen(3000, () => console.log('Web Server listening on localhost:3000'))