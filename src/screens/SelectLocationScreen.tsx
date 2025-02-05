// // src/screens/SelectLocationScreen.tsx

// // import React, { useState } from 'react';
// // import { View, Text, Button, TextInput } from 'react-native';
// // import Geolocation from '@react-native-community/geolocation';
// // import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// // import { RootStackParamList } from '../navigation/types';

// // type SelectLocationScreenProps = {
// //   navigation: NativeStackNavigationProp<RootStackParamList, 'SelectLocation'>;
// // };

// // const SelectLocationScreen: React.FC<SelectLocationScreenProps> = () => {
// //   const [city, setCity] = useState('');
// //   const [state, setState] = useState('');

// //   const fetchCurrentLocation = () => {
// //     Geolocation.getCurrentPosition(
// //       (position) => {
// //         const { latitude, longitude } = position.coords;
// //         console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
// //         // You can add reverse geocoding here to fetch city and state based on coordinates
// //       },
// //       (error) => {
// //         console.log(error.message);
// //       },
// //       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
// //     );
// //   };

// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
// //       <Text>Enter City and State</Text>
// //       <TextInput
// //         placeholder="City"
// //         value={city}
// //         onChangeText={setCity}
// //         style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
// //       />
// //       <TextInput
// //         placeholder="State"
// //         value={state}
// //         onChangeText={setState}
// //         style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
// //       />
// //       <Button title="Use Current Location" onPress={fetchCurrentLocation} />
// //       <Button title="Submit" onPress={() => console.log('Submitted City and State')} />
// //     </View>
// //   );
// // };

// // export default SelectLocationScreen;

// // src/screens/SelectLocationScreen.tsx

// // import React, { useState } from 'react';
// // import { View, Text, Button, TextInput } from 'react-native';
// // import Geolocation, { GeoPosition, GeoError } from '@react-native-community/geolocation';
// // import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// // import { RootStackParamList } from '../navigation/types';

// // type SelectLocationScreenProps = {
// //   navigation: NativeStackNavigationProp<RootStackParamList, 'SelectLocation'>;
// // };

// // const SelectLocationScreen: React.FC<SelectLocationScreenProps> = () => {
// //   const [city, setCity] = useState('');
// //   const [state, setState] = useState('');

// //   const fetchCurrentLocation = () => {
// //     Geolocation.getCurrentPosition(
// //       (position: GeoPosition) => {
// //         const { latitude, longitude } = position.coords;
// //         console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
// //         // You can add reverse geocoding here to fetch city and state based on coordinates
// //       },
// //       (error: GeoError) => {
// //         console.log(error.message);
// //       },
// //       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
// //     );
// //   };

// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
// //       <Text>Enter City and State</Text>
// //       <TextInput
// //         placeholder="City"
// //         value={city}
// //         onChangeText={setCity}
// //         style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
// //       />
// //       <TextInput
// //         placeholder="State"
// //         value={state}
// //         onChangeText={setState}
// //         style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
// //       />
// //       <Button title="Use Current Location" onPress={fetchCurrentLocation} />
// //       <Button title="Submit" onPress={() => console.log('Submitted City and State')} />
// //     </View>
// //   );
// // };

// // export default SelectLocationScreen;


// // src/screens/LocationPermissionScreen.tsx

// // import React from 'react';
// // import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
// // import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// // import { RootStackParamList } from '../navigation/types';

// // type SelectLocationScreenProps = {
// //   navigation: NativeStackNavigationProp<RootStackParamList, 'LocationPermission'>;
// // };

// // const LocationPermissionScreen: React.FC<SelectLocationScreenProps> = ({ navigation }) => {
// //   const handleAllowLocation = () => {
// //     // Implement location permission request here
// //     // Navigate to the next screen or handle location permission
// //   };

// //   const handleEnterLocationManually = () => {
// //     navigation.navigate('SelectLocation');
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.iconContainer}>
// //         {/* Replace with a location icon if available */}
// //         <Text style={styles.icon}>📍</Text>
// //       </View>
// //       <Text style={styles.title}>What is Your Location?</Text>
// //       <Text style={styles.description}>
// //         We need to know your location in order to suggest nearby services.
// //       </Text>
// //       <TouchableOpacity style={styles.allowButton} onPress={handleAllowLocation}>
// //         <Text style={styles.allowButtonText}>Allow Location Access</Text>
// //       </TouchableOpacity>
// //       <TouchableOpacity style={styles.manualButton} onPress={handleEnterLocationManually}>
// //         <Text style={styles.manualButtonText}>Enter Location Manually</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     padding: 20,
// //     backgroundColor: '#FFFFFF',
// //   },
// //   iconContainer: {
// //     marginBottom: 20,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     width: 80,
// //     height: 80,
// //     borderRadius: 40,
// //     backgroundColor: '#E0E0E0',
// //   },
// //   icon: {
// //     fontSize: 40,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#333333',
// //     textAlign: 'center',
// //     marginVertical: 10,
// //   },
// //   description: {
// //     fontSize: 16,
// //     color: '#666666',
// //     textAlign: 'center',
// //     marginBottom: 30,
// //     paddingHorizontal: 10,
// //   },
// //   allowButton: {
// //     width: '80%',
// //     paddingVertical: 12,
// //     backgroundColor: '#333333',
// //     borderRadius: 8,
// //     alignItems: 'center',
// //     marginBottom: 10,
// //   },
// //   allowButtonText: {
// //     color: '#FFFFFF',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   manualButton: {
// //     width: '80%',
// //     paddingVertical: 12,
// //     backgroundColor: '#F0F0F0',
// //     borderRadius: 8,
// //     alignItems: 'center',
// //   },
// //   manualButtonText: {
// //     color: '#333333',
// //     fontSize: 16,
// //   },
// // });

// // export default SelectLocationScreen;

// // import React, { useState } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';
// // import Icon from 'react-native-vector-icons/Ionicons';

// // const SelectLocationScreen: React.FC = () => {
// //   const navigation = useNavigation();
// //   const [location, setLocation] = useState('');

// //   const handleCurrentLocation = () => {
// //     // Logic for fetching the current location
// //     console.log('Use current location');
// //   };

// //   const handleLocationChange = (text: string) => {
// //     setLocation(text);
// //     // Optionally, you could add an API call here to get location suggestions
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// //         <Icon name="arrow-back" size={24} color="#000" />
// //       </TouchableOpacity>

// //       <Text style={styles.title}>Enter Your Location</Text>

// //       <View style={styles.inputContainer}>
// //         <Icon name="location-outline" size={20} color="#888" style={styles.icon} />
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Enter your location"
// //           value={location}
// //           onChangeText={handleLocationChange}
// //         />
// //       </View>

// //       <TouchableOpacity style={styles.currentLocationButton} onPress={handleCurrentLocation}>
// //         <Text style={styles.currentLocationText}>Use my current location</Text>
// //       </TouchableOpacity>

// //       <View style={styles.searchResult}>
// //         <Text style={styles.searchResultText}>Search Result</Text>
// //         {/* Display location search results here, if any */}
// //         <Text style={styles.locationResult}>Golden Avenue</Text>
// //         <Text style={styles.locationDetails}>8502 Preston Rd, Inglewood</Text>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     paddingHorizontal: 20,
// //     backgroundColor: '#fff',
// //   },
// //   backButton: {
// //     marginVertical: 10,
// //   },
// //   title: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginVertical: 20,
// //   },
// //   inputContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#f0f0f0',
// //     borderRadius: 10,
// //     padding: 10,
// //     marginVertical: 10,
// //   },
// //   icon: {
// //     marginRight: 10,
// //   },
// //   input: {
// //     flex: 1,
// //     fontSize: 16,
// //   },
// //   currentLocationButton: {
// //     marginTop: 20,
// //   },
// //   currentLocationText: {
// //     color: '#1E90FF',
// //     fontSize: 16,
// //   },
// //   searchResult: {
// //     marginTop: 30,
// //   },
// //   searchResultText: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// //   locationResult: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //   },
// //   locationDetails: {
// //     fontSize: 14,
// //     color: '#666',
// //   },
// // });

// // export default SelectLocationScreen;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation, RouteProp } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';

// type SelectLocationScreenProps = {
//   route: RouteProp<{ params: { latitude: number; longitude: number } }, 'params'>;
// };

// const SelectLocationScreen: React.FC<SelectLocationScreenProps> = ({ route }) => {
//   const navigation = useNavigation();
//   const [location, setLocation] = useState('');
//   const { latitude, longitude } = route.params || {};

//   const handleLocationChange = (text: string) => {
//     setLocation(text);
//   };

//   const handleLocationSave = () => {
//     if (location) {
//       // Save location and proceed to next screen
//       Alert.alert('Location Saved', `Location: ${location}`);
//     } else {
//       Alert.alert('Error', 'Please enter a valid location.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//         <Icon name="arrow-back" size={24} color="#000" />
//       </TouchableOpacity>

//       <Text style={styles.title}>Enter Your Location</Text>

//       <View style={styles.inputContainer}>
//         <Icon name="location-outline" size={20} color="#888" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your location"
//           value={location}
//           onChangeText={handleLocationChange}
//         />
//       </View>

//       <TouchableOpacity style={styles.currentLocationButton} onPress={() => navigation.goBack()}>
//         <Text style={styles.currentLocationText}>
//           {latitude && longitude
//             ? `Current Location: Latitude: ${latitude}, Longitude: ${longitude}`
//             : 'Use my current location'}
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.saveButton} onPress={handleLocationSave}>
//         <Text style={styles.saveButtonText}>Save Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   backButton: {
//     marginVertical: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 10,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//   },
//   currentLocationButton: {
//     marginTop: 20,
//   },
//   currentLocationText: {
//     color: '#1E90FF',
//     fontSize: 16,
//   },
//   saveButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   saveButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default SelectLocationScreen;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { RouteProp } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';

// type SelectLocationScreenProps = {
//   route: RouteProp<{ params: { latitude: number; longitude: number } }, 'params'>;
// };

// const SelectLocationScreen: React.FC<SelectLocationScreenProps> = ({ route }) => {
//   const [location, setLocation] = useState('');
//   const { latitude, longitude } = route.params || {};

//   const handleLocationChange = (text: string) => {
//     setLocation(text);
//   };

//   const handleLocationSave = () => {
//     if (location) {
//       Alert.alert('Location Saved', `Location: ${location}`);
//     } else {
//       Alert.alert('Error', 'Please enter a valid location.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>
//       <View style={styles.inputContainer}>
//         <Icon name="location-outline" size={20} color="#888" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your location"
//           value={location}
//           onChangeText={handleLocationChange}
//         />
//       </View>

//       <TouchableOpacity style={styles.saveButton} onPress={handleLocationSave}>
//         <Text style={styles.saveButtonText}>Save Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 10,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//   },
//   saveButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   saveButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default SelectLocationScreen;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { RouteProp } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';

// type SelectLocationScreenProps = {
//   route: RouteProp<{ params: { latitude: number; longitude: number } }, 'params'>;
// };

// const SelectLocationScreen: React.FC<SelectLocationScreenProps> = ({ route }) => {
//   const [location, setLocation] = useState('');
//   const { latitude, longitude } = route.params || {};

//   const handleLocationChange = (text: string) => {
//     setLocation(text);
//   };

//   const handleLocationSave = () => {
//     if (location) {
//       Alert.alert('Location Saved', `Location: ${location}`);
//     } else {
//       Alert.alert('Error', 'Please enter a valid location.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>
//       <View style={styles.inputContainer}>
//         <Icon name="location-outline" size={20} color="#888" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your location"
//           value={location}
//           onChangeText={handleLocationChange}
//         />
//       </View>

