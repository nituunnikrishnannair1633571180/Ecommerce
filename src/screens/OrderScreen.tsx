// import React from 'react';
// import { View, Text } from 'react-native';

// const OrderScreen = () => {
//   return (
//     <View>
//       <Text>Order Screen</Text>
//     </View>
//   );
// };

// export default OrderScreen;



// OrderConfirmation.tsx
// OrderScreen.tsx
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { NavigationProp } from '@react-navigation/native';

// interface OrderScreenProps {
//   navigation: NavigationProp<any>;
// }

// const OrderScreen: React.FC<OrderScreenProps> = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.orderText}>Order Screen</Text>
//       <TouchableOpacity
//         style={styles.proceedButton}
//         onPress={() => navigation.navigate('SomeNextScreen')}
//       >
//         <Text style={styles.proceedButtonText}>Proceed</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
//   orderText: { fontSize: 20, fontWeight: 'bold' },
//   proceedButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   proceedButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
// });

// export default OrderScreen;



// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { NavigationProp } from '@react-navigation/native';

// interface OrderScreenProps {
//   navigation: NavigationProp<any>;
// }

// const OrderScreen: React.FC<OrderScreenProps> = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.orderText}>Order Successful</Text>
//       <Text style={styles.successText}>Your order has been placed successfully!</Text>
//       <TouchableOpacity
//         style={styles.proceedButton}
//         onPress={() => navigation.navigate('Product')} // Navigate back to the product screen
//       >
//         <Text style={styles.proceedButtonText}>Go Back to Product</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
//   orderText: { fontSize: 20, fontWeight: 'bold', color: '#007AFF' },
//   successText: { fontSize: 16, marginVertical: 10, color: '#333' },
//   proceedButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   proceedButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
// });

// export default OrderScreen;





// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { NavigationProp } from '@react-navigation/native';

// interface OrderTrackingProps {
//   navigation: NavigationProp<any>;
//   route: any;
// }

// const OrderScreen: React.FC<OrderTrackingProps> = ({ navigation, route }) => {
//   const { orderId, paymentMethod } = route.params || {};
//   const [orderStatus, setOrderStatus] = useState('Ordered'); // Default status

//   useEffect(() => {
//     // Simulate order status updates dynamically
//     const statusUpdates = ['Ordered', 'Shipped', 'Out for Delivery', 'Delivered'];
//     let index = 0;

//     const interval = setInterval(() => {
//       if (index < statusUpdates.length) {
//         setOrderStatus(statusUpdates[index]);
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 5000); // Update every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const cancelOrder = () => {
//     setOrderStatus('Canceled');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Order Tracking</Text>
//       <Text style={styles.orderId}>Order ID: {orderId}</Text>
//       <Text style={styles.payment}>Payment Method: {paymentMethod}</Text>

//       <View style={styles.statusContainer}>
//         <Text style={styles.statusText}>Status: {orderStatus}</Text>
//         {orderStatus !== 'Delivered' && orderStatus !== 'Canceled' && (
//           <ActivityIndicator size="large" color="#6A0DAD" />
//         )}
//       </View>

//       {orderStatus !== 'Canceled' && orderStatus !== 'Delivered' && (
//         <TouchableOpacity style={styles.cancelButton} onPress={cancelOrder}>
//           <Text style={styles.cancelText}>Cancel Order</Text>
//         </TouchableOpacity>
//       )}

//       {orderStatus === 'Delivered' && (
//         <TouchableOpacity
//           style={styles.reviewButton}
//           onPress={() => navigation.navigate('ReviewScreen', { orderId })}
//         >
//           <Text style={styles.reviewText}>Rate Your Order</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: '#fff' },
//   title: { fontSize: 22, fontWeight: 'bold', color: '#6A0DAD' },
//   orderId: { fontSize: 16, marginVertical: 4, color: '#333' },
//   payment: { fontSize: 16, marginBottom: 10, color: '#555' },
//   statusContainer: { alignItems: 'center', marginVertical: 20 },
//   statusText: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
//   cancelButton: { backgroundColor: 'red', padding: 10, borderRadius: 5, marginTop: 20 },
//   cancelText: { color: '#fff', fontSize: 16 },
//   reviewButton: { backgroundColor: '#007AFF', padding: 12, borderRadius: 5, marginTop: 20 },
//   reviewText: { color: '#fff', fontSize: 16 },
// });

// export default OrderScreen;




// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
// import { RouteProp } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";

// type RootStackParamList = {
//   OrderTracking: { orderId: string; status: string };
// };

// type OrderTrackingRouteProp = RouteProp<RootStackParamList, "OrderTracking">;
// type OrderTrackingNavigationProp = StackNavigationProp<RootStackParamList, "OrderTracking">;

// interface OrderTrackingScreenProps {
//   route: OrderTrackingRouteProp;
//   navigation: OrderTrackingNavigationProp;
// }

// const orderSteps = [
//   "Order Confirmed",
//   "Shipped",
//   "Reached Warehouse",
//   "Out for Delivery",
//   "Delivered",
// ];

