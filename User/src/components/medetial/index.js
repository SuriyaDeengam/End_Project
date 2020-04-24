// /**
//  *	Addline container
//  */


import * as React from 'react';
import { Button, Image, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

export default class Medetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            tel:"",
        };
    }
    componentWillMount() {
        const dbh = firebase.firestore();
        var docRef = dbh.collection("Project/Account/user").doc(firebase.auth().currentUser.email);
        fname = "";
        phone = "";
        lname = "";
        docRef.onSnapshot(function (doc) {
            fname = doc.data().fname ;
            lname = doc.data().lname;
            phone = doc.data().phone;
            // console.log(nameuser);
        });
        setTimeout(() => {
            this.setState({ fname: fname })
            this.setState({ lname: lname })
            this.setState({ phone: phone })
        }, 1500)
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#e7e1da" }}>
                {/* //////////////////header bar////////////////////// */}
                <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                    <View style={{ flex: 3 }}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => { this.props.navigation.navigate('Me') }}
                        >
                            <Image
                                source={require('../../resource/back-white.png')}
                                style={{ margin: 5, resizeMode: 'stretch', marginLeft: 10, height: 30, width: 20 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 15 }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                            ข้อมูลบัญชีผู้ใช้
                    </Text>
                    </View>
                    <View style={{ flex: 3 }}>

                    </View>
                </View>

                {/* //////////////////header bar////////////////////// */}

                <View style={{ backgroundColor: "#e7e1da" }}>
                    <View style={{ flex: 1, marginTop: 10, marginLeft: '5%', }}>
                        <Text style={{ color: "#707070", fontSize: 20, textAlign: 'left' }}>
                            ชื่อ
                            </Text>
                    </View>
                </View>
                <View style={{borderBottomWidth:2,borderBottomColor:"gray", marginRight: '5%', marginLeft: '5%', marginTop: 40, flexDirection: 'row', }}>
                    {/* <View style={{ flex: 3 }}>
                        <Image
                            source={require('../../resource/check.png')}
                            style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                        />
                    </View> */}
                    <Text style={{ color: "black", fontSize: 20, marginBottom:9 }}>
                        {this.state.fname}
                    </Text>
                </View>

                <View style={{ backgroundColor: "#e7e1da" }}>
                    <View style={{ flex: 1, marginTop: 10, marginLeft: '5%', }}>
                        <Text style={{ color: "#707070", fontSize: 20, textAlign: 'left' }}>
                            นามสกุล
                            </Text>
                    </View>
                </View>
                <View style={{borderBottomWidth:2,borderBottomColor:"gray", marginRight: '5%', marginLeft: '5%', marginTop: 40, flexDirection: 'row', }}>
                    {/* <View style={{ flex: 3 }}>
                        <Image
                            source={require('../../resource/check.png')}
                            style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                        />
                    </View> */}
                    <Text style={{ color: "black", fontSize: 20, marginBottom:9 }}>
                        {this.state.lname}
                    </Text>
                </View>

                <View style={{ backgroundColor: "#e7e1da" }}>
                    <View style={{ flex: 1, marginTop: 10, marginLeft: '5%', }}>
                        <Text style={{ color: "#707070", fontSize: 20, textAlign: 'left' }}>
                            Email
                            </Text>
                    </View>
                </View>
                <View style={{borderBottomWidth:2,borderBottomColor:"gray", marginRight: '5%', marginLeft: '5%', marginTop: 40, flexDirection: 'row', }}>
                    {/* <View style={{ flex: 3 }}>
                        <Image
                            source={require('../../resource/check.png')}
                            style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                        />
                    </View> */}
                    <Text style={{ color: "black", fontSize: 20, marginBottom:9 }}>
                        {firebase.auth().currentUser.email}
                    </Text>
                </View>

                <View style={{ backgroundColor: "#e7e1da" }}>
                    <View style={{ flex: 1, marginTop: 10, marginLeft: '5%', }}>
                        <Text style={{ color: "#707070", fontSize: 20, textAlign: 'left' }}>
                            tel.
                            </Text>
                    </View>
                </View>
                <View style={{borderBottomWidth:2,borderBottomColor:"gray", marginRight: '5%', marginLeft: '5%', marginTop: 40, flexDirection: 'row', }}>
                    {/* <View style={{ flex: 3 }}>
                        <Image
                            source={require('../../resource/check.png')}
                            style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                        />
                    </View> */}
                    <Text style={{ color: "black", fontSize: 20, marginBottom:9 }}>
                        {this.state.phone}
                    </Text>
                </View>


            </View>
        );
    }

    _setState = (obj) => {
        this.setState(obj)
    }
}
export const { width, height } = Dimensions.get('window');