import React from 'react';
import { StyleSheet, Text, ActivityIndicator, View, SectionList, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as firebase from 'firebase';

a = [];
b = 0;
aa = []
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }
    componentWillMount() {

        const dbh = firebase.firestore();
        var docRef = dbh.collection("Project/Account/user").doc(firebase.auth().currentUser.email);
        nameuser = ""
        docRef.onSnapshot(function (doc) {
            nameuser = doc.data().fname + " " + doc.data().lname;
            // console.log(nameuser);
            // return null;
        });

        setTimeout(() => {

            a = [];
            b = 0;
            aa = [];
            /////////add array doc///////////////////////////////.where("ok", "==", true)
            dbh.collection("Project/work/second").where("status","==","1").where("nameuser","==",nameuser).get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    a[b] = doc.id;
                    aa[b] = { title: doc.id, data: [] };
                    b = b + 1;
                });
                // Alert.alert(b);
            });

            ////////add data///////////////////////////////////
            setTimeout(() => {
                const dbh = firebase.firestore();
                for (let index = 0; index < aa.length; index++) {
                    c = "";
                    var docRef = dbh.collection("/Project/work/second").doc(aa[index].title);
                    docRef.onSnapshot(function (doc) {
                        c = doc.data().namegarage;
                        aa[index] = { title: aa[index].title, data: ["ชื่ออู่ : " + c] };
                    });
                }
            }, 3000);

            setTimeout(() => {
                // Alert.alert(aa);

                this.props.navigation.navigate('Service', { aa: aa })
            }, 4500);
        }, 2000);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#5ead97", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
}




