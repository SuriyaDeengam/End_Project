import React from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
/////////////////คีบอดเลื่อน///////////
// import {KeyboardAvoidingView} from 'react-native';


// <KeyboardAvoidingView behavior="padding" style={{flex: 1,justifyContent: 'space-between',}}>

// </KeyboardAvoidingView>
//////////////////////////////////

const Login = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#eeddc1" }}>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'space-between', }}>
                <View style={{}}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../../resource/logo_chung.png')}
                            style={{ marginTop: '15%', height: width / 2, width: width / 2 }}
                        />
                        {/* height: 40, width: width / 2, */}
                    </View>
                    <View style={{ marginTop: '10%', marginLeft: '5%', marginRight: '5%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                        <Image
                            source={require('../../resource/asas.png')}
                            style={{ margin: 5, height: 30, width: 25 }}
                        />
                        <TextInput
                            style={{ height: 40, width: 270, marginLeft: '5%', fontSize: 15 }}
                            onChangeText={(email) => props.setComponentState({ email })}
                            value={props.email}
                            maxLength={35}
                            placeholder="Enter your Email"
                            keyboardType={'default'}>

                        </TextInput>
                    </View>
                    <View style={{ marginTop: '5%', marginLeft: '5%', marginRight: '5%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                        <Image
                            source={require('../../resource/key.png')}
                            style={{ margin: 5, height: 30, width: 23 }}
                        />
                        <TextInput
                            style={{ height: 40, width: 270, marginLeft: '5%', fontSize: 15 }}
                            onChangeText={(password) => props.setComponentState({ password })}
                            value={props.password}
                            placeholder="Enter your Password"
                            secureTextEntry={true}
                            maxLength={35}
                            keyboardType={'default'}>
                        </TextInput>
                    </View>
                    <TouchableOpacity
                        style={{ backgroundColor: "#91dd3e", marginTop: 40, marginLeft: '5%', marginRight: '5%', height: 40 }}
                        onPress={() => { props.onLogin() }}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ textAlign: "center", color: "white" }}>
                                เข้าสู่ระบบ
            </Text>

                        </View >
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: "#49a5fb", marginLeft: '5%', marginRight: '5%', marginTop: 10, height: 40 }}
                        onPress={() => { props.navigation.navigate('Create') }}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ textAlign: "center", color: "white" }}>
                                สมัครสมาชิก
            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View >
    )

};
// onPress={() => props.signup()}
export default Login;

export const { width, height } = Dimensions.get('window');