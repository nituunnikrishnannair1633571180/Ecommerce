// // import React, { useState } from 'react';
// // import { View, Text, TextInput, StyleSheet, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // const SignInScreen: React.FC = () => {
// //   const [email, setEmail] = useState<string>('');
// //   const [password, setPassword] = useState<string>('');
// //   const [loading, setLoading] = useState<boolean>(false);
// //   const [emailError, setEmailError] = useState<string | null>(null);
// //   const [passwordError, setPasswordError] = useState<string | null>(null);
// //   const navigation = useNavigation();

// //   const handleLogin = async () => {
// //     setEmailError(null);
// //     setPasswordError(null);

// //     if (!email) {
// //       setEmailError('Email is required');
// //       return;
// //     }
// //     if (!password) {
// //       setPasswordError('Password is required');
// //       return;
// //     }
// //     if (password.length < 8) {
// //       setPasswordError('Password must be at least 8 characters long');
// //       return;
// //     }

// //     setLoading(true);
// //     const isVerified = true; // Replace with actual verification logic
// //     if (isVerified) {
// //       await AsyncStorage.setItem('isLoggedIn', 'true');
// //       setLoading(false);
// //       navigation.navigate('Product' as never);
// //     } else {
// //       setLoading(false);
// //       Alert.alert('Invalid credentials', 'Please check your email and password and try again.');
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Sign In</Text>

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         keyboardType="email-address"
// //       />
// //       {emailError && <Text style={styles.errorText}>{emailError}</Text>}

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //       />
// //       {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

// //       {loading ? (
// //         <ActivityIndicator size="large" color="#7D3C98" style={{ marginTop: 20 }} />
// //       ) : (
// //         <TouchableOpacity style={styles.button} onPress={handleLogin}>
// //           <Text style={styles.buttonText}>Sign In</Text>
// //         </TouchableOpacity>
// //       )}

// //       <TouchableOpacity onPress={() => navigation.navigate('SignUp' as never)}>
// //         <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     padding: 20,
// //     backgroundColor: '#F3E5F5',
// //   },
// //   title: {
// //     fontSize: 24,
// //     color: '#7D3C98',
// //     marginBottom: 20,
// //     textAlign: 'center',
// //   },
// //   input: {
// //     height: 50,
// //     borderColor: '#7D3C98',
// //     borderWidth: 1,
// //     borderRadius: 25,
// //     marginBottom: 10,
// //     paddingHorizontal: 15,
// //     backgroundColor: '#FFF',
// //   },
// //   button: {
// //     backgroundColor: '#7D3C98',
// //     paddingVertical: 15,
// //     borderRadius: 25,
// //     alignItems: 'center',
// //     marginTop: 20,
// //   },
// //   buttonText: {
// //     color: '#FFF',
// //     fontSize: 18,
// //     fontWeight: '600',
// //   },
// //   linkText: {
// //     color: '#7D3C98',
// //     textAlign: 'center',
// //     marginTop: 15,
// //     fontSize: 16,
// //   },
// //   errorText: {
// //     color: 'red',
// //     marginBottom: 10,
// //     fontSize: 14,
// //   },
// // });

// // export default SignInScreen;


// // import React, { useState } from 'react';
// // import {
// //   View, Text, TextInput, StyleSheet, Alert, ActivityIndicator, TouchableOpacity
// // } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { LinearGradient } from 'expo-linear-gradient';

// // const SignInScreen: React.FC = () => {
// //   const [email, setEmail] = useState<string>('');
// //   const [password, setPassword] = useState<string>('');
// //   const [loading, setLoading] = useState<boolean>(false);
// //   const [emailError, setEmailError] = useState<string | null>(null);
// //   const [passwordError, setPasswordError] = useState<string | null>(null);
// //   const navigation = useNavigation();

// //   const handleLogin = async () => {
// //     setEmailError(null);
// //     setPasswordError(null);

// //     if (!email) {
// //       setEmailError('Email is required');
// //       return;
// //     }
// //     if (!password) {
// //       setPasswordError('Password is required');
// //       return;
// //     }
// //     if (password.length < 8) {
// //       setPasswordError('Password must be at least 8 characters long');
// //       return;
// //     }

// //     setLoading(true);
// //     const isVerified = true; // Replace with actual verification logic
// //     if (isVerified) {
// //       await AsyncStorage.setItem('isLoggedIn', 'true');
// //       setLoading(false);
// //       navigation.navigate('Product' as never);
// //     } else {
// //       setLoading(false);
// //       Alert.alert('Invalid credentials', 'Please check your email and password and try again.');
// //     }
// //   };

// //   return (
// //     <LinearGradient colors={['#F3E5F5', '#FFEBEE']} style={styles.container}>
// //       <View style={styles.curveContainer}>
// //         <View style={styles.curve} />
// //       </View>

// //       <Text style={styles.title}>Welcome Back</Text>

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         keyboardType="email-address"
// //       />
// //       {emailError && <Text style={styles.errorText}>{emailError}</Text>}

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //       />
// //       {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

// //       {loading ? (
// //         <ActivityIndicator size="large" color="#7D3C98" style={{ marginTop: 20 }} />
// //       ) : (
// //         <TouchableOpacity style={styles.button} onPress={handleLogin}>
// //           <Text style={styles.buttonText}>Log In</Text>
// //         </TouchableOpacity>
// //       )}

// //       <TouchableOpacity onPress={() => navigation.navigate('SignUp' as never)}>
// //         <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
// //       </TouchableOpacity>
// //     </LinearGradient>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     padding: 20,
// //   },
// //   curveContainer: {
// //     position: 'absolute',
// //     width: '100%',
// //     height: '40%',
// //     top: 0,
// //     left: 0,
// //     overflow: 'hidden',
// //   },
// //   curve: {
// //     position: 'absolute',
// //     width: '150%',
// //     height: '100%',
// //     backgroundColor: '#FFCDD2',
// //     borderRadius: 300,
// //     top: -100,
// //     left: -50,
// //     transform: [{ rotate: '-20deg' }],
// //   },
// //   title: {
// //     fontSize: 28,
// //     color: '#7D3C98',
// //     textAlign: 'center',
// //     marginBottom: 30,
// //   },
// //   input: {
// //     height: 50,
// //     borderColor: '#7D3C98',
// //     borderWidth: 1,
// //     borderRadius: 25,
// //     marginBottom: 10,
// //     paddingHorizontal: 15,
// //     backgroundColor: '#FFF',
// //   },
// //   button: {
// //     backgroundColor: '#7D3C98',
// //     paddingVertical: 15,
// //     borderRadius: 25,
// //     alignItems: 'center',
// //     marginTop: 20,
// //   },
// //   buttonText: {
// //     color: '#FFF',
// //     fontSize: 18,
// //     fontWeight: '600',
// //   },
// //   linkText: {
// //     color: '#7D3C98',
// //     textAlign: 'center',
// //     marginTop: 15,
// //     fontSize: 16,
// //   },
// //   errorText: {
// //     color: 'red',
// //     marginBottom: 10,
// //     fontSize: 14,
// //   },
// // });

// // export default SignInScreen;

// // SignInScreen.tsx
// // 
// // import React from 'react';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// // const SignInScreen = () => {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Welcome Back</Text>
// //       <View style={styles.inputContainer}>
// //         <TextInput placeholder="Email" style={styles.input} />
// //         <TextInput placeholder="Password" style={styles.input} secureTextEntry />
// //       </View>
// //       <TouchableOpacity style={styles.button}>
// //         <Text style={styles.buttonText}>Log in</Text>
// //       </TouchableOpacity>
// //       <TouchableOpacity>
// //         <Text style={styles.forgotPassword}>Forgot Password?</Text>
// //       </TouchableOpacity>
// //       <TouchableOpacity style={styles.footer}>
// //         <Text>Don’t have an account? </Text>
// //         <Text style={styles.link}>Sign up</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f5f5f5',
// //     justifyContent: 'center',
// //     paddingHorizontal: 20,
// //   },
// //   title: {
// //     fontSize: 30,
// //     fontWeight: '600',
// //     color: '#333',
// //     marginBottom: 40,
// //     textAlign: 'center',
// //   },
// //   inputContainer: {
// //     marginBottom: 20,
// //   },
// //   input: {
// //     backgroundColor: '#fff',
// //     padding: 15,
// //     borderRadius: 25,
// //     marginVertical: 10,
// //     fontSize: 16,
// //     color: '#333',
// //     shadowColor: '#000',
// //     shadowOpacity: 0.1,
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowRadius: 4,
// //   },
// //   button: {
// //     backgroundColor: '#6a0dad',
// //     paddingVertical: 15,
// //     borderRadius: 25,
// //     alignItems: 'center',
// //     marginVertical: 20,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: '500',
// //   },
// //   forgotPassword: {
// //     color: '#6a0dad',
// //     textAlign: 'center',
// //     marginBottom: 40,
// //   },
// //   footer: {
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     marginTop: 10,
// //   },
// //   link: {
// //     color: '#6a0dad',
// //     fontWeight: '600',
// //   },
// // });

