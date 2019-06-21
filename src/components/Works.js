import React, { Component } from 'react';
import Work from './Work';
import Drawer from './Drawer';
// import dataJson from '../data.json';
import { CSSTransition } from "react-transition-group";

const centered = {
	left: '0',
	right: '0',
	textAlign: 'center', 
};

class Works extends Component {


  state = { 
    id:0,
    infoActive: false,
    appearHome: true,
    right: true,
    dataJson2: null
  }

  toggleInfoDrawer = () => {
    this.setState({
      infoActive: !this.state.infoActive,
    }) 
  }

  showInfoDrawer = () => {
    this.setState({
      infoActive: false,
    }) 
  }

  left = () => {
    this.setState({
      right: false,
    }) 
  } 

  right = () => {
    this.setState({
      right: true,
    }) 
  }

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome,
    }) 
  }

  incrementItem = () => {
      if ( this.state.id + 1 < this.props.data.length) {
        this.setState({ id: this.state.id + 1 });
      } else {
        this.setState({ id: 0 }); 
      }
  }

  decrementItem = () => {
 //    console.log('this.state.dataJs:', this.state.dataJs);
      if ( this.state.id > 0 ) {
        this.setState({ id: this.state.id - 1 });
      } else {
        this.setState({ id: this.props.data.length - 1 });
      }    
  }


  wrapperFunctionPrev = () => {
    this.showInfoDrawer();
    () => this.state.toggleAppear();
    this.decrementItem();
    this.left(); 
  }

  wrapperFunctionNext = () => {
    this.showInfoDrawer();
    () => this.state.toggleAppear();
    this.incrementItem();
    this.right(); 
  }

 
	render() {
      const stateId = this.state.id;
      const item = this.props.data[stateId]
      const cst_feat_img = item.acf.cst_feat_img.sizes.large;
  //    const alt_feat_img = this.state.dataJson2[stateId].acf.alt_feat_img.sizes.large;
      const name = item.post_title;
      const ID = item.ID;
      const description = item.acf.project_description;
      const infoActive = item.infoActive;

   
      return (
        <div id="slider" className="jagSwipe" style={centered}>
            <div className="wrapper">
                <div id="slides" className="slides">

                    <div className="slide content-area ">
                        <div className="site-main scene_element2 scene_element--fadein2">

                          <CSSTransition
                            in={this.state.appearHome}
                            appear={true} 
                            timeout={ 350}
                            classNames="fade" >
                            <Work 
                              cst_feat_img={cst_feat_img} 
                              postTitle={name} 
                              postID={ID}
                              right={ this.state.right }  
                              
                              infoActive={ this.state.infoActive } 
                               />
                          </CSSTransition>

                        </div>
                    </div>

                </div>
            </div>



            <Drawer
              infoActive={ this.state.infoActive }
              description={ description }
            /> 
              
            <div className="jag-info-btn">   
                <div className="jag-info-btn__txt"
                   onClick={ this.toggleInfoDrawer }> Info
                </div>   
            </div>

            <button
              className="jag-btn-prev-post" 
              onClick= {this.wrapperFunctionPrev} >
              Prev 
            </button>

            <button            
              className="jag-btn-next-post" 
              onClick= {this.wrapperFunctionNext} >
              Next 
            </button>


        </div>
  	    )
  	}
 
}


export default Works;