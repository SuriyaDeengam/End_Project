/**
 *	Price container
 */

import React from 'react';
import Price from '../../screen/priceScreen';

class priceContainer extends React.Component {
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
			<Price
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default priceContainer;
