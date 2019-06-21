import React from 'react'
import { Button } from 'antd'

const allCategories = ['paintings', 'animals', 'exhibitions'];

export default ({toggleFilter, categoryList}) =>
  
  <div className="header">
  
    <div className="jag-main-logo"> Jagna Wróblewska </div> 
    <div className="wpupg-filter">
      {allCategories.map(
        c => <Button
          key={c}
          style={{marginLeft:10}}
          type={categoryList.includes(c) ? "primary" : "secondary"}
                     onClick={toggleFilter(c )}>
          {c.toUpperCase()}
        </Button>
      )}
    </div>

  </div>