// const screenWidth = Dimensions.get("window").width;
// const stepWidth = screenWidth / orderSteps.length;

// const OrderTrackingScreen: React.FC<OrderTrackingScreenProps> = ({ route }) => {
//   const { orderId, status } = route.params;
//   const [currentStep, setCurrentStep] = useState<number>(0);

//   useEffect(() => {
//     switch (status) {
//       case "confirmed":
//         setCurrentStep(0);
//         break;
//       case "shipped":
//         setCurrentStep(1);
//         break;
//       case "warehouse":
//         setCurrentStep(2);
//         break;
//       case "outForDelivery":
//         setCurrentStep(3);
//         break;
//       case "delivered":
//         setCurrentStep(4);
//         break;
//       default:
//         setCurrentStep(0);
//     }
//   }, [status]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Order Tracking</Text>
//       <Text style={styles.orderId}>Order ID: {orderId}</Text>

//       <View style={styles.progressContainer}>
//         {orderSteps.map((step, index) => (
//           <View key={index} style={styles.step}>
//             <Text style={index <= currentStep ? styles.activeStep : styles.inactiveStep}>
//               {index <= currentStep ? `✅ ${step}` : `🔲 ${step}`}
//             </Text>
//           </View>
//         ))}
//       </View>

//       {/* Truck Image Movement */}
//       <View style={styles.truckContainer}>
//         <Image
//                       source={{ uri: 'https://icons8.com/icon/etRqsBHtSyMZ/truck' }}
                      
//                     />
//       </View>

//       <Text style={styles.currentStatus}>Current Status: {orderSteps[currentStep]}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 },
//   title: { fontSize: 22, fontWeight: "bold", color: "#6A0DAD" },
//   orderId: { fontSize: 16, marginVertical: 4, color: "#333" },
//   progressContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "90%", marginTop: 20 },
//   step: { alignItems: "center", width: "20%" },
//   activeStep: { fontSize: 14, color: "green", fontWeight: "bold", textAlign: "center" },
//   inactiveStep: { fontSize: 14, color: "#888", textAlign: "center" },
//   truckContainer: { flexDirection: "row", alignItems: "center", width: "90%", marginTop: 20, borderTopWidth: 2, borderColor: "gray", paddingTop: 5 },
//   truck: { width: 40, height: 40, resizeMode: "contain" },
//   currentStatus: { fontSize: 18, marginTop: 10, fontWeight: "bold", color: "black" },
// });

// export default OrderTrackingScreen;




// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
// import { RouteProp } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";

// type RootStackParamList = {
//   OrderTracking: { orderId: string; status: string };
// };

// type OrderTrackingRouteProp = RouteProp<RootStackParamList, "OrderTracking">;
// type OrderTrackingNavigationProp = StackNavigationProp<RootStackParamList, "OrderTracking">;

// interface OrderTrackingScreenProps {
//   route: OrderTrackingRouteProp;
//   navigation: OrderTrackingNavigationProp;
// }

// const orderSteps = [
//   "Order Confirmed",
//   "Shipped",
//   "Reached Warehouse",
//   "Out for Delivery",
//   "Delivered",
// ];

// const screenWidth = Dimensions.get("window").width;
// const stepWidth = screenWidth / orderSteps.length;

// const OrderTrackingScreen: React.FC<OrderTrackingScreenProps> = ({ route }) => {
//   // Safely extracting orderId and status with default values
//   const { orderId = "N/A", status = "confirmed" } = route.params || {}; 

//   const [currentStep, setCurrentStep] = useState<number>(0);

//   useEffect(() => {
//     switch (status) {
//       case "confirmed":
//         setCurrentStep(0);
//         break;
//       case "shipped":
//         setCurrentStep(1);
//         break;
//       case "warehouse":
//         setCurrentStep(2);
//         break;
//       case "outForDelivery":
//         setCurrentStep(3);
//         break;
//       case "delivered":
//         setCurrentStep(4);
//         break;
//       default:
//         setCurrentStep(0);
//     }
//   }, [status]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Order Tracking</Text>
//       <Text style={styles.orderId}>Order ID: {orderId}</Text>

//       <View style={styles.progressContainer}>
//         {orderSteps.map((step, index) => (
//           <View key={index} style={styles.step}>
//             <Text style={index <= currentStep ? styles.activeStep : styles.inactiveStep}>
//               {index <= currentStep ? `✅ ${step}` : `🔲 ${step}`}
//             </Text>
//           </View>
//         ))}
//       </View>

//       {/* Truck Image Movement */}
//       <View style={styles.truckContainer}>
//         <Image
//           source={{ uri: 'https://icons8.com/icon/etRqsBHtSyMZ/truck' }}
//           style={styles.truck}
//         />
//       </View>

