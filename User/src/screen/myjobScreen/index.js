import React from 'react';
import { View, Text, Dimensions, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';




const Myjob = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#e7e1da" }}>
            <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                {/* บนซ้าย */}
                <View style={{ flex: 3 }}>
                </View>
                {/* กลาง */}
                <View style={{ flex: 18 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                        Repair detail
                    </Text>
                </View>
                {/* บนขวา */}
                <View style={{ flex: 3 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => { props.navigation.navigate('Home') }}
                    >
                        <Image
                            source={require('../../resource/home-white.png')}
                            style={{ margin: 5, height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
            <View style={{ height: 50, backgroundColor: "#ffbe6a", justifyContent: "center" }}>

                <Text style={{ fontSize: 25, color: "black", textAlign: "center" }}>
                    {props.namegarage}
                </Text>
            </View>

            <View style={{ flex: 3, backgroundColor: "#e7e1da", alignItems: "center", justifyContent: "center", marginTop: 40 }}>
                {props.step1 == "1" ? (
                    <Image
                        source={require('../../resource/step1.png')}
                        style={{ width: width - 50, height: 120 }}
                        resizeMode={'contain'}
                    />
                ) : null}

                {props.step1 == "2" ? (
                    <Image
                        source={require('../../resource/step2.png')}
                        style={{ width: width - 50, height: 120 }}
                        resizeMode={'contain'}
                    />
                ) : null}

                {props.step1 == "3" ? (
                    <Image
                        source={require('../../resource/step3.png')}
                        style={{ width: width - 50, height: 120 }}
                        resizeMode={'contain'}
                    />
                ) : null}

                {props.step1 == "4" ? (
                    <Image
                        source={require('../../resource/step4.png')}
                        style={{ width: width - 70, height: 100 }}
                        resizeMode={'contain'}
                    />
                ) : null}

            </View>

            <View style={{ marginLeft: 50, marginRight: 50, flex: 4, backgroundColor: "#e7e1da", borderColor: "gray"}}>
                <View style={{ flex: 1, alignItems: "center" , flexDirection: 'row' }}>
                    <View style={{  flex: 1, borderColor: "gray", flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => { props.gomap() }}
                            style={{ alignItems: 'center' }}
                        >
                            <Image
                                source={require('../../resource/map1.png')}
                                style={{ width: 60, height: 60 }}
                                resizeMode={'contain'}
                            />
                            <Text style={{ marginTop: 5, marginBottom: 15, fontSize: 14, color: "#ff7200", textAlign: "center" }}>
                                ดูตำแหน่งของช่าง
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderLeftWidth: 5, borderLeftColor: "gray",  flex: 1, borderColor: "gray", flexDirection: 'row', alignItems: "center", justifyContent: "center", }}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => { props.navigation.navigate('Chatinwork', { namecase: props.namecase }) }}
                            style={{ alignItems: 'center' }}
                        >
                            <Image
                                source={require('../../resource/chat-big.png')}
                                style={{ width: 60, height: 60 }}
                                resizeMode={'contain'}
                            />
                            <Text style={{ marginTop: 5, marginBottom: 15, fontSize: 14, color: "#ff7200", textAlign: "center" }}>
                                พูดคุยกับช่างของคุณ
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ borderTopWidth: 5, borderTopColor: "gray",flex: 0.5 }}>
                    
                </View>
            </View>

            <View style={{ flex: 3, marginTop: "8%", alignItems: "center" }}>
                {props.step1 == "4" ? (
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "#ff7200", marginLeft: 10 }}>
                            ประเมินช่าง
                    </Text>
                        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>

                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => { props.star1() }}
                                style={{ width: 55, height: 55 }}
                            >
                                <Image
                                    source={require('../../resource/point1.png')}
                                    style={{ width: 55, height: 55 }}
                                    resizeMode={'center'}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => { props.star2() }}
                                style={{ width: 55, height: 55 }}
                            >
                                <Image
                                    source={require('../../resource/point2.png')}
                                    style={{ width: 55, height: 55 }}
                                    resizeMode={'center'}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => { props.star3() }}
                                style={{ width: 55, height: 55 }}
                            >
                                <Image
                                    source={require('../../resource/point3.png')}
                                    style={{ width: 55, height: 55 }}
                                    resizeMode={'center'}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => { props.star4() }}
                                style={{ width: 55, height: 55 }}
                            >
                                <Image
                                    source={require('../../resource/point4.png')}
                                    style={{ width: 55, height: 55 }}
                                    resizeMode={'center'}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => { props.star5() }}
                                style={{ width: 55, height: 55 }}
                            >
                                <Image
                                    source={require('../../resource/point5.png')}
                                    style={{ width: 55, height: 55 }}
                                    resizeMode={'center'}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}
            </View>
            <View style={{ flex: 3 }}></View>
            {/* </ScrollView> */}
        </View>

    )

};

export const { width, height } = Dimensions.get('window');
export default Myjob;
