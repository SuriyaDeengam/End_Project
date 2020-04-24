/**
 *	Fix2_4 container
 */

import React from 'react';
import Fix2_4 from '../../screen/fix2_4Screen';

class fix2_4Container extends React.Component {
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
			<Fix2_4
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default fix2_4Container;
