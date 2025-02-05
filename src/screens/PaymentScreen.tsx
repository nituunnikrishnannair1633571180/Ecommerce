// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const PaymentScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Proceed to Payment</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//   },
// });

// export default PaymentScreen;



// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity,Alert } from 'react-native';

// const Payment = ({ route, navigation }: any) => {
//   const { product } = route.params;

//   if (!product) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>No product selected.</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: product.image }} style={styles.productImage} />
//       <Text style={styles.productTitle}>{product.title}</Text>
//       <Text style={styles.productPrice}>₹{product.price.toFixed(2)}</Text>
//       <Text style={styles.productDescription}>{product.description}</Text>
//       <Text style={styles.productSeller}>Seller: {product.seller}</Text>

//       <TouchableOpacity
//         style={styles.payButton}
//         onPress={() => Alert.alert('Payment Successful!')}
//       >
//         <Text style={styles.payButtonText}>Proceed to Pay</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.backButton}
//         onPress={() => navigation.goBack()}
//       >
//         <Text style={styles.backButtonText}>Back to Accessories</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', padding: 16 },
//   productImage: { width: 200, height: 200, marginBottom: 16 },
//   productTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
//   productPrice: { fontSize: 18, color: '#007AFF', marginBottom: 8 },
//   productDescription: { fontSize: 14, marginBottom: 8 },
//   productSeller: { fontSize: 14, marginBottom: 16 },
//   payButton: { backgroundColor: 'green', padding: 12, borderRadius: 8, marginBottom: 8 },
//   payButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   backButton: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8 },
//   backButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   errorText: { color: 'red', fontSize: 16 },
// });

// export default Payment;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   Alert,
// } from 'react-native';

// const Payment = ({ route, navigation }: any) => {
//   const { product } = route.params;

//   const [address, setAddress] = useState('');
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
//     'cash' | 'online' | null
//   >(null);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   const handleProceedPayment = () => {
//     if (!address.trim()) {
//       Alert.alert('Error', 'Please enter your address.');
//       return;
//     }

//     if (!selectedPaymentMethod) {
//       Alert.alert('Error', 'Please select a payment method.');
//       return;
//     }

//     setPaymentSuccess(true);
//   };

//   if (paymentSuccess) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.successText}>Payment Successful!</Text>
//         <TouchableOpacity
//           style={styles.backToHomeButton}
//           onPress={() => navigation.navigate('Accessories')}
//         >
//           <Text style={styles.backToHomeText}>Back to Accessories</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {product ? (
//         <>
//           <Image source={{ uri: product.image }} style={styles.productImage} />
//           <Text style={styles.productTitle}>{product.title}</Text>
//           <Text style={styles.productPrice}>₹{product.price.toFixed(2)}</Text>
//           <Text style={styles.label}>Shipping Address:</Text>
//           <TextInput
//             style={styles.addressInput}
//             placeholder="Enter your address"
//             value={address}
//             onChangeText={setAddress}
//             multiline
//           />
//           <Text style={styles.label}>Select Payment Method:</Text>
//           <TouchableOpacity
//             style={[
//               styles.radioButton,
//               selectedPaymentMethod === 'cash' && styles.radioButtonSelected,
//             ]}
//             onPress={() => setSelectedPaymentMethod('cash')}
//           >
//             <Text style={styles.radioButtonText}>Cash on Delivery</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.radioButton,
//               selectedPaymentMethod === 'online' && styles.radioButtonSelected,
//             ]}
//             onPress={() => setSelectedPaymentMethod('online')}
//           >
//             <Text style={styles.radioButtonText}>Pay Online</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.proceedButton}
//             onPress={handleProceedPayment}
//           >
//             <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
//           </TouchableOpacity>
//         </>
//       ) : (
//         <Text style={styles.errorText}>No product selected.</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   productImage: { width: '100%', height: 200, borderRadius: 8, marginBottom: 16 },
//   productTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
//   productPrice: { fontSize: 18, color: '#007AFF', marginBottom: 16 },
//   label: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
//   addressInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 16,
//     fontSize: 14,
//   },
//   radioButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 8,
//   },
//   radioButtonSelected: {
//     backgroundColor: '#007AFF',
//     borderColor: '#007AFF',
//   },
//   radioButtonText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#000',
//   },
//   proceedButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   proceedButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   errorText: { color: 'red', fontSize: 16, textAlign: 'center', marginTop: 16 },
//   successText: { fontSize: 20, fontWeight: 'bold', color: 'green', marginBottom: 16 },
//   backToHomeButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   backToHomeText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
// });

