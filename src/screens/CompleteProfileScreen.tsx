import React, { FC, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { Picker } from '@react-native-picker/picker';

type CompleteProfileScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CompleteProfile'>;
};

const CompleteProfileScreen: FC<CompleteProfileScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default country code

  const handleCompleteProfile = () => {
    if (!name || !mobile) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    navigation.navigate('AllowLocation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete Your Profile</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      
      <View style={styles.phoneContainer}>
        <Picker
          selectedValue={countryCode}
          style={styles.countryCodePicker}
          onValueChange={(itemValue) => setCountryCode(itemValue)}
        >
          <Picker.Item label="+1" value="+1" />
          <Picker.Item label="+44" value="+44" />
          <Picker.Item label="+91" value="+91" />
          {/* Add more country codes as needed */}
        </Picker>
        
        <TextInput
          style={styles.phoneInput}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCompleteProfile}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor:'#F3E5F5',
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
    marginBottom: 15,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryCodePicker: {
    height: 50,
    width: 100,
  },
  phoneInput: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#A020F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CompleteProfileScreen;


// import React, { FC, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';
// import { Picker } from '@react-native-picker/picker';
// import { insertUserProfile } from '../databases/Database'; // Import the function to insert user profile

// type CompleteProfileScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'CompleteProfile'>;
//   route: any;  // To access userId passed from the previous screen (e.g., SignIn)
// };

// const CompleteProfileScreen: FC<CompleteProfileScreenProps> = ({ navigation, route }) => {
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [countryCode, setCountryCode] = useState('+1'); // Default country code
//   const { userId } = route.params; // Get userId from route params

//   const handleCompleteProfile = async () => {
//     if (!name || !mobile) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     try {
//       // Insert the profile into the database
//       await insertUserProfile(userId, name, countryCode, mobile);
//       // Navigate to the next screen after successful insertion
//       navigation.navigate('AllowLocation');
//     } catch (error) {
//       Alert.alert('Error', 'Failed to save profile. Please try again.');
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Complete Your Profile</Text>
      
//       <TextInput
//         style={styles.input}
//         placeholder="Full Name"
//         value={name}
//         onChangeText={setName}
//       />
      
//       <View style={styles.phoneContainer}>
//         <Picker
//           selectedValue={countryCode}
//           style={styles.countryCodePicker}
//           onValueChange={(itemValue) => setCountryCode(itemValue)}
//         >
//           <Picker.Item label="+1" value="+1" />
//           <Picker.Item label="+44" value="+44" />
//           <Picker.Item label="+91" value="+91" />
//           {/* Add more country codes as needed */}
//         </Picker>
        
//         <TextInput
//           style={styles.phoneInput}
//           placeholder="Mobile Number"
//           keyboardType="phone-pad"
//           value={mobile}
//           onChangeText={setMobile}
//         />
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleCompleteProfile}>
//         <Text style={styles.buttonText}>Next</Text>
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
//     marginBottom: 15,
//   },
//   phoneContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   countryCodePicker: {
//     height: 50,
//     width: 100,
//   },
//   phoneInput: {
//     flex: 1,
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default CompleteProfileScreen;




// import React, { FC, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';
// import { Picker } from '@react-native-picker/picker';
// import { insertUserProfile } from '../databases/Database';

// type CompleteProfileScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'CompleteProfile'>;
//   route: any;
// };

// const CompleteProfileScreen: FC<CompleteProfileScreenProps> = ({ navigation, route }) => {
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [countryCode, setCountryCode] = useState('+1');
//   const [loading, setLoading] = useState(false);
  
//   const { userId } = route.params || {};

//   if (!userId) {
//     Alert.alert('Error', 'User ID is missing. Please sign in again.');
//     navigation.goBack();
//     return null;
//   }

//   const isValidPhoneNumber = (number) => /^\d{10}$/.test(number);

//   const handleCompleteProfile = async () => {
//     if (!name || !mobile) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     if (!isValidPhoneNumber(mobile)) {
//       Alert.alert('Error', 'Please enter a valid 10-digit mobile number.');
//       return;
//     }

//     setLoading(true);
//     try {
//       await insertUserProfile(userId, name, countryCode, mobile);
//       navigation.navigate('AllowLocation');
//     } catch (error) {
//       Alert.alert('Error', 'Failed to save profile. Please try again.');
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Complete Your Profile</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Full Name"
//         value={name}
//         onChangeText={setName}
//       />

//       <View style={styles.phoneContainer}>
//         <Picker
//           selectedValue={countryCode}
//           style={styles.countryCodePicker}
//           onValueChange={(itemValue) => setCountryCode(itemValue)}
//         >
//           <Picker.Item label="+1" value="+1" />
//           <Picker.Item label="+44" value="+44" />
//           <Picker.Item label="+91" value="+91" />
//         </Picker>

