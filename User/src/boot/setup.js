
import * as Expo from 'expo';
import React from 'react';
import App from '../App';
import firebase from 'firebase/app';
import 'firebase/auth';
import '@firebase/firestore';

const configfirebase = {
	apiKey: "AIzaSyCpjmEeO07xvklNjdQZWB6Fc4yW3lSxzOk",
	authDomain: "my-project-fc5b2.firebaseapp.com",
	databaseURL: "https://my-project-fc5b2.firebaseio.com",
	projectId: "my-project-fc5b2",
	storageBucket: "my-project-fc5b2.appspot.com",
	messagingSenderId: "908738836320",
	appId: "1:908738836320:web:9d4bc23bfb66a990c2d005",
	measurementId: "G-829CW61N6N"
};

class BootSetup extends React.Component {
	constructor() {
		super();
		console.ignoredYellowBox = [
			'Setting a timer'
		];
		this.state = {
		};
	}
	componentDidMount() {
		/////////////delete wernningbox////////////
		console.disableYellowBox = true;
		firebase.initializeApp(configfirebase)
	}



	render() {

		return (
			<App />
		);
	}
}

export default BootSetup;