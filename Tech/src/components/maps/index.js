import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import * as firebase from 'firebase';
import Geolocation from 'react-native-geolocation-service';


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 13.1217854;
const LONGITUDE = 100.9158936;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;
latt = "";
longg = "";
function log(eventName, e) {
  console.log(eventName, e.nativeEvent.coordinate);
  latt = e.nativeEvent.coordinate.latitude;
  longg = e.nativeEvent.coordinate.longitude;

  const dbh = firebase.firestore();
  // console.log('email is ',this.state.email);
  dbh.collection("Project/Account/technician").doc(firebase.auth().currentUser.email).update({
    lat: latt,
    long: longg,
  })

  console.log(latt, longg);

}

class MarkerTypes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: {
        latitude: LATITUDE + SPACE,
        longitude: LONGITUDE + SPACE,
      },
    };
  }
  componentWillMount() {
    // Instead of navigator.geolocation, just use Geolocation.
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }

  test() {

    console.log(this.state.a.latitude, this.state.a.longitude);

  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker
            coordinate={this.state.a}
            // onSelect={e => log('onSelect', e)}
            // onDrag={e => log('onDrag', e)}
            // onDragStart={e => log('onDragStart', e)}
            onDragEnd={e => log('onDragEnd', e)}
            // onPress={e => log('onPress', e)}
            draggable
          >
          </Marker>

        </MapView>
      </View>
    );
  }
}

MarkerTypes.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MarkerTypes;