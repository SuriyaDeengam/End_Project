/**
 *	Fix2_9 container
 */

import React from 'react';
import Fix2_9 from '../../screen/fix2_9Screen';

class fix2_9Container extends React.Component {
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
			<Fix2_9
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default fix2_9Container;
