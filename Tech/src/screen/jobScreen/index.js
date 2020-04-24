import React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, Image, SectionList, TouchableOpacity } from 'react-native';

const Job = (props) => {
    // aa=props.aa
    // console.log(props.aa);

    return (
        <View style={{ flex: 1, backgroundColor: "#eeddc1" }}>
            {/* //////////////////header bar////////////////////// */}
            <View style={{ height: 40, backgroundColor: "#8B4726", flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => { props.navigation.navigate('reloadjob') }}
                    >
                        <Image
                            source={require('../../resource/re.png')}
                            style={{ margin: 5, resizeMode: 'stretch', marginLeft: 10, height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 15 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                        JOB
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
            {/* <View style={{marginTop:5}}></View> */}
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <SectionList
                    sections={aa}
                    renderItem={({ item }) =>
                        <Text style={styles.item}>{item}</Text>

                    }

                    renderSectionHeader={({ section }) =>
                        <TouchableOpacity
                            onPress={() => { props.navigation.navigate('detialinfo', { item: section.title, aa: aa }) }}
                        >
                            <Text style={styles.sectionHeader}>{section.title}</Text>

                        </TouchableOpacity>}
                    keyExtractor={(item, index) => index}
                />


            </ScrollView>
        </View>
    )

};
export const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8B4726"
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 22,
        fontWeight: 'bold',
        color: "#fff",
        backgroundColor: '#8B4726',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})
export default Job;

{/* <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
    <View style={{ flex: 2 }}>
        <Image
            source={require('../../resource/chung1.png')}
            style={{ resizeMode: 'stretch', height: 50, width: 50 }}
        />
    </View>
    <View style={{ flex: 6 }}>
        <Text style={{ color: "#ff7200", fontSize: 20, marginTop: 15 }}> เครื่องยนต์ </Text>
    </View>
    <View style={{ flex: 4, backgroundColor: "#91dd3e" }}>
        <TouchableOpacity
            style={{ marginTop: 10, }}
            onPress={() => { props.navigation.navigate('Detail') }}
        >
            <Text style={{ color: "white", fontSize: 20, textAlign: 'center' }}>
                รายละเอียด
                            </Text>
        </TouchableOpacity>
    </View>
</View>
    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
        <View style={{ flex: 2 }}>
            <Image
                source={require('../../resource/chung1.png')}
                style={{ resizeMode: 'stretch', height: 50, width: 50 }}
            />
        </View>
        <View style={{ flex: 6 }}>
            <Text style={{ color: "#ff7200", fontSize: 20, marginTop: 15 }}> ระบบเบรค </Text>
        </View>
        <View style={{ flex: 4, backgroundColor: "#91dd3e" }}>
            <TouchableOpacity
                style={{ marginTop: 10, }}
                onPress={() => { props.navigation.navigate('Detail') }}
            >
                <Text style={{ color: "white", fontSize: 20, textAlign: 'center' }}>
                    รายละเอียด
                            </Text>
            </TouchableOpacity>
        </View>
    </View>
    <View style={{ marginTop: 15, marginRight: 15, marginLeft: 15, flexDirection: 'row' }}>
        <View style={{ flex: 2 }}>
            <Image
                source={require('../../resource/chung1.png')}
                style={{ resizeMode: 'stretch', height: 50, width: 50 }}
            />
        </View>
        <View style={{ flex: 6 }}>
            <Text style={{ color: "#ff7200", fontSize: 20, marginTop: 15 }}> น้ำมัน </Text>
        </View>
        <View style={{ flex: 4, backgroundColor: "#91dd3e" }}>
            <TouchableOpacity
                style={{ marginTop: 10, }}
                onPress={() => { props.navigation.navigate('Detail') }}
            >
                <Text style={{ color: "white", fontSize: 20, textAlign: 'center' }}>
                    รายละเอียด
                            </Text>
            </TouchableOpacity>
        </View>
    </View> */}