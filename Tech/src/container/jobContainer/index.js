/**
 *	Job container
 */

import React from 'react';
import Job from '../../screen/jobScreen';

class JobContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			aa:[],
		};
	}
	componentWillMount(){
		const { navigation } = this.props;
		aa = navigation.getParam('aa');
		this.setState({aa:aa})
		// console.log(aa);
		
	}
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		return (
			<Job
				aa={this.state.aa}
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default JobContainer;
