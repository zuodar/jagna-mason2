import React, { Component } from 'react';

const Drawer = ( {drawerOpened, description } ) =>
	    	<div className={drawerOpened ?
	    	 "jag-project-description jag-project-description__open" :
	    	 "jag-project-description"}>
	    		{ description }
	    	</div>

export default Drawer;