import React, { Component, Fragment } from 'react';
import './HeaderComponent.style.css';
import YoutubeLogo from './YoutubeLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle,faTh,faEllipsisV,faVideo } from "@fortawesome/free-solid-svg-icons";
import SearchComponent from '../SearchComponent/SearchComponent';

class HeaderComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Fragment>
				<section className='headerBlock'>
					<article>
						<div className='logo'>
							<div>
								<a href="/#">
									<FontAwesomeIcon icon={faBars} />
								</a>
							</div>
							<a href='/#'>
								<YoutubeLogo/>
							</a>
						</div>

						<div className='search'>
							<SearchComponent FromHeaderFormSubmit={this.props.FormAppFromSubmit}/>
						</div>
						
						<div className='menuBlock' >
							<div style={{width:"7%",margin:"0 10px"}}>  				{/*videoUpload*/}
								<a href="/#">
									<FontAwesomeIcon icon={faVideo}/>
								</a>
							</div>
							<div style={{width:"7%",margin:"0 10px"}}>
								<a href="/#">
									<FontAwesomeIcon icon={faTh}/>
								</a>
							</div>
							<div style={{width:"7%",margin:"0 10px"}}>
								<a href="/#">
									<FontAwesomeIcon icon={faEllipsisV}/>
								</a>
							</div>
							<div>
								<button><i><FontAwesomeIcon icon={faUserCircle}/> </i>  SIGN IN</button>
							</div>
						</div>
					</article>
				</section>
			</Fragment>
		);
	}
}

export default HeaderComponent;

