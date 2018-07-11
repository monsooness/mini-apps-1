const express = require('express')
const app = express()  
const Data = require('./model.js')

app.use(function(req, res, next) {
	console.log(req.method, req.path);
	next()
});

//Serve static assests
app.use(express.static('client'))

//Parse the body on post request
app.get('/getInfo', function (req, res) {
  Data.retrieveData( (err, data) => {
  	if (err) {
  		res.status(404).send(err)
  	} else {
        res.status(201).send(Data.addData(data));
  	}
  })
})


//Tell server to host on local port 3000
app.listen(3000, () => console.log('Succesfull connection on localhost:3000'))