//       <Text style={styles.currentStatus}>Current Status: {orderSteps[currentStep]}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 },
//   title: { fontSize: 22, fontWeight: "bold", color: "#6A0DAD" },
//   orderId: { fontSize: 16, marginVertical: 4, color: "#333" },
//   progressContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "90%", marginTop: 20 },
//   step: { alignItems: "center", width: "20%" },
//   activeStep: { fontSize: 14, color: "green", fontWeight: "bold", textAlign: "center" },
//   inactiveStep: { fontSize: 14, color: "#888", textAlign: "center" },
//   truckContainer: { flexDirection: "row", alignItems: "center", width: "90%", marginTop: 20, borderTopWidth: 2, borderColor: "gray", paddingTop: 5 },
//   truck: { width: 40, height: 40, resizeMode: "contain" },
//   currentStatus: { fontSize: 18, marginTop: 10, fontWeight: "bold", color: "black" },
// });

// export default OrderTrackingScreen;






// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
// import { RouteProp } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";

// type RootStackParamList = {
//   OrderTracking: { orderId: string; status: string; productName: string }; // Adding productName to params
// };

// type OrderTrackingRouteProp = RouteProp<RootStackParamList, "OrderTracking">;
// type OrderTrackingNavigationProp = StackNavigationProp<RootStackParamList, "OrderTracking">;

// interface OrderTrackingScreenProps {
//   route: OrderTrackingRouteProp;
//   navigation: OrderTrackingNavigationProp;
// }

// const orderSteps = [
//   "Order Confirmed",
//   "Shipped",
//   "Reached Warehouse",
//   "Out for Delivery",
//   "Delivered",
// ];

// const screenWidth = Dimensions.get("window").width;
// const stepWidth = screenWidth / orderSteps.length;

// const OrderTrackingScreen: React.FC<OrderTrackingScreenProps> = ({ route }) => {
//   // Safely extracting orderId, status, and productName with default values
//   const { orderId = "N/A", status = "confirmed", productName = "Product" } = route.params || {}; 

//   const [currentStep, setCurrentStep] = useState<number>(0);
//   const [truckPosition, setTruckPosition] = useState<number>(0); // Tracking truck's position

//   useEffect(() => {
//     switch (status) {
//       case "confirmed":
//         setCurrentStep(0);
//         break;
//       case "shipped":
//         setCurrentStep(1);
//         break;
//       case "warehouse":
//         setCurrentStep(2);
//         break;
//       case "outForDelivery":
//         setCurrentStep(3);
//         break;
//       case "delivered":
//         setCurrentStep(4);
//         break;
//       default:
//         setCurrentStep(0);
//     }
//   }, [status]);

//   // Updating truck's position based on the current step
//   useEffect(() => {
//     setTruckPosition((currentStep / (orderSteps.length - 1)) * screenWidth); // Position the truck
//   }, [currentStep]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Order Tracking</Text>
//       <Text style={styles.productName}>Product: {productName}</Text> {/* Displaying product name */}
//       <Text style={styles.orderId}>Order ID: {orderId}</Text>

//       <View style={styles.progressContainer}>
//         {orderSteps.map((step, index) => (
//           <View key={index} style={styles.step}>
//             <Text style={index <= currentStep ? styles.activeStep : styles.inactiveStep}>
//               {index <= currentStep ? `✅ ${step}` : `🔲 ${step}`}
//             </Text>
//           </View>
//         ))}
//       </View>

//       {/* Simulated Truck Movement */}
//       <View style={[styles.truckContainer, { left: truckPosition }]}>
//         <Image
//           source={{ uri: 'https://icons8.com/icon/etRqsBHtSyMZ/truck' }}
//           style={styles.truck}
//         />
//       </View>

//       <Text style={styles.currentStatus}>Current Status: {orderSteps[currentStep]}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 },
//   title: { fontSize: 22, fontWeight: "bold", color: "#6A0DAD" },
//   productName: { fontSize: 18, marginVertical: 8, color: "#333" }, // Styling for product name
//   orderId: { fontSize: 16, marginVertical: 4, color: "#333" },
//   progressContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "90%", marginTop: 20 },
//   step: { alignItems: "center", width: "20%" },
//   activeStep: { fontSize: 14, color: "green", fontWeight: "bold", textAlign: "center" },
//   inactiveStep: { fontSize: 14, color: "#888", textAlign: "center" },
//   truckContainer: { position: "absolute", top: 100, left: 0, alignItems: "center" }, // Simulating truck movement
//   truck: { width: 40, height: 40, resizeMode: "contain" },
//   currentStatus: { fontSize: 18, marginTop: 10, fontWeight: "bold", color: "black" },
// });

// export default OrderTrackingScreen;




// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Dimensions, Image, Animated } from "react-native";
// import { RouteProp } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";

// type RootStackParamList = {
//   OrderTracking: { orderId: string; status: string; productName: string };
// };

// type OrderTrackingRouteProp = RouteProp<RootStackParamList, "OrderTracking">;
// type OrderTrackingNavigationProp = StackNavigationProp<RootStackParamList, "OrderTracking">;

// interface OrderTrackingScreenProps {
//   route: OrderTrackingRouteProp;
//   navigation: OrderTrackingNavigationProp;
// }

// const orderSteps = [
//   "Order Confirmed",
//   "Shipped",
//   "Reached Warehouse",
//   "Out for Delivery",
//   "Delivered",
// ];