// export default Payment;



// import React, { FunctionComponent, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   Alert,
// } from 'react-native';

// interface Product {
//   image: string;
//   title: string;
//   price: number;
// }

// interface PaymentProps {
//   route: {
//     params: {
//       product: Product;
//     };
//   };
//   navigation: {
//     navigate: (screen: string) => void;
//   };
// }

// const Payment: FunctionComponent<PaymentProps> = ({ route, navigation }) => {
//   const { product } = route.params;

//   const [address, setAddress] = useState('');
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
//     'cash' | 'online' | null
//   >(null);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   const handleProceedPayment = () => {
//     if (!address.trim()) {
//       Alert.alert('Error', 'Please enter your address.');
//       return;
//     }

//     if (!selectedPaymentMethod) {
//       Alert.alert('Error', 'Please select a payment method.');
//       return;
//     }

//     setPaymentSuccess(true);
//   };

//   if (paymentSuccess) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.successText}>Payment Successful!</Text>
//         <TouchableOpacity
//           style={styles.backToHomeButton}
//           onPress={() => navigation.navigate('Accessories')}
//         >
//           <Text style={styles.backToHomeText}>Back to Accessories</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {product ? (
//         <>
//           <Image source={{ uri: product.image }} style={styles.productImage} />
//           <Text style={styles.productTitle}>{product.title}</Text>
//           <Text style={styles.productPrice}>₹{product.price.toFixed(2)}</Text>
//           <Text style={styles.label}>Shipping Address:</Text>
//           <TextInput
//             style={styles.addressInput}
//             placeholder="Enter your address"
//             value={address}
//             onChangeText={setAddress}
//             multiline
//           />
//           <Text style={styles.label}>Select Payment Method:</Text>
//           <TouchableOpacity
//             style={[
//               styles.radioButton,
//               selectedPaymentMethod === 'cash' && styles.radioButtonSelected,
//             ]}
//             onPress={() => setSelectedPaymentMethod('cash')}
//           >
//             <Text style={styles.radioButtonText}>Cash on Delivery</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.radioButton,
//               selectedPaymentMethod === 'online' && styles.radioButtonSelected,
//             ]}
//             onPress={() => setSelectedPaymentMethod('online')}
//           >
//             <Text style={styles.radioButtonText}>Pay Online</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.proceedButton}
//             onPress={handleProceedPayment}
//           >
//             <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
//           </TouchableOpacity>
//         </>
//       ) : (
//         <Text style={styles.errorText}>No product selected.</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   productImage: { width: '100%', height: 200, borderRadius: 8, marginBottom: 16 },
//   productTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
//   productPrice: { fontSize: 18, color: '#007AFF', marginBottom: 16 },
//   label: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
//   addressInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 16,
//     fontSize: 14,
//   },
//   radioButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 8,
//   },
//   radioButtonSelected: {
//     backgroundColor: '#007AFF',
//     borderColor: '#007AFF',
//   },
//   radioButtonText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#000',
//   },
//   proceedButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   proceedButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   errorText: { color: 'red', fontSize: 16, textAlign: 'center', marginTop: 16 },
//   successText: { fontSize: 20, fontWeight: 'bold', color: 'green', marginBottom: 16 },
//   backToHomeButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   backToHomeText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
// });

// export default Payment;



// import React, { FunctionComponent, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   Alert,
// } from 'react-native';

// interface Product {
//   image: string;
//   title: string;
//   price: number;
// }

// interface PaymentProps {
//   route: {
//     params?: {
//       product: Product;
//     };
//   };
//   navigation: {
//     navigate: (screen: string) => void;
//   };
// }

// const Payment: ScreenComponentType<ParamListBase, "Payment"> = ({ route, navigation }) => {
//   const product = route?.params?.product;

//   const [address, setAddress] = useState('');
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
//     'cash' | 'online' | null
//   >(null);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   const handleProceedPayment = () => {
//     if (!address.trim()) {
//       Alert.alert('Error', 'Please enter your address.');
//       return;
//     }

//     if (!selectedPaymentMethod) {
//       Alert.alert('Error', 'Please select a payment method.');
//       return;
//     }

//     setPaymentSuccess(true);
//   };

