/**
 *	Fix2_1 container
 */

import React from 'react';
import Fix2_1 from '../../screen/fix2_1Screen';

class fix2_1Container extends React.Component {
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
			<Fix2_1
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default fix2_1Container;
