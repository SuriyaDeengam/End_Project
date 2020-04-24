/**
 *	Application splashscreen
 */

import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import * as firebase from 'firebase';

class Splash extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		setTimeout(() => {
			if (firebase.auth().currentUser != null && firebase.auth().currentUser.displayName == "2") {
				this.props.navigation.navigate('APP')
			}
			else {
				this.props.navigation.navigate('AUTH')
			}
		}, 3000);
	}

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#eeddc1" }}>
				<View style={{ flex: 10 }}>
					<Image
						source={require('./resource/logo_chung.png')}
						style={{ width: width, height: '100%' }}
						resizeMode={'contain'}
					/>
				</View>
				<View style={{ flex: 1 }}>

				</View>

			</View>
		)


	}
}

export default Splash;
export const { width, height } = Dimensions.get('window');