/**
 *	Detail container
 */
///////////////////////////////////////////////////

import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Dimensions, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Constants } from 'expo';
import { Audio } from 'expo-av';
// https://github.com/expo/expo/issues/1141
userid = "";
email = "";
call = "";
imglink = "";
latuser = "";
nameuser = "";
ag1 = "";
ag2 = "";
longuser = "";
locationuser = "";
km = "";
time = "";
sourcesound = {
	uri: "no",
	// uri: 'https://firebasestorage.googleapis.com/v0/b/my-project-fc5b2.appspot.com/o/soundaeD1gAoNkHaL6KK6jHkYOZbfkOn2?alt=media&token=fc9c0668-ead8-4199-8ee5-6420f05273be',
};


export default class App extends Component {
	// state = {
	// 	playingStatus: "nosound",
	// };
	constructor(props) {
		super(props);
		this.state = {
			kmtime: "",
			lat: "",
			long: "",

			userid: "ไม่มีข้อมุล",
			email: "ไม่มีข้อมุล",
			call: "ไม่มีข้อมุล",
			imglink: "ไม่มีข้อมุล",
			latuser: "ไม่มีข้อมุล",
			longuser: "ไม่มีข้อมุล",
			locationuser: "ไม่มีข้อมุล",
			nameuser: "ไม่มีข้อมุล",
			ag1: "",
			ag2: "",
			urisound: "",
			more: "",

			playingStatus: "คลิกที่นี่เพื่อเล่นเสียง",
		};
	}
	componentWillMount() {
		navigator.geolocation.clearWatch(this.watchID);
		const { navigation } = this.props;

		// urisound = navigation.getParam('urisound');
		userid = navigation.getParam('userid');
		email = navigation.getParam('email');
		call = navigation.getParam('call');
		imglink = navigation.getParam('imglink');
		latuser = navigation.getParam('lat');
		longuser = navigation.getParam('long');
		locationuser = navigation.getParam('locationuser');
		nameuser = navigation.getParam('nameuser');
		urisound = navigation.getParam('urisound'),
			more = navigation.getParam('more'),
			sourcesound = {
				// uri: "no",
				uri: navigation.getParam('urisound'),
			};
		this.setState({
			more: more,
			urisound: urisound,
			latuser: latuser,
			longuser: longuser,
			userid: userid,
			email: email,
			call: call,
			imglink: imglink,
			latuser: latuser,
			longuser: longuser,
			locationuser: locationuser,
			nameuser: nameuser,
		})
		// console.log(this.state.urisound);
		// console.log(urisound);

		// console.log("detailconn",this.state.latuser);
		// console.log("detailconn",this.state.longuser);
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
		this.setState({
			ag1: ag1,
			ag2: ag2,
		})
		// console.log(email, call, imglink, lat, long, locationuser, nameuser);

		this.findCoordinates();
	}
	async _playRecording() {
		const { sound } = await Audio.Sound.createAsync(
			sourcesound,
			{
				shouldPlay: true,
				isLooping: true,
			},
			this._updateScreenForSoundStatus,
		);
		this.sound = sound;
		this.setState({
			playingStatus: 'playing'
		});
	}

	_updateScreenForSoundStatus = (status) => {
		if (status.isPlaying && this.state.playingStatus !== "playing") {
			this.setState({ playingStatus: "playing" });
		} else if (!status.isPlaying && this.state.playingStatus === "playing") {
			this.setState({ playingStatus: "paused!" });
		}
	};

	async stopplay() {

		console.log(urisound);
		if (sourcesound.uri != "no") {
			if (this.state.playingStatus == 'playing') {
				console.log('pausing...');
				await this.sound.pauseAsync();
				console.log('paused!');
				this.setState({
					playingStatus: 'paused!',
				});
			}
		}

		this.props.navigation.navigate('Acc', {
			urisound: this.state.urisound,
			userid: this.state.userid,
			lat: this.state.latuser,
			long: this.state.longuser,
			email: this.state.email,
			call: this.state.call,
			imglink: this.state.imglink,
			locationuser: this.state.locationuser,
			nameuser: this.state.nameuser,
			kmtime: this.state.kmtime,

		})
	}
	async _pauseAndPlayRecording() {
		if (this.sound != null) {
			if (this.state.playingStatus == 'playing') {
				console.log('pausing...');
				await this.sound.pauseAsync();
				console.log('paused!');
				this.setState({
					playingStatus: 'paused!',
				});
			} else {
				console.log('playing...');
				await this.sound.playAsync();
				console.log('playing!');
				this.setState({
					playingStatus: 'playing',
				});
			}
		}
	}

