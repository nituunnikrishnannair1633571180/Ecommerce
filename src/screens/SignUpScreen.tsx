// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
// import { initDatabase, insertUser } from '../databases/Database';
// import { LinearGradient } from 'expo-linear-gradient';


// const SignUpScreen: React.FC = () => {
//   const [username, setUsername] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(false);
//   const [usernameError, setUsernameError] = useState<string | null>(null);
//   const [emailError, setEmailError] = useState<string | null>(null);
//   const [passwordError, setPasswordError] = useState<string | null>(null);

//   const handleSignUp = async () => {
//     setUsernameError(null);
//     setEmailError(null);
//     setPasswordError(null);

//     if (!username) {
//       setUsernameError('Username is required');
//       return;
//     }
//     if (!email) {
//       setEmailError('Email is required');
//       return;
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//       return;
//     }
//     if (password.length < 8) {
//       setPasswordError('Password must be at least 8 characters long');
//       return;
//     }

//     setLoading(true);
//     try {
//       await initDatabase();
//       await insertUser(username, email, password);
//       setLoading(false);
//       Alert.alert('Success', 'Account created successfully!');
//     } catch (error) {
//       setLoading(false);
//       Alert.alert('Error', 'Could not create account. Email may already be registered.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Create Account</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter Username"
//         placeholderTextColor="#999"
//         value={username}
//         onChangeText={setUsername}
//       />
//       {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}

//       <TextInput
//         style={styles.input}
//         placeholder="Enter Email"
//         placeholderTextColor="#999"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       {emailError && <Text style={styles.errorText}>{emailError}</Text>}

//       <TextInput
//         style={styles.input}
//         placeholder="Enter Password"
//         placeholderTextColor="#999"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

//       {loading ? (
//         <ActivityIndicator size="large" color="#6A0DAD" style={{ marginTop: 20 }} />
//       ) : (
//         <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//           <Text style={styles.buttonText}>Sign Up</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 28,
//     color: '#6A0DAD',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   input: {
//     height: 50,
//     borderColor: '#6A0DAD',
//     borderWidth: 1,
//     borderRadius: 25,
//     paddingHorizontal: 15,
//     marginBottom: 10,
//     backgroundColor: '#FFF',
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#6A0DAD',
//     paddingVertical: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//     fontSize: 14,
//   },
// });

// export default SignUpScreen;

// SignUpScreen.tsx
// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const SignUpScreen: React.FC = () => {
//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const navigation = useNavigation();

//   const handleSignUp = () => {
//     navigation.navigate('WelcomeScreen' as never);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.backgroundShape} />

//       <Text style={styles.title}>Create Account</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('SignIn' as never)}>
//         <Text style={styles.linkText}>Already have an account? Log In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#F3E5F5',
//   },
//   backgroundShape: {
//     position: 'absolute',
//     width: '150%',
//     height: '50%',
//     top: 0,
//     left: -50,
//     backgroundColor: '#FFCDD2',
//     borderBottomLeftRadius: 300,
//     borderBottomRightRadius: 300,
//   },
//   title: {
//     fontSize: 28,
//     color: '#6A1B9A',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   input: {
//     height: 50,
//     borderColor: '#6A1B9A',
//     borderWidth: 1,
//     borderRadius: 25,
//     paddingHorizontal: 15,
//     marginBottom: 10,
//     backgroundColor: '#FFF',
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#6A1B9A',
//     paddingVertical: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   linkText: {
//     color: '#6A1B9A',
//     textAlign: 'center',
//     marginTop: 15,
//     fontSize: 16,
//   },
// });

// export default SignUpScreen;

// 
// import React, { FC } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type SignUpScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
// };

// const SignUpScreen: FC<SignUpScreenProps> = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.backgroundCircle1} />
//       <View style={styles.backgroundCircle2} />
      
//       <Text style={styles.title}>Create Account</Text>
      
//       <TextInput style={styles.input} placeholder="Full Name" />
//       <TextInput style={styles.input} placeholder="Email" />
//       <TextInput style={styles.input} placeholder="Password" secureTextEntry />

//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
//         <Text style={styles.link}>Already have an account? Log In</Text>
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
//     backgroundColor: '#fff',
//   },
//   backgroundCircle1: {
//     position: 'absolute',
//     width: 300,
//     height: 300,
//     borderRadius: 150,
//     backgroundColor: '#E3C1F3',
//     top: -50,
//     left: -60,
//   },
//   backgroundCircle2: {
//     position: 'absolute',
//     width: 250,
//     height: 250,
//     borderRadius: 125,
//     backgroundColor: '#D8A8EE',
//     bottom: -80,
//     right: -50,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#4A4A4A',
//     marginBottom: 30,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 20,
//     marginBottom: 15,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 25,
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
//   link: {
//     color: '#A020F0',
//     marginTop: 20,
//     fontSize: 16,
//   },
// });

// export default SignUpScreen;

// import React, { FC, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type SignUpScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
// };

// const SignUpScreen: FC<SignUpScreenProps> = ({ navigation }) => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = () => {
//     if (!fullName || !email || !password) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert('Error', 'Please enter a valid email address.');
//       return;
//     }

//     if (password.length < 8) {
//       Alert.alert('Error', 'Password should be at least 8 characters.');
//       return;
//     }

