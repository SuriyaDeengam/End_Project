/**
 *	CreateCar container
 */

import React from 'react';
import Createcar from '../../screen/carScreen';




class carContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			brand: "",
			model: "",
			capacity: "",
			registration: "",
			color: "",
		};
		
	}
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		return (
			<Createcar
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default carContainer;
