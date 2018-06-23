import React, { Component } from 'react';
import Youtube from 'react-youtube';

class player extends Component {
	render() {
		const opts = {
			height: '390',
			width: '640',
			playerVars: {
				autoplay: 1
			}
		};
		return (
		<div className="player">
		<Youtube
			videoId="zOaxVrrZWeo"
			opts = {opts}
			onReady={this._onReady}
		/>
		</div>
		);
	}
	
	_onReady(event) {
		event.target.pauseVideo();
	}
}

export default player;
