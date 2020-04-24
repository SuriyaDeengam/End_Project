/**
 *	Fix1 container
 */

import React from 'react';
import Fix1 from '../../screen/fix1Screen';

class fix1Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			language: "script",
	
		};
	}
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		return (
			<Fix1
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default fix1Container;
