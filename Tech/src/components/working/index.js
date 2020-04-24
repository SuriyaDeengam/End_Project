// // /**
// //  *	Working container
// //  */

import React from 'react';
import { StyleSheet, Text, ActivityIndicator, View, Image, SectionList, TouchableOpacity, Alert } from 'react-native';
import * as firebase from 'firebase';

namecase = "";
aa = "";
aa2 = "";
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


        namecase = navigation.getParam('namecase');
        console.log(namecase);
        // setTimeout(() => {

        //     this.props.navigation.navigate('loadwork', { item: section.title, aa: aa, aa2: aa2 })
        // }, 6000);
    }
    t1() {
        const dbh = firebase.firestore();
        dbh.collection("Project/work/second").doc(namecase).set({
            step1: "2",
            lat: 0,
            long: 0,
        }, { merge: true });

        setTimeout(() => {
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
        }, 2000);
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor: "#eeddc1"}}>
                {/* //////////////////header bar////////////////////// */}
                <View style={{ height: 40, backgroundColor: "#8B4726", flexDirection: "row" }}>
                    <View style={{ flex: 3 }}>

                    </View>
                    <View style={{ flex: 15 }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                            WORKING
                </Text>
                    </View>
                    <View style={{ flex: 3 }}>

                    </View>
                </View>

                {/* //////////////////header bar////////////////////// */}
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../../resource/map2.png')}
                        style={{ resizeMode: 'stretch', marginTop: 60, height: 200, width: 200 }}
                    />

                    <TouchableOpacity
                        style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "#91dd3e", marginTop: 80, height: 40, width: 300 }}
                        onPress={() => { this.t1() }}
                    >
                        <View style={{}}>
                            <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
                                ดูเส้นทาง
        </Text>

                        </View >
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "#707070", marginTop: 20, height: 40, width: 300 }}
                        onPress={() => { this.props.navigation.navigate('Inlist', { namecase: namecase, aa: aa, aa2: aa2 }) }}
                    >
                        <View style={{}}>
                            <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
                                Back to Joblist
        </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}









// import * as React from 'react';
// import { Button, Image, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
// import * as firebase from 'firebase';
// var Alat = 0;
// var Along = 0;
// export default class Working extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: firebase.auth().currentUser.email,
//         };
//     }
//     componentWillMount() {
//         const dbh = firebase.firestore();
//         var docRef = dbh.collection("Project/Account/technician").doc(this.state.email);

//         docRef.onSnapshot(function (doc) {
//             Alat = doc.data().Alat;
//             Along = doc.data().Along;
//         });
//     }
//     t1 = () => {
//         //     setTimeout(() => { 
//         //     this.props.navigation.navigate('mapchung',  { Alat: Alat, Along: Along}) 
//         // }, 3000);
//         this.props.navigation.navigate('mapchung')
//     }
//     render() {

//         return (
//             <View style={{ flex: 1, backgroundColor: "white" }}>
//                 {/* //////////////////header bar////////////////////// */}
//                 <View style={{ height: 40, backgroundColor: "#8B4726", flexDirection: "row" }}>
//                     <View style={{ flex: 3 }}>

//                     </View>
//                     <View style={{ flex: 15 }}>
//                         <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
//                             WORKING
//                     </Text>
//                     </View>
//                     <View style={{ flex: 3 }}>

//                     </View>
//                 </View>

//                 {/* //////////////////header bar////////////////////// */}
//                 <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                     <Image
//                         source={require('../../resource/map2.png')}
//                         style={{ resizeMode: 'stretch', marginTop: 60, height: 200, width: 200 }}
//                     />

//                     <TouchableOpacity
//                         style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "#91dd3e", marginTop: 80, height: 40, width: 300 }}
//                         onPress={() => { this.t1() }}
//                     >
//                         <View style={{}}>
//                             <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
//                                 ดูเส้นทาง
//             </Text>

//                         </View >
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "#707070", marginTop: 20, height: 40, width: 300 }}
//                         onPress={() => { this.props.navigation.navigate('Inlist') }}
//                     >
//                         <View style={{}}>
//                             <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
//                                 Back to Joblist
//             </Text>
//                         </View>
//                     </TouchableOpacity>
//                 </View>

//             </View>
//         );
//     }

//     _setState = (obj) => {
//         this.setState(obj)
//     }
// }
// export const { width, height } = Dimensions.get('window');