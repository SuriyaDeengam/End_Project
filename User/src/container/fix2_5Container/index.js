/**
 *	Fix2_5 container
 */

import React from 'react';
import Fix2_5 from '../../screen/fix2_5Screen';

class fix2_5Container extends React.Component {
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
			<Fix2_5
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default fix2_5Container;
