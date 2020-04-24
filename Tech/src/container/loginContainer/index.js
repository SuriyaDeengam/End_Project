/**
 *	Login container
 */

import React from 'react';
import Login from '../../screen/loginScreen';
import * as firebase from 'firebase';




class LoginContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
		
	}
	componentWillMount(){
		if (firebase.auth().currentUser != null) {
			firebase.auth().signOut()
			// console.log(firebase.auth().currentUser);
		}

	}
	////////////////////////////////////////////////////
	check = () => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
				// console.log(firebase.auth().currentUser.email);
				// console.log(firebase.auth().currentUser.uid);
			} else {
				this.setState({ loggedIn: false });
				// console.log("no user");

			}
		});


	}
	////////////////////////////////////////////////////
	onLogin = async () => {
		const { email, password } = this.state;
		await  firebase.auth().signInWithEmailAndPassword(email, password)
			.then(() => { /* alert("Successful  " + email + " " + password) ,*/ 
			this.props.navigation.navigate('APP');})
			.catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				if (errorCode === 'auth/wrong-password') {
					alert('Wrong password.');
				} else {
					alert("โปรดตรวจสอบความถูกต้อง");
				}

				// console.log(error);

			});

	}
	///////////////////////////////////////////////////
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		return (
			<Login
				check={this.check}
				onLogin={this.onLogin}
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default LoginContainer;
