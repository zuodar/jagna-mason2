import React, { PureComponent  } from 'react'
import 'antd/dist/antd.css'
import '../styles.css'
import { Icon } from 'antd'
import Header from '../Header'
import { Grid, Slug, Fade } from 'mauerwerk'
import { Link } from 'react-router-dom'
import {routeKey} from '../index';
import ReactResizeDetector from 'react-resize-detector';
 
const cellStyle = {
  position: 'relative',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  color: '#777777',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  justifycontent: 'center',
  transition: 'box-shadow 0.5s',
  fontSize: '10px',
  lineHeight: '10px',
  border: '1px solid red', 
}

const defaultstyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  textAlign: 'center',
  fontFamily: 'jagnas',
  textTransform: 'uppercase',
  letterSpacing: '-2.5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '0px',
  top: '0%',
  left: '0%', 
  bottom: '0',
  right: '0',
  mixBlendMode: 'darken',
  fontSize: '66px',
  lineHeight: '66px',
  color: '#EF0000',
  opacity: '0.0',
  whiteSpace: 'nowrap',
 
 }

//acf.cst_feat_img.sizes.large

const Cell = props => {
  const { ID, toggle, post_title, thumbnail,  project_description, css, maximized } = props;
  return <Link to={props[routeKey]}>
    <div className="cell" >
      <Fade show={maximized} delay={maximized ? 400 : 0}>
        <div className="details">
            <h1>{post_title}</h1>
            <p>{project_description}</p>
        </div>
      </Fade>
      <Fade
        show={!maximized}
        from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
        enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
        leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
        delay={maximized ? 0 : 400}>

        <div className="default" style={defaultstyle} > {post_title} </div>
        <img src={ thumbnail } />

      </Fade>
    </div>
  </Link>
}




class App extends PureComponent  {

  categoryList = []

  state = {
    columns: 5,
    margin: 40,
    szer: 0,
    responsiveFactor: 100,
  }



  modifyColumns = () => {
    let newColumns = 5;
    if (this.state.szer > 1400 ) {
      newColumns = 5;
      this.setState({ responsiveFactor: (this.state.szer - this.state.margin*(newColumns+1))/newColumns });
    } else if (this.state.szer > 1100 && this.state.szer <= 1400) {
      newColumns = 4;
      this.setState({ responsiveFactor: (this.state.szer - this.state.margin*(newColumns+1))/newColumns });
    } else if (this.state.szer > 800 && this.state.szer <= 1100) {
      newColumns = 3;
      this.setState({ responsiveFactor: (this.state.szer - this.state.margin*(newColumns+1))/newColumns });
    } else if (this.state.szer > 400 && this.state.szer <= 800) {
      newColumns = 2;
      this.setState({ responsiveFactor: (this.state.szer - this.state.margin*(newColumns+1))/newColumns });
    } else if (this.state.szer > 1 && this.state.szer <= 400) {
      newColumns = 1;
      this.setState({ responsiveFactor: (this.state.szer - this.state.margin*(newColumns+1))/newColumns });
    }
    this.setState({ columns: newColumns });
  }

  componentWillMount(){
    this.categoryList = this.props.data.reduce((sum, current) => {
      if(current.acf.category) {
        current.acf.category.forEach(cat => {
          sum.add(cat)
        })
      }
      return sum;
    }, new Set())
  }


  toggleFilter = (category) =>
    () => {
      if (this.state.categoryList.includes( category)) {
        this.setState({ categoryList: this.state.categoryList.filter(c => c !== category) })
      } else {
        this.setState({ categoryList: [...this.state.categoryList, category] })
      }
    }

  setColumns = e => this.setState({ columns: parseInt(e.key) })
  setMargin = e => this.setState({ margin: parseInt(e.key) })



  render() {
    const { data } = this.props;
    const filteredWorks = data/*.filter(
    item => (this.state.categoryList.length > 0)
    ? this.state.categoryList.filter(c => item.category.includes(c)).length
    : true
    )*/


    // console.log(this.state.categoryList)
    // console.log( 'data.acf.cst_feat_img.height', this.props.data[0].acf.cst_feat_img.sizes["large-height"] )


    return (

      <div className="main">

        <ReactResizeDetector 
          handleWidth
          render={({ width }) => (
            <div>
              { this.setState({ szer: width }) }
              { this.modifyColumns() }
            </div>
          )}
        />

        <Header
          {...this.state}
          categoryList={this.categoryList}
          toggleFilter={this.toggleFilter}
        />

        <Grid
          className="grid"
          // Arbitrary data, should contain keys, possibly heights, etc.
          data={filteredWorks}
          // Key accessor, instructs grid on how to fet individual keys from the data set
          keys={ d => d.ID }
          // Can be a fixed value or an individual data accessor
          // heights={this.state.height ? d => d.height : 300}
          //heights={d => d.height}
          heights={ d => (d.acf.cst_feat_img.sizes["large-height"])/(d.acf.cst_feat_img.sizes["large-width"])*this.state.responsiveFactor }
          // Keep image proportions

          // Number of columns
          columns={this.state.columns}
          // Space between elements
          margin={this.state.margin}
          // Removes the possibility to scroll away from a maximized element
          lockScroll={false}
          // Delay when active elements (blown up) are minimized again
          closeDelay={400}>
          {(data, maximized, toggle) => (
            <Cell {...data} thumbnail={ data.acf.cst_feat_img.sizes.large } maximized={maximized} toggle={toggle} />
          )}
        </Grid>



      </div>
    )
  }
}

export default App;