//       <TouchableOpacity style={styles.saveButton} onPress={handleLocationSave}>
//         <Text style={styles.saveButtonText}>Save Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 10,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//   },
//   saveButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   saveButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default SelectLocationScreen;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { RouteProp } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { RootStackParamList } from '../navigation/types';  // Ensure this is imported from the correct location

// // Type for the props
// type SelectLocationScreenProps = {
//   route: RouteProp<RootStackParamList, 'SelectLocation'>;
//   navigation: StackNavigationProp<RootStackParamList, 'SelectLocation'>;
// };

// const SelectLocationScreen: React.FC<SelectLocationScreenProps> = ({ route, navigation }) => {
//   const [location, setLocation] = useState('');
//   const { latitude, longitude } = route.params || {};

//   const handleLocationChange = (text: string) => {
//     setLocation(text);
//   };

//   const handleLocationSave = () => {
//     if (location) {
//       Alert.alert('Location Saved', `Location: ${location}`);
//     } else {
//       Alert.alert('Error', 'Please enter a valid location.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>
//       <View style={styles.inputContainer}>
//         <Icon name="location-outline" size={20} color="#888" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your location"
//           value={location}
//           onChangeText={handleLocationChange}
//         />
//       </View>

//       <TouchableOpacity style={styles.saveButton} onPress={handleLocationSave}>
//         <Text style={styles.saveButtonText}>Save Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 10,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//   },
//   saveButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   saveButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default SelectLocationScreen;





// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { RouteProp } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { RootStackParamList } from '../navigation/types';

// type SelectLocationScreenProps = {
//   route: RouteProp<RootStackParamList, 'SelectLocation'>;
//   navigation: StackNavigationProp<RootStackParamList, 'SelectLocation'>;
// };

// const SelectLocationScreen: React.FC<SelectLocationScreenProps> = ({ route, navigation }) => {
//   const [location, setLocation] = useState('');
//   const { latitude, longitude } = route.params;

//   const handleLocationChange = (text: string) => {
//     setLocation(text);
//   };

//   const handleLocationSave = () => {
//     if (location) {
//       Alert.alert('Location Saved', `Location: ${location}`);
//     } else {
//       Alert.alert('Error', 'Please enter a valid location.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>
//       <View style={styles.inputContainer}>
//         <Icon name="location-outline" size={20} color="#888" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your location"
//           value={location}
//           onChangeText={handleLocationChange}
//         />
//       </View>

//       <TouchableOpacity style={styles.saveButton} onPress={handleLocationSave}>
//         <Text style={styles.saveButtonText}>Save Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//     paddingHorizontal: 10,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//   },
//   saveButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 5,
//     marginTop: 30,
//   },
//   saveButtonText: {
//     color: 'white',
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });

// export default SelectLocationScreen;

// import React from 'react';
// import { View, Text } from 'react-native';
// import { RouteProp } from '@react-navigation/native';
// import { RootStackParamList } from '../navigation/types'; // Adjust path as needed

// type SelectLocationScreenProps = {
//   route: RouteProp<RootStackParamList, 'SelectLocation'>;
// };

// const SelectLocationScreen: React.FC<SelectLocationScreenProps> = ({ route }) => {
//   const { latitude, longitude } = route.params;

//   return (
//     <View>
//       <Text>Latitude: {latitude}</Text>
//       <Text>Longitude: {longitude}</Text>
//     </View>
//   );
// };

// export default SelectLocationScreen;


