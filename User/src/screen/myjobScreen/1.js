import React from 'react';
import { View, Text, Dimensions, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';




const Myjob = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                {/* บนซ้าย */}
                <View style={{ flex: 3 }}>
                </View>
                {/* กลาง */}
                <View style={{ flex: 18 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                        MY JOB
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
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ marginLeft: '10%', marginRight: '10%', marginTop: '5%', height: '6%', backgroundColor: "#e8e8e8", flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ marginLeft: '5%', marginTop: '2%', height: 30, fontSize: 20, color: "#b6bdb9", textAlign: "center" }}>
                        ชื่ออู่ซ่อมรถที่เลือก
                    </Text>
                </View>

                <View style={{ flex: 6 }}>

                </View>




                <View style={{ flex: 1, backgroundColor: "white", flexDirection: 'row', borderBottomWidth: 1, borderColor: "gray" }}>
                    <View style={{ flex: 1, borderColor: "black", flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => {props.t1() }}
                            style={{ marginTop: '30%' }}
                        >
                            <Image
                                source={require('../../resource/map1.png')}
                                style={{ width: 120, height: 100 }}
                                resizeMode={'center'}
                            />
                            <Text style={{ marginTop: 5, fontSize: 14, color: "#ff7200", textAlign: "center" }}>
                                ดูตำแหน่งของช่าง
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, borderColor: "black", flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity activeOpacity={0.5}
                            //onPress={() =>  {props.navigation.navigate('Fix1');}}
                            style={{ marginTop: '30%' }}
                        >
                            <Image
                                source={require('../../resource/chat-big.png')}
                                style={{ width: 120, height: 100 }}
                                resizeMode={'center'}
                            />
                            <Text style={{ marginTop: 5, fontSize: 14, color: "#ff7200", textAlign: "center" }}>
                                พูดคุยกับช่างของคุณ
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ borderLeftWidth: 1, borderColor: "gray", flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity activeOpacity={0.5}
                                // onPress={() => {
                                //     props.navigation.navigate('Load', { brand: 1 });
                                // }}
                                onPress={() => { props.navigation.navigate('Chat'); }}
                                style={{ marginTop: '30%' }}
                            >
                                <Image
                                    source={require('../../resource/chat-big.png')}
                                    style={{ width: 120, height: 100 }}
                                    resizeMode={'center'}
                                />
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#ff7200", textAlign: "center" }}>
                                    พูดคุยกับช่างของคุณ
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View> */}


                </View>
                {/* <View style={{ flex: 4 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginTop: 5, marginRight: "10%" }}>
                            <Text style={{ marginTop: 10, marginLeft: '5%', color: "#ff7200", fontSize: 15 }}>
                                ประเมินความพึงพอใจ
                        </Text>
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => { props.navigation.navigate(''); }}
                                style={{ marginTop: '2%', marginLeft: '10%' }}
                            >
                                <Image
                                    source={require('../../resource/star.png')}
                                    style={{ width: 30, height: 30 }}
                                    resizeMode={'center'}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> */}


                <View style={{ flex: 4 }}>
                    <Text style={{ marginTop: "2%", marginLeft: "5%", fontSize: 15, color: "#ff7200" }}>
                        ประเมินความพึงพอใจ
                    </Text>
                    <View style={{ marginTop: 5, flexDirection: 'row'}}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => { props.navigation.navigate(''); }}
                            style={{ marginTop: '2%', marginLeft: '10%' }}
                        >
                            <Image
                                source={require('../../resource/star.png')}
                                style={{ width: 30, height: 30 }}
                                resizeMode={'center'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => { props.navigation.navigate(''); }}
                            style={{ marginTop: '2%', marginLeft: '10%' }}
                        >
                            <Image
                                source={require('../../resource/star.png')}
                                style={{ width: 30, height: 30 }}
                                resizeMode={'center'}
                            />
                        </TouchableOpacity>
                    </View>

                </View>



            </ScrollView>
        </View>

    )

};

export default Myjob;