// const screenWidth = Dimensions.get("window").width;
// const stepWidth = screenWidth / orderSteps.length;

// const OrderTrackingScreen: React.FC<OrderTrackingScreenProps> = ({ route }) => {
//   const { orderId = "N/A", status = "confirmed", productName = "Product" } = route.params || {}; 

//   const [currentStep, setCurrentStep] = useState<number>(0);
//   const [truckPosition] = useState(new Animated.Value(0)); // Animated value for truck position

//   useEffect(() => {
//     switch (status) {
//       case "confirmed":
//         setCurrentStep(0);
//         break;
//       case "shipped":
//         setCurrentStep(1);
//         break;
//       case "warehouse":
//         setCurrentStep(2);
//         break;
//       case "outForDelivery":
//         setCurrentStep(3);
//         break;
//       case "delivered":
//         setCurrentStep(4);
//         break;
//       default:
//         setCurrentStep(0);
//     }
//   }, [status]);

//   // Animate truck position when currentStep changes
//   useEffect(() => {
//     Animated.timing(truckPosition, {
//       toValue: (currentStep / (orderSteps.length - 1)) * screenWidth,
//       duration: 500,  // Smooth transition duration
//       useNativeDriver: true,
//     }).start();
//   }, [currentStep, truckPosition]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Order Tracking</Text>
//       <Text style={styles.productName}>Product: {productName}</Text>
//       <Text style={styles.orderId}>Order ID: {orderId}</Text>

//       <View style={styles.progressContainer}>
//         {orderSteps.map((step, index) => (
//           <View key={index} style={styles.step}>
//             <Text style={index <= currentStep ? styles.activeStep : styles.inactiveStep}>
//               {index <= currentStep ? `✅ ${step}` : `🔲 ${step}`}
//             </Text>
//           </View>
//         ))}
//       </View>

//       {/* Animated Truck Movement */}
//       <Animated.View style={[styles.truckContainer, { transform: [{ translateX: truckPosition }] }]}>
//         <Image
//           source={{ uri: 'https://img.icons8.com/?size=100&id=etRqsBHtSyMZ&format=png&color=000000' }} // Corrected URL for the truck image
//           style={styles.truck}
//         />
//       </Animated.View>

//       <Text style={styles.currentStatus}>Current Status: {orderSteps[currentStep]}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 },
//   title: { fontSize: 22, fontWeight: "bold", color: "#6A0DAD" },
//   productName: { fontSize: 18, marginVertical: 8, color: "#333" },
//   orderId: { fontSize: 16, marginVertical: 4, color: "#333" },
//   progressContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "90%", marginTop: 20 },
//   step: { alignItems: "center", width: "20%" },
//   activeStep: { fontSize: 14, color: "green", fontWeight: "bold", textAlign: "center" },
//   inactiveStep: { fontSize: 14, color: "#888", textAlign: "center" },
//   truckContainer: { position: "absolute", top: 100, alignItems: "center", width: "100%", zIndex: 1 },
//   truck: { width: 60, height: 60, resizeMode: "contain" }, // Adjust truck size as needed
//   currentStatus: { fontSize: 18, marginTop: 10, fontWeight: "bold", color: "black" },
// });

// export default OrderTrackingScreen;







// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Dimensions, Image, Animated } from "react-native";
// import { RouteProp } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";

// type RootStackParamList = {
//   OrderTracking: { orderId: string; status: string; productName: string };
// };

// type OrderTrackingRouteProp = RouteProp<RootStackParamList, "OrderTracking">;
// type OrderTrackingNavigationProp = StackNavigationProp<RootStackParamList, "OrderTracking">;

// interface OrderTrackingScreenProps {
//   route: OrderTrackingRouteProp;
//   navigation: OrderTrackingNavigationProp;
// }

// const orderSteps = [
//   "Order Confirmed",
//   "Shipped",
//   "Reached Warehouse",
//   "Out for Delivery",
//   "Delivered",
// ];

// const screenWidth = Dimensions.get("window").width;
// const stepWidth = screenWidth / orderSteps.length;

// const OrderTrackingScreen: React.FC<OrderTrackingScreenProps> = ({ route }) => {
//   const { orderId = "N/A", status = "confirmed", productName = "Product" } = route.params || {}; 

//   const [currentStep, setCurrentStep] = useState<number>(0);
//   const [truckPosition] = useState(new Animated.Value(0)); // Animated value for truck position

//   useEffect(() => {
//     switch (status) {
//       case "confirmed":
//         setCurrentStep(0);
//         break;
//       case "shipped":
//         setCurrentStep(1);
//         break;
//       case "warehouse":
//         setCurrentStep(2);
//         break;
//       case "outForDelivery":
//         setCurrentStep(3);
//         break;
//       case "delivered":
//         setCurrentStep(4);
//         break;
//       default:
//         setCurrentStep(0);
//     }
//   }, [status]);