	_syncPauseAndPlayRecording() {
		if (this.sound != null) {
			if (this.state.playingStatus == 'playing') {
				this.sound.pauseAsync();
			} else {
				this.sound.playAsync();
			}
		}
	}

	_playAndPause = () => {
		if (sourcesound.uri == "no") {
			Alert.alert("ไม่มีเสียง")
		}
		else {
			switch (this.state.playingStatus) {
				case 'คลิกที่นี่เพื่อเล่นเสียง':
					this._playRecording();
					break;
				case 'paused!':
				case 'playing':
					this._pauseAndPlayRecording();
					break;
			}
		}
	}
	componentDidMount = () => {
		navigator.geolocation.getCurrentPosition(
			//Will give you the current location
			position => {
				const currentLongitude = JSON.stringify(position.coords.longitude);
				//getting the Longitude from the location json
				const currentLatitude = JSON.stringify(position.coords.latitude);
				//getting the Latitude from the location json
				this.setState({ long: currentLongitude });
				//Setting state Longitude to re re-render the Longitude Text
				this.setState({ lat: currentLatitude });
				//Setting state Latitude to re re-render the Longitude Text
			},
			error => alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
		this.watchID = navigator.geolocation.watchPosition(position => {
			//Will give you the location on location change
			console.log(position);
			const currentLongitude = JSON.stringify(position.coords.longitude);
			//getting the Longitude from the location json
			const currentLatitude = JSON.stringify(position.coords.latitude);
			//getting the Latitude from the location json
			this.setState({ long: currentLongitude });
			//Setting state Longitude to re re-render the Longitude Text
			this.setState({ lat: currentLatitude });
			//Setting state Latitude to re re-render the Longitude Text
		});
	};
	findCoordinates = async () => {
		latuserint = parseFloat(latuser);
		longuserint = parseFloat(longuser);

		setTimeout(async () => {
			// console.log("start");
			text = "https://maps.googleapis.com/maps/api/directions/json?origin=" + this.state.lat + "," + this.state.long + "&destination=" + latuserint + "," + longuserint + "&key=AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w";

			// console.log(text);

			let resp = await fetch(text)
			let respJson = await resp.json();
			km = respJson.routes[0].legs[0].distance.text;
			time = respJson.routes[0].legs[0].duration.text;


			this.setState({ kmtime: "ระยะทาง = " + km + " เวลา = " + time });
			// console.log(this.state.kmtime);
		}, 2000);


	};
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: "#eeddc1" }}>
				{/* //////////////////header bar////////////////////// */}
				<View style={{ height: 40, backgroundColor: "#8B4726", flexDirection: "row" }}>
					<View style={{ flex: 3 }}>
						<TouchableOpacity activeOpacity={0.5}
							onPress={() => {
								this.props.navigation.navigate('Job')

							}}
						>
							<Image
								source={require('../../resource/back-white.png')}
								style={{ margin: 5, resizeMode: 'stretch', marginLeft: 10, height: 30, width: 20 }}
							/>
						</TouchableOpacity>
					</View>
					<View style={{ flex: 15 }}>
						<Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
							รายละเอียด
							{/* {this.state.kmtime} */}
                    </Text>
					</View>
					<View style={{ flex: 3 }}>

					</View>
				</View>

				{/* //////////////////header bar////////////////////// */}
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<View style={{ alignItems: 'center', justifyContent: 'center' }}>
						<Text style={{ marginTop: 20, fontSize: 20, color: "#ff7200" }}> อาการรถเสียที่ลูกค้าแจ้งมา </Text>
						<View style={{ marginTop: 10, width: width - 30, height: 120, backgroundColor: "#e8e8e8" }}>
							<Text style={{ fontSize: 20, color: "black", marginTop: 10, marginLeft: 15 }}>{this.state.ag1}</Text>
							<Text style={{ fontSize: 18, color: "black", marginLeft: 25 }}>{this.state.ag2}</Text>
						</View>
					</View>
					<View style={{ alignItems: 'center', justifyContent: 'center' }}>
						<Text style={{ marginTop: 20, fontSize: 20, color: "#ff7200" }}> รายละเอียดอาการเพิ่มเติมของลูกค้า </Text>
						<View style={{ marginTop: 10, width: width - 30, height: 120, backgroundColor: "#e8e8e8" }}>
							<Text style={{ fontSize: 20, color: "black", marginTop: 10, marginLeft: 15 }}>{this.state.more}</Text>

						</View>
					</View>
					<View style={{ alignItems: 'center', justifyContent: 'center' }}>
						<Text style={{ marginTop: 20, fontSize: 15, color: "#ff7200" }}> ภาพที่ลูกค้าถ่ายมา </Text>
						<Image
							source={{ uri: this.state.imglink }}
							style={{ margin: 5, resizeMode: 'stretch', marginLeft: '5%', height: 300, width: 300 }}
						/>
					</View>


					<View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
						<Text style={{ fontSize: 15, color: "#ff7200" }}> เสียงอาการที่ลูกค้าส่งมา </Text>
						<TouchableOpacity style={{ marginTop: 20 }} onPress={this._playAndPause}>
							<Image
								source={require('../../resource/playpause.png')}
								style={{ resizeMode: 'stretch', height: 100, width: 100 }}
							/>
							<Text style={styles.buttonText}>
								{this.state.playingStatus}
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ alignItems: 'center', justifyContent: 'center' }}>
						<Text style={{ marginTop: 20, fontSize: 15, color: "#ff7200" }}>ตำแหน่งลูกค้า</Text>
						<View style={{ marginTop: 10, width: width - 30, height: 120, backgroundColor: "#e8e8e8" }}>
							<Text style={{ fontSize: 20, color: "black", marginTop: 10, marginLeft: 15 }}>{this.state.locationuser}</Text>
						</View>
					</View>
					<TouchableOpacity
						style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "#91dd3e", marginTop: 40, marginLeft: '5%', marginRight: '5%', height: 40 }}
						onPress={() => {
							this.props.navigation.navigate('mapsee', {
								urisound: this.state.urisound,
								lat: this.state.latuser,
								long: this.state.longuser,
								email: this.state.email,
								call: this.state.call,
								imglink: this.state.imglink,
								locationuser: this.state.locationuser,
								nameuser: this.state.nameuser,
								kmtime: this.state.kmtime,

							})
						}}
					>
						<View >
							<Text style={{ color: "white", fontSize: 25 }}>
								ตำแหน่งลูกค้า
            </Text>

						</View >
					</TouchableOpacity>
					<TouchableOpacity
						style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "#91dd3e", marginTop: 15, marginLeft: '5%', marginRight: '5%', height: 40, marginBottom: 70 }}
						onPress={() => {
							this.stopplay()
						}}
					>
						<View >
							<Text style={{ color: "white", fontSize: 25 }}>
								รับซ่อม
            </Text>

						</View >
					</TouchableOpacity>
				</ScrollView>
				{/* <View style={styles.container}>
					<TouchableOpacity style={styles.button} onPress={this._playAndPause}>
						<Text style={styles.buttonText}>
							{this.state.playingStatus}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1 }}>

				</View> */}
			</View>

		);
	}
}
export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#eeddc1',
		// paddingTop: Constants.statusBarHeight,
	},
	// button: {
	// 	width: 256,
	// 	height: 256 / 1.618,
	// 	margin: 5,
	// 	borderRadius: 10,
	// 	backgroundColor: '#fff',
	// 	justifyContent: 'center',
	// },
	buttonText: {
		marginTop: 10,
		textAlign: 'center',
		backgroundColor: '#eeddc1',
		color: "#ff7200",
	},
});
