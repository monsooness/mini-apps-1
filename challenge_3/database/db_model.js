const connection = require('./index.js');


//users query
const addUsers = (name, lastname, email, pass, cb) => {
  var arr = [name, lastname, email, pass]
  connection.query('INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)', arr, cb)
};

const getUsers = (name, cb) => {
 	var arr = [name]
 	connection.query('SELECT * FROM USERS WHERE first_name = ?', arr)
};

//users_address query

const addUsersAddress = (cb) => {
  var arr = [street, city, state, zip]
  connection.query('INSERT INTO users (street, city, state, zip) VALUES (?, ?, ?, ?)', arr, cb)
};

const getUsersAddress = (cb, item) => {
 	var arr = [name]
 	connection.query('SELECT * FROM users_address from  first_name = ?', arr)
};

//users_banking query

const addUsersBanking = (cb) => {
  var arr = [credit, exp, cvv, zip]
  connection.query('INSERT INTO users (credit, exp, cvv, zip) VALUES (?, ?, ?, ?)', arr, cb)
};

const getUsersBanking = (cb, item) => {
 	var strQuery = ''
 	connection.query(strQuery, (err,result) => {
 		if (err) {
 			console.log('Bad request 404')
 		} else {
 			cb(null, item)
 		}
 	})
};

// addUsers('ravee','malla','ravmalla','monsoon', (err) => {
// 	if (err) {
// 		console.log('err')
// 	} else {
// 		console.log('succesfully added ravee to db')
// 	}
// })


module.exports = {
	addUsers,
	getUsers,
	addUsersAddress,
	getUsersAddress,
	addUsersBanking,
	getUsersBanking
}