//   // Animate truck position when currentStep changes
//   useEffect(() => {
//     Animated.timing(truckPosition, {
//       toValue: (currentStep / (orderSteps.length - 1)) * screenWidth,
//       duration: 500,  // Smooth transition duration
//       useNativeDriver: true,
//     }).start();
//   }, [currentStep, truckPosition]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Order Tracking</Text>
//       <Text style={styles.productName}>Product: {productName}</Text>
//       <Text style={styles.orderId}>Order ID: {orderId}</Text>

//       <View style={styles.progressContainer}>
//         {orderSteps.map((step, index) => (
//           <View key={index} style={styles.step}>
//             <Text style={index <= currentStep ? styles.activeStep : styles.inactiveStep}>
//               {index <= currentStep ? `✅ ${step}` : `🔲 ${step}`}
//             </Text>
//           </View>
//         ))}
//       </View>

//       {/* Animated Truck Movement */}
//       <Animated.View style={[styles.truckContainer, { transform: [{ translateX: truckPosition }] }]}>
//         <Image
//           source={require("src\assets\icons8-truck.gif")}  // Local GIF image
//           style={styles.truck}
//         />
//       </Animated.View>

//       <Text style={styles.currentStatus}>Current Status: {orderSteps[currentStep]}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 },
//   title: { fontSize: 22, fontWeight: "bold", color: "#6A0DAD" },
//   productName: { fontSize: 18, marginVertical: 8, color: "#333" },
//   orderId: { fontSize: 16, marginVertical: 4, color: "#333" },
//   progressContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "90%", marginTop: 20 },
//   step: { alignItems: "center", width: "20%" },
//   activeStep: { fontSize: 14, color: "green", fontWeight: "bold", textAlign: "center" },
//   inactiveStep: { fontSize: 14, color: "#888", textAlign: "center" },
//   truckContainer: { position: "absolute", top: 100, alignItems: "center", width: "100%", zIndex: 1 },
//   truck: { width: 60, height: 60, resizeMode: "contain" }, // Adjust truck size as needed
//   currentStatus: { fontSize: 18, marginTop: 10, fontWeight: "bold", color: "black" },
// });

// export default OrderTrackingScreen;





// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Dimensions, Image, Animated } from "react-native";
// import { RouteProp } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";

// type RootStackParamList = {
//   OrderTracking: { orderId: string; status: string; productName: string };
// };

// type OrderTrackingRouteProp = RouteProp<RootStackParamList, "OrderTracking">;
// type OrderTrackingNavigationProp = StackNavigationProp<RootStackParamList, "OrderTracking">;

// interface OrderTrackingScreenProps {
//   route: OrderTrackingRouteProp;
//   navigation: OrderTrackingNavigationProp;
// }

// const orderSteps = [
//   "Order Confirmed",
//   "Shipped",
//   "Reached Warehouse",
//   "Out for Delivery",
//   "Delivered",
// ];

// const screenWidth = Dimensions.get("window").width;
// const stepWidth = screenWidth / orderSteps.length;

// const OrderTrackingScreen: React.FC<OrderTrackingScreenProps> = ({ route }) => {
//   const { orderId = "N/A", status = "confirmed", productName = "Product" } = route.params || {};

//   const [currentStep, setCurrentStep] = useState<number>(0);
//   const [truckPosition] = useState(new Animated.Value(0)); // Animated value for truck position

//   useEffect(() => {
//     switch (status) {
//       case "confirmed":
//         setCurrentStep(0);
//         break;
//       case "shipped":
//         setCurrentStep(1);
//         break;
//       case "warehouse":
//         setCurrentStep(2);
//         break;
//       case "outForDelivery":
//         setCurrentStep(3);
//         break;
//       case "delivered":
//         setCurrentStep(4);
//         break;
//       default:
//         setCurrentStep(0);
//     }
//   }, [status]);

//   // Animate truck position when currentStep changes
//   useEffect(() => {
//     Animated.timing(truckPosition, {
//       toValue: (currentStep / (orderSteps.length - 1)) * screenWidth,
//       duration: 500,  // Smooth transition duration
//       useNativeDriver: true,
//     }).start();
//   }, [currentStep, truckPosition]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Order Tracking</Text>
//       <Text style={styles.productName}>Product: {productName}</Text>
//       <Text style={styles.orderId}>Order ID: {orderId}</Text>

//       <View style={styles.progressContainer}>
//         {orderSteps.map((step, index) => (
//           <View key={index} style={styles.step}>
//             <Text style={index <= currentStep ? styles.activeStep : styles.inactiveStep}>
//               {index <= currentStep ? `✅ ${step}` : `🔲 ${step}`}
//             </Text>
//           </View>
//         ))}
//       </View>

      
    
      
//      <Animated.View style={[styles.truckContainer, { transform: [{ translateX: truckPosition }] }]}>
//       <Image
//       source={{ uri: 'https://img.icons8.com/?size=100&id=15196&format=png&color=000000' }} // Corrected URL for the truck image
//         style={styles.truck}       />
//      </Animated.View>