// import React, { FC, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type SelectLocationScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SelectLocation'>;
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = () => {
//   const [location, setLocation] = useState('');

//   const handleSetLocation = () => {
//     if (!location) {
//       Alert.alert('Error', 'Please enter a location.');
//       return;
//     }
//     Alert.alert('Success', `Location set to: ${location}`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="City, State, or Zip Code"
//         value={location}
//         onChangeText={setLocation}
//       />
      
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor:'#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
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

// export default SelectLocationScreen;

// import React, { FC, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';
// import Geolocation from 'react-native-geolocation-service';
// import { PermissionsAndroid, Platform } from 'react-native';

// type SelectLocationScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SelectLocation'>;
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = () => {
//   const [location, setLocation] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSetLocation = () => {
//     if (!location) {
//       Alert.alert('Error', 'Please enter a location.');
//       return;
//     }
//     Alert.alert('Success', `Location set to: ${location}`);
//   };

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'App needs access to your location',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;
//   };

//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Error', 'Location permission denied');
//       return;
//     }

//     setIsLoading(true);
//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setLocation(`Lat: ${latitude}, Long: ${longitude}`);
//         Alert.alert('Success', `Current location: ${latitude}, ${longitude}`);
//         setIsLoading(false);
//       },
//       error => {
//         Alert.alert('Error', 'Unable to retrieve current location.');
//         console.error(error);
//         setIsLoading(false);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="City, State, or Zip Code"
//         value={location}
//         onChangeText={setLocation}
//       />
      
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation} disabled={isLoading}>
//         <Text style={styles.buttonText}>{isLoading ? 'Locating...' : 'Use Current Location'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default SelectLocationScreen;


// import React, { FC, useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';
// import Geolocation from 'react-native-geolocation-service';
// import { PermissionsAndroid } from 'react-native';

// type SelectLocationScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SelectLocation'>;
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = () => {
//   const [location, setLocation] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isMounted, setIsMounted] = useState(true);  // Flag to check if the component is mounted

//   useEffect(() => {
//     // Cleanup when component unmounts
//     return () => {
//       setIsMounted(false);
//     };
//   }, []);

//   const handleSetLocation = () => {
//     if (!location) {
//       Alert.alert('Error', 'Please enter a location.');
//       return;
//     }
//     Alert.alert('Success', `Location set to: ${location}`);
//   };

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'App needs access to your location',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;  // iOS automatically handles permissions
//   };

//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Error', 'Location permission denied');
//       return;
//     }

//     setIsLoading(true);
//     Geolocation.getCurrentPosition(
//       position => {
//         if (isMounted) {  // Only update state if the component is still mounted
//           const { latitude, longitude } = position.coords;
//           setLocation(`Lat: ${latitude}, Long: ${longitude}`);
//           Alert.alert('Success', `Current location: ${latitude}, ${longitude}`);
//         }
//         setIsLoading(false);
//       },
//       error => {
//         console.error(error);
//         if (isMounted) {
//           Alert.alert('Error', 'Unable to retrieve current location.');
//         }
//         setIsLoading(false);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="City, State, or Zip Code"
//         value={location}
//         onChangeText={setLocation}
//       />
      
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>

//       <TouchableOpacity 
//         style={styles.button} 
//         onPress={handleUseCurrentLocation} 
//         disabled={isLoading}
//       >
//         <Text style={styles.buttonText}>{isLoading ? 'Locating...' : 'Use Current Location'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default SelectLocationScreen;

// import React, { FC, useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';
// import Geolocation from 'react-native-geolocation-service';
// import { PermissionsAndroid } from 'react-native';

// type SelectLocationScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SelectLocation'>;
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = () => {
//   const [location, setLocation] = useState('');
//   const [address, setAddress] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isMounted, setIsMounted] = useState(true);  // Flag to check if the component is mounted

//   useEffect(() => {
//     // Cleanup when component unmounts
//     return () => {
//       setIsMounted(false);
//     };
//   }, []);

//   const handleSetLocation = () => {
//     if (!location && !address) {
//       Alert.alert('Error', 'Please enter or select a location.');
//       return;
//     }
//     Alert.alert('Success', `Location set to: ${location || address}`);
//   };

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'App needs access to your location',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;  // iOS automatically handles permissions
//   };

//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Error', 'Location permission denied');
//       return;
//     }

//     setIsLoading(true);
//     Geolocation.getCurrentPosition(
//       position => {
//         if (isMounted) {  // Only update state if the component is still mounted
//           const { latitude, longitude } = position.coords;
//           setLocation(`Lat: ${latitude}, Long: ${longitude}`);
          
//           // Call reverse geocoding API to get the address
//           fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
//             .then((response) => response.json())
//             .then((data) => {
//               if (data && data.display_name) {
//                 setAddress(data.display_name);
//               } else {
//                 setAddress('Address not found');
//               }
//             })
//             .catch((error) => {
//               console.error('Reverse Geocoding error:', error);
//               setAddress('Unable to fetch address');
//             });

//           Alert.alert('Success', `Current location: ${latitude}, ${longitude}`);
//         }
//         setIsLoading(false);
//       },
//       error => {
//         console.error(error);
//         if (isMounted) {
//           Alert.alert('Error', 'Unable to retrieve current location.');
//         }
//         setIsLoading(false);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="City, State, or Zip Code"
//         value={location}
//         onChangeText={setLocation}
//       />

//       {/* Display address if available */}
//       {address ? <Text style={styles.addressText}>Address: {address}</Text> : null}

//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>

//       <TouchableOpacity 
//         style={styles.button} 
//         onPress={handleUseCurrentLocation} 
//         disabled={isLoading}
//       >
//         <Text style={styles.buttonText}>{isLoading ? 'Locating...' : 'Use Current Location'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   addressText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;


// import React, { FC, useState, useEffect } from 'react';
// import { 
//   View, 
//   Text, 
//   TextInput, 
//   TouchableOpacity, 
//   StyleSheet, 
//   Alert, 
//   Platform, 
//   ActivityIndicator 
// } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';
// import Geolocation from 'react-native-geolocation-service';
// import { PermissionsAndroid } from 'react-native';

// type SelectLocationScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SelectLocation'>;
// };

// const GOOGLE_API_KEY = 'AIzaSyCe5fHLtY5WnIYmyMTrYr9T1hN0PgDbvbs'; // Replace this with your Google API Key

// const SelectLocationScreen: FC<SelectLocationScreenProps> = () => {
//   const [location, setLocation] = useState('');
//   const [address, setAddress] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'App needs access to your location',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS automatically handles permissions
//   };

//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Error', 'Location permission denied');
//       return;
//     }

//     setIsLoading(true);
//     Geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;
//         setLocation(`Lat: ${latitude}, Long: ${longitude}`);

//         // Fetch address using Google Geocoding API
//         try {
//           const response = await fetch(
//             `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
//           );
//           const data = await response.json();
//           if (data.status === 'OK' && data.results.length > 0) {
//             setAddress(data.results[0].formatted_address);
//             Alert.alert('Success', `Address: ${data.results[0].formatted_address}`);
//           } else {
//             setAddress('Unable to fetch address');
//             Alert.alert('Error', 'Unable to fetch address');
//           }
//         } catch (error) {
//           console.error('Geocoding API Error:', error);
//           Alert.alert('Error', 'Failed to fetch address');
//         } finally {
//           setIsLoading(false);
//         }
//       },
//       (error) => {
//         console.error('Location Error:', error);
//         Alert.alert('Error', 'Unable to retrieve current location.');
//         setIsLoading(false);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   const handleSetLocation = () => {
//     if (!location && !address) {
//       Alert.alert('Error', 'Please enter or select a location.');
//       return;
//     }
//     Alert.alert('Success', `Location set to: ${location || address}`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="City, State, or Zip Code"
//         value={location}
//         onChangeText={setLocation}
//       />

//       {/* Display address if available */}
//       {address ? <Text style={styles.addressText}>Address: {address}</Text> : null}

//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>

//       <TouchableOpacity 
//         style={[styles.button, isLoading && styles.disabledButton]} 
//         onPress={handleUseCurrentLocation} 
//         disabled={isLoading}
//       >
//         {isLoading ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>Use Current Location</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   disabledButton: {
//     backgroundColor: '#7B1FA2',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   addressText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;


// import React, { FC, useState } from 'react';
// import { 
//   View, 
//   Text, 
//   TextInput, 
//   TouchableOpacity, 
//   StyleSheet, 
//   Alert, 
//   Platform, 
//   ActivityIndicator 
// } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import { PermissionsAndroid } from 'react-native';

// const GOOGLE_API_KEY = 'AIzaSyCe5fHLtY5WnIYmyMTrYr9T1hN0PgDbvbs'; // Replace with your Google API key

// const SelectLocationScreen: FC = () => {
//   const [location, setLocation] = useState('');
//   const [address, setAddress] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: 'Location Permission',
//             message: 'App needs access to your location.',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           }
//         );
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//       } catch (error) {
//         console.error("Permission error:", error);
//         return false;
//       }
//     }
//     return true; // iOS handles permissions automatically
//   };

//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Error', 'Location permission denied');
//       return;
//     }

//     setIsLoading(true);
//     Geolocation.getCurrentPosition(
//       async (position) => {
//         console.log("Position fetched:", position);
//         const { latitude, longitude } = position.coords;
//         setLocation(`Lat: ${latitude}, Long: ${longitude}`);

//         // Fetch address using Google Geocoding API
//         try {
//           const response = await fetch(
//             `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
//           );
//           const data = await response.json();
//           console.log("Geocoding API response:", data);
//           if (data.status === 'OK' && data.results.length > 0) {
//             setAddress(data.results[0].formatted_address);
//           } else {
//             setAddress('Unable to fetch address');
//             Alert.alert('Error', 'Unable to fetch address');
//           }
//         } catch (apiError) {
//           console.error("API error:", apiError);
//           Alert.alert('Error', 'Failed to fetch address');
//         } finally {
//           setIsLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Location error:", error);
//         Alert.alert('Error', 'Unable to retrieve current location.');
//         setIsLoading(false);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   const handleSetLocation = () => {
//     if (!location && !address) {
//       Alert.alert('Error', 'Please enter or select a location.');
//       return;
//     }
//     Alert.alert('Success', `Location set to: ${location || address}`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="City, State, or Zip Code"
//         value={location}
//         onChangeText={setLocation}
//       />

//       {/* Display address if available */}
//       {address ? <Text style={styles.addressText}>Address: {address}</Text> : null}

//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>

//       <TouchableOpacity 
//         style={[styles.button, isLoading && styles.disabledButton]} 
//         onPress={handleUseCurrentLocation} 
//         disabled={isLoading}
//       >
//         {isLoading ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>Use Current Location</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   disabledButton: {
//     backgroundColor: '#7B1FA2',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   addressText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;





// import React, { FC, useState } from 'react';
// import { 
//   View, 
//   Text, 
//   TextInput, 
//   TouchableOpacity, 
//   StyleSheet, 
//   Alert, 
//   Platform, 
//   ActivityIndicator 
// } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import { PermissionsAndroid } from 'react-native';

// const GOOGLE_API_KEY = 'AIzaSyBgfIxvTOITMxW2vF5YyGp2SgfF0WEV5Lw'; // Replace with your actual key

// const SelectLocationScreen: FC = () => {
//   const [location, setLocation] = useState('');
//   const [address, setAddress] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: 'Location Permission',
//             message: 'This app needs access to your location to fetch your address.',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           }
//         );
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//       } catch (error) {
//         console.error("Permission request error:", error);
//         return false;
//       }
//     }
//     return true; // iOS automatically handles permissions
//   };

//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Error', 'Location permission denied');
//       return;
//     }

//     setIsLoading(true);
//     try {
//       Geolocation.getCurrentPosition(
//         async (position) => {
//           console.log("Position fetched:", position);
//           const { latitude, longitude } = position.coords;
//           setLocation(`Lat: ${latitude}, Long: ${longitude}`);

//           try {
//             const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
//             console.log("Geocoding URL:", url);

//             const response = await fetch(url);
//             const data = await response.json();

//             console.log("Geocoding API response:", data);
//             if (data.status === 'OK' && data.results.length > 0) {
//               setAddress(data.results[0].formatted_address);
//             } else {
//               throw new Error("No address found");
//             }
//           } catch (apiError) {
//             console.error("API call error:", apiError);
//             setAddress('Unable to fetch address');
//             Alert.alert('Error', 'Failed to fetch address. Check API Key and network.');
//           }
//         },
//         (error) => {
//           console.error("Geolocation error:", error);
//           Alert.alert('Error', `Location error: ${error.message}`);
//         },
//         { enableHighAccuracy: true, timeout: 30000, maximumAge: 10000 }
//       );
//     } catch (err) {
//       console.error("Error in getCurrentPosition:", err);
//       Alert.alert('Error', 'Unable to retrieve current location.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSetLocation = () => {
//     if (!location && !address) {
//       Alert.alert('Error', 'Please enter or select a location.');
//       return;
//     }
//     Alert.alert('Success', `Location set to: ${location || address}`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="City, State, or Zip Code"
//         value={location}
//         onChangeText={setLocation}
//       />

//       {/* Display address if available */}
//       {address ? <Text style={styles.addressText}>Address: {address}</Text> : null}

//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>

//       <TouchableOpacity 
//         style={[styles.button, isLoading && styles.disabledButton]} 
//         onPress={handleUseCurrentLocation} 
//         disabled={isLoading}
//       >
//         {isLoading ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>Use Current Location</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   disabledButton: {
//     backgroundColor: '#7B1FA2',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   addressText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;



// import React, { FC, useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import { PermissionsAndroid } from 'react-native';

// const GOOGLE_API_KEY = 'AIzaSyBgfIxvTOITMxW2vF5YyGp2SgfF0WEV5Lw';

// const SelectLocationScreen: FC = () => {
//   const [location, setLocation] = useState('');
//   const [address, setAddress] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isMounted, setIsMounted] = useState(true);

//   useEffect(() => {
//     return () => setIsMounted(false); // Cleanup on unmount
//   }, []);

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'App needs access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS handles permissions natively
//   };

//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Please allow location access in settings.');
//       return;
//     }

//     setIsLoading(true);
//     try {
//       Geolocation.getCurrentPosition(
//         async position => {
//           if (!isMounted) return;

//           const { latitude, longitude } = position.coords;
//           setLocation(`Lat: ${latitude}, Long: ${longitude}`);

//           try {
//             const response = await fetch(
//               `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`,
//             );
//             const data = await response.json();
//             if (data.status === 'OK') {
//               setAddress(data.results[0]?.formatted_address || 'Address not found');
//             } else {
//               setAddress('Unable to fetch address');
//             }
//           } catch (error) {
//             console.error('Error with Geocoding API:', error);
//             setAddress('Geocoding failed');
//           }
//         },
//         error => {
//           console.error('Geolocation Error:', error);
//           Alert.alert('Error', 'Unable to retrieve current location.');
//         },
//         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
//       );
//     } catch (error) {
//       console.error('Error retrieving location:', error);
//       Alert.alert('Error', 'Unexpected error occurred.');
//     } finally {
//       if (isMounted) setIsLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter a city or region"
//         value={location}
//         onChangeText={setLocation}
//       />
//       {address && <Text style={styles.addressText}>Address: {address}</Text>}
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation} disabled={isLoading}>
//         <Text style={styles.buttonText}>{isLoading ? 'Fetching...' : 'Use Current Location'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#F3E5F5' },
//   title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
//   input: { width: '100%', height: 50, borderRadius: 10, backgroundColor: '#F0F0F0', paddingHorizontal: 10, marginBottom: 20 },
//   button: { width: '100%', height: 50, borderRadius: 10, backgroundColor: '#A020F0', justifyContent: 'center', alignItems: 'center', marginTop: 10 },
//   buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
//   addressText: { fontSize: 16, color: '#555', marginVertical: 10, textAlign: 'center' },
// });

// export default SelectLocationScreen;


// import React, { FC, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import { PermissionsAndroid } from 'react-native';

// type SelectLocationScreenProps = {
//   navigation: any; // Adjust if needed for your navigation type
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = () => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [location, setLocation] = useState('');

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'App needs access to your location',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // For iOS, permissions are automatically handled
//   };

//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//   };

//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Error', 'Location permission denied');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setLocation(`Lat: ${latitude}, Long: ${longitude}`);
//         Alert.alert('Current Location', `Lat: ${latitude}, Long: ${longitude}`);
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve current location');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Show current location */}
//       {location ? <Text style={styles.locationText}>Current Location: {location}</Text> : null}

//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;




// import React, { FC, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';  // To get current location
// import { PermissionsAndroid } from 'react-native';  // To request location permission

// type SelectLocationScreenProps = {
//   navigation: any;  // Adjust if needed for your navigation type
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = () => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [location, setLocation] = useState('');

//   // Request Location Permission for Android
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'App needs access to your location',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;  // iOS automatically handles permissions
//   };

//   // Function to confirm the manual location input (city and pincode)
//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//   };

//   // Function to use the current device location
//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Error', 'Location permission denied');
//       return;
//     }

//     // Fetch current location
//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setLocation(`Lat: ${latitude}, Long: ${longitude}`);
//         Alert.alert('Current Location', `Lat: ${latitude}, Long: ${longitude}`);
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve current location');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>

//       {/* Manual City & Pincode Entry */}
//       <TextInput
//         style={styles.input}
//         placeholder="City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Show current location */}
//       {location ? <Text style={styles.locationText}>Current Location: {location}</Text> : null}

//       {/* Confirm Manual Location */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>

//       {/* Use Current Location Button */}
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;



// import React, { FC, useState } from 'react';
// import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,Platform,} from 'react-native';
// import Geolocation from 'react-native-geolocation-service'; // To get current location
// import { PermissionsAndroid } from 'react-native'; // To request location permission

// type SelectLocationScreenProps = {
//   navigation: any; // Adjust based on your navigation setup
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = () => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState('');

//   // Request Location Permission for Android
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS handles permissions automatically
//   };

//   // Handle manual location input confirmation
//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//   };

//   // Use device's current location
//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation(`Lat: ${latitude}, Long: ${longitude}`);
//         Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       {/* Manual Input for City and Pincode */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Display Current Location */}
//       {currentLocation ? (
//         <Text style={styles.locationText}>Current Location: {currentLocation}</Text>
//       ) : null}

//       {/* Buttons */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;




// import React, { FC, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
// import Geolocation from 'react-native-geolocation-service'; // To get current location
// import { PermissionsAndroid } from 'react-native'; // To request location permission
// import { insertLocation } from '../databases/Database'; // Import the function to insert location into database

// type SelectLocationScreenProps = {
//   navigation: any; // Adjust based on your navigation setup
//   route: any; // To access userId passed from the previous screen (e.g., CompleteProfileScreen)
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation, route }) => {
//   const { userId } = route.params; // Get userId from route params
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState('');

//   // Request Location Permission for Android
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS handles permissions automatically
//   };

//   // Handle manual location input confirmation and insert into DB
//   const handleSetLocation = async () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     try {
//       await insertLocation(userId, city, pincode, null, null); // Insert location (latitude/longitude will be null)
//       Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//       navigation.goBack(); // Navigate back after successful location set
//     } catch (error) {
//       Alert.alert('Error', 'Failed to save location. Please try again.');
//       console.error(error);
//     }
//   };

//   // Use device's current location and insert into DB
//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       async position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation(`Lat: ${latitude}, Long: ${longitude}`);
        
//         try {
//           await insertLocation(userId, null, null, latitude, longitude); // Insert current location into DB
//           Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//           navigation.goBack(); // Navigate back after successful location set
//         } catch (error) {
//           Alert.alert('Error', 'Failed to save current location. Please try again.');
//           console.error(error);
//         }
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       {/* Manual Input for City and Pincode */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Display Current Location */}
//       {currentLocation ? (
//         <Text style={styles.locationText}>Current Location: {currentLocation}</Text>
//       ) : null}

//       {/* Buttons */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;




// import React, { FC, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
// import Geolocation from 'react-native-geolocation-service'; // To get current location
// import { PermissionsAndroid } from 'react-native'; // To request location permission
// import { insertLocation, getUserIdFromFullName } from '../databases/Database'; // Import the functions

// type SelectLocationScreenProps = {
//   navigation: any; // Adjust based on your navigation setup
//   route: any; // To access fullName passed from the previous screen
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation, route }) => {
//   const { fullName } = route.params; // Get fullName from route params
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState('');

//   // Request Location Permission for Android
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS handles permissions automatically
//   };

//   // Handle manual location input confirmation and insert into DB
//   const handleSetLocation = async () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     try {
//       const userId = await getUserIdFromFullName(fullName); // Get userId based on fullName
//       await insertLocation(userId, city, pincode, null, null); // Insert location (latitude/longitude will be null)
//       Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//       navigation.goBack(); // Navigate back after successful location set
//     } catch (error) {
//       Alert.alert('Error', 'Failed to save location. Please try again.');
//       console.error(error);
//     }
//   };

//   // Use device's current location and insert into DB
//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       async position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation(`Lat: ${latitude}, Long: ${longitude}`);
        
//         try {
//           const userId = await getUserIdFromFullName(fullName); // Get userId based on fullName
//           await insertLocation(userId, null, null, latitude, longitude); // Insert current location into DB
//           Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//           navigation.goBack(); // Navigate back after successful location set
//         } catch (error) {
//           Alert.alert('Error', 'Failed to save current location. Please try again.');
//           console.error(error);
//         }
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       {/* Manual Input for City and Pincode */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Display Current Location */}
//       {currentLocation ? (
//         <Text style={styles.locationText}>Current Location: {currentLocation}</Text>
//       ) : null}

//       {/* Buttons */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;


// import React, { FC, useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
// import Geolocation from 'react-native-geolocation-service'; // To get current location
// import { PermissionsAndroid } from 'react-native'; // To request location permission
// import { insertLocation, getUserIdFromFullName } from '../databases/Database'; // Import the functions

// type SelectLocationScreenProps = {
//   navigation: any; // Adjust based on your navigation setup
//   route: any; // To access fullName passed from the previous screen
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation, route }) => {
//   // Check if fullName is passed correctly
//   const { fullName } = route.params || {}; // Default to empty object if route.params is undefined
//   if (!fullName) {
//     Alert.alert('Error', 'Full name is missing.');
//     return null; // Exit early if fullName is undefined
//   }

//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState('');

//   // Request Location Permission for Android
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS handles permissions automatically
//   };

//   // Handle manual location input confirmation and insert into DB
//   const handleSetLocation = async () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     try {
//       const userId = await getUserIdFromFullName(fullName); // Get userId based on fullName
//       await insertLocation(userId, city, pincode, null, null); // Insert location (latitude/longitude will be null)
//       Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//       navigation.goBack(); // Navigate back after successful location set
//     } catch (error) {
//       Alert.alert('Error', 'Failed to save location. Please try again.');
//       console.error(error);
//     }
//   };

//   // Use device's current location and insert into DB
//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       async position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation(`Lat: ${latitude}, Long: ${longitude}`);
        
//         try {
//           const userId = await getUserIdFromFullName(fullName); // Get userId based on fullName
//           await insertLocation(userId, null, null, latitude, longitude); // Insert current location into DB
//           Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//           navigation.goBack(); // Navigate back after successful location set
//         } catch (error) {
//           Alert.alert('Error', 'Failed to save current location. Please try again.');
//           console.error(error);
//         }
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       {/* Manual Input for City and Pincode */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Display Current Location */}
//       {currentLocation ? (
//         <Text style={styles.locationText}>Current Location: {currentLocation}</Text>
//       ) : null}

//       {/* Buttons */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;





// import React, { FC, useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
// import Geolocation from 'react-native-geolocation-service'; // To get current location
// import { PermissionsAndroid } from 'react-native'; // To request location permission
// import { insertLocation, getUserIdFromFullName } from '../databases/Database'; // Import the functions

// type SelectLocationScreenProps = {
//   navigation: any; // Adjust based on your navigation setup
//   route: any; // To access fullName passed from the previous screen
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation, route }) => {
//   console.log(route.params);  // Log route.params to check if fullName is present
  
//   const { fullName = 'Guest User' } = route.params || {}; // Default to 'Guest User' if fullName is not passed
//   console.log('Full Name:', fullName);

//   if (!fullName) {
//     Alert.alert('Error', 'Full name is missing.');
//     return null; // Exit early if fullName is undefined
//   }

//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState('');

//   // Request Location Permission for Android
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS handles permissions automatically
//   };

//   // Handle manual location input confirmation and insert into DB
//   const handleSetLocation = async () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     try {
//       const userId = await getUserIdFromFullName(fullName); // Get userId based on fullName
//       await insertLocation(userId, city, pincode, null, null); // Insert location (latitude/longitude will be null)
//       Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//       navigation.goBack(); // Navigate back after successful location set
//     } catch (error) {
//       Alert.alert('Error', 'Failed to save location. Please try again.');
//       console.error(error);
//     }
//   };

//   // Use device's current location and insert into DB
//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       async position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation(`Lat: ${latitude}, Long: ${longitude}`);
        
//         try {
//           const userId = await getUserIdFromFullName(fullName); // Get userId based on fullName
//           await insertLocation(userId, null, null, latitude, longitude); // Insert current location into DB
//           Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//           navigation.goBack(); // Navigate back after successful location set
//         } catch (error) {
//           Alert.alert('Error', 'Failed to save current location. Please try again.');
//           console.error(error);
//         }
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       {/* Manual Input for City and Pincode */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Display Current Location */}
//       {currentLocation ? (
//         <Text style={styles.locationText}>Current Location: {currentLocation}</Text>
//       ) : null}

//       {/* Buttons */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;



// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, Alert } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native';

// // Assuming we have a function to handle database query
// type RouteParams = {
//   fullName: string;
// };

// const getUserIdFromFullName = async (fullName: string): Promise<string | null> => {
//   if (fullName === 'Guest User') {
//     // Return a guest user ID if 'Guest User' is passed
//     return 'guestUserId';
//   }

//   try {
//     // Replace with your database call to get user by fullName
//     const user = await database.getUserByFullName(fullName);
//     return user ? user.id : null;
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     return null;
//   }
// };

// const insertLocation = async (userId: string, city: string, pincode: string) => {
//   try {
//     // Database insert location logic here
//     console.log(`Inserting location for user: ${userId}`);
//     console.log(`City: ${city}, Pincode: ${pincode}`);
//   } catch (error) {
//     console.error('Error inserting location:', error);
//   }
// };

// const SelectLocationScreen = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { fullName = 'Guest User' } = route.params || {};  // Default to 'Guest User'
  
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
  
//   useEffect(() => {
//     console.log('Full Name:', fullName);
//   }, [fullName]);
  
//   const handleSetLocation = async () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     try {
//       if (fullName === 'Guest User') {
//         // Handle guest user flow separately if needed
//         Alert.alert('Warning', 'You are using a guest account. Please log in for personalized settings.');
//       }

//       const userId = await getUserIdFromFullName(fullName);

//       if (!userId) {
//         Alert.alert('Error', 'User not found. Please log in or sign up.');
//         return;
//       }

//       await insertLocation(userId, city, pincode);
//       Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//       navigation.goBack();  // Go back to the previous screen
//     } catch (error) {
//       Alert.alert('Error', 'Failed to save location. Please try again.');
//       console.error(error);
//     }
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <Text>Set Location</Text>
//       <TextInput
//         placeholder="City"
//         value={city}
//         onChangeText={setCity}
//         style={{ borderBottomWidth: 1, marginBottom: 10 }}
//       />
//       <TextInput
//         placeholder="Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         style={{ borderBottomWidth: 1, marginBottom: 10 }}
//       />
//       <Button title="Save Location" onPress={handleSetLocation} />
//     </View>
//   );
// };

// export default SelectLocationScreen;













// import React, { FC, useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
// import { PermissionsAndroid } from 'react-native';
// import Geolocation from 'react-native-geolocation-service'; // To get current location
// import { initDatabase } from '../databases/Database'; // Import initDatabase

// type SelectLocationScreenProps = {
//   navigation: any; // Adjust based on your navigation setup
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = () => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState('');

//   // Request Location Permission for Android
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS handles permissions automatically
//   };

//   // Handle manual location input confirmation
//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//   };

//   // Use device's current location
//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation(`Lat: ${latitude}, Long: ${longitude}`);
//         Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   // Initialize the database when the component mounts
//   useEffect(() => {
//     initDatabase(); // Initialize the database
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       {/* Manual Input for City and Pincode */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Display Current Location */}
//       {currentLocation ? (
//         <Text style={styles.locationText}>Current Location: {currentLocation}</Text>
//       ) : null}

//       {/* Buttons */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;






// import React, { FC, useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
// import { PermissionsAndroid } from 'react-native';
// import Geolocation from 'react-native-geolocation-service'; // To get current location
// import { initDatabase} from '../databases/Database'; // Import initDatabase

// type SelectLocationScreenProps = {
//   navigation: any; // Adjust based on your navigation setup
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = () => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false); // Track loading state for async tasks

