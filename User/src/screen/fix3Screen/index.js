// import React from 'react';
// import { View, Text, Dimensions, Button, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
// import { Constants, Video } from 'expo';

// const Fix3 = (props) => {

//     return (
//         <View style={{ flex: 1, backgroundColor: "white" }}>
//             <View style={{ height: 40, backgroundColor: "#ff7200", flexDirection: "row" }}>
//                 {/* บนซ้าย */}
//                 <View style={{ flex: 3 }}>
//                     <TouchableOpacity activeOpacity={0.5}
//                         onPress={() => { props.navigation.navigate('Fix1') }}
//                     >
//                         <Image
//                             source={require('../../resource/back-white.png')}
//                             style={{ margin: 5, height: 30, width: 25 }}
//                         />
//                     </TouchableOpacity>
//                 </View>
//                 {/* กลาง */}
//                 <View style={{ flex: 18 }}>
//                     <Text style={{ textAlign: "center", color: "white", fontSize: 25, marginTop: '1%' }}>
//                         {/* FIX */}
//                         {props.call}
//                     </Text>
//                 </View>
//                 {/* บนขวา */}
//                 <View style={{ flex: 3 }}>
//                 </View>
//             </View>
//             <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//                 <View style={{ marginTop: 10, marginRight: 10 }}>
//                     <Text style={{ marginTop: 10, marginLeft: '5%', color: "#ff7200", fontSize: 15 }}>
//                         รายละเอียดตำแหน่งที่อยู่เพิ่มเติมของคุณ
//                     </Text>
//                     <TextInput
//                         style={{ marginLeft: '5%', marginRight: '5%', fontSize: 12, width: 330, height: 100, backgroundColor: "#e8e8e8" }}
//                         onChangeText={(detailocation) => props.setComponentState({ detailocation })}
//                         value={props.detailocation}
//                         placeholder="กรุณากรอกรายละเอียดตำแหน่งเพิ่มเติมของคุณที่ชัดเจน"
//                         maxLength={200}
//                         multiline={true}
//                         keyboardType={'default'}>
//                     </TextInput>

//                 </View>
//                 <View style={{ marginTop: 10, marginRight: 10 }}>
//                     <Text style={{ marginTop: 10, marginLeft: '5%', color: "#ff7200", fontSize: 15 }}>
//                         รูปภาพเพิ่มเติม
//                     </Text>
//                     <View style={{ flex: 1, marginLeft: '5%', borderColor: "black", flexDirection: 'row' }}>
//                         <TouchableOpacity activeOpacity={0.5}
//                             //onPress={() =>  {props.navigation.navigate('Fix1');}}
//                             style={{ marginTop: '3%' }}
//                         >
//                             {/* <Video
//                                 ref={r => this.vid = r}
//                                 source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
//                                 rate={1.0}
//                                 volume={1.0}
//                                 muted={false}
//                                 resizeMode="cover"
//                                 repeat
//                                 style={{ width: 300, height: 300 }}
//                             /> */}
//                             {/* <Image
//                                 source={require('../../resource/plus.png')}
//                                 style={{ width: 120, height: 100 }}
//                                 resizeMode={'center'}
//                             /> */}
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 <View style={{ marginTop: 10, marginRight: 10 }}>
//                     <Text style={{ marginTop: 10, marginLeft: '5%', color: "#ff7200", fontSize: 15 }}>
//                         อัดเสียงอาการเพิ่มเติม
//                     </Text>
//                     <View style={{ flex: 1, marginLeft: '5%', borderColor: "black", flexDirection: 'row' }}>
//                         <TouchableOpacity activeOpacity={0.5}
//                             //onPress={() =>  {props.navigation.navigate('Fix1');}}
//                             style={{ marginTop: '3%' }}
//                         >
//                             <Image
//                                 source={require('../../resource/microphone.png')}
//                                 style={{ width: 120, height: 100 }}
//                                 resizeMode={'center'}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 {/* <TouchableOpacity
//                     style={{ backgroundColor: "#91dd3e", marginTop: '5%', marginLeft: '5%', marginRight: '5%', height: 40 }}
//                     // onPress={() => { props.onLogin() }}
//                     onPress={() => { props.navigation.navigate('Location') }}
//                 >
//                     <View style={{ marginTop: 10 }}>
//                         <Text style={{ textAlign: "center", fontSize: 15, color: "white" }}>
//                             ปักหมุดแผนที่ตำแหน่งของคุณ
//                         </Text>
//                     </View >
//                 </TouchableOpacity> */}
//                 <TouchableOpacity
//                     style={{ backgroundColor: "#49a5fb", marginLeft: '5%', marginRight: '5%', marginTop: '4%', height: 40 }}
//                     onPress={() => { props.navigation.navigate('Service') }}
//                 >
//                     <View style={{ marginTop: 10 }}>
//                         <Text style={{ textAlign: "center", fontSize: 15, color: "white" }}>
//                             ยืนยันการแจ้งซ่อม
//                         </Text>
//                     </View>
//                 </TouchableOpacity>
//             </ScrollView>
//         </View>

//     )

// };

// export default Fix3;
