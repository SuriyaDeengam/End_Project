/**
 *	Acc container
 */

import React from 'react';
import Acc from '../../screen/accScreen';
import * as firebase from 'firebase';
import { Alert } from 'react-native';


nameg = ""
latuser = ""
longuser = ""
locationuser = ""
km = "";
time = "";
userid = "";
class AccContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			namechat: "hi",
			emailuser: null,
			detail: null,
			price: null,
			travel: null,
			kmtime: "",
			messages: [
				{
					_id: 0,
					text: 'ยินดีต้อนรับเข้าสู่ CarSupp Chat',
					createdAt: new Date(),
					user: {
						_id: 3,
					},
				},],
		};
	}
	componentWillMount() {
		const dbh = firebase.firestore();
		var docRef = dbh.collection("Project/Account/technician").doc(firebase.auth().currentUser.email);
		docRef.onSnapshot(function (doc) {
			nameg = doc.data().nameg;
		});
		const { navigation } = this.props; userid

		userid = navigation.getParam('userid');
		emailuser = navigation.getParam('email');
		latuser = navigation.getParam('lat');
		longuser = navigation.getParam('long');
		kmtime = navigation.getParam('kmtime');
		this.setState({ kmtime: kmtime, emailuser: emailuser, namechat: firebase.auth().currentUser.uid + userid });

	}

	sendtouser = () => {
		// Alert.alert(nameuser)
		// console.log(this.state.detail);
		if (this.state.detail && this.state.price && this.state.travel) {
			
		
		const dbh = firebase.firestore();
		const real = firebase.database();
		setTimeout(() => {
			// console.log("km last = ", km, time);
			dbh.collection("Project/work/second").doc(nameg + " repair " + nameuser).set({
				email: firebase.auth().currentUser.email,
				nameuser: nameuser,
				namegarage: nameg,
				detail: this.state.detail,
				price: this.state.price,
				travel: this.state.travel,
				status: "1",
				step1: "1",
				namechat: this.state.namechat,
				kmtime: this.state.kmtime
			}, { merge: true });


			setTimeout(() => {
				real.ref('Chat/' + this.state.namechat).set({
					messages: this.state.messages,
					name: this.state.messages,
				});
				// console.log(this.state.namechat);

			}, 2000);

			setTimeout(() => {
				this.props.navigation.navigate('Home')
			}, 3000);


			// dbh.collection("Project/Account/technician").doc(firebase.auth().currentUser.email).set({
			// 	nameg: this.state.nameg,
			// 	detail: this.state.detail,
			// 	price: this.state.price,

			// 	confirm: "2",
			// }, { merge: true });
			Alert.alert("ยืนยันการซ่อมเรียบร้อย");
		}, 2000);
	}
	else{
		Alert.alert("กรุณากรอกข้อมูลให้ครบ")
	}

	}
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		return (
			<Acc
				userid={this.state.namechat}
				sendtouser={this.sendtouser}
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default AccContainer;
