import 'antd/dist/antd.css'
import './styles.css'
import React from 'react'
import { render } from 'react-dom'

import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Main from './components/Main';
import NotFound from './components/NotFound';
import Fetch from './components/Fetch';
import SwipeableRoutes from 'react-swipeable-routes'
import Work from './components/Work'

const jsonUrl = 'http://rawsaw.co/jagna1984/wp-json/sections/v1/post'

export const routeKey = 'post_name';


const prev = (data, item) => {
  const currentIndex = data.findIndex(i=>i[routeKey] === item[routeKey])
  if (data[currentIndex -1]) return data[currentIndex -1][routeKey]
  return false
}
const next = (data, item) => {
  const currentIndex = data.findIndex(i=>i[routeKey] === item[routeKey])
  if (data[currentIndex +1]) return data[currentIndex +1][routeKey]
  return false;
}



const App = ({data}) => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Main data={data}/>} />
        <SwipeableRoutes replace>
          {data.map( work =>
            <Route
              key={work.ID}
              path={'/'+work[routeKey]}
              component={()=><Work {...work}
              next={next(data,work)}
              prev={prev(data,work)} />}
            />)}
        </SwipeableRoutes>
        <Route component={NotFound} />

      </Switch>

    </Router>
  )
}

render(<Fetch component={App} url={jsonUrl}/>, document.getElementById('root'))
