import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';

/////////////////คีบอดเลื่อน///////////
// import {KeyboardAvoidingView} from 'react-native';


// <KeyboardAvoidingView behavior="padding" style={{flex: 1,justifyContent: 'space-between',}}>

// </KeyboardAvoidingView>
//////////////////////////////////
const Acc = (props) => {

    return (
        <View style={{flex:1,backgroundColor: "#eeddc1"}}>
            {/* //////////////////header bar////////////////////// */}
            <View style={{ height: 40, backgroundColor: "#8B4726", flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => {
                            props.navigation.navigate('Detail', {
                                email: email,
                                call: call,
                                imglink: imglink,
                                lat: lat,
                                long: long,
                                locationuser: locationuser,
                                nameuser: nameuser,
                            })
                        }}
                    >
                        <Image
                            source={require('../../resource/back-white.png')}
                            style={{ margin: 5, resizeMode: 'stretch', marginLeft: 10, height: 30, width: 20 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 15 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                        รายละเอียด
                    {/* {props.userid} */}
                    </Text>
                </View>
                <View style={{ flex: 3 }}>

                </View>
            </View>

            {/* //////////////////header bar////////////////////// */}
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'space-between', }}>
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    <Text style={{ marginTop: 10, color: "#ff7200" }}> 
                    รายละเอียดการประเมินการซ่อมเบื้องต้น
                     </Text>
                    <View style={{ marginLeft: '5%', marginRight: '5%', height: 120, backgroundColor: "#e8e8e8", flexDirection: "row" }}>
                        <TextInput
                            style={{ height: 120, fontSize: 15, width: 330, width: 330 }}
                            onChangeText={(detail) => props.setComponentState({ detail })}
                            value={props.detail}
                            maxLength={300}
                            placeholder="กรุณากรอกรายละเอียดการประเมินการซ่อมเบื้องต้น"
                            multiline={true}
                            keyboardType={'default'}>
                        </TextInput>
                    </View>
                    <Text style={{ marginTop: 10, color: "#ff7200" }}> ราคาแจ้งซ่อมโดยประมาณ </Text>
                    <View style={{ marginLeft: '5%', marginRight: '5%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>

                        <TextInput
                            style={{ height: 40, color: "gray", fontSize: 15, width: 330 }}
                            onChangeText={(price) => props.setComponentState({ price })}
                            value={props.price}
                            placeholder="กรุณากรอกราคาการซ่อมเบื้องต้น"
                            maxLength={35}
                            keyboardType={'number-pad'}>
                        </TextInput>
                    </View>
                    <Text style={{ marginTop: 10, color: "#ff7200" }}> ราคาค่าเดินทาง </Text>
                    <View style={{ marginLeft: '5%', marginRight: '5%', height: 40, backgroundColor: "#e8e8e8", flexDirection: "row" }}>

                        <TextInput
                            style={{ height: 40, color: "gray", fontSize: 15, width: 330 }}
                            onChangeText={(travel) => props.setComponentState({ travel })}
                            value={props.travel}
                            placeholder="กรุณากรอกราคาการเดินทาง"
                            maxLength={35}
                            keyboardType={'number-pad'}>
                        </TextInput>
                    </View>


                    <TouchableOpacity
                        style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "#91dd3e", marginLeft: '5%', marginRight: '5%', marginTop: 10, height: 40 }}
                        onPress={() => { props.sendtouser() }}>
                        <View style={{}}>
                            <Text style={{ textAlign: "center", color: "white", fontSize: 25 }}>
                                ยืนยันการรับซ่อม
            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </View>
    )

};
export default Acc;
