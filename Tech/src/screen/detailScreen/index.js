import React from 'react';
import { View, Text, ScrollView, TextInput, Dimensions, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Detail = (props) => {
    // console.log("detailscreen",props.lat);
    // console.log("detailscreen",props.long);

    // console.log(props.kmtime);
    return (
        <View style={{ flex: 1, backgroundColor: "#eeddc1" }}>
            {/* //////////////////header bar////////////////////// */}
            <View style={{ height: 40, backgroundColor: "#8B4726", flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => { props.navigation.navigate('Job') }}
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
                    </Text>
                </View>
                <View style={{ flex: 3 }}>

                </View>
            </View>

            {/* //////////////////header bar////////////////////// */}
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ marginTop: 20, fontSize: 20, color: "#ff7200" }}> รายละเอียดที่ลูกค้าแจ้งมา </Text>
                    <View style={{ marginTop: 10, width: width - 30, height: 120, backgroundColor: "#e8e8e8" }}>
                        <Text style={{ fontSize: 20, color: "black", marginTop: 10, marginLeft: 15 }}>{props.ag1}</Text>
                        <Text style={{ fontSize: 18, color: "black", marginLeft: 25 }}>{props.ag2}</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ marginTop: 20, fontSize: 15, color: "#ff7200" }}> ภาพที่ลูกค้าถ่ายมา </Text>
                    <Image
                        source={{ uri: props.imglink }}
                        style={{ margin: 5, resizeMode: 'stretch', marginLeft: '5%', height: 300, width: 300 }}
                    />
                </View>
                <TouchableOpacity
                    style={{ }}
                    onPress={() => {props._playAndPause()}}
                >
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ marginTop: 20, fontSize: 15, color: "#ff7200" }}> เสียงอาการ </Text>
                        <Image
                            source={require('../../resource/play.png')}
                            style={{ resizeMode: 'stretch', height: 100, width: 100 }}
                        />
                    </View>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ marginTop: 20, fontSize: 15, color: "#ff7200" }}>ตำแหน่งลูกค้า</Text>
                    <View style={{ marginTop: 10, width: width - 30, height: 120, backgroundColor: "#e8e8e8" }}>
                        <Text style={{ fontSize: 20, color: "black", marginTop: 10, marginLeft: 15 }}>{props.locationuser}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "#91dd3e", marginTop: 40, marginLeft: '5%', marginRight: '5%', height: 40 }}
                    onPress={() => {
                        props.navigation.navigate('mapsee', {
                            lat: props.lat,
                            long: props.long,
                            email: props.email,
                            call: props.call,
                            imglink: props.imglink,
                            locationuser: props.locationuser,
                            nameuser: props.nameuser,
                            kmtime: props.kmtime,

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
                        props.navigation.navigate('Acc', {
                            userid: props.userid,
                            lat: props.lat,
                            long: props.long,
                            email: props.email,
                            call: props.call,
                            imglink: props.imglink,
                            locationuser: props.locationuser,
                            nameuser: props.nameuser,
                            kmtime: props.kmtime,


                        })
                    }}
                >
                    <View >
                        <Text style={{ color: "white", fontSize: 25 }}>
                            รับซ่อม
            </Text>

                    </View >
                </TouchableOpacity>
            </ScrollView>
        </View >
    )

};
export const { width, height } = Dimensions.get('window');

export default Detail;



