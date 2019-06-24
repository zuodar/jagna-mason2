import 'antd/dist/antd.css'
import '../styles.css'
import React, { Component } from 'react'
import data from '../data.json'
// import lodash from 'lodash'
// import { Icon } from 'antd' 
// import dataJson from '../data.json';
// import Header from '../Header'
import { Grid } from 'mauerwerk'

 
class App extends Component {

  state = {
 
  }

  render() {

    const ids = data.map(( obj => <li> 
      { obj.post_title } <br/>
      { obj.ID } <br/>
      { obj.acf.project_description } <br/>
 

        <img src={ obj.acf.cst_feat_img.sizes.large } />

      </li>  ) );

    return (
      
      <div>
        <ul>{ ids } </ul>
      </div>

    )

  }
}

export default App;