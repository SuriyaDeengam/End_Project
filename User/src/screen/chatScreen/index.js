import React from 'react';
import { View, Text, Dimensions, Button, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Chat = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#e7e1da" }}>
            <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                {/* บนซ้าย */}
                <View style={{ flex: 3 }}>
                </View>
                {/* กลาง */}
                <View style={{ flex: 18 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                        SERVICE
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
            
            {/* //////////////////header bar////////////////////// */}
            <View style={{ flex: 20 }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{ }}>
                            <Text>test</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flex: 2, height: 80, backgroundColor: "#e4e4e4" ,flexDirection:'row'}}>
                    <TextInput
                        style={{ marginLeft: 20, marginTop: 10, backgroundColor: "white", height: 40, color: "gray", fontSize: 15, width: 310 }}
                        onChangeText={(msg) => this._setState({ msg })}
                        value={this.state.msg}
                        placeholder=""
                        maxLength={100}
                        keyboardType={'default'}>
                    </TextInput>
                    <TouchableOpacity
                            style={{ alignItems: 'center', justifyContent: 'center',marginTop: 10,marginLeft:20 ,borderRadius:10,height:40, width:40, backgroundColor: "red"}}
                            onPress={() => { props.navigation.navigate('Detail') }}
                        >
                            <Text style={{color:"white", fontSize:20}}>ส่ง</Text>
                        </TouchableOpacity>
                </View>

        </View>

    )

};

export default Chat;
