// import React from 'react';
// import { View, Text, Image, Button, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useCart } from './CartContext'; // Make sure this path is correct for your project
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../navigation/types'; // Ensure this path is correct

// type AccessoriesNavigationProp = StackNavigationProp<RootStackParamList, 'Accessories'>;

// const Accessories = () => {
//   const { addToCart } = useCart();
//   const navigation = useNavigation<AccessoriesNavigationProp>();

//   // Product object
//   const product = {
//     id: 1,
//     title: 'Nike Watch',
//     image: 'https://example.com/shoe1.png',
//     price: 120.0,
//     rating: 4.9,
//     snapchatARLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66',
//     webArLink: 'https://wanna-watches.ar.wanna.fashion/?modelid=IW371611-O&wristmeasurement=true&showhint=wristmeasurement&startwithid=IW371611-O&mode=vto',
//     quantity: 1,
//   };

//   // Handlers for buttons
//   const handleAddToCart = () => {
//     addToCart(product);
//     navigation.navigate('Cart'); // Navigate to the Cart screen
//   };

//   const handleBuyNow = () => {
//     addToCart(product);
//     navigation.navigate('Payment'); // Navigate to the Payment screen
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: product.image }} style={styles.image} />
//       <Text style={styles.title}>{product.title}</Text>
//       <Text style={styles.price}>₹{product.price.toFixed(2)}</Text>
//       <View style={styles.buttonContainer}>
//         <Button title="Add to Cart" onPress={handleAddToCart} />
//         <Button title="Buy Now" onPress={handleBuyNow} color="purple" />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'contain',
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   price: {
//     fontSize: 16,
//     color: 'green',
//     marginBottom: 16,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     marginTop: 16,
//   },
// });

// export default Accessories;




// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   FlatList,
//   Button,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {RootStackParamList} from '../navigation/types'; // Adjust path as needed

// type AccessoriesNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'Accessories'
// >;

// const Accessories = () => {
//   const navigation = useNavigation<AccessoriesNavigationProp>();
//   const screenWidth = Dimensions.get('window').width;

//   const handleSwiperEnd = () => {
//     navigation.navigate('Accessories', {screen: 'Watches'}); // Navigate to Watches within the same component
//   };

//   const Watches = () => {
//     // Sample data
//     const products = [
//       {
//         id: 1,
//         title: 'Rolex Oyster Perpetual',
//         image: 'https://example.com/rolex1.png',
//         price: 12000.0,
//       },
//       {
//         id: 2,
//         title: 'Casio Edifice',
//         image: 'https://example.com/casio1.png',
//         price: 8000.0,
//       },
//       {
//         id: 3,
//         title: 'Seiko Diver',
//         image: 'https://example.com/seiko1.png',
//         price: 10000.0,
//       },
//     ];

//     const renderProductCard = ({item}: {item: any}) => (
//       <View style={styles.productCard}>
//         <Image source={{uri: item.image}} style={styles.productImage} />
//         <Text style={styles.productTitle}>{item.title}</Text>
//         <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
//         <Button title="Add to Cart" onPress={() => console.log('Added to cart')} />
//       </View>
//     );

//     return (
//       <View style={styles.container}>
//         <Text style={styles.sectionTitle}>Premium Watches</Text>
//         <FlatList
//           data={products}
//           renderItem={renderProductCard}
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={styles.productList}
//         />
//       </View>
//     );
//   };

//   const banners = [
//     {
//       id: 1,
//       image: 'https://example.com/swipe-image.png', // Replace with your image URL
//       text: 'Swipe to Explore Watches',
//     },
//     {
//       id: 2,
//       image: 'https://example.com/banner2.png', // Replace with your image URL
//       text: 'Discover Premium Accessories',
//     },
//   ];

//   const renderBanner = ({item}: {item: any}) => (
//     <View style={styles.swiperSlide}>
//       <Image source={{uri: item.image}} style={styles.image} />
//       <Text style={styles.swipeText}>{item.text}</Text>
//       <TouchableOpacity
//         style={styles.exploreButton}
//         onPress={handleSwiperEnd}>
//         <Text style={styles.exploreButtonText}>Explore Now</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={banners}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         renderItem={renderBanner}
//         keyExtractor={(item) => item.id.toString()}
//       />
//       <Watches />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   swiperSlide: {
//     width: Dimensions.get('window').width,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'contain',
//   },
//   swipeText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 16,
//   },
//   exploreButton: {
//     marginTop: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     backgroundColor: '#6200ee',
//     borderRadius: 8,
//   },
//   exploreButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 16,
//   },
//   productList: {
//     paddingHorizontal: 16,
//   },
//   productCard: {
//     backgroundColor: '#f9f9f9',
//     marginBottom: 16,
//     padding: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 8,
//   },
//   productTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   productPrice: {
//     fontSize: 14,
//     color: 'green',
//     marginBottom: 8,
//   },
// });

// export default Accessories;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   FlatList,
//   Button,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';

// const Accessories = () => {
//   const [isSwiped, setIsSwiped] = useState(false); // State to track swipe action
//   const screenWidth = Dimensions.get('window').width;

//   const handleSwiperEnd = () => {
//     setIsSwiped(true); // Set to true after the swipe or button press
//   };

//   const Watches = () => {
//     if (!isSwiped) return null; // Only render watches after swipe

//     // Sample data for watches
//     const products = [
//       {
//         id: 1,
//         title: 'Rolex Oyster Perpetual',
//         image: 'https://example.com/rolex1.png',
//         price: 12000.0,
//       },
//       {
//         id: 2,
//         title: 'Casio Edifice',
//         image: 'https://example.com/casio1.png',
//         price: 8000.0,
//       },
//       {
//         id: 3,
//         title: 'Seiko Diver',
//         image: 'https://example.com/seiko1.png',
//         price: 10000.0,
//       },
//     ];

//     const renderProductCard = ({ item }: { item: any }) => (
//       <View style={styles.productCard}>
//         <Image source={{ uri: item.image }} style={styles.productImage} />
//         <Text style={styles.productTitle}>{item.title}</Text>
//         <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
//         <Button title="Add to Cart" onPress={() => console.log('Added to cart')} />
//       </View>
//     );

//     return (
//       <View style={styles.container}>
//         <Text style={styles.sectionTitle}>Premium Watches</Text>
//         <FlatList
//           data={products}
//           renderItem={renderProductCard}
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={styles.productList}
//         />
//       </View>
//     );
//   };

//   const banners = [
//     {
//       id: 1,
//       image: 'C:\Users\ASUS\Desktop\TryTastic\TryTastic\src\assets\images\WatchSwipe.png', // Replace with your image URL
//       text: 'Swipe to Explore Watches',
//     },
//     {
//       id: 2,
//       image: 'https://example.com/banner2.png', // Replace with your image URL
//       text: 'Discover Premium Accessories',
//     },
//   ];

//   const renderBanner = ({ item }: { item: any }) => (
//     <View style={styles.swiperSlide}>
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <Text style={styles.swipeText}>{item.text}</Text>
//       <TouchableOpacity
//         style={styles.exploreButton}
//         onPress={handleSwiperEnd}
//       >
//         <Text style={styles.exploreButtonText}>Explore Now</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Show swipe banners */}
//       {!isSwiped && (
//         <FlatList
//           data={banners}
//           horizontal
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           renderItem={renderBanner}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       )}
//       {/* Show watches once swiped */}
//       <Watches />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   swiperSlide: {
//     width: Dimensions.get('window').width,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'contain',
//   },
//   swipeText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 16,
//   },
//   exploreButton: {
//     marginTop: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     backgroundColor: '#6200ee',
//     borderRadius: 8,
//   },
//   exploreButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 16,
//   },
//   productList: {
//     paddingHorizontal: 16,
//   },
//   productCard: {
//     backgroundColor: '#f9f9f9',
//     marginBottom: 16,
//     padding: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 8,
//   },
//   productTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   productPrice: {
//     fontSize: 14,
//     color: 'green',
//     marginBottom: 8,
//   },
// });

// export default Accessories;


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   FlatList,
//   Button,
//   Dimensions,
// } from 'react-native';

// const Accessories = () => {
//   const [showProducts, setShowProducts] = useState(false); // State to track if products should be shown
//   const screenWidth = Dimensions.get('window').width;

//   useEffect(() => {
//     // Show the image for 3 seconds before displaying products
//     const timer = setTimeout(() => {
//       setShowProducts(true);
//     }, 3000);

//     // Clear the timer when the component unmounts
//     return () => clearTimeout(timer);
//   }, []);

//   const Watches = () => {
//     // Sample data for watches
//     const products = [
//       {
//         id: 1,
//         title: 'Rolex Oyster Perpetual',
//         image: 'https://example.com/rolex1.png',
//         price: 12000.0,
//       },
//       {
//         id: 2,
//         title: 'Casio Edifice',
//         image: 'https://example.com/casio1.png',
//         price: 8000.0,
//       },
//       {
//         id: 3,
//         title: 'Seiko Diver',
//         image: 'https://example.com/seiko1.png',
//         price: 10000.0,
//       },
//     ];

//     const renderProductCard = ({ item }: { item: any }) => (
//       <View style={styles.productCard}>
//         <Image source={{ uri: item.image }} style={styles.productImage} />
//         <Text style={styles.productTitle}>{item.title}</Text>
//         <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
//         <Button title="Add to Cart" onPress={() => console.log('Added to cart')} />
//       </View>
//     );

