import 'antd/dist/antd.css'
import './styles.css'
import React from 'react'
import { render } from 'react-dom' 
 
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Main from './components/Main';
import Works from './components/Works';
import NotFound from './components/NotFound';
import Fetch from './components/Fetch';
import Swiper from './components/Swiper';
import Swipeable from './components/Swipeable';
import Test from './components/Test';
import Test2 from './components/Test2';
import Resize from './components/Resize';

const jsonUrl = 'http://rawsaw.co/jagna1984/wp-json/sections/v1/post'

// class App extends Component {
const App = () => {
  return (
    <Router> 
        <Switch> 

          <Route path="/main" exact component={() => <Fetch component={Main} url={jsonUrl}/>} /> 
          <Route path="/" exact component={() => <Fetch component={Swipeable} url={ jsonUrl }/>} />
          <Route path="/test" exact component={Test} />
          <Route path="/test2" exact component={Test2} />
          <Route path="/swiper" exact component={Swiper} />
          <Route path="/resize" exact component={Resize} />
          <Route
            path="/works/:id"
            component={
              ({match})=><Fetch match={match} component={Works} url={ jsonUrl }/>} />
          <Route component={NotFound} />

        </Switch>
      
    </Router>
  )
}

render(<App />, document.getElementById('root'))