// // export default SignInScreen;

// // import React, { FC } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// // import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// // import { RootStackParamList } from '../navigation/types';

// // type SignInScreenProps = {
// //   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// // };

// // const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Welcome Back</Text>
      
// //       <TextInput style={styles.input} placeholder="Email" />
// //       <TextInput style={styles.input} placeholder="Password" secureTextEntry />

// //       <TouchableOpacity style={styles.button}>
// //         <Text style={styles.buttonText}>Log In</Text>
// //       </TouchableOpacity>
      
// //       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
// //         <Text style={styles.link}>Don’t have an account? Sign Up</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#fff',
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     color: '#4A4A4A',
// //     marginBottom: 30,
// //   },
// //   input: {
// //     width: '100%',
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#F0F0F0',
// //     paddingHorizontal: 20,
// //     marginBottom: 15,
// //   },
// //   button: {
// //     width: '100%',
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#A020F0',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginTop: 20,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   link: {
// //     color: '#A020F0',
// //     marginTop: 20,
// //     fontSize: 16,
// //   },
// // });

// // export default SignInScreen;

// // import React, { FC } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// // import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// // import { RootStackParamList } from '../navigation/types';

// // type SignInScreenProps = {
// //   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// // };

// // const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.backgroundCircle1} />
// //       <View style={styles.backgroundCircle2} />
      
// //       <Text style={styles.title}>Welcome Back</Text>
      
// //       <TextInput style={styles.input} placeholder="Email" />
// //       <TextInput style={styles.input} placeholder="Password" secureTextEntry />

// //       <TouchableOpacity style={styles.button}>
// //         <Text style={styles.buttonText}>Log In</Text>
// //       </TouchableOpacity>
      
// //       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
// //         <Text style={styles.link}>Don’t have an account? Sign Up</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#fff',
// //   },
// //   backgroundCircle1: {
// //     position: 'absolute',
// //     width: 300,
// //     height: 300,
// //     borderRadius: 150,
// //     backgroundColor: '#E3C1F3',
// //     top: -50,
// //     left: -60,
// //   },
// //   backgroundCircle2: {
// //     position: 'absolute',
// //     width: 250,
// //     height: 250,
// //     borderRadius: 125,
// //     backgroundColor: '#D8A8EE',
// //     bottom: -80,
// //     right: -50,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     color: '#4A4A4A',
// //     marginBottom: 30,
// //   },
// //   input: {
// //     width: '100%',
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#F0F0F0',
// //     paddingHorizontal: 20,
// //     marginBottom: 15,
// //   },
// //   button: {
// //     width: '100%',
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#A020F0',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginTop: 20,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   link: {
// //     color: '#A020F0',
// //     marginTop: 20,
// //     fontSize: 16,
// //   },
// // });

// // export default SignInScreen;

// // import React, { FC } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// // import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// // import { RootStackParamList } from '../navigation/types';

// // type SignInScreenProps = {
// //   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// // };

// // const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.backgroundCircle1} />
// //       <View style={styles.backgroundCircle2} />
      
// //       <Text style={styles.title}>Welcome Back</Text>
      
// //       <TextInput style={styles.input} placeholder="Email" />
// //       <TextInput style={styles.input} placeholder="Password" secureTextEntry />

// //       <TouchableOpacity style={styles.button}>
// //         <Text style={styles.buttonText}>Log In</Text>
// //       </TouchableOpacity>
      
// //       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
// //         <Text style={styles.link}>Don’t have an account? Sign Up</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#fff',
// //   },
// //   backgroundCircle1: {
// //     position: 'absolute',
// //     width: 300,
// //     height: 300,
// //     borderRadius: 150,
// //     backgroundColor: '#E3C1F3',
// //     top: -50,
// //     left: -60,
// //   },
// //   backgroundCircle2: {
// //     position: 'absolute',
// //     width: 250,
// //     height: 250,
// //     borderRadius: 125,
// //     backgroundColor: '#D8A8EE',
// //     bottom: -80,
// //     right: -50,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     color: '#4A4A4A',
// //     marginBottom: 30,
// //   },
// //   input: {
// //     width: '100%',
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#F0F0F0',
// //     paddingHorizontal: 20,
// //     marginBottom: 15,
// //   },
// //   button: {
// //     width: '100%',
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#A020F0',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginTop: 20,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   link: {
// //     color: '#A020F0',
// //     marginTop: 20,
// //     fontSize: 16,
// //   },
// // });

// // export default SignInScreen;



// // import React, { FC, useState } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// // import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// // import { RootStackParamList } from '../navigation/types';

// // type SignInScreenProps = {
// //   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// // };

// // const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSignIn = () => {
// //     if (!email || !password) {
// //       Alert.alert('Error', 'Please enter both email and password.');
// //       return;
// //     }

// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     if (!emailRegex.test(email)) {
// //       Alert.alert('Error', 'Please enter a valid email address.');
// //       return;
// //     }

// //     // Simulated login success (replace with actual authentication logic)
// //     Alert.alert('Success', 'Logged in successfully!');
// //     // Redirect to home or dashboard screen
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.backgroundCircle1} />
// //       <View style={styles.backgroundCircle2} />
// //       <View style={styles.backgroundCircle3} />
// //       <View style={styles.backgroundCircle4} />

// //       <Text style={styles.title}>Welcome Back</Text>

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         keyboardType="email-address"
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //       />

// //       <TouchableOpacity style={styles.button} onPress={handleSignIn}>
// //         <Text style={styles.buttonText}>Log In</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
// //         <Text style={styles.link}>Don’t have an account? Sign Up</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Password recovery options will be available here.')}>
// //         <Text style={styles.forgotPassword}>Forgot Password?</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#fff',
// //   },
// //   backgroundCircle1: {
// //     position: 'absolute',
// //     width: 300,
// //     height: 300,
// //     borderRadius: 150,
// //     backgroundColor: '#E3C1F3',
// //     top: -50,
// //     left: -60,
// //   },
// //   backgroundCircle2: {
// //     position: 'absolute',
// //     width: 250,
// //     height: 250,
// //     borderRadius: 125,
// //     backgroundColor: '#D8A8EE',
// //     bottom: -80,
// //     right: -50,
// //   },
// //   backgroundCircle3: {
// //     position: 'absolute',
// //     width: 200,
// //     height: 200,
// //     borderRadius: 100,
// //     backgroundColor: '#5C2E9D',
// //     top: 100,
// //     left: 100,
// //   },
// //   backgroundCircle4: {
// //     position: 'absolute',
// //     width: 150,
// //     height: 150,
// //     borderRadius: 75,
// //     backgroundColor: '#3B1A6A',
// //     bottom: 50,
// //     right: -60,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     color: '#4A4A4A',
// //     marginBottom: 30,
// //   },
// //   input: {
// //     width: '100%',
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#F0F0F0',
// //     paddingHorizontal: 20,
// //     marginBottom: 15,
// //   },
// //   button: {
// //     width: '100%',
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#A020F0',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginTop: 20,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   link: {
// //     color: '#A020F0',
// //     marginTop: 20,
// //     fontSize: 16,
// //   },
// //   forgotPassword: {
// //     color: '#A020F0',
// //     marginTop: 10,
// //     fontSize: 14,
// //   },
// // });

// // export default SignInScreen;

// // import React, { FC, useState } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// // import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// // import { RootStackParamList } from '../navigation/types';

// // type SignInScreenProps = {
// //   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// // };

// // const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSignIn = () => {
// //     if (!email || !password) {
// //       Alert.alert('Error', 'Please enter both email and password.');
// //       return;
// //     }

// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     if (!emailRegex.test(email)) {
// //       Alert.alert('Error', 'Please enter a valid email address.');
// //       return;
// //     }

// //     Alert.alert('Success', 'Logged in successfully!');
// //     navigation.navigate('CompleteProfile'); // Navigate to Location screen
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.backgroundCircleTopLeft} />
// //       <View style={styles.backgroundCircleTopRight} />
// //       <View style={styles.backgroundCircle1} />
// //       <View style={styles.backgroundCircle2} />
      

// //       <Text style={styles.title}>Welcome Back</Text>

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         keyboardType="email-address"
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //       />

// //       <TouchableOpacity style={styles.button} onPress={handleSignIn}>
// //         <Text style={styles.buttonText}>Log In</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
// //         <Text style={styles.link}>Don’t have an account? Sign Up</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Password recovery options will be available here.')}>
// //         <Text style={styles.forgotPassword}>Forgot Password?</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     //backgroundColor: '#fff',
// //     backgroundColor:'#F3E5F5',
// //   },
  
  
// //   backgroundCircleTopLeft: {
// //     position: 'absolute',
// //     width: 100,
// //     height: 100,
// //     borderRadius: 50,
// //     backgroundColor: '#3B0076',
// //     top: -20,
// //     left: -20,
// //   },
// //   backgroundCircleTopRight: {
// //     position: 'absolute',
// //     width: 100,
// //     height: 100,
// //     borderRadius: 50,
// //     backgroundColor: '#3B0076',
// //     top: -20,
// //     right: -20,
// //   },
  
