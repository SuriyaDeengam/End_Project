/**
 *	Service container
 */

import React from 'react';
import Service from '../../screen/serviceScreen';
import { Alert } from 'react-native';

import * as firebase from 'firebase';
lname = "";
class serviceContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			aa: [],
			have: true,
			nothave: false,
			nameuser: "",
		};
	}
	componentWillMount() {
		const { navigation } = this.props;
		aa = navigation.getParam('aa');
		this.setState({ aa: aa })
		// console.log(aa);

		const dbh = firebase.firestore();
		var docRef = dbh.collection("Project/Account/user").doc(firebase.auth().currentUser.email);
		lname = "";
		fname = "";
		docRef.onSnapshot(function (doc) {
			fname = doc.data().fname;
			lname = fname + " " + doc.data().lname;
			console.log(lname);

		});
		setTimeout(() => {
			this.setState({ nameuser: lname })
			this.setState({ fname: fname })
			// Alert.alert(this.state.nameuser);
		}, 2000);

		setTimeout(() => {
			if (this.state.aa.length == 0) {
				this.setState({ have: false });
				this.setState({ nothave: true });
			}
			else {
				this.setState({ have: true });
				this.setState({ nothave: false });
			}
			setTimeout(() => {
				console.log(this.state.have);
			}, 1500);

		}, 1500);

	}
	_setState = (obj) => {
		this.setState(obj)
	}


	// startcancle 
	cancle= () => {
		// console.log("start");

		const dbh = firebase.firestore();
		dbh.collection("Project/Account/user").doc(firebase.auth().currentUser.email).set({
			status: "0",
		}, { merge: true });
		console.log(lname);

		setTimeout(() => {
			dbh.collection("Project/work/first").doc(lname).set({
				status: "1",
			}, { merge: true });
		}, 1000);

		setTimeout(() => {
			b = 0;
			aa = [];
			dbh.collection("Project/work/second").where("status", "==", "1").where("nameuser", "==", nameuser).get().then(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
					a[b] = doc.id;
					aa[b] = { title: doc.id, data: [] };
					b = b + 1;
				});
				// Alert.alert(b);
			});

			////////add data///////////////////////////////////
			setTimeout(() => {
				const dbh = firebase.firestore();
				for (let index = 0; index < aa.length; index++) {
					c = "";
					var docRef = dbh.collection("Project/work/second").doc(aa[index].title);
					docRef.set({
						status: "0",
					}, { merge: true });
				}
			}, 3000);
		}, 2000);


		setTimeout(() => {
			this.props.navigation.navigate('Home')
		}, 4000);
	}
	// cancle() {
	// 	Alert.alert(
	// 		'ยกเลิกการแจ้งซ่อม',
	// 		'ยืนยันที่จะยกเลิกการแจ้งซ่อม',
	// 		[
	// 			//   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
	// 			{ text: 'ไม่ยืนยัน', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
	// 			{ text: 'ยืนยัน', onPress: () => {  this.startcancle }  },
	// 		],
	// 		{ cancelable: false }
	// 	)
	// }
	render() {
		return (
			<Service
				cancle={this.cancle}
				have={this.state.have}
				nothave={this.state.nothave}
				aa={this.state.aa}
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default serviceContainer;
