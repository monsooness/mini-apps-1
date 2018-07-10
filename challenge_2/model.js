const data = require('./server')
const fs = require('fs');

const retrieveData = () => {
  fs.readFile('./samples/sales_report.json', 'utf8', (err, data) => {
    if (err) {
    	console.log('err:', err)
    } else {
    	console.log(data)
    }
  })
}

const addData = (input) => {
	fs.writeFile('./samples/sales_report.json', input, (err,data) => {
		if (err) {
			console.log('err:', err)
		} else {
			
		}
	})
}




retrieveData()