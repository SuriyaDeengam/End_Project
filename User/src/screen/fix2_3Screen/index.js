import React from 'react';
import { View, Text, Dimensions, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

const Fix2_3 = (props) => {

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
                            onPress={() => { props.navigation.navigate('Fix3', {call: 'F3_1'}) }}
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
                                        พัดลมระบายความร้อนเสีย
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
                                'ตรวจเช็คดูที่พัดลมระบายความร้อน หากพัดลมไม่ทำงานแสดงว่าพัดลมระบายความร้อน / ตัว relay มีปัญหา') }}
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
                            onPress={() => { props.navigation.navigate('Fix3', {call: 'F3_2'}) }}
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
                                       ตัว Sensor วัดความร้อนเสีย
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
                                'ตรวจเช็คดูที่พัดลมระบายความร้อน หากพัดลมทำงานแสดงว่า sensor วัดความร้อนมีปัญหา') }}
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
                            onPress={() => { props.navigation.navigate('Fix3', {call: 'F3_3'}) }}
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
                                        ตัว Relay พัดลมหม้อน้ำเสีย
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => { Alert.alert(
                                'วิธีการตรวจสอบเบื้องต้น',
                                'ตรวจเช็คว่าพัดลมระบายความร้อนหมุนหรือไม่') }}
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
                            onPress={() => { props.navigation.navigate('Fix3', {call: 'F3_4'}) }}
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
                                        ประเก็นฝาสูบมีปัญหา
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => { Alert.alert(
                                'วิธีการตรวจสอบเบื้องต้น',
                                'เปิดฝาเพื่อตรวจสอบหม้อน้ำ หากมีฟองอากาศขึ้น แสดงว่าประเก็นฝาสูบเสีย') }}
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
                            onPress={() => { props.navigation.navigate('Fix3', {call: 'F3_5'}) }}
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

export default Fix2_3;
