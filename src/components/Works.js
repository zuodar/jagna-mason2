import React, { Component } from 'react';
import Work from './Work';
import data from '../data';
import dataJson from '../data.json';

const centered = {
	left: '0',
	right: '0',
	textAlign: 'center',
};

class Works extends Component {
  state = {
    id:0,
    infoActive: false
  };

  incrementItem = () => {
    const dupa = data[0];

      if ( this.state.id + 1 < data.length) {
        this.setState({ id: this.state.id + 1 });  
      //  console.log(name);
      } else {
        this.setState({ id: 0 }); 
      }
  };

  decrementItem = () => {
      if ( this.state.id > 0 ) {
        this.setState({ id: this.state.id - 1 });  
      } else {
        this.setState({ id: data.length - 1 }); 
      }    
  }

  showInfoDrawer = () => {
    const shown = this.state.infoActive;
    this.setState({ infoActive: !shown })
    console.log(this.state.infoActive);
  }

	render() {
    const stateId = this.state.id;
    const url = data[stateId].thumbnail;
    const name = data[stateId].name;
    const description = data[stateId].description;
    const infoActive = data[stateId].infoActive;

    return (
      <div id="slider" className="jagSwipe" style={centered}>
          <div className="wrapper">
              <div id="slides" className="slides">


                  <div className="slide content-area ">
                      <div className="site-main scene_element2 scene_element--fadein2">
                        <Work 
                          thumbnailUrl={url} 
                          workTitle={name} 
                          description={description} 
                          infoActive={ this.state.infoActive } 
                          showInfoDrawer={ this.showInfoDrawer } />
                      </div>
                  </div>


              </div>
          </div>
          <button onClick={this.decrementItem}> Prev </button>
          <button onClick={this.incrementItem}> Next </button>
      </div>
	    )
	}
}


export default Works;