//   if (paymentSuccess) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.successText}>Payment Successful!</Text>
//         <TouchableOpacity
//           style={styles.backToHomeButton}
//           onPress={() => navigation.navigate('Accessories')}
//         >
//           <Text style={styles.backToHomeText}>Back to Accessories</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {product ? (
//         <>
//           <Image source={{ uri: product.image }} style={styles.productImage} />
//           <Text style={styles.productTitle}>{product.title}</Text>
//           <Text style={styles.productPrice}>₹{product.price.toFixed(2)}</Text>
//           <Text style={styles.label}>Shipping Address:</Text>
//           <TextInput
//             style={styles.addressInput}
//             placeholder="Enter your address"
//             value={address}
//             onChangeText={setAddress}
//             multiline
//           />
//           <Text style={styles.label}>Select Payment Method:</Text>
//           <TouchableOpacity
//             style={[
//               styles.radioButton,
//               selectedPaymentMethod === 'cash' && styles.radioButtonSelected,
//             ]}
//             onPress={() => setSelectedPaymentMethod('cash')}
//           >
//             <Text style={styles.radioButtonText}>Cash on Delivery</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.radioButton,
//               selectedPaymentMethod === 'online' && styles.radioButtonSelected,
//             ]}
//             onPress={() => setSelectedPaymentMethod('online')}
//           >
//             <Text style={styles.radioButtonText}>Pay Online</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.proceedButton}
//             onPress={handleProceedPayment}
//           >
//             <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
//           </TouchableOpacity>
//         </>
//       ) : (
//         <Text style={styles.errorText}>No product selected.</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   productImage: { width: '100%', height: 200, borderRadius: 8, marginBottom: 16 },
//   productTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
//   productPrice: { fontSize: 18, color: '#007AFF', marginBottom: 16 },
//   label: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
//   addressInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 16,
//     fontSize: 14,
//   },
//   radioButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 8,
//   },
//   radioButtonSelected: {
//     backgroundColor: '#007AFF',
//     borderColor: '#007AFF',
//   },
//   radioButtonText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#000',
//   },
//   proceedButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   proceedButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   errorText: { color: 'red', fontSize: 16, textAlign: 'center', marginTop: 16 },
//   successText: { fontSize: 20, fontWeight: 'bold', color: 'green', marginBottom: 16 },
//   backToHomeButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   backToHomeText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
// });

// export default Payment;



// import React, { FunctionComponent } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { ScreenComponent } from '@react-navigation/native';

// interface PaymentProps {
//   route: {
//     params?: {
//       product: {
//         image: string;
//         title: string;
//         price: number;
//       };
//     };
//   };
//   navigation: {
//     navigate: (screen: string) => void;
//   };
// }

// const Payment: ScreenComponent = ({ route, navigation }: PaymentProps) => {
//   const product = route.params?.product;

//   const [address, setAddress] = React.useState('');
//   const [paymentMethod, setPaymentMethod] = React.useState<'cash' | 'online' | null>(null);

//   const handlePayment = () => {
//     if (!address.trim()) {
//       Alert.alert('Error', 'Please enter your address.');
//       return;
//     }
//     if (!paymentMethod) {
//       Alert.alert('Error', 'Please select a payment method.');
//       return;
//     }
//     // Payment processing logic here...
//     navigation.navigate('Order'); // Navigate to a different screen on successful payment
//   };

//   return (
//     <View style={styles.container}>
//       {product ? (
//         <>
//           <Text style={styles.productTitle}>{product.title}</Text>
//           <Text style={styles.productPrice}>₹{product.price.toFixed(2)}</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter your address"
//             value={address}
//             onChangeText={setAddress}
//           />
//           <TouchableOpacity
//             style={[styles.button, paymentMethod === 'cash' && styles.activeButton]}
//             onPress={() => setPaymentMethod('cash')}
//           >
//             <Text style={styles.buttonText}>Cash on Delivery</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.button, paymentMethod === 'online' && styles.activeButton]}
//             onPress={() => setPaymentMethod('online')}
//           >
//             <Text style={styles.buttonText}>Pay Online</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
//             <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
//           </TouchableOpacity>
//         </>
//       ) : (
//         <Text style={styles.errorText}>Product not available</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   productTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
//   productPrice: { fontSize: 18, color: '#007AFF', marginBottom: 16 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 16,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#e0e0e0',
//     padding: 12,
//     borderRadius: 5,
//     marginBottom: 8,
//     alignItems: 'center',
//   },
//   activeButton: { backgroundColor: '#007AFF' },
//   buttonText: { color: '#000', fontSize: 16 },
//   paymentButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   paymentButtonText: { color: '#fff', fontSize: 16 },
//   errorText: { color: 'red', fontSize: 16, textAlign: 'center', marginTop: 16 },
// });

