/**
 *	Chat container
 */

import React from 'react';
import Chat from '../../screen/chatScreen';

class chatContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            msg: "",
	
		};
	}
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
        let { image1, image2 } = this.state;
        
		return (
			<Chat
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default chatContainer;
