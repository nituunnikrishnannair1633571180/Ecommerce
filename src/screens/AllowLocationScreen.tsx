// // src/screens/AllowLocationScreen.tsx

// import React, { useEffect } from 'react';
// import { View, Text, Button, Alert } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';
// import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

// type AllowLocationScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'AllowLocation'>;
// };

// const AllowLocationScreen: React.FC<AllowLocationScreenProps> = ({ navigation }) => {
//   useEffect(() => {
//     checkLocationPermission();
//   }, []);

//   const checkLocationPermission = async () => {
//     const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//     if (result === RESULTS.GRANTED) {
//       navigation.navigate('SelectLocation');
//     } else {
//       Alert.alert('Permission Denied', 'Location permission is required to continue.');
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>We need your permission to access location</Text>
//       <Button title="Grant Permission" onPress={checkLocationPermission} />
//     </View>
//   );
// };

// export default AllowLocationScreen;

// import React, { useEffect } from 'react';
// import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { RootStackParamList } from '../navigation/types';

// type AllowLocationScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'AllowLocation'>;
// };

// const AllowLocationScreen: React.FC<AllowLocationScreenProps> = ({ navigation }) => {
//   useEffect(() => {
//     checkLocationPermission();
//   }, []);

//   const checkLocationPermission = async () => {
//     const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//     if (result === RESULTS.GRANTED) {
//       navigation.navigate('SelectLocation');
//     } else {
//       Alert.alert('Permission Denied', 'Location permission is required to continue.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Icon name="location-on" size={80} color="#555" style={styles.icon} />
//       <Text style={styles.title}>What is Your Location?</Text>
//       <Text style={styles.subtitle}>
//         We need to know your location in order to suggest nearby services.
//       </Text>

//       <TouchableOpacity style={styles.allowButton} onPress={checkLocationPermission}>
//         <Text style={styles.buttonText}>Allow Location Access</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.manualButton}
//         onPress={() => navigation.navigate('SelectLocation')}
//       >
//         <Text style={styles.manualButtonText}>Enter Location Manually</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   // Style definitions
// });

// export default AllowLocationScreen;

// import React, { useEffect } from 'react';
// import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { RootStackParamList } from '../navigation/types';

// type AllowLocationScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'AllowLocation'>;
// };

// const AllowLocationScreen: React.FC<AllowLocationScreenProps> = ({ navigation }) => {
//   useEffect(() => {
//     checkLocationPermission();
//   }, []);

//   const checkLocationPermission = async () => {
//     const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//     if (result === RESULTS.GRANTED) {
//       navigation.navigate('SelectLocation');
//     } else {
//       Alert.alert('Permission Denied', 'Location permission is required to continue.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Icon name="location-on" size={80} color="#555" style={styles.icon} />
//       <Text style={styles.title}>What is Your Location?</Text>
//       <Text style={styles.subtitle}>
//         We need to know your location in order to suggest nearby services.
//       </Text>

//       <TouchableOpacity style={styles.allowButton} onPress={checkLocationPermission}>
//         <Text style={styles.buttonText}>Allow Location Access</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.manualButton}
//         onPress={() => navigation.navigate('SelectLocation')}
//       >
//         <Text style={styles.manualButtonText}>Enter Location Manually</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: 'gray',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   allowButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   manualButton: {
//     backgroundColor: 'lightgray',
//     padding: 10,
//     borderRadius: 5,
//   },
//   manualButtonText: {
//     color: 'black',
//     fontSize: 16,
//   },
// });

// export default AllowLocationScreen;

// import React, { useEffect, useState } from 'react';
// import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
// import Geolocation from 'react-native-geolocation-service';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { RootStackParamList } from '../navigation/types';

// type AllowLocationScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'AllowLocation'>;
// };

// const AllowLocationScreen: React.FC<AllowLocationScreenProps> = ({ navigation }) => {
//   const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);

//   useEffect(() => {
//     checkLocationPermission();
//   }, []);