//       <Text style={styles.currentStatus}>Current Status: {orderSteps[currentStep]}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 },
//   title: { fontSize: 22, fontWeight: "bold", color: "#6A0DAD" },
//   productName: { fontSize: 18, marginVertical: 8, color: "#333" },
//   orderId: { fontSize: 16, marginVertical: 4, color: "#333" },
//   progressContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "90%", marginTop: 20 },
//   step: { alignItems: "center", width: "20%" },
//   activeStep: { fontSize: 14, color: "green", fontWeight: "bold", textAlign: "center" },
//   inactiveStep: { fontSize: 14, color: "#888", textAlign: "center" },
//   truckContainer: { position: "absolute", top: 100, alignItems: "center", width: "100%", zIndex: 1 },
//   truck: { width: 60, height: 60, resizeMode: "contain" }, // Adjust truck size as needed
//   currentStatus: { fontSize: 18, marginTop: 10, fontWeight: "bold", color: "black" },
// });

// export default OrderTrackingScreen;


// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Dimensions, Image, Animated } from "react-native";
// import { RouteProp } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";

// // Navigation types
// type RootStackParamList = {
//   OrderTracking: { orderId: string; status: string; productName: string };
// };

// type OrderTrackingRouteProp = RouteProp<RootStackParamList, "OrderTracking">;
// type OrderTrackingNavigationProp = StackNavigationProp<RootStackParamList, "OrderTracking">;

// interface OrderTrackingScreenProps {
//   route: OrderTrackingRouteProp;
//   navigation: OrderTrackingNavigationProp;
// }

// const orderSteps = [
//   "Order Confirmed",
//   "Shipped",
//   "Reached Warehouse",
//   "Out for Delivery",
//   "Delivered",
// ];

// const screenWidth = Dimensions.get("window").width;
// const stepWidth = screenWidth / orderSteps.length;

// const OrderTrackingScreen: React.FC<OrderTrackingScreenProps> = ({ route }) => {
//   const { orderId = "N/A", status = "confirmed", productName = "Product" } = route.params || {};

//   const [currentStep, setCurrentStep] = useState<number>(0);
//   const [truckPosition] = useState(new Animated.Value(0));

//   useEffect(() => {
//     switch (status) {
//       case "confirmed":
//         setCurrentStep(0);
//         break;
//       case "shipped":
//         setCurrentStep(1);
//         break;
//       case "warehouse":
//         setCurrentStep(2);
//         break;
//       case "outForDelivery":
//         setCurrentStep(3);
//         break;
//       case "delivered":
//         setCurrentStep(4);
//         break;
//       default:
//         setCurrentStep(0);
//     }
//   }, [status]);

//   useEffect(() => {
//     Animated.timing(truckPosition, {
//       toValue: (currentStep / (orderSteps.length - 1)) * screenWidth,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
//   }, [currentStep, truckPosition]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Order Tracking</Text>
//       <Text style={styles.productName}>Product: {productName}</Text>
//       <Text style={styles.orderId}>Order ID: {orderId}</Text>

//       <View style={styles.progressContainer}>
//         {orderSteps.map((step, index) => (
//           <View key={index} style={styles.step}>
//             <Text style={index <= currentStep ? styles.activeStep : styles.inactiveStep}>
//               {index <= currentStep ? `✅ ${step}` : `🔲 ${step}`}
//             </Text>
//           </View>
//         ))}
//       </View>

//       <Animated.View style={[styles.truckContainer, { transform: [{ translateX: truckPosition }] }]}>
//         <Image
//           source={{ uri: "https://img.icons8.com/?size=100&id=15196&format=png&color=000000" }}
//           style={styles.truck}
//         />
//       </Animated.View>

//       <Text style={styles.currentStatus}>Current Status: {orderSteps[currentStep]}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16, backgroundColor: "#E8F6EF" },
//   title: { fontSize: 24, fontWeight: "bold", color: "#009688" },
//   productName: { fontSize: 18, marginVertical: 8, color: "#555" },
//   orderId: { fontSize: 16, marginVertical: 4, color: "#777" },
//   progressContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "90%", marginTop: 20 },
//   step: { alignItems: "center", width: "20%" },
//   activeStep: { fontSize: 14, color: "green", fontWeight: "bold", textAlign: "center" },
//   inactiveStep: { fontSize: 14, color: "#888", textAlign: "center" },
//   truckContainer: { position: "absolute", top: 150, width: 60, height: 60 },
//   truck: { width: 60, height: 60, resizeMode: "contain" },
//   currentStatus: { fontSize: 18, marginTop: 10, fontWeight: "bold", color: "#333" },
// });

// export default OrderTrackingScreen;


// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Dimensions, Image, Animated, TouchableOpacity } from "react-native";
// import { RouteProp } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";

// // Navigation types
// type RootStackParamList = {
//   OrderTracking: { orderId: string; status: string; productName: string };
// };

// type OrderTrackingRouteProp = RouteProp<RootStackParamList, "OrderTracking">;
// type OrderTrackingNavigationProp = StackNavigationProp<RootStackParamList, "OrderTracking">;

// interface OrderTrackingScreenProps {
//   route: OrderTrackingRouteProp;
//   navigation: OrderTrackingNavigationProp;
// }

