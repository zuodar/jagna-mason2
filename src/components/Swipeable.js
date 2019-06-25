import React, { Component } from "react";
 
// import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import Work from './Work';
import Drawer from './Drawer';
// import dataJson from '../data.json';
import { CSSTransition } from "react-transition-group";

const centered = {
  left: '0',
  right: '0',
  textAlign: 'center', 
};

class App extends Component {

  state = {  
    id:0,
    infoActive: false,
    appearHome: true,
    right: true 
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

      const RedView = () => (
        <div style={{ height: 800  }}>
          <Work 
              cst_feat_img={ this.props.data[0].acf.cst_feat_img.sizes.large } 
              postTitle={ this.props.data[0].post_title } 
              postID={ID}
              infoActive={ this.state.infoActive } 
          />
        </div>

      );

      const BlueView = () => (
        <div style={{ height: 800  }}>
          <Work 
              cst_feat_img={ this.props.data[1].acf.cst_feat_img.sizes.large } 
              postTitle={ this.props.data[1].post_title } 
              postID={ID}
              infoActive={ this.state.infoActive } 
          />
        </div>

      );

      const GreenView = () => (
        <div style={{ height: 800  }}>
           <Work 
              cst_feat_img={ this.props.data[2].acf.cst_feat_img.sizes.large } 
              postTitle={ this.props.data[2].post_title } 
              postID={ID}
              infoActive={ this.state.infoActive } 
          />
        </div>

      );

      const YellowView = () => (
        <div style={{ height: 800  }}>
          <Work 
              cst_feat_img={ this.props.data[3].acf.cst_feat_img.sizes.large } 
              postTitle={ this.props.data[3].post_title } 
              postID={ID}
              infoActive={ this.state.infoActive } 
          />
        </div>

      );

      return (
        <Router>

          <div>
      
            <div >
              <Link to="/red">Red</Link> 
              <Link to="/blue">Blue</Link> |
              <Link to="/green">Green</Link> 
              <Link to="/yellow">Yellow</Link>
            </div>
   
            <SwipeableRoutes replace>
              <Route path="/red" component={RedView} />
              <Route path="/blue" component={BlueView} />
              <Route path="/green" component={GreenView} />
              <Route path="/yellow" component={YellowView} />
            </SwipeableRoutes>


{/*        <div id="slider" className="jagSwipe" style={centered}>
            <div className="wrapper">
                <div id="slides" className="slides">
                    <div className="slide content-area ">
                        <div className="site-main scene_element2 scene_element--fadein2">

                          <Work 
                              cst_feat_img={cst_feat_img} 
                              postTitle={name} 
                              postID={ID}
                              right={ this.state.right }    
                              infoActive={ this.state.infoActive } 
                          />
                        </div>
                    </div>
                </div>
            </div>*/}

           {/*
            <Drawer
              infoActive={ this.state.infoActive }
              description={ description }
            /> 
              
            <div className="jag-info-btn">   
                <div className="jag-info-btn__txt"
                   onClick={ this.toggleInfoDrawer }> Info
                </div>   
            </div>

          */}
       {/* </div>*/}



          </div>
        </Router>
    );
  }
}
 
export default App; 