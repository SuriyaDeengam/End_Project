// /**
//  *	Working container
//  */


import * as React from 'react';
import { Button, Image, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

import * as firebase from 'firebase';
export default class How extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount() {
        const { navigation } = this.props;
        namecase = navigation.getParam('item');
        // console.log(namecase);
        namegarage = "";
        nameuser = "";
        detail = "";
        price = "";
        travel = "";
        const dbh = firebase.firestore();
        const conf = dbh.collection("Project/work/second")
        try {
            conf.doc(namecase).onSnapshot(function (doc) {
                namegarage = doc.data().namegarage;
                detail = doc.data().detail;
                price = doc.data().price;
                travel = doc.data().travel;
                nameuser = doc.data().nameuser;
                kmtime = doc.data().kmtime;
                // console.log(namegarage,detail,price,travel);
                
            })
        } catch (error) {
            console.log(error)
        }

        setTimeout(() => {

            this.props.navigation.navigate('Detail', {
                namegarage: namegarage,
                detail: detail,
                price: price,
                travel: travel,
                namecase:namecase,
                nameuser:nameuser,
                kmtime:kmtime,
            })
        }, 3000);
    }
    render() {
        return (
            <View style={{ flex: 1,justifyContent:'center',alignContent:'center', backgroundColor: "white" }}>

                <ActivityIndicator size="large" ></ActivityIndicator>
            </View>
        );
    }

    _setState = (obj) => {
        this.setState(obj)
    }
}
export const { width, height } = Dimensions.get('window');