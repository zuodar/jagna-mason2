import 'antd/dist/antd.css'
import '../styles.css'
import React, { PureComponent  } from 'react'
import { render } from 'react-dom';
import lodash from 'lodash'
import { Icon } from 'antd' 
//import data from '../data.json'
// import dataJson from '../data.json';
import Header from '../Header'
import { Grid, Slug, Fade } from 'mauerwerk'
import ReactResizeDetector from 'react-resize-detector';

 


//acf.cst_feat_img.sizes.large

const Cell = ({ ID, toggle, post_title, thumbnail,  project_description, css, maximized }) => (


    <div
      className="cell"
      style={{ backgroundImage: css, cursor: !maximized ? 'pointer' : 'auto' }}
      // onClick={!maximized ? toggle : undefined}
    >
      <Fade show={maximized} delay={maximized ? 400 : 0}>
        <div className="details">
          <Slug delay={600}>
            <div className="circle" style={{ background: css }} />
            <div className="close">
              <Icon type="close" style={{ cursor: 'pointer' }} onClick={toggle} />
            </div>
            <h1>{post_title}</h1>
            <p>{project_description}</p>
          </Slug>
        </div>
      </Fade>
 
 

      <Fade
        show={!maximized}
        from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
        enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
        leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
        delay={maximized ? 0 : 400}>

        <div className="default"> {post_title} </div>
        <img src={ thumbnail } />

      </Fade>
    </div>
  
)



class App extends PureComponent  {

  categoryList = []

  state = {  
    columns: 5, 
    margin: 40,
    szer: 0,
    responsiveFactor: 100,
  } 


 
  modifyColumns = () => {  
    if (this.state.szer > 1400 ) {
      this.setState({ columns: 5 });
      this.setState({ responsiveFactor: (this.state.szer - 240)/5 });
    } else if (this.state.szer > 1100 && this.state.szer <= 1400) {
      this.setState({ columns: 4 });
      this.setState({ responsiveFactor: (this.state.szer - 200)/4 });  
    } else if (this.state.szer > 800 && this.state.szer <= 1100) {
      this.setState({ columns: 3 });
      this.setState({ responsiveFactor: (this.state.szer - 160)/3 });
    } else if (this.state.szer > 400 && this.state.szer <= 800) {
      this.setState({ columns: 2 });
      this.setState({ responsiveFactor: (this.state.szer - 120)/2 });
    } else if (this.state.szer > 1 && this.state.szer <= 400) {
      this.setState({ columns: this.state.columns = 1 });
      this.setState({ responsiveFactor: (this.state.szer - 80)  }); 
    }  
  }


  /*  componentDidMount(){
    this.modifyColumns()
  }*/

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
  
  //shuffle = () => this.setState(state => ({ data: lodash.shuffle(state.data) }))

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


        <Header
          {...this.state}
          categoryList={this.categoryList}
          search={this.search}
          shuffle={this.shuffle}
          toggleFilter={this.toggleFilter}
          setColumns={this.setColumns}
          setMargin={this.setMargin}
        />

        <ReactResizeDetector 
          handleWidth
          render={({ width }) => (
            <div>
              { this.setState({ szer: width }) }
              { this.modifyColumns() }
            </div>

          )}
        />


        <Grid
          className="grid"
          // Arbitrary data, should contain keys, possibly heights, etc.
          data={filteredWorks}
          // Key accessor, instructs grid on how to fet individual keys from the data set
          keys={ d => d.ID }
          // Can be a fixed value or an individual data accessor
          // heights={this.state.height ? d => d.height : 300} 
          heights={ d => (d.acf.cst_feat_img.sizes["large-height"])/(d.acf.cst_feat_img.sizes["large-width"])*this.state.responsiveFactor } 
          // Keep image proportions 

          //heights={d => d.height} 
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