// export default Payment;


// import React, { FunctionComponent } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { RouteProp, NavigationProp } from '@react-navigation/native';

// interface PaymentProps {
//   route: RouteProp<any, 'Payment'>; // Adjust 'any' with your ParamList type if available
//   navigation: NavigationProp<any>; // Adjust 'any' with your ParamList type if available
// }

// const Payment: FunctionComponent<PaymentProps> = ({ route, navigation }) => {
//   const product = route.params?.product;

//   const [address, setAddress] = React.useState('');
//   const [paymentMethod, setPaymentMethod] = React.useState<'cash' | 'online' | null>(null);

//   const handlePayment = () => {
//     if (!address.trim()) {
//       Alert.alert('Error', 'Please enter your address.');
//       return;
//     }
//     if (!paymentMethod) {
//       Alert.alert('Error', 'Please select a payment method.');
//       return;
//     }
//     // Payment processing logic here...
//     navigation.navigate('Order'); // Navigate to a different screen on successful payment
//   };

//   return (
//     <View style={styles.container}>
//       {product ? (
//         <>
//           <Text style={styles.productTitle}>{product.title}</Text>
//           <Text style={styles.productPrice}>₹{product.price.toFixed(2)}</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter your address"
//             value={address}
//             onChangeText={setAddress}
//           />
//           <TouchableOpacity
//             style={[styles.button, paymentMethod === 'cash' && styles.activeButton]}
//             onPress={() => setPaymentMethod('cash')}
//           >
//             <Text style={styles.buttonText}>Cash on Delivery</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.button, paymentMethod === 'online' && styles.activeButton]}
//             onPress={() => setPaymentMethod('online')}
//           >
//             <Text style={styles.buttonText}>Pay Online</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
//             <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
//           </TouchableOpacity>
//         </>
//       ) : (
//         <Text style={styles.errorText}>Product not available</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   productTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
//   productPrice: { fontSize: 18, color: '#007AFF', marginBottom: 16 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 16,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#e0e0e0',
//     padding: 12,
//     borderRadius: 5,
//     marginBottom: 8,
//     alignItems: 'center',
//   },
//   activeButton: { backgroundColor: '#007AFF' },
//   buttonText: { color: '#000', fontSize: 16 },
//   paymentButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   paymentButtonText: { color: '#fff', fontSize: 16 },
//   errorText: { color: 'red', fontSize: 16, textAlign: 'center', marginTop: 16 },
// });

// export default Payment;



// import React, { FunctionComponent } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { RouteProp, NavigationProp } from '@react-navigation/native';

// interface PaymentProps {
//   route: RouteProp<any, 'Payment'>; // Adjust 'any' with your ParamList type if available
//   navigation: NavigationProp<any>; // Adjust 'any' with your ParamList type if available
// }

// const Payment: FunctionComponent<PaymentProps> = ({ route, navigation }) => {
//   const product = route.params?.product;

//   const [address, setAddress] = React.useState('');
//   const [paymentMethod, setPaymentMethod] = React.useState<'cash' | 'online' | null>(null);

//   const handlePayment = () => {
//     if (!address.trim()) {
//       Alert.alert('Error', 'Please enter your address.');
//       return;
//     }
//     if (!paymentMethod) {
//       Alert.alert('Error', 'Please select a payment method.');
//       return;
//     }
//     // Payment processing logic here...
//     navigation.navigate('Order'); // Navigate to the 'Order' screen on successful payment
//   };

//   return (
//     <View style={styles.container}>
//       {product ? (
//         <>
//           <Text style={styles.productTitle}>{product.title}</Text>
//           <Text style={styles.productPrice}>₹{product.price.toFixed(2)}</Text>

//           <Text style={styles.label}>Enter your address</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter your address"
//             value={address}
//             onChangeText={setAddress}
//           />

