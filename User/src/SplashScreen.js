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

			if (firebase.auth().currentUser != null && firebase.auth().currentUser.displayName == "1") {
				this.props.navigation.navigate('Home')
			}
			else {
				this.props.navigation.navigate('Login')
				// console.log(firebase.auth().currentUser.providerData[0].phoneNumber);
				// console.log(firebase.auth().currentUser.displayName);

				// 		const dbh = firebase.firestore();
				// 		var docRef = dbh.collection("Project/Account/user").doc(firebase.auth().currentUser.email);

				// 		docRef.onSnapshot(function (doc) {
				// 			if (doc.exists) {
				// 				console.log("user");

				// 			} else {
				// 				console.log("not user");
				// 				setTimeout(() => {
				// 					this.props.navigation.navigate('Home')
				// 				}, 4000);
				// 			}
				// 			// people = parseFloat(doc.data().people);
				// 			// console.log("Current data: ", people);
				// 		});

			}
		}, 3000);
	}

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#eeddc1" }}>
				<View style={{ flex: 10 }}>
					<Image
						source={require('./resource/logo_user.png')}
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

// import React from 'react';
// import { View, Text } from 'react-native';
// import { Location } from 'expo-location';

// export default class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
			
// 			lo: "no",
// 		};
// 	}
// 	componentDidMount() {
// 		Location.setApiKey("AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w")
// 		console.log("gooo");
// 		(async () => {
// 			console.log("gooo");
// 			let regionName = await Location.reverseGeocodeAsync({ longitude: 37.6172999, latitude: 55.755826 });
// 			console.log("gooo");
// 			this.setState({lo:regionName})
// 			console.log(regionName);

// 		})();

// 	}
// 	render() {


// 		return (
// 			<View style={{ flex: 1 }}>
// 				<Text>{this.state.lo}</Text>
// 				<Text>Expo</Text>
// 				<Text>Expo1</Text>
// 			</View>
// 		)
// 	}
// }