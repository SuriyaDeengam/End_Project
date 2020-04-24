import React from 'react';
import { View, Text, Dimensions, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Me = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#e7e1da" }}>
            <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                {/* บนซ้าย */}
                <View style={{ flex: 3 }}>
                </View>
                {/* กลาง */}
                <View style={{ flex: 18 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                        OTHER
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
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ marginTop: 5 }}></View>
                <TouchableOpacity
                    style={{}}
                onPress={() => { props.navigation.navigate('medetial') }}
                >
                    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../resource/user-chung.png')}
                                style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                            <Text style={{ color: "#707070", fontSize: 15 }}>
                                ข้อมูลผู้ใช้
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    </View>
                    <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={{}}
                // onPress={() => { props.navigation.navigate('Fix2') }}
                >
                    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../resource/question-chung.png')}
                                style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                            <Text style={{ color: "#707070", fontSize: 15 }}>
                                วิธีการใช้งาน
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    </View>
                    <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                </TouchableOpacity> */}
                {/* <TouchableOpacity
                    style={{}}
                // onPress={() => { props.navigation.navigate('Fix2') }}
                >
                    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../resource/setting-chung.png')}
                                style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                            <Text style={{ color: "#707070", fontSize: 15 }}>
                                ประวัติการแจ้งซ่อม
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    </View>
                    <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                </TouchableOpacity> */}
                <TouchableOpacity
                    style={{}}
                    onPress={() => { props.navigation.navigate('Price') }}
                >
                    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../resource/money.png')}
                                style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                            <Text style={{ color: "#707070", fontSize: 15 }}>
                                สอบถามราคา
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    </View>
                    <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{}}
                    onPress={() => { props.Out(), props.navigation.navigate('SplashScreen') }}
                >
                    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../resource/exit-chung.png')}
                                style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                            <Text style={{ color: "#707070", fontSize: 15 }}>
                                ออกจากระบบ
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    </View>
                    <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                </TouchableOpacity>

            </ScrollView>
        </View>

    )

};

export default Me;