//   // Request Location Permission for Android
//   const requestLocationPermission = async (): Promise<boolean> => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS handles permissions automatically
//   };

//   // Handle manual location input confirmation
//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//   };

//   // Use device's current location
//   const handleUseCurrentLocation = async () => {
//     setLoading(true); // Set loading state to true
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       setLoading(false);
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation(`Lat: ${latitude}, Long: ${longitude}`);
//         Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//         setLoading(false); // Set loading state to false after location is retrieved
//       },
//       error => {
//         console.error(error);
//         setLoading(false); // Set loading state to false on error
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   // Initialize the database when the component mounts
//   useEffect(() => {
//     const initializeDatabase = async () => {
//       try {
//         setLoading(true); // Set loading state to true while DB initializes
//         await initDatabase(); // Initialize the database
//         setLoading(false); // Set loading state to false after DB is initialized
//       } catch (error) {
//         setLoading(false); // Handle any DB initialization errors
//         Alert.alert('Database Error', 'Failed to initialize the database.');
//       }
//     };

//     initializeDatabase(); // Initialize database
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       {/* Manual Input for City and Pincode */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Display Current Location */}
//       {currentLocation ? (
//         <Text style={styles.locationText}>Current Location: {currentLocation}</Text>
//       ) : null}

//       {/* Buttons */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation} disabled={loading}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation} disabled={loading}>
//         <Text style={styles.buttonText}>{loading ? 'Fetching...' : 'Use Current Location'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;










// import React, { FC, useState } from 'react';
// import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,Platform,} from 'react-native';
// import Geolocation from 'react-native-geolocation-service'; // To get current location
// import { PermissionsAndroid } from 'react-native'; // To request location permission

// type SelectLocationScreenProps = {
//   navigation: any; // Adjust based on your navigation setup
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = () => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState('');

//   // Request Location Permission for Android
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS handles permissions automatically
//   };

//   // Handle manual location input confirmation
//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     Alert.alert('Location Set', City: ${city}, Pincode: ${pincode});
//   };

