// /**
//  *	P1 container
//  */


import * as React from 'react';
import { Button, Image, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';


export default class P1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#e7e1da" }}>
                {/* //////////////////header bar////////////////////// */}
                <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                    <View style={{ flex: 3 }}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => { this.props.navigation.navigate('Price') }}
                        >
                            <Image
                                source={require('../../../resource/back-white.png')}
                                style={{ margin: 5, resizeMode: 'stretch', marginLeft: 10, height: 30, width: 20 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 15 }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                            สอบถามราคากับเรา
                    </Text>
                    </View>
                    <View style={{ flex: 3 }}>

                    </View>
                </View>

                {/* //////////////////header bar////////////////////// */}

                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ marginTop: 5 }}></View>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_1') }}
                    >
                        <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/price1.png')}
                                    style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    แบตเตอรี่
                            </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_2') }}
                    >
                        <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/price2.png')}
                                    style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    สายพานหน้าเครื่อง
                            </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_3') }}
                    >
                        <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/price3.png')}
                                    style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    ผ้าเบรค
                            </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_4') }}
                    >
                        <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/price4.png')}
                                    style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    ตัวกรองเบนซิน
                            </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_5') }}
                    >
                        <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/price5.png')}
                                    style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    เข็มบอกระดับน้ำมันค้าง (ลูกลอย)
                            </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_6') }}
                    >
                        <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/price6.png')}
                                    style={{ resizeMode: 'stretch', height: 38, width: 35 }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    พัดลมระบายความร้อน
                            </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_7') }}
                    >
                        <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/price7.png')}
                                    style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    ประเก็นฝาสูบ
                            </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_8') }}
                    >
                        <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/price9.png')}
                                    style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    โช้ค
                            </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_9') }}
                    >
                        <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/price8.png')}
                                    style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    หัวเทียนบอด / ชำรุด
                            </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_10') }}
                    >
                        <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/price10.png')}
                                    style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    ปั๊มน้ำรถยนต์
                            </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_11') }}
                    >
                        <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/price11.png')}
                                    style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    เติมน้ำมันผิดประเภท
                            </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>


                </ScrollView>
            </View>
        );
    }

    _setState = (obj) => {
        this.setState(obj)
    }
}
export const { width, height } = Dimensions.get('window');