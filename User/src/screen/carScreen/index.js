import React from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';


const Createcar = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#e7e1da" }}>
            <View style={{ height: 40, backgroundColor: "#ff7200" }}>
                <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                    ข้อมูลรถ
                </Text>
            </View>
            <View style={{marginTop: 10, marginRight: 10}}>
                <Text style={{ marginTop: 10, color: "#ff7200" }}> ยี่ห้อรถ </Text>
                <View style={{ marginLeft: '5%', marginRight: '5%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                    <TextInput
                        style={{ height: 40, fontSize: 15, width:330, width:330 }}
                        onChangeText={(brand) => props.setComponentState({ brand })}
                        value={props.brand}
                        maxLength={50}
                        keyboardType={'default'}>
                    </TextInput>
                </View>
                <Text style={{ marginTop: 10, color: "#ff7200" }}> รุ่นรถ </Text>
                <View style={{ marginLeft: '5%', marginRight: '5%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                    <TextInput
                        style={{ height: 40, fontSize: 15, width:330, width:330 }}
                        onChangeText={(model) => props.setComponentState({ model })}
                        value={props.model}
                        maxLength={50}
                        keyboardType={'default'}>
                    </TextInput>
                </View>
                <Text style={{ marginTop: 10, color: "#ff7200" }}> ความจุของเครื่องยนต์ </Text>
                <View style={{ marginLeft: '5%', marginRight: '5%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                    <TextInput
                        style={{ height: 40, fontSize: 15, width:330, width:330 }}
                        onChangeText={(capacity) => props.setComponentState({ capacity })}
                        value={props.capacity}
                        maxLength={10}
                        keyboardType={'default'}>
                    </TextInput>
                </View>
                <Text style={{ marginTop: 10, color: "#ff7200" }}> ทะเบียนรถ </Text>
                <View style={{ marginLeft: '5%', marginRight: '5%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                    <TextInput
                        style={{ height: 40, fontSize: 15, width:330, width:330 }}
                        onChangeText={(registration) => props.setComponentState({ registration })}
                        value={props.registration}
                        maxLength={40}
                        keyboardType={'email-address'}>
                    </TextInput>
                </View>
                <Text style={{ marginTop: 10, color: "#ff7200" }}> สีรถ </Text>
                <View style={{ marginLeft: '5%', marginRight: '5%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                    <TextInput
                        style={{ height: 40, fontSize: 15, width:330, width:330 }}
                        onChangeText={(color) => props.setComponentState({ color })}
                        value={props.color}
                        maxLength={20}
                        keyboardType={'default'}>
                    </TextInput>
                </View>
                <TouchableOpacity
                    style={{ backgroundColor: "#91dd3e", marginTop: 40, marginLeft: '5%', marginRight: '5%', height: 40  }}
                    onPress={() => { props.navigation.navigate('Login') }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: "center",fontSize: 20, color: "white" }}>
                            ยืนยันการสมัครสมาชิก
                        </Text>

                    </View >
                </TouchableOpacity>
            </View>     
        </View >
    )

};
// onPress={() => props.signup()}
export default Createcar;