//     return (
//       <View style={styles.container}>
//         <Text style={styles.sectionTitle}>Premium Watches</Text>
//         <FlatList
//           data={products}
//           renderItem={renderProductCard}
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={styles.productList}
//         />
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {!showProducts ? (
//         <View style={styles.imageContainer}>
//           <Image
//             source={{
//               uri: 'C:\Users\ASUS\Desktop\TryTastic\TryTastic\src\assets\images\WatchSwipe.png', // Replace with your image URL
//             }}
//             style={styles.image}
//           />
//           <Text style={styles.introText}>Discover Premium Accessories</Text>
//         </View>
//       ) : (
//         <Watches />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     backgroundColor: '#f5f5f5',
//   },
//   image: {
//     width: '80%',
//     height: 200,
//     resizeMode: 'contain',
//   },
//   introText: {
//     marginTop: 16,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 16,
//   },
//   productList: {
//     paddingHorizontal: 16,
//   },
//   productCard: {
//     backgroundColor: '#f9f9f9',
//     marginBottom: 16,
//     padding: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 8,
//   },
//   productTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   productPrice: {
//     fontSize: 14,
//     color: 'green',
//     marginBottom: 8,
//   },
// });

// export default Accessories;

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Image,
//   StyleSheet,
//   FlatList,
//   Text,
//   Button,
//   Dimensions,
// } from 'react-native';

// const Accessories = () => {
//   const [showProducts, setShowProducts] = useState(false); // State to track if products should be shown
//   const screenWidth = Dimensions.get('window').width;

//   useEffect(() => {
//     // Show the image for 5 seconds before displaying products
//     const timer = setTimeout(() => {
//       setShowProducts(true);
//     }, 5000);

//     // Clear the timer when the component unmounts
//     return () => clearTimeout(timer);
//   }, []);

//   const Watches = () => {
//     // Sample data for watches
//     const products = [
//       {
//         id: 1,
//         title: 'Rolex Oyster Perpetual',
//         image: 'https://example.com/rolex1.png',
//         price: 12000.0,
//       },
//       {
//         id: 2,
//         title: 'Casio Edifice',
//         image: 'https://example.com/casio1.png',
//         price: 8000.0,
//       },
//       {
//         id: 3,
//         title: 'Seiko Diver',
//         image: 'https://example.com/seiko1.png',
//         price: 10000.0,
//       },
//     ];

//     const renderProductCard = ({ item }: { item: any }) => (
//       <View style={styles.productCard}>
//         <Image source={{ uri: item.image }} style={styles.productImage} />
//         <Text style={styles.productTitle}>{item.title}</Text>
//         <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
//         <Button title="Add to Cart" onPress={() => console.log('Added to cart')} />
//       </View>
//     );

//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={products}
//           renderItem={renderProductCard}
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={styles.productList}
//         />
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {!showProducts ? (
//         <View style={styles.imageContainer}>
//           <Image
//             source={require('C:\Users\ASUS\Desktop\TryTastic\TryTastic\src\assets\images\WatchSwipe.png')}// Replace with your image URL
            
//             style={styles.image}
//           />
//         </View>
//       ) : (
//         <Watches />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     backgroundColor: '#f5f5f5',
//   },
//   image: {
//     width: '80%',
//     height: 200,
//     resizeMode: 'contain',
//   },
//   productList: {
//     paddingHorizontal: 16,
//   },
//   productCard: {
//     backgroundColor: '#f9f9f9',
//     marginBottom: 16,
//     padding: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 8,
//   },
//   productTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   productPrice: {
//     fontSize: 14,
//     color: 'green',
//     marginBottom: 8,
//   },
// });

// export default Accessories;


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Image,
//   StyleSheet,
//   FlatList,
//   Text,
//   Button,
//   Dimensions,
//   ActivityIndicator,
// } from 'react-native';

// const Accessories = () => {
//   const [showProducts, setShowProducts] = useState(false); // State to track if products should be shown
//   const screenWidth = Dimensions.get('window').width;

//   useEffect(() => {
//     // Show the image for 5 seconds before displaying products
//     const timer = setTimeout(() => {
//       setShowProducts(true);
//     }, 5000);

//     // Clear the timer when the component unmounts
//     return () => clearTimeout(timer);
//   }, []);

//   const Watches = () => {
//     // Sample data for watches
//     const products = [
//       {
//         id: 1,
//         title: 'Rolex Oyster Perpetual',
//         image: 'https://via.placeholder.com/150/0000FF/808080?text=Rolex',
//         price: 12000.0,
//       },
//       {
//         id: 2,
//         title: 'Casio Edifice',
//         image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Casio',
//         price: 8000.0,
//       },
//       {
//         id: 3,
//         title: 'Seiko Diver',
//         image: 'https://via.placeholder.com/150/00FF00/000000?text=Seiko',
//         price: 10000.0,
//       },
//     ];

//     const renderProductCard = ({ item }) => (
//       <View style={styles.productCard}>
//         <Image
//           source={{ uri: item.image }}
//           style={styles.productImage}
//           onError={(e) => console.log(`Failed to load image: ${item.image}`)}
//         />
//         <Text style={styles.productTitle}>{item.title}</Text>
//         <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
//         <Button title="Add to Cart" onPress={() => console.log('Added to cart')} />
//       </View>
//     );

//     return (
//       <FlatList
//         data={products}
//         renderItem={renderProductCard}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.productList}
//         ItemSeparatorComponent={() => <View style={styles.separator} />}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {!showProducts ? (
//         <View style={styles.imageContainer}>
//           <Image
//             source={require('../../assets/images/WatchSwipe.png')} // Replace with the correct relative path
//             style={styles.image}
//             onError={(e) => console.log('Failed to load image WatchSwipe.png')}
//           />
//           <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
//         </View>
//       ) : (
//         <Watches />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   imageContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   image: {
//     width: '80%',
//     height: 200,
//     resizeMode: 'contain',
//     marginBottom: 16,
//   },
//   loader: {
//     marginTop: 16,
//   },
//   productList: {
//     paddingHorizontal: 16,
//   },
//   productCard: {
//     backgroundColor: '#f9f9f9',
//     marginBottom: 16,
//     padding: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 8,
//   },
//   productTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   productPrice: {
//     fontSize: 14,
//     color: 'green',
//     marginBottom: 8,
//   },
//   separator: {
//     height: 1,
//     backgroundColor: '#ddd',
//     marginVertical: 8,
//   },
// });

// export default Accessories;





// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Image,
//   StyleSheet,
//   FlatList,
//   Text,
//   Button,
//   Dimensions,
//   ActivityIndicator,
// } from 'react-native';

// // Define the Product interface
// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
// }

// const Accessories = () => {
//   const [showProducts, setShowProducts] = useState(false);
//   const screenWidth = Dimensions.get('window').width;

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowProducts(true);
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   const Watches = () => {
//     const products: Product[] = [
//       {
//         id: 1,
//         title: 'Rolex Oyster Perpetual',
//         image: 'https://via.placeholder.com/150/0000FF/808080?text=Rolex',
//         price: 12000.0,
//       },
//       {
//         id: 2,
//         title: 'Casio Edifice',
//         image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Casio',
//         price: 8000.0,
//       },
//       {
//         id: 3,
//         title: 'Seiko Diver',
//         image: 'https://via.placeholder.com/150/00FF00/000000?text=Seiko',
//         price: 10000.0,
//       },
//     ];

//     const renderProductCard = ({ item }: { item: Product }) => (
//       <View style={styles.productCard}>
//         <Image
//           source={{ uri: item.image }}
//           style={styles.productImage}
//           onError={(e) => console.log(`Failed to load image: ${item.image}`)}
//         />
//         <Text style={styles.productTitle}>{item.title}</Text>
//         <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
//         <Button title="Add to Cart" onPress={() => console.log('Added to cart')} />
//       </View>
//     );

//     return (
//       <FlatList
//         data={products}
//         renderItem={renderProductCard}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.productList}
//         ItemSeparatorComponent={() => <View style={styles.separator} />}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {!showProducts ? (
//         <View style={styles.imageContainer}>
//           <Image
//             source={{uri:'../../assets/images/WatchSwipe.png'}}
//             style={styles.image}
//             onError={(e) => console.log('Failed to load image WatchSwipe.png')}
//           />
//           <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
//         </View>
//       ) : (
//         <Watches />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   imageContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   image: {
//     width: '80%',
//     height: 200,
//     resizeMode: 'contain',
//     marginBottom: 16,
//   },
//   loader: {
//     marginTop: 16,
//   },
//   productList: {
//     paddingHorizontal: 16,
//   },
//   productCard: {
//     backgroundColor: '#f9f9f9',
//     marginBottom: 16,
//     padding: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 8,
//   },
//   productTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   productPrice: {
//     fontSize: 14,
//     color: 'green',
//     marginBottom: 8,
//   },
//   separator: {
//     height: 1,
//     backgroundColor: '#ddd',
//     marginVertical: 8,
//   },
// });

// export default Accessories;



// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Image,
//   StyleSheet,
//   FlatList,
//   Text,
//   Button,
//   Dimensions,
//   ActivityIndicator,
// } from 'react-native';

// // Define the Product interface
// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
// }

// const Accessories = () => {
//   const [showProducts, setShowProducts] = useState(false);
//   const screenWidth = Dimensions.get('window').width;

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowProducts(true);
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   const Watches = () => {
//     const products: Product[] = [
//       {
//         id: 1,
//         title: 'Rolex Oyster Perpetual',
//         image: 'https://via.placeholder.com/150/0000FF/808080?text=Rolex',
//         price: 12000.0,
//       },
//       {
//         id: 2,
//         title: 'Casio Edifice',
//         image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Casio',
//         price: 8000.0,
//       },
//       {
//         id: 3,
//         title: 'Seiko Diver',
//         image: 'https://via.placeholder.com/150/00FF00/000000?text=Seiko',
//         price: 10000.0,
//       },
//     ];

//     const renderProductCard = ({ item }: { item: Product }) => (
//       <View style={styles.productCard}>
//         <Image
//           source={{ uri: item.image }}
//           style={styles.productImage}
//           onError={(e) => console.log(`Failed to load image: ${item.image}`)}
//         />
//         <Text style={styles.productTitle}>{item.title}</Text>
//         <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
//         <Button title="Add to Cart" onPress={() => console.log('Added to cart')} />
//       </View>
//     );

//     return (
//       <FlatList
//         data={products}
//         renderItem={renderProductCard}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.productList}
//         ItemSeparatorComponent={() => <View style={styles.separator} />}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {!showProducts ? (
//         <View style={styles.imageContainer}>
//         <Image
//           source={{ uri: 'https://example.com/banner2.png' }}  // Correct way to load remote images
//           style={styles.image}
//           onError={(e) => console.log('Failed to load image WatchSwipe.png')}
//         />
      
      
//           <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
//         </View>
//       ) : (
//         <Watches />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   imageContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   image: {
//     width: '80%',
//     height: 200,
//     resizeMode: 'contain',
//     marginBottom: 16,
//   },
//   loader: {
//     marginTop: 16,
//   },
//   productList: {
//     paddingHorizontal: 16,
//   },
//   productCard: {
//     backgroundColor: '#f9f9f9',
//     marginBottom: 16,
//     padding: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 8,
//   },
//   productTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   productPrice: {
//     fontSize: 14,
//     color: 'green',
//     marginBottom: 8,
//   },
//   separator: {
//     height: 1,
//     backgroundColor: '#ddd',
//     marginVertical: 8,
//   },
// });

// export default Accessories;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   Image,
//   Modal,
//   Button,
//   TextInput,
//   Dimensions,
// } from 'react-native';

// // Define the Product interface
// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
// }

// const Accessories = () => {
//   const [location, setLocation] = useState('Kalyan - 421201');
//   const [isModalVisible, setModalVisible] = useState(false);
//   const screenWidth = Dimensions.get('window').width;

//   const categories = ['Women Analog', 'Men Analog', 'Kids Analog'];

//   const products: Product[] = [
//     {
//       id: 1,
//       title: 'Rolex Oyster Perpetual',
//       image: 'https://via.placeholder.com/150/0000FF/808080?text=Rolex',
//       price: 12000.0,
//     },
//     {
//       id: 2,
//       title: 'Casio Edifice',
//       image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Casio',
//       price: 8000.0,
//     },
//     {
//       id: 3,
//       title: 'Seiko Diver',
//       image: 'https://via.placeholder.com/150/00FF00/000000?text=Seiko',
//       price: 10000.0,
//     },
//     {
//       id: 4,
//       title: 'Fossil Grant',
//       image: 'https://via.placeholder.com/150/FFFF00/000000?text=Fossil',
//       price: 9000.0,
//     },
//     {
//       id: 5,
//       title: 'Titan Neo',
//       image: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Titan',
//       price: 7000.0,
//     },
//     {
//       id: 6,
//       title: 'Citizen Eco-Drive',
//       image: 'https://via.placeholder.com/150/008080/FFFFFF?text=Citizen',
//       price: 11000.0,
//     },
//   ];

//   const renderCategoryTabs = () => (
//     <View style={styles.categoryTabs}>
//       {categories.map((category, index) => (
//         <TouchableOpacity key={index} style={styles.categoryTab}>
//           <Text style={styles.categoryText}>{category}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   const renderProductCard = ({ item }: { item: Product }) => (
//     <View style={styles.productCard}>
//       <Image
//         source={{ uri: item.image }}
//         style={styles.productImage}
//         onError={() => console.log(`Failed to load image: ${item.image}`)}
//       />
//       <Text style={styles.productTitle} numberOfLines={1}>
//         {item.title}
//       </Text>
//       <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Location Section */}
//       <View style={styles.locationContainer}>
//         <TouchableOpacity onPress={() => setModalVisible(true)}>
//           <Text style={styles.locationText}>
//             Delivering to {location} ▼
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Modal for Changing Location */}
//       <Modal
//         visible={isModalVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Enter New Location</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter location"
//               onChangeText={(text) => setLocation(text)}
//               defaultValue={location}
//             />
//             <Button title="Save" onPress={() => setModalVisible(false)} />
//             <Button
//               title="Cancel"
//               color="red"
//               onPress={() => setModalVisible(false)}
//             />
//           </View>
//         </View>
//       </Modal>

//       {renderCategoryTabs()}
//       <FlatList
//         data={products}
//         renderItem={renderProductCard}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.productList}
//         numColumns={2} // Grid layout
//         columnWrapperStyle={styles.row} // Space between columns
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   locationContainer: {
//     padding: 12,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   locationText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333',
//   },
//   categoryTabs: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 12,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   categoryTab: {
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//   },
//   categoryText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//   },
//   productList: {
//     paddingHorizontal: 8,
//     paddingTop: 8,
//   },
//   row: {
//     justifyContent: 'space-between',
//   },
//   productCard: {
//     backgroundColor: '#f9f9f9',
//     flex: 1,
//     margin: 8,
//     padding: 12,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//     alignItems: 'center',
//   },
//   productImage: {
//     width: '100%',
//     height: 100,
//     resizeMode: 'contain',
//     marginBottom: 8,
//   },
//   productTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   productPrice: {
//     fontSize: 14,
//     color: 'green',
//     fontWeight: '500',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 4,
//     padding: 8,
//     marginBottom: 12,
//   },
// });

// export default Accessories;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   Image,
//   Modal,
//   Button,
//   TextInput,
//   Dimensions,
// } from 'react-native';

// // Define the Product interface
// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
// }

// const Accessories = () => {
//   const [location, setLocation] = useState('Kalyan - 421201');
//   const [isModalVisible, setModalVisible] = useState(false);
//   const screenWidth = Dimensions.get('window').width;

//   const categories = ['Women Analog', 'Men Analog', 'Kids Analog'];

//   const products: Product[] = [
//     {
//       id: 1,
//       title: 'Rolex Oyster Perpetual',
//       image: 'https://via.placeholder.com/150/0000FF/808080?text=Rolex',
//       price: 12000.0,
//     },
//     {
//       id: 2,
//       title: 'Casio Edifice',
//       image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Casio',
//       price: 8000.0,
//     },
//     {
//       id: 3,
//       title: 'Seiko Diver',
//       image: 'https://via.placeholder.com/150/00FF00/000000?text=Seiko',
//       price: 10000.0,
//     },
//     {
//       id: 4,
//       title: 'Fossil Grant',
//       image: 'https://via.placeholder.com/150/FFFF00/000000?text=Fossil',
//       price: 9000.0,
//     },
//     {
//       id: 5,
//       title: 'Titan Neo',
//       image: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Titan',
//       price: 7000.0,
//     },
//     {
//       id: 6,
//       title: 'Citizen Eco-Drive',
//       image: 'https://via.placeholder.com/150/008080/FFFFFF?text=Citizen',
//       price: 11000.0,
//     },
//   ];

//   const renderCategoryTabs = () => (
//     <View style={styles.categoryTabs}>
//       {categories.map((category, index) => (
//         <TouchableOpacity key={index} style={styles.categoryTab}>
//           <Text style={styles.categoryText}>{category}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   const renderProductCard = ({ item }: { item: Product }) => (
//     <View style={styles.productCard}>
//       <Image
//         source={{ uri: item.image }}
//         style={styles.productImage}
//         onError={() => console.log(`Failed to load image: ${item.image}`)}
//       />
//       <Text style={styles.productTitle} numberOfLines={1}>
//         {item.title}
//       </Text>
//       <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Location Section */}
//       <View style={styles.locationContainer}>
//         <TouchableOpacity onPress={() => setModalVisible(true)}>
//           <Text style={styles.locationText}>
//             Delivering to {location} ▼
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Modal for Changing Location */}
//       <Modal
//         visible={isModalVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Enter New Location</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter location"
//               onChangeText={(text) => setLocation(text)}
//               defaultValue={location}
//             />
//             <Button title="Save" onPress={() => setModalVisible(false)} />
//             <Button
//               title="Cancel"
//               color="red"
//               onPress={() => setModalVisible(false)}
//             />
//           </View>
//         </View>
//       </Modal>

//       {renderCategoryTabs()}
//       <FlatList
//         data={products}
//         renderItem={renderProductCard}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.productList}
//         numColumns={2} // Grid layout
//         columnWrapperStyle={styles.row} // Space between columns
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   locationContainer: {
//     padding: 12,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   locationText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333',
//   },
//   categoryTabs: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 12,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   categoryTab: {
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//   },
//   categoryText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//   },
//   productList: {
//     paddingHorizontal: 8,
//     paddingTop: 8,
//   },
//   row: {
//     justifyContent: 'space-between',
//   },
//   productCard: {
//     backgroundColor: '#f9f9f9',
//     flex: 1,
//     margin: 8,
//     padding: 12,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//     alignItems: 'center',
//   },
//   productImage: {
//     width: '100%',
//     height: 100,
//     resizeMode: 'contain',
//     marginBottom: 8,
//   },
//   productTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   productPrice: {
//     fontSize: 14,
//     color: 'green',
//     fontWeight: '500',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 4,
//     padding: 8,
//     marginBottom: 12,
//   },
// });

// export default Accessories;





// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   Image,
//   Modal,
//   TextInput,
//   Dimensions,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types'; // Ensure this is the correct path

// // Define the Product interface
// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
// }

// const Accessories = () => {
//   const [location, setLocation] = useState('Kalyan - 421201');
//   const [isModalVisible, setModalVisible] = useState(false);
//   const screenWidth = Dimensions.get('window').width;

//   // Use the correct navigation type
//   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

//   const categories = ['Women Analog', 'Men Analog', 'Kids Analog'];

//   const products: Product[] = [
//     {
//       id: 1,
//       title: 'Rolex Oyster Perpetual',
//       image: 'https://via.placeholder.com/150/0000FF/808080?text=Rolex',
//       price: 12000.0,
//     },
//     {
//       id: 2,
//       title: 'Casio Edifice',
//       image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Casio',
//       price: 8000.0,
//     },
//     {
//       id: 3,
//       title: 'Seiko Diver',
//       image: 'https://via.placeholder.com/150/00FF00/000000?text=Seiko',
//       price: 10000.0,
//     },
//     {
//       id: 4,
//       title: 'Fossil Grant',
//       image: 'https://via.placeholder.com/150/FFFF00/000000?text=Fossil',
//       price: 9000.0,
//     },
//     {
//       id: 5,
//       title: 'Titan Neo',
//       image: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Titan',
//       price: 7000.0,
//     },
//     {
//       id: 6,
//       title: 'Citizen Eco-Drive',
//       image: 'https://via.placeholder.com/150/008080/FFFFFF?text=Citizen',
//       price: 11000.0,
//     },
//   ];

//   const renderCategoryTabs = () => (
//     <View style={styles.categoryTabs}>
//       {categories.map((category, index) => (
//         <TouchableOpacity key={index} style={styles.categoryTab}>
//           <Text style={styles.categoryText}>{category}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   const renderProductCard = ({ item }: { item: Product }) => (
//     <View style={styles.productCard}>
//       <Image
//         source={{ uri: item.image }}
//         style={styles.productImage}
//         onError={() => console.log(`Failed to load image: ${item.image}`)}
//       />
//       <Text style={styles.productTitle} numberOfLines={1}>
//         {item.title}
//       </Text>
//       <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Navigation Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Text style={styles.backArrow}>←</Text>
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Watches</Text>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('Category')} // Ensure CategoryScreen is defined in your navigator
//           style={styles.categoryButton}
//         >
//           <Text style={styles.categoryButtonText}>Category</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Location Section */}
//       <View style={styles.locationContainer}>
//         <TouchableOpacity onPress={() => setModalVisible(true)}>
//           <Text style={styles.locationText}>
//             Delivering to {location} ▼
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Modal for Changing Location */}
//       <Modal
//         visible={isModalVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Enter New Location</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter location"
//               onChangeText={(text) => setLocation(text)}
//               defaultValue={location}
//             />
//             <TouchableOpacity
//               onPress={() => setModalVisible(false)}
//               style={styles.saveButton}
//             >
//               <Text style={styles.saveButtonText}>Save</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => setModalVisible(false)}
//               style={[styles.saveButton, { backgroundColor: 'red' }]}
//             >
//               <Text style={styles.saveButtonText}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {renderCategoryTabs()}
//       <FlatList
//         data={products}
//         renderItem={renderProductCard}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.productList}
//         numColumns={2} // Grid layout
//         columnWrapperStyle={styles.row} // Space between columns
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   backButton: {
//     paddingRight: 12,
//   },
//   backArrow: {
//     fontSize: 20,
//     color: '#333',
//   },
//   headerTitle: {
//     flex: 1,
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//   },
//   categoryButton: {
//     paddingLeft: 12,
//   },
//   categoryButtonText: {
//     fontSize: 14,
//     color: '#007AFF',
//   },
//   locationContainer: {
//     padding: 12,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   locationText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333',
//   },
//   categoryTabs: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 12,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   categoryTab: {
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//   },
//   categoryText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//   },
//   productList: {
//     paddingHorizontal: 8,
//     paddingTop: 8,
//   },
//   row: {
//     justifyContent: 'space-between',
//   },
//   productCard: {
//     backgroundColor: '#f9f9f9',
//     flex: 1,
//     margin: 8,
//     padding: 12,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//     alignItems: 'center',
//   },
//   productImage: {
//     width: '100%',
//     height: 100,
//     resizeMode: 'contain',
//     marginBottom: 8,
//   },
//   productTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   productPrice: {
//     fontSize: 14,
//     color: 'green',
//     fontWeight: '500',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 4,
//     padding: 8,
//     marginBottom: 12,
//   },
//   saveButton: {
//     backgroundColor: '#007AFF',
//     padding: 10,
//     borderRadius: 4,
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default Accessories;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   Image,
//   Modal,
//   TextInput,
//   Dimensions,
//   ScrollView,
// } from 'react-native';

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
//   description: string; // Added description for each product
//   seller: string; // Added seller information
// }

// const Accessories = () => {
//   const [location, setLocation] = useState('Kalyan - 421201');
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const screenWidth = Dimensions.get('window').width;

//   const categories = ['Women Analog', 'Men Analog', 'Kids Analog'];

//   const products: Product[] = [
//     {
//       id: 1,
//       title: 'Rolex Oyster Perpetual',
//       image: 'https://via.placeholder.com/150/0000FF/808080?text=Rolex',
//       price: 12000.0,
//       description: 'A timeless classic with unmatched precision.',
//       seller: 'Rolex Official Store',
//     },
//     {
//       id: 2,
//       title: 'Casio Edifice',
//       image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Casio',
//       price: 8000.0,
//       description: 'Durable and stylish watch for everyday use.',
//       seller: 'Casio Official Store',
//     },
//     {
//       id: 3,
//       title: 'Seiko Diver',
//       image: 'https://via.placeholder.com/150/00FF00/000000?text=Seiko',
//       price: 10000.0,
//       description: 'Perfect for underwater adventures.',
//       seller: 'Seiko Official Store',
//     },
//     {
//       id: 4,
//       title: 'Seiko Diver',
//       image: 'https://via.placeholder.com/150/00FF00/000000?text=Seiko',
//       price: 10000.0,
//       description: 'Perfect for underwater adventures.',
//       seller: 'Seiko Official Store',
//     },
//     {
//       id: 5,
//       title: 'Seiko Diver',
//       image: 'https://via.placeholder.com/150/00FF00/000000?text=Seiko',
//       price: 10000.0,
//       description: 'Perfect for underwater adventures.',
//       seller: 'Seiko Official Store',
//     },
//     {
//       id: 6,
//       title: 'Seiko Diver',
//       image: 'https://via.placeholder.com/150/00FF00/000000?text=Seiko',
//       price: 10000.0,
//       description: 'Perfect for underwater adventures.',
//       seller: 'Seiko Official Store',
//     },
//     {
//       id: 7,
//       title: 'Seiko Diver',
//       image: 'https://via.placeholder.com/150/00FF00/000000?text=Seiko',
//       price: 10000.0,
//       description: 'Perfect for underwater adventures.',
//       seller: 'Seiko Official Store',
//     },
//     {
//       id: 9,
//       title: 'Seiko Diver',
//       image: 'https://via.placeholder.com/150/00FF00/000000?text=Seiko',
//       price: 10000.0,
//       description: 'Perfect for underwater adventures.',
//       seller: 'Seiko Official Store',
//     },
//     {
//       id: 9,
//       title: 'Seiko Diver',
//       image: 'https://via.placeholder.com/150/00FF00/000000?text=Seiko',
//       price: 10000.0,
//       description: 'Perfect for underwater adventures.',
//       seller: 'Seiko Official Store',
//     },
//     {
//       id: 10,
//       title: 'Seiko Diver',
//       image: 'https://via.placeholder.com/150/00FF00/000000?text=Seiko',
//       price: 10000.0,
//       description: 'Perfect for underwater adventures.',
//       seller: 'Seiko Official Store',
//     },
//   ];

//   const renderProductCard = ({ item }: { item: Product }) => (
//     <TouchableOpacity
//       style={styles.productCard}
//       onPress={() => setSelectedProduct(item)} // Set selected product
//     >
//       <Image
//         source={{ uri: item.image }}
//         style={styles.productImage}
//         onError={() => console.log(`Failed to load image: ${item.image}`)}
//       />
//       <Text style={styles.productTitle} numberOfLines={1}>
//         {item.title}
//       </Text>
//       <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
//     </TouchableOpacity>
//   );

//   const renderProductDetails = () => {
//     if (!selectedProduct) return null;

//     return (
//       <ScrollView style={styles.productDetailsContainer}>
//         <TouchableOpacity onPress={() => setSelectedProduct(null)} style={styles.backButton}>
//           <Text style={styles.backArrow}>← Back</Text>
//         </TouchableOpacity>
//         <Image
//           source={{ uri: selectedProduct.image }}
//           style={styles.productDetailsImage}
//         />
//         <Text style={styles.productDetailsTitle}>{selectedProduct.title}</Text>
//         <Text style={styles.productDetailsPrice}>₹{selectedProduct.price.toFixed(2)}</Text>
//         <Text style={styles.productDetailsDescription}>
//           {selectedProduct.description}
//         </Text>
//         <Text style={styles.productDetailsSeller}>Sold by: {selectedProduct.seller}</Text>
//         <Text style={styles.productDetailsSize}>Size: Free Size</Text>
//         <View style={styles.actionButtons}>
//           <TouchableOpacity style={styles.addToCartButton}>
//             <Text style={styles.addToCartText}>Add to Cart</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.buyNowButton}>
//             <Text style={styles.buyNowText}>Buy Now</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* Location Section */}
//       {!selectedProduct && (
//         <>
//           <View style={styles.locationContainer}>
//             <TouchableOpacity onPress={() => setModalVisible(true)}>
//               <Text style={styles.locationText}>
//                 Delivering to {location} ▼
//               </Text>
//             </TouchableOpacity>
//           </View>

//           {/* Modal for Changing Location */}
//           <Modal
//             visible={isModalVisible}
//             transparent
//             animationType="slide"
//             onRequestClose={() => setModalVisible(false)}
//           >
//             <View style={styles.modalContainer}>
//               <View style={styles.modalContent}>
//                 <Text style={styles.modalTitle}>Enter New Location</Text>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter location"
//                   onChangeText={(text) => setLocation(text)}
//                   defaultValue={location}
//                 />
//                 <TouchableOpacity
//                   onPress={() => setModalVisible(false)}
//                   style={styles.saveButton}
//                 >
//                   <Text style={styles.saveButtonText}>Save</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Modal>

//           {/* Product List */}
//           <FlatList
//             data={products}
//             renderItem={renderProductCard}
//             keyExtractor={(item) => item.id.toString()}
//             contentContainerStyle={styles.productList}
//             numColumns={2} // Grid layout
//             columnWrapperStyle={styles.row} // Space between columns
//           />
//         </>
//       )}

//       {/* Product Details */}
//       {selectedProduct && renderProductDetails()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   locationContainer: {
//     padding: 12,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   locationText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333',
//   },
//   productList: {
//     paddingHorizontal: 8,
//     paddingTop: 8,
//   },
//   row: {
//     justifyContent: 'space-between',
//   },
//   productCard: {
//     backgroundColor: '#f9f9f9',
//     flex: 1,
//     margin: 8,
//     padding: 12,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//     alignItems: 'center',
//   },
//   productImage: {
//     width: '100%',
//     height: 100,
//     resizeMode: 'contain',
//     marginBottom: 8,
//   },
//   productTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   productPrice: {
//     fontSize: 14,
//     color: 'green',
//     fontWeight: '500',
//   },
//   productDetailsContainer: {
//     flex: 1,
//     padding: 16,
//   },
//   backButton: {
//     marginBottom: 12,
//   },
//   backArrow: {
//     fontSize: 18,
//     color: '#007AFF',
//   },
//   productDetailsImage: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'contain',
//     marginBottom: 12,
//   },
//   productDetailsTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   productDetailsPrice: {
//     fontSize: 18,
//     color: 'green',
//     marginBottom: 8,
//   },
//   productDetailsDescription: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   productDetailsSeller: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   productDetailsSize: {
//     fontSize: 16,
//     marginBottom: 16,
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   addToCartButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 8,
//   },
//   buyNowButton: {
//     backgroundColor: 'green',
//     padding: 12,
//     borderRadius: 8,
//   },
//   addToCartText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   buyNowText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 4,
//     padding: 8,
//     marginBottom: 12,
//   },
//   saveButton: {
//     backgroundColor: '#007AFF',
//     padding: 10,
//     borderRadius: 4,
//     alignItems: 'center',
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default Accessories;





// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   Image,
//   Modal,
//   TextInput,
//   ScrollView,
// } from 'react-native';

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
//   description: string;
//   seller: string;
// }

// const Accessories = ({ navigation }: any) => {
//   const [location, setLocation] = useState('Kalyan - 421201');
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

//   const products: Product[] = [
//     {
//       id: 1,
//       title: 'Rolex Oyster Perpetual',
//       image: 'https://via.placeholder.com/150/0000FF/808080?text=Rolex',
//       price: 12000.0,
//       description: 'A timeless classic with unmatched precision.',
//       seller: 'Rolex Official Store',
//     },
//     {
//       id: 2,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 3,
//       title: 'Fossil Gen 5',
//       image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//       price: 15000.0,
//       description: 'Smart features with a sleek design.',
//       seller: 'Fossil Store',
//     },
//     {
//       id: 4,
//       title: 'Fossil Gen 5',
//       image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//       price: 15000.0,
//       description: 'Smart features with a sleek design.',
//       seller: 'Fossil Store',
//     },
//     {
//       id: 5,
//       title: 'Fossil Gen 5',
//       image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//       price: 15000.0,
//       description: 'Smart features with a sleek design.',
//       seller: 'Fossil Store',
//     },
    
//     {
//       id: 6,
//       title: 'Fossil Gen 5',
//       image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//       price: 15000.0,
//       description: 'Smart features with a sleek design.',
//       seller: 'Fossil Store',
//     },
//     {
//       id: 7,
//       title: 'Fossil Gen 5',
//       image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//       price: 15000.0,
//       description: 'Smart features with a sleek design.',
//       seller: 'Fossil Store',
//     },
//     {
//       id: 8,
//       title: 'Fossil Gen 5',
//       image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//       price: 15000.0,
//       description: 'Smart features with a sleek design.',
//       seller: 'Fossil Store',
//     },
//     {
//       id: 9,
//       title: 'Fossil Gen 5',
//       image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//       price: 15000.0,
//       description: 'Smart features with a sleek design.',
//       seller: 'Fossil Store',
//     },
//     {
//       id: 10,
//       title: 'Fossil Gen 5',
//       image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//       price: 15000.0,
//       description: 'Smart features with a sleek design.',
//       seller: 'Fossil Store',
//     },
//     // Add more products here...
//   ];

//   const renderProductCard = ({ item }: { item: Product }) => (
//     <TouchableOpacity
//       style={styles.productCard}
//       onPress={() => setSelectedProduct(item)}
//     >
//       <Image
//         source={{ uri: item.image }}
//         style={styles.productImage}
//         onError={() => console.log(`Failed to load image: ${item.image}`)}
//       />
//       <Text style={styles.productTitle} numberOfLines={1}>
//         {item.title}
//       </Text>
//       <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
//     </TouchableOpacity>
//   );

//   const renderProductDetails = () => {
//     if (!selectedProduct) return null;

//     return (
//       <View style={styles.detailsContainer}>
//         <ScrollView style={styles.productDetailsContainer}>
//           <TouchableOpacity
//             onPress={() => setSelectedProduct(null)}
//             style={styles.backButton}
//           >
//             <Text style={styles.backArrow}>← Back</Text>
//           </TouchableOpacity>
//           <Image
//             source={{ uri: selectedProduct.image }}
//             style={styles.productDetailsImage}
//           />
//           <Text style={styles.productDetailsTitle}>{selectedProduct.title}</Text>
//           <Text style={styles.productDetailsPrice}>₹{selectedProduct.price.toFixed(2)}</Text>
//           <Text style={styles.productDetailsDescription}>
//             {selectedProduct.description}
//           </Text>
//           <Text style={styles.productDetailsSeller}>Sold by: {selectedProduct.seller}</Text>
//           <Text style={styles.productDetailsSize}>Size: Free Size</Text>
//           <Text style={styles.customerReviews}>Customer Reviews: ★★★★☆ (245)</Text>
//         </ScrollView>
//         <View style={styles.actionButtonsContainer}>
//           <TouchableOpacity
//             style={styles.addToCartButton}
//             onPress={() => navigation.navigate('Cart')}
//           >
//             <Text style={styles.addToCartText}>Add to Cart</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.buyNowButton}
//             onPress={() => navigation.navigate('Payment')}
//           >
//             <Text style={styles.buyNowText}>Buy Now</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {!selectedProduct && (
//         <>
//           <View style={styles.locationContainer}>
//             <TouchableOpacity onPress={() => setModalVisible(true)}>
//               <Text style={styles.locationText}>
//                 Delivering to {location} ▼
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <Modal
//             visible={isModalVisible}
//             transparent
//             animationType="slide"
//             onRequestClose={() => setModalVisible(false)}
//           >
//             <View style={styles.modalContainer}>
//               <View style={styles.modalContent}>
//                 <Text style={styles.modalTitle}>Enter New Location</Text>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter location"
//                   onChangeText={(text) => setLocation(text)}
//                   defaultValue={location}
//                 />
//                 <TouchableOpacity
//                   onPress={() => setModalVisible(false)}
//                   style={styles.saveButton}
//                 >
//                   <Text style={styles.saveButtonText}>Save</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Modal>
//           <FlatList
//             data={products}
//             renderItem={renderProductCard}
//             keyExtractor={(item) => item.id.toString()}
//             contentContainerStyle={styles.productList}
//             numColumns={2}
//             columnWrapperStyle={styles.row}
//           />
//         </>
//       )}
//       {selectedProduct && renderProductDetails()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   locationContainer: {
//     padding: 12,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   locationText: { fontSize: 16, fontWeight: '500', color: '#333' },
//   productList: { paddingHorizontal: 8, paddingTop: 8 },
//   row: { justifyContent: 'space-between' },
//   productCard: {
//     flex: 1,
//     margin: 8,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//   },
//   productImage: { height: 120, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
//   productTitle: { padding: 8, fontSize: 14, fontWeight: '500' },
//   productPrice: { padding: 8, fontSize: 16, fontWeight: 'bold', color: '#007AFF' },
//   detailsContainer: { flex: 1 },
//   productDetailsContainer: { padding: 16, flex: 1 },
//   productDetailsImage: { width: '100%', height: 200, borderRadius: 8 },
//   productDetailsTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 8 },
//   productDetailsPrice: { fontSize: 18, fontWeight: 'bold', color: '#007AFF' },
//   productDetailsDescription: { fontSize: 14, marginVertical: 8 },
//   productDetailsSeller: { fontSize: 14, marginVertical: 4 },
//   productDetailsSize: { fontSize: 14, marginVertical: 4 },
//   customerReviews: { fontSize: 16, marginTop: 12 },
//   actionButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//     padding: 12,
//   },
//   addToCartButton: { flex: 1, backgroundColor: '#007AFF', marginRight: 8, padding: 12, borderRadius: 8 },
//   buyNowButton: { flex: 1, backgroundColor: 'green', padding: 12, borderRadius: 8 },
//   addToCartText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   buyNowText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   backButton: { marginBottom: 8 },
//   backArrow: { fontSize: 16, color: '#007AFF' },
//   modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
//   modalContent: { backgroundColor: '#fff', padding: 16, borderRadius: 8, width: '80%' },
//   modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
//   input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 8, marginBottom: 16 },
//   saveButton: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8 },
//   saveButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
// });

// export default Accessories;




// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   Image,
//   Modal,
//   TextInput,
//   ScrollView,
// } from 'react-native';

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
//   description: string;
//   seller: string;
// }

// const Accessories = ({ navigation }: any) => {
//   const [location, setLocation] = useState('Kalyan - 421201');
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

//   const products: Product[] = [
//     {
//       id: 1,
//       title: 'Rolex Oyster Perpetual',
//       image: 'https://via.placeholder.com/150/0000FF/808080?text=Rolex',
//       price: 12000.0,
//       description: 'A timeless classic with unmatched precision.',
//       seller: 'Rolex Official Store',
//     },
//     {
//       id: 2,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 3,
//       title: 'Fossil Gen 5',
//       image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//       price: 15000.0,
//       description: 'Smart features with a sleek design.',
//       seller: 'Fossil Store',
//     },
//     {
//             id: 4,
//             title: 'Fossil Gen 5',
//             image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//             price: 15000.0,
//             description: 'Smart features with a sleek design.',
//             seller: 'Fossil Store',
//           },
//           {
//             id: 5,
//             title: 'Fossil Gen 5',
//             image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//             price: 15000.0,
//             description: 'Smart features with a sleek design.',
//             seller: 'Fossil Store',
//           },
          
//           {
//             id: 6,
//             title: 'Fossil Gen 5',
//             image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//             price: 15000.0,
//             description: 'Smart features with a sleek design.',
//             seller: 'Fossil Store',
//           },
//           {
//             id: 7,
//             title: 'Fossil Gen 5',
//             image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//             price: 15000.0,
//             description: 'Smart features with a sleek design.',
//             seller: 'Fossil Store',
//           },
//           {
//             id: 8,
//             title: 'Fossil Gen 5',
//             image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//             price: 15000.0,
//             description: 'Smart features with a sleek design.',
//             seller: 'Fossil Store',
//           },
//           {
//             id: 9,
//             title: 'Fossil Gen 5',
//             image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//             price: 15000.0,
//             description: 'Smart features with a sleek design.',
//             seller: 'Fossil Store',
//           },
//           {
//             id: 10,
//             title: 'Fossil Gen 5',
//             image: 'https://via.placeholder.com/150/00FF00/808080?text=Fossil',
//             price: 15000.0,
//             description: 'Smart features with a sleek design.',
//             seller: 'Fossil Store',
//           },
//   ];

//   const renderProductCard = ({ item }: { item: Product }) => (
//     <TouchableOpacity
//       style={styles.productCard}
//       onPress={() => setSelectedProduct(item)}
//     >
//       <Image
//         source={{ uri: item.image }}
//         style={styles.productImage}
//         onError={() => console.log(`Failed to load image: ${item.image}`)}
//       />
//       <Text style={styles.productTitle} numberOfLines={1}>
//         {item.title}
//       </Text>
//       <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
//     </TouchableOpacity>
//   );

//   const renderProductDetails = () => {
//     if (!selectedProduct) return null;

//     return (
//       <View style={styles.detailsContainer}>
//         <ScrollView style={styles.productDetailsContainer}>
//           <TouchableOpacity
//             onPress={() => setSelectedProduct(null)}
//             style={styles.backButton}
//           >
//             <Text style={styles.backArrow}>← Back</Text>
//           </TouchableOpacity>
//           <Image
//             source={{ uri: selectedProduct.image }}
//             style={styles.productDetailsImage}
//           />
//           <Text style={styles.productDetailsTitle}>{selectedProduct.title}</Text>
//           <Text style={styles.productDetailsPrice}>
//             ₹{selectedProduct.price.toFixed(2)}
//           </Text>
//           <Text style={styles.productDetailsDescription}>
//             {selectedProduct.description}
//           </Text>
//           <Text style={styles.productDetailsSeller}>
//             Sold by: {selectedProduct.seller}
//           </Text>
//           <Text style={styles.productDetailsSize}>Size: Free Size</Text>
//           <Text style={styles.customerReviews}>
//             Customer Reviews: ★★★★☆ (245)
//           </Text>
//         </ScrollView>
//         <View style={styles.actionButtonsContainer}>
//           <TouchableOpacity
//             style={styles.addToCartButton}
//             onPress={() => navigation.navigate('Cart')}
//           >
//             <Text style={styles.addToCartText}>Add to Cart</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.buyNowButton}
//             onPress={() => navigation.navigate('Payment')}
//           >
//             <Text style={styles.buyNowText}>Buy Now</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.arButtonContainer}>
//           <TouchableOpacity
//             style={styles.arButton}
//             onPress={() => navigation.navigate('ARView', { product: selectedProduct })}
//           >
//             <Text style={styles.arButtonText}>View in AR</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {!selectedProduct && (
//         <>
//           <View style={styles.locationContainer}>
//             <TouchableOpacity onPress={() => setModalVisible(true)}>
//               <Text style={styles.locationText}>
//                 Delivering to {location} ▼
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <Modal
//             visible={isModalVisible}
//             transparent
//             animationType="slide"
//             onRequestClose={() => setModalVisible(false)}
//           >
//             <View style={styles.modalContainer}>
//               <View style={styles.modalContent}>
//                 <Text style={styles.modalTitle}>Enter New Location</Text>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter location"
//                   onChangeText={(text) => setLocation(text)}
//                   defaultValue={location}
//                 />
//                 <TouchableOpacity
//                   onPress={() => setModalVisible(false)}
//                   style={styles.saveButton}
//                 >
//                   <Text style={styles.saveButtonText}>Save</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Modal>
//           <FlatList
//             data={products}
//             renderItem={renderProductCard}
//             keyExtractor={(item) => item.id.toString()}
//             contentContainerStyle={styles.productList}
//             numColumns={2}
//             columnWrapperStyle={styles.row}
//           />
//         </>
//       )}
//       {selectedProduct && renderProductDetails()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   locationContainer: {
//     padding: 12,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   locationText: { fontSize: 16, fontWeight: '500', color: '#333' },
//   productList: { paddingHorizontal: 8, paddingTop: 8 },
//   row: { justifyContent: 'space-between' },
//   productCard: {
//     flex: 1,
//     margin: 8,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//   },
//   productImage: { height: 120, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
//   productTitle: { padding: 8, fontSize: 14, fontWeight: '500' },
//   productPrice: { padding: 8, fontSize: 16, fontWeight: 'bold', color: '#007AFF' },
//   detailsContainer: { flex: 1 },
//   productDetailsContainer: { padding: 16, flex: 1 },
//   productDetailsImage: { width: '100%', height: 200, borderRadius: 8 },
//   productDetailsTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 8 },
//   productDetailsPrice: { fontSize: 18, fontWeight: 'bold', color: '#007AFF' },
//   productDetailsDescription: { fontSize: 14, marginVertical: 8 },
//   productDetailsSeller: { fontSize: 14, marginVertical: 4 },
//   productDetailsSize: { fontSize: 14, marginVertical: 4 },
//   customerReviews: { fontSize: 16, marginTop: 12 },
//   actionButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//     padding: 12,
//   },
//   addToCartButton: {
//     flex: 1,
//     backgroundColor: '#007AFF',
//     marginRight: 8,
//     padding: 12,
//     borderRadius: 8,
//   },
//   buyNowButton: {
//     flex: 1,
//     backgroundColor: 'green',
//     padding: 12,
//     borderRadius: 8,
//   },
//   addToCartText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   buyNowText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   backButton: { marginBottom: 8 },
//   backArrow: { fontSize: 16, color: '#007AFF' },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: { backgroundColor: '#fff', padding: 16, borderRadius: 8, width: '80%' },
//   modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
//   input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 8, marginBottom: 16 },
//   saveButton: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8 },
//   saveButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   arButtonContainer: { marginTop: 8, padding: 12 },
//   arButton: { backgroundColor: '#FF5733', padding: 12, borderRadius: 8 },
//   arButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
// });

// export default Accessories;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   Image,
//   Modal,
//   TextInput,
//   ScrollView,Alert
// } from 'react-native';

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
//   description: string;
//   seller: string;
// }

// const Accessories = ({ navigation }: any) => {
//   const [location, setLocation] = useState('Kalyan - 421201');
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [cart, setCart] = useState<Product[]>([]);

//   const products: Product[] = [
//     {
//       id: 1,
//       title: 'Rolex Oyster Perpetual',
//       image: 'https://via.placeholder.com/150/0000FF/808080?text=Rolex',
//       price: 12000.0,
//       description: 'A timeless classic with unmatched precision.',
//       seller: 'Rolex Official Store',
//     },
//     {
//       id: 2,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 3,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 4,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 5,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 6,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
    
//     {
//       id: 7,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 8,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 9,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 10,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },

//     // More products here...
//   ];

//   const addToCart = (product: Product) => {
//     setCart([...cart, product]);
//     Alert.alert(`${product.title} has been added to your cart.`);
//   };

//   const renderProductCard = ({ item }: { item: Product }) => (
//     <TouchableOpacity
//       style={styles.productCard}
//       onPress={() => setSelectedProduct(item)}
//     >
//       <Image
//         source={{ uri: item.image }}
//         style={styles.productImage}
//         onError={() => console.log(`Failed to load image: ${item.image}`)}
//       />
//       <Text style={styles.productTitle} numberOfLines={1}>
//         {item.title}
//       </Text>
//       <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
//     </TouchableOpacity>
//   );

//   const renderProductDetails = () => {
//     if (!selectedProduct) return null;

//     return (
//       <View style={styles.detailsContainer}>
//         <ScrollView style={styles.productDetailsContainer}>
//           <TouchableOpacity
//             onPress={() => setSelectedProduct(null)}
//             style={styles.backButton}
//           >
//             <Text style={styles.backArrow}>← Back</Text>
//           </TouchableOpacity>
//           <Image
//             source={{ uri: selectedProduct.image }}
//             style={styles.productDetailsImage}
//           />
//           <Text style={styles.productDetailsTitle}>{selectedProduct.title}</Text>
//           <Text style={styles.productDetailsPrice}>
//             ₹{selectedProduct.price.toFixed(2)}
//           </Text>
//           <Text style={styles.productDetailsDescription}>
//             {selectedProduct.description}
//           </Text>
//           <Text style={styles.productDetailsSeller}>
//             Sold by: {selectedProduct.seller}
//           </Text>
//           <Text style={styles.productDetailsSize}>Size: Free Size</Text>
//           <TouchableOpacity
//             style={styles.arButton}
//             onPress={() =>
//               navigation.navigate('ARView', { product: selectedProduct })
//             }
//           >
//             <Text style={styles.arButtonText}>View in AR</Text>
//           </TouchableOpacity>
//         </ScrollView>
//         <View style={styles.actionButtonsContainer}>
//           <TouchableOpacity
//             style={styles.addToCartButton}
//             onPress={() => addToCart(selectedProduct)}
//           >
//             <Text style={styles.addToCartText}>Add to Cart</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.buyNowButton}
//             onPress={() => navigation.navigate('Payment')}
//           >
//             <Text style={styles.buyNowText}>Buy Now</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {!selectedProduct && (
//         <>
//           <View style={styles.locationContainer}>
//             <TouchableOpacity onPress={() => setModalVisible(true)}>
//               <Text style={styles.locationText}>
//                 Delivering to {location} ▼
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <Modal
//             visible={isModalVisible}
//             transparent
//             animationType="slide"
//             onRequestClose={() => setModalVisible(false)}
//           >
//             <View style={styles.modalContainer}>
//               <View style={styles.modalContent}>
//                 <Text style={styles.modalTitle}>Enter New Location</Text>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter location"
//                   onChangeText={(text) => setLocation(text)}
//                   defaultValue={location}
//                 />
//                 <TouchableOpacity
//                   onPress={() => setModalVisible(false)}
//                   style={styles.saveButton}
//                 >
//                   <Text style={styles.saveButtonText}>Save</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Modal>
//           <FlatList
//             data={products}
//             renderItem={renderProductCard}
//             keyExtractor={(item) => item.id.toString()}
//             contentContainerStyle={styles.productList}
//             numColumns={2}
//             columnWrapperStyle={styles.row}
//           />
//         </>
//       )}
//       {selectedProduct && renderProductDetails()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   // Your styles remain the same

//     container: { flex: 1, backgroundColor: '#fff' },
//   locationContainer: {
//     padding: 12,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   locationText: { fontSize: 16, fontWeight: '500', color: '#333' },
//   productList: { paddingHorizontal: 8, paddingTop: 8 },
//   row: { justifyContent: 'space-between' },
//   productCard: {
//     flex: 1,
//     margin: 8,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//   },
//   productImage: { height: 120, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
//   productTitle: { padding: 8, fontSize: 14, fontWeight: '500' },
//   productPrice: { padding: 8, fontSize: 16, fontWeight: 'bold', color: '#007AFF' },
//   detailsContainer: { flex: 1 },
//   productDetailsContainer: { padding: 16, flex: 1 },
//   productDetailsImage: { width: '100%', height: 200, borderRadius: 8 },
//   productDetailsTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 8 },
//   productDetailsPrice: { fontSize: 18, fontWeight: 'bold', color: '#007AFF' },
//   productDetailsDescription: { fontSize: 14, marginVertical: 8 },
//   productDetailsSeller: { fontSize: 14, marginVertical: 4 },
//   productDetailsSize: { fontSize: 14, marginVertical: 4 },
//   customerReviews: { fontSize: 16, marginTop: 12 },
//   actionButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//     padding: 12,
//   },
//   addToCartButton: {
//     flex: 1,
//     backgroundColor: '#007AFF',
//     marginRight: 8,
//     padding: 12,
//     borderRadius: 8,
//   },
//   buyNowButton: {
//     flex: 1,
//     backgroundColor: 'green',
//     padding: 12,
//     borderRadius: 8,
//   },
//   addToCartText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   buyNowText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   backButton: { marginBottom: 8 },
//   backArrow: { fontSize: 16, color: '#007AFF' },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: { backgroundColor: '#fff', padding: 16, borderRadius: 8, width: '80%' },
//   modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
//   input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 8, marginBottom: 16 },
//   saveButton: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8 },
//   saveButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   arButtonContainer: { marginTop: 8, padding: 12 },
//   arButton: { backgroundColor: '#FF5733', padding: 12, borderRadius: 8 },
//   arButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
// });




// export default Accessories;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   Image,
//   Modal,
//   TextInput,
//   ScrollView,
//   Alert
// } from 'react-native';
// import { useCart } from './CartContext'; // Import CartContext hook

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
//   description: string;
//   seller: string;
//   quantity?: number; // Optional property
// }



// const Accessories = ({ navigation }: any) => {
//   const [location, setLocation] = useState('Kalyan - 421201');
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const { cart, addToCart } = useCart(); // Using CartContext for cart actions
// // Accessories.tsx
// const addToCart = (product: Product) => {
//   const updatedProduct = { ...product, quantity: 1 }; // Default quantity to 1
//   addToCart(updatedProduct);
// };

//   const products: Product[] = [
//     // Product data...

//         {
//       id: 1,
//       title: 'Rolex Oyster Perpetual',
//       image: 'https://via.placeholder.com/150/0000FF/808080?text=Rolex',
//       price: 12000.0,
//       description: 'A timeless classic with unmatched precision.',
//       seller: 'Rolex Official Store',
//     },
//     {
//       id: 2,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 3,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 4,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 5,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 6,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
    
//     {
//       id: 7,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 8,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 9,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 10,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },

//   ];

//   const renderProductCard = ({ item }: { item: Product }) => (
//     <TouchableOpacity
//       style={styles.productCard}
//       onPress={() => setSelectedProduct(item)}
//     >
//       <Image
//         source={{ uri: item.image }}
//         style={styles.productImage}
//         onError={() => console.log(`Failed to load image: ${item.image}`)}
//       />
//       <Text style={styles.productTitle} numberOfLines={1}>
//         {item.title}
//       </Text>
//       <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
//       <TouchableOpacity
//         style={styles.arButton}
//         onPress={() =>
//           navigation.navigate('ARView', { product: selectedProduct })
//         }
//       >
//         <Text style={styles.arButtonText}>View in AR</Text>
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   const renderProductDetails = () => {
//     if (!selectedProduct) return null;

//     return (
//       <View style={styles.detailsContainer}>
//         <ScrollView style={styles.productDetailsContainer}>
//           <TouchableOpacity
//             onPress={() => setSelectedProduct(null)}
//             style={styles.backButton}
//           >
//             <Text style={styles.backArrow}>← Back</Text>
//           </TouchableOpacity>
//           <Image
//             source={{ uri: selectedProduct.image }}
//             style={styles.productDetailsImage}
//           />
//           <Text style={styles.productDetailsTitle}>{selectedProduct.title}</Text>
//           <Text style={styles.productDetailsPrice}>
//             ₹{selectedProduct.price.toFixed(2)}
//           </Text>
//           <Text style={styles.productDetailsDescription}>
//             {selectedProduct.description}
//           </Text>
//           <Text style={styles.productDetailsSeller}>
//             Sold by: {selectedProduct.seller}
//           </Text>
//           <Text style={styles.productDetailsSize}>Size: Free Size</Text>
//         </ScrollView>
//         <View style={styles.actionButtonsContainer}>
//           <TouchableOpacity
//             style={styles.addToCartButton}
//             onPress={() => addToCart(selectedProduct)}
//           >
//             <Text style={styles.addToCartText}>Add to Cart</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.buyNowButton}
//             onPress={() => navigation.navigate('Payment')}
//           >
//             <Text style={styles.buyNowText}>Buy Now</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {!selectedProduct && (
//         <>
//           <View style={styles.locationContainer}>
//             <TouchableOpacity onPress={() => setModalVisible(true)}>
//               <Text style={styles.locationText}>
//                 Delivering to {location} ▼
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <Modal
//             visible={isModalVisible}
//             transparent
//             animationType="slide"
//             onRequestClose={() => setModalVisible(false)}
//           >
//             <View style={styles.modalContainer}>
//               <View style={styles.modalContent}>
//                 <Text style={styles.modalTitle}>Enter New Location</Text>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter location"
//                   onChangeText={(text) => setLocation(text)}
//                   defaultValue={location}
//                 />
//                 <TouchableOpacity
//                   onPress={() => setModalVisible(false)}
//                   style={styles.saveButton}
//                 >
//                   <Text style={styles.saveButtonText}>Save</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Modal>
//           <FlatList
//             data={products}
//             renderItem={renderProductCard}
//             keyExtractor={(item) => item.id.toString()}
//             contentContainerStyle={styles.productList}
//             numColumns={2}
//             columnWrapperStyle={styles.row}
//           />
//         </>
//       )}
//       {selectedProduct && renderProductDetails()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   locationContainer: {
//     padding: 12,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   locationText: { fontSize: 16, fontWeight: '500', color: '#333' },
//   productList: { paddingHorizontal: 8, paddingTop: 8 },
//   row: { justifyContent: 'space-between' },
//   productCard: {
//     flex: 1,
//     margin: 8,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//   },
//   productImage: { height: 120, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
//   productTitle: { padding: 8, fontSize: 14, fontWeight: '500' },
//   productPrice: { padding: 8, fontSize: 16, fontWeight: 'bold', color: '#007AFF' },
//   detailsContainer: { flex: 1 },
//   productDetailsContainer: { padding: 16, flex: 1 },
//   productDetailsImage: { width: '100%', height: 200, borderRadius: 8 },
//   productDetailsTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 8 },
//   productDetailsPrice: { fontSize: 18, fontWeight: 'bold', color: '#007AFF' },
//   productDetailsDescription: { fontSize: 14, marginVertical: 8 },
//   productDetailsSeller: { fontSize: 14, marginVertical: 4 },
//   productDetailsSize: { fontSize: 14, marginVertical: 4 },
//   actionButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//     padding: 12,
//   },
//   addToCartButton: {
//     flex: 1,
//     backgroundColor: '#007AFF',
//     marginRight: 8,
//     padding: 12,
//     borderRadius: 8,
//   },
//   buyNowButton: {
//     flex: 1,
//     backgroundColor: 'green',
//     padding: 12,
//     borderRadius: 8,
//   },
//   addToCartText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   buyNowText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   backButton: { marginBottom: 8 },
//   backArrow: { fontSize: 16, color: '#007AFF' },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: { backgroundColor: '#fff', padding: 16, borderRadius: 8, width: '80%' },
//   modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
//   input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 8, marginBottom: 16 },
//   saveButton: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8 },
//   saveButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   arButton: { backgroundColor: '#FF5733', padding: 12, borderRadius: 8 },
//   arButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
// });

// export default Accessories;



import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Modal,
  TextInput,
  ScrollView
} from 'react-native';
import { Linking } from 'react-native';

import { useCart } from './CartContext'; // Import CartContext hook

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  seller: string;
  quantity?: number; // Optional property
}

const Accessories = ({ navigation }: any) => {
  const [location, setLocation] = useState('Kalyan - 421201');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { cart, addToCart } = useCart(); // Using CartContext for cart actions

  const handleAddToCart = (product: Product) => {
    const updatedProduct = { ...product, quantity: 1 }; // Default quantity to 1
    addToCart(updatedProduct);
  };

  const products: Product[] = [

            {
      id: 1,
      title: 'Rolex Oyster Perpetual',
      image: 'https://via.placeholder.com/150/0000FF/808080?text=Rolex',
      price: 12000.0,
      description: 'A timeless classic with unmatched precision.',
      seller: 'Rolex Official Store',
    },
    {
      id: 2,
      title: 'Casio G-Shock',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
      price: 8000.0,
      description: 'Rugged design and durable performance.',
      seller: 'Casio Authorized Dealer',
    },
    {
      id: 3,
      title: 'Casio G-Shock',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
      price: 8000.0,
      description: 'Rugged design and durable performance.',
      seller: 'Casio Authorized Dealer',
    },
    {
      id: 4,
      title: 'Casio G-Shock',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
      price: 8000.0,
      description: 'Rugged design and durable performance.',
      seller: 'Casio Authorized Dealer',
    },
    {
      id: 5,
      title: 'Casio G-Shock',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
      price: 8000.0,
      description: 'Rugged design and durable performance.',
      seller: 'Casio Authorized Dealer',
    },
    {
      id: 6,
      title: 'Casio G-Shock',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
      price: 8000.0,
      description: 'Rugged design and durable performance.',
      seller: 'Casio Authorized Dealer',
    },
    
    {
      id: 7,
      title: 'Casio G-Shock',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
      price: 8000.0,
      description: 'Rugged design and durable performance.',
      seller: 'Casio Authorized Dealer',
    },
    {
      id: 8,
      title: 'Casio G-Shock',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
      price: 8000.0,
      description: 'Rugged design and durable performance.',
      seller: 'Casio Authorized Dealer',
    },
    {
      id: 9,
      title: 'Casio G-Shock',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
      price: 8000.0,
      description: 'Rugged design and durable performance.',
      seller: 'Casio Authorized Dealer',
    },
    {
      id: 10,
      title: 'Casio G-Shock',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
      price: 8000.0,
      description: 'Rugged design and durable performance.',
      seller: 'Casio Authorized Dealer',
    },
    // Product data...
  ];

  const renderProductCard = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => setSelectedProduct(item)}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        onError={() => console.log(`Failed to load image: ${item.image}`)}
      />
      <Text style={styles.productTitle} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
     
    </TouchableOpacity>
  );

  const renderProductDetails = () => {
    if (!selectedProduct) return null;
  
    const arLink = `https://wanna-watches.ar.wanna.fashion/?modelid=IW371611-O&wristmeasurement=true&showhint=wristmeasurement&startwithid=IW371611-O&mode=vto`;
  
    return (
      <View style={styles.detailsContainer}>
        <ScrollView style={styles.productDetailsContainer}>
          <TouchableOpacity
            onPress={() => setSelectedProduct(null)}
            style={styles.backButton}
          >
            <Text style={styles.backArrow}>← Back</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: selectedProduct.image }}
            style={styles.productDetailsImage}
          />
          <Text style={styles.productDetailsTitle}>{selectedProduct.title}</Text>
          <Text style={styles.productDetailsPrice}>
            ₹{selectedProduct.price.toFixed(2)}
          </Text>
          <Text style={styles.productDetailsDescription}>
            {selectedProduct.description}
          </Text>
          <Text style={styles.productDetailsSeller}>
            Sold by: {selectedProduct.seller}
          </Text>
          <Text style={styles.productDetailsSize}>Size: Free Size</Text>
  
          {/* AR Integration Button */}
          <TouchableOpacity
            style={styles.arButton}
            onPress={() => Linking.openURL(arLink)}
          >
            <Text style={styles.arButtonText}>View in AR</Text>
          </TouchableOpacity>
        </ScrollView>
  
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => handleAddToCart(selectedProduct)}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.buyNowButton}
            onPress={() => navigation.navigate('Payment')}
          > */}

