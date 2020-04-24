/**
 *	Myjob container
 */

import React from 'react';
import Myjob from '../../screen/myjobScreen';
import * as firebase from 'firebase';
var Alat = 0;
var Along = 0;

class myjobContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: firebase.auth().currentUser.email,
		};
	}
	componentDidMount() {
        const dbh = firebase.firestore();
        var docRef = dbh.collection("Project/Account/technician").doc("test1@gmail.com");

        docRef.onSnapshot(function (doc) {
            Alat= doc.data().Alat;
            Along= doc.data().Along;
        });
    }
    t1 = () => {
        setTimeout(() => { 
        this.props.navigation.navigate('maps',  { Alat: Alat, Along: Along}) 
    }, 3000);
    }
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		return (
			<Myjob
				t1={this.t1}
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default myjobContainer;
