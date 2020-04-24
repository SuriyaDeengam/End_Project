// /**
//  *	P2_1_3 container
//  */


import * as React from 'react';
import { Button, Image, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';


export default class P2_1_3 extends React.Component {
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
                                FB Gold series
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
                                รุ่น FB Gold 44B19L/R MF/SMF
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
                                เหมาะสำหรับเครื่องยนต์ ขนาด 1,300 - 1,500 ซี.ซี.
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
                                ราคาโดยประมาณ 1,900 - 2,100 บาท
                            </Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#e7e1da" }}>
                        <View style={{ flex: 1, marginTop: '10%', marginLeft: '5%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                รุ่น FB Gold 55B24L/R MF/SMF
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
                                เหมาะสำหรับเครื่องยนต์ ขนาด 1,300 - 2,000 ซี.ซี.
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
                                ราคาโดยประมาณ 2,100 - 2,400 บาท
                            </Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#e7e1da" }}>
                        <View style={{ flex: 1, marginTop: '10%', marginLeft: '5%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                รุ่น FB Gold 80D26L/R MF/SMF
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
                                เหมาะสำหรับเครื่องยนต์ขนาด 1,800 - 3,000 ซี.ซี.
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
                                ราคาโดยประมาณ 2,600 - 2,800 บาท
                            </Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#e7e1da" }}>
                        <View style={{ flex: 1, marginTop: '10%', marginLeft: '5%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                รุ่น FB Gold 105D31L/R MF/SMF
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
                                กำลังไฟ 90 แอมป์
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
                                เหมาะสำหรับเครื่องยนต์ ขนาด 2,500 - 3,200 ซี.ซี.
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
                                ราคาโดยประมาณ 3,100 - 3,300 บาท
                            </Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#e7e1da" }}>
                        <View style={{ flex: 1, marginTop: '10%', marginLeft: '5%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                รุ่น FB Gold 100LN5 (เฉพาะแบบแห้ง)
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
                                เหมาะสำหรับรถยุโรป
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
                                ราคาโดยประมาณ 3,500 - 3,700 บาท
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