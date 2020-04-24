/**
 *	Home container
 */

import React from 'react';
import Home from '../../screen/homeScreen';
import * as firebase from 'firebase';
import { Alert } from 'react-native';

// import Sound from 'react-native-sound';

// const sound = new Sound('http://sounds.com/some-sound', null, (error) => {
//   if (error) {
//   }
//   sound.play();
// });


// const dbh = firebase.firestore();
// var docRef = dbh.collection("Project/Account/technician").doc("a6@gmail.com");

// docRef.get().then(function(doc) {
//     if (doc.exists) {
// 		const mem = doc.data();
//         console.log("Document data:", mem.fname);
//     } else {
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });

// docRef.onSnapshot(function(doc) {
// 	console.log("Current data: ", doc && doc.data());
// });

confirm = 0;
a = [];
b = 0;
aa = []

class HomeContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: firebase.auth().currentUser.email,

			//////////////////หมุนๆ////////////////
			show: true,
			showAct: false,
			//////////////////หมุนๆ////////////////
			//////////////////หมุนๆ////////////////
			show2: true,
			showAct2: false,
			//////////////////หมุนๆ////////////////
		};
	}
	componentWillMount() {
		if (firebase.auth().currentUser.displayName != "2") {
			this.props.navigation.navigate('Login')
		}
		else {
			const dbh = firebase.firestore();
			var docRef = dbh.collection("Project/Account/technician").doc(firebase.auth().currentUser.email);

			docRef.onSnapshot(function (doc) {
				confirm = parseFloat(doc.data().confirm);
				// console.log("Current data: ", confirm);
			});
		}


	}

	//////////////////หมุนๆ////////////////
	ShowHideComponent = () => {
		setTimeout(() => {
			this.setState({ show: true });
			this.setState({ showAct: false });
		}, 8500);
		if (this.state.show == true) {
			this.setState({ show: false });
			this.setState({ showAct: true });
		} else {
			this.setState({ show: true });
			this.setState({ showAct: false });
		}
	};
	//////////////////หมุนๆ////////////////

	//////////////////หมุนๆ////////////////
	ShowHideComponent2 = () => {
		setTimeout(() => {
			this.setState({ show2: true });
			this.setState({ showAct2: false });
		}, 8500);
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
			if (confirm == 1) {
				a = [];
				b = 0;
				aa = [];
				/////////add array doc///////////////////////////////.where("ok", "==", true)
				const dbh = firebase.firestore();
				dbh.collection("/Project/work/first").where("status", "==", "0").get().then(function (querySnapshot) {
					querySnapshot.forEach(function (doc) {
						a[b] = doc.id;
						aa[b] = { title: doc.id, data: [] };
						b = b + 1;
					});
				});

				///add data///////////////////////////////////
				setTimeout(() => {
					const dbh = firebase.firestore();
					if (aa.length != 0) {
					for (let index = 0; index < aa.length; index++) {
						c = "";
						ag1 = "";
						ag2 = "";
						var docRef = dbh.collection("/Project/work/first").doc(aa[index].title);
						docRef.get().then(function(doc) {
							c = doc.data().call;
							if (c == "F1_1") { ag1 = "รถสตาร์ทไม่ติด / สตาร์มติดยาก"; ag2 = "แบตเตอรี่ไฟไม่พอ"; };
							if (c == "F1_2") { ag1 = "รถสตาร์ทไม่ติด / สตาร์มติดยาก"; ag2 = "น้ำกลั่นในแบตเตอรี่หมด"; };
							if (c == "F1_3") { ag1 = "รถสตาร์ทไม่ติด / สตาร์มติดยาก"; ag2 = "สัญลักษณ์รูปแบตเตอรี่ขึ้นโชว์"; };
							if (c == "F1_4") { ag1 = "รถสตาร์ทไม่ติด / สตาร์มติดยาก"; ag2 = "แบตเตอรี่เสื่อมสภาพ"; };
							if (c == "F1_5") { ag1 = "รถสตาร์ทไม่ติด / สตาร์มติดยาก"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
							if (c == "F2_1") { ag1 = " รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน"; ag2 = "เข็มบอกระดับน้ำมันค้าง"; };
							if (c == "F2_2") { ag1 = " รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน"; ag2 = "ตัวกรองเบนซินมีปัญหา"; };
							if (c == "F2_3") { ag1 = " รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน"; ag2 = "จานจ่ายไฟมีปัญหา"; };
							if (c == "F2_4") { ag1 = " รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน"; ag2 = "สายพานหน้าเครื่องมีปัญหา"; };
							if (c == "F2_5") { ag1 = " รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
							if (c == "F3_1") { ag1 = "เครื่องยนต์เตือนไฟความร้อนขึ้น"; ag2 = "พัดลมระบายความร้อนเสีย"; };
							if (c == "F3_2") { ag1 = "เครื่องยนต์เตือนไฟความร้อนขึ้น"; ag2 = "ตัว Sensor วัดความร้อนเสีย"; };
							if (c == "F3_3") { ag1 = "เครื่องยนต์เตือนไฟความร้อนขึ้น"; ag2 = "ตัว Relay พัดลมหม้อน้ำเสีย"; };
							if (c == "F3_4") { ag1 = "เครื่องยนต์เตือนไฟความร้อนขึ้น"; ag2 = "ประเก็นฝาสูบมีปัญหา"; };
							if (c == "F3_5") { ag1 = "เครื่องยนต์เตือนไฟความร้อนขึ้น"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
							if (c == "F4_1") { ag1 = "เครื่องยนต์เร่งไม่ขึ้น / เครื่องยนต์ไม่มีกำลัง"; ag2 = "หัวเทียนบอด / เสีย"; };
							if (c == "F4_2") { ag1 = "เครื่องยนต์เร่งไม่ขึ้น / เครื่องยนต์ไม่มีกำลัง"; ag2 = "ประเก็นฝาสูบมีปัญหา"; };
							if (c == "F4_3") { ag1 = "เครื่องยนต์เร่งไม่ขึ้น / เครื่องยนต์ไม่มีกำลัง"; ag2 = "สายพรานหย่อน / ชำรุด"; };
							if (c == "F4_4") { ag1 = "เครื่องยนต์เร่งไม่ขึ้น / เครื่องยนต์ไม่มีกำลัง"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
							if (c == "F5_1") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "มีเสียงแปลกๆ เกิดขึ้น"; };
							if (c == "F5_2") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "ผ้าเบรคหมด"; };
							if (c == "F5_3") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "เหยียบเบรคไม่ลง"; };
							if (c == "F5_4") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "น้ำมันเบรคหมด / ลดลง"; };
							if (c == "F5_5") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "เบรคไม่อยู่"; };
							if (c == "F5_6") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
							if (c == "F6_1") { ag1 = "มีเสียงดังแปลกๆ เกิดขึ้น"; ag2 = "มีเสียงดังเกิดขึ้นที่ล้อ"; };
							if (c == "F6_2") { ag1 = "มีเสียงดังแปลกๆ เกิดขึ้น"; ag2 = "โช้คมีปัญหา"; };
							if (c == "F6_3") { ag1 = "มีเสียงดังแปลกๆ เกิดขึ้น"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
							if (c == "F7_1") { ag1 = "มีน้ำมัน / น้ำหยดลงบนพื้น"; ag2 = "กาน้ำมีปัญหา"; };
							if (c == "F7_2") { ag1 = "มีน้ำมัน / น้ำหยดลงบนพื้น"; ag2 = "ปั๊มน้ำมีปัญหา"; };
							if (c == "F7_3") { ag1 = "มีน้ำมัน / น้ำหยดลงบนพื้น"; ag2 = "ระบบท่อยางมีปัญหา"; };
							if (c == "F7_4") { ag1 = "มีน้ำมัน / น้ำหยดลงบนพื้น"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
							if (c == "F8_1") { ag1 = "เกิดปัญหาบริเวณช่วงล่าง"; ag2 = "ยางล้อรถหุบเข้า - เบนออก"; };
							if (c == "F8_2") { ag1 = "เกิดปัญหาบริเวณช่วงล่าง"; ag2 = "ยางล้อรถซ้าย - ขวาไม่เท่ากัน"; };
							if (c == "F8_3") { ag1 = "เกิดปัญหาบริเวณช่วงล่าง"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
							if (c == "F9_1") { ag1 = "มีควันสีขาวลอยออกมา"; ag2 = "เติมน้ำมันผิดประเภท"; };
							if (c == "F9_2") { ag1 = "มีควันสีขาวลอยออกมา"; ag2 = "มีควันสีขาวออกมาอย่างเดียว"; };
							if (c == "F9_3") { ag1 = "มีควันสีขาวลอยออกมา"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };

							aa[index] = { title: aa[index].title, data: [ag1, ag2] };
							// Alert.alert(c)
						});
					}
				}
				}, 2500);


				setTimeout(() => {
					this.navigation.navigate('Job', { aa: aa })
				}, 4000);
				// this.navigation.navigate('loadalllist')
			}
			if (confirm == 0) {
				this.navigation.navigate('Con')
			}
			if (confirm == 2) {
				Alert.alert("กรุณารอการตรวจสอบ")
			}
		}, 3000);

	}

	golist() {

		this.ShowHideComponent2();
		setTimeout(() => {
			if (confirm == 1) {
				b1 = 0;
				aa1 = [];
				/////////add array doc///////////////////////////////.where("ok", "==", true)
				const dbh = firebase.firestore();
				dbh.collection("/Project/work/second").where("status", "==", "1").where("email", "==", firebase.auth().currentUser.email).get().then(function (querySnapshot) {
					querySnapshot.forEach(function (doc) {
						aa1[b1] = { title: doc.id, data: [] };
						b1 = b1 + 1;
					});
				});

				b2 = 0;
				aa2 = [];
				dbh.collection("/Project/work/wait").where("status", "==", "2").where("email", "==", firebase.auth().currentUser.email).get().then(function (querySnapshot) {
					querySnapshot.forEach(function (doc) {
						aa2[b2] = { title: doc.id, data: [] };
						b2 = b2 + 1;
					});
				});

				///////add data///////////////////////////////////
				setTimeout(() => {
					const dbh = firebase.firestore();
					console.log(aa2.length);
					if (aa2.length != 0) {

						for (let index = 0; index < aa2.length; index++) {
							c = "";
							ag1 = "";
							ag2 = "";
							var docRef = dbh.collection("/Project/work/wait").doc(aa2[index].title);
							docRef.get().then(function(doc) {
								c = doc.data().call;
								if (c == "F1_1") { ag1 = "รถสตาร์ทไม่ติด / สตาร์มติดยาก"; ag2 = "แบตเตอรี่ไฟไม่พอ"; };
								if (c == "F1_2") { ag1 = "รถสตาร์ทไม่ติด / สตาร์มติดยาก"; ag2 = "น้ำกลั่นในแบตเตอรี่หมด"; };
								if (c == "F1_3") { ag1 = "รถสตาร์ทไม่ติด / สตาร์มติดยาก"; ag2 = "สัญลักษณ์รูปแบตเตอรี่ขึ้นโชว์"; };
								if (c == "F1_4") { ag1 = "รถสตาร์ทไม่ติด / สตาร์มติดยาก"; ag2 = "แบตเตอรี่เสื่อมสภาพ"; };
								if (c == "F1_5") { ag1 = "รถสตาร์ทไม่ติด / สตาร์มติดยาก"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
								if (c == "F2_1") { ag1 = " รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน"; ag2 = "เข็มบอกระดับน้ำมันค้าง"; };
								if (c == "F2_2") { ag1 = " รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน"; ag2 = "ตัวกรองเบนซินมีปัญหา"; };
								if (c == "F2_3") { ag1 = " รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน"; ag2 = "จานจ่ายไฟมีปัญหา"; };
								if (c == "F2_4") { ag1 = " รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน"; ag2 = "สายพานหน้าเครื่องมีปัญหา"; };
								if (c == "F2_5") { ag1 = " รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
								if (c == "F3_1") { ag1 = "เครื่องยนต์เตือนไฟความร้อนขึ้น"; ag2 = "พัดลมระบายความร้อนเสีย"; };
								if (c == "F3_2") { ag1 = "เครื่องยนต์เตือนไฟความร้อนขึ้น"; ag2 = "ตัว Sensor วัดความร้อนเสีย"; };
								if (c == "F3_3") { ag1 = "เครื่องยนต์เตือนไฟความร้อนขึ้น"; ag2 = "ตัว Relay พัดลมหม้อน้ำเสีย"; };
								if (c == "F3_4") { ag1 = "เครื่องยนต์เตือนไฟความร้อนขึ้น"; ag2 = "ประเก็นฝาสูบมีปัญหา"; };
								if (c == "F3_5") { ag1 = "เครื่องยนต์เตือนไฟความร้อนขึ้น"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
								if (c == "F4_1") { ag1 = "เครื่องยนต์เร่งไม่ขึ้น / เครื่องยนต์ไม่มีกำลัง"; ag2 = "หัวเทียนบอด / เสีย"; };
								if (c == "F4_2") { ag1 = "เครื่องยนต์เร่งไม่ขึ้น / เครื่องยนต์ไม่มีกำลัง"; ag2 = "ประเก็นฝาสูบมีปัญหา"; };
								if (c == "F4_3") { ag1 = "เครื่องยนต์เร่งไม่ขึ้น / เครื่องยนต์ไม่มีกำลัง"; ag2 = "สายพรานหย่อน / ชำรุด"; };
								if (c == "F4_4") { ag1 = "เครื่องยนต์เร่งไม่ขึ้น / เครื่องยนต์ไม่มีกำลัง"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
								if (c == "F5_1") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "มีเสียงแปลกๆ เกิดขึ้น"; };
								if (c == "F5_2") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "ผ้าเบรคหมด"; };
								if (c == "F5_3") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "เหยียบเบรคไม่ลง"; };
								if (c == "F5_4") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "น้ำมันเบรคหมด / ลดลง"; };
								if (c == "F5_5") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "เบรคไม่อยู่"; };
								if (c == "F5_6") { ag1 = "ระบบเบรคมีปัญหา"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
								if (c == "F6_1") { ag1 = "มีเสียงดังแปลกๆ เกิดขึ้น"; ag2 = "มีเสียงดังเกิดขึ้นที่ล้อ"; };
								if (c == "F6_2") { ag1 = "มีเสียงดังแปลกๆ เกิดขึ้น"; ag2 = "โช้คมีปัญหา"; };
								if (c == "F6_3") { ag1 = "มีเสียงดังแปลกๆ เกิดขึ้น"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
								if (c == "F7_1") { ag1 = "มีน้ำมัน / น้ำหยดลงบนพื้น"; ag2 = "กาน้ำมีปัญหา"; };
								if (c == "F7_2") { ag1 = "มีน้ำมัน / น้ำหยดลงบนพื้น"; ag2 = "ปั๊มน้ำมีปัญหา"; };
								if (c == "F7_3") { ag1 = "มีน้ำมัน / น้ำหยดลงบนพื้น"; ag2 = "ระบบท่อยางมีปัญหา"; };
								if (c == "F7_4") { ag1 = "มีน้ำมัน / น้ำหยดลงบนพื้น"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
								if (c == "F8_1") { ag1 = "เกิดปัญหาบริเวณช่วงล่าง"; ag2 = "ยางล้อรถหุบเข้า - เบนออก"; };
								if (c == "F8_2") { ag1 = "เกิดปัญหาบริเวณช่วงล่าง"; ag2 = "ยางล้อรถซ้าย - ขวาไม่เท่ากัน"; };
								if (c == "F8_3") { ag1 = "เกิดปัญหาบริเวณช่วงล่าง"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };
								if (c == "F9_1") { ag1 = "มีควันสีขาวลอยออกมา"; ag2 = "เติมน้ำมันผิดประเภท"; };
								if (c == "F9_2") { ag1 = "มีควันสีขาวลอยออกมา"; ag2 = "มีควันสีขาวออกมาอย่างเดียว"; };
								if (c == "F9_3") { ag1 = "มีควันสีขาวลอยออกมา"; ag2 = "ไม่ทราบสาเหตุ ต้องการสอบถามช่าง"; };

								aa2[index] = { title: aa2[index].title, data: [ag1, ag2] };
								// Alert.alert(c)
							});
						}
					}
				}, 2500);


				setTimeout(() => {
					this.navigation.navigate('List', { aa1: aa1, aa2: aa2 })
				}, 3000);
				// this.navigation.navigate('loadalllist')

			}
			if (confirm == 0) {
				Alert.alert("กรุณายืนยันตัวตน")
			}
			if (confirm == 2) {
				Alert.alert("กรุณารอการตรวจสอบ")
			}
		}, 3000);
	}

	_setState = (obj) => {
		this.setState(obj)
	}
	// componentWillMount(){
	// 	console.log(firebase.auth().currentUser.uid);
	// }

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
				golist={this.golist}
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default HomeContainer;
