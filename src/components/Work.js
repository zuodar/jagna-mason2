import React from 'react';
import data from '../data';
 

const divStyle = {
	left: '0',
	right: '0',
	fontSize: '24px'
};


class Work extends React.Component {


 

  render() {
    return (

    	<div>   

	    	<div className="" style={divStyle}> 
	    		{this.props.workTitle} 
	    	</div> 
	    	<div className="jag-image jag-img jag-image1 jag-img-active "> 
		    	<div className="post-thumbnail">
			    	<img className="attachment-post-thumbnail size-post-thumbnail wp-post-image"  
			    	src={this.props.thumbnailUrl}
			    	/> 
		    	</div> 
	    	</div>   

    	</div>

    )
  }
}

export default Work;