<TouchableOpacity
            style={styles.buyNowButton}
            onPress={() =>
              navigation.navigate('Payment', { product: selectedProduct })
            }
          >
            <Text style={styles.buyNowText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  

  return (
    <View style={styles.container}>
      {!selectedProduct && (
        <>
          <View style={styles.locationContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.locationText}>
                Delivering to {location} ▼
              </Text>
            </TouchableOpacity>
          </View>
          <Modal
            visible={isModalVisible}
            transparent
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Enter New Location</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter location"
                  onChangeText={(text) => setLocation(text)}
                  defaultValue={location}
                />
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={styles.saveButton}
                >
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <FlatList
            data={products}
            renderItem={renderProductCard}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.productList}
            numColumns={2}
            columnWrapperStyle={styles.row}
          />
        </>
      )}
      {selectedProduct && renderProductDetails()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  locationContainer: {
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  locationText: { fontSize: 16, fontWeight: '500', color: '#333' },
  productList: { paddingHorizontal: 8, paddingTop: 8 },
  row: { justifyContent: 'space-between' },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  productImage: { height: 120, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  productTitle: { padding: 8, fontSize: 14, fontWeight: '500' },
  productPrice: { padding: 8, fontSize: 16, fontWeight: 'bold', color: '#007AFF' },
  detailsContainer: { flex: 1 },
  productDetailsContainer: { padding: 16, flex: 1 },
  productDetailsImage: { width: '100%', height: 200, borderRadius: 8 },
  productDetailsTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 8 },
  productDetailsPrice: { fontSize: 18, fontWeight: 'bold', color: '#007AFF' },
  productDetailsDescription: { fontSize: 14, marginVertical: 8 },
  productDetailsSeller: { fontSize: 14, marginVertical: 4 },
  productDetailsSize: { fontSize: 14, marginVertical: 4 },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 12,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    marginRight: 8,
    padding: 12,
    borderRadius: 8,
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
  },
  addToCartText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  buyNowText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  backButton: { marginBottom: 8 },
  backArrow: { fontSize: 16, color: '#007AFF' },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: { backgroundColor: '#fff', padding: 16, borderRadius: 8, width: '80%' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 8, marginBottom: 16 },
  saveButton: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8 },
  saveButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  arButton: { backgroundColor: '#FF5733', padding: 12, borderRadius: 8 },
  arButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});

export default Accessories;
