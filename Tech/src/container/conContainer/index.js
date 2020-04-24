// /**
//  *	Confirm container
//  */

/////////////////คีบอดเลื่อน///////////
// import {KeyboardAvoidingView} from 'react-native';


// <KeyboardAvoidingView behavior="padding" style={{flex: 1,justifyContent: 'space-between',}}>

// </KeyboardAvoidingView>
//////////////////////////////////
import * as React from 'react';
import { Button, Image, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { CheckBox } from 'react-native-elements';
import * as firebase from 'firebase';

export default class ConfirmContainer extends React.Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props);
		this.state = {
			nameg: "",
			locat: "",
			imglink1: "https://firebasestorage.googleapis.com/v0/b/my-project-fc5b2.appspot.com/o/image%2Fnopic.png?alt=media&token=5a032ebd-fdf8-4ac1-9739-f210a49f2956",
			imglink2: "https://firebasestorage.googleapis.com/v0/b/my-project-fc5b2.appspot.com/o/image%2Fnopic.png?alt=media&token=5a032ebd-fdf8-4ac1-9739-f210a49f2956",
			checked11: "",
			checked21: "",
			checked31: "",
			checked41: "",
			checked51: "",
			checked61: "",
			checked71: "",

			img1: null,
			img2: null,
			checked1: false,
			checked2: false,
			checked3: false,
			checked4: false,
			checked5: false,
			checked6: false,
			checked7: false,
		};
	}
	/////////////////////////img1//////////////////////////
	onChooseImagePress1 = async () => {
		result1 = await ImagePicker.launchImageLibraryAsync();
		//let result1 = await ImagePicker.launchImageLibraryAsync();
		// console.log(result1.uri);
		this.setState({ img1: result1.uri })
	}
	uploadImage1 = async (uri, imageName) => {
		const response = await fetch(uri);
		const blob = await response.blob();
		var ref1 = firebase.storage().ref().child(firebase.auth().currentUser.email + "chung1");
		setTimeout(() => {
			ref1.getDownloadURL().then((url) => this.setState({ imglink1: url }));
        }, 4000);

		return ref1.put(blob);
	}
	/////////////////////////img1//////////////////////////

	/////////////////////////img2//////////////////////////
	onChooseImagePress2 = async () => {
		result2 = await ImagePicker.launchImageLibraryAsync();
		//let result2 = await ImagePicker.launchImageLibraryAsync();
		// console.log(result2.uri);
		this.setState({ img2: result2.uri })
	}
	uploadImage2 = async (uri, imageName) => {
		const response = await fetch(uri);
		const blob = await response.blob();
		var ref2 = firebase.storage().ref().child(firebase.auth().currentUser.email + "chung2");
		setTimeout(() => {
			ref2.getDownloadURL().then((url) => this.setState({ imglink2: url }));
        }, 3000);
		return ref2.put(blob);
	}
	/////////////////////////img2//////////////////////////
	async updata() {
		if (this.state.img1 != null) {
			await this.uploadImage1(result1.uri, "1")
				.then(() => {
					// Alert.alert("Success");
					console.log("Success");
					// console.log();

				})
				.catch((error) => {
					console.log(error);

				});
		}

		setTimeout(() => {
			if (this.state.img2 != null) {
				this.uploadImage2(result2.uri, "2")
					.then(() => {
						console.log("Success");
					})
					.catch((error) => {
						console.log(error);
					});
			}
		}, 2000);
		const dbh = firebase.firestore();
		setTimeout(() => {
			dbh.collection("Project/Account/confirm").doc(this.state.nameg).set({
				email: firebase.auth().currentUser.email,
				namegarage: this.state.nameg,
				locationgarage: this.state.locat,
				imglink1: this.state.imglink1,
				imglink2: this.state.imglink2,
				checked1: this.state.checked1,
				checked2: this.state.checked2,
				checked3: this.state.checked3,
				checked4: this.state.checked4,
				checked5: this.state.checked5,
				checked6: this.state.checked6,
				checked7: this.state.checked7,
				ok: true,
				// checked1: this.state.checked11,
				// checked2: this.state.checked21,
				// checked3: this.state.checked31,
				// checked4: this.state.checked41,
				// checked5: this.state.checked51,
				// checked6: this.state.checked61,
				// checked7: this.state.checked71,
			}, { merge: true });

			setTimeout(() => {
				dbh.collection("Project/Account/technician").doc(firebase.auth().currentUser.email).set({
					nameg: this.state.nameg,
					locationgarage: this.state.locat,
					confirm: "2",
					rate: "0",
					num: "0",
				}, { merge: true });
			}, 1500);

		}, 5500);
		setTimeout(() => {
			this.props.navigation.navigate('Home')
		}, 7600);
	}



	render() {
		return (
			<View >


				{/* //////////////////header bar////////////////////// */}
				<View style={{ height: 40, backgroundColor: "#8B4726", flexDirection: "row" }}>
					<View style={{ flex: 3 }}>
						<TouchableOpacity activeOpacity={0.5}
							onPress={() => { this.props.navigation.navigate('Home') }}
						>
							<Image
								source={require('../../resource/back-white.png')}
								style={{ margin: 5, resizeMode: 'stretch', marginLeft: 10, height: 30, width: 20 }}
							/>
						</TouchableOpacity>
					</View>
					<View style={{ flex: 15 }}>
						<Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
							ยืนยันตัวตน
                    </Text>
					</View>
					<View style={{ flex: 3 }}>

					</View>
				</View>

				{/* //////////////////header bar////////////////////// */}

				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<View style={{ marginLeft: 10, marginRight: 10 }}>
						<Text style={{ marginTop: 10, color: "black" }}> ชื่ออู่ซ่อมรถของคุณ </Text>

						<TextInput
							style={{ marginLeft: '5%', marginRight: '5%', marginTop: '3%', height: 80, backgroundColor: "#e8e8e8", height: 40, color: "gray", fontSize: 15, width: 310 }}
							onChangeText={(nameg) => this._setState({ nameg })}
							value={this.state.nameg}
							placeholder="กรุณากรอกชื่ออู่ซ่อมรถของคุณ"
							maxLength={100}
							multiline={true}
							keyboardType={'default'}>
						</TextInput>
					</View>

					<View style={{ marginLeft: 10, marginRight: 10 }}>
						<Text style={{ marginTop: 10, color: "black" }}> ใบกำกับภาษี (กรุณาแนบรูป) </Text>
						<View style={{  /*alignItems: 'center', justifyContent: 'center' ,*/ marginTop: 5 }}>
							<Button
								title="เลือกรูปภาพ"
								color="#ff7200"
								onPress={this.onChooseImagePress1}
							/>
							{this.state.img1 &&
								<Image source={{ uri: this.state.img1 }} style={{ alignItems: 'center', marginTop: 5, width: 120, height: 120 }} />}

						</View>
					</View>

					<View style={{ marginLeft: 10, marginRight: 10 }}>
						<Text style={{ marginTop: 10, color: "black" }}> บัตรประชาชน (กรุณาแนบรูป) </Text>
						<View style={{  /*alignItems: 'center', justifyContent: 'center' ,*/ marginTop: 5 }}>
							<Button
								title="เลือกรูปภาพ"
								color="#ff7200"
								onPress={this.onChooseImagePress2}
							/>
							{this.state.img2 &&
								<Image source={{ uri: this.state.img2 }} style={{ alignItems: 'center', marginTop: 5, width: 120, height: 120 }} />}

						</View>
					</View>

					<View style={{ marginLeft: 10, marginRight: 10 }}>
						<Text style={{ marginTop: 10, color: "black" }}> ที่อยู่อู่ซ่อมรถ </Text>

						<TextInput
							style={{ marginLeft: '5%', marginRight: '5%', marginTop: '3%', height: 80, backgroundColor: "#e8e8e8", height: 120, color: "gray", fontSize: 15, width: 310 }}
							onChangeText={(locat) => this._setState({ locat })}
							value={this.state.locat}
							placeholder="กรุณากรอกที่อยู่อู่ซ่อมรถของคุณ"
							maxLength={200}
							multiline={true}
							keyboardType={'default'}>
						</TextInput>
					</View>
					<View style={{ marginLeft: 10, marginRight: 10 }}>
						<Text style={{ marginTop: 10, color: "black" }}> เลือกประเภทงาน </Text>
						<CheckBox
							title="เครื่องยนต์"
							checkedColor="#ff7200"
							checked={this.state.checked1}
							onPress={() => this.setState({ checked1: !this.state.checked1 })}
						/>
						<CheckBox
							title="แบตเตอรี่"
							checkedColor="#ff7200"
							checked={this.state.checked2}
							onPress={() => this.setState({ checked2: !this.state.checked2 })}
						/>
						<CheckBox
							title="หม้อน้ำ"
							checkedColor="#ff7200"
							checked={this.state.checked3}
							onPress={() => this.setState({ checked3: !this.state.checked3 })}
						/>
						<CheckBox
							title="ระบบแบรก"
							checkedColor="#ff7200"
							checked={this.state.checked4}
							onPress={() => this.setState({ checked4: !this.state.checked4 })}
						/>
						<CheckBox
							title="ช่วงล่าง"
							checkedColor="#ff7200"
							checked={this.state.checked5}
							onPress={() => this.setState({ checked5: !this.state.checked5 })}
						/>
						<CheckBox
							title="โช๊คอัพ"
							checkedColor="#ff7200"
							checked={this.state.checked6}
							onPress={() => this.setState({ checked6: !this.state.checked6 })}
						/>
						<CheckBox
							title="ล้อและยาง"
							checkedColor="#ff7200"
							checked={this.state.checked7}
							onPress={() => this.setState({ checked7: !this.state.checked7 })}
						/>

					</View>
					<TouchableOpacity
						style={{ backgroundColor: "#91dd3e", marginTop: 40, marginLeft: '5%', marginRight: '5%', height: 40, marginBottom: 60 }}
						onPress={() => { this.updata() }}
					>
						<View style={{ marginTop: 10 }}>
							<Text style={{ textAlign: "center", color: "white" }}>
								ยืนยัน
            </Text>

						</View >
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
	}

	_setState = (obj) => {
		this.setState(obj)
	}
	componentWillMount() {
		this.getPermissionAsync();
		console.log('hi');
	}

	getPermissionAsync = async () => {
		if (Constants.platform.ios) {
			const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
			if (status !== 'granted') {
				alert('Sorry, we need camera roll permissions to make this work!');
			}
		}
	}

}
export const { width, height } = Dimensions.get('window');