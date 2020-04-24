/**
 *	Create container
 */

import React from 'react';
import Create1 from '../../screen/createScreen';
import { Alert } from 'react-native';
import * as firebase from 'firebase';




class CreateContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			uid: "",
			fname: null,
			lname: null,
			phone: null,
			email: "",
			password: "",
			cpassword: "",
			loggedIn: null,
		};
	}

	// 	console.log(firebase.auth().currentUser.uid);
	////////////////////////////////////////////////////
	check = () => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
				console.log(firebase.auth().currentUser.email);
				console.log(firebase.auth().currentUser.uid);
			} else {
				this.setState({ loggedIn: false });
				console.log("no user");

			}
		});


	}
	///////////////////////////////////////////////////
	signup = () => {
		if (this.state.password != this.state.cpassword || this.state.password.length <= 5) {
			Alert.alert('Please Check Password and Confirm Password !!!');
		}

		else {
			if (this.state.fname && this.state.lname && this.state.phone) {
				// console.log('password is ', this.state.password);

				firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
					.then(() => {

						// this.test();
						setTimeout(() => {
							this.lowertext();
						}, 1000);
						setTimeout(() => {
							this.test();
						}, 3000);
						this.onLogin();
						Alert.alert('Sign Up success!')

					})
					.catch(function (error) {
						// Handle Errors here.
						var errorCode = error.code;
						var errorMessage = error.message;
						alert(errorMessage)
						console.log(errorCode);
						console.log(errorMessage);
					});
			} else {


				Alert.alert("กรุณากรอกข้อมูลให้ครบ")
				// firebase.auth().onAuthStateChanged(function(user) {
				// 	if (user) {
				// 	 console.log("user: ", user);
				// 	 // User is signed in.
				// 	} else {
				// 	 // No user is signed in.
				// 	}
				//   });
			}
		}
	}
	////////////////////////////////////update
	onLogin = async () => {
		await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => {
				console.log("update");

				firebase.auth().currentUser.updateProfile({
					displayName: "2",
				}).then(function () {
					// Update successful.
				}).catch(function (error) {
					// An error happened.
				});
				// setTimeout(() => {
				// 	firebase.auth().signOut()
				// }, 1000);
			})
			.catch(function (error) { });

	}
	////////////////////////////////////////////////////
	// Out() {
	// 	firebase.auth().signOut()
	// }
	////////////////////////////////////////////////////
	// onPressData = () => {
	// 	account = {
	// 		FirstName: this.state.fname,
	// 		lastName: this.state.lname,

	// 	}
	// 	database.createAccount2(account, this.add_success, this.add_fail);
	// };

	// async add_success(){
	//   เหมือนกัน
	// }
	// add_success = async (id) => {
	// 	console.log(id);

	// }
	// add_fail = async () => {
	// 	console.log("Fail");
	// }
	////////////////////////////////////////////////////
	lowertext = () => {
		var text = this.state.email;
		var lowercasetext = text.toLowerCase();//To convert Lower Case
		this.setState({ email: lowercasetext });
	};
	test = () => {
		// Add a new document in collection "cities"
		const dbh = firebase.firestore();
		// console.log('email is ',this.state.email);
		dbh.collection("Project/Account/technician").doc(this.state.email).set({
			fname: this.state.fname,
			lname: this.state.lname,
			phone: this.state.phone,
			confirm: "0",
			rate: "0",
			// people: "2",
		})
		setTimeout(() => {
			firebase.auth().signOut()
			this.props.navigation.navigate('Login');
		}, 2000);

		//////////////////////////////////
	}
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		return (
			<Create1
				// onLogin={this.onLogin}
				// Out={this.Out}
				// check={this.check}
				signup={this.signup}
				test={this.test}
				// onPressData={this.onPressData}
				// popup={this.popup}
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default CreateContainer;