//   const checkLocationPermission = async () => {
//     const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//     if (result === RESULTS.GRANTED) {
//       setLocationPermissionGranted(true);
//     } else {
//       setLocationPermissionGranted(false);
//       Alert.alert('Permission Denied', 'Location permission is required to continue.');
//     }
//   };

//   const handleAllowLocation = () => {
//     if (locationPermissionGranted) {
//       navigation.navigate('SelectLocation');
//     } else {
//       Alert.alert('Permission Denied', 'Please allow location access to proceed.');
//     }
//   };

//   const handleUseCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//         navigation.navigate('SelectLocation', { latitude, longitude });
//       },
//       (error) => {
//         Alert.alert('Error', 'Unable to fetch current location');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Icon name="location-on" size={80} color="#555" style={styles.icon} />
//       <Text style={styles.title}>What is Your Location?</Text>
//       <Text style={styles.subtitle}>
//         We need to know your location in order to suggest nearby services.
//       </Text>

//       <TouchableOpacity style={styles.allowButton} onPress={handleAllowLocation}>
//         <Text style={styles.buttonText}>Allow Location Access</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.manualButton} onPress={handleUseCurrentLocation}>
//         <Text style={styles.manualButtonText}>Use My Current Location</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.manualButton}
//         onPress={() => navigation.navigate('SelectLocation')}
//       >
//         <Text style={styles.manualButtonText}>Enter Location Manually</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   icon: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: 'gray',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   allowButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   manualButton: {
//     backgroundColor: 'lightgray',
//     padding: 10,
//     borderRadius: 5,
//   },
//   manualButtonText: {
//     color: 'black',
//     fontSize: 16,
//   },
// });

// export default AllowLocationScreen;

// import React, { useEffect, useState } from 'react';
// import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
// import Geolocation from 'react-native-geolocation-service';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { RootStackParamList } from '../navigation/types'; // Import your navigation types

// type AllowLocationScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'AllowLocation'>;
// };

// const AllowLocationScreen: React.FC<AllowLocationScreenProps> = ({ navigation }) => {
//   const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);

//   useEffect(() => {
//     checkLocationPermission();
//   }, []);

//   const checkLocationPermission = async () => {
//     const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//     if (result === RESULTS.GRANTED) {
//       setLocationPermissionGranted(true);
//     } else {
//       setLocationPermissionGranted(false);
//       Alert.alert('Permission Denied', 'Location permission is required to continue.');
//     }
//   };

//   const handleAllowLocation = () => {
//     if (locationPermissionGranted) {
//       navigation.navigate('SelectLocation');
//     } else {
//       Alert.alert('Permission Denied', 'Please allow location access to proceed.');
//     }
//   };

//   const handleUseCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//         navigation.navigate('SelectLocation', { latitude, longitude });
//       },
//       (error) => {
//         Alert.alert('Error', 'Unable to fetch current location');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Icon name="location-on" size={80} color="#555" style={styles.icon} />
//       <Text style={styles.title}>What is Your Location?</Text>
//       <Text style={styles.subtitle}>
//         We need to know your location in order to suggest nearby services.
//       </Text>

//       <TouchableOpacity style={styles.allowButton} onPress={handleAllowLocation}>
//         <Text style={styles.buttonText}>Allow Location Access</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.manualButton} onPress={handleUseCurrentLocation}>
//         <Text style={styles.manualButtonText}>Use My Current Location</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.manualButton}
//         onPress={() => navigation.navigate('SelectLocation')}
//       >
//         <Text style={styles.manualButtonText}>Enter Location Manually</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   icon: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: 'gray',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   allowButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   manualButton: {
//     backgroundColor: 'lightgray',
//     padding: 10,
//     borderRadius: 5,
//   },
//   manualButtonText: {
//     color: 'black',
//     fontSize: 16,
//   },
// });

// export default AllowLocationScreen;





// import React, { useEffect, useState } from 'react';
// import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
// import Geolocation from 'react-native-geolocation-service';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { RootStackParamList } from '../navigation/types';

