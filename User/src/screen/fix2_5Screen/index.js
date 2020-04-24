import React from 'react';
import { View, Text, Dimensions, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

const Fix2_5 = (props) => {

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
                            onPress={() => { props.navigation.navigate('Fix3', {call: 'F5_1'}) }}
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
                                        มีเสียงแปลกๆ เกิดขึ้น
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
                                'ดูที่จานเบรคว่าสกปรกหรือไม่') }}
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
                            onPress={() => { props.navigation.navigate('Fix3', {call: 'F5_2'}) }}
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
                                      ผ้าเบรคหมด
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
                                'ดูที่ผ้าเบรคว่าสึกถึงเหล็กแล้วหรือไม่ ถ้าถึงเหล็กแล้วจะต้องเปลี่ยนผ้าเบรคใหม่') }}
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
                            onPress={() => { props.navigation.navigate('Fix3', {call: 'F5_3'}) }}
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
                                        เหยียบเบรคไม่ลง
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
                                'ดูที่หม้อลมเบรค โดยการเหยียบเบรคก่อนสตาร์ท ซึ่งเบรคจะแข็ง และหากสตาร์ทแล้วเบรครถจะนิ่ม หากยังแข็งอยู่แสดงว่าหม้อลมเบรคเสีย') }}
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
                            onPress={() => { props.navigation.navigate('Fix3', {call: 'F5_4'}) }}
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
                                        น้ำมันเบรคหมด / ลดลง
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
                                'ดูที่น้ำมันเบรคว่าลดหรือไม่ โดยสังเกตที่ขีด MAX และ MIN ถ้าอยู่ที่ MIN แสดงว่าผ้าเบรคจะหมด') }}
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
                            onPress={() => { props.navigation.navigate('Fix3', {call: 'F5_5'}) }}
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
                                        เบรคไม่อยู่
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
                                'ดูที่คาลิปเปอร์ว่าสามารถขยับขึ้นลงได้หรือไม่ หากขยับไม่ได้จะต้องทำความสะอาด') }}
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
                            onPress={() => { props.navigation.navigate('Fix3', {call: 'F5_6'}) }}
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

export default Fix2_5;
