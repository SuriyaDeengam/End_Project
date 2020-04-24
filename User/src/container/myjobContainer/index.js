/**
 *	Myjob container
 */

import React from 'react';
import Myjob from '../../screen/myjobScreen';
import * as firebase from 'firebase';
import { Alert } from 'react-native';

namecase = "";
step11 = "1";
latchung = 0;
longchung = 0;
emailchung = "";
rate = 0;
num = 0;
nameuser = "";
call = "";
ag1="";
ag2="";

class myjobContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: firebase.auth().currentUser.email,
			namecase: "",
			namegarage: "",
			step1: "1",
			star: "5",
		};
	}
	componentWillMount() {
		nameg = "";
		const { navigation } = this.props;
		namecase = navigation.getParam('namecase');
		this.setState({ namecase: namecase })

		const dbh = firebase.firestore();
		var docRef = dbh.collection("Project/work/second").doc(namecase);
		docRef.onSnapshot(function (doc) {
			nameg = doc.data().namegarage;
			latchung = parseFloat(doc.data().lat);
			longchung = parseFloat(doc.data().long);
			emailchung = doc.data().email;
			// console.log(emailchung);

		});

		setTimeout(() => {
			var docRef = dbh.collection("Project/work/wait").doc(namecase);
			docRef.onSnapshot(function (doc) {
				nameuser = doc.data().nameuser;
				call = doc.data().call;

				if (call == "F1_1") { ag1 = "รถสตาร์ทไม่ติด / สตาร์มติดยาก"; ag2 = "แบตเตอรี่ไฟไม่พอ"; };
				if (call == "F1_2") { ag1 = "รถสตาร์ทไม่ติด / สตาร์มติดยาก"; ag2 = "น้ำกลั่นในแบตเตอรี่หมด"; };
				if (call == "F1_3") { ag1 = "รถสตาร์ทไม่ติด / สตาร์มติดยาก"; ag2 = "สัญลักษณ์รูปแบตเตอรี่ขึ้นโชว์"; };
				if (call == "F1_4") { ag1 = "รถสตาร์ทไม่ติด / สตาร์มติดยาก"; ag2 = "แบตเตอรี่เสื่อมสภาพ"; };
				if (call == "F1_5") { ag1 = "รถสตาร์ทไม่ติด / สตาร์มติดยาก"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
				if (call == "F2_1") { ag1 = " รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน"; ag2 = "เข็มบอกระดับน้ำมันค้าง"; };
				if (call == "F2_2") { ag1 = " รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน"; ag2 = "ตัวกรองเบนซินมีปัญหา"; };
				if (call == "F2_3") { ag1 = " รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน"; ag2 = "จานจ่ายไฟมีปัญหา"; };
				if (call == "F2_4") { ag1 = " รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน"; ag2 = "สายพานหน้าเครื่องมีปัญหา"; };
				if (call == "F2_5") { ag1 = " รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
				if (call == "F3_1") { ag1 = "เครื่องยนต์เตือนไฟความร้อนขึ้น"; ag2 = "พัดลมระบายความร้อนเสีย"; };
				if (call == "F3_2") { ag1 = "เครื่องยนต์เตือนไฟความร้อนขึ้น"; ag2 = "ตัว Sensor วัดความร้อนเสีย"; };
				if (call == "F3_3") { ag1 = "เครื่องยนต์เตือนไฟความร้อนขึ้น"; ag2 = "ตัว Relay พัดลมหม้อน้ำเสีย"; };
				if (call == "F3_4") { ag1 = "เครื่องยนต์เตือนไฟความร้อนขึ้น"; ag2 = "ประเก็นฝาสูบมีปัญหา"; };
				if (call == "F3_5") { ag1 = "เครื่องยนต์เตือนไฟความร้อนขึ้น"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
				if (call == "F4_1") { ag1 = "เครื่องยนต์เร่งไม่ขึ้น / เครื่องยนต์ไม่มีกำลัง"; ag2 = "หัวเทียนบอด / เสีย"; };
				if (call == "F4_2") { ag1 = "เครื่องยนต์เร่งไม่ขึ้น / เครื่องยนต์ไม่มีกำลัง"; ag2 = "ประเก็นฝาสูบมีปัญหา"; };
				if (call == "F4_3") { ag1 = "เครื่องยนต์เร่งไม่ขึ้น / เครื่องยนต์ไม่มีกำลัง"; ag2 = "สายพรานหย่อน / ชำรุด"; };
				if (call == "F4_4") { ag1 = "เครื่องยนต์เร่งไม่ขึ้น / เครื่องยนต์ไม่มีกำลัง"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
				if (call == "F5_1") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "มีเสียงแปลกๆ เกิดขึ้น"; };
				if (call == "F5_2") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "ผ้าเบรคหมด"; };
				if (call == "F5_3") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "เหยียบเบรคไม่ลง"; };
				if (call == "F5_4") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "น้ำมันเบรคหมด / ลดลง"; };
				if (call == "F5_5") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "เบรคไม่อยู่"; };
				if (call == "F5_6") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
				if (call == "F6_1") { ag1 = "มีเสียงดังแปลกๆ เกิดขึ้น"; ag2 = "มีเสียงดังเกิดขึ้นที่ล้อ"; };
				if (call == "F6_2") { ag1 = "มีเสียงดังแปลกๆ เกิดขึ้น"; ag2 = "โช้คมีปัญหา"; };
				if (call == "F6_3") { ag1 = "มีเสียงดังแปลกๆ เกิดขึ้น"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
				if (call == "F7_1") { ag1 = "มีน้ำมัน / น้ำหยดลงบนพื้น"; ag2 = "กาน้ำมีปัญหา"; };
				if (call == "F7_2") { ag1 = "มีน้ำมัน / น้ำหยดลงบนพื้น"; ag2 = "ปั๊มน้ำมีปัญหา"; };
				if (call == "F7_3") { ag1 = "มีน้ำมัน / น้ำหยดลงบนพื้น"; ag2 = "ระบบท่อยางมีปัญหา"; };
				if (call == "F7_4") { ag1 = "มีน้ำมัน / น้ำหยดลงบนพื้น"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
				if (call == "F8_1") { ag1 = "เกิดปัญหาบริเวณช่วงล่าง"; ag2 = "ยางล้อรถหุบเข้า - เบนออก"; };
				if (call == "F8_2") { ag1 = "เกิดปัญหาบริเวณช่วงล่าง"; ag2 = "ยางล้อรถซ้าย - ขวาไม่เท่ากัน"; };
				if (call == "F8_3") { ag1 = "เกิดปัญหาบริเวณช่วงล่าง"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
				if (call == "F9_1") { ag1 = "มีควันสีขาวลอยออกมา"; ag2 = "เติมน้ำมันผิดประเภท"; };
				if (call == "F9_2") { ag1 = "มีควันสีขาวลอยออกมา"; ag2 = "มีควันสีขาวออกมาอย่างเดียว"; };
				if (call == "F9_3") { ag1 = "มีควันสีขาวลอยออกมา"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };

				// console.log(nameuser, call);
			});

			// console.log(this.state.namegarage);
		}, 1000);


		setTimeout(() => {
			this.setState({ namegarage: nameg })


			var docRef = dbh.collection("Project/Account/technician").doc(emailchung);
			docRef.onSnapshot(function (doc) {
				rate = parseFloat(doc.data().rate);
				num = parseFloat(doc.data().num);
				num = num + 1;
				console.log(rate, num);
			});

			// console.log(this.state.namegarage);
		}, 2000);
	}


	star1() {
		// Alert.alert("1");
		const dbh = firebase.firestore();
		newrate = ((rate * (num - 1)) + 1) / num;
		console.log(nameuser, "++++", call,"ag1 ",ag1,"ag2 ",ag2);

		dbh.collection("Project/work/history").add({
			nameuser: nameuser,
			ag1: "อาการรถเสีย : "+ag1,
			ag2: "รายละเอียดอาการ : "+ag2,
			eva: "คะแนนที่ได้ = 1",
			emailchung:emailchung,
		})

		dbh.collection("Project/Account/technician").doc(emailchung).set({
			num: num,
			rate: newrate,
		}, { merge: true });

		dbh.collection("Project/Account/user").doc(firebase.auth().currentUser.email).set({
			status: "0",

		}, { merge: true });

		setTimeout(() => {
			this.navigation.navigate('Home')
		}, 2000);
	}
	star2() {
		// Alert.alert("1");
		const dbh = firebase.firestore();
		newrate = ((rate * (num - 1)) + 2) / num;
		dbh.collection("Project/work/history").add({
			nameuser: nameuser,
			ag1: "อาการรถเสีย : "+ag1,
			ag2: "รายละเอียดอาการ : "+ag2,
			eva: "คะแนนที่ได้ = 2",
			emailchung:emailchung,
		})
		dbh.collection("Project/Account/technician").doc(emailchung).set({
			num: num,
			rate: newrate,
		}, { merge: true });

		dbh.collection("Project/Account/user").doc(firebase.auth().currentUser.email).set({
			status: "0",

		}, { merge: true });

		setTimeout(() => {
			this.navigation.navigate('Home')
		}, 2000);
	}
	star3() {
		// Alert.alert("1");
		const dbh = firebase.firestore();
		newrate = ((rate * (num - 1)) + 3) / num;
		dbh.collection("Project/work/history").add({
			nameuser: nameuser,
			ag1: "อาการรถเสีย : "+ag1,
			ag2: "รายละเอียดอาการ : "+ag2,
			eva: "คะแนนที่ได้ = 3",
			emailchung:emailchung,
		})
		dbh.collection("Project/Account/technician").doc(emailchung).set({
			num: num,
			rate: newrate,
		}, { merge: true });

		dbh.collection("Project/Account/user").doc(firebase.auth().currentUser.email).set({
			status: "0",

		}, { merge: true });

		setTimeout(() => {
			this.navigation.navigate('Home')
		}, 2000);
	}
	star4() {
		// Alert.alert("1");
		const dbh = firebase.firestore();
		newrate = ((rate * (num - 1)) + 4) / num;
		dbh.collection("Project/work/history").add({
			nameuser: nameuser,
			ag1: "อาการรถเสีย : "+ag1,
			ag2: "รายละเอียดอาการ : "+ag2,
			eva: "คะแนนที่ได้ = 4",
			emailchung:emailchung,
		})
		dbh.collection("Project/Account/technician").doc(emailchung).set({
			num: num,
			rate: newrate,
		}, { merge: true });

		dbh.collection("Project/Account/user").doc(firebase.auth().currentUser.email).set({
			status: "0",

		}, { merge: true });

		setTimeout(() => {
			this.navigation.navigate('Home')
		}, 2000);
	}
	star5() {
		// Alert.alert("1");
		const dbh = firebase.firestore();
		newrate = ((rate * (num - 1)) + 5) / num;
		dbh.collection("Project/work/history").add({
			nameuser: nameuser,
			ag1: "อาการรถเสีย : "+ag1,
			ag2: "รายละเอียดอาการ : "+ag2,
			eva: "คะแนนที่ได้ = 5",
			emailchung:emailchung,
		})
		// console.log(newrate);

		dbh.collection("Project/Account/technician").doc(emailchung).set({
			num: num,
			rate: newrate,
		}, { merge: true });

		dbh.collection("Project/Account/user").doc(firebase.auth().currentUser.email).set({
			status: "0",

		}, { merge: true });

		setTimeout(() => {
			this.navigation.navigate('Home')
		}, 2000);
	}



	gomap() {
		if (step11 == 2) {
			setTimeout(() => {
				this.navigation.navigate('maps', { namecase: namecase, latchung: latchung, longchung: longchung });
				// console.log(this.state.namegarage);
			}, 2100);
		} else {
			Alert.alert("can't see map now ...")
		}
	}

	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		const dbh = firebase.firestore();
		var docRef = dbh.collection("Project/work/second").doc(namecase);
		docRef.onSnapshot(function (doc) {
			step11 = doc.data().step1;
		});
		setTimeout(() => {
			this.setState({ step1: step11 })
		}, 2000);
		return (
			<Myjob
				star1={this.star1}
				star2={this.star2}
				star3={this.star3}
				star4={this.star4}
				star5={this.star5}
				gomap={this.gomap}
				step1={this.state.step1}
				namecase={this.state.namecase}
				namegarage={this.state.namegarage}
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default myjobContainer;
