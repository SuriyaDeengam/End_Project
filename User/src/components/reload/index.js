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
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
        this.state = {
        };
    }
    componentDidMount() {
        a = [];
        b = 0;
        aa = [];
        /////////add array doc///////////////////////////////.where("ok", "==", true)
        const dbh = firebase.firestore();
        dbh.collection("Project/work/second").where("status", "==", "1").where("nameuser", "==", nameuser).get().then(function (querySnapshot) {
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
                var docRef = dbh.collection("Project/work/second").doc(aa[index].title);
                docRef.get().then(function(doc) {
                    c = doc.data().namegarage;
                    kmtime = doc.data().kmtime;
                    aa[index] = { title: aa[index].title, data: ["ชื่ออู่ : " + c, kmtime] };
                });
            }
        }, 2000);

        setTimeout(() => {
            // Alert.alert(aa);
            this.props.navigation.navigate('Service', { aa: aa })
        }, 4500);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#e7e1da", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
}