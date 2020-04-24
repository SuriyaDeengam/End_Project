/**
 *	CreateAccount container
 */

import React from 'react';
import Createaccount from '../../screen/createaccountScreen';
import { Alert } from 'react-native';
import * as firebase from 'firebase';





class CreateaccountContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fname: null,
			lname: null,
			tel: null,
			email: "",
			password: "",
			cpassword: "",
			brand: "",
			model: "",
			capacity: "",
			regiscar: "",
			color: "",

			///// ตัวแปร //////
		};

	}

	signup = () => {
		if (this.state.password != this.state.cpassword || this.state.password.length <= 5) {
			Alert.alert('Please Check Password and Confirm Password !!!');
		}
		else {
			// console.log('password is ', this.state.password);
			if (this.state.fname && this.state.lname && this.state.tel) {

			firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
				.then(() => {
					// this.test();
					setTimeout(() => {
						this.lowertext();
					}, 1000);
					
					setTimeout(() => {
						this.test();
					}, 3000);
					

				})
				.catch(function (error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					alert(errorMessage)
					console.log(errorCode);
					console.log(errorMessage);
				});
			}
			else{
				Alert.alert("กรุณากรอกข้อมูลให้ครบ")
			}
		}
	}
	lowertext = () => {
		var text = this.state.email;
		var lowercasetext = text.toLowerCase();//To convert Lower Case
		this.setState({ email: lowercasetext });
	  };
	test = () => {
		firebase.auth().currentUser.updateProfile({
			displayName: "1",
		}).then(function () {
		}).catch(function (error) {
		});
		const dbh = firebase.firestore();
		dbh.collection("Project/Account/user").doc(this.state.email).set({
			fname: this.state.fname,
			lname: this.state.lname,
			phone: this.state.tel,
			// brand: this.state.brand,
			// model: this.state.model,
			// capacity: this.state.capacity,
			// regiscar: this.state.regiscar,
			// color: this.state.color,
			people: "1",
			status:"0",
		})
		setTimeout(() => {
			Alert.alert('Sign Up success!')
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
			<Createaccount
				signup={this.signup}
				test={this.test}
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default CreateaccountContainer;
