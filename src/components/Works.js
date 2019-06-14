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

		{/*    	<Work thumbnailUrl={data[id-1].thumbnail} workTitle={data[id-1].name} />*/}
		    	<Work thumbnailUrl={data[id].thumbnail} workTitle={data[id].name} />
		 {/*   	<Work thumbnailUrl={data[id+1].thumbnail} workTitle={data[id+1].name} />*/}
 
		    	 
		    	<button onClick={this.IncrementItem}> Next </button>

	     	</div>

	    )
	}
}

export default Works;