import React from 'react';
import { View, Text, ScrollView, Dimensions, SectionList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const List = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#eeddc1" }}>
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
                        JOB LIST
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
                        style={{ height: 40, width: width / 2, backgroundColor: "#707070", alignItems: 'center', justifyContent: 'center' }}
                    // onPress={() => { props.navigation.navigate('Home') }}
                    >
                        <Text style={{ color: "#e4e4e4", fontSize: 20 }}>ติดต่อลูกค้า</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        style={{ height: 40, width: width / 2, backgroundColor: "#e4e4e4", alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => { props.navigation.navigate('Inlist', { aa: props.aa, aa2: props.aa2 }) }}
                    >
                        <Text style={{ color: "#707070", fontSize: 20 }}>ดำเนินงาน</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <SectionList
                    sections={aa}
                    renderItem={({ item }) =>
                        <Text style={styles.item}>{item}</Text>

                    }

                    renderSectionHeader={({ section }) =>
                        <TouchableOpacity
                            style={{ marginBottom: 5 }}
                            onPress={() => { props.navigation.navigate('Chat', { namecase: section.title }) }}
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
export default List;