//           <Text style={styles.label}>Select Payment Method</Text>
//           <TouchableOpacity
//             style={[styles.button, paymentMethod === 'cash' && styles.activeButton]}
//             onPress={() => setPaymentMethod('cash')}
//           >
//             <Text style={styles.buttonText}>Cash on Delivery</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.button, paymentMethod === 'online' && styles.activeButton]}
//             onPress={() => setPaymentMethod('online')}
//           >
//             <Text style={styles.buttonText}>Pay Online</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
//             <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
//           </TouchableOpacity>
//         </>
//       ) : (
//         <Text style={styles.errorText}>Product not available</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   productTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
//   productPrice: { fontSize: 18, color: '#007AFF', marginBottom: 16 },
//   label: { fontSize: 16, marginBottom: 4, color: '#333' },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 16,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#e0e0e0',
//     padding: 12,
//     borderRadius: 5,
//     marginBottom: 8,
//     alignItems: 'center',
//   },
//   activeButton: { backgroundColor: '#007AFF' },
//   buttonText: { color: '#000', fontSize: 16 },
//   paymentButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   paymentButtonText: { color: '#fff', fontSize: 16 },
//   errorText: { color: 'red', fontSize: 16, textAlign: 'center', marginTop: 16 },
// });

// export default Payment;


// import React, { FunctionComponent } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { RouteProp, NavigationProp } from '@react-navigation/native';

// interface PaymentProps {
//   route: RouteProp<any, 'Payment'>; // Adjust 'any' with your ParamList type if available
//   navigation: NavigationProp<any>; // Adjust 'any' with your ParamList type if available
// }

// const Payment: FunctionComponent<PaymentProps> = ({ route, navigation }) => {
//   const total = route.params?.total;

//   const [address, setAddress] = React.useState('');
//   const [paymentMethod, setPaymentMethod] = React.useState<'cash' | 'online' | null>(null);

//   const handlePayment = () => {
//     if (!address.trim()) {
//       Alert.alert('Error', 'Please enter your address.');
//       return;
//     }
//     if (!paymentMethod) {
//       Alert.alert('Error', 'Please select a payment method.');
//       return;
//     }
//     Alert.alert('Success', 'Your order has been placed.');
//     navigation.navigate('Order'); // Navigate to the 'Order' screen on successful payment
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.totalText}>Total: ₹{total}</Text>

//       <Text style={styles.label}>Enter your address</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your address"
//         value={address}
//         onChangeText={setAddress}
//       />

//       <Text style={styles.label}>Select Payment Method</Text>
//       <TouchableOpacity
//         style={[styles.button, paymentMethod === 'cash' && styles.activeButton]}
//         onPress={() => setPaymentMethod('cash')}
//       >
//         <Text style={styles.buttonText}>Cash on Delivery</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.button, paymentMethod === 'online' && styles.activeButton]}
//         onPress={() => setPaymentMethod('online')}
//       >
//         <Text style={styles.buttonText}>Pay Online</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
//         <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   totalText: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
//   label: { fontSize: 16, marginBottom: 4, color: '#333' },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 16,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#e0e0e0',
//     padding: 12,
//     borderRadius: 5,
//     marginBottom: 8,
//     alignItems: 'center',
//   },
//   activeButton: { backgroundColor: '#007AFF' },
//   buttonText: { color: '#000', fontSize: 16 },
//   paymentButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   paymentButtonText: { color: '#fff', fontSize: 16 },
// });

// export default Payment;



// import React, { FunctionComponent } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { RouteProp, NavigationProp } from '@react-navigation/native';
// import { StripeProvider, useStripe } from '@stripe/stripe-react-native';

// interface PaymentProps {
//   route: RouteProp<any, 'Payment'>;
//   navigation: NavigationProp<any>;
// }

// const Payment: FunctionComponent<PaymentProps> = ({ route, navigation }) => {
//   const total = route.params?.total;
//   const { initPaymentSheet, presentPaymentSheet } = useStripe();

//   const [address, setAddress] = React.useState('');
//   const [paymentMethod, setPaymentMethod] = React.useState<'cash' | 'online' | null>(null);

//   const handlePayment = async () => {
//     if (!address.trim()) {
//       Alert.alert('Error', 'Please enter your address.');
//       return;
//     }
//     if (!paymentMethod) {
//       Alert.alert('Error', 'Please select a payment method.');
//       return;
//     }

//     if (paymentMethod === 'online') {
//       try {
//         // Initialize payment sheet (You would get this from your server)
//         const { error } = await initPaymentSheet({ paymentIntentClientSecret: 'your-payment-intent-secret' });
//         if (error) {
//           Alert.alert('Error', error.message || 'Something went wrong');
//           return;
//         }

