/**
 *	Home container
 */

import React from 'react';
import Home from '../../screen/homeScreen';
import * as firebase from 'firebase';
import { Alert } from 'react-native';

a = [];
b = 0;
aa = [];
nameuser = "";
people = 0;
status = 99;
namecase = "";
class homeContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: firebase.auth().currentUser.email,
			//////////////////หมุนๆ////////////////
			show: true,
			showAct: false,
			show2: true,
			showAct2: false,
			//////////////////หมุนๆ////////////////
		};
	}
	componentWillMount() {
		// console.log(firebase.auth().currentUser.uid);
		
		if (firebase.auth().currentUser.displayName != "1") {
			this.props.navigation.navigate('Login')
		}
		const dbh = firebase.firestore();
		var docRef = dbh.collection("Project/Account/user").doc(this.state.email);

		docRef.onSnapshot(function (doc) {
			status = parseFloat(doc.data().status);
			nameuser = doc.data().fname + " " + doc.data().lname;
			// console.log(nameuser);

		});
	}

	ShowHideComponent = () => {
		setTimeout(() => {
			this.setState({ show: true });
			this.setState({ showAct: false });
		}, 3000);
		if (this.state.show == true) {
			this.setState({ show: false });
			this.setState({ showAct: true });
		} else {
			this.setState({ show: true });
			this.setState({ showAct: false });
		}
	};

	ShowHideComponent2 = () => {
		setTimeout(() => {
			this.setState({ show2: true });
			this.setState({ showAct2: false });
		}, 7000);
		if (this.state.show == true) {
			this.setState({ show2: false });
			this.setState({ showAct2: true });
		} else {
			this.setState({ show2: true });
			this.setState({ showAct2: false });
		}
	};
	//////////////////หมุนๆ////////////////

	checkconfirm() {
		this.ShowHideComponent();
		setTimeout(() => {
			if (status == 0) {
				this.navigation.navigate('Fix1')
			}
			if (status == 1 || status == 2) {
				Alert.alert("คุณได้แจ้งซ่อมแล้ว")
			}

			// else {
			// 	Alert.alert("รอซักครู่...")
			// }
		}, 3000);

	}

	checkservice() {
		this.ShowHideComponent2();
		setTimeout(() => {
			if (status == 1) {
				a = [];
				b = 0;
				aa = [];
				/////////add array doc///////////////////////////////.where("ok", "==", true)
				const dbh = firebase.firestore();
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
						docRef.get().then(function(doc) {
							c = doc.data().namegarage;
							kmtime=doc.data().kmtime;
							aa[index] = { title: aa[index].title, data: ["ชื่ออู่ : " + c, kmtime] };
						});
					}
				}, 2000);

				setTimeout(() => {
					// Alert.alert(aa);
					this.navigation.navigate('Service', { aa: aa })
				}, 4500);
			}
			if (status == 2) {
				const dbh = firebase.firestore();
				var docRef = dbh.collection("Project/Account/user").doc(firebase.auth().currentUser.email);
				docRef.get().then(function(doc) {
					namecase = doc.data().namecase;
				});
				setTimeout(() => {
					this.navigation.navigate('Myjob', { namecase: namecase })
				}, 2000);

			}
			if (status == 0) {
				Alert.alert("กรุณาแจ้งซ่อมก่อน")
			}

			else {
				// Alert.alert("รอซักครู่...")
			}
		}, 3000);

	}

	// firebase.auth().signOut()
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		return (
			<Home
				//////////////////หมุนๆ////////////////
				show={this.state.show}
				showAct={this.state.showAct}
				ShowHideComponent={this.ShowHideComponent}
				//////////////////หมุนๆ////////////////
				//////////////////หมุนๆ////////////////
				show2={this.state.show2}
				showAct2={this.state.showAct2}
				ShowHideComponent2={this.ShowHideComponent2}
				//////////////////หมุนๆ////////////////
				checkconfirm={this.checkconfirm}
				checkservice={this.checkservice}
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default homeContainer;
