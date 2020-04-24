// // /**
// //  *	Mapsee container
// //  */api key AIzaSyDaLWAQkX9LSCGlJto2I0RjPMEP6rkj46w


import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions, Text, View, Button } from 'react-native';
import MapView, { Polyline, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Markuser from '../../resource/usermk.png';
import * as firebase from 'firebase';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latA: 13,
            longA: 100,
            kmtime: "",
        };
    }
    async componentWillMount() {
        const { navigation } = this.props;
        lat = parseFloat(navigation.getParam('lat'));
        long = parseFloat(navigation.getParam('long'));
        lat1 = navigation.getParam('lat');
        long1 = navigation.getParam('long');
        kmtime = navigation.getParam('kmtime');
        this.setState({ latA: lat, longA: long, kmtime: kmtime });
    }
    render() {
        // console.log(this.state.latA);
        // console.log(this.state.longA);

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
                            onPress={() => {
                                this.props.navigation.navigate('Detail')
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
                            ตำแหน่งลูกค้า
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
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.latA,
                            longitude: this.state.longA,
                        }}
                        image={Markuser}
                        title={"marker.title"}
                        description={"desss"}
                    />
                </MapView >
                <View style={{ height: 70, backgroundColor: "#8B4726",justifyContent:"center" }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
                        {this.state.kmtime}
                        </Text>
                </View>
            </View>
        );
    }
}