//   // Use device's current location
//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation(Lat: ${latitude}, Long: ${longitude});
//         Alert.alert('Current Location', Latitude: ${latitude}, Longitude: ${longitude});
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       {/* Manual Input for City and Pincode */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Display Current Location */}
//       {currentLocation ? (
//         <Text style={styles.locationText}>Current Location: {currentLocation}</Text>
//       ) : null}

//       {/* Buttons */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;



// import React, { FC, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
// import Geolocation from 'react-native-geolocation-service'; // To get current location
// import { PermissionsAndroid } from 'react-native'; // To request location permission

// type SelectLocationScreenProps = {
//   navigation: any; // Adjust based on your navigation setup
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = () => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState('');

//   // Request Location Permission for Android
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS handles permissions automatically
//   };

//   // Handle manual location input confirmation
//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     // Corrected template literals
//     Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//   };

//   // Use device's current location
//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation(`Lat: ${latitude}, Long: ${longitude}`);
//         Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       {/* Manual Input for City and Pincode */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Display Current Location */}
//       {currentLocation ? (
//         <Text style={styles.locationText}>Current Location: {currentLocation}</Text>
//       ) : null}

//       {/* Buttons */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;






// import React, { FC, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
// import Geolocation from 'react-native-geolocation-service'; // To get current location
// import { PermissionsAndroid } from 'react-native'; // To request location permission

// type SelectLocationScreenProps = {
//   navigation: any; // Adjust based on your navigation setup
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = () => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState('');

//   // Request Location Permission for Android
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS handles permissions automatically
//   };

//   // Handle manual location input confirmation
//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//   };

//   // Use device's current location
//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation(`Lat: ${latitude}, Long: ${longitude}`);
//         Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       {/* Manual Input for City and Pincode */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Display Current Location */}
//       {currentLocation ? (
//         <Text style={styles.locationText}>Current Location: {currentLocation}</Text>
//       ) : null}

//       {/* Buttons */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SelectLocationScreen;





// import React, { FC, useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
// import Geolocation from 'react-native-geolocation-service'; // To get current location
// import { PermissionsAndroid } from 'react-native'; // To request location permission
// import MapView, { Marker } from 'react-native-maps'; // Map component for displaying map and markers