//     Alert.alert('Success', 'Account created successfully!');
//     navigation.navigate('SignIn'); // Automatically navigate to SignIn
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.backgroundCircleTopLeft} />
//       <View style={styles.backgroundCircleTopRight} />
//       <View style={styles.backgroundCircle1} />
//       <View style={styles.backgroundCircle2} />

//       <Text style={styles.title}>Create Account</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Full Name"
//         value={fullName}
//         onChangeText={setFullName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
//         <Text style={styles.link}>Already have an account? Log In</Text>
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
//     //backgroundColor: '#fff'
//     backgroundColor:'#F3E5F5',
//   },
//   backgroundCircle1: {
//     position: 'absolute',
//     width: 250,
//     height: 250,
//     borderRadius: 125,
//     backgroundColor: '#E3C1F3',
//     top: -50,
//     left: -50,
//   },
//   backgroundCircle2: {
//     position: 'absolute',
//     width: 250,
//     height: 250,
//     borderRadius: 125,
//     backgroundColor: '#D8A8EE',
//     bottom: -50,
//     right: -50,
//   },
//   backgroundCircleTopLeft: {
//     position: 'absolute',
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#3B0076',
//     top: -20,
//     left: -20,
//   },
//   backgroundCircleTopRight: {
//     position: 'absolute',
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#3B0076',
//     top: -20,
//     right: -20,
//   },
  
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#4A4A4A',
//     marginBottom: 30,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#F0F0F0',
//     paddingHorizontal: 20,
//     marginBottom: 15,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     borderRadius: 25,
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
//   link: {
//     color: '#A020F0',
//     marginTop: 20,
//     fontSize: 16,
//   },
// });

// export default SignUpScreen;




import React, { FC, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type SignUpScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "SignUp">;
};

const SignUpScreen: FC<SignUpScreenProps> = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (!fullName || !email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Error", "Password should be at least 8 characters.");
      return;
    }

    Alert.alert("Success", "Account created successfully!");
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      {/* Decorative Background Shapes */}
      <View style={styles.shapeCircleLarge} />
      <View style={styles.shapeCircleSmall} />
      <View style={styles.shapeSquareLarge} />
      <View style={styles.shapeSquareSmall} />
      <View style={styles.shapeTransparentCircle} />
      <View style={styles.shapeTransparentSquare} />

      {/* Content */}
      <View style={styles.neumorphismContainer}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
          placeholderTextColor="#A0A0A0"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#A0A0A0"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#A0A0A0"
        />
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.signinText}>
            Already have an account?{" "}
            <Text style={styles.signinLink}>Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;


// import React, { FC, useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
// } from "react-native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../navigation/types";
// import { initDatabase, insertUser } from "../databases/Database";

// type SignUpScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, "SignUp">;
// };

// const SignUpScreen: FC<SignUpScreenProps> = ({ navigation }) => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     initDatabase(); // Initialize the database on component load
//   }, []);

//   const handleSignUp = async () => {
//     if (!fullName || !email || !password) {
//       Alert.alert("Error", "Please fill in all fields.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     if (password.length < 8) {
//       Alert.alert("Error", "Password should be at least 8 characters.");
//       return;
//     }

//     const success = await insertUser(fullName, email, password);
//     if (success) {
//       Alert.alert("Success", "Account created successfully!");
//       navigation.navigate("SignIn");
//     } else {
//       Alert.alert("Error", "Email already exists.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Content (same as before) */}
//     </View>
//   );
// };

// export default SignUpScreen;

// Use the same styles as before


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDE7F6", // Light lavender
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  neumorphismContainer: {
    width: "80%",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333", // Dark text
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F2F2F2", // Light gray
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
    color: "#333333", // Dark text
  },
  signupButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#A020F0", // Purple button
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  signupButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  signinText: {
    fontSize: 14,
    color: "#666666", // Light gray
  },
  signinLink: {
    fontSize: 14,
    color: "#A020F0", // Purple
    fontWeight: "bold",
  },
  /* Decorative Shapes */
  shapeCircleLarge: {
    position: "absolute",
    width: 300,
    height: 300,
    backgroundColor: "#E5CCF2",
    borderRadius: 150,
    top: -50,
    left: -50,
  },
  shapeCircleSmall: {
    position: "absolute",
    width: 100,
    height: 100,
    backgroundColor: "#D4B8EB",
    borderRadius: 50,
    top: 120,
    right: -20,
  },
  shapeSquareLarge: {
    position: "absolute",
    width: 200,
    height: 200,
    backgroundColor: "#E4D7FB",
    borderRadius: 20,
    bottom: -50,
    right: -30,
  },
  shapeSquareSmall: {
    position: "absolute",
    width: 100,
    height: 100,
    backgroundColor: "#C8AEEB",
    borderRadius: 10,
    bottom: 50,
    left: 20,
  },
  shapeTransparentCircle: {
    position: "absolute",
    width: 150,
    height: 150,
    backgroundColor: "rgba(200, 150, 250, 0.3)",
    borderRadius: 75,
    top: 200,
    left: 80,
  },
  shapeTransparentSquare: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "rgba(180, 100, 200, 0.2)",
    borderRadius: 15,
    bottom: 150,
    right: 80,
  },
});