// //   backgroundCircle1: {
// //     position: 'absolute',
// //     width: 250,
// //     height: 250,
// //     borderRadius: 125,
// //     backgroundColor: '#E3C1F3',
// //     top: -50,
// //     left: -50,
// //   },
// //   backgroundCircle2: {
// //     position: 'absolute',
// //     width: 250,
// //     height: 250,
// //     borderRadius: 125,
// //     backgroundColor: '#D8A8EE',
// //     bottom: -50,
// //     right: -50,
// //   },

// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     color: '#4A4A4A',
// //     marginBottom: 30,
// //   },
// //   input: {
// //     width: '100%',
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#F0F0F0',//#F0F0F0
// //     paddingHorizontal: 20,
// //     marginBottom: 15,
// //   },
// //   button: {
// //     width: '100%',
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#A020F0',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginTop: 20,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   link: {
// //     color: '#A020F0',
// //     marginTop: 20,
// //     fontSize: 16,
// //   },
// //   forgotPassword: {
// //     color: '#A020F0',
// //     marginTop: 10,
// //     fontSize: 14,
// //   },
// // });

// // export default SignInScreen;

// // import React, { FC, useState } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// // import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// // import { RootStackParamList } from '../navigation/types';

// // type SignInScreenProps = {
// //   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// // };

// // const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSignIn = () => {
// //     if (!email || !password) {
// //       Alert.alert('Error', 'Please enter both email and password.');
// //       return;
// //     }

// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     if (!emailRegex.test(email)) {
// //       Alert.alert('Error', 'Please enter a valid email address.');
// //       return;
// //     }

// //     Alert.alert('Success', 'Logged in successfully!');
// //     navigation.navigate('LocationScreen'); // Navigate to Location screen
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {/* Background circles for styling */}
// //       <View style={styles.backgroundCircleTopLeft} />
// //       <View style={styles.backgroundCircleBottomRight} />

// //       <Text style={styles.title}>Welcome Back</Text>

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Email"
// //         placeholderTextColor="#B9B9B9"
// //         value={email}
// //         onChangeText={setEmail}
// //         keyboardType="email-address"
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         placeholderTextColor="#B9B9B9"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //       />

// //       <TouchableOpacity style={styles.button} onPress={handleSignIn}>
// //         <Text style={styles.buttonText}>Log In</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
// //         <Text style={styles.link}>Don’t have an account? Sign Up</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Password recovery options will be available here.')}>
// //         <Text style={styles.forgotPassword}>Forgot Password?</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#3B0076', // Dark purple background
// //   },
  
// //   backgroundCircleTopLeft: {
// //     position: 'absolute',
// //     width: 150,
// //     height: 150,
// //     borderRadius: 75,
// //     backgroundColor: '#B89EE9',
// //     top: -40,
// //     left: -40,
// //   },
// //   backgroundCircleBottomRight: {
// //     position: 'absolute',
// //     width: 150,
// //     height: 150,
// //     borderRadius: 75,
// //     backgroundColor: '#D8A8EE',
// //     bottom: -40,
// //     right: -40,
// //   },

// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     color: '#FFFFFF',
// //     marginBottom: 30,
// //   },
// //   input: {
// //     width: '100%',
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#F0F0F0',
// //     paddingHorizontal: 20,
// //     marginBottom: 15,
// //     color: '#4A4A4A',
// //   },
// //   button: {
// //     width: '100%',
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#A020F0', // Purple button
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginTop: 20,
// //   },
// //   buttonText: {
// //     color: '#FFFFFF',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   link: {
// //     color: '#D0B3FF',
// //     marginTop: 20,
// //     fontSize: 16,
// //   },
// //   forgotPassword: {
// //     color: '#D0B3FF',
// //     marginTop: 10,
// //     fontSize: 14,
// //   },
// // });

// // export default SignInScreen;






// // import React, { FC, useState } from "react";
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   Alert,
// //   StyleSheet,
// // } from "react-native";

// // import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// // import { RootStackParamList } from '../navigation/types';

// // type SignInScreenProps = {
// //     navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// //   };
  
// // const SignInScreen: FC = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSignIn = () => {
// //     if (!email || !password) {
// //       Alert.alert("Error", "Please enter both email and password.");
// //       return;
// //     }

// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     if (!emailRegex.test(email)) {
// //       Alert.alert("Error", "Please enter a valid email address.");
// //       return;
// //     }

// //     Alert.alert("Success", "Logged in successfully!");
// //     navigation.navigate('CompleteProfile'); 
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {/* Background Shapes */}
// //       <View style={styles.shape1} />
// //       <View style={styles.shape2} />
// //       <View style={styles.shape3} />
// //       <View style={styles.shape4} />

// //       {/* Title */}
// //       <Text style={styles.title}>Welcome Back</Text>

// //       {/* Email Input */}
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         keyboardType="email-address"
// //         placeholderTextColor="#A0A0A0"
// //       />

// //       {/* Password Input */}
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //         placeholderTextColor="#A0A0A0"
// //       />

// //       {/* Login Button */}
// //       <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
// //         <Text style={styles.loginButtonText}>Log In</Text>
// //       </TouchableOpacity>

// //       {/* Forgot Password */}
// //       <TouchableOpacity>
// //         <Text style={styles.forgotPassword}>Forgot Password?</Text>
// //       </TouchableOpacity>

// //       {/* Sign-Up Link */}
// //       <TouchableOpacity>
// //         <Text style={styles.signupText}>
// //           Don’t have an account?{" "}
// //           <Text style={styles.signupLink}>Sign Up</Text>
// //         </Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // export default SignInScreen;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#FFFFFF",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     position: "relative",
// //   },
// //   // Background Shapes
// //   shape1: {
// //     position: "absolute",
// //     width: 300,
// //     height: 300,
// //     backgroundColor: "#F9DDE7",
// //     borderRadius: 150,
// //     top: -100,
// //     left: -50,
// //   },
// //   shape2: {
// //     position: "absolute",
// //     width: 400,
// //     height: 400,
// //     backgroundColor: "#EBCDFD",
// //     borderRadius: 200,
// //     top: -150,
// //     right: -50,
// //   },
// //   shape3: {
// //     position: "absolute",
// //     width: 300,
// //     height: 300,
// //     backgroundColor: "#F7DFF2",
// //     borderRadius: 150,
// //     bottom: -80,
// //     left: -60,
// //   },
// //   shape4: {
// //     position: "absolute",
// //     width: 250,
// //     height: 250,
// //     backgroundColor: "#D8A8EE",
// //     borderRadius: 125,
// //     bottom: -50,
// //     right: -40,
// //   },
// //   // Title
// //   title: {
// //     fontSize: 28,
// //     fontWeight: "bold",
// //     color: "#333333",
// //     marginBottom: 20,
// //   },
// //   // Input Fields
// //   input: {
// //     width: "80%",
// //     height: 50,
// //     backgroundColor: "#F2F2F2",
// //     borderRadius: 25,
// //     paddingHorizontal: 20,
// //     marginVertical: 10,
// //     fontSize: 16,
// //     color: "#333333",
// //   },
// //   // Login Button
// //   loginButton: {
// //     width: "80%",
// //     height: 50,
// //     backgroundColor: "#A020F0",
// //     borderRadius: 25,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginVertical: 20,
// //   },
// //   loginButtonText: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     color: "#FFFFFF",
// //   },
// //   // Forgot Password
// //   forgotPassword: {
// //     fontSize: 14,
// //     color: "#A020F0",
// //     textDecorationLine: "underline",
// //     marginBottom: 20,
// //   },
// //   // Sign-Up Text
// //   signupText: {
// //     fontSize: 14,
// //     color: "#666666",
// //   },
// //   signupLink: {
// //     fontSize: 14,
// //     color: "#A020F0",
// //     fontWeight: "bold",
// //   },
// // });



// // import React, { FC, useState } from "react";
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   Alert,
// //   StyleSheet,
// // } from "react-native";
// // import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// // import { RootStackParamList } from "../navigation/types";

// // type SignInScreenProps = {
// //   navigation: NativeStackNavigationProp<RootStackParamList, "SignIn">;
// // };

// // const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSignIn = () => {
// //     if (!email || !password) {
// //       Alert.alert("Error", "Please enter both email and password.");
// //       return;
// //     }

// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     if (!emailRegex.test(email)) {
// //       Alert.alert("Error", "Please enter a valid email address.");
// //       return;
// //     }

