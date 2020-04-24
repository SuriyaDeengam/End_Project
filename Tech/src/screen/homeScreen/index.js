import React from 'react';
import { View, Text, Button, Dimensions, ActivityIndicator, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

const Home = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ height: 40, backgroundColor: "#8B4726", flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                </View>
                <View style={{ flex: 18 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                        CARSUPPMAN
                    </Text>
                </View>
                <View style={{ flex: 3 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => {
                            props.navigation.navigate('Me');
                            // props.navigation.navigate('Chat');
                        }}
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
                    <View style={[styles.child, { backgroundColor: 'tomato' }]}>
                        <Image
                            source={require('../../resource/poster5.png')}
                            style={{ width: width, height: '100%' }}
                            resizeMode={'cover'}
                        />
                    </View>
                    <View style={[styles.child, { backgroundColor: 'tomato' }]}>
                        <Image
                            source={require('../../resource/poster6.png')}
                            style={{ width: width, height: '100%' }}
                            resizeMode={'cover'}
                        />
                    </View>
                    <View style={[styles.child, { backgroundColor: 'thistle' }]}>
                        <Image
                            source={require('../../resource/poster7.png')}
                            style={{ width: width, height: '100%' }}
                            resizeMode={'cover'}
                        />
                    </View>
                   

                </SwiperFlatList>
            </View>

            <View style={{ flex: 2, backgroundColor: "white", flexDirection: 'row' }}>

                {/* /////////////////////การกดปุ่มเปิดปิดภาพหรืออะไรก้ได้////screen/////////////////////////////
                <Button title="Hide/Show Component" onPress={props.ShowHideComponent} />
                {props.show ? (
                    <Image
                        source={require('../../resource/job1.png')}
                        style={{ width: 120, height: 100 }}
                        resizeMode={'center'}
                    />

                ) : null}
                /////////////////////////////////container//////////////////////////////////////
                constructor() {
                    super();
                        this.state = {
                                        show: true,
                                };
                                }
                            
                    ShowHideComponent = () => {
                        if (this.state.show == true) {
                                        this.setState({ show: false });
                        } else {
                                        this.setState({ show: true });
                                }
            };
          ///////////////////////////////////////////////////////////////////////////// */}

                <View style={{ flex: 2,backgroundColor: "#eeddc1", borderWidth: 1, borderColor: "black", alignItems: 'center', justifyContent: 'center' }}>


                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => {
                            props.checkconfirm()
                        }}
                        style={{ flex:1,justifyContent:"center",alignItems:"center" }}

                    >
                        {/* //////////////////หมุนๆ//////////////// */}
                        {props.showAct ? (
                            <ActivityIndicator size="large" color="#0000ff" />
                            // animating={props.showAct}
                        ) : null}
                        {props.show ? (
                            <View>
                                <Image
                                    // source={{ uri: "https://firebasestorage.googleapis.com/v0/b/my-project-fc5b2.appspot.com/o/images%2Ftest2%40gmail.com2?alt=media&token=9ad6f93c-c954-4362-be03-94fb5959abc5" }}
                                    source={require('../../resource/job1.png')}
                                    style={{ width: 120, height: 100 }}
                                    resizeMode={'center'}
                                />
                                <Text style={{ marginTop: 10, fontSize: 12, color: "#ff7200", textAlign: "center" }}> รับงานซ่อมกับ Car Supp </Text>
                            </View>
                        ) : null}
                        {/* //////////////////หมุนๆ//////////////// */}

                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2,backgroundColor: "#eeddc1", borderWidth: 1, borderColor: "black", alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => {
                            // props.navigation.navigate('List');
                            props.golist();
                        }}
                        style={{ flex:1,justifyContent:"center",alignItems:"center" }}
                    >


                        {/* //////////////////หมุนๆ//////////////// */}
                        {props.showAct2 ? (
                            <ActivityIndicator size="large" color="#0000ff" />
                            // animating={props.showAct}
                        ) : null}
                        {props.show2 ? (
                            <View>
                                <Image
                                    source={require('../../resource/job2.png')}
                                    style={{ width: 120, height: 100 }}
                                    resizeMode={'center'}
                                />
                                <Text style={{ marginTop: 10, fontSize: 12, color: "#ff7200", textAlign: "center" }}> งานที่รับซ่อม </Text>
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
