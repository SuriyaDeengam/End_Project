/**
 *	Fix2_2 container
 */

import React from 'react';
import Fix2_2 from '../../screen/fix2_2Screen';

class fix2_2Container extends React.Component {
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
			<Fix2_2
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default fix2_2Container;
