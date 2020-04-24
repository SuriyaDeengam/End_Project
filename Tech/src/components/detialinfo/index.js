// /**
//  *	Working container
//  */


import * as React from 'react';
import { Button, Image, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

import * as firebase from 'firebase';
export default class How extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount() {
        const { navigation } = this.props;
        nameuser = navigation.getParam('item');
        // console.log(come);
        urisound=""
        userid="";
        email = "";
        call = "";
        imglink = "";
        lat = "";
        long = "";
        locationuser = "";
        more="";
        // console.log(nameuser);
        const dbh = firebase.firestore();
        const conf = dbh.collection("Project/work/first")
        try {
            conf.doc(nameuser).onSnapshot(function (doc) {
                more= doc.data().more
                urisound = doc.data().urisound
                userid = doc.data().userid
                email = doc.data().email
                call = doc.data().call
                imglink = doc.data().imglink
                lat = doc.data().lat
                long = doc.data().long
                locationuser = doc.data().locationuser
                nameuser = doc.data().nameuser
                // console.log(email,call ,imglink ,lat ,long ,locationuser, nameuser);

            })
        } catch (error) {
            console.log(error)
        }

        setTimeout(() => {

            this.props.navigation.navigate('Detail', {
                more:more,
                userid:userid,
                urisound: urisound,
                email: email,
                call: call,
                imglink: imglink,
                lat: lat,
                long: long,
                locationuser: locationuser,
                nameuser: nameuser,

            })
        }, 3000);
    }
    render() {
        return (

            <View style={{ flex: 1,justifyContent:'center',alignContent:'center', backgroundColor: "#eeddc1" }}>

                <ActivityIndicator size="large" ></ActivityIndicator>
            </View>
        );
    }

    _setState = (obj) => {
        this.setState(obj)
    }
}
export const { width, height } = Dimensions.get('window');


// import React, { Component } from 'react';
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import { Constants  } from 'expo';
// import { Audio } from 'expo-av';
// // https://github.com/expo/expo/issues/1141

// source = {
//   uri: 'https://firebasestorage.googleapis.com/v0/b/my-project-fc5b2.appspot.com/o/soundaeD1gAoNkHaL6KK6jHkYOZbfkOn2?alt=media&token=fc9c0668-ead8-4199-8ee5-6420f05273be',
// };

// export default class App extends Component {
//   state = {
//     playingStatus: "nosound",
//   };
  
//   async _playRecording() {
//     const { sound } = await Audio.Sound.create(
//       source,
//       {
//         shouldPlay: true,
//         isLooping: true,
//       },
//       this._updateScreenForSoundStatus,
//     );
//     this.sound = sound;
//     this.setState({
//       playingStatus: 'playing'
//     });
//   }
  
//   _updateScreenForSoundStatus = (status) => {
//     if (status.isPlaying && this.state.playingStatus !== "playing") {
//       this.setState({ playingStatus: "playing" });
//     } else if (!status.isPlaying && this.state.playingStatus === "playing") {
//       this.setState({ playingStatus: "donepause" });
//     }
//   };
  
//   async _pauseAndPlayRecording() {
//     if (this.sound != null) {
//       if (this.state.playingStatus == 'playing') {
//         console.log('pausing...');
//         await this.sound.pauseAsync();
//         console.log('paused!');
//         this.setState({
//           playingStatus: 'donepause',
//         });
//       } else {
//         console.log('playing...');
//         await this.sound.playAsync();
//         console.log('playing!');
//         this.setState({
//           playingStatus: 'playing',
//         });
//       }
//     }
//   }
  
//   _syncPauseAndPlayRecording() {
//     if (this.sound != null) {
//       if (this.state.playingStatus == 'playing') {
//         this.sound.pauseAsync();
//       } else {
//         this.sound.playAsync();
//       }
//     }
//   }
  
//   _playAndPause = () => {
//     switch (this.state.playingStatus) {
//       case 'nosound':
//         this._playRecording();
//         break;
//       case 'donepause':
//       case 'playing':
//         this._pauseAndPlayRecording();
//         break;
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity style={styles.button} onPress={this._playAndPause}>
//             <Text style={styles.buttonText}>
//               {this.state.playingStatus}
//             </Text>
//           </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#000',
//     // paddingTop: Constants.statusBarHeight,
//   },
//   button: {
//     width: 256,
//     height: 256/1.618,
//     margin: 5,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     textAlign: 'center',
//     backgroundColor: 'transparent',
//   },
// });
