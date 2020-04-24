// /**
//  *	Working container
//  */


import * as React from 'react';
import { Button, Image, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
var a = "test";

///////////////close alert////////////////////////
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};
///////////////close alert////////////////////////

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: firebase.auth().currentUser.email,
        };
    }
    componentWillMount() {
        // setTimeout(() => {


        // this.test()
        // const dbh = firebase.firestore();
        // var docRef = dbh.collection("Project/Account/technician").doc("a6@gmail.com");

        // docRef.onSnapshot(function (doc) {
        //     a= doc.data();
        //     console.log("Current data: ",a);
        // });
        // console.log("Current data: ",a);
        //     console.log("1....");
        // }, 10000);
        // console.log("2....");
        // docRef.get().then(function (doc) {
        //     if (doc.exists) {
        //         mem = doc.data().fname;
        //         //  this.state.test = doc.data().fname;
        //         console.log("Document data:", mem);
        //     } else {
        //         console.log("No such document!");
        //     }
        //     // this.state.test = mem;
        //     // console.log(this.state.test);

        // }).catch(function (error) {
        //     console.log("Error getting document:", error);
        // });
    }
    // test = () =>{
    //     const dbh = firebase.firestore();
    //     var docRef = dbh.collection("Project/Account/technician").doc("a6@gmail.com");

    //     docRef.onSnapshot(function (doc) {
    //         a= doc.data();
    //         console.log("Current data: ",a);
    //     });
    // }
    render() {

        const { navigation } = this.props;
        const firstname = navigation.getParam('firstname');
        const lastname = navigation.getParam('lastname');
        const phone = navigation.getParam('phone');
        const nameg = navigation.getParam('nameg');

        

        // console.log("a = ", a)
        return (
            <View style={{ flex: 1, backgroundColor: "#eeddc1" }}>
                {/* //////////////////header bar////////////////////// */}
                <View style={{ height: 40, backgroundColor: "#8B4726", flexDirection: "row" }}>
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
                            INFORMATION
                            {/* {firstname} */}
                        </Text>
                    </View>
                    <View style={{ flex: 3 }}>

                    </View>
                </View>

                {/* //////////////////header bar////////////////////// */}
                <View style={{ backgroundColor: "#eeddc1" }}>
                    <View style={{ flex: 1, marginTop: 10, marginLeft: '5%', }}>
                        <Text style={{ color: "#707070", fontSize: 20, textAlign: 'left' }}>
                            ชื่อ
                            </Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 2, borderBottomColor: "gray", marginRight: '5%', marginLeft: '5%', marginTop: 40, flexDirection: 'row', }}>
                    {/* <View style={{ flex: 3 }}>
                        <Image
                            source={require('../../resource/check.png')}
                            style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                        />
                    </View> */}
                    <Text style={{ color: "black", fontSize: 20, marginBottom: 9 }}>
                        {firstname}
                    </Text>
                </View>

                <View style={{ backgroundColor: "#eeddc1" }}>
                    <View style={{ flex: 1, marginTop: 10, marginLeft: '5%', }}>
                        <Text style={{ color: "#707070", fontSize: 20, textAlign: 'left' }}>
                            นามสกุล
                            </Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 2, borderBottomColor: "gray", marginRight: '5%', marginLeft: '5%', marginTop: 40, flexDirection: 'row', }}>
                    {/* <View style={{ flex: 3 }}>
                        <Image
                            source={require('../../resource/check.png')}
                            style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                        />
                    </View> */}
                    <Text style={{ color: "black", fontSize: 20, marginBottom: 9 }}>
                        {lastname}
                    </Text>
                </View> 
                <View style={{ backgroundColor: "#eeddc1" }}>
                    <View style={{ flex: 1, marginTop: 10, marginLeft: '5%', }}>
                        <Text style={{ color: "#707070", fontSize: 20, textAlign: 'left' }}>
                            ชื่ออู่
                            </Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 2, borderBottomColor: "gray", marginRight: '5%', marginLeft: '5%', marginTop: 40, flexDirection: 'row', }}>
                    {/* <View style={{ flex: 3 }}>
                        <Image
                            source={require('../../resource/check.png')}
                            style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                        />
                    </View> */}
                    <Text style={{ color: "black", fontSize: 20, marginBottom: 9 }}>
                        {nameg}
                    </Text>
                </View>

                <View style={{ backgroundColor: "#eeddc1" }}>
                    <View style={{ flex: 1, marginTop: 10, marginLeft: '5%', }}>
                        <Text style={{ color: "#707070", fontSize: 20, textAlign: 'left' }}>
                            Email
                            </Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 2, borderBottomColor: "gray", marginRight: '5%', marginLeft: '5%', marginTop: 40, flexDirection: 'row', }}>
                    {/* <View style={{ flex: 3 }}>
                        <Image
                            source={require('../../resource/check.png')}
                            style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                        />
                    </View> */}
                    <Text style={{ color: "black", fontSize: 20, marginBottom: 9 }}>
                        {firebase.auth().currentUser.email}
                    </Text>
                </View>

                <View style={{ backgroundColor: "#eeddc1" }}>
                    <View style={{ flex: 1, marginTop: 10, marginLeft: '5%', }}>
                        <Text style={{ color: "#707070", fontSize: 20, textAlign: 'left' }}>
                            tel.
                            </Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 2, borderBottomColor: "gray", marginRight: '5%', marginLeft: '5%', marginTop: 40, flexDirection: 'row', }}>
                    {/* <View style={{ flex: 3 }}>
                        <Image
                            source={require('../../resource/check.png')}
                            style={{ resizeMode: 'stretch', height: 20, width: 20, marginTop: '30%' }}
                        />
                    </View> */}
                    <Text style={{ color: "black", fontSize: 20, marginBottom: 9 }}>
                        {phone}
                    </Text>
                </View>
{/* 
                <Text>{lastname}</Text>
                <Text>{phone}</Text>
                <Text>{this.state.email}</Text> */}
            </View>
        );
    }

    _setState = (obj) => {
        this.setState(obj)
    }
}
export const { width, height } = Dimensions.get('window');