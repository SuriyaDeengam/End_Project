
/**
 *	Fix3 container
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Slider, Dimensions, Button, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import { Asset } from 'expo-asset';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as Font from 'expo-font';
import * as Permissions from 'expo-permissions';

result1 = ""

class Icon {
    constructor(module, width, height) {
        this.module = module;
        this.width = width;
        this.height = height;
        Asset.fromModule(this.module).downloadAsync();
    }
}

const ICON_RECORD_BUTTON = new Icon(require('../../../assets/images/record_button.png'), 70, 119);
const ICON_RECORDING = new Icon(require('../../../assets/images/record_icon.png'), 20, 14);

const ICON_PLAY_BUTTON = new Icon(require('../../../assets/images/play_button.png'), 34, 51);
const ICON_PAUSE_BUTTON = new Icon(require('../../../assets/images/pause_button.png'), 34, 51);
const ICON_STOP_BUTTON = new Icon(require('../../../assets/images/stop_button.png'), 22, 22);

const ICON_MUTED_BUTTON = new Icon(require('../../../assets/images/muted_button.png'), 67, 58);
const ICON_UNMUTED_BUTTON = new Icon(require('../../../assets/images/unmuted_button.png'), 67, 58);

const ICON_TRACK_1 = new Icon(require('../../../assets/images/track_1.png'), 166, 5);
const ICON_THUMB_1 = new Icon(require('../../../assets/images/thumb_1.png'), 18, 19);
const ICON_THUMB_2 = new Icon(require('../../../assets/images/thumb_2.png'), 15, 19);

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
const BACKGROUND_COLOR = '#e7e1da';
const LIVE_COLOR = '#e7e1da';
const DISABLED_OPACITY = 0.5;
const RATE_SCALE = 3.0;

class fix3Container extends React.Component {
    constructor(props) {
        super(props);
        this.recording = null;
        this.sound = null;
        this.isSeeking = false;
        this.shouldPlayAtEndOfSeek = false;
        this.state = {
            nameuser: "",
            detailocation: null,
            call: "",
            imglink1: "https://firebasestorage.googleapis.com/v0/b/my-project-fc5b2.appspot.com/o/nopic%2Fnopic.png?alt=media&token=d37b1719-eda1-4948-97e5-626ef5a240ac",
            img1: null,
            lat: "",
            long: "",
            fname: "",
            more: "",
            refsound: null,
            urisound: "no",
            haveRecordingPermissions: false,
            isLoading: false,
            isPlaybackAllowed: false,
            muted: false,
            soundPosition: null,
            soundDuration: null,
            recordingDuration: null,
            shouldPlay: false,
            isPlaying: false,
            isRecording: false,
            fontLoaded: false,
            shouldCorrectPitch: true,
            volume: 1.0,
            rate: 1.0,
            yourlocation: "ตำแหน่งของคุณ"
        };
        this.recordingSettings = JSON.parse(JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY));

    }
    componentDidMount = async () => {
        navigator.geolocation.getCurrentPosition(
            //Will give you the current location
            async position => {
                const currentLongitude = JSON.stringify(position.coords.longitude);
                //getting the Longitude from the location json
                const currentLatitude = JSON.stringify(position.coords.latitude);
                //getting the Latitude from the location json
                this.setState({ long: currentLongitude });
                //Setting state Longitude to re re-render the Longitude Text
                this.setState({ lat: currentLatitude });
                text2 = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + currentLatitude + "," + currentLongitude + "&key=AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w";
                let resp2 = await fetch(text2)
                let respJson2 = await resp2.json();
                console.log(respJson2.plus_code.compound_code);
                this.setState({ yourlocation: "" });

                setTimeout(() => {
                    res = respJson2.plus_code.compound_code.split(' ');
                    console.log(res);
                    for (let index = 1; index < res.length; index++) {
                        this.setState({ yourlocation: this.state.yourlocation + " " + res[index] });

                    }
                }, 1500)

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
    async componentWillMount() {
        navigator.geolocation.clearWatch(this.watchID);
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
        (async () => {
            await Font.loadAsync({
                'cutive-mono-regular': require('../../../assets/fonts/CutiveMono-Regular.ttf'),
            });
            this.setState({ fontLoaded: true });
        })();
        this._askForPermissions();

        // navigator.geolocation.getCurrentPosition(
        //     position => {
        //         const location = JSON.stringify(position);
        //         lat = JSON.stringify(position.coords.latitude);
        //         long = JSON.stringify(position.coords.longitude);
        //         this.setState({ lat: lat })
        //         this.setState({ long: long })
        //         // console.log(JSON.stringify(position.coords.latitude));
        //         // console.log(JSON.stringify(position.coords.longitude));
        //         // const dbh = firebase.firestore();
        //         // dbh.collection("Project/Account/technician").doc(firebase.auth().currentUser.email).update({
        //         //     lat: latt,
        //         //     long: longg,
        //         // })
        //         // this.setState({ location });
        //     },
        //     error => Alert.alert(error.message),
        //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        // );
        const { navigation } = this.props;
        const call = navigation.getParam('call');
        console.log(call);
        this.setState({ call: call });
        // text2 = "https://maps.googleapis.com/maps/api/geocode/json?latlng=13.0317917,100.8725985&key=AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w";
        // let resp2 = await fetch(text2)
        // let respJson2 = await resp2.json();
        // console.log(respJson2.plus_code.compound_code);
    }
    _setState = (obj) => {
        this.setState(obj)
    }
    uploadImage1 = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref1 = await firebase.storage().ref().child(firebase.auth().currentUser.uid + "user");

        setTimeout(() => {
            ref1.getDownloadURL().then((url) => this.setState({ imglink1: url }));
        }, 5000);

        return ref1.put(blob);
    }
    onChooseImagePress1 = async () => {
        let result1 = await ImagePicker.launchImageLibraryAsync();
        //let result1 = await ImagePicker.launchImageLibraryAsync();
        // console.log(result1.uri);
        this.setState({ img1: result1.uri })

        await this.uploadImage1(result1.uri, "1")
            .then(() => {
                console.log("Success");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    send() {
        setTimeout(() => {
            if (this.state.detailocation && this.state.more) {

                setTimeout(() => {
                    const dbh = firebase.firestore();
                    setTimeout(() => {
                        dbh.collection("Project/Account/user").doc(firebase.auth().currentUser.email).set({
                            status: "1",
                        }, { merge: true });
                    }, 1500);

                    dbh.collection("Project/work/first").doc(this.state.nameuser).set({
                        email: firebase.auth().currentUser.email,
                        nameuser: this.state.nameuser,
                        locationuser: this.state.detailocation,
                        more: this.state.more,
                        lat: this.state.lat,
                        long: this.state.long,
                        imglink: this.state.imglink1,
                        call: this.state.call,
                        userid: firebase.auth().currentUser.uid,
                        status: "0",

                    }, { merge: true });
                }, 4000);
                setTimeout(() => {
                    // Alert.alert(this.state.imglink)
                    Alert.alert("แจ้งซ่อมเรียบร้อย")
                    this.props.navigation.navigate('Home')
                }, 5000);
                this.uploadsound()
            } else {
                Alert.alert("กรุณากรอกข้อมูลให้ครบ")
            }
        }, 1500);
    }

    gosound1() {
        setTimeout(() => {
            this.props.navigation.navigate('sound', { call: this.state.call, nameuser: this.state.nameuser })
        }, 2000);
    }
    _askForPermissions = async () => {
        const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        this.setState({
            haveRecordingPermissions: response.status === 'granted',
        });
    };

    _updateScreenForSoundStatus = status => {
        if (status.isLoaded) {
            this.setState({
                soundDuration: status.durationMillis,
                soundPosition: status.positionMillis,
                shouldPlay: status.shouldPlay,
                isPlaying: status.isPlaying,
                rate: status.rate,
                muted: status.isMuted,
                volume: status.volume,
                shouldCorrectPitch: status.shouldCorrectPitch,
                isPlaybackAllowed: true,
            });
        } else {
            this.setState({
                soundDuration: null,
                soundPosition: null,
                isPlaybackAllowed: false,
            });
            if (status.error) {
                console.log(`FATAL PLAYER ERROR: ${status.error}`);
            }
        }
    };

    _updateScreenForRecordingStatus = status => {
        if (status.canRecord) {
            this.setState({
                isRecording: status.isRecording,
                recordingDuration: status.durationMillis,
            });
        } else if (status.isDoneRecording) {
            this.setState({
                isRecording: false,
                recordingDuration: status.durationMillis,
            });
            if (!this.state.isLoading) {
                this._stopRecordingAndEnablePlayback();
            }
        }
    };

    async _stopPlaybackAndBeginRecording() {
        this.setState({
            isLoading: true,
        });
        if (this.sound !== null) {
            await this.sound.unloadAsync();
            this.sound.setOnPlaybackStatusUpdate(null);
            this.sound = null;
        }
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: false,
            staysActiveInBackground: true,
        });
        if (this.recording !== null) {
            this.recording.setOnRecordingStatusUpdate(null);
            this.recording = null;
        }

        const recording = new Audio.Recording();
        await recording.prepareToRecordAsync(this.recordingSettings);
        recording.setOnRecordingStatusUpdate(this._updateScreenForRecordingStatus);

        this.recording = recording;
        await this.recording.startAsync(); // Will call this._updateScreenForRecordingStatus to update the screen.
        this.setState({
            isLoading: false,
        });
    }

    upsound = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref11 = firebase.storage().ref().child("sound" + firebase.auth().currentUser.uid);

        setTimeout(() => {
            ref11.getDownloadURL().then((url) => this.setState({ urisound: url }));
            console.log("urisound = ", this.state.urisound);
        }, 2000);

        return ref11.put(blob);
    }
    uploadsound() {
        this._onStopPressed()
        // console.log(this.state.nameuser);
        setTimeout(() => {
            if (this.state.refsound) {
                this.upsound(this.state.refsound)
                    .then(() => {
                        console.log("Success");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                setTimeout(() => {
                    if (this.state.urisound) {
                        console.log("urisound complete = ", this.state.urisound);
                        const dbh = firebase.firestore();
                        dbh.collection("Project/work/first").doc(this.state.nameuser).set({
                            urisound: this.state.urisound,
                        }, { merge: true });
                        // setTimeout(() => {
                        //     this.props.navigation.navigate('Fix3', { call: this.state.call })
                        // }, 2000);

                    }
                    else {
                        setTimeout(() => {

                            console.log("urisound 2 = ", this.state.urisound);
                        }, 3000);
                    }
                }, 3000);
            }
            // else {
            //     Alert.alert("กรุณาบันทึกเสียงก่อน")
            // }
        }, 2000);



    }
    async _stopRecordingAndEnablePlayback() {
        this.setState({
            isLoading: true,
        });
        try {
            await this.recording.stopAndUnloadAsync();
        } catch (error) {
            // Do nothing -- we are already unloaded.
        }
        const info = await FileSystem.getInfoAsync(this.recording.getURI());
        // console.log(`FILE INFO: ${JSON.stringify(info)}`);

        setTimeout(() => {
            // linksound=JSON.stringify(info); 
            console.log("info.uri = ", info.uri);
            this.setState({
                refsound: info.uri,
            });
        }, 2000);

        await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            playsInSilentLockedModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: false,
            staysActiveInBackground: true,
        });
        const { sound, status } = await this.recording.createNewLoadedSoundAsync(
            {
                isLooping: true,
                isMuted: this.state.muted,
                volume: this.state.volume,
                rate: this.state.rate,
                shouldCorrectPitch: this.state.shouldCorrectPitch,
            },
            this._updateScreenForSoundStatus
        );
        this.sound = sound;
        this.setState({
            isLoading: false,
        });
    }

    _onRecordPressed = () => {
        if (this.state.isRecording) {
            this._stopRecordingAndEnablePlayback();
        } else {
            this._stopPlaybackAndBeginRecording();
        }
    };

    _onPlayPausePressed = () => {
        if (this.sound != null) {
            if (this.state.isPlaying) {
                this.sound.pauseAsync();
            } else {
                this.sound.playAsync();
            }
        }
    };

    _onStopPressed = () => {
        if (this.sound != null) {
            this.sound.stopAsync();
        }
    };

    _onMutePressed = () => {
        if (this.sound != null) {
            this.sound.setIsMutedAsync(!this.state.muted);
        }
    };

    _onVolumeSliderValueChange = value => {
        if (this.sound != null) {
            this.sound.setVolumeAsync(value);
        }
    };

    _trySetRate = async (rate, shouldCorrectPitch) => {
        if (this.sound != null) {
            try {
                await this.sound.setRateAsync(rate, shouldCorrectPitch);
            } catch (error) {
                // Rate changing could not be performed, possibly because the client's Android API is too old.
            }
        }
    };

    _onRateSliderSlidingComplete = async value => {
        this._trySetRate(value * RATE_SCALE, this.state.shouldCorrectPitch);
    };

    _onPitchCorrectionPressed = async value => {
        this._trySetRate(this.state.rate, !this.state.shouldCorrectPitch);
    };

    _onSeekSliderValueChange = value => {
        if (this.sound != null && !this.isSeeking) {
            this.isSeeking = true;
            this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
            this.sound.pauseAsync();
        }
    };

    _onSeekSliderSlidingComplete = async value => {
        if (this.sound != null) {
            this.isSeeking = false;
            const seekPosition = value * this.state.soundDuration;
            if (this.shouldPlayAtEndOfSeek) {
                this.sound.playFromPositionAsync(seekPosition);
            } else {
                this.sound.setPositionAsync(seekPosition);
            }
        }
    };

    _getSeekSliderPosition() {
        if (
            this.sound != null &&
            this.state.soundPosition != null &&
            this.state.soundDuration != null
        ) {
            return this.state.soundPosition / this.state.soundDuration;
        }
        return 0;
    }

    _getMMSSFromMillis(millis) {
        const totalSeconds = millis / 1000;
        const seconds = Math.floor(totalSeconds % 60);
        const minutes = Math.floor(totalSeconds / 60);

        const padWithZero = number => {
            const string = number.toString();
            if (number < 10) {
                return '0' + string;
            }
            return string;
        };
        return padWithZero(minutes) + ':' + padWithZero(seconds);
    }

    _getPlaybackTimestamp() {
        if (
            this.sound != null &&
            this.state.soundPosition != null &&
            this.state.soundDuration != null
        ) {
            return `${this._getMMSSFromMillis(this.state.soundPosition)} / ${this._getMMSSFromMillis(
                this.state.soundDuration
            )}`;
        }
        return '';
    }

    _getRecordingTimestamp() {
        if (this.state.recordingDuration != null) {
            return `${this._getMMSSFromMillis(this.state.recordingDuration)}`;
        }
        return `${this._getMMSSFromMillis(0)}`;
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#e7e1da" }}>
                <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                    {/* บนซ้าย */}
                    <View style={{ flex: 3 }}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => { this.props.navigation.navigate('Fix1') }}
                        >
                            <Image
                                source={require('../../resource/back-white.png')}
                                style={{ margin: 5, height: 30, width: 25 }}
                            />
                        </TouchableOpacity>
                    </View>
                    {/* กลาง */}
                    <View style={{ flex: 18 }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                            FIX
                            {/* {this.state.call} */}
                        </Text>
                    </View>
                    {/* บนขวา */}
                    <View style={{ flex: 3 }}>
                    </View>
                </View>

                <View style={{ height: 70, backgroundColor: "#ffbe6a", justifyContent: "center" }}>
                    <Text style={{ fontSize: 25, color: "black", textAlign: "center" }}> ตำแหน่งปัจจุบันของคุณ</Text>
                    <Text style={{ fontSize: 15, color: "black", textAlign: "center" }}>{this.state.yourlocation}</Text>
                </View>

                <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'space-between', }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{ marginTop: 10, marginRight: 10 }}>
                            <Text style={{ marginTop: 10, marginLeft: '5%', color: "#ff7200", fontSize: 15 }}>
                                รายละเอียดตำแหน่งที่อยู่เพิ่มเติมของคุณ
                    </Text>
                            <TextInput
                                style={{ marginLeft: '5%', marginRight: '5%', fontSize: 12, width: 330, height: 100, backgroundColor: "#e8e8e8" }}
                                onChangeText={(detailocation) => this._setState({ detailocation })}
                                value={this.state.detailocation}
                                placeholder="กรุณากรอกรายละเอียดตำแหน่งเพิ่มเติมของคุณที่ชัดเจน"
                                maxLength={200}
                                multiline={true}
                                keyboardType={'default'}>
                            </TextInput>

                        </View>
                        <View style={{ marginTop: 10, marginRight: 10 }}>
                            <Text style={{ marginTop: 10, marginLeft: '5%', color: "#ff7200", fontSize: 15 }}>
                                อาการรถเสียเพิ่มเติม
                    </Text>
                            <TextInput
                                style={{ marginLeft: '5%', marginRight: '5%', fontSize: 12, width: 330, height: 100, backgroundColor: "#e8e8e8" }}
                                onChangeText={(more) => this._setState({ more })}
                                value={this.state.more}
                                placeholder="กรุณากรอกอาการเพิ่มเติม"
                                maxLength={200}
                                multiline={true}
                                keyboardType={'default'}>
                            </TextInput>

                        </View>
                        <View style={{ marginTop: 10, marginRight: 10 }}>
                            <Text style={{ marginTop: 10, marginLeft: '5%', color: "#ff7200", fontSize: 15 }}>
                                รูปภาพเพิ่มเติม
                    </Text>
                            <View style={{ marginTop: 5, marginLeft: '5%', marginRight: '5%' }}>
                                <Button
                                    title="เลือกรูปภาพ"
                                    color="#ff7200"
                                    onPress={this.onChooseImagePress1}
                                />
                                {this.state.img1 &&
                                    <Image source={{ uri: this.state.img1 }} style={{ alignItems: 'center', marginTop: 5, width: 150, height: 150 }} />}

                            </View>
                        </View>
                        <View style={{ marginTop: 10, marginRight: 10 }}>
                            {/* <Text style={{ marginTop: 10, marginLeft: '5%', color: "#ff7200", fontSize: 15 }}>
                                อัดเสียงอาการเพิ่มเติม
                    </Text>
                            <View style={{ flex: 1, marginLeft: '5%', borderColor: "black", flexDirection: 'row' }}>
                                <TouchableOpacity activeOpacity={0.5}
                                    onPress={() => { this.gosound1() }}
                                    style={{ marginTop: '3%' }}
                                >
                                    <Image
                                        source={require('../../resource/microphone.png')}
                                        style={{ width: 120, height: 100 }}
                                        resizeMode={'center'}
                                    />
                                </TouchableOpacity>
                            </View> */}
                            <View
                                style={[
                                    { marginTop: 40 },
                                    {
                                        opacity: this.state.isLoading ? DISABLED_OPACITY : 1.0,
                                    },
                                ]}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <TouchableHighlight
                                        underlayColor={BACKGROUND_COLOR}
                                        style={{ marginRight: 30 }}
                                        onPress={this._onRecordPressed}
                                        disabled={this.state.isLoading}>
                                        <Image style={styles.image} source={ICON_RECORD_BUTTON.module} />
                                    </TouchableHighlight>
                                    <View style={{ marginLeft: 20 }}>

                                        <Text style={[styles.liveText]}>
                                            {this.state.isRecording ? 'กำลังบันทึกเสียง' : ''}
                                        </Text>
                                        <View style={styles.recordingDataRowContainer}>
                                            <Image
                                                style={[styles.image, { opacity: this.state.isRecording ? 1.0 : 0.0 }]}
                                                source={ICON_RECORDING.module}
                                            />
                                            <Text style={[styles.recordingTimestamp]}>
                                                {this._getRecordingTimestamp()}
                                            </Text>
                                        </View>

                                    </View>

                                </View>

                            </View>
                            <View
                                style={[
                                    styles.halfScreenContainer,
                                    {
                                        opacity:
                                            !this.state.isPlaybackAllowed || this.state.isLoading ? DISABLED_OPACITY : 1.0,
                                    },
                                ]}>
                                <View style={styles.playbackContainer}>
                                    <Slider
                                        style={styles.playbackSlider}
                                        trackImage={ICON_TRACK_1.module}
                                        thumbImage={ICON_THUMB_1.module}
                                        value={this._getSeekSliderPosition()}
                                        onValueChange={this._onSeekSliderValueChange}
                                        onSlidingComplete={this._onSeekSliderSlidingComplete}
                                        disabled={!this.state.isPlaybackAllowed || this.state.isLoading}
                                    />
                                    <Text style={[styles.playbackTimestamp]}>
                                        {this._getPlaybackTimestamp()}
                                    </Text>
                                </View>
                                <View style={{}}>
                                    <View style={{ marginTop: 30, flexDirection: "row", justifyContent: 'center' }}>
                                        <TouchableHighlight
                                            underlayColor={BACKGROUND_COLOR}
                                            onPress={this._onMutePressed}
                                            disabled={!this.state.isPlaybackAllowed || this.state.isLoading}>
                                            <Image
                                                style={styles.image}
                                                source={this.state.muted ? ICON_MUTED_BUTTON.module : ICON_UNMUTED_BUTTON.module}
                                            />
                                        </TouchableHighlight>
                                        <Slider
                                            style={{ width: DEVICE_WIDTH - 190 }}
                                            trackImage={ICON_TRACK_1.module}
                                            thumbImage={ICON_THUMB_2.module}
                                            value={1}
                                            onValueChange={this._onVolumeSliderValueChange}
                                            disabled={!this.state.isPlaybackAllowed || this.state.isLoading}
                                        />
                                    </View>
                                    <View style={{ marginTop: 30, flexDirection: "row", justifyContent: 'center' }}>
                                        <TouchableHighlight
                                            underlayColor={BACKGROUND_COLOR}
                                            style={{ marginRight: 15 }}
                                            onPress={this._onPlayPausePressed}
                                            disabled={!this.state.isPlaybackAllowed || this.state.isLoading}>
                                            <Image
                                                style={styles.image}
                                                source={this.state.isPlaying ? ICON_PAUSE_BUTTON.module : ICON_PLAY_BUTTON.module}
                                            />
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                            underlayColor={BACKGROUND_COLOR}
                                            style={{ marginLeft: 15, marginTop: 10 }}
                                            onPress={this._onStopPressed}
                                            disabled={!this.state.isPlaybackAllowed || this.state.isLoading}>
                                            <Image style={styles.image} source={ICON_STOP_BUTTON.module} />
                                        </TouchableHighlight>
                                    </View>
                                </View>
                                <View />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{ marginBottom: 50, backgroundColor: "#49a5fb", marginLeft: '5%', marginRight: '5%', marginTop: '4%', height: 40 }}
                            onPress={() => { this.send() }}
                        >
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ textAlign: "center", fontSize: 15, color: "white" }}>
                                    ยืนยันการแจ้งซ่อม
                        </Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    emptyContainer: {
        alignSelf: 'stretch',
        backgroundColor: BACKGROUND_COLOR,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: BACKGROUND_COLOR,
        minHeight: DEVICE_HEIGHT,
        maxHeight: DEVICE_HEIGHT,
    },
    noPermissionsText: {
        textAlign: 'center',
    },
    playbackSlider: {
        alignSelf: 'stretch',
    },
    liveText: {
        color: LIVE_COLOR,
    },
    image: {
        backgroundColor: BACKGROUND_COLOR,
    },
});
export default fix3Container;
