import React from 'react';
// import Fish from './Fish';
import sampleFishes from '../sample-fishes';


const divStyle = {
	left: '0',
	right: '0',
	fontSize: '24px'
};


class Work extends React.Component {


    loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }


  render() {
    return (

    	<div>   

	    	<div className="" style={divStyle}> 
	    		{this.props.more} 
	    	</div> 
	    	<div className="jag-image jag-img jag-image1 jag-img-active "> 
		    	<div className="post-thumbnail">
			    	<img className="attachment-post-thumbnail size-post-thumbnail wp-post-image"  
			    	src={this.props.tagline}
			    	/> 
		    	</div> 
	    	</div>   

    	</div>

    )
  }
}

export default Work;
