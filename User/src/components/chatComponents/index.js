// // // /**
// // //  *	Chat container
// // //  */



import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { KeyboardAvoidingView, Image, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

nameid = "";
export default class Example extends React.Component {
  state = {
    messages: [],
  }
  componentWillMount() {
    const { navigation } = this.props;
    namecase = navigation.getParam('namecase');
    console.log(namecase);

    const dbh = firebase.firestore();
    const conf = dbh.collection("Project/work/second")
    conf.doc(namecase).onSnapshot(function (doc) {
      nameid = doc.data().namechat
    })

    setTimeout(() => {
      console.log(nameid);
      const ref = firebase.database().ref('Chat/' + nameid + '/name');
      val = "";
      test1 = "";
      ref.on('value', snapshot => {
        val = snapshot.val();
        this.setState({ messages: val })

      });
    }, 2000)
  }


  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),

    }))
    setTimeout(() => {
      firebase.database().ref('Chat/' + nameid).update({
        name: this.state.messages,
      });

      cc = this.state.messages;
      for (let x = 0; x < cc.length; x++) {
        if (cc[x].user._id == 1) {

          cc[x].user._id = 2
          test1[x] = cc[x];

        }
        else if (cc[x].user._id == 2) {

          cc[x].user._id = 1
          test1[x] = cc[x];

        }

      }
      firebase.database().ref('Chat/' + nameid).update({
        messages: cc,
      });
    }, 500)

  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'space-between', }}>
        <View style={{ flex: 1, backgroundColor: "#e7e1da" }}>
          {/* //////////////////header bar////////////////////// */}
          <View style={{ height: 40, backgroundColor: "#8B4726", flexDirection: "row" }}>
            <View style={{ flex: 3 }}>
              <TouchableOpacity activeOpacity={0.5}
                onPress={() => { this.props.navigation.navigate('detialinfo', { item: namecase }) }}
              >
                <Image
                  source={require('../../resource/back-white.png')}
                  style={{ margin: 5, height: 30, width: 25 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 15 }}>
              <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
                Chat
                    </Text>
            </View>
            <View style={{ flex: 3 }}>

            </View>
          </View>

          {/* //////////////////header bar////////////////////// */}
          <View style={{ flex: 10 }}>
            <GiftedChat
              messages={this.state.messages}
              onSend={messages => this.onSend(messages)}
              user={{
                _id: 1,
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