//         const { error: presentError } = await presentPaymentSheet();
//         if (presentError) {
//           Alert.alert('Error', presentError.message || 'Payment failed');
//         } else {
//           Alert.alert('Success', 'Your order has been placed.');
//           navigation.navigate('Order');
//         }
//       } catch (error) {
//         Alert.alert('Error', 'An unexpected error occurred.');
//       }
//     } else {
//       Alert.alert('Success', 'Your order has been placed.');
//       navigation.navigate('Order');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.totalText}>Total: ₹{total}</Text>

//       <Text style={styles.label}>Enter your address</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your address"
//         value={address}
//         onChangeText={setAddress}
//       />

//       <Text style={styles.label}>Select Payment Method</Text>
//       <TouchableOpacity
//         style={[styles.button, paymentMethod === 'cash' && styles.activeButton]}
//         onPress={() => setPaymentMethod('cash')}
//       >
//         <Text style={styles.buttonText}>Cash on Delivery</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.button, paymentMethod === 'online' && styles.activeButton]}
//         onPress={() => setPaymentMethod('online')}
//       >
//         <Text style={styles.buttonText}>Pay Online</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
//         <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   totalText: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
//   label: { fontSize: 16, marginBottom: 4, color: '#333' },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 16,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#e0e0e0',
//     padding: 12,
//     borderRadius: 5,
//     marginBottom: 8,
//     alignItems: 'center',
//   },
//   activeButton: { backgroundColor: '#007AFF' },
//   buttonText: { color: '#000', fontSize: 16 },
//   paymentButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   paymentButtonText: { color: '#fff', fontSize: 16 },
// });

// export default Payment;




// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { RouteProp, NavigationProp } from '@react-navigation/native';
// import BraintreeDropIn from 'react-native-braintree-xplat';

// interface PaymentProps {
//   route: RouteProp<any, 'Payment'>;
//   navigation: NavigationProp<any>;
// }

// const PaymentScreen: React.FC<PaymentProps> = ({ route, navigation }) => {
//   const total = route.params?.total;
//   const [address, setAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState<'cash' | 'online' | null>(null);

//   const handlePayment = async () => {
//     if (!address.trim()) {
//       Alert.alert('Error', 'Please enter your address.');
//       return;
//     }
//     if (!paymentMethod) {
//       Alert.alert('Error', 'Please select a payment method.');
//       return;
//     }
//     if (paymentMethod === 'online') {
//       try {
//         const token = 'YOUR_BRAINTREE_TOKEN'; // Replace with actual Braintree token
//         const result = await BraintreeDropIn.show({
//           clientToken: token,
//           googlePay: true,
//           applePay: true,
//           vaultManager: true,
//         });

//         if (result) {
//           Alert.alert('Success', 'Payment successful!');
//           navigation.navigate('Order');
//         } else {
//           Alert.alert('Error', 'Payment cancelled.');
//         }
//       } catch (error) {
//         Alert.alert('Error', 'Payment failed. Please try again.');
//       }
//     } else {
//       Alert.alert('Success', 'Order placed with Cash on Delivery.');
//       navigation.navigate('Order');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.totalText}>Total: ₹{total}</Text>
//       <Text style={styles.label}>Enter your address</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your address"
//         value={address}
//         onChangeText={setAddress}
//       />

//       <Text style={styles.label}>Select Payment Method</Text>
//       <TouchableOpacity
//         style={[styles.button, paymentMethod === 'cash' && styles.activeButton]}
//         onPress={() => setPaymentMethod('cash')}
//       >
//         <Text style={styles.buttonText}>Cash on Delivery</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.button, paymentMethod === 'online' && styles.activeButton]}
//         onPress={() => setPaymentMethod('online')}
//       >
//         <Text style={styles.buttonText}>Pay Online</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
//         <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   totalText: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
//   label: { fontSize: 16, marginBottom: 4, color: '#333' },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 16,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#e0e0e0',
//     padding: 12,
//     borderRadius: 5,
//     marginBottom: 8,
//     alignItems: 'center',
//   },
//   activeButton: { backgroundColor: '#007AFF' },
//   buttonText: { color: '#000', fontSize: 16 },
//   paymentButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   paymentButtonText: { color: '#fff', fontSize: 16 },
// });

// export default PaymentScreen;



// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { RouteProp, NavigationProp } from '@react-navigation/native';
// import RazorpayCheckout from 'react-native-razorpay'; // Import Razorpay

// interface PaymentProps {
//   route: RouteProp<any, 'Payment'>;
//   navigation: NavigationProp<any>;
// }

// const PaymentScreen: React.FC<PaymentProps> = ({ route, navigation }) => {
//   const total = route.params?.total;
//   const [address, setAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState<'cash' | 'online' | null>(null);

//   const handlePayment = async () => {
//     if (!address.trim()) {
//       Alert.alert('Error', 'Please enter your address.');
//       return;
//     }
//     if (!paymentMethod) {
//       Alert.alert('Error', 'Please select a payment method.');
//       return;
//     }
//     if (paymentMethod === 'online') {
//       try {
//         const options = {
//           description: 'TryTastic Order Payment',
//           image: 'https://yourlogo.com/logo.png',
//           currency: 'INR',
//           key: 'rzp_test_NMBmhZ6SL6CWWE9', // Replace with actual Razorpay key
//           amount: total * 100, // Convert to paise
//           name: 'TryTastic',
//           prefill: {
//             email: 'nonenike80@gmail.com',
//             contact: '9999999999',
//             name: 'User Name',
//           },
//           theme: { color: '#6A0DAD' },
//         };

//         RazorpayCheckout.open(options)
//           .then((data: any) => {
//             Alert.alert('Payment Success', `Payment ID: ${data.razorpay_payment_id}`);
//             navigation.navigate('Order');
//           })
//           .catch((error: any) => {
//             Alert.alert('Payment Failed', error.description);
//           });
//       } catch (error: any) {
//         Alert.alert('Error', 'Payment failed. Please try again.');
//       }
//     } else {
//       Alert.alert('Success', 'Order placed with Cash on Delivery.');
//       navigation.navigate('Order');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.totalText}>Total: ₹{total}</Text>
//       <Text style={styles.label}>Enter your address</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your address"
//         value={address}
//         onChangeText={setAddress}
//       />

//       <Text style={styles.label}>Select Payment Method</Text>
//       <TouchableOpacity
//         style={[styles.button, paymentMethod === 'cash' && styles.activeButton]}
//         onPress={() => setPaymentMethod('cash')}
//       >
//         <Text style={styles.buttonText}>Cash on Delivery</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.button, paymentMethod === 'online' && styles.activeButton]}
//         onPress={() => setPaymentMethod('online')}
//       >
//         <Text style={styles.buttonText}>Pay Online</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
//         <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   totalText: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
//   label: { fontSize: 16, marginBottom: 4, color: '#333' },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 16,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#e0e0e0',
//     padding: 12,
//     borderRadius: 5,
//     marginBottom: 8,
//     alignItems: 'center',
//   },
//   activeButton: { backgroundColor: '#007AFF' },
//   buttonText: { color: '#000', fontSize: 16 },
//   paymentButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   paymentButtonText: { color: '#fff', fontSize: 16 },
// });

// export default PaymentScreen;



// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { RouteProp, NavigationProp } from '@react-navigation/native';
// import RazorpayCheckout from 'react-native-razorpay';
// //import { RAZORPAY_KEY } from '@env'; // Import from .env
// import { CONFIG } from "./config";

// interface PaymentProps {
//   route: RouteProp<any, 'Payment'>;
//   navigation: NavigationProp<any>;
// }

// const PaymentScreen: React.FC<PaymentProps> = ({ route, navigation }) => {
//   const total = route.params?.total || 0; // Ensure total is defined
//   const [address, setAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState<'cash' | 'online' | null>(null);

//   const handlePayment = async () => {
//     if (!address.trim()) {
//       Alert.alert('Error', 'Please enter your address.');
//       return;
//     }
//     if (!paymentMethod) {
//       Alert.alert('Error', 'Please select a payment method.');
//       return;
//     }

//     if (paymentMethod === 'online') {
//       try {
//         const options = {
//           description: 'TryTastic Order Payment',
//           image: 'https://yourlogo.com/logo.png',
//           currency: 'INR',
//           key:CONFIG. RAZORPAY_KEY, // Securely use the key from .env
//           amount: total * 100, // Convert rupees to paise
//           name: 'TryTastic',
//           prefill: {
//             email: 'user@example.com', // You can replace this with actual user data
//             contact: '9999999999',
//             name: 'User Name',
//           },
//           theme: { color: '#6A0DAD' },
//         };

