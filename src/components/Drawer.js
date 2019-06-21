import React, { Component } from 'react';

const Drawer = ( props ) => {

	let  drawerClass = null;
	if ( props.infoActive == true ) { 
         drawerClass  = ("jag-project-description jag-project-description__open");
  	} else if ( props.infoActive == false ) { 
         drawerClass  = ("jag-project-description");
  	}

	return (

		<div>  
	    	<div className={drawerClass}>
	    		{ props.description }
	    	</div>		
		</div>
	)
}

export default Drawer;