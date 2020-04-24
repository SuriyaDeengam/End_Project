// /**
//  *	Addline container
//  */


import * as React from 'react';
import { Button, Image, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';


export default class Addline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                {/* //////////////////header bar////////////////////// */}
                <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                    <View style={{ flex: 3 }}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => { this.props.navigation.navigate('Price') }}
                        >
                            <Image
                                source={require('../../resource/back-white.png')}
                                style={{ margin: 5, resizeMode: 'stretch', marginLeft: 10, height: 30, width: 20 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 15 }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                            Add Line
                    </Text>
                    </View>
                    <View style={{ flex: 3 }}>

                    </View>
                </View>

                {/* //////////////////header bar////////////////////// */}

                {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#eeddc1" }}>
                    <Text style={{ textAlign: "center", color: "black", fontSize: 20, marginTop: '1%' }}>
                        สแกนบาร์โค้ด และเพิ่มเพื่อนเพื่อสอบถามราคา
                    </Text>
                    <Image
                        source={require('../../resource/L.png')}
                        style={{ height: 500, width: 500 }}
                        resizeMode={'contain'}
                    />
                </View> */}

                <View style={{ flex: 1,  backgroundColor: "#eeddc1"}}>
                    <View style={{alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ textAlign: "center", color: "black", fontSize: 20, marginTop: '5%' }}>
                            สแกนบาร์โค้ด และ Add Line เพื่อสอบถามราคา
                        </Text>
                        <Text style={{ textAlign: "center", color: "black", fontSize: 20, marginTop: '1%' }}>
                            ผ่านทาง Line Official Account
                        </Text>
                    </View>
                    <View style={{ alignItems: "center"}}>
                        <Image
                            source={require('../../resource/code.png')}
                            style={{ height: '100%', width: '120%' }}
                            resizeMode={'contain'}
                        />
                        {/* <Image
                            source={require('../../resource/L.png')}
                            style={{ height: '95%', width: '95%' }}
                            resizeMode={'contain'}
                        /> */}
                    </View>
                </View>

            </View>
        );
    }

    _setState = (obj) => {
        this.setState(obj)
    }
}
export const { width, height } = Dimensions.get('window');