import React from 'react';
import { View, Text, Dimensions, Button, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

const Location = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#e7e1da" }}>
            <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
                {/* บนซ้าย */}
                <View style={{ flex: 3 }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => { props.navigation.navigate('Fix3') }}
                    >
                        <Image
                            source={require('../../resource/back-white.png')}
                            style={{ margin: 5, height: 30, width: 25 }}
                        />
                    </TouchableOpacity>
                </View>
                {/* กลาง */}
                <View style={{ flex: 18 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                        LOCATION
                    </Text>
                </View>
                {/* บนขวา */}
                <View style={{ flex: 3 }}>
                </View>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                
            </ScrollView>
        </View>

    )

};

export default Location;
