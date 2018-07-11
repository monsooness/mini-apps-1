const mysql = require('mysql')

const connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'userInfo'
});

connection.connect( (err) => {
   if (err) {
   	console.log('Problem connecting to SQL')
   } else {
   	console.log('Successfully connecting to SQL')
   }
});

module.exports = connection;