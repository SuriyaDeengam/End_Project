import React from 'react';
import { View, Text, Dimensions, Button, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

const Detail = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#e7e1da" }}>
            <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                {/* บนซ้าย */}
                <View style={{ flex: 3 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => { props.navigation.navigate('Service', { aa: aa }) }}
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
                        รายละเอียดจากช่าง
                    </Text>
                </View>
                {/* บนขวา */}
                <View style={{ flex: 3 }}>
                </View>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ marginTop: 10, marginRight: 10 }}>
                    <Text style={{ marginTop: 10, marginLeft: '5%', color: "#ff7200", fontSize: 19 }}>
                        รายละเอียดเพิ่มเติม
                    </Text>
                    <View style={{ marginLeft: '10%', marginRight: '10%', height: 120, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                        <Text style={{ marginLeft: '5%', marginTop: '2%', height: 40, fontSize: 17, color: "#4d4d4d" }}>
                            {props.detail}
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 10, marginRight: 10 }}>
                    <Text style={{ marginTop: 10, marginLeft: '5%', color: "#ff7200", fontSize: 19 }}>
                        ราคาการซ่อมโดยประมาณ
                    </Text>
                    <View style={{ marginLeft: '10%', marginRight: '10%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                        <Text style={{ marginLeft: '5%', marginTop: '2%', height: 40, fontSize: 17, color: "#4d4d4d" }}>
                            {props.price} บาท
                        </Text>
                    </View>
                </View>



                <View style={{ marginTop: 10, marginRight: 10 }}>
                    <Text style={{ marginTop: 10, marginLeft: '5%', color: "#ff7200", fontSize: 19 }}>
                        อัตราค่าเดินทาง
                    </Text>
                    <View style={{ marginLeft: '10%', marginRight: '10%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                        <Text style={{ marginLeft: '5%', marginTop: '2%', height: 40, fontSize: 17, color: "#4d4d4d" }}>
                            {props.travel} บาท
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 10, marginRight: 10 }}>
                    <Text style={{ marginTop: 10, marginLeft: '5%', color: "#ff7200", fontSize: 19 }}>
                        ระยะทางจากช่างมาถึง
                    </Text>
                    <View style={{ marginLeft: '10%', marginRight: '10%', height: 80, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                        <Text style={{ marginLeft: '5%', marginTop: '2%', height: 80, fontSize: 17, color: "#4d4d4d" }}>
                            {props.kmtime}
                        </Text>
                    </View>
                </View>

                <View style={{ marginTop: 10, marginRight: 10 }}>
                    <Text style={{ marginTop: 10, marginLeft: '5%', color: "#ff7200", fontSize: 19 }}>
                        คะแนนของอู่นี้
                    </Text>
                    <View style={{ marginTop: 10, alignItems: "center", justifyContent: "center", }}>
                        {props.rate >= 0 && props.rate < 1 ? (
                            <Image
                                source={require('../../resource/star1.png')}
                                style={{ width: width - 80, height: 100 }}
                                resizeMode={'contain'}
                            />
                        ) : null}
                        {props.rate >= 1 && props.rate < 1.5 ? (
                            <Image
                                source={require('../../resource/star2.png')}
                                style={{ width: width - 80, height: 100 }}
                                resizeMode={'contain'}
                            />
                        ) : null}
                        {props.rate >= 1.5 && props.rate < 2 ? (
                            <Image
                                source={require('../../resource/star3.png')}
                                style={{ width: width - 80, height: 100 }}
                                resizeMode={'contain'}
                            />
                        ) : null}
                        {props.rate >= 2 && props.rate < 2.5 ? (
                            <Image
                                source={require('../../resource/star4.png')}
                                style={{ width: width - 80, height: 100 }}
                                resizeMode={'contain'}
                            />
                        ) : null}
                        {props.rate >= 2.5 && props.rate < 3 ? (
                            <Image
                                source={require('../../resource/star5.png')}
                                style={{ width: width - 80, height: 100 }}
                                resizeMode={'contain'}
                            />
                        ) : null}
                        {props.rate >= 3 && props.rate < 3.5 ? (
                            <Image
                                source={require('../../resource/star6.png')}
                                style={{ width: width - 80, height: 100 }}
                                resizeMode={'contain'}
                            />
                        ) : null}
                        {props.rate >= 3.5 && props.rate < 4 ? (
                            <Image
                                source={require('../../resource/star7.png')}
                                style={{ width: width - 80, height: 100 }}
                                resizeMode={'contain'}
                            />
                        ) : null}
                        {props.rate >= 4 && props.rate < 4.5 ? (
                            <Image
                                source={require('../../resource/star8.png')}
                                style={{ width: width - 80, height: 100 }}
                                resizeMode={'contain'}
                            />
                        ) : null}
                        {props.rate >= 4.5 && props.rate < 5 ? (
                            <Image
                                source={require('../../resource/star9.png')}
                                style={{ width: width - 80, height: 100 }}
                                resizeMode={'contain'}
                            />
                        ) : null}
                        {props.rate >= 5 ? (
                            <Image
                                source={require('../../resource/star10.png')}
                                style={{ width: width - 80, height: 100 }}
                                resizeMode={'contain'}
                            />
                        ) : null}
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={{ backgroundColor: "blue", width: width, height: 50 }}
                onPress={() => { props.navigation.navigate('Chat', { namecase: props.namecase }) }}
            >
                <View style={{ marginTop: 10 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 19 }}>พูดคุบกับช่าง</Text>
                </View >
            </TouchableOpacity>
            <TouchableOpacity
                style={{ backgroundColor: "green", width: width, height: 50 }}
                onPress={() => { props.select() }}
            >
                <View style={{ marginTop: 10 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 19 }}>ยืนยันการเลือกอู่นี้</Text>
                </View >
            </TouchableOpacity>
        </View>

    )

};

export default Detail;

export const { width, height } = Dimensions.get('window');