import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';

/////////////////คีบอดเลื่อน///////////
// import {KeyboardAvoidingView} from 'react-native';


// <KeyboardAvoidingView behavior="padding" style={{flex: 1,justifyContent: 'space-between',}}>

// </KeyboardAvoidingView>
//////////////////////////////////
const Create = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#eeddc1" }}>
            <View style={{ height: 40, backgroundColor: "#ff7200" }}>
                <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                    สมัครสมาชิก
            </Text>
            </View>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'space-between', }}>

                <View style={{ marginLeft: 10, marginRight: 10 }}>

                    <Text style={{ marginTop: 10, color: "#ff7200" }}> ชื่อ </Text>
                    <View style={{ marginLeft: '5%', marginRight: '5%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                        <TextInput
                            style={{ height: 40, color: "gray", fontSize: 15, width: 330, width: 330 }}
                            onChangeText={(fname) => props.setComponentState({ fname })}
                            value={props.fname}
                            maxLength={35}
                            keyboardType={'default'}>
                        </TextInput>
                    </View>
                    <Text style={{ marginTop: 10, color: "#ff7200" }}> นามสกุล </Text>
                    <View style={{ marginLeft: '5%', marginRight: '5%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>

                        <TextInput
                            style={{ height: 40, color: "gray", fontSize: 15, width: 330 }}
                            onChangeText={(lname) => props.setComponentState({ lname })}
                            value={props.lname}
                            maxLength={35}
                            keyboardType={'default'}>
                        </TextInput>
                    </View>
                    <Text style={{ marginTop: 10, color: "#ff7200" }}> เบอร์โทรศัพท์ </Text>
                    <View style={{ marginLeft: '5%', marginRight: '5%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>

                        <TextInput
                            style={{ height: 40, color: "gray", fontSize: 15, width: 330 }}
                            onChangeText={(phone) => props.setComponentState({ phone })}
                            value={props.phone}
                            maxLength={35}
                            keyboardType={'phone-pad'}>
                        </TextInput>
                    </View>
                    <Text style={{ marginTop: 10, color: "#ff7200" }}> อีเมลล์ </Text>

                    <View style={{ marginLeft: '5%', marginRight: '5%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                        <TextInput
                            style={{ height: 40, color: "gray", fontSize: 15, width: 330 }}
                            onChangeText={(email) => props.setComponentState({ email })}
                            value={props.email}
                            maxLength={35}
                            keyboardType={'email-address'}>
                        </TextInput>
                    </View>
                    <Text style={{ marginTop: 10, color: "#ff7200" }}> รหัสผ่าน </Text>
                    <View style={{ marginLeft: '5%', marginRight: '5%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>


                        <TextInput
                            style={{ height: 40, color: "gray", fontSize: 15, width: 330 }}
                            onChangeText={(password) => props.setComponentState({ password })}
                            value={props.password}
                            maxLength={35}
                            secureTextEntry={true}
                            keyboardType={'default'}>
                        </TextInput>
                    </View>
                    <Text style={{ marginTop: 10, color: "#ff7200" }}> ยืนยันรหัสผ่าน </Text>
                    <View style={{ marginLeft: '5%', marginRight: '5%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>

                        <TextInput
                            style={{ height: 40, color: "gray", fontSize: 15, width: 330 }}
                            onChangeText={(cpassword) => props.setComponentState({ cpassword })}
                            value={props.cpassword}
                            maxLength={35}
                            secureTextEntry={true}
                            keyboardType={'default'}>
                        </TextInput>
                    </View>
                    <TouchableOpacity
                        style={{ backgroundColor: "#91dd3e", marginLeft: '5%', marginRight: '5%', marginTop: 40, height: 40 }}
                        onPress={() => { props.signup() }}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ textAlign: "center", color: "white" }}>
                                สมัครสมาชิก
            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ backgroundColor: "#49a5fb", marginLeft: '5%', marginRight: '5%', marginTop: 10, height: 40 }}
                        onPress={() => { props.navigation.goBack() }}>
                        {/* onPress={() => { props.test() }}> */}
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ textAlign: "center", color: "white" }}>
                                กลับไปที่ล็อกอิน
            </Text>
                        </View>
                    </TouchableOpacity>


                </View>
            </KeyboardAvoidingView>
        </View>
    )

};
// onPress={() => props.signup()}
export default Create;
