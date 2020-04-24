/**
 *	List container
 */

import React from 'react';
import Inlist from '../../screen/inlistScreen';




class InlistContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentWillMount() {
		const { navigation } = this.props;
		aa = navigation.getParam('aa');
		this.setState({ aa: aa })

		aa2 = navigation.getParam('aa2');
		this.setState({ aa2: aa2 })
		// console.log(aa);

	}
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		return (
			<Inlist
				aa={this.state.aa}
				aa2={this.state.aa2}
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default InlistContainer;
