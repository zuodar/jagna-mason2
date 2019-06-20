import React, { Component } from 'react';
import Work from './Work';
// import data from '../data';
import dataJson from '../data.json';
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
    dataJson:  "http://rawsaw.co/jagna1984/wp-json/sections/v1/post" 
  }

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome
    })
  }

  incrementItem = () => {
      if ( this.state.id + 1 < dataJson.length) {
        this.setState({ id: this.state.id + 1 });
      } else {
        this.setState({ id: 0 }); 
      }
  }

  decrementItem = () => {
      if ( this.state.id > 0 ) {
        this.setState({ id: this.state.id - 1 });
      } else {
        this.setState({ id: dataJson.length - 1 });
      }    
  }

  showInfoDrawer = () => {
    const shown = this.state.infoActive;
    this.setState({ infoActive: !shown })
    console.log(this.state.infoActive);
  }

	render() {
    const stateId = this.state.id;
    const url = dataJson[stateId].acf.cst_feat_img.sizes.large;
    const name = dataJson[stateId].post_title;
    const ID = dataJson[stateId].ID;
    const description = dataJson[stateId].description;
    const infoActive = dataJson[stateId].infoActive;

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
                            thumbnailUrl={url} 
                            postTitle={name} 
                            postID={ID} 
                            description={description} 
                            infoActive={ this.state.infoActive } 
                            showInfoDrawer={ this.showInfoDrawer } />
                        </CSSTransition>

                      </div>
                  </div>

              </div>
          </div>

 


          <button 
            className="jag-btn-prev-post" 
            onClick={ () => this.state.toggleAppear(),
            this.decrementItem }>
            Prev 
          </button>
          
          <button 
            className="jag-btn-next-post" 
            onClick={ () => this.state.toggleAppear(),
            this.incrementItem }>
            Next 
          </button>


      </div>
	    )
	}
}


export default Works;