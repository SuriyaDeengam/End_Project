// /**
//  *	P2_1_1 container
//  */


import * as React from 'react';
import { Button, Image, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';


export default class P2_1_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#e7e1da" ,marginBottom:35}}>
                {/* //////////////////header bar////////////////////// */}
                <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                    <View style={{ flex: 3 }}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => { this.props.navigation.navigate('p2_1') }}
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
                                source={require('../../../resource/gear.png')}
                                style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                            <Text style={{ color: "#707070", fontSize: 20, textAlign: 'center' }}>
                                GS Battery MF series
                            </Text>
                        </View>

                        <View style={{ flex: 2 }}>
                            <Image
                                source={require('../../../resource/gear.png')}
                                style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: '3%', borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>

                    <View style={{ backgroundColor: "#e7e1da" }}>
                        <View style={{ flex: 1, marginTop: '10%', marginLeft: '5%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                รุ่น MFX-50L
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginRight: '10%', marginLeft: '10%', flexDirection: 'row', }}>
                        <View style={{ flex: 3 }}>
                            <Image
                                source={require('../../../resource/check.png')}
                                style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                            />
                        </View>
                        <View style={{ flex: 20, marginTop: '3%', marginLeft: '3%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                กำลังไฟ 40 แอมป์
                            </Text>
                        </View>
                    </View>
                     <View style={{ marginRight: '10%', marginLeft: '10%', flexDirection: 'row', }}>
                        <View style={{ flex: 3 }}>
                            <Image
                                source={require('../../../resource/check.png')}
                                style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                            />
                        </View>
                        <View style={{ flex: 20, marginTop: '3%', marginLeft: '3%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                เหมาะสำหรับรถเก๋งขนาดเล็ก
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginRight: '10%', marginLeft: '10%', flexDirection: 'row', }}>
                        <View style={{ flex: 3 }}>
                            <Image
                                source={require('../../../resource/check.png')}
                                style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                            />
                        </View>
                        <View style={{ flex: 20, marginTop: '3%', marginLeft: '3%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                ราคาโดยประมาณ 1,700 - 1,900 บาท
                            </Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#e7e1da" }}>
                        <View style={{ flex: 1, marginTop: '10%', marginLeft: '5%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                รุ่น MFX-60L/R
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginRight: '10%', marginLeft: '10%', flexDirection: 'row', }}>
                        <View style={{ flex: 3 }}>
                            <Image
                                source={require('../../../resource/check.png')}
                                style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                            />
                        </View>
                        <View style={{ flex: 20, marginTop: '3%', marginLeft: '3%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                กำลังไฟ 50 แอมป์
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginRight: '10%', marginLeft: '10%', flexDirection: 'row', }}>
                        <View style={{ flex: 3 }}>
                            <Image
                                source={require('../../../resource/check.png')}
                                style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                            />
                        </View>
                        <View style={{ flex: 20, marginTop: '3%', marginLeft: '3%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                เหมาะสำหรับรถเก๋งขนาดเล็ก และขนาดกลาง
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginRight: '10%', marginLeft: '10%', flexDirection: 'row', }}>
                        <View style={{ flex: 3 }}>
                            <Image
                                source={require('../../../resource/check.png')}
                                style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                            />
                        </View>
                        <View style={{ flex: 20, marginTop: '3%', marginLeft: '3%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                ราคาโดยประมาณ 1,800 - 2,200 บาท
                            </Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#e7e1da" }}>
                        <View style={{ flex: 1, marginTop: '10%', marginLeft: '5%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                รุ่น MFX-90L/R
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginRight: '10%', marginLeft: '10%', flexDirection: 'row', }}>
                        <View style={{ flex: 3 }}>
                            <Image
                                source={require('../../../resource/check.png')}
                                style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                            />
                        </View>
                        <View style={{ flex: 20, marginTop: '3%', marginLeft: '3%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                กำลังไฟ 75 แอมป์
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginRight: '10%', marginLeft: '10%', flexDirection: 'row', }}>
                        <View style={{ flex: 3 }}>
                            <Image
                                source={require('../../../resource/check.png')}
                                style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                            />
                        </View>
                        <View style={{ flex: 20, marginTop: '3%', marginLeft: '3%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                เหมาะสำหรับรถเก๋งขนาดใหญ่ และรถกระบะ ที่ขนาดเครื่องไม่เกิน 2.8 ซี.ซี
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginRight: '10%', marginLeft: '10%', flexDirection: 'row', }}>
                        <View style={{ flex: 3 }}>
                            <Image
                                source={require('../../../resource/check.png')}
                                style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                            />
                        </View>
                        <View style={{ flex: 20, marginTop: '3%', marginLeft: '3%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                ราคาโดยประมาณ 2,200 - 2,600 บาท
                            </Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#e7e1da" }}>
                        <View style={{ flex: 1, marginTop: '10%', marginLeft: '5%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                รุ่น MFC-200L/
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginRight: '10%', marginLeft: '10%', flexDirection: 'row', }}>
                        <View style={{ flex: 3 }}>
                            <Image
                                source={require('../../../resource/check.png')}
                                style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                            />
                        </View>
                        <View style={{ flex: 20, marginTop: '3%', marginLeft: '3%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                กำลังไฟ 100 แอมป์
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginRight: '10%', marginLeft: '10%', flexDirection: 'row', }}>
                        <View style={{ flex: 3 }}>
                            <Image
                                source={require('../../../resource/check.png')}
                                style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                            />
                        </View>
                        <View style={{ flex: 20, marginTop: '3%', marginLeft: '3%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                เหมาะสำหรับรถขนาดใหญ่ และรถกระบะ ที่ขนาดเครื่องไม่เกิน 3.0 ซี.ซี.
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginRight: '10%', marginLeft: '10%', flexDirection: 'row', }}>
                        <View style={{ flex: 3 }}>
                            <Image
                                source={require('../../../resource/check.png')}
                                style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                            />
                        </View>
                        <View style={{ flex: 20, marginTop: '3%', marginLeft: '3%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                ราคาโดยประมาณ 2,800 - 3,200 บาท
                            </Text>
                        </View>
                    </View> 

                </ScrollView>
            </View>
        );
    }

    _setState = (obj) => {
        this.setState(obj)
    }
}
export const { width, height } = Dimensions.get('window');