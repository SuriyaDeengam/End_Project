// // /**
// //  *	Working container
// //  */api key AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w


///////////havelinedirection
import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions, Text, View, Button } from 'react-native';
import MapView, { Polyline, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Markchung from '../../resource/chungmk.png';
import Markuser from '../../resource/usermk.png';
import * as firebase from 'firebase';


km = "";
time = "";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latA: 0,
            longA: 0,
            latB: 13.13,
            longB: 100.9308632,
        };
    }
    // getMapRegion = () => ({
    //     latitude: this.state.latA,
    //     longitude: this.state.longA,
    //     latitudeDelta: this.state.latitudeDelta,
    //     longitudeDelta: this.state.latitudeDelta
    // });
    async componentWillMount() {




        const { navigation } = this.props;
        lat = parseFloat(navigation.getParam('Alat'));
        long = parseFloat(navigation.getParam('Along'));

        lat1 = navigation.getParam('Alat');
        long1 = navigation.getParam('Along');
        this.setState({ latA: lat, longA: long });

        // const dbh = firebase.firestore();
        // var docRef = dbh.collection("Project/Account/technician").doc(firebase.auth().currentUser.email);

        // docRef.onSnapshot(function (doc) {

        //     firstname = doc.data().fname;
        //     phone = doc.data().phone;
        //     console.log("Current data: ", firstname);
        //////////////////////////////////////////////////////
        text = "https://maps.googleapis.com/maps/api/directions/json?origin=" + lat1 + "," + long1 + "&destination=13.13,100.9308632&key=AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w";
        let resp = await fetch(text)
        let respJson = await resp.json();
        km = respJson.routes[0].legs[0].distance.text;
        time = respJson.routes[0].legs[0].duration.text
        setTimeout(() => {
            console.log(km + time);
        }, 3000);
        //////////////////////////////////////////////////////
        // });
    }

    async distance() {
        text = "https://maps.googleapis.com/maps/api/directions/json?origin=" + lat + "," + long + "&destination=13.13,100.9308632&key=AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w";
        let resp = await fetch(text)
        let respJson = await resp.json();
        km = respJson.routes[0].legs[0].distance.text;
        time = respJson.routes[0].legs[0].duration.text
    }
    render() {
        const dbh = firebase.firestore();
        var docRef = dbh.collection("Project/Account/technician").doc(firebase.auth().currentUser.email);
        docRef.onSnapshot(function (doc) {
            lat = parseFloat(doc.data().lat);
            long = parseFloat(doc.data().long);
            // console.log("lat ", lat);
            // console.log("long ", long);
        });

        setTimeout(() => {
            this.setState({ latA: lat, longA: long });
            this.distance();
            // console.log("Current data: ", this.state.latA);

        }, 2000);
        const { width, height } = Dimensions.get('window');
        const ASPECT_RATIO = width / height;
        const LATITUDE_DELTA = 0.0922;
        const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;




        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                {/* //////////////////header bar////////////////////// */}
                <View style={{ height: 40, backgroundColor: "#8B4726", flexDirection: "row" }}>
                    <View style={{ flex: 3 }}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => { this.props.navigation.navigate('List') }}
                        >
                            <Image
                                source={require('../../resource/back-white.png')}
                                style={{ margin: 5, resizeMode: 'stretch', marginLeft: 10, height: 30, width: 20 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 15 }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                            {this.state.latA}
                        </Text>
                    </View>
                    <View style={{ flex: 3 }}>

                    </View>
                </View>

                {/* //////////////////header bar////////////////////// */}
                <MapView
                    style={{ flex: 9 }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation
                    initialRegion={{
                        latitude: this.state.latA,
                        longitude: this.state.longA,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                // region={this.getMapRegion()}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.latA,
                            longitude: this.state.longA,
                        }}
                        image={Markchung}
                        title={"marker.title"}
                        description={"desss"}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.latB,
                            longitude: this.state.longB,
                        }}
                        image={Markuser}
                        title={"marker.title"}
                        description={"desss"}
                    />
                    <MapViewDirections
                        origin={{ latitude: this.state.latA, longitude: this.state.longA }}
                        destination={{ latitude: this.state.latB, longitude: this.state.longB }}
                        apikey="AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w"
                        strokeWidth={8}
                        strokeColor="#1FC45B"
                        mode="DRIVING"
                    />
                </MapView >
                <View style={{ flex: 1, backgroundColor: "#8B4726", flexDirection: "row" }}>
                    <View style={{ flex: 5, alignContent: "center" }}>
                        <Text style={{ textAlign: "center", color: "#eeddc1", fontSize: 23, marginTop: 25 }}>Distance: {km} Time: {time}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ backgrounDColor: "red", marginTop: 15, marginRight: 15, height: 60 }}
                            onPress={() => { this.props.navigation.navigate('inwork') }}>
                            <View style={{ marginTop: 10, justifyContent: "center" }}>
                                <Text style={{ textAlign: "center", color: "white", fontSize: 18, marginTop: 5 }}>สิ้นสุด</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}


