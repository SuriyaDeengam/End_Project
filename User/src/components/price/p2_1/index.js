// /**
//  *	P2_1 container
//  */


import * as React from 'react';
import { Button, Image, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';


export default class P2_1 extends React.Component {
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
                            onPress={() => { this.props.navigation.navigate('p1') }}
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

                    <View style={{ marginTop: '3%', marginRight: '10%', marginLeft: '10%', flexDirection: 'row', }}>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../../resource/flash.png')}
                                style={{ resizeMode: 'stretch', height: 40, width: 40, marginLeft: '10%' }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5, marginLeft: 15 }}>
                            <Text style={{ color: "#707070", fontSize: 20, textAlign: 'center' }}>
                                กรุณาเลือกยี่ห้อแบตเตอรี่
                            </Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../../resource/flash.png')}
                                style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                            />
                        </View>
                    </View>

                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_1_1') }}
                    >
                        <View style={{ marginTop: '10%', marginRight: '15%', marginLeft: '5%', flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/triangle.png')}
                                    style={{ resizeMode: 'stretch', height: 20, width: 20,  marginTop: '15%'}}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    แบตเตอรี่ GS Battery MFX series
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_1_2') }}
                    >
                        <View style={{ marginTop: 10, marginRight: '15%', marginLeft: '5%', flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/triangle.png')}
                                    style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '15%'  }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    แบตเตอรี่ 3K X-Treme Advance
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_1_3') }}
                    >
                        <View style={{ marginTop: 10, marginRight: '15%', marginLeft: '5%', flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/triangle.png')}
                                    style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '15%'  }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    แบตเตอรี่ FB Gold series
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_1_4') }}
                    >
                        <View style={{ marginTop: 10, marginRight: '15%', marginLeft: '5%', flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/triangle.png')}
                                    style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '15%'  }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    แบตเตอรี่ YUASA Y-Maxx MF
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_1_5') }}
                    >
                        <View style={{ marginTop: 10, marginRight: '10%', marginLeft: '5%', flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/triangle.png')}
                                    style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '15%'  }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    แบตเตอรี่ Panasonic STANDARD MF
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_1_6') }}
                    >
                        <View style={{ marginTop: 10, marginRight: '15%', marginLeft: '5%', flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/triangle.png')}
                                    style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '15%'  }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    แบตเตอรี่ BOLIDEN รุ่น SILVERTECH
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { this.props.navigation.navigate('p2_1_7') }}
                    >
                        <View style={{ marginTop: 10, marginRight: '15%', marginLeft: '5%', flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../../resource/triangle.png')}
                                    style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '15%'  }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    แบตเตอรี่ BOSCH SM series
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