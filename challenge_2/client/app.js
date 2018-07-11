$('.get').on('click', function(input) {

  $.get(`http//127.0.0.1:3000/getInfo`, input, (err) => {
  	if (err) {
  	  console.log('Error')
  	} else {
      $.get(`http//127.0.0.1:3000/getInfo`, function( data ) {
      console.log('Success!')
    })
    });
  }
})
	



//convert to CSV goes here