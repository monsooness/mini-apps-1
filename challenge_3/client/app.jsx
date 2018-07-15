class App extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
				buttonName : 'Create Account',
				count : 0,
				name : '',
				last_name : '',
				email : '',

			}	
	}

	buttonClick() {
		this.setState({buttonName : 'Next'})
	}

	handleChange(e) {
		this.setState({[e.target.id] : e.target.value})
	}
    
    handleClick() {
    	alert('hi')
    	alert(this.state.name)
    }


	render() {
		let form;

		if (this.state.count ===1) {
			form = <Form1 />
		} else if (this.state.count ===2) {
			form = <Form2 />
		} else if (this.state.count === 3) {
			form = <Form3 />
		}

		return (
			<div>
			{form}	
			<button 
			  onClick={() => 
			  	this.setState({buttonName: 'Next',
			  				   count : this.state.count +1})
			}>
			  {this.state.buttonName}
			  }
			</button> 
			</div>
		);
	}
}

function Form1(props) {
	return (
		<div>
		  <label>
		  Enter your names:
		  <input id='name' value={props.name} type='text' name="First Name" onChange={props.handleChange}/>
		  <input type='text' value={props.last_name} id="last_name" onChange={props.handleChange}/>
		  <input type='text' value={props.email} id="email" onChange={props.handleChange}/>
		  <button type='submit' onClick={props.buttonClick} >
		    Submit
		  </button>
		  </label>
		</div>

	)
}

function Form2(props) {
	return (
		<form>
		Enter your Address
		<input type='text' name='Address' />
		</form>
	)
}


ReactDOM.render(<App />, document.getElementById('root'))