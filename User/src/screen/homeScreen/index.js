import React from 'react';
import { View, Text, Dimensions, ActivityIndicator, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

/////////////////คีบอดเลื่อน///////////
// import {KeyboardAvoidingView} from 'react-native';


// <KeyboardAvoidingView behavior="padding" style={{flex: 1,justifyContent: 'space-between',}}>
    
// </KeyboardAvoidingView>
//////////////////////////////////

{/* //////////////เล่นวีดีโอ/////////////// */ }
// import { Video } from 'expo-av';
{/* //////////////เล่นวีดีโอ/////////////// */ }

const Home = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                </View>
                <View style={{ flex: 18 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                        CarSupp
                    </Text>
                </View>
                <View style={{ flex: 3 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        // onPress={() => { props.navigation.navigate('Me') }}
                        onPress={() => { props.navigation.navigate('Me') }}
                    >
                        <Image
                            source={require('../../resource/user-white.png')}
                            style={{ margin: 5, height: 30, width: 25 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container}>
                <SwiperFlatList
                    autoplay
                    autoplayDelay={3}
                    autoplayLoop
                    showPagination
                    paginationDefaultColor='#483D8B'
                    paginationActiveColor='#1E90FF'
                >
                    {/* //////////////เล่นวีดีโอ/////////////// */}
                    {/* <Video
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        style={{ width: 300, height: 300 }}
                    /> */}
                    {/* //////////////เล่นวีดีโอ/////////////// */}

                    <View style={[styles.child, { backgroundColor: 'tomato' }]}>
                        <Image
                            source={require('../../resource/poster1.png')}
                            style={{ width: width, height: '100%' }}
                            resizeMode={'cover'}
                        />
                    </View>
                    <View style={[styles.child, { backgroundColor: 'tomato' }]}>
                        <Image
                            source={require('../../resource/poster2.png')}
                            style={{ width: width, height: '100%' }}
                            resizeMode={'cover'}
                        />
                    </View>
                    <View style={[styles.child, { backgroundColor: 'thistle' }]}>
                        <Image
                            source={require('../../resource/poster3.png')}
                            style={{ width: width, height: '100%' }}
                            resizeMode={'cover'}
                        />
                    </View>
                    <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
                        <Image
                            source={require('../../resource/poster4.png')}
                            style={{ width: width, height: '100%' }}
                            resizeMode={'cover'}
                        />
                    </View>

                </SwiperFlatList>
            </View>

            <View style={{ flex: 2, backgroundColor: "white", flexDirection: 'row' }}>
                <View style={{ backgroundColor:"#e7e1da",flex: 1, borderWidth: 1, borderColor: "black", flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => {
                            props.checkconfirm()
                        }}
                        style={{ flex:1,justifyContent:"center",alignItems:"center" }}
                    >
                        {/* //////////////////หมุนๆ//////////////// */}
                        {props.showAct ? (
                            <ActivityIndicator size="large" color="#0000ff" />
                        ) : null}
                        {props.show ? (
                            <View>
                                <Image
                                    source={require('../../resource/chungman.png')}
                                    style={{ width: 120, height: 100 }}
                                    resizeMode={'center'}
                                />
                                <Text style={{ marginTop: 10, fontSize: 12, color: "#ff7200", textAlign: "center" }}> แจ้งซ่อมกับ Carsupp </Text>
                            </View>
                        ) : null}
                        {/* //////////////////หมุนๆ//////////////// */}
                    </TouchableOpacity>

                </View>
                <View style={{ backgroundColor:"#e7e1da",flex: 1, borderWidth: 1, borderColor: "gray", flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity activeOpacity={0.5}
                        // onPress={() => {
                        //     props.navigation.navigate('Load', { brand: 1 });
                        // }}
                        onPress={() => {
                            props.checkservice()
                        }}
                        style={{ flex:1,justifyContent:"center",alignItems:"center" }}
                    >
                        {/* //////////////////หมุนๆ//////////////// */}
                        {props.showAct2 ? (
                            <ActivityIndicator size="large" color="#0000ff" />
                        ) : null}
                        {props.show2 ? (
                            <View>
                                <Image
                                    source={require('../../resource/job2.png')}
                                    style={{ width: 120, height: 100 }}
                                    resizeMode={'center'}
                                />
                                <Text style={{ marginTop: 10, fontSize: 12, color: "#ff7200", textAlign: "center" }}> รายการแจ้งซ่อม </Text>
                            </View>
                        ) : null}
                        {/* //////////////////หมุนๆ//////////////// */}
                    </TouchableOpacity>
                </View>
            </View>

        </View >
    )

};
export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: 'white'
    },
    child: {
        justifyContent: 'center'
    },
    text: {
        fontSize: width * 0.5,
        textAlign: 'center'
    }
});
export default Home;