//         RazorpayCheckout.open(options)
//           .then((data: any) => {
//             Alert.alert('Payment Success', `Payment ID: ${data.razorpay_payment_id}`);
//             navigation.navigate('Order');
//           })
//           .catch((error: any) => {
//             Alert.alert('Payment Failed', error.description);
//           });
//       } catch (error: any) {
//         Alert.alert('Error', 'Payment failed. Please try again.');
//       }
//     } else {
//       Alert.alert('Success', 'Order placed with Cash on Delivery.');
//       navigation.navigate('Order');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.totalText}>Total: ₹{total}</Text>
//       <Text style={styles.label}>Enter your address</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your address"
//         value={address}
//         onChangeText={setAddress}
//       />

//       <Text style={styles.label}>Select Payment Method</Text>
//       <TouchableOpacity
//         style={[styles.button, paymentMethod === 'cash' && styles.activeButton]}
//         onPress={() => setPaymentMethod('cash')}
//       >
//         <Text style={styles.buttonText}>Cash on Delivery</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.button, paymentMethod === 'online' && styles.activeButton]}
//         onPress={() => setPaymentMethod('online')}
//       >
//         <Text style={styles.buttonText}>Pay Online</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
//         <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   totalText: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
//   label: { fontSize: 16, marginBottom: 4, color: '#333' },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 16,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#e0e0e0',
//     padding: 12,
//     borderRadius: 5,
//     marginBottom: 8,
//     alignItems: 'center',
//   },
//   activeButton: { backgroundColor: '#007AFF' },
//   buttonText: { color: '#000', fontSize: 16 },
//   paymentButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   paymentButtonText: { color: '#fff', fontSize: 16 },
// });

// export default PaymentScreen;



import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { RouteProp, NavigationProp } from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay';
import { CONFIG } from "./config";

interface PaymentProps {
  route: RouteProp<any, 'Payment'>;
  navigation: NavigationProp<any>;
}

const PaymentScreen: React.FC<PaymentProps> = ({ route, navigation }) => {
  const total = route.params?.total || 0; // Ensure total is defined
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'online' | null>(null);

  const handlePayment = async () => {
    if (!address.trim()) {
      Alert.alert('Error', 'Please enter your address.');
      return;
    }
    if (!paymentMethod) {
      Alert.alert('Error', 'Please select a payment method.');
      return;
    }

    if (paymentMethod === 'online') {
      try {
        const options = {
          description: 'TryTastic Order Payment',
          image: 'src\assets\images\trytasticlogo.png',
          currency: 'INR',
          key: CONFIG.RAZORPAY_KEY, // Securely use the key from .env
          amount: total * 100, // Convert rupees to paise
          name: 'TryTastic',
          prefill: {
            email: 'user@example.com', // You can replace this with actual user data
            contact: '9999999999',
            name: 'User Name',
          },
          theme: { color: '#6A0DAD' },
        };

        RazorpayCheckout.open(options)
          .then((data: any) => {
            Alert.alert('Payment Success', `Payment ID: ${data.razorpay_payment_id}`);
            navigation.navigate('Order');
          })
          .catch((error: any) => {
            Alert.alert('Payment Failed', error.description);
          });
      } catch (error: any) {
        Alert.alert('Error', 'Payment failed. Please try again.');
      }
    } else {
      Alert.alert('Success', 'Order placed with Cash on Delivery.');
      navigation.navigate('Order');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.totalText}>Total: ₹{total}</Text>
      <Text style={styles.label}>Enter your address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
      />

      <Text style={styles.label}>Select Payment Method</Text>
      <TouchableOpacity
        style={[styles.button, paymentMethod === 'cash' && styles.activeButton]}
        onPress={() => setPaymentMethod('cash')}
      >
        <Text style={styles.buttonText}>Cash on Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, paymentMethod === 'online' && styles.activeButton]}
        onPress={() => setPaymentMethod('online')}
      >
        <Text style={styles.buttonText}>Pay Online</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  totalText: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  label: { fontSize: 16, marginBottom: 4, color: '#333' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 16,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#e0e0e0',
    padding: 12,
    borderRadius: 5,
    marginBottom: 8,
    alignItems: 'center',
  },
  activeButton: { backgroundColor: '#007AFF' },
  buttonText: { color: '#000', fontSize: 16 },
  paymentButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  paymentButtonText: { color: '#fff', fontSize: 16 },
});

export default PaymentScreen;
