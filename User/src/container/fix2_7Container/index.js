/**
 *	Fix2_7 container
 */

import React from 'react';
import Fix2_7 from '../../screen/fix2_7Screen';

class fix2_7Container extends React.Component {
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
			<Fix2_7
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default fix2_7Container;
