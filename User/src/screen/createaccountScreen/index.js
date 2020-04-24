import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView } from 'react-native';


const Createaccount = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#e7e1da" }}>
            <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                {/* บนซ้าย */}
                <View style={{ flex: 3 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => { props.navigation.navigate('Login') }}
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
                        ข้อมูลผู้ใช้
                    </Text>
                </View>
                {/* บนขวา */}
                <View style={{ flex: 3 }}>
                </View>
            </View>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'space-between', }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ marginTop: 10, marginRight: 10 }}>
                        <Text style={{ marginTop: 10, marginLeft: 10, color: "#ff7200" }}> ชื่อ </Text>
                        <View style={{ marginLeft: '6%', marginRight: '6%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                            <TextInput
                                style={{ height: 40, fontSize: 15, width: 330, width: 330 }}
                                onChangeText={(fname) => props.setComponentState({ fname })}
                                value={props.fname}
                                maxLength={50}
                                keyboardType={'default'}>
                            </TextInput>
                        </View>
                        <Text style={{ marginTop: 10, marginLeft: 10, color: "#ff7200" }}> นามสกุล </Text>
                        <View style={{ marginLeft: '6%', marginRight: '6%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                            <TextInput
                                style={{ height: 40, fontSize: 15, width: 330, width: 330 }}
                                onChangeText={(lname) => props.setComponentState({ lname })}
                                value={props.lname}
                                maxLength={50}
                                keyboardType={'default'}>
                            </TextInput>
                        </View>
                        <Text style={{ marginTop: 10, marginLeft: 10, color: "#ff7200" }}> เบอร์โทรศัพท์ </Text>
                        <View style={{ marginLeft: '6%', marginRight: '6%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                            <TextInput
                                style={{ height: 40, fontSize: 15, width: 330, width: 330 }}
                                onChangeText={(tel) => props.setComponentState({ tel })}
                                value={props.tel}
                                maxLength={10}
                                keyboardType={'default'}>
                            </TextInput>
                        </View>
                        <Text style={{ marginTop: 10, marginLeft: 10, color: "#ff7200" }}> อีเมล </Text>
                        <View style={{ marginLeft: '6%', marginRight: '6%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                            <TextInput
                                style={{ height: 40, fontSize: 15, width: 330, width: 330 }}
                                onChangeText={(email) => props.setComponentState({ email })}
                                value={props.email}
                                maxLength={40}
                                keyboardType={'email-address'}>
                            </TextInput>
                        </View>
                        <Text style={{ marginTop: 10, marginLeft: 10, color: "#ff7200" }}> รหัสผ่าน </Text>
                        <View style={{ marginLeft: '6%', marginRight: '6%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                            <TextInput
                                style={{ height: 40, fontSize: 15, width: 330, width: 330 }}
                                onChangeText={(password) => props.setComponentState({ password })}
                                value={props.password}
                                placeholder=""
                                secureTextEntry={true}
                                maxLength={10}
                                keyboardType={'default'}>
                            </TextInput>
                        </View>
                        <Text style={{ marginTop: 10, marginLeft: 10, color: "#ff7200" }}> ยืนยันรหัสผ่าน </Text>
                        <View style={{ marginLeft: '6%', marginRight: '6%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                            <TextInput
                                style={{ height: 40, fontSize: 15, width: 330, width: 330 }}
                                onChangeText={(cpassword) => props.setComponentState({ cpassword })}
                                value={props.cpassword}
                                placeholder=""
                                secureTextEntry={true}
                                maxLength={10}
                                keyboardType={'default'}>
                            </TextInput>
                        </View>
                        {/* <Text style={{ marginTop: 10, marginLeft: 10, color: "#ff7200" }}> ยี่ห้อรถ </Text>
                        <View style={{ marginLeft: '6%', marginRight: '6%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                            <TextInput
                                style={{ height: 40, fontSize: 15, width: 330, width: 330 }}
                                onChangeText={(brand) => props.setComponentState({ brand })}
                                value={props.brand}
                                maxLength={50}
                                keyboardType={'default'}>
                            </TextInput>
                        </View>
                        <Text style={{ marginTop: 10, marginLeft: 10, color: "#ff7200" }}> รุ่นรถ </Text>
                        <View style={{ marginLeft: '6%', marginRight: '6%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                            <TextInput
                                style={{ height: 40, fontSize: 15, width: 330, width: 330 }}
                                onChangeText={(model) => props.setComponentState({ model })}
                                value={props.model}
                                maxLength={50}
                                keyboardType={'default'}>
                            </TextInput>
                        </View>
                        <Text style={{ marginTop: 10, marginLeft: 10, color: "#ff7200" }}> ความจุของเครื่อง </Text>
                        <View style={{ marginLeft: '6%', marginRight: '6%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                            <TextInput
                                style={{ height: 40, fontSize: 15, width: 330, width: 330 }}
                                onChangeText={(capacity) => props.setComponentState({ capacity })}
                                value={props.capacity}
                                maxLength={10}
                                keyboardType={'default'}>
                            </TextInput>
                        </View>
                        <Text style={{ marginTop: 10, marginLeft: 10, color: "#ff7200" }}> ทะเบียนรถ </Text>
                        <View style={{ marginLeft: '6%', marginRight: '6%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                            <TextInput
                                style={{ height: 40, fontSize: 15, width: 330, width: 330 }}
                                onChangeText={(regiscar) => props.setComponentState({ regiscar })}
                                value={props.regiscar}
                                maxLength={40}
                                keyboardType={'email-address'}>
                            </TextInput>
                        </View>
                        <Text style={{ marginTop: 10, marginLeft: 10, color: "#ff7200" }}> สีรถ </Text>
                        <View style={{ marginLeft: '6%', marginRight: '6%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                            <TextInput
                                style={{ height: 40, fontSize: 15, width: 330, width: 330 }}
                                onChangeText={(color) => props.setComponentState({ color })}
                                value={props.color}
                                maxLength={20}
                                keyboardType={'default'}>
                            </TextInput>
                        </View> */}


                        <TouchableOpacity

                            style={{ backgroundColor: "#91dd3e", marginTop: 40, marginLeft: '6%', marginRight: '6%', marginBottom: '10%', height: 40 }}
                            onPress={() => { props.signup() }}>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
                                    สมัครสมาชิก
                        </Text>

                            </View >
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View >
    )

};
// onPress={() => props.signup()}
export default Createaccount;
