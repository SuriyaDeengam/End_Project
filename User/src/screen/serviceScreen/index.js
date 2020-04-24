import React from 'react';
import { View, Text, Dimensions, SectionList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Service = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#e7e1da" }}>
            <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                {/* บนซ้าย */}
                <View style={{ flex: 3 }}>
                </View>
                {/* กลาง */}
                <View style={{ flex: 18 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                        SERVICE
                    </Text>
                </View>
                {/* บนขวา */}
                <View style={{ flex: 3 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => { props.navigation.navigate('Home') }}
                    >
                        <Image
                            source={require('../../resource/home-white.png')}
                            style={{ margin: 5, height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* //////////////////header bar////////////////////// */}
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {props.nothave ? (
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                        <Image
                            source={require('../../resource/empty.png')}
                            style={{ width: 200, height: 200 }}
                            resizeMode={'center'}
                        />
                    </View>
                ) : null}
                {props.have ? (
                    <SectionList
                        sections={aa}
                        renderItem={({ item }) =>
                            <Text style={styles.item}>{item}</Text>

                        }

                        renderSectionHeader={({ section }) =>
                            <TouchableOpacity
                                style={{ backgroundColor: "#ffbf6b" }}
                                onPress={() => { props.navigation.navigate('detialinfo', { item: section.title, aa: aa }) }}
                            >
                                <Text style={styles.sectionHeader}>{section.title}</Text>

                            </TouchableOpacity>}
                        keyExtractor={(item, index) => index}
                    />

                ) : null}

            </ScrollView>
            <TouchableOpacity
                style={{ backgroundColor: "red", height: 40 }}
                onPress={() => { 
                    props.cancle() 
                }}
            >
                <View style={{ marginTop: 10 }}>
                    <Text style={{ textAlign: "center", fontSize: 15, color: "white" }}>
                        ยกเลิกการแจ้งซ่อม
                        </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ backgroundColor: "blue", height: 40 }}
                onPress={() => { 
                    props.navigation.navigate('reload')
                }}
            >
                <View style={{ marginTop: 10 }}>
                    <Text style={{ textAlign: "center", fontSize: 15, color: "white" }}>
                        Refresh
                        </Text>
                </View>
            </TouchableOpacity>
        </View>

    )

};
export const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        marginTop: 9,
        marginBottom: 9,
        fontSize: 22,
        fontWeight: 'bold',
        color: "#fff",
        backgroundColor: '#ffbf6b',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})
export default Service;
