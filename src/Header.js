import React from 'react'
import { Button } from 'antd'

//const allCategories = ['paintings', 'animals', 'exhibitions'];

const buttons = [];

export default ({toggleFilter, categoryList}) => {
  
  categoryList.forEach(c => {
    buttons.push(<Button
          key={c}
          style={{marginLeft:10}}
          onClick={toggleFilter(c )} 
          >
          {c.toUpperCase()}
        </Button>)
  })

  return (<div className="header">
  
    <div className="jag-main-logo"> Jagna Wróblewska </div> 
    <div className="wpupg-filter">
{/*      {buttons}  */}

  </div>
  </div>)
}
/*
type={categoryList.includes(c) ? "primary" : "secondary"} */