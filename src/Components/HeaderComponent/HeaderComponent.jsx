import React, { Component, Fragment } from 'react';
import './HeaderComponent.style.css';
import YoutubeLogo from './YoutubeLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";
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
							<button className='leftButton' >
								<FontAwesomeIcon icon={faBars} />
							</button>
							<a href='/#'>
								<YoutubeLogo/>
							</a>
						</div>
						<div className='search'>
							<SearchComponent/>
						</div>
						<div className='menuBlock' >
							<div style={{width:"7%",margin:"0 10px"}}>  				{/*videoUpload*/}
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: 'none', display: 'block', width: '100%', height: '100%'}}><g className="style-scope yt-icon">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" className="style-scope yt-icon" />
        </g></svg>
							</div>
							<div style={{width:"7%",margin:"0 10px"}}>
							<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: 'none', display: 'block', width: '100%', height: '100%'}}><g className="style-scope yt-icon">
          <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" className="style-scope yt-icon" />
        </g></svg>
							</div>
							<div style={{width:"7%",margin:"0 10px"}}>
							<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: 'none', display: 'block', width: '100%', height: '100%'}}><g className="style-scope yt-icon">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" className="style-scope yt-icon" />
        </g></svg>
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