// const orderSteps = [
//   "Order Received",
//   "On the Way",
//   "Delivered",
// ];

// const screenWidth = Dimensions.get("window").width;
// const stepWidth = screenWidth / orderSteps.length;

// const OrderTrackingScreen: React.FC<OrderTrackingScreenProps> = ({ route }) => {
//   const { orderId = "N/A", status = "Order Received", productName = "Product" } = route.params || {};

//   const [currentStep, setCurrentStep] = useState<number>(0);
//   const [truckPosition] = useState(new Animated.Value(0));

//   useEffect(() => {
//     switch (status) {
//       case "Order Received":
//         setCurrentStep(0);
//         break;
//       case "On the Way":
//         setCurrentStep(1);
//         break;
//       case "Delivered":
//         setCurrentStep(2);
//         break;
//       default:
//         setCurrentStep(0);
//     }
//   }, [status]);

//   useEffect(() => {
//     Animated.timing(truckPosition, {
//       toValue: (currentStep / (orderSteps.length - 1)) * screenWidth,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
//   }, [currentStep, truckPosition]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Order Tracking</Text>
//       <Text style={styles.productName}>Product: {productName}</Text>
//       <Text style={styles.orderId}>Order ID: {orderId}</Text>

//       <View style={styles.progressContainer}>
//         {orderSteps.map((step, index) => (
//           <View key={index} style={styles.stepContainer}>
//             <View
//               style={index <= currentStep ? styles.activeStepCircle : styles.inactiveStepCircle}
//             />
//             <Text style={index <= currentStep ? styles.activeStepText : styles.inactiveStepText}>
//               {step}
//             </Text>
//           </View>
//         ))}
//       </View>

//       <Animated.View style={[styles.truckContainer, { transform: [{ translateX: truckPosition }] }]}>
//         <Image
//           source={{ uri: "https://img.icons8.com/?size=100&id=15196&format=png&color=000000" }}
//           style={styles.truck}
//         />
//       </Animated.View>

//       <Text style={styles.currentStatus}>Current Status: {orderSteps[currentStep]}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#E8F5E9", justifyContent: "center", alignItems: "center", padding: 16 },
//   title: { fontSize: 22, fontWeight: "bold", color: "#2E7D32" },
//   productName: { fontSize: 18, marginVertical: 8, color: "#1B5E20" },
//   orderId: { fontSize: 16, marginVertical: 4, color: "#1B5E20" },
//   progressContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "90%", marginTop: 20 },
//   stepContainer: { alignItems: "center", width: "30%" },
//   activeStepCircle: { width: 20, height: 20, borderRadius: 10, backgroundColor: "#43A047", marginBottom: 8 },
//   inactiveStepCircle: { width: 20, height: 20, borderRadius: 10, backgroundColor: "#C8E6C9", marginBottom: 8 },
//   activeStepText: { fontSize: 14, color: "#2E7D32", fontWeight: "bold", textAlign: "center" },
//   inactiveStepText: { fontSize: 14, color: "#A5D6A7", textAlign: "center" },
//   truckContainer: { position: "absolute", top: 140, alignItems: "center", width: "100%", zIndex: 1 },
//   truck: { width: 60, height: 60, resizeMode: "contain" },
//   currentStatus: { fontSize: 18, marginTop: 20, fontWeight: "bold", color: "#1B5E20" },
// });

// export default OrderTrackingScreen;




// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Dimensions, Image, Animated, ScrollView } from "react-native";
// import { RouteProp } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";

// // Navigation types
// type RootStackParamList = {
//   OrderTracking: { orderId: string; status: string; productName: string };
// };

// type OrderTrackingRouteProp = RouteProp<RootStackParamList, "OrderTracking">;
// type OrderTrackingNavigationProp = StackNavigationProp<RootStackParamList, "OrderTracking">;

// interface OrderTrackingScreenProps {
//   route: OrderTrackingRouteProp;
//   navigation: OrderTrackingNavigationProp;
// }

// const orderSteps = ["Order Received", "On the Way", "Delivered"];
// const screenWidth = Dimensions.get("window").width;
// const stepWidth = screenWidth / orderSteps.length;

// const OrderTrackingScreen: React.FC<OrderTrackingScreenProps> = ({ route }) => {
//   const [truckPosition] = useState(new Animated.Value(0));

//   const orders = [
//     { orderId: "001", status: "Order Received", productName: "Product A" },
//     { orderId: "002", status: "On the Way", productName: "Product B" },
//     { orderId: "003", status: "Delivered", productName: "Product C" },
//   ];

//   useEffect(() => {
//     Animated.timing(truckPosition, {
//       toValue: stepWidth,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
//   }, [truckPosition]);

//   return (
//     <ScrollView horizontal pagingEnabled style={styles.container}>
//       {orders.map((order, index) => {
//         const currentStep = orderSteps.indexOf(order.status);
//         return (
//           <View key={index} style={styles.screenContainer}>
//             <Text style={styles.title}>Order Tracking</Text>
//             <Text style={styles.productName}>Product: {order.productName}</Text>
//             <Text style={styles.orderId}>Order ID: {order.orderId}</Text>

