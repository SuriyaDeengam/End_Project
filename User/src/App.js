import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import StackNavigation from './Navigation'

import Constants from 'expo-constants';

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#ff7200",
        height: Constants.statusBarHeight,
    },

    // rest of the styles
});

export default class App extends React.Component {
    // componentDidMount() {
    //   StatusBar.setBarStyle('dark-content', true);
    // }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.statusBar} />
                <StackNavigation />
            </View>
        )
    }
}

