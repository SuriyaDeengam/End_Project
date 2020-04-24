/**
 *	Fix2_6 container
 */

import React from 'react';
import Fix2_6 from '../../screen/fix2_6Screen';

class fix2_6Container extends React.Component {
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
			<Fix2_6
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default fix2_6Container;
