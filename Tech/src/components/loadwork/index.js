import React from 'react';
import { StyleSheet, Text, ActivityIndicator, View, Image, SectionList, TouchableOpacity, Alert } from 'react-native';
import * as firebase from 'firebase';

namecase = "";
nameuser = "";
step1 = "";
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }
    componentWillMount() {
        const { navigation } = this.props;
        aa = navigation.getParam('aa');
        this.setState({ aa: aa })
        aa2 = navigation.getParam('aa2');
        this.setState({ aa2: aa2 })
        namecase = navigation.getParam('item');
        console.log(namecase);

        const dbh = firebase.firestore();
        var docRef = dbh.collection("Project/work/second").doc(namecase);
        docRef.onSnapshot(function (doc) {
            step1 = parseFloat(doc.data().step1);
            nameuser = doc.data().nameuser;

            console.log("nameuser data: ", nameuser);
            console.log("Current data: ", step1);
        });
        setTimeout(() => {

            if (step1 == 1) {
                this.props.navigation.navigate('working', { namecase: namecase, aa: aa, aa2: aa2 })
            }
            if (step1 == 2) {
                var docRef = dbh.collection("Project/work/first").doc(nameuser);
                latuser = 0;
                longuser = 0;
                docRef.onSnapshot(function (doc) {
                    latuser = parseFloat(doc.data().lat);
                    longuser = parseFloat(doc.data().long);
                    console.log("Current data: ", step1);
                });
                setTimeout(() => {
                    // console.log(latuser, longuser);
                    
                    this.props.navigation.navigate('mapchung', { latuser: latuser, longuser: longuser, nameuser: nameuser, namecase: namecase, aa: aa, aa2: aa2 })
                }, 2000);
            }
            if (step1 == 3) {
                console.log("work ", step1);
                this.props.navigation.navigate('inwork', { namecase: namecase, aa: aa, aa2: aa2 })
            }
            // if (step1 == 4) {
            //     console.log("end ", step1);
            // }
        }, 3000);
    }
    render() {
        return (
            <ActivityIndicator size="large" color="#0000ff" />
        )
    }
}