//         <TextInput
//           style={styles.phoneInput}
//           placeholder="Mobile Number"
//           keyboardType="phone-pad"
//           value={mobile}
//           onChangeText={setMobile}
//         />
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleCompleteProfile} disabled={loading}>
//         {loading ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>Next</Text>
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
//     marginBottom: 15,
//   },
//   phoneContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   countryCodePicker: {
//     height: 50,
//     width: 100,
//   },
//   phoneInput: {
//     flex: 1,
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default CompleteProfileScreen;



// import React, { FC, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';
// import { Picker } from '@react-native-picker/picker';
// import { insertUserProfile } from '../databases/Database'; // Import the function to insert user profile

// type CompleteProfileScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'CompleteProfile'>;
//   route: any; // To access userId passed from the previous screen (e.g., SignIn)
// };

// // Helper function to validate a phone number
// const isValidPhoneNumber = (number: string): boolean => /^\d{10}$/.test(number);

// const CompleteProfileScreen: FC<CompleteProfileScreenProps> = ({ navigation, route }) => {
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [countryCode, setCountryCode] = useState('+1'); // Default country code
//   const { userId } = route.params; // Get userId from route params

//   const handleCompleteProfile = async () => {
//     if (!name || !mobile) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     if (!isValidPhoneNumber(mobile)) {
//       Alert.alert('Error', 'Please enter a valid 10-digit mobile number.');
//       return;
//     }

//     try {
//       // Insert the profile into the database
//       await insertUserProfile(userId, name, countryCode, mobile);
//       // Navigate to the next screen after successful insertion
//       navigation.navigate('AllowLocation');
//     } catch (error) {
//       Alert.alert('Error', 'Failed to save profile. Please try again.');
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Complete Your Profile</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Full Name"
//         value={name}
//         onChangeText={setName}
//       />

//       <View style={styles.phoneContainer}>
//         <Picker
//           selectedValue={countryCode}
//           style={styles.countryCodePicker}
//           onValueChange={(itemValue) => setCountryCode(itemValue)}
//         >
//           <Picker.Item label="+1" value="+1" />
//           <Picker.Item label="+44" value="+44" />
//           <Picker.Item label="+91" value="+91" />
//           {/* Add more country codes as needed */}
//         </Picker>

//         <TextInput
//           style={styles.phoneInput}
//           placeholder="Mobile Number"
//           keyboardType="phone-pad"
//           value={mobile}
//           onChangeText={setMobile}
//         />
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleCompleteProfile}>
//         <Text style={styles.buttonText}>Next</Text>
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
//     marginBottom: 15,
//   },
//   phoneContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   countryCodePicker: {
//     height: 50,
//     width: 100,
//   },
//   phoneInput: {
//     flex: 1,
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default CompleteProfileScreen;




// import React, { FC, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';
// import { Picker } from '@react-native-picker/picker';
// import { insertUserProfile } from '../databases/Database'; // Import the function to insert user profile

// type CompleteProfileScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'CompleteProfile'>;
//   route: any; // To access userId passed from the previous screen (e.g., SignIn)
// };

// const CompleteProfileScreen: FC<CompleteProfileScreenProps> = ({ navigation, route }) => {
//   const userId = route?.params?.userId ?? null; // Safely access userId

//   // Handle case where userId is missing
//   if (!userId) {
//     Alert.alert('Error', 'User ID is missing. Please try again.');
//     navigation.goBack(); // Navigate back to the previous screen
//     return null; // Render nothing
//   }

//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [countryCode, setCountryCode] = useState('+1'); // Default country code

//   const handleCompleteProfile = async () => {
//     if (!name || !mobile) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     try {
//       // Insert the profile into the database
//       await insertUserProfile(userId, name, countryCode, mobile);
//       // Navigate to the next screen after successful insertion
//       navigation.navigate('AllowLocation');
//     } catch (error) {
//       Alert.alert('Error', 'Failed to save profile. Please try again.');
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Complete Your Profile</Text>
      
//       <TextInput
//         style={styles.input}
//         placeholder="Full Name"
//         value={name}
//         onChangeText={setName}
//       />
      
//       <View style={styles.phoneContainer}>
//         <Picker
//           selectedValue={countryCode}
//           style={styles.countryCodePicker}
//           onValueChange={(itemValue) => setCountryCode(itemValue)}
//         >
//           <Picker.Item label="+1" value="+1" />
//           <Picker.Item label="+44" value="+44" />
//           <Picker.Item label="+91" value="+91" />
//           {/* Add more country codes as needed */}
//         </Picker>
        
//         <TextInput
//           style={styles.phoneInput}
//           placeholder="Mobile Number"
//           keyboardType="phone-pad"
//           value={mobile}
//           onChangeText={setMobile}
//         />
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleCompleteProfile}>
//         <Text style={styles.buttonText}>Next</Text>
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
//     marginBottom: 15,
//   },
//   phoneContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   countryCodePicker: {
//     height: 50,
//     width: 100,
//   },
//   phoneInput: {
//     flex: 1,
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 10,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#A020F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default CompleteProfileScreen;
