import React, { Component } from 'react';
// import Drawer from './Drawer';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const divStyle = {
	left: '0',
	right: '0',
	fontSize: '24px'
};

const Work = ( props ) => {



	let  slideClass = null;
	if ( props.right == true ) { 
         slideClass  = ("slideright");
  	} else   { 
         slideClass  = ("slideleft");
  	}

	return (


            <TransitionGroup className="card-container">
                <CSSTransition
                    key={ props.postID }
                    timeout={ 1000 }
                    classNames={ slideClass } >

			    	<div className="card duppa"> 

			 			<div className="jag-single-title"> { props.postTitle} </div> 

				    	<div className="jag-image jag-img jag-image1 jag-img-active  "> 
					    	<div className="post-thumbnail">
						    	<img className="attachment-post-thumbnail size-post-thumbnail wp-post-image"  
						    	src={ props.cst_feat_img}
						    	/> 
					    	</div> 
				    	</div>
 

				    	<div className="jag-image jag-img jag-image3 jag-img-active"> 
								<img src="http://rawsaw.co/jagna1984/wp-content/uploads/2019/02/UN-09.jpg" />
						</div>




			    	</div>


                </CSSTransition>
            </TransitionGroup>



	)
}


export default Work;