//             <View style={styles.progressContainer}>
//               {orderSteps.map((step, stepIndex) => (
//                 <View key={stepIndex} style={styles.stepContainer}>
//                   <View
//                     style={stepIndex <= currentStep ? styles.activeStepCircle : styles.inactiveStepCircle}
//                   />
//                   <Text style={stepIndex <= currentStep ? styles.activeStepText : styles.inactiveStepText}>
//                     {step}
//                   </Text>
//                 </View>
//               ))}
//             </View>

//             <Animated.View
//               style={[styles.truckContainer, { transform: [{ translateX: truckPosition }] }]}
//             >
//               <Image
//                 source={{ uri: "https://img.icons8.com/?size=100&id=15196&format=png&color=000000" }}
//                 style={styles.truck}
//               />
//             </Animated.View>

//             <Text style={styles.currentStatus}>Current Status: {orderSteps[currentStep]}</Text>
//           </View>
//         );
//       })}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#E8F5E9" },
//   screenContainer: { width: screenWidth, justifyContent: "center", alignItems: "center", padding: 16 },
//   title: { fontSize: 22, fontWeight: "bold", color: "#2E7D32" },
//   productName: { fontSize: 18, marginVertical: 8, color: "#1B5E20" },
//   orderId: { fontSize: 16, marginVertical: 4, color: "#1B5E20" },
//   progressContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "90%", marginTop: 20 },
//   stepContainer: { alignItems: "center", width: "30%" },
//   activeStepCircle: { width: 20, height: 20, borderRadius: 10, backgroundColor: "#43A047", marginBottom: 8 },
//   inactiveStepCircle: { width: 20, height: 20, borderRadius: 10, backgroundColor: "#C8E6C9", marginBottom: 8 },
//   activeStepText: { fontSize: 14, color: "#2E7D32", fontWeight: "bold", textAlign: "center" },
//   inactiveStepText: { fontSize: 14, color: "#A5D6A7", textAlign: "center" },
//   truckContainer: { position: "absolute", top: 140, alignItems: "center", width: "100%", zIndex: 1 },
//   truck: { width: 60, height: 60, resizeMode: "contain" },
//   currentStatus: { fontSize: 18, marginTop: 20, fontWeight: "bold", color: "#1B5E20" },
// });

// export default OrderTrackingScreen;



import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const screenWidth = Dimensions.get("window").width;

const CurrentOrder = () => (
  <View style={styles.tabContainer}>
    <Text style={styles.orderId}>Invoice: #256891</Text>
    <View style={styles.statusStep}>
      <MaterialIcons name="receipt" size={24} color="#2E7D32" />
      <Text style={styles.statusText}>Order Received at 10:52 AM, 23 May 2022</Text>
    </View>
    <View style={styles.verticalLine} />
    <View style={styles.statusStep}>
      <Ionicons name="bicycle" size={24} color="#2E7D32" />
      <Text style={styles.statusText}>On the way at 10:52 AM</Text>
    </View>
    <View style={styles.verticalLine} />
    <View style={styles.statusStep}>
      <MaterialIcons name="check-circle" size={24} color="#2E7D32" />
      <Text style={styles.statusText}>Delivered - Finish time in 3 min</Text>
    </View>
  </View>
);

const OrderHistory = () => (
  <View style={styles.tabContainer}>
    <Text style={styles.title}>Order History</Text>
    <Text style={styles.contentText}>Order #256890 - Delivered</Text>
    <Text style={styles.contentText}>Order #256889 - Delivered</Text>
  </View>
);

const OrderTrackingScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "current", title: "Current Order" },
    { key: "history", title: "Order History" },
  ]);

  const renderScene = SceneMap({
    current: CurrentOrder,
    history: OrderHistory,
  });

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: screenWidth }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={styles.tabBar}
            tabStyle={styles.tabLabel}  // Container styling for tab
            indicatorStyle={styles.indicator}  // Indicator styling
          />
        )}
      />
      <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={24} color="#2E7D32" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={24} color="#2E7D32" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="#2E7D32" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="#2E7D32" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: { flex: 1, padding: 16, backgroundColor: "#E8F5E9" },
  orderId: { fontSize: 18, fontWeight: "bold", color: "#2E7D32", marginBottom: 16 },
  statusStep: { flexDirection: "row", alignItems: "center", marginVertical: 8 },
  statusText: { marginLeft: 12, fontSize: 16, color: "#1B5E20" },
  verticalLine: { width: 2, height: 24, backgroundColor: "#2E7D32", marginLeft: 12 },
  tabBar: { backgroundColor: "#E8F5E9" },
  tabLabel: { backgroundColor: "#E8F5E9" },  // Container styling, no text-related styles here
  indicator: { backgroundColor: "#43A047" },
  title: { fontSize: 22, fontWeight: "bold", color: "#2E7D32", marginBottom: 16 },
  contentText: { fontSize: 16, color: "#1B5E20", marginVertical: 4 },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#E8F5E9",
  },
});

export default OrderTrackingScreen;
