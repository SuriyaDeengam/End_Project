/**
 *	Fix2_3 container
 */

import React from 'react';
import Fix2_3 from '../../screen/fix2_3Screen';

class fix2_3Container extends React.Component {
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
			<Fix2_3
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default fix2_3Container;
