import React, { useRef, useState, useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_API } from '@env';
import MapViewDirections from 'react-native-maps-directions';
import Constants from 'expo-constants';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 40.76711,
  longitude: -73.979704,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

// Dark mode map style
const DARK_MODE_STYLE =
  [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "white"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "white"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#424242"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#bdb76b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "green"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#008b8b"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#bdb76b"
        }
      ]
    }
  ]


function InputAutocomplete({ label, placeholder, onPlaceSelected }) {
  return (
    <View style={styles.autocompleteWrapper}>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{
          container: styles.autocompleteContainer,
          textInput: styles.input,
          listView: styles.autocompleteListView,
        }}
        placeholder={placeholder || ''}
        fetchDetails
        onPress={(_data, details = null) => {
          onPlaceSelected(details);
        }}
        query={{
          key: GOOGLE_MAP_API,
          language: 'en',
        }}
      />
    </View>
  );
}

export default function MapScreen() {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const mapRef = useRef(null);
  const navigation = useNavigation(); 


  useEffect(() => {
    if (origin && destination) {
      fetchDistance();
    }
  }, [origin, destination]);
  useEffect(() => {
    if (clickCount === 2) {
      navigation.navigate('ridetaker');
    }
  }, [clickCount])

  const moveTo = async (position) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
  };

  const edgePaddingValue = 70;

  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  };

  const fetchDistance = async () => {
    try {
      const originStr = `${origin.latitude},${origin.longitude}`;
      const destinationStr = `${destination.latitude},${destination.longitude}`;
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originStr}&destinations=${destinationStr}&key=${GOOGLE_MAP_API}`
      );
      const distanceData = response.data.rows[0].elements[0];
      setDistance(distanceData.distance.value / 1000); // Convert meters to kilometers
      setDuration(distanceData.duration.value / 60); // Convert seconds to minutes
    } catch (error) {
      console.error('Error fetching distance:', error);
    }
  };

  const traceRouteOnReady = (args) => {
    if (args) {
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };

  const traceRoute = () => {
    if (origin && destination) {
      setShowDirections(true);
      mapRef.current?.fitToCoordinates([origin, destination], { edgePadding });
    }
    setClickCount((prev) => prev + 1);
  };

  const onPlaceSelected = (details, flag) => {
    const set = flag === 'origin' ? setOrigin : setDestination;
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };
    set(position);
    moveTo(position);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
    >
      <View style={styles.infoContainer}>
        <Image source={require('../../assets/image.png')} style={styles.logo} />
        <Text style={styles.text}>𝓘𝓽𝓼 𝓽𝓲𝓶𝓮 𝓽𝓸 𝓽𝓻𝓪𝓿𝓮𝓵</Text>
        <InputAutocomplete
          label=""
          placeholder="Search origin"

          onPlaceSelected={(details) => {
            onPlaceSelected(details, 'origin');
          }}
        />
        <InputAutocomplete
          label=""
          placeholder="Search destination"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, 'destination');
          }}
        />
        <TouchableOpacity style={styles.button} onPress={traceRoute}>
          <Text style={styles.buttonText}>Trace route</Text>
        </TouchableOpacity>
      </View>

      {distance && duration ? (
        <View style={styles.dist}>
          <Text style={styles.color}>Distance: {distance.toFixed(2)} km</Text>
          <Text style={styles.text1}>Duration: {Math.ceil(duration)} min</Text>
        </View>
      ) : null}

      <View style={styles.mapContainer}>
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_POSITION}
          customMapStyle={DARK_MODE_STYLE} // Apply dark mode style
        >
          {origin && <Marker coordinate={origin} />}
          {destination && <Marker coordinate={destination} />}
          {showDirections && origin && destination && (
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_MAP_API}
              strokeColor="#00ff7f"
              strokeWidth={6}
              onReady={traceRouteOnReady}
            />
          )}
        </MapView>
        {distance > 0 && (
          <View style={styles.distanceOverlay}>
            <Text style={styles.distanceText}>Distance: {distance.toFixed(2)} km</Text>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  mapContainer: {
    flex: 1,
    zIndex: 0,
    //borderWidth: 2,
    borderColor: '#fff',
    elevation: 4,
    position: 'relative',
    width: '100%'

  },
  map: {
    width: width,
    height: height / 1.5,
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
    height: height / 2.3,
  },
  logo: {
    width: 190,
    height: 80,
    alignSelf: 'center',
  },
  autocompleteWrapper: {
    position: 'relative',
  },
  autocompleteContainer: {
    position: 'relative',
    width: '100%',
    marginVertical: 20,
    zIndex: 1,
  },
  input: {
    borderColor: '#b0c4de',
    borderWidth: 3,
    marginBottom: 1,
  },
  autocompleteListView: {
    position: 'absolute',
    top: 50,
    zIndex: 2,
  },
  button: {
    backgroundColor: '#b0c4de',
    paddingVertical: 12,
    marginVertical: 50,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
  },
  text: {
    fontSize: 25,
    fontStyle: 'italic',
    marginLeft: 90,
    color: '#00ff00',
  },
  dist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  text1: {
    color: '#00ff00',
  },
  distanceOverlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
    zIndex: 2,

  },
  distanceText: {
    color: '#b0c4de',
    fontSize: 16,
  },
});