// //     Alert.alert("Success", "Logged in successfully!");
// //     navigation.navigate("CompleteProfile");
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {/* Background */}
// //       <View style={styles.backgroundShapes} />

// //       {/* Glass Container */}
// //       <View style={styles.glassContainer}>
// //         <Text style={styles.title}>Welcome Back</Text>

// //         {/* Email Input */}
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Email"
// //           value={email}
// //           onChangeText={setEmail}
// //           keyboardType="email-address"
// //           placeholderTextColor="#A0A0A0"
// //         />

// //         {/* Password Input */}
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Password"
// //           value={password}
// //           onChangeText={setPassword}
// //           secureTextEntry
// //           placeholderTextColor="#A0A0A0"
// //         />

// //         {/* Login Button */}
// //         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
// //           <Text style={styles.loginButtonText}>Log In</Text>
// //         </TouchableOpacity>

// //         {/* Forgot Password */}
// //         <TouchableOpacity>
// //           <Text style={styles.forgotPassword}>Forgot Password?</Text>
// //         </TouchableOpacity>

// //         {/* Sign-Up Link */}
// //         <TouchableOpacity>
// //           <Text style={styles.signupText}>
// //             Don’t have an account?{" "}
// //             <Text style={styles.signupLink}>Sign Up</Text>
// //           </Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // export default SignInScreen;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#E6E6FA", // Lavender background
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   // Background Shapes
// //   backgroundShapes: {
// //     position: "absolute",
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     backgroundColor: "#E6E6FA", // Lavender
// //   },
// //   // Glass Container
// //   glassContainer: {
// //     width: "85%",
// //     padding: 20,
// //     backgroundColor: "rgba(255, 255, 255, 0.15)", // Transparent white
// //     borderRadius: 20,
// //     alignItems: "center",
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 10 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 20,
// //     borderWidth: 1,
// //     borderColor: "rgba(255, 255, 255, 0.3)",
// //     backdropFilter: "blur(10px)", // For web support
// //     elevation: 10, // Shadow for Android
// //   },
// //   // Title
// //   title: {
// //     fontSize: 28,
// //     fontWeight: "bold",
// //     color: "#333333",
// //     marginBottom: 20,
// //   },
// //   // Input Fields
// //   input: {
// //     width: "90%",
// //     height: 50,
// //     backgroundColor: "rgba(255, 255, 255, 0.3)",
// //     borderRadius: 25,
// //     paddingHorizontal: 20,
// //     marginVertical: 10,
// //     fontSize: 16,
// //     color: "#333333",
// //     borderWidth: 1,
// //     borderColor: "rgba(255, 255, 255, 0.4)",
// //   },
// //   // Login Button
// //   loginButton: {
// //     width: "90%",
// //     height: 50,
// //     backgroundColor: "#A020F0", // Purple
// //     borderRadius: 25,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginVertical: 20,
// //   },
// //   loginButtonText: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     color: "#FFFFFF",
// //   },
// //   // Forgot Password
// //   forgotPassword: {
// //     fontSize: 14,
// //     color: "#A020F0",
// //     textDecorationLine: "underline",
// //     marginBottom: 20,
// //   },
// //   // Sign-Up Text
// //   signupText: {
// //     fontSize: 14,
// //     color: "#666666",
// //   },
// //   signupLink: {
// //     fontSize: 14,
// //     color: "#A020F0",
// //     fontWeight: "bold",
// //   },
// // });






// import React, { FC, useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient"; // For gradient background
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../navigation/types";

// type SignInScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, "SignIn">;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate("CompleteProfile");
//   };

//   return (
//     <LinearGradient
//       colors={["#6a11cb", "#2575fc"]} // Gradient colors
//       style={styles.gradientBackground}
//     >
//       <KeyboardAvoidingView
//         style={styles.container}
//         behavior={Platform.OS === "ios" ? "padding" : undefined}
//       >
//         {/* Card Container */}
//         <View style={styles.card}>
//           <Text style={styles.title}>Sign In</Text>

//           {/* Email Input */}
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             placeholderTextColor="#A0A0A0"
//           />

//           {/* Password Input */}
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//             placeholderTextColor="#A0A0A0"
//           />

//           {/* Login Button */}
//           <TouchableOpacity style={styles.button} onPress={handleSignIn}>
//             <Text style={styles.buttonText}>Log In</Text>
//           </TouchableOpacity>

//           {/* Forgot Password */}
//           <TouchableOpacity>
//             <Text style={styles.forgotPassword}>Forgot Password?</Text>
//           </TouchableOpacity>

//           {/* Sign-Up Link */}
//           <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
//             <Text style={styles.signupText}>
//               Don’t have an account?{" "}
//               <Text style={styles.signupLink}>Sign Up</Text>
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </KeyboardAvoidingView>
//     </LinearGradient>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   gradientBackground: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   card: {
//     width: "90%",
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 25,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "#333333",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#f9f9f9",
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     fontSize: 16,
//     borderColor: "#ddd",
//     borderWidth: 1,
//     color: "#333333",
//   },
//   button: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#2575fc",
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "white",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#2575fc",
//     marginVertical: 10,
//     textDecorationLine: "underline",
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666",
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#2575fc",
//     fontWeight: "bold",
//   },
// });



