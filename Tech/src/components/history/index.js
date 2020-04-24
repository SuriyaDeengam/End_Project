// /**
//  *	Working container
//  */


import * as React from 'react';
import { View, Text, ScrollView, Dimensions, SectionList, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            his:"",
        };
        
    }
    componentWillMount() {
		const { navigation } = this.props;
		his = navigation.getParam('his');
		this.setState({ his: his })

	}
    render() {

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
                            HISTORY
                    </Text>
                    </View>
                    <View style={{ flex: 3 }}>

                    </View>
                </View>

                {/* //////////////////header bar////////////////////// */}

                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <SectionList
                    sections={this.state.his}
                    renderItem={({ item }) =>
                        <Text style={styles.item}>{item}</Text>
                    }

                    renderSectionHeader={({ section }) =>
                        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#eeddc1",borderBottomColor:"gray",borderBottomWidth:2,marginBottom:5 ,marginLeft:10,marginRight:10}}>
                            {/* <View style={{ flex: 7, backgroundColor: "#707070" }}>
                                <Text style={styles.sectionHeader}>
                                    {section.}
                                    
                                    </Text>
                            </View>
                            <View style={{ marginTop:8,flex: 1, backgroundColor: "#707070" }}>
                
                            </View> */}
                            
                        </View>
                    }
                    keyExtractor={(item, index) => index}
                />
            </ScrollView>

            </View>
        );
    }

    _setState = (obj) => {
        this.setState(obj)
    }
}
export const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#707070"
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 22,
        fontWeight: 'bold',
        color: "#fff",
        backgroundColor: '#707070',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})