/**
 *	Me container
 */

import React from 'react';
import Me from '../../screen/meScreen';
import * as firebase from 'firebase';

class meContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	
		};
	}
	Out() {
        firebase.auth().signOut()
    }

	// componentDidMount(){
		
	// 	console.log(firebase.auth().currentUser);
	// }
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		return (
			<Me
				setComponentState={this._setState}
				navigation={this.props.navigation}
				Out={this.Out}
			/>
		);
	}
}

export default meContainer;
