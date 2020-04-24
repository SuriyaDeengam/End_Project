/**
 *	Location container
 */

import React from 'react';
import Location from '../../screen/locationScreen';

class locationContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	
		};
	}
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		return (
			<Location
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default locationContainer;
