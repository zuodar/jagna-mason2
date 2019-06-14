import React from 'react';
 
import Work from './Work';
import data from '../data';

const centered = {
	left: '0',
	right: '0',
	textAlign: 'center',
};

var id = 3;
var url = data[id].thumbnail;
var name = data[id].name;

 
 
class Works extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      id:0

    };
  }

  IncrementItem = () => {
    this.setState({ id: this.state.id + 1 });
    this.setState({ id: this.state.id + 1 });
    console.log(this.state.id);
  }

	render() {
	    return (

	    	<div style={centered}>  

		    	<Work tagline={url} more={name} />
		    	 
		    	<button onClick={this.IncrementItem}> Next </button>

	     	</div>

	    )
	}
}

export default Works;