//////แมะจุดมากเก้อเปลี่ยนรูป
// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';

// import MapView, { Marker, ProviderPropType } from 'react-native-maps';
// import flagPinkImg from '../../resource/back-white.png';

// const { width, height } = Dimensions.get('window');

// const ASPECT_RATIO = width / height;
// const LATITUDE = 37.78825;
// const LONGITUDE = -122.4324;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// let id = 0;

// class CustomMarkers extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       region: {
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       },
//       markers: [],
//     };

//     this.onMapPress = this.onMapPress.bind(this);
//   }

//   onMapPress(e) {
//     this.setState({
//       markers: [
//         ...this.state.markers,
//         {
//           coordinate: e.nativeEvent.coordinate,
//           key: `foo${id++}`,
//         },
//       ],
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           provider={this.props.provider}
//           style={styles.map}
//           initialRegion={this.state.region}
//           onPress={this.onMapPress}
//         >
//           {this.state.markers.map(marker => (
//             <Marker
//               title={marker.key}
//               image={flagPinkImg}
//               key={marker.key}
//               coordinate={marker.coordinate}
//             />
//           ))}
//         </MapView>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             onPress={() => this.setState({ markers: [] })}
//             style={styles.bubble}
//           >
//             <Text>Tap to create a marker of random color</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// CustomMarkers.propTypes = {
//   provider: ProviderPropType,
// };

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   bubble: {
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 20,
//   },
//   latlng: {
//     width: 200,
//     alignItems: 'stretch',
//   },
//   button: {
//     width: 80,
//     paddingHorizontal: 12,
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginVertical: 20,
//     backgroundColor: 'transparent',
//   },
// });

// export default CustomMarkers;

/////////แมพวิวแบบกดละมีมากเก้อ////
// import React from 'react';
// import {
//     StyleSheet,
//     View,
//     Text,
//     Dimensions,
//     TouchableOpacity,
// } from 'react-native';

// import MapView, { Marker, ProviderPropType } from 'react-native-maps';

// const { width, height } = Dimensions.get('window');

// const ASPECT_RATIO = width / height;
// const LATITUDE = 37.78825;
// const LONGITUDE = -122.4324;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// let id = 0;

// function randomColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//         .toString(16)
//         .padStart(6, 0)}`;
// }

// class DefaultMarkers extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             region: {
//                 latitude: LATITUDE,
//                 longitude: LONGITUDE,
//                 latitudeDelta: LATITUDE_DELTA,
//                 longitudeDelta: LONGITUDE_DELTA,
//             },
//             markers: [],
//         };
//     }

//     onMapPress(e) {
//         this.setState({
//             markers: [
//                 ...this.state.markers,
//                 {
//                     coordinate: e.nativeEvent.coordinate,
//                     key: id++,
//                     color: randomColor(),
//                 },
//             ],
//         });
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <MapView
//                     provider={this.props.provider}
//                     style={styles.map}
//                     initialRegion={this.state.region}
//                     onPress={e => this.onMapPress(e)}
//                 >
//                     {this.state.markers.map(marker => (
//                         <Marker
//                             key={marker.key}
//                             coordinate={marker.coordinate}
//                             pinColor={marker.color}
//                         />
//                     ))}
//                 </MapView>
//                 <View style={styles.buttonContainer}>
//                     <TouchableOpacity
//                         onPress={() => this.setState({ markers: [] })}
//                         style={styles.bubble}
//                     >
//                         <Text>Tap to create a marker of random color</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         );
//     }
// }

// DefaultMarkers.propTypes = {
//     provider: ProviderPropType,
// };

// const styles = StyleSheet.create({
//     container: {
//         ...StyleSheet.absoluteFillObject,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     map: {
//         ...StyleSheet.absoluteFillObject,
//     },
//     bubble: {
//         backgroundColor: 'rgba(255,255,255,0.7)',
//         paddingHorizontal: 18,
//         paddingVertical: 12,
//         borderRadius: 20,
//     },
//     latlng: {
//         width: 200,
//         alignItems: 'stretch',
//     },
//     button: {
//         width: 80,
//         paddingHorizontal: 12,
//         alignItems: 'center',
//         marginHorizontal: 10,
//     },
//     buttonContainer: {
//         flexDirection: 'row',
//         marginVertical: 20,
//         backgroundColor: 'transparent',
//     },
// });

// export default DefaultMarkers;

////////เมพวิวเปล่าๆ//////////
// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// export default class App extends React.Component {
//     render() {
//         return (
//             <MapView
//                 style={{ flex: 1 }}
//                 provider={PROVIDER_GOOGLE}
//                 showsUserLocation
//                 initialRegion={{
//                     latitude: 13.1201664,
//                     longitude: 100.9108632,
//                     latitudeDelta: 0.0100,
//                     longitudeDelta: 0.0500,
//                 }}
//             />
//         );
//     }
// }
