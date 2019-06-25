import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import ReactResizeDetector from 'react-resize-detector';
 
class App extends PureComponent {

  state = { 
    szer: 0
  }

/*    onResize = () => {
       console.log(height)
      console.log('height2')
         
    }*/

  render() {
    return (
      <div>
         
        <ReactResizeDetector
          handleWidth
          render={({ width }) => (
            <div>
              { 
                this.setState({ szer: width }),
                console.log( this.state.szer ) 
              }
            </div>
          )}
        />

      </div>
    );
  }


}
 

export default App;
