import React from 'react';
import { View, Text, Dimensions, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Picker } from 'react-native';

const Fix1 = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#e7e1da" }}>
            <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                {/* บนซ้าย */}
                <View style={{ flex: 3 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => { props.navigation.navigate('Home') }}
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
                        Fix
                    </Text>
                </View>
                {/* บนขวา */}
                <View style={{ flex: 3 }}>
                </View>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View>
                    <Text style={{ marginTop: 5, fontSize: 20, color: "#ff7200", textAlign: "center" }}>
                        อาการรถเสียของคุณ
                    </Text>
                </View>
                <TouchableOpacity
                    style={{}}
                    onPress={() => { props.navigation.navigate('Fix2_1') }}
                >
                    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../resource/chung21.png')}
                                style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5 }}>
                            <Text style={{ color: "black", fontSize: 15 }}>
                                รถสตาร์ทไม่ติด / สตาร์มติดยาก
                        </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{}}
                    onPress={() => { props.navigation.navigate('Fix2_2') }}
                >
                    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../resource/chung21.png')}
                                style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5 }}>
                            <Text style={{ color: "black", fontSize: 15 }}>
                                รถสตาร์ทติด แต่เครื่องยนต์ไม่ทำงาน
                        </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{}}
                    onPress={() => { props.navigation.navigate('Fix2_3') }}
                >
                    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../resource/chung21.png')}
                                style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5 }}>
                            <Text style={{ color: "black", fontSize: 15 }}>
                                เครื่องยนต์เตือนไฟความร้อนขึ้น
                        </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{}}
                    onPress={() => { props.navigation.navigate('Fix2_4') }}
                >
                    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../resource/chung21.png')}
                                style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5 }}>
                            <Text style={{ color: "black", fontSize: 15 }}>
                                เครื่องยนต์เร่งไม่ขึ้น / เครื่องยนต์ไม่มีกำลัง
                        </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{}}
                    onPress={() => { props.navigation.navigate('Fix2_5') }}
                >
                    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../resource/chung21.png')}
                                style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5 }}>
                            <Text style={{ color: "black", fontSize: 15 }}>
                                ระบบเบรคมีปัญหา
                        </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{}}
                    onPress={() => { props.navigation.navigate('Fix2_6') }}
                >
                    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../resource/chung21.png')}
                                style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5 }}>
                            <Text style={{ color: "black", fontSize: 15 }}>
                                มีเสียงดังแปลกๆ เกิดขึ้น
                        </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{}}
                    onPress={() => { props.navigation.navigate('Fix2_7') }}
                >
                    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../resource/chung21.png')}
                                style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5 }}>
                            <Text style={{ color: "black", fontSize: 15 }}>
                                มีน้ำมัน / น้ำหยดลงบนพื้น
                        </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{}}
                    onPress={() => { props.navigation.navigate('Fix2_8') }}
                >
                    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../resource/chung21.png')}
                                style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5 }}>
                            <Text style={{ color: "black", fontSize: 15 }}>
                                เกิดปัญหาบริเวณช่วงล่าง
                        </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{}}
                    onPress={() => { props.navigation.navigate('Fix2_9') }}
                >
                    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../resource/chung21.png')}
                                style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5 }}>
                            <Text style={{ color: "black", fontSize: 15 }}>
                                มีควันสีขาวลอยออกมา
                        </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* ////////////////////////////////////////// */}
                {/* <TouchableOpacity
                    style={{}}
                    onPress={() => { props.navigation.navigate('Createaccount') }}
                >
                    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>


                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../resource/chung21.png')}
                                style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5 }}>
                            <Text style={{ color: "black", fontSize: 15 }}>
                                test
                        </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image
                                source={require('../../resource/chung21.png')}
                                style={{ resizeMode: 'stretch', height: 30, width: 30 }}
                            />
                        </View>
                    </View>
                </TouchableOpacity> */}
                {/* //////////////////////////////////////////////////////////// */}

                {/* <Picker
                    selectedValue={props.language}
                    style={{ height: 100, width: 200 }}
                    onValueChange={(language) => props.setComponentState({ language })
                    }>
                    <Picker.Item label="ava" value="java" />
                    <Picker.Item label="JavaScript" value="script" />
                </Picker> */}


                
            </ScrollView>

        </View>

    )

};

export default Fix1;