// type SelectLocationScreenProps = {
//   navigation: any; // Adjust based on your navigation setup
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = () => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState({
//     latitude: 0,
//     longitude: 0,
//   });
//   const [region, setRegion] = useState({
//     latitude: 0,
//     longitude: 0,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   // Request Location Permission for Android
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS handles permissions automatically
//   };

//   // Handle manual location input confirmation
//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//   };

//   // Use device's current location
//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({ latitude, longitude });
//         setRegion({
//           ...region,
//           latitude,
//           longitude,
//         });
//         Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   // Handle location selection from the map
//   const handleMapPress = (e: any) => {
//     const { latitude, longitude } = e.nativeEvent.coordinate;
//     setCurrentLocation({ latitude, longitude });
//     setRegion({
//       ...region,
//       latitude,
//       longitude,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       {/* Manual Input for City and Pincode */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Display Current Location */}
//       {currentLocation.latitude !== 0 && currentLocation.longitude !== 0 && (
//         <Text style={styles.locationText}>Current Location: {`Lat: ${currentLocation.latitude}, Long: ${currentLocation.longitude}`}</Text>
//       )}

//       {/* Map Component */}
//       <MapView
//         style={styles.map}
//         region={region}
//         onPress={handleMapPress}
//       >
//         <Marker coordinate={currentLocation} title="Selected Location" />
//       </MapView>

//       {/* Buttons */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
//   map: {
//     width: '100%',
//     height: 300,
//     marginVertical: 20,
//   },
// });

// export default SelectLocationScreen;






// import React, { FC, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Platform,
// } from 'react-native';
// import Geolocation from 'react-native-geolocation-service'; // To get current location
// import { PermissionsAndroid } from 'react-native'; // To request location permission
// import MapView, { Marker } from 'react-native-maps'; // Map component for displaying map and markers

// type SelectLocationScreenProps = {
//   navigation: any; // Adjust based on your navigation setup
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation }) => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState({
//     latitude: 0,
//     longitude: 0,
//   });
//   const [region, setRegion] = useState({
//     latitude: 0,
//     longitude: 0,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;
//   };

//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     if (currentLocation.latitude === 0 || currentLocation.longitude === 0) {
//       Alert.alert('Error', 'Please select a location on the map or use your current location.');
//       return;
//     }
//     Alert.alert(
//       'Location Set',
//       `City: ${city}, Pincode: ${pincode}`,
//       [
//         {
//           text: 'OK',
//           onPress: () =>
//             navigation.navigate('ProductScreen', {
//               city,
//               pincode,
//               latitude: currentLocation.latitude,
//               longitude: currentLocation.longitude,
//             }),
//         },
//       ]
//     );
//   };

//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({ latitude, longitude });
//         setRegion({
//           ...region,
//           latitude,
//           longitude,
//         });
//         Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   const handleMapPress = (e: any) => {
//     const { latitude, longitude } = e.nativeEvent.coordinate;
//     setCurrentLocation({ latitude, longitude });
//     setRegion({
//       ...region,
//       latitude,
//       longitude,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {currentLocation.latitude !== 0 && currentLocation.longitude !== 0 && (
//         <Text style={styles.locationText}>
//           Current Location: {`Lat: ${currentLocation.latitude}, Long: ${currentLocation.longitude}`}
//         </Text>
//       )}

//       <MapView style={styles.map} region={region} onPress={handleMapPress}>
//         <Marker coordinate={currentLocation} title="Selected Location" />
//       </MapView>

//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
//   map: {
//     width: '100%',
//     height: 300,
//     marginVertical: 20,
//   },
// });

// export default SelectLocationScreen;



// import React, { FC, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Platform,
// } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import { PermissionsAndroid } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// type SelectLocationScreenProps = {
//   navigation: any;
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation }) => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState({
//     latitude: 0,
//     longitude: 0,
//   });
//   const [region, setRegion] = useState({
//     latitude: 40.7128,  // Example default region (New York)
//     longitude: -74.0060,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;
//   };

//   const isValidPincode = (pincode: string) => /^\d{6}$/.test(pincode);  // Example for 6-digit pin code

//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     if (!isValidPincode(pincode)) {
//       Alert.alert('Error', 'Please enter a valid pincode.');
//       return;
//     }

//     if (currentLocation.latitude === 0 || currentLocation.longitude === 0) {
//       Alert.alert('Error', 'Please select a location on the map or use your current location.');
//       return;
//     }

//     Alert.alert(
//       'Location Set',
//       `City: ${city}, Pincode: ${pincode}`,
//       [
//         {
//           text: 'OK',
//           onPress: () =>
//             navigation.navigate('ProductScreen', {
//               city,
//               pincode,
//               latitude: currentLocation.latitude,
//               longitude: currentLocation.longitude,
//             }),
//         },
//       ]
//     );
//   };

//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({ latitude, longitude });
//         setRegion({
//           ...region,
//           latitude,
//           longitude,
//         });
//         Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   const handleMapPress = (e: any) => {
//     const { latitude, longitude } = e.nativeEvent.coordinate;
//     setCurrentLocation({ latitude, longitude });
//     setRegion({
//       ...region,
//       latitude,
//       longitude,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {currentLocation.latitude !== 0 && currentLocation.longitude !== 0 && (
//         <Text style={styles.locationText}>
//           Current Location: {`Lat: ${currentLocation.latitude}, Long: ${currentLocation.longitude}`}
//         </Text>
//       )}

//       <MapView style={styles.map} region={region} onPress={handleMapPress}>
//         <Marker coordinate={currentLocation} title="Selected Location" />
//       </MapView>

//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
//   map: {
//     width: '100%',
//     height: 300,
//     marginVertical: 20,
//   },
// });

// export default SelectLocationScreen;



// import React, { FC, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Platform,
//   Linking,
// } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import { PermissionsAndroid } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// type SelectLocationScreenProps = {
//   navigation: any;
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation }) => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState({
//     latitude: 0,
//     longitude: 0,
//   });
//   const [region, setRegion] = useState({
//     latitude: 40.7128,  // Example default region (New York)
//     longitude: -74.0060,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;
//   };

//   const isValidPincode = (pincode: string) => /^\d{6}$/.test(pincode);  // Example for 6-digit pin code

//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     if (!isValidPincode(pincode)) {
//       Alert.alert('Error', 'Please enter a valid pincode.');
//       return;
//     }

//     if (currentLocation.latitude === 0 || currentLocation.longitude === 0) {
//       Alert.alert('Error', 'Please select a location on the map or use your current location.');
//       return;
//     }

//     // Open external map (Google Maps or Apple Maps)
//     const lat = currentLocation.latitude;
//     const lon = currentLocation.longitude;

//     const url = Platform.select({
//       ios: `http://maps.apple.com/?ll=${lat},${lon}`,
//       android: `https://www.google.com/maps?q=${lat},${lon}`,
//     });

//     Linking.openURL(url)
//       .catch((err) => Alert.alert('Error', 'Failed to open map'));

//     // Navigate to the next screen
//     Alert.alert(
//       'Location Set',
//       `City: ${city}, Pincode: ${pincode}`,
//       [
//         {
//           text: 'OK',
//           onPress: () =>
//             navigation.navigate('ProductScreen', {
//               city,
//               pincode,
//               latitude: currentLocation.latitude,
//               longitude: currentLocation.longitude,
//             }),
//         },
//       ]
//     );
//   };

//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({ latitude, longitude });
//         setRegion({
//           ...region,
//           latitude,
//           longitude,
//         });
//         Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   const handleMapPress = (e: any) => {
//     const { latitude, longitude } = e.nativeEvent.coordinate;
//     setCurrentLocation({ latitude, longitude });
//     setRegion({
//       ...region,
//       latitude,
//       longitude,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {currentLocation.latitude !== 0 && currentLocation.longitude !== 0 && (
//         <Text style={styles.locationText}>
//           Current Location: {`Lat: ${currentLocation.latitude}, Long: ${currentLocation.longitude}`}
//         </Text>
//       )}

//       <MapView style={styles.map} region={region} onPress={handleMapPress}>
//         <Marker coordinate={currentLocation} title="Selected Location" />
//       </MapView>

//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
//   map: {
//     width: '100%',
//     height: 300,
//     marginVertical: 20,
//   },
// });

// export default SelectLocationScreen;



// import React, { FC, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Platform,
//   Linking,
// } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import { PermissionsAndroid } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// type SelectLocationScreenProps = {
//   navigation: any;
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation }) => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState({
//     latitude: 0,
//     longitude: 0,
//   });
//   const [region, setRegion] = useState({
//     latitude: 40.7128,  // Example default region (New York)
//     longitude: -74.0060,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;
//   };

//   const isValidPincode = (pincode: string) => /^\d{6}$/.test(pincode);  // Example for 6-digit pin code

//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     if (!isValidPincode(pincode)) {
//       Alert.alert('Error', 'Please enter a valid pincode.');
//       return;
//     }

//     if (currentLocation.latitude === 0 || currentLocation.longitude === 0) {
//       Alert.alert('Error', 'Please select a location on the map or use your current location.');
//       return;
//     }

//     const lat = currentLocation.latitude;
//     const lon = currentLocation.longitude;

//     // Validate that lat and lon are numbers and not undefined
//     if (isNaN(lat) || isNaN(lon)) {
//       Alert.alert('Error', 'Invalid location coordinates.');
//       return;
//     }

//     // Construct the URL for opening the map
//     const url = Platform.select({
//       ios: `http://maps.apple.com/?ll=${lat},${lon}`,
//       android: `https://www.google.com/maps?q=${lat},${lon}`,
//     });

//     if (url) {
//       Linking.openURL(url)
//         .catch((err) => Alert.alert('Error', 'Failed to open map'));
//     } else {
//       Alert.alert('Error', 'Unable to open the map.');
//     }

//     // Navigate to the next screen
//     Alert.alert(
//       'Location Set',
//       `City: ${city}, Pincode: ${pincode}`,
//       [
//         {
//           text: 'OK',
//           onPress: () =>
//             navigation.navigate('ProductScreen', {
//               city,
//               pincode,
//               latitude: currentLocation.latitude,
//               longitude: currentLocation.longitude,
//             }),
//         },
//       ]
//     );
//   };

//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({ latitude, longitude });
//         setRegion({
//           ...region,
//           latitude,
//           longitude,
//         });
//         Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   const handleMapPress = (e: any) => {
//     const { latitude, longitude } = e.nativeEvent.coordinate;
//     setCurrentLocation({ latitude, longitude });
//     setRegion({
//       ...region,
//       latitude,
//       longitude,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {currentLocation.latitude !== 0 && currentLocation.longitude !== 0 && (
//         <Text style={styles.locationText}>
//           Current Location: {`Lat: ${currentLocation.latitude}, Long: ${currentLocation.longitude}`}
//         </Text>
//       )}

//       <MapView style={styles.map} region={region} onPress={handleMapPress}>
//         <Marker coordinate={currentLocation} title="Selected Location" />
//       </MapView>

//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
//   map: {
//     width: '100%',
//     height: 300,
//     marginVertical: 20,
//   },
// });

// export default SelectLocationScreen;




// import React, { FC, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Platform,
//   Linking,
// } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import { PermissionsAndroid } from 'react-native';
// import MapView, { Marker, UrlTile } from 'react-native-maps';

// type SelectLocationScreenProps = {
//   navigation: any;
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation }) => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState({
//     latitude: 0,
//     longitude: 0,
//   });
//   const [region, setRegion] = useState({
//     latitude: 40.7128,  // Example default region (New York)
//     longitude: -74.0060,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;
//   };

//   const isValidPincode = (pincode: string) => /^\d{6}$/.test(pincode);  // Example for 6-digit pin code

//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     if (!isValidPincode(pincode)) {
//       Alert.alert('Error', 'Please enter a valid pincode.');
//       return;
//     }

//     if (currentLocation.latitude === 0 || currentLocation.longitude === 0) {
//       Alert.alert('Error', 'Please select a location on the map or use your current location.');
//       return;
//     }

//     const lat = currentLocation.latitude;
//     const lon = currentLocation.longitude;

//     // Validate that lat and lon are numbers and not undefined
//     if (isNaN(lat) || isNaN(lon)) {
//       Alert.alert('Error', 'Invalid location coordinates.');
//       return;
//     }

//     // Construct the URL for opening the map
//     const url = Platform.select({
//       ios: `http://maps.apple.com/?ll=${lat},${lon}`,
//       android: `https://www.google.com/maps?q=${lat},${lon}`,
//     });

//     if (url) {
//       Linking.openURL(url)
//         .catch((err) => Alert.alert('Error', 'Failed to open map'));
//     } else {
//       Alert.alert('Error', 'Unable to open the map.');
//     }

//     // Navigate to the next screen
//     Alert.alert(
//       'Location Set',
//       `City: ${city}, Pincode: ${pincode}`,
//       [
//         {
//           text: 'OK',
//           onPress: () =>
//             navigation.navigate('ProductScreen', {
//               city,
//               pincode,
//               latitude: currentLocation.latitude,
//               longitude: currentLocation.longitude,
//             }),
//         },
//       ]
//     );
//   };

//   const handleUseCurrentLocation = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({ latitude, longitude });
//         setRegion({
//           ...region,
//           latitude,
//           longitude,
//         });
//         Alert.alert('Current Location', `Latitude: ${latitude}, Longitude: ${longitude}`);
//       },
//       error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to retrieve location. Ensure location services are enabled.');
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   const handleMapPress = (e: any) => {
//     const { latitude, longitude } = e.nativeEvent.coordinate;
//     setCurrentLocation({ latitude, longitude });
//     setRegion({
//       ...region,
//       latitude,
//       longitude,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {currentLocation.latitude !== 0 && currentLocation.longitude !== 0 && (
//         <Text style={styles.locationText}>
//           Current Location: {`Lat: ${currentLocation.latitude}, Long: ${currentLocation.longitude}`}
//         </Text>
//       )}

//       <MapView style={styles.map} region={region} onPress={handleMapPress}>
//         {/* OpenStreetMap Tile */}
//         <UrlTile
//           urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           maximumZ={19}
//         />
//         <Marker coordinate={currentLocation} title="Selected Location" />
//       </MapView>

//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleUseCurrentLocation}>
//         <Text style={styles.buttonText}>Use Current Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#333',
//   },
//   map: {
//     width: '100%',
//     height: 300,
//     marginVertical: 20,
//   },
// });

// export default SelectLocationScreen;



// import React, { FC, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform, Linking } from 'react-native';  // Import Linking here
// import MapView, { Marker } from 'react-native-maps';

// const SelectLocationScreen: FC = () => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [currentLocation, setCurrentLocation] = useState({
//     latitude: 0,
//     longitude: 0,
//   });

//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     const lat = currentLocation.latitude;
//     const lon = currentLocation.longitude;

//     if (lat === 0 || lon === 0) {
//       Alert.alert('Error', 'Please select a location on the map or use your current location.');
//       return;
//     }

//     const url = Platform.select({
//       ios: `http://maps.apple.com/?ll=${lat},${lon}`,
//       android: `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=15/${lat}/${lon}`,
//     });

//     if (url) {
//       Linking.openURL(url).catch((err: Error) => Alert.alert('Error', 'Failed to open map.')); // Add the error type here
//     }
//   };

//   const handleMapPress = (e: any) => {
//     const { latitude, longitude } = e.nativeEvent.coordinate;
//     setCurrentLocation({ latitude, longitude });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Your Location</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       <MapView style={styles.map} onPress={handleMapPress}>
//         <Marker coordinate={currentLocation} title="Selected Location" />
//       </MapView>

//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   map: {
//     width: '100%',
//     height: 300,
//     marginVertical: 20,
//   },
// });

// export default SelectLocationScreen;




//good code 
// import React, { FC, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Platform,
// } from 'react-native';
// import { PermissionsAndroid } from 'react-native';

// type SelectLocationScreenProps = {
//   navigation: any; // Adjust based on your navigation setup
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = () => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');

//   // Request location permissions
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location while using the app.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );

//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         Alert.alert('Permission Granted', 'You can now use location services.');
//       } else {
//         Alert.alert('Permission Denied', 'Location services will not work without permission.');
//       }
//     } else {
//       Alert.alert(
//         'Permission Required',
//         'On iOS, please enable location permissions in your device settings.'
//       );
//     }
//   };

//   // Handle manual location input confirmation
//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>

//       {/* Manual Input for City and Pincode */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Confirm Location Button */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>

//       {/* Request Permission Button */}
//       <TouchableOpacity style={styles.button} onPress={requestLocationPermission}>
//         <Text style={styles.buttonText}>Allow Location Access</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default SelectLocationScreen;





// // import React, {useState, useEffect} from 'react';
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   StyleSheet,
// //   Alert,
// //   TextInput,
// //   Platform,
// //   Linking,
// // } from 'react-native';
// // import MapView, {Marker, MapEvent} from 'react-native-maps';
// // import Geolocation from '@react-native-community/geolocation';
// // import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

// // const SelectLocationScreen: React.FC = () => {
// //   const [locationGranted, setLocationGranted] = useState(false);
// //   const [currentLocation, setCurrentLocation] = useState({
// //     latitude: 37.7749, // Default coordinates
// //     longitude: -122.4194,
// //   });
// //   const [city, setCity] = useState('');
// //   const [pincode, setPincode] = useState('');

// //   useEffect(() => {
// //     if (locationGranted) {
// //       getCurrentLocation();
// //     }
// //   }, [locationGranted]);

//   // Request location permissions
//   const requestLocationPermission = async () => {
//     try {
//       const result = await request(
//         Platform.OS === 'ios'
//           ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
//           : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
//       );
//       if (result === RESULTS.GRANTED) {
//         setLocationGranted(true);
//       } else {
//         Alert.alert('Permission Denied', 'Location access is required.');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to request permissions.');
//     }
//   };

//   // Fetch the current location
//   const getCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position: { coords: { latitude: any; longitude: any; }; }) => {
//         const {latitude, longitude} = position.coords;
//         setCurrentLocation({latitude, longitude});
//       },
//       (error: any) => {
//         Alert.alert('Error', 'Failed to fetch location.');
//       },
//       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
//     );
//   };

//   const handleMapPress = (e: MapEvent) => {
//     const {latitude, longitude} = e.nativeEvent.coordinate;
//     setCurrentLocation({latitude, longitude});
//   };

//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     const {latitude, longitude} = currentLocation;

//     const url = Platform.select({
//       ios: `http://maps.apple.com/?ll=${latitude},${longitude}`,
//       android: `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`,
//     });

//     if (url) {
//       Linking.openURL(url).catch(() =>
//         Alert.alert('Error', 'Failed to open map link.')
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {!locationGranted ? (
//         <View style={styles.permissionContainer}>
//           <Text style={styles.title}>Allow Location Access</Text>
//           <Text style={styles.description}>
//             To proceed, please allow access to your location.
//           </Text>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={requestLocationPermission}>
//             <Text style={styles.buttonText}>Allow Location Access</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <View style={styles.contentContainer}>
//           <Text style={styles.title}>Select Your Location</Text>

//           <TextInput
//             style={styles.input}
//             placeholder="Enter City"
//             value={city}
//             onChangeText={setCity}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Pincode"
//             value={pincode}
//             onChangeText={setPincode}
//             keyboardType="numeric"
//           />

//           <MapView
//             style={styles.map}
//             initialRegion={{
//               latitude: currentLocation.latitude,
//               longitude: currentLocation.longitude,
//               latitudeDelta: 0.1,
//               longitudeDelta: 0.1,
//             }}
//             onPress={handleMapPress}>
//             <Marker
//               coordinate={currentLocation}
//               title="Selected Location"
//               description="This is your selected location."
//             />
//           </MapView>

//           <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//             <Text style={styles.buttonText}>Confirm Location</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F3E5F5',
//   },
//   permissionContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   map: {
//     width: '100%',
//     height: 300,
//     marginVertical: 20,
//   },
// });

// export default SelectLocationScreen;





// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   TextInput,
//   Platform,
//   Linking,
// } from 'react-native';
// import MapView, { Marker, MapPressEvent } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

// const SelectLocationScreen: React.FC = () => {
//   const [locationGranted, setLocationGranted] = useState(false);
//   const [currentLocation, setCurrentLocation] = useState({
//     latitude: 37.7749, // Default coordinates
//     longitude: -122.4194,
//   });
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');

//   useEffect(() => {
//     if (locationGranted) {
//       getCurrentLocation();
//     }
//   }, [locationGranted]);

//   // Request location permissions
//   const requestLocationPermission = async () => {
//     try {
//       const result = await request(
//         Platform.OS === 'ios'
//           ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
//           : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
//       );
//       if (result === RESULTS.GRANTED) {
//         setLocationGranted(true);
//       } else {
//         Alert.alert('Permission Denied', 'Location access is required.');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to request permissions.');
//     }
//   };

//   // Fetch the current location
//   const getCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({ latitude, longitude });
//       },
//       (error) => {
//         Alert.alert('Error', 'Failed to fetch location.');
//       },
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//   };

//   const handleMapPress = (e: MapPressEvent) => {
//     const { latitude, longitude } = e.nativeEvent.coordinate;
//     setCurrentLocation({ latitude, longitude });
//   };

//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     const { latitude, longitude } = currentLocation;

//     const url = Platform.select({
//       ios: `http://maps.apple.com/?ll=${latitude},${longitude}`,
//       android: `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`,
//     });

//     if (url) {
//       Linking.openURL(url).catch(() =>
//         Alert.alert('Error', 'Failed to open map link.')
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {!locationGranted ? (
//         <View style={styles.permissionContainer}>
//           <Text style={styles.title}>Allow Location Access</Text>
//           <Text style={styles.description}>
//             To proceed, please allow access to your location.
//           </Text>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={requestLocationPermission}
//           >
//             <Text style={styles.buttonText}>Allow Location Access</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <View style={styles.contentContainer}>
//           <Text style={styles.title}>Select Your Location</Text>

//           <TextInput
//             style={styles.input}
//             placeholder="Enter City"
//             value={city}
//             onChangeText={setCity}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Pincode"
//             value={pincode}
//             onChangeText={setPincode}
//             keyboardType="numeric"
//           />

//           <MapView
//             style={styles.map}
//             initialRegion={{
//               latitude: currentLocation.latitude,
//               longitude: currentLocation.longitude,
//               latitudeDelta: 0.1,
//               longitudeDelta: 0.1,
//             }}
//             onPress={handleMapPress}
//           >
//             <Marker
//               coordinate={currentLocation}
//               title="Selected Location"
//               description="This is your selected location."
//             />
//           </MapView>

//           <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//             <Text style={styles.buttonText}>Confirm Location</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F3E5F5',
//   },
//   permissionContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   map: {
//     width: '100%',
//     height: 300,
//     marginVertical: 20,
//   },
// });

// export default SelectLocationScreen;




// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   TextInput,
//   Platform,
//   Linking,
// } from 'react-native';
// import MapView, { Marker, MapEvent } from 'react-native-maps';
// import Geolocation, { GeolocationResponse, GeolocationError } from '@react-native-community/geolocation';
// import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

// const SelectLocationScreen: React.FC = () => {
//   const [locationGranted, setLocationGranted] = useState(false);
//   const [currentLocation, setCurrentLocation] = useState({
//     latitude: 37.7749, // Default coordinates
//     longitude: -122.4194,
//   });
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');

//   useEffect(() => {
//     if (locationGranted) {
//       getCurrentLocation();
//     }
//   }, [locationGranted]);

//   // Request location permissions
//   const requestLocationPermission = async () => {
//     try {
//       const result = await request(
//         Platform.OS === 'ios'
//           ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
//           : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
//       );
//       if (result === RESULTS.GRANTED) {
//         setLocationGranted(true);
//       } else {
//         Alert.alert('Permission Denied', 'Location access is required.');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to request permissions.');
//     }
//   };

//   // Fetch the current location
//   const getCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position: GeolocationResponse) => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({ latitude, longitude });
//       },
//       (error: GeolocationError) => {
//         Alert.alert('Error', 'Failed to fetch location.');
//       },
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//   };

//   const handleMapPress = (e: MapEvent) => {
//     const { latitude, longitude } = e.nativeEvent.coordinate;
//     setCurrentLocation({ latitude, longitude });
//   };

//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     const { latitude, longitude } = currentLocation;

//     const url = Platform.select({
//       ios: `http://maps.apple.com/?ll=${latitude},${longitude}`,
//       android: `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`,
//     });

//     if (url) {
//       Linking.openURL(url).catch(() =>
//         Alert.alert('Error', 'Failed to open map link.')
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {!locationGranted ? (
//         <View style={styles.permissionContainer}>
//           <Text style={styles.title}>Allow Location Access</Text>
//           <Text style={styles.description}>
//             To proceed, please allow access to your location.
//           </Text>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={requestLocationPermission}>
//             <Text style={styles.buttonText}>Allow Location Access</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <View style={styles.contentContainer}>
//           <Text style={styles.title}>Select Your Location</Text>

//           <TextInput
//             style={styles.input}
//             placeholder="Enter City"
//             value={city}
//             onChangeText={setCity}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Pincode"
//             value={pincode}
//             onChangeText={setPincode}
//             keyboardType="numeric"
//           />

//           <MapView
//             style={styles.map}
//             initialRegion={{
//               latitude: currentLocation.latitude,
//               longitude: currentLocation.longitude,
//               latitudeDelta: 0.1,
//               longitudeDelta: 0.1,
//             }}
//             onPress={handleMapPress}>
//             <Marker
//               coordinate={currentLocation}
//               title="Selected Location"
//               description="This is your selected location."
//             />
//           </MapView>

//           <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//             <Text style={styles.buttonText}>Confirm Location</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F3E5F5',
//   },
//   permissionContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   map: {
//     width: '100%',
//     height: 300,
//     marginVertical: 20,
//   },
// });

// export default SelectLocationScreen;



// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   TextInput,
//   Platform,
//   Linking,
//   NativeSyntheticEvent,
// } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

// const SelectLocationScreen: React.FC = () => {
//   const [locationGranted, setLocationGranted] = useState(false);
//   const [currentLocation, setCurrentLocation] = useState({
//     latitude: 37.7749, // Default coordinates
//     longitude: -122.4194,
//   });
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');

//   useEffect(() => {
//     if (locationGranted) {
//       getCurrentLocation();
//     }
//   }, [locationGranted]);

//   // Request location permissions
//   const requestLocationPermission = async () => {
//     try {
//       const result = await request(
//         Platform.OS === 'ios'
//           ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
//           : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
//       );
//       if (result === RESULTS.GRANTED) {
//         setLocationGranted(true);
//       } else {
//         Alert.alert('Permission Denied', 'Location access is required.');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to request permissions.');
//     }
//   };

//   // Fetch the current location
//   const getCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position: Geolocation.GeoPosition) => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({ latitude, longitude });
//       },
//       (error: Geolocation.GeoPositionError) => {
//         Alert.alert('Error', 'Failed to fetch location.');
//       },
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//   };

//   const handleMapPress = (e: NativeSyntheticEvent<any>) => {
//     const { latitude, longitude } = e.nativeEvent.coordinate;
//     setCurrentLocation({ latitude, longitude });
//   };

//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     const { latitude, longitude } = currentLocation;

//     const url = Platform.select({
//       ios: `http://maps.apple.com/?ll=${latitude},${longitude}`,
//       android: `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`,
//     });

//     if (url) {
//       Linking.openURL(url).catch(() =>
//         Alert.alert('Error', 'Failed to open map link.')
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {!locationGranted ? (
//         <View style={styles.permissionContainer}>
//           <Text style={styles.title}>Allow Location Access</Text>
//           <Text style={styles.description}>
//             To proceed, please allow access to your location.
//           </Text>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={requestLocationPermission}>
//             <Text style={styles.buttonText}>Allow Location Access</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <View style={styles.contentContainer}>
//           <Text style={styles.title}>Select Your Location</Text>

//           <TextInput
//             style={styles.input}
//             placeholder="Enter City"
//             value={city}
//             onChangeText={setCity}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Pincode"
//             value={pincode}
//             onChangeText={setPincode}
//             keyboardType="numeric"
//           />

//           <MapView
//             style={styles.map}
//             initialRegion={{
//               latitude: currentLocation.latitude,
//               longitude: currentLocation.longitude,
//               latitudeDelta: 0.1,
//               longitudeDelta: 0.1,
//             }}
//             onPress={handleMapPress}>
//             <Marker
//               coordinate={currentLocation}
//               title="Selected Location"
//               description="This is your selected location."
//             />
//           </MapView>

//           <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//             <Text style={styles.buttonText}>Confirm Location</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F3E5F5',
//   },
//   permissionContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   map: {
//     width: '100%',
//     height: 300,
//     marginVertical: 20,
//   },
// });

// export default SelectLocationScreen;




// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   TextInput,
//   Platform,
//   Linking,
//   NativeSyntheticEvent,
// } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service'; // Using the updated geolocation package
// import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

// const SelectLocationScreen: React.FC = () => {
//   const [locationGranted, setLocationGranted] = useState(false);
//   const [currentLocation, setCurrentLocation] = useState({
//     latitude: 37.7749, // Default coordinates
//     longitude: -122.4194,
//   });
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');

//   useEffect(() => {
//     if (locationGranted) {
//       getCurrentLocation();
//     }
//   }, [locationGranted]);

//   // Request location permissions
//   const requestLocationPermission = async () => {
//     try {
//       const result = await request(
//         Platform.OS === 'ios'
//           ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
//           : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
//       );
//       if (result === RESULTS.GRANTED) {
//         setLocationGranted(true);
//       } else {
//         Alert.alert('Permission Denied', 'Location access is required.');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to request permissions.');
//     }
//   };

//   // Fetch the current location
//   const getCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({ latitude, longitude });
//       },
//       (error) => {
//         Alert.alert('Error', 'Failed to fetch location.');
//       },
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//   };

//   // Map Press event handler
//   const handleMapPress = (e: NativeSyntheticEvent<any>) => {
//     const { latitude, longitude } = e.nativeEvent.coordinate;
//     setCurrentLocation({ latitude, longitude });
//   };

//   // Set location after confirmation
//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     const { latitude, longitude } = currentLocation;

//     const url = Platform.select({
//       ios: `http://maps.apple.com/?ll=${latitude},${longitude}`,
//       android: `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`,
//     });

//     if (url) {
//       Linking.openURL(url).catch(() =>
//         Alert.alert('Error', 'Failed to open map link.')
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {!locationGranted ? (
//         <View style={styles.permissionContainer}>
//           <Text style={styles.title}>Allow Location Access</Text>
//           <Text style={styles.description}>
//             To proceed, please allow access to your location.
//           </Text>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={requestLocationPermission}>
//             <Text style={styles.buttonText}>Allow Location Access</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <View style={styles.contentContainer}>
//           <Text style={styles.title}>Select Your Location</Text>

//           <TextInput
//             style={styles.input}
//             placeholder="Enter City"
//             value={city}
//             onChangeText={setCity}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Pincode"
//             value={pincode}
//             onChangeText={setPincode}
//             keyboardType="numeric"
//           />

//           <MapView
//             style={styles.map}
//             initialRegion={{
//               latitude: currentLocation.latitude,
//               longitude: currentLocation.longitude,
//               latitudeDelta: 0.1,
//               longitudeDelta: 0.1,
//             }}
//             onPress={handleMapPress}>
//             <Marker
//               coordinate={currentLocation}
//               title="Selected Location"
//               description="This is your selected location."
//             />
//           </MapView>

//           <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//             <Text style={styles.buttonText}>Confirm Location</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F3E5F5',
//   },
//   permissionContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   map: {
//     width: '100%',
//     height: 300,
//     marginVertical: 20,
//   },
// });

// export default SelectLocationScreen;







//good code 1


// import React, { FC, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Platform,
//   PermissionsAndroid,
// } from 'react-native';

// type SelectLocationScreenProps = {
//   navigation: any; // Adjust based on your navigation setup
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation }) => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');

//   // Request location permissions
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location while using the app.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );

//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         Alert.alert('Permission Granted', 'You can now use location services.');
//         // Proceed to Enable Notification screen after location permission granted
//         navigation.navigate('EnableNotification');
//       } else {
//         Alert.alert('Permission Denied', 'Location services will not work without permission.');
//       }
//     } else {
//       Alert.alert(
//         'Permission Required',
//         'On iOS, please enable location permissions in your device settings.'
//       );
//     }
//   };

//   // Handle manual location input confirmation
//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//     // Proceed to Enable Notification screen after location set
//     navigation.navigate('EnableNotification');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>

//       {/* Manual Input for City and Pincode */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Confirm Location Button */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>

//       {/* Request Permission Button */}
//       <TouchableOpacity style={styles.button} onPress={requestLocationPermission}>
//         <Text style={styles.buttonText}>Allow Location Access</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default SelectLocationScreen;



//Good Code 2

// import React, { FC, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform, PermissionsAndroid } from 'react-native';
// import { SelectLocationScreenNavigationProp } from '../navigation/types'; // Import the correct type for navigation

// type SelectLocationScreenProps = {
//   navigation: SelectLocationScreenNavigationProp; // Use the correct type for navigation
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation }) => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');

//   // Request location permissions
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location while using the app.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );

//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         Alert.alert('Permission Granted', 'You can now use location services.');
//         // Navigate to Enable Notification screen after location permission granted
//         navigation.navigate('EnableNotification');
//       } else {
//         Alert.alert('Permission Denied', 'Location services will not work without permission.');
//       }
//     } else {
//       Alert.alert(
//         'Permission Required',
//         'On iOS, please enable location permissions in your device settings.'
//       );
//     }
//   };

//   // Handle manual location input confirmation
//   const handleSetLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//     // Navigate to Enable Notification screen after location set
//     navigation.navigate('EnableNotification');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>

//       {/* Manual Input for City and Pincode */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Confirm Location Button */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>

//       {/* Request Permission Button */}
//       <TouchableOpacity style={styles.button} onPress={requestLocationPermission}>
//         <Text style={styles.buttonText}>Allow Location Access</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default SelectLocationScreen;

// import React, { useState } from 'react';
// import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,Platform,PermissionsAndroid,} from 'react-native';
// import SQLite, { SQLiteDatabase, Transaction } from 'react-native-sqlite-storage';

// SQLite.enablePromise(true); // Enable Promises for better handling

// // Open the database
// const database = SQLite.openDatabase({ name: 'LocationDB.db', location: 'default' });

// const SelectLocationScreen: React.FC = () => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');

//   // Request location permissions
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location while using the app.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );

//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         Alert.alert('Permission Granted', 'You can now use location services.');
//       } else {
//         Alert.alert('Permission Denied', 'Location services will not work without permission.');
//       }
//     } else {
//       Alert.alert(
//         'Permission Required',
//         'On iOS, please enable location permissions in your device settings.'
//       );
//     }
//   };

//   // Function to insert location into the database
//   const insertLocation = () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }

//     database
//       .then((db: SQLiteDatabase) => {
//         db.transaction((tx: Transaction) => {
//           tx.executeSql(
//             `INSERT INTO locations (city, pincode) VALUES (?, ?)`,
//             [city, pincode],
//             () => Alert.alert('Success', 'Location saved successfully.'),
//             (_, error) => {
//               console.error('Error saving location:', error);
//               Alert.alert('Error', 'Failed to save location.');
//               return true; // Indicate error
//             }
//           );
//         });
//       })
//       .catch((error) => {
//         console.error('Database error:', error);
//         Alert.alert('Database Error', 'Failed to open database.');
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       <TouchableOpacity style={styles.button} onPress={insertLocation}>
//         <Text style={styles.buttonText}>Save Location</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={requestLocationPermission}>
//         <Text style={styles.buttonText}>Allow Location Access</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default SelectLocationScreen;


import React, { FC, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform, PermissionsAndroid } from 'react-native';
import { SelectLocationScreenNavigationProp } from '../navigation/types'; // Import the correct type for navigation

type SelectLocationScreenProps = {
  navigation: SelectLocationScreenNavigationProp; // Use the correct type for navigation
};

const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation }) => {
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');

  // Request location permissions
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app requires access to your location while using the app.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permission Granted', 'You can now use location services.');
        // Navigate to Enable Notification screen after location permission granted
        navigation.navigate('EnableNotification');
      } else {
        Alert.alert('Permission Denied', 'Location services will not work without permission.');
      }
    } else {
      Alert.alert(
        'Permission Required',
        'On iOS, please enable location permissions in your device settings.'
      );
    }
  };

  // Handle manual location input confirmation
  const handleSetLocation = () => {
    if (!city || !pincode) {
      Alert.alert('Error', 'Please enter both city and pincode.');
      return;
    }
    Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
    // Navigate to Enable Notification screen after location set
    navigation.navigate('EnableNotification');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Location</Text>

      {/* Manual Input for City and Pincode */}
      <TextInput
        style={styles.input}
        placeholder="Enter City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Pincode"
        value={pincode}
        onChangeText={setPincode}
        keyboardType="numeric"
      />

      {/* Confirm Location Button */}
      <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
        <Text style={styles.buttonText}>Confirm Location</Text>
      </TouchableOpacity>

      {/* Request Permission Button */}
      <TouchableOpacity style={styles.button} onPress={requestLocationPermission}>
        <Text style={styles.buttonText}>Allow Location Access</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F3E5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#A020F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SelectLocationScreen;



//sql code


// import React, { FC, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform, PermissionsAndroid } from 'react-native';
// import { SelectLocationScreenNavigationProp } from '../navigation/types'; // Import the correct type for navigation
// import { insertLocation } from '../databases/Database'; // Adjust the import according to your file structure

// type SelectLocationScreenProps = {
//   navigation: SelectLocationScreenNavigationProp; // Use the correct type for navigation
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation }) => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');

