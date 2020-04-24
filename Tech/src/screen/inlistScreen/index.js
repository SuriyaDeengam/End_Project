import React from 'react';
import { View, Text, ScrollView, Dimensions, SectionList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Inlist = (props) => {

    return (
        <View style={{flex:1,backgroundColor: "#eeddc1"}}>
            {/* //////////////////header bar////////////////////// */}
            <View style={{ height: 40, backgroundColor: "#8B4726", flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                {/* <TouchableOpacity activeOpacity={0.5}
                        onPress={() => { props.navigation.navigate('reloadlist') }}
                    >
                        <Image
                            source={require('../../resource/home-white.png')}
                            style={{ margin: 5, resizeMode: 'stretch', marginLeft: 10, height: 30, width: 30 }}
                        />
                    </TouchableOpacity> */}
                </View>
                <View style={{ flex: 15 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                        MY JOB
                    </Text>
                </View>
                <View style={{ flex: 3 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => { props.navigation.navigate('Home') }}
                    >
                        <Image
                            source={require('../../resource/home-white.png')}
                            style={{ margin: 5, resizeMode: 'stretch', marginLeft: 10, height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* //////////////////header bar////////////////////// */}
            <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        style={{ height: 40, width: width / 2, backgroundColor: "#e4e4e4", alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => { props.navigation.navigate('List',{aa:props.aa, aa2:props.aa2}) }}
                    >
                        <Text style={{ color: "#707070", fontSize: 20 }}>ติดต่อลูกค้า</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        style={{ height: 40, width: width / 2, backgroundColor: "#707070", alignItems: 'center', justifyContent: 'center' }}
                    // onPress={() => { props.navigation.navigate('Home') }}
                    >
                        <Text style={{ color: "#e4e4e4", fontSize: 20 }}>ดำเนินงาน</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <SectionList
                    sections={aa2}
                    renderItem={({ item }) =>
                        <Text style={styles.item}>{item}</Text>
                    }

                    renderSectionHeader={({ section }) =>
                        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#707070" }}>
                            <View style={{ flex: 7, backgroundColor: "#707070" }}>
                                <Text style={styles.sectionHeader}>{section.title}</Text>
                            </View>
                            <View style={{ marginTop:8,flex: 1, backgroundColor: "#707070" }}>
                                <TouchableOpacity
                                // style={{ width: width / 2, height: 40, backgroundColor: "#91dd3e", alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => { props.navigation.navigate('Chatinwork', { namecase: section.title }) }}
                                >
                                    {/* <Text style={{ fontSize: 22, fontWeight: 'bold', color: "#fff", }}>ทำงาน</Text> */}
                                    <Image
                                        source={require('../../resource/chat.png')}
                                        style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop:8,flex: 1, backgroundColor: "#707070" }}>
                                <TouchableOpacity
                                // style={{ width: width / 2, height: 40, backgroundColor: "#49a5fb", alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => { props.navigation.navigate('loadwork', { item: section.title, aa: aa, aa2: aa2 }) }}
                                >
                                    {/* <Text style={{ fontSize: 22, fontWeight: 'bold', color: "#fff", }}>chat กับลูกค้า</Text> */}

                                    <Image
                                        source={require('../../resource/go.png')}
                                        style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    keyExtractor={(item, index) => index}
                />
            </ScrollView>
            {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            source={require('../../resource/chung2.png')}
                            style={{ resizeMode: 'stretch', height: 50, width: 50 }}
                        />
                    </View>
                    <View style={{ flex: 7 }}>
                        <Text style={{ color: "#ff7200", fontSize: 20, marginTop: 15 }}> แบตเตอรี่ </Text>
                    </View>
                    <View style={{ flex: 3, flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ marginTop: 10, }}
                            onPress={() => { props.navigation.navigate('Chat') }}
                        >
                            <Image
                                source={require('../../resource/chat.png')}
                                style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginTop: 10, marginLeft: 15 }}
                            onPress={() => { props.navigation.navigate('working') }}
                        >
                            <Image
                                source={require('../../resource/go.png')}
                                style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View><View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            source={require('../../resource/chung2.png')}
                            style={{ resizeMode: 'stretch', height: 50, width: 50 }}
                        />
                    </View>
                    <View style={{ flex: 7 }}>
                        <Text style={{ color: "#ff7200", fontSize: 20, marginTop: 15 }}> หม้อน้ำ </Text>
                    </View>
                    <View style={{ flex: 3, flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ marginTop: 10, }}
                            onPress={() => { props.navigation.navigate('Chat') }}
                        >
                            <Image
                                source={require('../../resource/chat.png')}
                                style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginTop: 10, marginLeft: 15 }}
                            onPress={() => { props.navigation.navigate('working') }}
                        >
                            <Image
                                source={require('../../resource/go.png')}
                                style={{ resizeMode: 'stretch', height: 40, width: 40 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView> */}
        </View>
    )

};
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

export default Inlist;

