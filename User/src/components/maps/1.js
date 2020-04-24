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
    async componentDidMount() {




        const { navigation } = this.props;
        lat = parseFloat(navigation.getParam('Alat'));
        long = parseFloat(navigation.getParam('Along'));

        lat1 = navigation.getParam('Alat');
        long1 = navigation.getParam('Along');
        this.setState({ latA: lat, longA: long });

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
        var docRef = dbh.collection("Project/Account/technician").doc("test1@gmail.com");
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
                <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                    <View style={{ flex: 3 }}>
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
                <View style={{ flex: 1, backgroundColor: "#ff7200", flexDirection: "row" }}>
                    <View style={{ flex: 5, alignContent: "center" }}>
                        <Text style={{ textAlign: "center", color: "#eeddc1", fontSize: 23, marginTop: 25 }}>Distance: {km} Time: {time}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ backgrounDColor: "red", marginTop: 15, marginRight: 15, height: 60 }}
                            onPress={() => { this.props.navigation.navigate('Myjob') }}>
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
