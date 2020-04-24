import React from 'react';
import { View, Text, ScrollView, Button, Image, TouchableOpacity } from 'react-native';


const Me = (props) => {
    // console.log(props);

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ height: 40, backgroundColor: "#8B4726", flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => { props.navigation.navigate('Home') }}
                    >
                        <Image
                            source={require('../../resource/back-white.png')}
                            style={{ margin: 5, resizeMode: 'stretch', marginLeft: 10, height: 30, width: 20 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 18 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                        OTHER
                    </Text>
                </View>
                <View style={{ flex: 3 }}>

                </View>
            </View>
            {/* ///////////////////////////////// */}
            <View style={{ flex: 1, backgroundColor: "#eeddc1" }}>

                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ marginTop: 5 }}></View>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { props.t1() }}
                    >
                        <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../resource/user-chung.png')}
                                    style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    ข้อมูลผู้ใช้
                            </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { props.gohistory() }}
                    >
                        <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../resource/question-chung.png')}
                                    style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    ประวัติการซ่อม
                            </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>
                    {/*<TouchableOpacity
                        style={{}}
                        // onPress={() => { props.navigation.navigate('Price') }}
                    >
                        <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../resource/profile-chung.png')}
                                    style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                ประวัติการซ่อม
                            </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { props.Out(), props.navigation.navigate('SplashScreen') }}
                    >
                        <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('../../resource/exit-chung.png')}
                                    style={{ resizeMode: 'stretch', height: 35, width: 35 }}
                                />
                            </View>
                            <View style={{ flex: 10, marginTop: 5, marginLeft: 20 }}>
                                <Text style={{ color: "#707070", fontSize: 15 }}>
                                    ออกจากระบบ
                            </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, borderWidth: 0.5, borderColor: "#f5f5f5" }}></View>
                    </TouchableOpacity>

                </ScrollView>
                {/* ////////////1 button///////////////////// */}
                {/* <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{ marginTop: 10, }}
                        onPress={() => { props.t1() }}
                    >
                        <View style={{ flex: 2 }}>
                            <Image
                                
                                style={{ resizeMode: 'stretch', height: 50, width: 50 }}
                            />
                        </View>
                        <View style={{ flex: 9 }}>
                            <Text style={{ color: "#ff7200", fontSize: 20, marginTop: 15 }}> ข้อมูลอู่ </Text>
                        </View>


                    </TouchableOpacity>
                </View> */}
                {/* ////////////1 button///////////////////// */}
                {/* <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            source={require('../../resource/question-chung.png')}
                            style={{ resizeMode: 'stretch', height: 50, width: 50 }}
                        />
                    </View>
                    <View style={{ flex: 9 }}>
                        <Text style={{ color: "#ff7200", fontSize: 20, marginTop: 15 }}> วิธีการใช้งาน </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ marginTop: 10 }}
                            onPress={() => { props.navigation.navigate('how') }}
                        // onPress={() => { props.t1() }}
                        >
                            <Image
                                source={require('../../resource/go.png')}
                                style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View> */}
                {/* ////////////1 button///////////////////// */}
                {/* <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            source={require('../../resource/setting-chung.png')}
                            style={{ resizeMode: 'stretch', height: 50, width: 50 }}
                        />
                    </View>
                    <View style={{ flex: 9 }}>
                        <Text style={{ color: "#ff7200", fontSize: 20, marginTop: 15 }}> การตั่งค่า </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ marginTop: 10, }}
                            onPress={() => { props.navigation.navigate('setting') }}
                        >
                            <Image
                                source={require('../../resource/go.png')}
                                style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View> */}
                {/* ////////////1 button///////////////////// */}
                {/* <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            source={require('../../resource/profile-chung.png')}
                            style={{ resizeMode: 'stretch', height: 50, width: 50 }}
                        />
                    </View>
                    <View style={{ flex: 9 }}>
                        <Text style={{ color: "#ff7200", fontSize: 20, marginTop: 15 }}> ประวัติการซ่อม </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ marginTop: 10, }}
                            onPress={() => { props.navigation.navigate('history') }}
                        >
                            <Image
                                source={require('../../resource/go.png')}
                                style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View> */}
                {/* ////////////1 button///////////////////// */}
                {/* <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            source={require('../../resource/exit-chung.png')}
                            style={{ resizeMode: 'stretch', height: 50, width: 50 }}
                        />
                    </View>
                    <View style={{ flex: 9 }}>
                        <Text style={{ color: "#ff7200", fontSize: 20, marginTop: 15 }}> ออกจากระบบ </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ marginTop: 10, }}
                            onPress={() => { props.Out(), props.navigation.navigate('SplashScreen') }}
                        >
                            <Image
                                source={require('../../resource/go.png')}
                                style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View> */}




            </View>
        </View>
    )

};
// onPress={() => props.signup()}
export default Me;
