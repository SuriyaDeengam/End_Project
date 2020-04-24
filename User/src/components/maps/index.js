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
nameuser = "";

kmtime = "-";
latuser = 0;
longuser = 0;

latchung = 0;
longchung = 0;

latchungAstring = "";
longchungAstring = "";

latdis = "";
longdis = "";

i = 1;
run = true;

text = "";
resp = "";
respJson = "";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            namecase: "",
            latchungA: 0,
            longchungA: 0,
            latchung: 0,
            longchung: 0,
            latuser: 0,
            longuser: 0,
            kmtime: "",
            km: "-",
            time: "-",
        };
    }

    async componentDidMount() {
        const { navigation } = this.props;
        latchungA = parseFloat(navigation.getParam('latchung'));
        longchungA = parseFloat(navigation.getParam('longchung'));
        latchungAstring = 13.10
        longchungAstring = "100.11"
        // latchungAstring = navigation.getParam('latchung')
        // longchungAstring = navigation.getParam('longchung')
        this.setState({ latchungA: latchungA, longchungA: longchungA });

        // text = "https://maps.googleapis.com/maps/api/directions/json?origin=" + latchungAstring + "," + longchungAstring + "&destination=13.13,100.9308632&key=AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w";
        // let resp = await fetch(text)
        // let respJson = await resp.json();
        // km = respJson.routes[0].legs[0].distance.text;
        // time = respJson.routes[0].legs[0].duration.text
        // setTimeout(() => {
        // console.log(km + time);
        // }, 3000);

        const dbh = firebase.firestore();
        dbh.collection("Project/Account/user").doc(firebase.auth().currentUser.email).onSnapshot(function (doc) {
            nameuser = doc.data().fname + " " + doc.data().lname;
            namecase = doc.data().namecase;

            // console.log("name: ", nameuser);
        });
        setTimeout(() => {
            this.setState({ namecase: namecase })
        }, 1500);


        // setTimeout(() => {
        dbh.collection("Project/work/first").doc(nameuser).onSnapshot(function (doc) {
            latuser = parseFloat(doc.data().lat);
            longuser = parseFloat(doc.data().long);
            // console.log("user: ", latuser, longuser);
        });
        setTimeout(() => {
            this.setState({ latuser: latuser, longuser: longuser });
            //         // setTimeout(async () => {

            //         //     text = "https://maps.googleapis.com/maps/api/directions/json?origin=" + this.state.latchungA + "," + this.state.longchungA + "&destination=" + this.state.latuser + "," + this.state.longuser + "&key=AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w";
            //         //     let resp = await fetch(text)
            //         //     let respJson = await resp.json();
            //         //     km = respJson.routes[0].legs[0].distance.text;
            //         //     time = respJson.routes[0].legs[0].duration.text;
            //         //     this.setState({ km: km, time: time });
            //         //     console.log("newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
            //         // }, 2000);
        }, 2000);
        // }, 2000);

        // const dbh = firebase.firestore();
        // var docRef = dbh.collection("Project/work/second").doc(namecase);
        // docRef.onSnapshot(function (doc) {
        //     latchung = parseFloat(doc.data().lat);
        //     longchung = parseFloat(doc.data().long);
        //     kmtime = doc.data().kmtime;
        //     console.log(latchung, longchung, kmtime);

        // });
        // setTimeout(() => {
        //     console.log("kkk");

        //     this.setState({ latchungA: latchung, longchungA: longchung });
        //     this.setState({ latchung: latchung, longchung: longchung });
        //     this.setState({ kmtime: kmtime })
        // }, 2000);



    }
    //////////////////////error//////////
    // async distance() {

    //     latchungS = this.state.latchung;
    //     longchungS = this.state.longchung;
    //     latuserS = this.state.latuser;
    //     longuserS = this.state.longuser;

    //     // console.log(latchungS + longchungS + latuserS + longuserS);



    //     text = "https://maps.googleapis.com/maps/api/directions/json?origin=" + this.state.latchung + "," + this.state.longchung + "&destination=" + this.state.latuser + "," + this.state.longuser + "&key=AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w";

    //     // console.log(text);

    //     let resp = await fetch(text)
    //     let respJson = await resp.json();
    //     km = respJson.routes[0].legs[0].distance.text;
    //     time = respJson.routes[0].legs[0].duration.text;
    //     this.setState({ km: km, time: time })

    // }

    loadmap() {

        // const dbh = firebase.firestore();
        // var docRef = dbh.collection("Project/work/second").doc(namecase);
        // docRef.onSnapshot(function (doc) {
        //     latchung = parseFloat(doc.data().lat);
        //     longchung = parseFloat(doc.data().long);
        // });
        // setTimeout(() => {

        //     // if (latchung != this.state.latchung || longchung != this.state.longchung) {
        //     // console.log("k");
        //     setTimeout(() => {

        //         this.setState({ latchungA: latchung, longchungA: longchung });
        //         this.setState({ latchung: latchung, longchung: longchung });
        //         // console.log("chung: ", this.state.latchung, this.state.longchung);
        //     }, 1000);

        //     setTimeout(() => {
        //         this.distance();
        //     }, 2000);
        //     // }
        // }, 3000);

    }
    render() {

        const dbh = firebase.firestore();
        var docRef = dbh.collection("Project/work/second").doc(namecase);
        docRef.onSnapshot(function (doc) {
            latchung = parseFloat(doc.data().lat);
            longchung = parseFloat(doc.data().long);
            kmtime = doc.data().kmtime;
            console.log(latchung, longchung, kmtime);

        });
        setTimeout(() => {
            console.log("kkk");

            this.setState({ kmtime: kmtime,latchung: latchung, longchung: longchung,latchungA: latchung, longchungA: longchung });
            // this.setState({ latchung: latchung, longchung: longchung });
            // this.setState({ kmtime: kmtime })
        }, 2000);
        // console.log(this.state.latchung);

        // setTimeout(() => {
        // this.loadmap();
        // }, 2000);
        // console.log("user: ", this.state.latuser, this.state.longuser);

        const { width, height } = Dimensions.get('window');
        const ASPECT_RATIO = width / height;
        const LATITUDE_DELTA = 0.0922;
        const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
        return (
            <View style={{ flex: 1, backgroundColor: "#e7e1da" }}>
                {/* //////////////////header bar////////////////////// */}
                <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                    <View style={{ flex: 3 }}>
                    </View>
                    <View style={{ flex: 15 }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                            {/* {this.state.kmtime} */}
                            ตำแหน่งของช่าง
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
                    coordinate={{
                        latitude: this.state.latchung,
                        longitude: this.state.longchung,
                    }}
                    initialRegion={{
                        latitude: this.state.latchungA,
                        longitude: this.state.longchungA,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                // region={this.getMapRegion()}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.latchung,
                            longitude: this.state.longchung,
                        }}
                        image={Markchung}
                        title={"marker.title"}
                        description={"desss"}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.latuser,
                            longitude: this.state.longuser,
                        }}
                        image={Markuser}
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
                        {/* <Text style={{ textAlign: "center", color: "#eeddc1", fontSize: 18, marginTop: 25 }}>{this.state.km}</Text> */}
                        {/* <Text style={{ textAlign: "center", color: "#eeddc1", fontSize: 18, marginTop: 25 }}>{this.state.time}</Text>  */}
                        <Text style={{ textAlign: "center", color: "#eeddc1", fontSize: 18, marginTop: 25 }}>{this.state.kmtime}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ backgrounDColor: "red", marginTop: 15, marginRight: 15, height: 60 }}
                            onPress={() => { this.props.navigation.navigate('Myjob', { namecase: namecase }) }}
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
