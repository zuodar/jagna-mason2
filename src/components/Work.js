import React, { Component, useState } from 'react';
import Drawer from './Drawer'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { routeKey } from '../index'

const divStyle = {
	left: '0',
	right: '0',
	fontSize: '24px'
};

const Work = ( { acf : {cst_feat_img, project_description}, postTitle, prev, next } ) => {
	const [drawerOpened, setDrawerOpened] = useState(false)
	return (
		<div style={{position:'relative'}}>
			<Link to={'/'}>Home</Link>
			{prev ? <Link to={prev}>Prev</Link> : undefined}
			{next ? <Link to={next}>Next</Link>: undefined}
			<Drawer drawerOpened={drawerOpened} description={project_description}/>
			<button onClick={()=>setDrawerOpened(!drawerOpened)}>Toggle Drawer</button>
			<h1> {cst_feat_img.title}</h1>

			<img src = {cst_feat_img.sizes.large} />

		</div>

	)
}


export default Work;