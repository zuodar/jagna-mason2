import React, { Component } from 'react';
// import Drawer from './Drawer';
 
const divStyle = {
	left: '0',
	right: '0',
	fontSize: '24px'
};

const Work = ( props ) => {

	let description = null;
	if ( props.showInfo ) {
        description  = (
 	   		<div className="jag-project-description jag-project-description__open">
	    		{ props.description }
			</div>
		);
  	}

  	console.log( 'props.infoActive', props.infoActive )

	return (
    	<div>

	    	<div className="jag-info-btn2"> 	
				<div
					className="jag-info-btn__txt2"
					onClick={ props.showInfoDrawer }> Info </div> 				
			</div>

 			<div className="jag-single-title">
           		 { props.workTitle}  
        	</div> 

	    	<div className="jag-image jag-img jag-image1 jag-img-active "> 
		    	<div className="post-thumbnail">
			    	<img className="attachment-post-thumbnail size-post-thumbnail wp-post-image"  
			    	src={ props.thumbnailUrl}
			    	/> 
		    	</div> 
	    	</div>

			<div>
				{description }
			</div>




    	</div>
	)
}


export default Work;