/**
 *	Create container
 */

import React from 'react';
import Me from '../../screen/meScreen';
import { Alert } from 'react-native';
import * as firebase from 'firebase';


var firstname = "firstname";
var lastname = "lastname";
var phone = "phone";
var confirm = null;
var nameg = null;

h = 0;
his = []
ag1 = null;
ag2 = null;
eva = null;
class CreateContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: firebase.auth().currentUser.email,
            test: "test",
        };
    }

    componentWillMount() {
        const dbh = firebase.firestore();
        var docRef = dbh.collection("Project/Account/technician").doc(this.state.email);

        docRef.onSnapshot(function (doc) {
            firstname = doc.data().fname;
            lastname = doc.data().lname;
            phone = doc.data().phone;
            confirm = doc.data().confirm;
            nameg = doc.data().nameg
            console.log("Current data: ", nameg);
        });
    }


    gohistory() {
        h = 0;
        his = [];
        /////////add array doc///////////////////////////////.where("ok", "==", true)
        const dbh = firebase.firestore();
        dbh.collection("/Project/work/history").where("emailchung", "==", firebase.auth().currentUser.email).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                his[h] = { title: doc.id, data: [] };
                h = h + 1;
            });
        });

        ///add data///////////////////////////////////
        setTimeout(() => {
            const dbh = firebase.firestore();
            if (his.length != 0) {
                for (let index = 0; index < his.length; index++) {
                    var docRef = dbh.collection("/Project/work/history").doc(his[index].title);
                    docRef.get().then(function (doc) {
                        emailchung = doc.data().emailchung;
                        eva = doc.data().eva;
                        ag1 = doc.data().ag1;
                        ag2 = doc.data().ag2;
                        nameuser ="ชื่อลูกค้า : "+doc.data().nameuser;
                        his[index] = { title: his[index].title, data: [nameuser,eva, ag1, ag2] };
                        // Alert.alert(c)
                    });
                }
            }
        }, 2500);


        setTimeout(() => {
            console.log(his);
            // console.log();
            // console.log();
            // console.log();

            this.navigation.navigate('history', { his: his })
        }, 4000);
    }

    t1 = () => {
        // this.setState({ test: a });
        // Alert.alert("this.state.test",firstname);

        setTimeout(() => {
            if (confirm == "1") {
                this.props.navigation.navigate('info', { firstname: firstname, lastname: lastname, phone: phone, nameg: nameg })

            } else {
                Alert.alert("กรุณายืนยันตัวตนก่อน")
            }
        }, 3000);
    }
    ////////////////////////////////////////////////////
    check = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
                // console.log(firebase.auth().currentUser.email);
                // console.log(firebase.auth().currentUser.uid);
            } else {
                this.setState({ loggedIn: false });
                // console.log("no user");

            }
        });


    }
    ////////////////////////////////////////////////
    Out() {
        firebase.auth().signOut()
    }
    ////////////////////////////////////////////////
    _setState = (obj) => {
        this.setState(obj)
    }
    render() {
        // console.log(this.state.test);
        return (
            <Me
                gohistory={this.gohistory}
                email={this.state.email}
                Out={this.Out}
                t1={this.t1}
                popup={this.popup}
                setComponentState={this._setState}
                navigation={this.props.navigation}
            />
        );
    }
}

export default CreateContainer;
