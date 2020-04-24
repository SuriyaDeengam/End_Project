// /**
//  *	P2_3 container
//  */


import * as React from 'react';
import { Button, Image, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';


export default class P2_3 extends React.Component {
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
                                source={require('../../../resource/gear.png')}
                                style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                            />
                        </View>
                        <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                            <Text style={{ color: "#707070", fontSize: 20, textAlign: 'center' }}>
                                ผ้าเบรค
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
                    <View style={{ backgroundColor: "#e7e1da"  }}>
                        <View style={{ flex: 1, marginTop: '10%', marginLeft: '5%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'center' }}>
                                ราคาโดยประมาณจะอยู่ที่ 600 - 1,500 บาท
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginRight: '10%', marginLeft: '8%', flexDirection: 'row', }}>
                        <View style={{ flex: 3 }}>
                            <Image
                                source={require('../../../resource/hand.png')}
                                style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                            />
                        </View>
                        <View style={{ flex: 20, marginTop: '3%', marginLeft: '5%', }}>
                            <Text style={{ color: "#707070", fontSize: 15, textAlign: 'left' }}>
                                สอบถามราคาอะไหล่อื่นๆ เพิ่มเติม พิมพ์เลย 
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