import React from 'react';
 
import Work from './Work';
import data from '../data';

const centered = {
	left: '0',
	right: '0',
	textAlign: 'center',
};

class Works extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      id:0

    };
  }

  incrementItem = () => {
    this.setState({ id: this.state.id + 1 });
  }

	render() {
    const url = data[this.state.id].thumbnail;
    const name = data[this.state.id].name;

    return (

	    	<div style={centered}>  

		    	<Work tagline={url} more={name} />
		    	 
		    	<button onClick={this.incrementItem}> Next </button>

	     	</div>

	    )
	}
}

export default Works;