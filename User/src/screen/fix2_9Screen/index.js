import React from 'react';
import { View, Text, Dimensions, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

const Fix2_9 = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#e7e1da" }}>
            <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                {/* บนซ้าย */}
                <View style={{ flex: 3 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => { props.navigation.navigate('Fix1') }}
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
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 6 }}>
                        <TouchableOpacity
                            style={{}}
                            onPress={() => { props.navigation.navigate('Fix3', {call: 'F9_1'}) }}
                        >
                            <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                                <View style={{ flex: 2 }}>
                                    <Image
                                        source={require('../../resource/chung2.png')}
                                        style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                                    />
                                </View>
                                <View style={{ flex: 8, marginTop: 10 }}>
                                    <Text style={{ color: "black", fontSize: 15 }}>
                                        เติมน้ำมันผิดประเภท
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => { Alert.alert(
                                'วิธีการตรวจสอบเบื้องต้น :',
                                'ห้ามสตาร์มรถเด็ดขาด เพราะจะทำให้น้ำมันไหลเข้าไปในเครื่อง ให้ทำการถ่ายน้ำมันรถออก และทำการไลระบบใหม่') }}
                        >
                            <Image
                                source={require('../../resource/question-gray.png')}
                                style={{ resizeMode: 'stretch', height: 25, width: 25 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 6 }}>
                        <TouchableOpacity
                            style={{}}
                            onPress={() => { props.navigation.navigate('Fix3', {call: 'F9_2'}) }}
                        >
                            <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                                <View style={{ flex: 2 }}>
                                    <Image
                                        source={require('../../resource/chung2.png')}
                                        style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                                    />
                                </View>
                                <View style={{ flex: 8, marginTop: 10 }}>
                                    <Text style={{ color: "black", fontSize: 15 }}>
                                       มีควันสีขาวออกมาอย่างเดียว
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => { Alert.alert(
                                'วิธีการตรวจสอบเบื้องต้น :',
                                'ตรวจเช็คที่ยางซีลวาล์ว / ยางตีนวาล์ว / ยางหมวกวาล์ว และวาวล์ฝาสูบว่ามีการรั่วหรือเสื่อมสภาพหรือไม่') }}
                        >
                            <Image
                                source={require('../../resource/question-gray.png')}
                                style={{ resizeMode: 'stretch', height: 25, width: 25 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 6 }}>
                        <TouchableOpacity
                            style={{}}
                            onPress={() => { props.navigation.navigate('Fix3', {call: 'F9_3'}) }}
                        >
                            <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                                <View style={{ flex: 2 }}>
                                    <Image
                                        source={require('../../resource/chung2.png')}
                                        style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                                    />
                                </View>
                                <View style={{ flex: 8, marginTop: 10 }}>
                                    <Text style={{ color: "black", fontSize: 15 }}>
                                        ไม่ทราบสาเหตุ ต้องการสอบถามช่าง
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                </View>






               
                
            </ScrollView>
        </View>

    )

};

export default Fix2_9;
