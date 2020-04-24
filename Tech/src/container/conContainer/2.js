import React from 'react';
import { Image, StyleSheet, Button,Dimensions, Text, View, Alert, } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
result1=null;
result2=null;
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            img1: null,
            img2: null,
        };
    }

    onChooseImagePress1 = async () => {
        result1 = await ImagePicker.launchImageLibraryAsync();
        //let result1 = await ImagePicker.launchImageLibraryAsync();
        console.log(result1.uri);
        this.setState({ img1: result1.uri })
    }
    uploadImage1 = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref = firebase.storage().ref().child("images/" + imageName);
        return ref.put(blob);
    }
    
    onChooseImagePress2 = async () => {
        result2 = await ImagePicker.launchImageLibraryAsync();
        //let result2 = await ImagePicker.launchImageLibraryAsync();
        console.log(result2.uri);
        this.setState({ img2: result2.uri })
    }
    uploadImage2 = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref = firebase.storage().ref().child("images/" + imageName);
        return ref.put(blob);
    }


    update= async () => {
        if (this.state.img1 != null) {
            this.uploadImage1(result1.uri, firebase.auth().currentUser.email + "1")
                .then(() => {
                    // Alert.alert("Success");
                })
                .catch((error) => {
                    Alert.alert(error);
                });
        }
        if (this.state.img2 != null) {
            this.uploadImage2(result2.uri, firebase.auth().currentUser.email + "2")
                .then(() => {
                    // Alert.alert("Success");
                })
                .catch((error) => {
                    Alert.alert(error);
                });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Button title="Choose image..." onPress={this.onChooseImagePress1} />
                <Button title="Choose image..." onPress={this.onChooseImagePress2} />
                <Button title="Choose image..." onPress={this.update} />
                {this.state.img1 &&
								<Image source={{ uri: this.state.img1 }} style={{ alignItems: 'center', marginTop: 5, width:120, height: 120 }} />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 50, alignItems: "center", },
});



// import React from 'react';
// import { Image, StyleSheet, Button, Text, View, Alert, } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as firebase from 'firebase';
// import { ThemeColors } from 'react-navigation';
// import { ThemeConsumer } from 'react-native-elements';

// export default class ConfirmContainer extends React.Component {
//     static navigationOptions = {
//         header: null,
//     }; 



//     onChooseImagePress = async () => {
//         let result = await ImagePicker.launchcameraAsync();

//         if (!result.cancelled) {
//             this.uploadimg(result.uri, "test1")
//             .then(() => {
//                 Alert.alert("succress");
//             })
//             .catch((error) => {
//                 Alert.alert(error);
//             })
//         }
//     }
//     uploadimg = async (uri, imagename) => {
//         const response = await fetch(uri);
//         const blob = await response.blob();

//         var ref = firebase.storage().ref().child("images/" + imagename);
//         return ref.put(blob);
//     }

//     render() {
//         return(
//             <View>
//                 <Button title="Image ..." onPress={this.onChooseImagePress}/>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: { flex: 1, paddingTop: 50, alignItems: "center",},
// });