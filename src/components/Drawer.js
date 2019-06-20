import React, { Component } from 'react';

const Drawer = ( props ) => {

	let description = null;
	if ( props.showInfo == true ) {
        description  = (
 	   		<div className="jag-project-description jag-project-description__open">
	    		{ props.description }
			</div>
		);
  	}

  	console.log( 'props.showInfo', props.showInfo )

	return (
		<div>
			{description }
		</div>
	)
}


export default Drawer;