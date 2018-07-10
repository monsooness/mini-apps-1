const express = require('express')
const app = express() 
const path = require('path'); 

//Serve static assests
app.use(express.static('client'))

//Parse the body on post request
app.get



//Tell server to host on local port 3000
app.listen(3000, () => console.log('Succesfull connection on localhost:3000'))