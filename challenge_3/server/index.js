const express = require('express');
const app = express();
const PORT = 3000;
const data = require('../database/db_model.js')
const path = require('path');

//middleware

app.use(express.static('public'))

//Endpoints

// app.post('/users', (req,res) => {
//   data.addUsers(name, lastname, email, pass, (err) => {
//   	if (err) {
//   		console.log('Error:', err)
//   		return
//   	} else {
//   		console.log(data)
//   	}
//   })
// })

// app.get('/users', (req,res) => {
// 	res.send('hello')
// })


//required
//app.use static asset

//get
//post

//listen



// app.post('/users', (req,res) => {

// })

// app.get('/users_address', (req,res) => {
  

// })

// app.post('/users_address', (req,res) => {

// })

// app.get('/users_banking', (req,res) => {
  

// })

// app.post('/users_banking', (req,res) => {

// })


app.listen(PORT, () => console.log('Succesfully connected to port 3000!'))