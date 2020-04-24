/**
 *	Detail container
 */

import React from 'react';
import Detail from '../../screen/detailScreen';
import { Alert } from 'react-native';
import * as firebase from 'firebase';
email = "";
rate="";
call = "";
class detailContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			namegarage: "",
			detail: "",
			price: "",
			travel: "",
			namecase: "",
			nameuser: "",
			kmtime: "",
			email: "",
			rate:"",
		};
	}
	componentWillMount() {
		const { navigation } = this.props;
		nameuser = navigation.getParam('nameuser');
		namecase = navigation.getParam('namecase');
		namegarage = navigation.getParam('namegarage');
		detail = navigation.getParam('detail');
		price = navigation.getParam('price');
		travel = navigation.getParam('travel');

		kmtime = navigation.getParam('kmtime');

		this.setState({ kmtime: kmtime, namegarage: namegarage, detail: detail, price: price, travel: travel, namecase: namecase, nameuser: nameuser })
		// console.log(namegarage,detail,price,travel);
		const dbh = firebase.firestore();
		var docRef = dbh.collection("Project/work/second").doc(namecase);
		docRef.onSnapshot(function (doc) {
			email = doc.data().email;
			// console.log("Current data: ", email);
		});
		setTimeout(() => {
			this.setState({ email: email })

			var docRef1 = dbh.collection("Project/Account/technician").doc(email);
			docRef1.onSnapshot(function (doc) {
				rate = parseFloat(doc.data().rate);
			});
			setTimeout(() => {
				this.setState({ rate: rate })

			}, 1500);

		}, 1500);
		var docRef = dbh.collection("Project/work/first").doc(nameuser);
		docRef.onSnapshot(function (doc) {
			call = doc.data().call;
			// console.log("Current data: ", email);
		});


	}
	select = () => {
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
				docRef.set({
					status: "0",
				}, { merge: true });
			}
		}, 3000);
		//////////////เปลี่ยนข้อมูล/////////////////////
		// const dbh = firebase.firestore();
		dbh.collection("Project/Account/user").doc(firebase.auth().currentUser.email).set({
			status: "2",
			namecase: namecase,
		}, { merge: true });
		dbh.collection("Project/work/first").doc(this.state.nameuser).set({
			status: "1",
		}, { merge: true });
		dbh.collection("Project/work/wait").doc(this.state.namecase).set({
			email: email,
			status: "2",
			call: call,
			nameuser: this.state.nameuser,
		}, { merge: true });
		//////////////เปลี่ยนข้อมูล/////////////////////
		setTimeout(() => {
			Alert.alert("ยืนยันการเลือกอู่ซ่อมรถ")

			var docRef = dbh.collection("Project/Account/user").doc(firebase.auth().currentUser.email);
			docRef.onSnapshot(function (doc) {
				namecase = doc.data().namecase;
			});
			setTimeout(() => {
				this.props.navigation.navigate('Myjob', { namecase: namecase })
			}, 2000);

		}, 2000);
		// console.log(this.state.namecase);

	}
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		return (
			<Detail
				rate={this.state.rate}
				namecase={this.state.namecase}
				namegarage={this.state.namegarage}
				detail={this.state.detail}
				price={this.state.price}
				travel={this.state.travel}
				kmtime={this.state.kmtime}
				select={this.select}
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default detailContainer;