// type AllowLocationScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'AllowLocation'>;
// };

// const AllowLocationScreen: React.FC<AllowLocationScreenProps> = ({ navigation }) => {
//   const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);

//   useEffect(() => {
//     checkLocationPermission();
//   }, []);

//   const checkLocationPermission = async () => {
//     const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//     if (result === RESULTS.GRANTED) {
//       setLocationPermissionGranted(true);
//     } else {
//       setLocationPermissionGranted(false);
//       Alert.alert('Permission Denied', 'Location permission is required to continue.');
//     }
//   };

//   const handleAllowLocation = () => {
//     if (locationPermissionGranted) {
//       navigation.navigate('SelectLocation');
//     } else {
//       Alert.alert('Permission Denied', 'Please allow location access to proceed.');
//     }
//   };

//   const handleUseCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         navigation.navigate('SelectLocation', { latitude, longitude });  // Passing parameters correctly
//       },
//       (error) => {
//         Alert.alert('Error', 'Unable to fetch current location');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Icon name="location-on" size={80} color="#555" style={styles.icon} />
//       <Text style={styles.title}>What is Your Location?</Text>
//       <Text style={styles.subtitle}>
//         We need to know your location in order to suggest nearby services.
//       </Text>

//       <TouchableOpacity style={styles.allowButton} onPress={handleAllowLocation}>
//         <Text style={styles.buttonText}>Allow Location Access</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.manualButton} onPress={handleUseCurrentLocation}>
//         <Text style={styles.manualButtonText}>Use My Current Location</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.manualButton}
//         onPress={() => navigation.navigate('SelectLocation')}
//       >
//         <Text style={styles.manualButtonText}>Enter Location Manually</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   icon: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: 'gray',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   allowButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   manualButton: {
//     backgroundColor: 'lightgray',
//     padding: 10,
//     borderRadius: 5,
//   },
//   manualButtonText: {
//     color: 'black',
//     fontSize: 16,
//   },
// });

// export default AllowLocationScreen;



// import React from 'react';
// import { View, Text, TouchableOpacity, Alert } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types'; // Adjust path as needed

// type AllowLocationScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'AllowLocation'>;
// };

// const AllowLocationScreen: React.FC<AllowLocationScreenProps> = ({ navigation }) => {
//   const handleUseCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         // Now this should pass the correct parameter type
//         navigation.navigate('SelectLocation', { latitude, longitude });
//       },
//       (error) => {
//         Alert.alert('Error', 'Unable to fetch current location');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View>
//       <Text>Allow Location Screen</Text>
//       <TouchableOpacity onPress={handleUseCurrentLocation}>
//         <Text>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default AllowLocationScreen;


// import React, { FC } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type AllowLocationScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'AllowLocation'>;
// };

// const AllowLocationScreen: FC<AllowLocationScreenProps> = ({ navigation }) => {
//   const handleAllowLocation = () => {
//     Alert.alert('Location Access', 'Location access allowed.');
//     navigation.navigate('SelectLocation');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Allow Location Access</Text>
//       <Text style={styles.description}>
//         Please allow location access to improve your experience.
//       </Text>

//       <TouchableOpacity style={styles.button} onPress={handleAllowLocation}>
//         <Text style={styles.buttonText}>Allow Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor:'#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 16,
//     color: '#4A4A4A',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   button: {
//     width: '80%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default AllowLocationScreen;


import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type AllowLocationScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AllowLocation'>;
};

const AllowLocationScreen: FC<AllowLocationScreenProps> = ({ navigation }) => {
  const handleAllowLocation = () => {
    Alert.alert('Location Access', 'Location access allowed.');
    navigation.navigate('SelectLocation');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/locat.png')} style={styles.image} />
      <Text style={styles.title}>Allow Location Access</Text>
      <Text style={styles.description}>
        Please allow location access to improve your experience.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleAllowLocation}>
        <Text style={styles.buttonText}>Allow Location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3E5F5',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#4A4A4A',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#A020F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AllowLocationScreen;
