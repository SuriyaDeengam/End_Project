// /**
//  *	Working container
//  */


import * as React from 'react';
import { Button, Image, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

namecase="";
aa="";
aa2="";
export default class Working extends React.Component {
    constructor(props) {
        super(props);
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

    endwork(){
        const dbh = firebase.firestore();
		dbh.collection("Project/work/second").doc(namecase).set({
            step1: "4",
            status:"0",
        }, { merge: true });
        dbh.collection("Project/work/wait").doc(namecase).set({
			status: "0",
        }, { merge: true });
        setTimeout(() => {

            this.props.navigation.navigate('Home')
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
                        source={require('../../resource/loading.png')}
                        style={{ resizeMode: 'stretch', marginTop: 60, height: 200, width: 200 }}
                    />

                    <TouchableOpacity
                        style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "#91dd3e", marginTop: 80, height: 40, width: 300 }}
                        onPress={() => { this.endwork()}}
                    >
                        <View style={{}}>
                            <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
                                เสร็จสิ้นการทำงาน
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
        );
    }

    _setState = (obj) => {
        this.setState(obj)
    }
}
export const { width, height } = Dimensions.get('window');