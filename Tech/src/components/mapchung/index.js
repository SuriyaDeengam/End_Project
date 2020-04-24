// App.js

import React, { Component } from 'react';
import { Alert, StyleSheet, Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Polyline, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Markchung from '../../resource/chungmk.png';
import Markuser from '../../resource/usermk.png';

import * as firebase from 'firebase';


latt = "";
longg = "";

lat = 0;
long = 0;

latdis = 0;
longdis = 0;

latuser = 0;
longuser = 0;
namecase = "";
aa = "";
aa2 = "";

km = "";
time = "";
export default class App extends Component {
    state = {
        location: null,
        statelat: "",
        statelong: "",
        latchung: 0,
        longchung: 0,
        latuser: 0,
        longuser: 0,

    };

    componentWillMount() {
        const { navigation } = this.props;
        aa = navigation.getParam('aa');
        this.setState({ aa: aa })
        aa2 = navigation.getParam('aa2');
        this.setState({ aa2: aa2 })
        namecase = navigation.getParam('namecase');
        nameuser = navigation.getParam('nameuser');


        latuser = navigation.getParam('latuser');
        longuser = navigation.getParam('longuser');

        this.setState({ latuser: latuser, longuser: longuser })
        // console.log(latuser, longuser,latuser+ longuser);
        console.log("user  ", this.state.latuser, this.state.longuser);
        // console.log("chung  ", this.state.latchung, this.state.longchung);

        navigator.geolocation.getCurrentPosition(
            position => {
                const currentLongitude = parseFloat(JSON.stringify(position.coords.longitude));
                const currentLatitude = parseFloat(JSON.stringify(position.coords.latitude));
                this.setState({ latchung: currentLatitude, longchung: currentLongitude });
                console.log("LAT 11 " + this.state.latchung, this.state.longchung);
            },
            error => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );

        setTimeout(async () => {

            text = "https://maps.googleapis.com/maps/api/directions/json?origin=" + this.state.latchung + "," + this.state.longchung + "&destination=" + this.state.latuser + "," + this.state.longuser + "&key=AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w";
            let resp = await fetch(text)
            let respJson = await resp.json();
            km = respJson.routes[0].legs[0].distance.text;
            time = respJson.routes[0].legs[0].duration.text;
            const dbh = firebase.firestore();
            dbh.collection("Project/work/second").doc(namecase).update({
                kmtime: "ระยะทาง = " + km + "เวลา = " + time,
            })
            console.log("newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
        }, 2000);


        // console.log(namecase);
    }
    findCoordinates = async () => {
        // console.log("user  ", this.state.latuser, this.state.longuser);
        // console.log("chung  ", this.state.latchung, this.state.longchung);

        // navigator.geolocation.getCurrentPosition(
        //     position => {
        //         const currentLongitude = JSON.stringify(position.coords.longitude);
        //         const currentLatitude = JSON.stringify(position.coords.latitude);
        //         this.setState({  latchung: currentLongitude, longchung: currentLatitude });
        //         console.log("LAT 1 "+this.state.latchung,this.state.longchung);
        //     },
        //     error => alert(error.message),
        //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        // );
        // this.watchID = navigator.geolocation.watchPosition(position => {
        //     console.log(position);
        //     const currentLongitude = JSON.stringify(position.coords.longitude);
        //     const currentLatitude = JSON.stringify(position.coords.latitude);
        //     const dbh = firebase.firestore();
        //     dbh.collection("Project/work/second").doc(namecase).update({
        //         lat: currentLatitude,
        //         long: currentLongitude,
        //     })
        //     this.setState({  latchung: currentLongitude, longchung: currentLatitude });
        //     console.log("LAT 2 "+this.state.latchung,this.state.longchung);

        // });


        // text = "https://maps.googleapis.com/maps/api/directions/json?origin=" + this.state.latchung + "," + this.state.longchung + "&destination=" + this.state.latuser + "," + this.state.longuser + "&key=AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w";
        // let resp = await fetch(text)
        // let respJson = await resp.json();
        // km = respJson.routes[0].legs[0].distance.text;
        // time = respJson.routes[0].legs[0].duration.text;
        // console.log("newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
    };
    endmap() {
        const dbh = firebase.firestore();
        dbh.collection("Project/work/second").doc(namecase).set({
            step1: "3",
        }, { merge: true });

        setTimeout(() => {
            console.log("work ", step1);
            this.props.navigation.navigate('inwork', { namecase: namecase, aa: aa, aa2: aa2 })

        }, 2000);
    }
    render() {
        console.log("user  ", this.state.latuser + this.state.longuser);
        console.log("chung  ", this.state.latchung + this.state.longchung);

        navigator.geolocation.getCurrentPosition(
            position => {
                const currentLongitude = parseFloat(JSON.stringify(position.coords.longitude));
                const currentLatitude = parseFloat(JSON.stringify(position.coords.latitude));
                this.setState({ latchung: currentLatitude, longchung: currentLongitude });
                console.log("LAT 1 " + this.state.latchung, this.state.longchung);
                const dbh = firebase.firestore();
                dbh.collection("Project/work/second").doc(namecase).update({
                    lat: currentLatitude,
                    long: currentLongitude,
                })
            },
            // error => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        // this.watchID = navigator.geolocation.watchPosition(position => {
        //     console.log(position);
        //     const currentLongitude = JSON.stringify(position.coords.longitude);
        //     const currentLatitude = JSON.stringify(position.coords.latitude);
        //     const dbh = firebase.firestore();
        //     dbh.collection("Project/work/second").doc(namecase).update({
        //         lat: currentLatitude,
        //         long: currentLongitude,
        //     })
        //     this.setState({ latchung: currentLongitude, longchung: currentLatitude });
        //     console.log("LAT 2 " + this.state.latchung, this.state.longchung);

        // });
        setTimeout(async () => {

            text = "https://maps.googleapis.com/maps/api/directions/json?origin=" 
            + this.state.latchung + "," + this.state.longchung + "&destination=" 
            + this.state.latuser + "," + this.state.longuser
            + "&key=AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w";
            let resp = await fetch(text)
            let respJson = await resp.json();
            km = respJson.routes[0].legs[0].distance.text;
            time = respJson.routes[0].legs[0].duration.text;
            const dbh = firebase.firestore();
            dbh.collection("Project/work/second").doc(namecase).update({
                kmtime: "ระยะทาง = " + km + "เวลา = " + time,
            })
            console.log("newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
        }, 2000);

        // text = "https://maps.googleapis.com/maps/api/directions/json?origin=" + this.state.latchung + "," + this.state.longchung + "&destination=" + this.state.latuser + "," + this.state.longuser + "&key=AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w";
        // let resp = await fetch(text)
        // let respJson = await resp.json();
        // km = respJson.routes[0].legs[0].distance.text;
        // time = respJson.routes[0].legs[0].duration.text;
        // console.log("newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");

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
                            onPress={() => { this.props.navigation.navigate('Inlist', { namecase: namecase, aa: aa, aa2: aa2 }) }}
                        >
                            <Image
                                source={require('../../resource/back-white.png')}
                                style={{ margin: 5, resizeMode: 'stretch', marginLeft: 10, height: 30, width: 20 }}
                            />
                        </TouchableOpacity>
                    </View>

                </View>

                {/* //////////////////header bar////////////////////// */}
                {/* <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>Location </Text>
                <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>latitude : {latt} </Text>
                <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>longitude : {longg}</Text> */}
                <MapView
                    style={{ flex: 9 }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation
                    initialRegion={{
                        latitude: latuser,
                        longitude: longuser,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                // region={this.getMapRegion()}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.latuser,
                            longitude: this.state.longuser,
                        }}
                        image={Markuser}
                        title={"marker.title"}
                        description={"desss"}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.latchung,
                            longitude: this.state.longchung,
                        }}
                        image={Markchung}
                        title={"marker.title"}
                        description={"desss"}
                    />
                    <MapViewDirections
                        origin={{ latitude: this.state.latchung, longitude: this.state.longchung }}
                        destination={{ latitude: this.state.latuser, longitude: this.state.longuser }}
                        apikey="AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w"
                        strokeWidth={8}
                        strokeColor="#1FC45B"
                        mode="DRIVING"
                    />
                </MapView >
                <View style={{ flex: 2, backgroundColor: "#ff7200", flexDirection: "row" }}>
                    <View style={{ flex: 5, alignContent: "center" }}>
                        <Text style={{ textAlign: "center", color: "#eeddc1", fontSize: 18, marginTop: 25 }}>Distance: {km}</Text>
                        <Text style={{ textAlign: "center", color: "#eeddc1", fontSize: 18, marginTop: 25 }}>Time: {time}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ backgrounDColor: "red", marginTop: 15, marginRight: 15, height: 60 }}
                            onPress={() => { this.endmap() }}
                        >
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8B4726'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
})
