// /**
//  *	P2_1_2 container
//  */


import * as React from 'react';
import { Button, Image, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';


export default class P2_1_2 extends React.Component {
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
                                3K X-Treme Advanc
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
                                รุ่น ADX60L/R
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
                                เหมาะสำหรับเครื่องยนต์ ขนาด 1,300 - 1,600 ซี.ซี.
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
                                รุ่น ADX65L/R
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
                                เหมาะสำหรับเครื่องยนต์ ขนาด 1,300 - 2,500 ซี.ซี.
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
                                ราคาโดยประมาณ 1,800 - 2,000 บาท
                            </Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#e7e1da" }}>
                        <View style={{ flex: 1, marginTop: '10%', marginLeft: '5%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                รุ่น ADX70L/R
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
                                กำลังไฟ 55 แอมป์
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
                                เหมาะสำหรับเครื่องยนต์ขนาด 1,300 - 2,500 ซี.ซี.
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
                                ราคาโดยประมาณ 2,000 - 2,200 บาท
                            </Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#e7e1da" }}>
                        <View style={{ flex: 1, marginTop: '10%', marginLeft: '5%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                รุ่น ADX75L/R
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
                                เหมาะสำหรับเครื่องยนต์ ขนาด 2,000 - 3,000 ซี.ซี.
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
                                ราคาโดยประมาณ 2,400 - 2,800 บาท
                            </Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#e7e1da" }}>
                        <View style={{ flex: 1, marginTop: '10%', marginLeft: '5%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                รุ่น ADX3000L/R
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
                                เหมาะสำหรับเครื่องยนต์ ขนาด 2,500 - 3,000 ซี.ซี.
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
                                ราคาโดยประมาณ 3,000 - 3,500 บาท
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