// import React, { FC, useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
// } from "react-native";
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type SignInScreenProps = {
//     navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate('CompleteProfile'); 
//   };

//   return (
//     <View style={styles.container}>
//       {/* Background Shapes */}
//       <View style={styles.shape1} />
//       <View style={styles.shape2} />
//       <View style={styles.shape3} />
//       <View style={styles.shape4} />

//       {/* Glassmorphism Layer */}
//       <View style={styles.glassContainer}>
//         {/* Title */}
//         <Text style={styles.title}>Welcome Back</Text>

//         {/* Email Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />

//         {/* Password Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />

//         {/* Login Button */}
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>

//         {/* Forgot Password */}
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>

//         {/* Sign-Up Link */}
//         <TouchableOpacity>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E6E6FA", // Lavender background
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   // Background Shapes
//   shape1: {
//     position: "absolute",
//     width: 300,
//     height: 300,
//     backgroundColor: "#F9DDE7",
//     borderRadius: 150,
//     top: -100,
//     left: -50,
//   },
//   shape2: {
//     position: "absolute",
//     width: 400,
//     height: 400,
//     backgroundColor: "#EBCDFD",
//     borderRadius: 200,
//     top: -150,
//     right: -50,
//   },
//   shape3: {
//     position: "absolute",
//     width: 300,
//     height: 300,
//     backgroundColor: "#F7DFF2",
//     borderRadius: 150,
//     bottom: -80,
//     left: -60,
//   },
//   shape4: {
//     position: "absolute",
//     width: 250,
//     height: 250,
//     backgroundColor: "#D8A8EE",
//     borderRadius: 125,
//     bottom: -50,
//     right: -40,
//   },
//   // Glass Container
//   glassContainer: {
//     width: "90%",
//     padding: 20,
//     borderRadius: 20,
//     backgroundColor: "rgba(255, 255, 255, 0.2)", // Translucent white
//     backdropFilter: "blur(10px)", // Blur effect
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,
//     alignItems: "center",
//   },
//   // Title
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333",
//     marginBottom: 20,
//   },
//   // Input Fields
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "rgba(255, 255, 255, 0.5)", // Light translucent white
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333",
//   },
//   // Login Button
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0",
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   // Forgot Password
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0",
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   // Sign-Up Text
//   signupText: {
//     fontSize: 14,
//     color: "#666666",
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0",
//     fontWeight: "bold",
//   },
// });



// import React, { FC, useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
// } from "react-native";
// import { BlurView } from "@react-native-community/blur"; // Use this or 'expo-blur'

// const SignInScreen: FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }
//     Alert.alert("Success", "Logged in successfully!");
//   };

//   return (
//     <View style={styles.container}>
//       {/* Background Shapes */}
//       <View style={styles.shape1} />
//       <View style={styles.shape2} />
//       <View style={styles.shape3} />
//       <View style={styles.shape4} />

//       {/* Glassmorphism Layer */}
//       {/* <BlurView
//         style={styles.glassContainer}
//         blurType="light"
//         blurAmount={10}
//         reducedTransparencyFallbackColor="white"
//       > */}
      
//       <BlurView
//         style={styles.blurContainer}
//         blurType="light"
//         blurAmount={10}
//         reducedTransparencyFallbackColor="white"
//       >
//         {/* Title */}
//         <Text style={styles.title}>Welcome Back</Text>

//         {/* Email Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />

//         {/* Password Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />

//         {/* Login Button */}
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>

//         {/* Forgot Password */}
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>

//         {/* Sign-Up Link */}
//         <TouchableOpacity>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </BlurView>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E6E6FA",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   shape1: {
//     position: "absolute",
//     width: 300,
//     height: 300,
//     backgroundColor: "#F9DDE7",
//     borderRadius: 150,
//     top: -100,
//     left: -50,
//   },
//   shape2: {
//     position: "absolute",
//     width: 400,
//     height: 400,
//     backgroundColor: "#EBCDFD",
//     borderRadius: 200,
//     top: -150,
//     right: -50,
//   },
//   shape3: {
//     position: "absolute",
//     width: 300,
//     height: 300,
//     backgroundColor: "#F7DFF2",
//     borderRadius: 150,
//     bottom: -80,
//     left: -60,
//   },
//   shape4: {
//     position: "absolute",
//     width: 250,
//     height: 250,
//     backgroundColor: "#D8A8EE",
//     borderRadius: 125,
//     bottom: -50,
//     right: -40,
//   },
//   glassContainer: {
//     width: "90%",
//     padding: 20,
//     borderRadius: 20,
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "rgba(255, 255, 255, 0.5)",
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333",
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0",
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0",
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666",
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0",
//     fontWeight: "bold",
//   },
// });


// import React, { FC, useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
// } from "react-native";
// import { BlurView } from "@react-native-community/blur"; // Ensure it's installed

// const SignInScreen: FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }
//     Alert.alert("Success", "Logged in successfully!");
//   };

//   return (
//     <View style={styles.container}>
//       {/* Background Shapes */}
//       <View style={styles.shape1} />
//       <View style={styles.shape2} />
//       <View style={styles.shape3} />
//       <View style={styles.shape4} />

//       {/* Glassmorphism Layer */}
//       <BlurView
//         style={styles.blurContainer}
//         blurType="light"
//         blurAmount={10}
//         reducedTransparencyFallbackColor="white"
//       >
//         {/* Title */}
//         <Text style={styles.title}>Welcome Back</Text>

//         {/* Email Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />

//         {/* Password Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />

//         {/* Login Button */}
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>

//         {/* Forgot Password */}
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>

//         {/* Sign-Up Link */}
//         <TouchableOpacity>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </BlurView>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E6E6FA",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   shape1: {
//     position: "absolute",
//     width: 300,
//     height: 300,
//     backgroundColor: "#F9DDE7",
//     borderRadius: 150,
//     top: -100,
//     left: -50,
//   },
//   shape2: {
//     position: "absolute",
//     width: 400,
//     height: 400,
//     backgroundColor: "#EBCDFD",
//     borderRadius: 200,
//     top: -150,
//     right: -50,
//   },
//   shape3: {
//     position: "absolute",
//     width: 300,
//     height: 300,
//     backgroundColor: "#F7DFF2",
//     borderRadius: 150,
//     bottom: -80,
//     left: -60,
//   },
//   shape4: {
//     position: "absolute",
//     width: 250,
//     height: 250,
//     backgroundColor: "#D8A8EE",
//     borderRadius: 125,
//     bottom: -50,
//     right: -40,
//   },
//   blurContainer: {
//     width: "90%",
//     padding: 20,
//     borderRadius: 20,
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "rgba(255, 255, 255, 0.5)",
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333",
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0",
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0",
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666",
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0",
//     fontWeight: "bold",
//   },
// });




// import React, { FC, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { BlurView } from "@react-native-community/blur";  // Ensure the correct import

// const SignInScreen: FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }
//     Alert.alert("Success", "Logged in successfully!");
//   };

//   return (
//     <View style={styles.container}>
//       {/* Background Shapes */}
//       <View style={styles.shape1} />
//       <View style={styles.shape2} />
//       <View style={styles.shape3} />
//       <View style={styles.shape4} />

//       {/* Glassmorphism Layer */}
//       <BlurView
//         style={styles.blurContainer}
//         blurType="light"
//         blurAmount={10}
//         reducedTransparencyFallbackColor="white"
//       >
//         {/* Title */}
//         <Text style={styles.title}>Welcome Back</Text>

//         {/* Email Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />

//         {/* Password Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />

//         {/* Login Button */}
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>

//         {/* Forgot Password */}
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>

//         {/* Sign-Up Link */}
//         <TouchableOpacity>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </BlurView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E6E6FA",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   shape1: {
//     position: "absolute",
//     width: 300,
//     height: 300,
//     backgroundColor: "#F9DDE7",
//     borderRadius: 150,
//     top: -100,
//     left: -50,
//   },
//   shape2: {
//     position: "absolute",
//     width: 400,
//     height: 400,
//     backgroundColor: "#EBCDFD",
//     borderRadius: 200,
//     top: -150,
//     right: -50,
//   },
//   shape3: {
//     position: "absolute",
//     width: 300,
//     height: 300,
//     backgroundColor: "#F7DFF2",
//     borderRadius: 150,
//     bottom: -80,
//     left: -60,
//   },
//   shape4: {
//     position: "absolute",
//     width: 250,
//     height: 250,
//     backgroundColor: "#D8A8EE",
//     borderRadius: 125,
//     bottom: -50,
//     right: -40,
//   },
//   blurContainer: {
//     width: "90%",
//     padding: 20,
//     borderRadius: 20,
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "rgba(255, 255, 255, 0.5)",
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333",
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0",
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0",
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666",
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0",
//     fontWeight: "bold",
//   },
// });

// export default SignInScreen;





// import React, { FC, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';
// import { BlurView } from '@react-native-community/blur'; // Correct import for BlurView

// type SignInScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate('CompleteProfile');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Simulated Glassmorphism Container */}
//       <BlurView
//         style={styles.glassmorphismContainer}
//         blurType="light"
//         blurAmount={10}
//       >
//         <Text style={styles.title}>Welcome Back</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </BlurView>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E6E6FA", // Lavender background
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   glassmorphismContainer: {
//     width: "80%",
//     padding: 30,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "rgba(255, 255, 255, 0.3)", // Slight opacity for glassmorphism effect
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#F2F2F2",
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333",
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0",
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0",
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666",
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0",
//     fontWeight: "bold",
//   },
// });




// import React, { FC, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';
// import { BlurView } from '@react-native-community/blur'; // Correct import for BlurView

// type SignInScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate('CompleteProfile');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Adding the BlurView component for the background */}
//       <BlurView
//         style={styles.blurContainer} // Added a wrapper style for the BlurView
//         blurType="light"
//         blurAmount={10}
//       >
//         {/* Wrapping the content inside a View to avoid the children error */}
//         <View style={styles.glassmorphismContainer}>
//           <Text style={styles.title}>Welcome Back</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             placeholderTextColor="#A0A0A0"
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//             placeholderTextColor="#A0A0A0"
//           />
//           <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//             <Text style={styles.loginButtonText}>Log In</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text style={styles.forgotPassword}>Forgot Password?</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text style={styles.signupText}>
//               Don’t have an account?{" "}
//               <Text style={styles.signupLink}>Sign Up</Text>
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </BlurView>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E6E6FA", // Lavender background
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   blurContainer: {
//     flex: 1, // Ensuring the BlurView takes full space
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
//   glassmorphismContainer: {
//     width: "80%",
//     padding: 30,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "rgba(255, 255, 255, 0.3)", // Slight opacity for glassmorphism effect
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#F2F2F2",
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333",
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0",
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0",
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666",
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0",
//     fontWeight: "bold",
//   },
// });




// import React, { FC, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';
// import { BlurView } from '@react-native-community/blur'; // Correct import for BlurView

// type SignInScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate('CompleteProfile');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Adding the BlurView component for the background */}
//       <BlurView
//         style={styles.blurContainer} // Added a wrapper style for the BlurView
//         blurType="light"
//         blurAmount={5}  // Reduced blur for a lighter effect
//       >
//         {/* Wrapping the content inside a View to avoid the children error */}
//         <View style={styles.glassmorphismContainer}>
//           <Text style={styles.title}>Welcome Back</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             placeholderTextColor="#A0A0A0"
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//             placeholderTextColor="#A0A0A0"
//           />
//           <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//             <Text style={styles.loginButtonText}>Log In</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text style={styles.forgotPassword}>Forgot Password?</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text style={styles.signupText}>
//               Don’t have an account?{" "}
//               <Text style={styles.signupLink}>Sign Up</Text>
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </BlurView>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E6E6FA", // Lavender background
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   blurContainer: {
//     flex: 1, // Ensuring the BlurView takes full space
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
//   glassmorphismContainer: {
//     width: "80%",
//     padding: 30,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "rgba(255, 255, 255, 0.2)", // Light opacity for a lighter glassmorphism effect
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#F2F2F2",
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333",
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0",
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0",
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666",
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0",
//     fontWeight: "bold",
//   },
// });




// import React, { FC, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type SignInScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate('CompleteProfile');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Glassmorphism Effect with View */}
//       <View style={styles.glassmorphismContainer}>
//         <Text style={styles.title}>Welcome Back</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E6E6FA", // Lavender background
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   glassmorphismContainer: {
//     width: "80%",
//     padding: 30,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "rgba(255, 255, 255, 0.2)", // Glassmorphism background with transparency
//     borderWidth: 1, // Slight border to give more of a glass effect
//     borderColor: "rgba(255, 255, 255, 0.3)", // Border color with transparency
//     shadowColor: "#000", // Shadow color for the glass effect
//     shadowOffset: { width: 0, height: 4 }, // Shadow offset
//     shadowOpacity: 0.2, // Shadow opacity
//     shadowRadius: 10, // Shadow blur radius
//     elevation: 5, // For Android shadow effect
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#F2F2F2",
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333",
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0",
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0",
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666",
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0",
//     fontWeight: "bold",
//   },
// });





// import React, { FC, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type SignInScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate('CompleteProfile');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Glassmorphism Effect without BlurView */}
//       <View style={styles.glassmorphismContainer}>
//         <Text style={styles.title}>Welcome Back</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E6E6FA", // Lavender background
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   glassmorphismContainer: {
//     width: "80%",
//     padding: 30,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "rgba(255, 255, 255, 0.3)", // Semi-transparent background to simulate frosted glass
//     borderWidth: 1, // Adding subtle border for glass effect
//     borderColor: "rgba(255, 255, 255, 0.3)", // Light border with transparency
//     shadowColor: "#000", // Shadow color for depth
//     shadowOffset: { width: 0, height: 4 }, // Shadow position
//     shadowOpacity: 0.4, // Shadow opacity
//     shadowRadius: 10, // Shadow blur radius
//     elevation: 6, // For Android devices, adds elevation effect
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#F2F2F2",
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333",
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0", // Purple color for the button
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0",
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666",
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0",
//     fontWeight: "bold",
//   },
// });



// import React, { FC, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type SignInScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate('CompleteProfile');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Neumorphism Effect Container */}
//       <View style={styles.neumorphismContainer}>
//         <Text style={styles.title}>Welcome Back</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E6E6FA", // Lavender background for light aesthetic
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   neumorphismContainer: {
//     width: "80%",
//     padding: 30,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#E6E6FA", // Matching background color to the container
//     borderColor: "#DDDDDD", // Light gray for subtle border
//     borderWidth: 1,
//     shadowColor: "#000", // Shadow for depth effect
//     shadowOffset: { width: 4, height: 4 }, // Shadow direction for 3D effect
//     shadowOpacity: 0.1, // Soft shadow opacity
//     shadowRadius: 10, // Shadow blur for a softer effect
//     elevation: 5, // Elevation for Android devices
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#F2F2F2", // Light gray to look sunken
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333",
//     shadowColor: "#BDBDBD", // Inner shadow for sunken effect
//     shadowOffset: { width: -2, height: -2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5, // Inner shadow for sunken effect
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0", // Purple for button color
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//     shadowColor: "#BDBDBD", // Outer shadow for raised effect
//     shadowOffset: { width: 4, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 6, // Raised button on Android
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0",
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666",
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0",
//     fontWeight: "bold",
//   },
// });



// import React, { FC, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type SignInScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate('CompleteProfile');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Neumorphism Effect Container */}
//       <View style={styles.neumorphismContainer}>
//         <Text style={styles.title}>Welcome Back</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E6E6FA", // Lavender background for light aesthetic
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   neumorphismContainer: {
//     width: "80%",
//     padding: 30,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#E6E6FA", // Matching background color to the container
//     borderColor: "#DDDDDD", // Light gray for subtle border
//     borderWidth: 1,
//     shadowColor: "#000", // Shadow for depth effect
//     shadowOffset: { width: 4, height: 4 }, // Shadow direction for 3D effect
//     shadowOpacity: 0.1, // Soft shadow opacity
//     shadowRadius: 10, // Shadow blur for a softer effect
//     elevation: 5, // Elevation for Android devices
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#F2F2F2", // Light gray to look sunken
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333",
//     shadowColor: "#BDBDBD", // Inner shadow for sunken effect
//     shadowOffset: { width: -2, height: -2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5, // Inner shadow for sunken effect
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0", // Purple for button color
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//     shadowColor: "#BDBDBD", // Outer shadow for raised effect
//     shadowOffset: { width: 4, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 6, // Raised button on Android
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0",
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666",
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0",
//     fontWeight: "bold",
//   },
// });




// import React, { FC, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type SignInScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate('CompleteProfile');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.shape1} />
//     <View style={styles.shape2} />
//    <View style={styles.shape3} />
//      <View style={styles.shape4} />

//       {/* Neumorphism Effect Container */}
//       <View style={styles.neumorphismContainer}>
//         <Text style={styles.title}>Welcome Back</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#EDE7F6", // Light lavender base to simulate gradient-like background
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   neumorphismContainer: {
//     width: "80%",
//     padding: 30,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#E6E6FA", // Light background to match the overall theme
//     borderColor: "#DDDDDD", // Light gray for subtle border
//     borderWidth: 1,
//     shadowColor: "#000", // Shadow for depth effect
//     shadowOffset: { width: 4, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333", // Dark text for contrast
//     marginBottom: 20,
//     textShadowColor: "#ddd", // Light shadow for text
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 10,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#F2F2F2", // Light gray for sunken effect
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333", // Dark text for contrast
//     shadowColor: "#BDBDBD", // Inner shadow for sunken effect
//     shadowOffset: { width: -2, height: -2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0", // Purple button color
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//     shadowColor: "#BDBDBD", // Outer shadow for raised effect
//     shadowOffset: { width: 4, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 6, // Raised button on Android
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0", // Purple text for link
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666", // Light gray text
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0", // Purple for the sign-up link
//     fontWeight: "bold",
//   },
//   shape1: {
//     position: "absolute",
//        width: 300,
//       height: 300,
//        backgroundColor: "#F9DDE7",
//        borderRadius: 150,
//        top: -100,
//        left: -50,
//      },
//      shape2: {
//        position: "absolute",
//        width: 400,
//        height: 400,
//        backgroundColor: "#EBCDFD",
//        borderRadius: 200,
//        top: -150,
//        right: -50,
//      },
//      shape3: {
//        position: "absolute",
//        width: 300,
//        height: 300,
//        backgroundColor: "#F7DFF2",
//        borderRadius: 150,
//        bottom: -80,
//        left: -60,
//      },
//      shape4: {
//        position: "absolute",
//        width: 250,
//        height: 250,
//        backgroundColor: "#D8A8EE",
//        borderRadius: 125,
//        bottom: -50,
//        right: -40,
//      },
   
// });





// import React, { FC, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type SignInScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate('CompleteProfile');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.shape1} />
//       <View style={styles.shape2} />
//       <View style={styles.shape3} />
//       <View style={styles.shape4} />
//       <View style={styles.shape5} />
//       <View style={styles.shape6} />

//       {/* Neumorphism Effect Container */}
//       <View style={styles.neumorphismContainer}>
//         <Text style={styles.title}>Welcome Back</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#EDE7F6", // Light lavender base to simulate gradient-like background
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   neumorphismContainer: {
//     width: "80%",
//     padding: 30,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#E6E6FA", // Light background to match the overall theme
//     borderColor: "#DDDDDD", // Light gray for subtle border
//     borderWidth: 1,
//     shadowColor: "#000", // Shadow for depth effect
//     shadowOffset: { width: 4, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333", // Dark text for contrast
//     marginBottom: 20,
//     textShadowColor: "#ddd", // Light shadow for text
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 10,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#F2F2F2", // Light gray for sunken effect
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333", // Dark text for contrast
//     shadowColor: "#BDBDBD", // Inner shadow for sunken effect
//     shadowOffset: { width: -2, height: -2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0", // Purple button color
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//     shadowColor: "#BDBDBD", // Outer shadow for raised effect
//     shadowOffset: { width: 4, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 6, // Raised button on Android
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0", // Purple text for link
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666", // Light gray text
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0", // Purple for the sign-up link
//     fontWeight: "bold",
//   },
//   // Shape Styles
//   shape1: {
//     position: "absolute",
//     width: 120,
//     height: 120,
//     backgroundColor: "#F9DDE7",
//     borderRadius: 60,
//     top: -50,
//     left: -50,
//   },
//   shape2: {
//     position: "absolute",
//     width: 140,
//     height: 140,
//     backgroundColor: "#EBCDFD",
//     borderRadius: 70,
//     top: -60,
//     right: -40,
//   },
//   shape3: {
//     position: "absolute",
//     width: 100,
//     height: 100,
//     backgroundColor: "#F7DFF2",
//     borderRadius: 50,
//     bottom: -50,
//     left: -60,
//   },
//   shape4: {
//     position: "absolute",
//     width: 80,
//     height: 80,
//     backgroundColor: "#D8A8EE",
//     borderRadius: 40,
//     bottom: -40,
//     right: -30,
//   },
//   shape5: {
//     position: "absolute",
//     width: 100,
//     height: 100,
//     backgroundColor: "#B3C6F1",
//     transform: [{ rotate: "45deg" }], // Creating a square shape rotated to look like a diamond
//     top: -100,
//     left: "50%",
//     marginLeft: -50,
//   },
//   shape6: {
//     position: "absolute",
//     width: 100,
//     height: 100,
//     backgroundColor: "#FFC0CB",
//     clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', // Creating a triangle shape
//     bottom: -90,
//     right: -80,
//   },
// });




// import React, { FC, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type SignInScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate('CompleteProfile');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Neumorphism Effect Container */}
//       <View style={styles.neumorphismContainer}>
//         <Text style={styles.title}>Welcome Back</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Shapes around the neumorphism container */}
//       <View style={[styles.shape, styles.shape1]} />
//       <View style={[styles.shape, styles.shape2]} />
//       <View style={[styles.shape, styles.shape3]} />
//       <View style={[styles.shape, styles.shape4]} />
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#EDE7F6", // Light lavender base to simulate gradient-like background
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   neumorphismContainer: {
//     width: "80%",
//     padding: 30,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#E6E6FA", // Light background to match the overall theme
//     borderColor: "#DDDDDD", // Light gray for subtle border
//     borderWidth: 1,
//     shadowColor: "#000", // Shadow for depth effect
//     shadowOffset: { width: 4, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333", // Dark text for contrast
//     marginBottom: 20,
//     textShadowColor: "#ddd", // Light shadow for text
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 10,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#F2F2F2", // Light gray for sunken effect
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333", // Dark text for contrast
//     shadowColor: "#BDBDBD", // Inner shadow for sunken effect
//     shadowOffset: { width: -2, height: -2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0", // Purple button color
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//     shadowColor: "#BDBDBD", // Outer shadow for raised effect
//     shadowOffset: { width: 4, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 6, // Raised button on Android
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0", // Purple text for link
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666", // Light gray text
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0", // Purple for the sign-up link
//     fontWeight: "bold",
//   },
//   shape: {
//     position: "absolute",
//     backgroundColor: "#E0E0E0", // Light background for shapes
//     elevation: 5,
//     shadowColor: "#d1d1d1",
//     shadowOffset: { width: 10, height: 10 },
//     shadowOpacity: 0.2,
//     shadowRadius: 15,
//   },
//   shape1: {
//     width: 300,
//     height: 300,
//     backgroundColor: "#F9DDE7",
//     borderRadius: 150,
//     top: -100,
//     left: -50,
//   },
//   shape2: {
//     width: 400,
//     height: 400,
//     backgroundColor: "#EBCDFD",
//     borderRadius: 200,
//     top: -150,
//     right: -50,
//   },
//   shape3: {
//     width: 300,
//     height: 300,
//     backgroundColor: "#F7DFF2",
//     borderRadius: 150,
//     bottom: -80,
//     left: -60,
//   },
//   shape4: {
//     width: 250,
//     height: 250,
//     backgroundColor: "#D8A8EE",
//     borderRadius: 125,
//     bottom: -50,
//     right: -40,
//   },
// });





// import React, { FC, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type SignInScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate('CompleteProfile');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Background Shapes */}
//       <View style={[styles.shape, styles.circle1]} />
//       <View style={[styles.shape, styles.circle2]} />
//       <View style={[styles.shape, styles.rectangle1]} />
//       <View style={[styles.shape, styles.rectangle2]} />

//       {/* Neumorphism Container */}
//       <View style={styles.neumorphismContainer}>
//         <Text style={styles.title}>Welcome Back</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#EDE7F6", // Light lavender base
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   neumorphismContainer: {
//     width: "80%",
//     padding: 30,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#FFFFFF", // Neumorphic white
//     borderColor: "#DDDDDD",
//     borderWidth: 1,
//     shadowColor: "#000",
//     shadowOffset: { width: 4, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#F2F2F2",
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333",
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0",
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0",
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666",
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0",
//     fontWeight: "bold",
//   },

//   /* Background Shapes */
//   shape: {
//     position: "absolute",
//   },
//   circle1: {
//     width: 150,
//     height: 150,
//     backgroundColor: "rgba(160, 32, 240, 0.3)", // Transparent purple
//     borderRadius: 75,
//     top: 50,
//     left: 30,
//   },
//   circle2: {
//     width: 200,
//     height: 200,
//     backgroundColor: "rgba(128, 0, 128, 0.2)", // Slightly darker transparent purple
//     borderRadius: 100,
//     bottom: 80,
//     right: 40,
//   },
//   rectangle1: {
//     width: 120,
//     height: 120,
//     backgroundColor: "rgba(147, 112, 219, 0.3)", // Light purple
//     top: 200,
//     left: -50,
//     transform: [{ rotate: "30deg" }],
//   },
//   rectangle2: {
//     width: 180,
//     height: 180,
//     backgroundColor: "rgba(216, 191, 216, 0.2)", // Light lavender
//     bottom: 100,
//     right: -60,
//     transform: [{ rotate: "-45deg" }],
//   },
// });





// import React, { FC, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type SignInScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate('CompleteProfile');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.shape1} />
//       <View style={styles.shape2} />
//       <View style={styles.shape3} />
//       <View style={styles.shape4} />
//       <View style={styles.smallSquare1} />
//       <View style={styles.smallSquare2} />
//       <View style={styles.smallCircle1} />
//       <View style={styles.smallCircle2} />

//       {/* Neumorphism Effect Container */}
//       <View style={styles.neumorphismContainer}>
//         <Text style={styles.title}>Welcome Back</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#EDE7F6", // Light lavender base to simulate gradient-like background
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   neumorphismContainer: {
//     width: "80%",
//     padding: 30,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#E6E6FA", // Light background to match the overall theme
//     borderColor: "#DDDDDD", // Light gray for subtle border
//     borderWidth: 1,
//     shadowColor: "#000", // Shadow for depth effect
//     shadowOffset: { width: 4, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333", // Dark text for contrast
//     marginBottom: 20,
//     textShadowColor: "#ddd", // Light shadow for text
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 10,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#F2F2F2", // Light gray for sunken effect
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333", // Dark text for contrast
//     shadowColor: "#BDBDBD", // Inner shadow for sunken effect
//     shadowOffset: { width: -2, height: -2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0", // Purple button color
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//     shadowColor: "#BDBDBD", // Outer shadow for raised effect
//     shadowOffset: { width: 4, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 6, // Raised button on Android
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0", // Purple text for link
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666", // Light gray text
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0", // Purple for the sign-up link
//     fontWeight: "bold",
//   },
//   shape1: {
//     position: "absolute",
//     width: 300,
//     height: 300,
//     backgroundColor: "#F9DDE7",
//     borderRadius: 150,
//     top: -100,
//     left: -50,
//   },
//   shape2: {
//     position: "absolute",
//     width: 400,
//     height: 400,
//     backgroundColor: "#EBCDFD",
//     borderRadius: 200,
//     top: -150,
//     right: -50,
//   },
//   shape3: {
//     position: "absolute",
//     width: 300,
//     height: 300,
//     backgroundColor: "#F7DFF2",
//     borderRadius: 150,
//     bottom: -80,
//     left: -60,
//   },
//   shape4: {
//     position: "absolute",
//     width: 250,
//     height: 250,
//     backgroundColor: "#D8A8EE",
//     borderRadius: 125,
//     bottom: -50,
//     right: -40,
//   },
//   smallSquare1: {
//     position: "absolute",
//     width: 50,
//     height: 50,
//     backgroundColor: "#FFB6C1", // Light pink
//     top: -50,
//     left: 50,
//     borderRadius: 10,
//   },
//   smallSquare2: {
//     position: "absolute",
//     width: 40,
//     height: 40,
//     backgroundColor: "#FFDDC1", // Light peach
//     bottom: 70,
//     right: 100,
//     borderRadius: 5,
//   },
//   smallCircle1: {
//     position: "absolute",
//     width: 40,
//     height: 40,
//     backgroundColor: "#D2B4DE", // Light purple
//     borderRadius: 20,
//     top: 80,
//     right: 150,
//   },
//   smallCircle2: {
//     position: "absolute",
//     width: 30,
//     height: 30,
//     backgroundColor: "#B3E5FC", // Light blue
//     borderRadius: 15,
//     bottom: 30,
//     left: 120,
//   },
// });





// 



// import React, { FC, useState } from "react";
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

// type SignInScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, "SignIn">;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate("CompleteProfile");
//   };

//   return (
//     <View style={styles.container}>
//       {/* Decorative Background Shapes */}
//       <View style={styles.shapeCircleLarge} />
//       <View style={styles.shapeCircleSmall} />
//       <View style={styles.shapeSquareLarge} />
//       <View style={styles.shapeSquareSmall} />
//       <View style={styles.shapeTransparentCircle} />
//       <View style={styles.shapeTransparentSquare} />
//       <View style={styles.additionalCircleOne} />
//       <View style={styles.additionalCircleTwo} />
//       <View style={styles.additionalSquareOne} />
//       <View style={styles.additionalSquareTwo} />

//       {/* Content */}
//       <View style={styles.neumorphismContainer}>
//         <Text style={styles.title}>Welcome Back</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#EDE7F6", // Light lavender
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   neumorphismContainer: {
//     width: "80%",
//     padding: 30,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#FFFFFF",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333", // Dark text
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#F2F2F2", // Light gray
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333", // Dark text
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0", // Purple button
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0",
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666", // Light gray
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0", // Purple
//     fontWeight: "bold",
//   },
//   /* Decorative Shapes */
//   shapeCircleLarge: {
//     position: "absolute",
//     width: 300,
//     height: 300,
//     backgroundColor: "#E5CCF2",
//     borderRadius: 150,
//     top: -50,
//     left: -50,
//   },
//   shapeCircleSmall: {
//     position: "absolute",
//     width: 100,
//     height: 100,
//     backgroundColor: "#D4B8EB",
//     borderRadius: 50,
//     top: 120,
//     right: -20,
//   },
//   shapeSquareLarge: {
//     position: "absolute",
//     width: 200,
//     height: 200,
//     backgroundColor: "#E4D7FB",
//     borderRadius: 20,
//     bottom: -50,
//     right: -30,
//   },
//   shapeSquareSmall: {
//     position: "absolute",
//     width: 100,
//     height: 100,
//     backgroundColor: "#C8AEEB",
//     borderRadius: 10,
//     bottom: 50,
//     left: 20,
//   },
//   shapeTransparentCircle: {
//     position: "absolute",
//     width: 150,
//     height: 150,
//     backgroundColor: "rgba(200, 150, 250, 0.3)",
//     borderRadius: 75,
//     top: 200,
//     left: 80,
//   },
//   shapeTransparentSquare: {
//     position: "absolute",
//     width: 120,
//     height: 120,
//     backgroundColor: "rgba(180, 100, 200, 0.2)",
//     borderRadius: 15,
//     bottom: 150,
//     right: 80,
//   },
//   additionalCircleOne: {
//     position: "absolute",
//     width: 80,
//     height: 80,
//     backgroundColor: "#EAD4FA",
//     borderRadius: 40,
//     top: 50,
//     left: 150,
//   },
//   additionalCircleTwo: {
//     position: "absolute",
//     width: 60,
//     height: 60,
//     backgroundColor: "#D1C3F0",
//     borderRadius: 30,
//     bottom: 120,
//     left: 100,
//   },
//   additionalSquareOne: {
//     position: "absolute",
//     width: 50,
//     height: 50,
//     backgroundColor: "#DFC5F6",
//     borderRadius: 10,
//     top: 250,
//     right: 100,
//   },
//   additionalSquareTwo: {
//     position: "absolute",
//     width: 70,
//     height: 70,
//     backgroundColor: "#D8B6ED",
//     borderRadius: 10,
//     bottom: 50,
//     left: 180,
//   },
// });








// import React, { FC, useState } from "react";
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

// type SignInScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, "SignIn">;
// };

// const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert("Error", "Please enter a valid email address.");
//       return;
//     }

//     Alert.alert("Success", "Logged in successfully!");
//     navigation.navigate("CompleteProfile");
//   };

//   return (
//     <View style={styles.container}>
//       {/* Decorative Background Shapes */}
//       <View style={styles.shapeCircleLarge} />
//       <View style={styles.shapeCircleSmall} />
//       <View style={styles.shapeSquareLarge} />
//       <View style={styles.shapeSquareSmall} />
//       <View style={styles.shapeTransparentCircle} />
//       <View style={styles.shapeTransparentSquare} />
//       <View style={styles.additionalCircleOne} />
//       <View style={styles.additionalCircleTwo} />
//       <View style={styles.additionalSquareOne} />
//       <View style={styles.additionalSquareTwo} />
//       {/* Additional Shapes */}
//       <View style={styles.triangleShape} />
//       <View style={styles.hexagonShape} />
//       <View style={styles.starShape} />

//       {/* Content */}
//       <View style={styles.neumorphismContainer}>
//         <Text style={styles.title}>Welcome Back</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#A0A0A0"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#A0A0A0"
//         />
//         <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
//           <Text style={styles.loginButtonText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
//           <Text style={styles.signupText}>
//             Don’t have an account?{" "}
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#EDE7F6", // Light lavender
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   },
//   neumorphismContainer: {
//     width: "80%",
//     padding: 30,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#FFFFFF",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333", // Dark text
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#F2F2F2", // Light gray
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 16,
//     color: "#333333", // Dark text
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#A020F0", // Purple button
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: "#A020F0",
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: "#666666", // Light gray
//   },
//   signupLink: {
//     fontSize: 14,
//     color: "#A020F0", // Purple
//     fontWeight: "bold",
//   },
//   /* Decorative Shapes */
//   shapeCircleLarge: {
//     position: "absolute",
//     width: 300,
//     height: 300,
//     backgroundColor: "#E5CCF2",
//     borderRadius: 150,
//     top: -50,
//     left: -50,
//   },
//   shapeCircleSmall: {
//     position: "absolute",
//     width: 100,
//     height: 100,
//     backgroundColor: "#D4B8EB",
//     borderRadius: 50,
//     top: 120,
//     right: -20,
//   },
//   shapeSquareLarge: {
//     position: "absolute",
//     width: 200,
//     height: 200,
//     backgroundColor: "#E4D7FB",
//     borderRadius: 20,
//     bottom: -50,
//     right: -30,
//   },
//   shapeSquareSmall: {
//     position: "absolute",
//     width: 100,
//     height: 100,
//     backgroundColor: "#C8AEEB",
//     borderRadius: 10,
//     bottom: 50,
//     left: 20,
//   },
//   shapeTransparentCircle: {
//     position: "absolute",
//     width: 150,
//     height: 150,
//     backgroundColor: "rgba(200, 150, 250, 0.3)",
//     borderRadius: 75,
//     top: 200,
//     left: 80,
//   },
//   shapeTransparentSquare: {
//     position: "absolute",
//     width: 120,
//     height: 120,
//     backgroundColor: "rgba(180, 100, 200, 0.2)",
//     borderRadius: 15,
//     bottom: 150,
//     right: 80,
//   },
//   additionalCircleOne: {
//     position: "absolute",
//     width: 80,
//     height: 80,
//     backgroundColor: "#EAD4FA",
//     borderRadius: 40,
//     top: 50,
//     left: 150,
//   },
//   additionalCircleTwo: {
//     position: "absolute",
//     width: 60,
//     height: 60,
//     backgroundColor: "#D1C3F0",
//     borderRadius: 30,
//     bottom: 120,
//     left: 100,
//   },
//   additionalSquareOne: {
//     position: "absolute",
//     width: 50,
//     height: 50,
//     backgroundColor: "#DFC5F6",
//     borderRadius: 10,
//     top: 250,
//     right: 100,
//   },
//   additionalSquareTwo: {
//     position: "absolute",
//     width: 70,
//     height: 70,
//     backgroundColor: "#D8B6ED",
//     borderRadius: 10,
//     bottom: 50,
//     left: 180,
//   },
//   /* New Shapes */
//   triangleShape: {
//     position: "absolute",
//     width: 0,
//     height: 0,
//     borderLeftWidth: 60,
//     borderRightWidth: 60,
//     borderBottomWidth: 120,
//     borderLeftColor: "transparent",
//     borderRightColor: "transparent",
//     borderBottomColor: "#A0C6F3", // Light blue triangle
//     top: 180,
//     right: 60,
//   },
//   hexagonShape: {
//     position: "absolute",
//     width: 120,
//     height: 120,
//     backgroundColor: "#D8A9F5",
//     //clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
//     top: 300,
//     left: 50,
//   },
//   starShape: {
//     position: "absolute",
//     width: 0,
//     height: 0,
//     borderLeftWidth: 50,
//     borderLeftColor: "transparent",
//     borderRightWidth: 50,
//     borderRightColor: "transparent",
//     borderBottomWidth: 100,
//     borderBottomColor: "#F6C5F7",
//     top: 50,
//     right: 100,
//   },
// });


//goodd code ...........

import React, { FC, useState } from "react";
import {View,Text,TextInput,TouchableOpacity,Alert,StyleSheet,} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type SignInScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "SignIn">;
};

const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    Alert.alert("Success", "Logged in successfully!");
    navigation.navigate("CompleteProfile");
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
        <Text style={styles.title}>Welcome Back</Text>
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
        <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signupText}>
            Don’t have an account?{" "}
            <Text style={styles.signupLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;



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
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#A020F0", // Purple button
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  forgotPassword: {
    fontSize: 14,
    color: "#A020F0",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  signupText: {
    fontSize: 14,
    color: "#666666", // Light gray
  },
  signupLink: {
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
