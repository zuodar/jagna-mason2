import React from 'react';
import Work from './Work';
import data from '../data';
import dataJson from '../data.json';

const centered = {
	left: '0',
	right: '0',
	textAlign: 'center',
};

class Works extends React.Component {

d
  constructor(props) {
    super(props);
    this.state = {
      id:0 
    };
  }

  incrementItem = () => {
      if ( this.state.id + 1 < data.length) {
        this.setState({ id: this.state.id + 1 });  
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

	render() {
    const stateId = this.state.id;
    const url = data[stateId].thumbnail;
    const name = data[stateId].name;

/*    const nextUrl = data[stateId + 1].thumbnail;
    const nextName = data[stateId + 1].name;
    const prevUrl = data[stateId-1].thumbnail;
    const prevName = data[stateId-1].name; 
*/
    return (


      <div id="slider" className="jagSwipe" style={centered}>
          <div className="wrapper">
              <div id="slides" className="slides">

{/*                  <div className="slide jag-prev-post ">
                      <Work thumbnailUrl={prevUrl} />
                  </div>*/}

                  <div className="slide content-area ">
                      <div className="site-main scene_element2 scene_element--fadein2">
                        <Work thumbnailUrl={url} workTitle={name} />
                      </div>
                  </div>
{/*                  
                  <div className="slide jag-next-post ">
                      <Work thumbnailUrl={nextUrl}  />
                  </div>
*/}

              </div>
          </div>
          <button onClick={this.decrementItem}> Prev </button>
          <button onClick={this.incrementItem}> Next </button>
      </div>
	    )
	}
}

export default Works;