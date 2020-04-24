/**
 *	Fix2_8 container
 */

import React from 'react';
import Fix2_8 from '../../screen/fix2_8Screen';

class fix2_8Container extends React.Component {
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
			<Fix2_8
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default fix2_8Container;