//   // Request location permissions
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app requires access to your location while using the app.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );

//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         Alert.alert('Permission Granted', 'You can now use location services.');
//         // Navigate to Enable Notification screen after location permission granted
//         navigation.navigate('EnableNotification');
//       } else {
//         Alert.alert('Permission Denied', 'Location services will not work without permission.');
//       }
//     } else {
//       Alert.alert(
//         'Permission Required',
//         'On iOS, please enable location permissions in your device settings.'
//       );
//     }
//   };

//   // Handle manual location input confirmation
//   const handleSetLocation = async () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     try {
//       // Insert location data into SQLite database
//       await insertLocation(city, pincode);
//       Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
      
//       // Navigate to Enable Notification screen after location is set
//       navigation.navigate('EnableNotification');
//     } catch (error) {
//       Alert.alert('Error', 'Failed to save location.');
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>

//       {/* Manual Input for City and Pincode */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />

//       {/* Confirm Location Button */}
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>

//       {/* Request Permission Button */}
//       <TouchableOpacity style={styles.button} onPress={requestLocationPermission}>
//         <Text style={styles.buttonText}>Allow Location Access</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default SelectLocationScreen;






// import React, { FC, useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Platform,
//   PermissionsAndroid,
// } from 'react-native';
// import { SelectLocationScreenNavigationProp } from '../navigation/types';
// import { initDatabase, insertLocation } from '../databases/Database';

