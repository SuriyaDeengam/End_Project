/**
 * @flow
 */

import React from 'react';
import {
    Dimensions,
    Image,
    Slider,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { Asset } from 'expo-asset';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as Font from 'expo-font';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';

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
const LIVE_COLOR = '#FF0000';
const DISABLED_OPACITY = 0.5;
const RATE_SCALE = 3.0;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.recording = null;
        this.sound = null;
        this.isSeeking = false;
        this.shouldPlayAtEndOfSeek = false;
        this.state = {
            nameuser: "nameuser",
            call: null,
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
        };
        this.recordingSettings = JSON.parse(JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY));
        // // UNCOMMENT THIS TO TEST maxFileSize:
        // this.recordingSettings.android['maxFileSize'] = 12000;
    }

    componentWillMount() {
        const { navigation } = this.props;
        const call = navigation.getParam('call');
        console.log("call = " + call);
        const nameuser = navigation.getParam('nameuser');
        this.setState({ call: call, nameuser: nameuser });


        (async () => {
            await Font.loadAsync({
                'cutive-mono-regular': require('../../../assets/fonts/CutiveMono-Regular.ttf'),
            });
            this.setState({ fontLoaded: true });
        })();
        this._askForPermissions();
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
        var ref1 = firebase.storage().ref().child("sound");
        ref1.getDownloadURL().then((url) => this.setState({ urisound: url }));
        console.log("urisound = ", this.state.urisound);

        return ref1.put(blob);
    }
    uploadsound() {
        this._onStopPressed()
        console.log(this.state.nameuser);
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
                        setTimeout(() => {
                            this.props.navigation.navigate('Fix3', { call: this.state.call })
                        }, 2000);

                    }
                    else {
                        setTimeout(() => {

                            console.log("urisound 2 = ", this.state.urisound);
                        }, 3000);
                    }
                }, 3000);
            }
            else {
                Alert.alert("กรุณาบันทึกเสียงก่อน")
            }
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

        if (!this.state.fontLoaded) {
            return (
                <View style={styles.emptyContainer} />
            )
        }

        if (!this.state.haveRecordingPermissions) {
            return (
                <View style={styles.container}>
                    <View />
                    <Text style={[styles.noPermissionsText]}>
                        You must enable audio recording permissions in order to use this app.
                </Text>
                    <View />
                </View>
            )
        }

        return (
            <View style={{ backgroundColor: BACKGROUND_COLOR, flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {/* //////////////////header bar////////////////////// */}
                    <View style={{ height: 40, backgroundColor: "#8B4726", flexDirection: "row" }}>
                        <View style={{ flex: 3 }}>
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => this.props.navigation.navigate('Fix3', { call: this.state.call })}
                            >
                                <Image
                                    source={require('../../resource/back-white.png')}
                                    style={{ margin: 5, resizeMode: 'stretch', marginLeft: 10, height: 30, width: 20 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 15 }}>
                            <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                                บันทึกเสียง
                            </Text>
                        </View>
                        <View style={{ flex: 3 }}>

                        </View>
                    </View>

                    {/* //////////////////header bar////////////////////// */}
                    {/* <Text>{this.state.urisound}</Text> */}
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
                <View style={{ marginBottom: 70 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => { this.uploadsound() }}
                        style={{ alignItems: 'center' }}
                    >
                        <Image
                            source={require('../../resource/check.png')}
                            style={{ marginLeft: 8, width: 60, height: 60 }}
                            resizeMode={'contain'}
                        />
                        <Text style={{ marginTop: 5, fontSize: 14, color: "black", textAlign: "center" }}>
                            ยืนยัน
                            </Text>
                    </TouchableOpacity>
                </View>

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
    // wrapper: {},
    // halfScreenContainer: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     alignSelf: 'stretch',
    //     minHeight: DEVICE_HEIGHT / 2.0,
    //     maxHeight: DEVICE_HEIGHT / 2.0,
    // },
    // recordingContainer: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     alignSelf: 'stretch',
    //     minHeight: ICON_RECORD_BUTTON.height,
    //     maxHeight: ICON_RECORD_BUTTON.height,
    // },
    // recordingDataContainer: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     minHeight: ICON_RECORD_BUTTON.height,
    //     maxHeight: ICON_RECORD_BUTTON.height,
    //     minWidth: ICON_RECORD_BUTTON.width * 3.0,
    //     maxWidth: ICON_RECORD_BUTTON.width * 3.0,
    // },
    // recordingDataRowContainer: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     minHeight: ICON_RECORDING.height,
    //     maxHeight: ICON_RECORDING.height,
    // },
    // playbackContainer: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     alignSelf: 'stretch',
    //     minHeight: ICON_THUMB_1.height * 2.0,
    //     maxHeight: ICON_THUMB_1.height * 2.0,
    // },
    playbackSlider: {
        alignSelf: 'stretch',
    },
    liveText: {
        color: LIVE_COLOR,
    },
    // recordingTimestamp: {
    //     paddingLeft: 20,
    // },
    // playbackTimestamp: {
    //     textAlign: 'right',
    //     alignSelf: 'stretch',
    //     paddingRight: 20,
    // },
    image: {
        backgroundColor: BACKGROUND_COLOR,
    },
    // textButton: {
    //     backgroundColor: BACKGROUND_COLOR,
    //     padding: 10,
    // },
    // buttonsContainerBase: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    // },
    // buttonsContainerTopRow: {
    //     maxHeight: ICON_MUTED_BUTTON.height,
    //     alignSelf: 'stretch',
    //     paddingRight: 20,
    // },
    // playStopContainer: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     minWidth: (ICON_PLAY_BUTTON.width + ICON_STOP_BUTTON.width) * 3.0 / 2.0,
    //     maxWidth: (ICON_PLAY_BUTTON.width + ICON_STOP_BUTTON.width) * 3.0 / 2.0,
    // },
    // volumeContainer: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     minWidth: DEVICE_WIDTH / 4.0,
    //     maxWidth: DEVICE_WIDTH / 4.0,
    // },
    // volumeSlider: {
    //     width: DEVICE_WIDTH / 2.0 - ICON_MUTED_BUTTON.width,
    // },
    // buttonsContainerBottomRow: {
    //     maxHeight: ICON_THUMB_1.height,
    //     alignSelf: 'stretch',
    //     paddingRight: 20,
    //     paddingLeft: 20,
    // },
    // rateSlider: {
    //     width: DEVICE_WIDTH / 2.0,
    // },
});