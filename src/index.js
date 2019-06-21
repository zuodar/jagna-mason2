import 'antd/dist/antd.css'
import './styles.css'
import React from 'react'
import { render } from 'react-dom'
 
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Main from './components/Main';
import Works from './components/Works';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router> 
        <Switch> 

          <Route path="/" exact component={Main} />
          <Route path="/works/:id" component={Works} />
          <Route component={NotFound} />

        </Switch>
      
    </Router>
  )
}

render(<App />, document.getElementById('root'))