// type SelectLocationScreenProps = {
//   navigation: SelectLocationScreenNavigationProp;
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation }) => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');

//   useEffect(() => {
//     const initializeDb = async () => {
//       await initDatabase();
//     };
//     initializeDb();
//   }, []);

//   const requestLocationPermission = async () => {
//     try {
//       if (Platform.OS === 'android') {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: 'Location Permission',
//             message: 'This app requires access to your location while using the app.',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           }
//         );

//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           navigation.navigate('EnableNotification');
//         } else {
//           Alert.alert('Permission Denied', 'Location services will not work without permission.');
//         }
//       } else {
//         Alert.alert(
//           'Permission Required',
//           'On iOS, please enable location permissions in your device settings.'
//         );
//       }
//     } catch (error) {
//       console.error('Location Permission Error:', error);
//       Alert.alert('Error', 'An error occurred while requesting location permissions.');
//     }
//   };

//   const handleSetLocation = async () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     try {
//       await insertLocation(city, pincode);
//       Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//       navigation.navigate('EnableNotification');
//     } catch (error) {
//       console.error('Insert Location Error:', error);
//       Alert.alert('Error', 'Failed to save location.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={requestLocationPermission}>
//         <Text style={styles.buttonText}>Allow Location Access</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default SelectLocationScreen;




// import React, { FC, useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Platform,
//   PermissionsAndroid,
// } from 'react-native';
// import { SelectLocationScreenNavigationProp } from '../navigation/types';
// import { initDatabase, insertLocation } from '../databases/Database';

// type SelectLocationScreenProps = {
//   navigation: SelectLocationScreenNavigationProp;
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation }) => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');

//   useEffect(() => {
//     const initializeDb = async () => {
//       try {
//         await initDatabase();
//       } catch (error) {
//         console.error('Database initialization failed:', error);
//       }
//     };
//     initializeDb();
//   }, []);

//   const requestLocationPermission = async () => {
//     try {
//       if (Platform.OS === 'android') {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: 'Location Permission',
//             message: 'This app requires access to your location while using the app.',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           }
//         );

//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           navigation.navigate('EnableNotification');
//         } else {
//           Alert.alert('Permission Denied', 'Location services will not work without permission.');
//         }
//       } else {
//         Alert.alert(
//           'Permission Required',
//           'On iOS, please enable location permissions in your device settings.'
//         );
//       }
//     } catch (error) {
//       console.error('Location Permission Error:', error);
//       Alert.alert('Error', 'An error occurred while requesting location permissions.');
//     }
//   };

//   const handleSetLocation = async () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//     try {
//       await insertLocation(city, pincode);
//       Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//       navigation.navigate('EnableNotification');
//     } catch (error) {
//       console.error('Insert Location Error:', error);
//       Alert.alert('Error', 'Failed to save location.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={requestLocationPermission}>
//         <Text style={styles.buttonText}>Allow Location Access</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default SelectLocationScreen;





// import React, { FC, useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform, PermissionsAndroid } from 'react-native';
// import { SelectLocationScreenNavigationProp } from '../navigation/types';
// import { initDatabase, insertLocation } from '../databases/Database';

// type SelectLocationScreenProps = {
//   navigation: SelectLocationScreenNavigationProp;
// };

// const SelectLocationScreen: FC<SelectLocationScreenProps> = ({ navigation }) => {
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');

//   useEffect(() => {
//     const initializeDb = async () => {
//       try {
//         await initDatabase();
//       } catch (error) {
//         console.error('Database initialization failed:', error);
//       }
//     };
//     initializeDb();
//   }, []);

//   const requestLocationPermission = async () => {
//     try {
//       if (Platform.OS === 'android') {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: 'Location Permission',
//             message: 'This app requires access to your location while using the app.',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           }
//         );

//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           navigation.navigate('EnableNotification');
//         } else {
//           Alert.alert('Permission Denied', 'Location services will not work without permission.');
//         }
//       } else {
//         Alert.alert('Permission Required', 'On iOS, please enable location permissions in your device settings.');
//       }
//     } catch (error) {
//       console.error('Location Permission Error:', error);
//       Alert.alert('Error', 'An error occurred while requesting location permissions.');
//     }
//   };

//   const handleSetLocation = async () => {
//     if (!city || !pincode) {
//       Alert.alert('Error', 'Please enter both city and pincode.');
//       return;
//     }
//    {
//       await insertLocation(city, pincode);
//       Alert.alert('Location Set', `City: ${city}, Pincode: ${pincode}`);
//       navigation.navigate('EnableNotification');
//     }
//     // } catch (error) {
//     //   console.error('Insert Location Error:', error);
//     //   Alert.alert('Error', 'Failed to save location.');
    
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Your Location</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//         keyboardType="numeric"
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSetLocation}>
//         <Text style={styles.buttonText}>Confirm Location</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={requestLocationPermission}>
//         <Text style={styles.buttonText}>Allow Location Access</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default SelectLocationScreen;
