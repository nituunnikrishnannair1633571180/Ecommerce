// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';

// const ProductScreen = () => {
//   const navigation: any = useNavigation(); // Use any to suppress type errors

//   const handleLogout = async () => {
//     await AsyncStorage.removeItem('isLoggedIn' as any); // Use any to suppress type errors
//     navigation.navigate('SignIn');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to TryTastic</Text>
//       <Button title="Logout" color="#7D3C98" onPress={handleLogout} />
//       {/* Display products here */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   title: {
//     fontSize: 24,
//     color: '#7D3C98',
//     marginBottom: 20,
//   },
// });

// export default ProductScreen;





// src/types.ts

// export type Category = {
//   id: number;
//   name: string;
//   icon: string;
// };




// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// type Category = {
//   id: number;
//   name: string;
//   icon: string;
// };

// const ProductScreen: React.FC = () => {
//   const categories: Category[] = [
//     { id: 1, name: 'Clothes', icon: 'tshirt-crew-outline' },
//     { id: 2, name: 'Electronics', icon: 'laptop' },
//     { id: 3, name: 'Shoes', icon: 'shoe-sneaker' },
//     { id: 4, name: 'Watch', icon: 'watch' },
//   ];

//   const renderCategory = ({ item }: { item: Category }) => (
//     <View style={styles.categoryContainer}>
//       <Icon name={item.icon} size={40} color="#4B0082" /> {/* Indigo Color */}
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Top Bar */}
//       <View style={styles.topBar}>
//         <Text style={styles.locationText}>Location</Text>
//         <Text style={styles.locationValue}>New York, USA</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity
//           style={styles.searchButton}
//           accessibilityLabel="Search"
//         >
//           <Icon name="magnify" size={20} color="#FFF" />
//         </TouchableOpacity>
//       </View>

//       {/* Carousel */}
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={styles.carousel}
//       >
//         <View style={styles.carouselItem}>
//           <Text style={styles.carouselTitle}>Limited Time!</Text>
//           <Text style={styles.carouselSubtitle}>
//             Get Special Offer Up to 40%
//           </Text>
//           <TouchableOpacity
//             style={styles.claimButton}
//             accessibilityLabel="Claim Offer"
//           >
//             <Text style={styles.claimText}>Claim</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>

//       {/* Categories */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Category</Text>
//         <TouchableOpacity accessibilityLabel="See All Categories">
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Flash Sale */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Flash Sale</Text>
//         <TouchableOpacity accessibilityLabel="See All Flash Sale">
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.flashSaleContainer}>
//         <Text style={styles.flashSaleTimer}>Closing in: 02:12:56</Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   topBar: {
//     marginBottom: 15,
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   locationValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//     backgroundColor: '#4B0082',
//     padding: 10,
//     borderRadius: 8,
//   },
//   carousel: {
//     marginBottom: 20,
//   },
//   carouselItem: {
//     width: 300,
//     padding: 15,
//     backgroundColor: '#4B0082',
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   carouselTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 5,
//   },
//   carouselSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//     marginBottom: 15,
//   },
//   claimButton: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   claimText: {
//     color: '#4B0082',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#4B0082',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   flashSaleContainer: {
//     marginBottom: 20,
//   },
//   flashSaleTimer: {
//     fontSize: 14,
//     color: '#4B0082',
//   },
// });

// export default ProductScreen;

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Geolocation from 'react-native-geolocation-service';

// // Category Type
// type Category = {
//   id: number;
//   name: string;
//   icon: string;
// };

// const ProductScreen: React.FC = () => {
//   const [location, setLocation] = useState('New York, USA');
  
//   // Sample categories with icons
//   const categories: Category[] = [
//     { id: 1, name: 'Clothes', icon: 'tshirt-crew-outline' },
//     { id: 2, name: 'Electronics', icon: 'laptop' },
//     { id: 3, name: 'Shoes', icon: 'shoe-sneaker' },
//     { id: 4, name: 'Watch', icon: 'watch' },
//   ];

//   // Flash cards for promotional offers
//   const flashOffers = [
//     { id: 1, title: 'Limited Time!', subtitle: 'Get Special Offer Up to 40%' },
//     { id: 2, title: 'Flash Sale!', subtitle: 'Buy 1 Get 1 Free on Shoes' },
//     { id: 3, title: 'Mega Deal!', subtitle: '50% Off on Electronics' },
//   ];

//   useEffect(() => {
//     // Fetching device location when component mounts
//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         // You can use an API or reverse geocoding service to convert coordinates to a readable location
//         setLocation(`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`);
//       },
//       error => {
//         console.error('Error getting location:', error);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   }, []);

//   const saveLocation = (newLocation: string) => {
//     setLocation(newLocation);
//     // Optionally save the location to a database or other storage
//   };

//   const renderCategory = ({ item }: { item: Category }) => (
//     <View style={styles.categoryContainer}>
//       <Icon name={item.icon} size={40} color="#4B0082" />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashOffer = ({ item }: { item: { title: string; subtitle: string } }) => (
//     <View style={styles.flashCard}>
//       <Text style={styles.flashCardTitle}>{item.title}</Text>
//       <Text style={styles.flashCardSubtitle}>{item.subtitle}</Text>
//       <TouchableOpacity style={styles.claimButton}>
//         <Text style={styles.claimText}>Claim</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Top Bar - Location */}
//       <View style={styles.topBar}>
//         <Text style={styles.locationText}>Location</Text>
//         <Text style={styles.locationValue}>{location}</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           <Icon name="magnify" size={20} color="#FFF" />
//         </TouchableOpacity>
//       </View>

//       {/* Carousel of Flash Offers */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
//         {flashOffers.map((offer) => (
//           <View key={offer.id} style={styles.carouselItem}>
//             <Text style={styles.carouselTitle}>{offer.title}</Text>
//             <Text style={styles.carouselSubtitle}>{offer.subtitle}</Text>
//             <TouchableOpacity style={styles.claimButton}>
//               <Text style={styles.claimText}>Claim</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Categories Section */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Flash Sale */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Flash Sale</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={flashOffers}
//         horizontal
//         renderItem={renderFlashOffer}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   topBar: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   locationValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//     backgroundColor: '#4B0082',
//     padding: 10,
//     borderRadius: 8,
//   },
//   carousel: {
//     marginBottom: 20,
//   },
//   carouselItem: {
//     width: 250,
//     padding: 15,
//     backgroundColor: '#4B0082',
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   carouselTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 5,
//   },
//   carouselSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//     marginBottom: 15,
//   },
//   claimButton: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   claimText: {
//     color: '#4B0082',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#4B0082',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   flashCard: {
//     width: 200,
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     marginRight: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   flashCardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//     marginBottom: 5,
//   },
//   flashCardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 15,
//   },
// });

// export default ProductScreen;





// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { getLocations } from '../databases/Database'; // Fetch the saved locations from SQLite

// // Category Type
// type Category = {
//   id: number;
//   name: string;
//   icon: string;
// };

// const ProductScreen: React.FC = () => {
//   const [location, setLocation] = useState<{ city: string; pincode: string }>({
//     city: 'Loading...',
//     pincode: '000000',
//   });

//   // Sample categories with icons
//   const categories: Category[] = [
//     { id: 1, name: 'Clothes', icon: 'tshirt-crew-outline' },
//     { id: 2, name: 'Electronics', icon: 'laptop' },
//     { id: 3, name: 'Shoes', icon: 'shoe-sneaker' },
//     { id: 4, name: 'Watch', icon: 'watch' },
//   ];

//   // Flash cards for promotional offers
//   const flashOffers = [
//     { id: 1, title: 'Limited Time!', subtitle: 'Get Special Offer Up to 40%' },
//     { id: 2, title: 'Flash Sale!', subtitle: 'Buy 1 Get 1 Free on Shoes' },
//     { id: 3, title: 'Mega Deal!', subtitle: '50% Off on Electronics' },
//   ];

//   useEffect(() => {
//     // Fetch the latest location from the database
//     const fetchLocation = async () => {
//       try {
//         const result = await getLocations(); // Get all locations from the SQLite database
//         if (result.rows.length > 0) {
//           const latestLocation = result.rows.item(result.rows.length - 1); // Get the most recent entry
//           setLocation({ city: latestLocation.city, pincode: latestLocation.pincode });
//         } else {
//           setLocation({ city: 'No City', pincode: '000000' }); // Default if no data
//         }
//       } catch (error) {
//         console.error('Error fetching location:', error);
//       }
//     };

//     fetchLocation();
//   }, []);

//   const renderCategory = ({ item }: { item: Category }) => (
//     <View style={styles.categoryContainer}>
//       <Icon name={item.icon} size={40} color="#4B0082" />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashOffer = ({ item }: { item: { title: string; subtitle: string } }) => (
//     <View style={styles.flashCard}>
//       <Text style={styles.flashCardTitle}>{item.title}</Text>
//       <Text style={styles.flashCardSubtitle}>{item.subtitle}</Text>
//       <TouchableOpacity style={styles.claimButton}>
//         <Text style={styles.claimText}>Claim</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Top Bar - Location */}
//       <View style={styles.topBar}>
//         <Text style={styles.locationText}>Location</Text>
//         <Text style={styles.locationValue}>
//           {location.city}, {location.pincode}
//         </Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           <Icon name="magnify" size={20} color="#FFF" />
//         </TouchableOpacity>
//       </View>

//       {/* Carousel of Flash Offers */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
//         {flashOffers.map((offer) => (
//           <View key={offer.id} style={styles.carouselItem}>
//             <Text style={styles.carouselTitle}>{offer.title}</Text>
//             <Text style={styles.carouselSubtitle}>{offer.subtitle}</Text>
//             <TouchableOpacity style={styles.claimButton}>
//               <Text style={styles.claimText}>Claim</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Categories Section */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Flash Sale */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Flash Sale</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={flashOffers}
//         horizontal
//         renderItem={renderFlashOffer}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   topBar: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   locationValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//     backgroundColor: '#4B0082',
//     padding: 10,
//     borderRadius: 8,
//   },
//   carousel: {
//     marginBottom: 20,
//   },
//   carouselItem: {
//     width: 250,
//     padding: 15,
//     backgroundColor: '#4B0082',
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   carouselTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 5,
//   },
//   carouselSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//     marginBottom: 15,
//   },
//   claimButton: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   claimText: {
//     color: '#4B0082',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#4B0082',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   flashCard: {
//     width: 200,
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     marginRight: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   flashCardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//     marginBottom: 5,
//   },
//   flashCardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 15,
//   },
// });

// export default ProductScreen;





// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { getLocations } from '../databases/Database'; // Fetch the saved locations from SQLite

// type Category = {
//   id: number;
//   name: string;
//   icon: string;
// };

// const ProductScreen: React.FC = () => {
//   const [location, setLocation] = useState<{ city: string; pincode: string }>({
//     city: 'Loading...',
//     pincode: '000000',
//   });

//   // Sample categories with icons
//   const categories: Category[] = [
//     { id: 1, name: 'Clothes', icon: 'tshirt-crew-outline' },
//     { id: 2, name: 'Electronics', icon: 'laptop' },
//     { id: 3, name: 'Shoes', icon: 'shoe-sneaker' },
//     { id: 4, name: 'Watch', icon: 'watch' },
//   ];

//   // Flash cards for promotional offers
//   const flashOffers = [
//     { id: 1, title: 'Limited Time!', subtitle: 'Get Special Offer Up to 40%' },
//     { id: 2, title: 'Flash Sale!', subtitle: 'Buy 1 Get 1 Free on Shoes' },
//     { id: 3, title: 'Mega Deal!', subtitle: '50% Off on Electronics' },
//   ];

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         const result = await getLocations(); 
//         if (result.rows.length > 0) {
//           const latestLocation = result.rows.item(result.rows.length - 1);
//           setLocation({ city: latestLocation.city, pincode: latestLocation.pincode });
//         } else {
//           setLocation({ city: 'No City', pincode: '000000' });
//         }
//       } catch (error) {
//         console.error('Error fetching location:', error);
//       }
//     };

//     fetchLocation();
//   }, []);

//   const renderCategory = ({ item }: { item: Category }) => (
//     <View style={styles.categoryContainer}>
//       <Icon name={item.icon} size={40} color="#4B0082" />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashOffer = ({ item }: { item: { title: string; subtitle: string } }) => (
//     <View style={styles.flashCard}>
//       <Text style={styles.flashCardTitle}>{item.title}</Text>
//       <Text style={styles.flashCardSubtitle}>{item.subtitle}</Text>
//       <TouchableOpacity style={styles.claimButton}>
//         <Text style={styles.claimText}>Claim</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Location Header */}
//       <View style={styles.topBar}>
//         <Text style={styles.locationText}>Location</Text>
//         <Text style={styles.locationValue}>{location.city}, {location.pincode}</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           <Icon name="magnify" size={20} color="#FFF" />
//         </TouchableOpacity>
//       </View>

//       {/* Flash Offers Carousel */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
//         {flashOffers.map((offer) => (
//           <View key={offer.id} style={styles.carouselItem}>
//             <Text style={styles.carouselTitle}>{offer.title}</Text>
//             <Text style={styles.carouselSubtitle}>{offer.subtitle}</Text>
//             <TouchableOpacity style={styles.claimButton}>
//               <Text style={styles.claimText}>Claim</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Categories Section */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Flash Sale */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Flash Sale</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={flashOffers}
//         horizontal
//         renderItem={renderFlashOffer}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   topBar: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   locationValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//     backgroundColor: '#4B0082',
//     padding: 10,
//     borderRadius: 8,
//   },
//   carousel: {
//     marginBottom: 20,
//   },
//   carouselItem: {
//     width: 250,
//     padding: 15,
//     backgroundColor: '#4B0082',
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   carouselTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 5,
//   },
//   carouselSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//     marginBottom: 15,
//   },
//   claimButton: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   claimText: {
//     color: '#4B0082',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#4B0082',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   flashCard: {
//     width: 200,
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     marginRight: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   flashCardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//     marginBottom: 5,
//   },
//   flashCardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 15,
//   },
// });

// export default ProductScreen;




// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// type Category = {
//   id: number;
//   name: string;
//   icon: string;
// };

// const ProductScreen: React.FC = () => {
//   const [location, setLocation] = useState<{ city: string; pincode: string }>({
//     city: 'Dombivli',
//     pincode: '421201',
//   });

//   // Sample categories with icons
//   const categories: Category[] = [
//     { id: 1, name: 'Clothes', icon: 'tshirt-crew-outline' },
//     { id: 2, name: 'Electronics', icon: 'laptop' },
//     { id: 3, name: 'Shoes', icon: 'shoe-sneaker' },
//     { id: 4, name: 'Watch', icon: 'watch' },
//   ];

//   // Flash cards for promotional offers
//   const flashOffers = [
//     { id: 1, title: 'Limited Time!', subtitle: 'Get Special Offer Up to 40%' },
//     { id: 2, title: 'Flash Sale!', subtitle: 'Buy 1 Get 1 Free on Shoes' },
//     { id: 3, title: 'Mega Deal!', subtitle: '50% Off on Electronics' },
//   ];

//   useEffect(() => {
//     // Hardcoded city and pincode
//     setLocation({ city: 'Dombivli', pincode: '421201' });
//   }, []);

//   const renderCategory = ({ item }: { item: Category }) => (
//     <View style={styles.categoryContainer}>
//       <Icon name={item.icon} size={40} color="#4B0082" />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashOffer = ({ item }: { item: { title: string; subtitle: string } }) => (
//     <View style={styles.flashCard}>
//       <Text style={styles.flashCardTitle}>{item.title}</Text>
//       <Text style={styles.flashCardSubtitle}>{item.subtitle}</Text>
//       <TouchableOpacity style={styles.claimButton}>
//         <Text style={styles.claimText}>Claim</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Location Header */}
//       <View style={styles.topBar}>
//         <Text style={styles.locationText}>Location</Text>
//         <Text style={styles.locationValue}>{location.city}, {location.pincode}</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           <Icon name="magnify" size={20} color="#FFF" />
//         </TouchableOpacity>
//       </View>

//       {/* Flash Offers Carousel */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
//         {flashOffers.map((offer) => (
//           <View key={offer.id} style={styles.carouselItem}>
//             <Text style={styles.carouselTitle}>{offer.title}</Text>
//             <Text style={styles.carouselSubtitle}>{offer.subtitle}</Text>
//             <TouchableOpacity style={styles.claimButton}>
//               <Text style={styles.claimText}>Claim</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Categories Section */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Flash Sale */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Flash Sale</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={flashOffers}
//         horizontal
//         renderItem={renderFlashOffer}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   topBar: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   locationValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//     backgroundColor: '#4B0082',
//     padding: 10,
//     borderRadius: 8,
//   },
//   carousel: {
//     marginBottom: 20,
//   },
//   carouselItem: {
//     width: 250,
//     padding: 15,
//     backgroundColor: '#4B0082',
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   carouselTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 5,
//   },
//   carouselSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//     marginBottom: 15,
//   },
//   claimButton: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   claimText: {
//     color: '#4B0082',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#4B0082',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   flashCard: {
//     width: 200,
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     marginRight: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   flashCardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//     marginBottom: 5,
//   },
//   flashCardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 15,
//   },
// });

// export default ProductScreen;




// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importing icons
// import { getLocations } from '../databases/Database'; // Fetch the saved locations from SQLite

// type Category = {
//   id: number;
//   name: string;
//   icon: string;
// };

// const ProductScreen: React.FC = () => {
//   const [location, setLocation] = useState<{ city: string; pincode: string }>({
//     city: 'Dombivli',
//     pincode: '421201',
//   });

//   // Sample categories with icons
//   const categories: Category[] = [
//     { id: 1, name: 'Clothes', icon: 'tshirt-crew-outline' },
//     { id: 2, name: 'Electronics', icon: 'laptop' },
//     { id: 3, name: 'Shoes', icon: 'shoe-sneaker' },
//     { id: 4, name: 'Watch', icon: 'watch' },
//   ];

//   // Flash cards for promotional offers
//   const flashOffers = [
//     { id: 1, title: 'Limited Time!', subtitle: 'Get Special Offer Up to 40%' },
//     { id: 2, title: 'Flash Sale!', subtitle: 'Buy 1 Get 1 Free on Shoes' },
//     { id: 3, title: 'Mega Deal!', subtitle: '50% Off on Electronics' },
//   ];

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         const result = await getLocations(); 
//         if (result.rows.length > 0) {
//           const latestLocation = result.rows.item(result.rows.length - 1);
//           setLocation({ city: latestLocation.city, pincode: latestLocation.pincode });
//         } else {
//           setLocation({ city: 'No City', pincode: '000000' });
//         }
//       } catch (error) {
//         console.error('Error fetching location:', error);
//       }
//     };

//     fetchLocation();
//   }, []);

//   const renderCategory = ({ item }: { item: Category }) => (
//     <View style={styles.categoryContainer}>
//       <Icon name={item.icon} size={40} color="#4B0082" />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashOffer = ({ item }: { item: { title: string; subtitle: string } }) => (
//     <View style={styles.flashCard}>
//       <Text style={styles.flashCardTitle}>{item.title}</Text>
//       <Text style={styles.flashCardSubtitle}>{item.subtitle}</Text>
//       <TouchableOpacity style={styles.claimButton}>
//         <Text style={styles.claimText}>Claim</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Location Header */}
//       <View style={styles.topBar}>
//         <Text style={styles.locationText}>Location</Text>
//         <Text style={styles.locationValue}>{location.city}, {location.pincode}</Text>
//       </View>

//             {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           <Icon name="magnify" size={20} color="#FFF" />
//         </TouchableOpacity>
//       </View>

//       {/* Flash Offers Carousel */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
//         {flashOffers.map((offer) => (
//           <View key={offer.id} style={styles.carouselItem}>
//             <Text style={styles.carouselTitle}>{offer.title}</Text>
//             <Text style={styles.carouselSubtitle}>{offer.subtitle}</Text>
//             <TouchableOpacity style={styles.claimButton}>
//               <Text style={styles.claimText}>Claim</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Categories Section */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Flash Sale */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Flash Sale</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={flashOffers}
//         horizontal
//         renderItem={renderFlashOffer}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   topBar: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   locationValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//     backgroundColor: '#4B0082',
//     padding: 10,
//     borderRadius: 8,
//   },
//   carousel: {
//     marginBottom: 20,
//   },
//   carouselItem: {
//     width: 250,
//     padding: 15,
//     backgroundColor: '#4B0082',
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   carouselTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 5,
//   },
//   carouselSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//     marginBottom: 15,
//   },
//   claimButton: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   claimText: {
//     color: '#4B0082',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#4B0082',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   flashCard: {
//     width: 200,
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     marginRight: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   flashCardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//     marginBottom: 5,
//   },
//   flashCardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 15,
//   },
// });

// export default ProductScreen;




// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Use FontAwesome instead of MaterialCommunityIcons
// import { getLocations } from '../databases/Database'; // Fetch the saved locations from SQLite

// type Category = {
//   id: number;
//   name: string;
//   icon: string;
// };

// const ProductScreen: React.FC = () => {
//   const [location, setLocation] = useState<{ city: string; pincode: string }>({
//     city: 'Dombivli',  // Using provided city
//     pincode: '421201',  // Using provided pincode
//   });

//   // Sample categories with icons
//   const categories: Category[] = [
//     { id: 1, name: 'Clothes', icon: 'tshirt' },  // Use FontAwesome icons
//     { id: 2, name: 'Electronics', icon: 'laptop' },
//     { id: 3, name: 'Shoes', icon: 'shoe-prints' },  // Using FontAwesome's 'shoe-prints' icon
//     { id: 4, name: 'Watch', icon: 'watch' },
//   ];

//   // Flash cards for promotional offers
//   const flashOffers = [
//     { id: 1, title: 'Limited Time!', subtitle: 'Get Special Offer Up to 40%' },
//     { id: 2, title: 'Flash Sale!', subtitle: 'Buy 1 Get 1 Free on Shoes' },
//     { id: 3, title: 'Mega Deal!', subtitle: '50% Off on Electronics' },
//   ];

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         const result = await getLocations(); 
//         if (result.rows.length > 0) {
//           const latestLocation = result.rows.item(result.rows.length - 1);
//           setLocation({ city: latestLocation.city, pincode: latestLocation.pincode });
//         } else {
//           setLocation({ city: 'No City', pincode: '000000' });
//         }
//       } catch (error) {
//         console.error('Error fetching location:', error);
//       }
//     };

//     fetchLocation();
//   }, []);

//   const renderCategory = ({ item }: { item: Category }) => (
//     <View style={styles.categoryContainer}>
//       <Icon name={item.icon} size={40} color="#4B0082" />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashOffer = ({ item }: { item: { title: string; subtitle: string } }) => (
//     <View style={styles.flashCard}>
//       <Text style={styles.flashCardTitle}>{item.title}</Text>
//       <Text style={styles.flashCardSubtitle}>{item.subtitle}</Text>
//       <TouchableOpacity style={styles.claimButton}>
//         <Text style={styles.claimText}>Claim</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Location Header */}
//       <View style={styles.topBar}>
//         <Text style={styles.locationText}>Location</Text>
//         <Text style={styles.locationValue}>{location.city}, {location.pincode}</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           <Icon name="search" size={20} color="#FFF" />  {/* Updated search icon */}
//         </TouchableOpacity>
//       </View>

//       {/* Flash Offers Carousel */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
//         {flashOffers.map((offer) => (
//           <View key={offer.id} style={styles.carouselItem}>
//             <Text style={styles.carouselTitle}>{offer.title}</Text>
//             <Text style={styles.carouselSubtitle}>{offer.subtitle}</Text>
//             <TouchableOpacity style={styles.claimButton}>
//               <Text style={styles.claimText}>Claim</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Categories Section */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Flash Sale */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Flash Sale</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={flashOffers}
//         horizontal
//         renderItem={renderFlashOffer}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   topBar: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   locationValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//     backgroundColor: '#4B0082',
//     padding: 10,
//     borderRadius: 8,
//   },
//   carousel: {
//     marginBottom: 20,
//   },
//   carouselItem: {
//     width: 250,
//     padding: 15,
//     backgroundColor: '#4B0082',
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   carouselTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 5,
//   },
//   carouselSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//     marginBottom: 15,
//   },
//   claimButton: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   claimText: {
//     color: '#4B0082',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#4B0082',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   flashCard: {
//     width: 200,
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     marginRight: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   flashCardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//     marginBottom: 5,
//   },
//   flashCardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 15,
//   },
// });

// export default ProductScreen;



// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather'; // Import Feather icons
// import { getLocations } from '../databases/Database'; // Fetch the saved locations from SQLite

// type Category = {
//   id: number;
//   name: string;
//   icon: string;
// };

// const ProductScreen: React.FC = () => {
//   const [location, setLocation] = useState<{ city: string; pincode: string }>({
//     city: 'Dombivli',
//     pincode: '421201',
//   });

//   // Sample categories with Feather icons
//   const categories: Category[] = [
//     { id: 1, name: 'Clothes', icon: 'shirt' },
//     { id: 2, name: 'Electronics', icon: 'laptop' },
//     { id: 3, name: 'Shoes', icon: 'zap' },  // Feather icon name for shoes
//     { id: 4, name: 'Watch', icon: 'watch' },
//   ];

//   // Flash cards for promotional offers
//   const flashOffers = [
//     { id: 1, title: 'Limited Time!', subtitle: 'Get Special Offer Up to 40%' },
//     { id: 2, title: 'Flash Sale!', subtitle: 'Buy 1 Get 1 Free on Shoes' },
//     { id: 3, title: 'Mega Deal!', subtitle: '50% Off on Electronics' },
//   ];

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         const result = await getLocations(); 
//         if (result.rows.length > 0) {
//           const latestLocation = result.rows.item(result.rows.length - 1);
//           setLocation({ city: latestLocation.city, pincode: latestLocation.pincode });
//         } else {
//           setLocation({ city: 'No City', pincode: '000000' });
//         }
//       } catch (error) {
//         console.error('Error fetching location:', error);
//       }
//     };

//     fetchLocation();
//   }, []);

//   const renderCategory = ({ item }: { item: Category }) => (
//     <View style={styles.categoryContainer}>
//       <Feather name={item.icon} size={40} color="#4B0082" />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashOffer = ({ item }: { item: { title: string; subtitle: string } }) => (
//     <View style={styles.flashCard}>
//       <Text style={styles.flashCardTitle}>{item.title}</Text>
//       <Text style={styles.flashCardSubtitle}>{item.subtitle}</Text>
//       <TouchableOpacity style={styles.claimButton}>
//         <Text style={styles.claimText}>Claim</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Location Header */}
//       <View style={styles.topBar}>
//         <Text style={styles.locationText}>Location</Text>
//         <Text style={styles.locationValue}>{location.city}, {location.pincode}</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           <Feather name="search" size={20} color="#FFF" />
//         </TouchableOpacity>
//       </View>

//       {/* Flash Offers Carousel */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
//         {flashOffers.map((offer) => (
//           <View key={offer.id} style={styles.carouselItem}>
//             <Text style={styles.carouselTitle}>{offer.title}</Text>
//             <Text style={styles.carouselSubtitle}>{offer.subtitle}</Text>
//             <TouchableOpacity style={styles.claimButton}>
//               <Text style={styles.claimText}>Claim</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Categories Section */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Flash Sale */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Flash Sale</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={flashOffers}
//         horizontal
//         renderItem={renderFlashOffer}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   topBar: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   locationValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//     backgroundColor: '#4B0082',
//     padding: 10,
//     borderRadius: 8,
//   },
//   carousel: {
//     marginBottom: 20,
//   },
//   carouselItem: {
//     width: 250,
//     padding: 15,
//     backgroundColor: '#4B0082',
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   carouselTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 5,
//   },
//   carouselSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//     marginBottom: 15,
//   },
//   claimButton: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   claimText: {
//     color: '#4B0082',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#4B0082',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   flashCard: {
//     width: 200,
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     marginRight: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   flashCardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//     marginBottom: 5,
//   },
//   flashCardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 15,
//   },
// });

// export default ProductScreen;




// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather'; // Import Feather icons
// import { getLocations } from '../databases/Database'; // Fetch the saved locations from SQLite

// type Category = {
//   id: number;
//   name: string;
//   icon: string;
// };

// const ProductScreen: React.FC = () => {
//   const [location, setLocation] = useState<{ city: string; pincode: string }>({
//     city: 'Dombivli',
//     pincode: '421201',
//   });

//   // Updated categories with meaningful Feather icons
//   const categories: Category[] = [
//     { id: 1, name: 'Clothes', icon: 'shopping-bag' }, // Clothes => Shopping Bag
//     { id: 2, name: 'Electronics', icon: 'monitor' },  // Electronics => Monitor
//     { id: 3, name: 'Shoes', icon: 'zap' },            // Shoes => Zap
//     { id: 4, name: 'Watch', icon: 'watch' },          // Watch => Watch
//   ];

//   // Flash cards for promotional offers
//   const flashOffers = [
//     { id: 1, title: 'Limited Time!', subtitle: 'Get Special Offer Up to 40%' },
//     { id: 2, title: 'Flash Sale!', subtitle: 'Buy 1 Get 1 Free on Shoes' },
//     { id: 3, title: 'Mega Deal!', subtitle: '50% Off on Electronics' },
//   ];

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         const result = await getLocations();
//         if (result.rows.length > 0) {
//           const latestLocation = result.rows.item(result.rows.length - 1);
//           setLocation({ city: latestLocation.city, pincode: latestLocation.pincode });
//         } else {
//           setLocation({ city: 'No City', pincode: '000000' });
//         }
//       } catch (error) {
//         console.error('Error fetching location:', error);
//       }
//     };

//     fetchLocation();
//   }, []);

//   const renderCategory = ({ item }: { item: Category }) => (
//     <View style={styles.categoryContainer}>
//       <Feather name={item.icon} size={40} color="#4B0082" />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashOffer = ({ item }: { item: { title: string; subtitle: string } }) => (
//     <View style={styles.flashCard}>
//       <Text style={styles.flashCardTitle}>{item.title}</Text>
//       <Text style={styles.flashCardSubtitle}>{item.subtitle}</Text>
//       <TouchableOpacity style={styles.claimButton}>
//         <Text style={styles.claimText}>Claim</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Location Header */}
//       <View style={styles.topBar}>
//         <Text style={styles.locationText}>Location</Text>
//         <Text style={styles.locationValue}>{location.city}, {location.pincode}</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           <Feather name="search" size={20} color="#FFF" />
//         </TouchableOpacity>
//       </View>

//       {/* Flash Offers Carousel */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
//         {flashOffers.map((offer) => (
//           <View key={offer.id} style={styles.carouselItem}>
//             <Text style={styles.carouselTitle}>{offer.title}</Text>
//             <Text style={styles.carouselSubtitle}>{offer.subtitle}</Text>
//             <TouchableOpacity style={styles.claimButton}>
//               <Text style={styles.claimText}>Claim</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Categories Section */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Flash Sale */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Flash Sale</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={flashOffers}
//         horizontal
//         renderItem={renderFlashOffer}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   topBar: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   locationValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//     backgroundColor: '#4B0082',
//     padding: 10,
//     borderRadius: 8,
//   },
//   carousel: {
//     marginBottom: 20,
//   },
//   carouselItem: {
//     width: 250,
//     padding: 15,
//     backgroundColor: '#4B0082',
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   carouselTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 5,
//   },
//   carouselSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//     marginBottom: 15,
//   },
//   claimButton: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   claimText: {
//     color: '#4B0082',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#4B0082',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   flashCard: {
//     width: 200,
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     marginRight: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   flashCardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//     marginBottom: 5,
//   },
//   flashCardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 15,
//   },
// });

// export default ProductScreen;




// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';

// type Category = {
//   id: number;
//   name: string;
//   icon: string;
// };

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Dombivli',
//     pincode: '421201',
//   });

//   const categories: Category[] = [
//     { id: 1, name: 'Clothes', icon: 'shopping-bag' },
//     { id: 2, name: 'Electronics', icon: 'monitor' },
//     { id: 3, name: 'Shoes', icon: 'zap' },
//     { id: 4, name: 'Watch', icon: 'watch' },
//   ];

//   const flashOffers = [
//     { id: 1, title: 'Limited Time!', subtitle: 'Get Special Offer Up to 40%' },
//     { id: 2, title: 'Flash Sale!', subtitle: 'Buy 1 Get 1 Free on Shoes' },
//     { id: 3, title: 'Mega Deal!', subtitle: '50% Off on Electronics' },
//   ];

//   const renderCategory = ({ item }: { item: Category }) => (
//     <View style={styles.categoryContainer}>
//       <Feather name={item.icon} size={40} color="#4B0082" />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashOffer = ({ item }: { item: { title: string; subtitle: string } }) => (
//     <View style={styles.flashCard}>
//       <Text style={styles.flashCardTitle}>{item.title}</Text>
//       <Text style={styles.flashCardSubtitle}>{item.subtitle}</Text>
//       <TouchableOpacity style={styles.claimButton}>
//         <Text style={styles.claimText}>Claim</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Location Header */}
//       <View style={styles.topBar}>
//         <Text style={styles.locationText}>Location</Text>
//         <Text style={styles.locationValue}>{location.city}, {location.pincode}</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           <Feather name="search" size={20} color="#FFF" />
//         </TouchableOpacity>
//       </View>

//       {/* Flash Offers Carousel */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
//         {flashOffers.map((offer) => (
//           <View key={offer.id} style={styles.carouselItem}>
//             <Text style={styles.carouselTitle}>{offer.title}</Text>
//             <Text style={styles.carouselSubtitle}>{offer.subtitle}</Text>
//             <TouchableOpacity style={styles.claimButton}>
//               <Text style={styles.claimText}>Claim</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Categories Section */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Flash Sale */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Flash Sale</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={flashOffers}
//         horizontal
//         renderItem={renderFlashOffer}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   topBar: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   locationValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//     backgroundColor: '#4B0082',
//     padding: 10,
//     borderRadius: 8,
//   },
//   carousel: {
//     marginBottom: 20,
//   },
//   carouselItem: {
//     width: 250,
//     padding: 15,
//     backgroundColor: '#4B0082',
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   carouselTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 5,
//   },
//   carouselSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//     marginBottom: 15,
//   },
//   claimButton: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   claimText: {
//     color: '#4B0082',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#4B0082',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   flashCard: {
//     width: 200,
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     marginRight: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   flashCardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//     marginBottom: 5,
//   },
//   flashCardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 15,
//   },
// });

// export default ProductScreen;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
// import FontAwesome from 'react-native-fontawesome'; // Import FontAwesome

// type Category = {
//   id: number;
//   name: string;
//   icon: string;
// };

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Dombivli',
//     pincode: '421201',
//   });

//   // const categories: Category[] = [
//   //   { id: 1, name: 'Clothes', icon: 'shirt' },      // Ionicons icon for clothes
//   //   { id: 2, name: 'Electronics', icon: 'tv' },       // Ionicons icon for electronics
//   //   { id: 3, name: 'Shoes', icon: 'footsteps' },      // Ionicons icon for shoes
//   //   { id: 4, name: 'Watch', icon: 'watch' },          // Ionicons icon for watch
//   // ];
//   const categories: Category[] = [
//     { id: 1, name: 'Clothes', icon: 'fa-tshirt' },
//     { id: 2, name: 'Electronics', icon: 'fa-tv' },
//     { id: 3, name: 'Shoes', icon: 'fa-shoe-prints' },
//     { id: 4, name: 'Watch', icon: 'fa-watch' },
//   ];

//   const flashOffers = [
//     { id: 1, title: 'Limited Time!', subtitle: 'Get Special Offer Up to 40%' },
//     { id: 2, title: 'Flash Sale!', subtitle: 'Buy 1 Get 1 Free on Shoes' },
//     { id: 3, title: 'Mega Deal!', subtitle: '50% Off on Electronics' },
//   ];

//   const renderCategory = ({ item }: { item: Category }) => (
//     <View style={styles.categoryContainer}>
//       <Ionicons name={item.icon} size={40} color="#4B0082" />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashOffer = ({ item }: { item: { title: string; subtitle: string } }) => (
//     <View style={styles.flashCard}>
//       <Text style={styles.flashCardTitle}>{item.title}</Text>
//       <Text style={styles.flashCardSubtitle}>{item.subtitle}</Text>
//       <TouchableOpacity style={styles.claimButton}>
//         <Text style={styles.claimText}>Claim</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Location Header */}
//       <View style={styles.topBar}>
//         <Text style={styles.locationText}>Location</Text>
//         <Text style={styles.locationValue}>{location.city}, {location.pincode}</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           <Ionicons name="search" size={20} color="#FFF" />
//         </TouchableOpacity>
//       </View>

//       {/* Flash Offers Carousel */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
//         {flashOffers.map((offer) => (
//           <View key={offer.id} style={styles.carouselItem}>
//             <Text style={styles.carouselTitle}>{offer.title}</Text>
//             <Text style={styles.carouselSubtitle}>{offer.subtitle}</Text>
//             <TouchableOpacity style={styles.claimButton}>
//               <Text style={styles.claimText}>Claim</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Categories Section */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Flash Sale */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Flash Sale</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={flashOffers}
//         horizontal
//         renderItem={renderFlashOffer}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   topBar: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   locationValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//     backgroundColor: '#4B0082',
//     padding: 10,
//     borderRadius: 8,
//   },
//   carousel: {
//     marginBottom: 20,
//   },
//   carouselItem: {
//     width: 250,
//     padding: 15,
//     backgroundColor: '#4B0082',
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   carouselTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 5,
//   },
//   carouselSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//     marginBottom: 15,
//   },
//   claimButton: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   claimText: {
//     color: '#4B0082',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#4B0082',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   flashCard: {
//     width: 200,
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     marginRight: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   flashCardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//     marginBottom: 5,
//   },
//   flashCardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 15,
//   },
// });

// export default ProductScreen;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Use this import for FontAwesome

// // Import the specific icons from FontAwesome
// import { faTshirt, faTv, faShoePrints, faWatch } from '@fortawesome/free-solid-svg-icons';

// type Category = {
//   id: number;
//   name: string;
//   icon: any; // Change the type to 'any' to handle FontAwesome icons
// };

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Dombivli',
//     pincode: '421201',
//   });

//   const categories: Category[] = [
//     { id: 1, name: 'Clothes', icon: faTshirt },   // Use FontAwesome icon here
//     { id: 2, name: 'Electronics', icon: faTv },     // Use FontAwesome icon here
//     { id: 3, name: 'Shoes', icon: faShoePrints },   // Use FontAwesome icon here
//     { id: 4, name: 'Watch', icon: faWatch },        // Use FontAwesome icon here
//   ];

//   const flashOffers = [
//     { id: 1, title: 'Limited Time!', subtitle: 'Get Special Offer Up to 40%' },
//     { id: 2, title: 'Flash Sale!', subtitle: 'Buy 1 Get 1 Free on Shoes' },
//     { id: 3, title: 'Mega Deal!', subtitle: '50% Off on Electronics' },
//   ];

//   const renderCategory = ({ item }: { item: Category }) => (
//     <View style={styles.categoryContainer}>
//       <FontAwesomeIcon icon={item.icon} size={40} color="#4B0082" /> {/* Use FontAwesomeIcon */}
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashOffer = ({ item }: { item: { title: string; subtitle: string } }) => (
//     <View style={styles.flashCard}>
//       <Text style={styles.flashCardTitle}>{item.title}</Text>
//       <Text style={styles.flashCardSubtitle}>{item.subtitle}</Text>
//       <TouchableOpacity style={styles.claimButton}>
//         <Text style={styles.claimText}>Claim</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Location Header */}
//       <View style={styles.topBar}>
//         <Text style={styles.locationText}>Location</Text>
//         <Text style={styles.locationValue}>{location.city}, {location.pincode}</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           <FontAwesomeIcon icon={faSearch} size={20} color="#FFF" /> {/* Add search icon */}
//         </TouchableOpacity>
//       </View>

//       {/* Flash Offers Carousel */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
//         {flashOffers.map((offer) => (
//           <View key={offer.id} style={styles.carouselItem}>
//             <Text style={styles.carouselTitle}>{offer.title}</Text>
//             <Text style={styles.carouselSubtitle}>{offer.subtitle}</Text>
//             <TouchableOpacity style={styles.claimButton}>
//               <Text style={styles.claimText}>Claim</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Categories Section */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Flash Sale */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Flash Sale</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={flashOffers}
//         horizontal
//         renderItem={renderFlashOffer}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   topBar: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   locationValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//     backgroundColor: '#4B0082',
//     padding: 10,
//     borderRadius: 8,
//   },
//   carousel: {
//     marginBottom: 20,
//   },
//   carouselItem: {
//     width: 250,
//     padding: 15,
//     backgroundColor: '#4B0082',
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   carouselTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 5,
//   },
//   carouselSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//     marginBottom: 15,
//   },
//   claimButton: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   claimText: {
//     color: '#4B0082',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#4B0082',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   flashCard: {
//     width: 200,
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     marginRight: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   flashCardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//     marginBottom: 5,
//   },
//   flashCardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 15,
//   },
// });

// export default ProductScreen;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// // import HomeIcon from '@mui/icons-material/Home'; // Example icon import
// // import SearchIcon from '@mui/icons-material/Search'; // Example icon import
// // import HomeIcon from '@mui/icons-material/Home';
// // import SearchIcon from '@mui/icons-material/Search';
// // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Ensure this import is included

// import SearchIcon from '@mui/icons-material/Search';
// import HomeIcon from '@mui/icons-material/Home';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


// type Category = {
//   id: number;
//   name: string;
//   icon: React.ReactNode; // Change the icon type to ReactNode
// };

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Dombivli',
//     pincode: '421201',
//   });

//   // Example categories with Material-UI icons
//   const categories: Category[] = [
//     { id: 1, name: 'Clothes', icon: <HomeIcon /> },
//     { id: 2, name: 'Electronics', icon: <SearchIcon /> },
//     { id: 3, name: 'Shoes', icon: <HomeIcon /> },
//     { id: 4, name: 'Watch', icon: <ShoppingCartIcon /> },
//   ];

//   const flashOffers = [
//     { id: 1, title: 'Limited Time!', subtitle: 'Get Special Offer Up to 40%' },
//     { id: 2, title: 'Flash Sale!', subtitle: 'Buy 1 Get 1 Free on Shoes' },
//     { id: 3, title: 'Mega Deal!', subtitle: '50% Off on Electronics' },
//   ];

//   const renderCategory = ({ item }: { item: Category }) => (
//     <View style={styles.categoryContainer}>
//       {item.icon} {/* Render the Material-UI icon here */}
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashOffer = ({ item }: { item: { title: string; subtitle: string } }) => (
//     <View style={styles.flashCard}>
//       <Text style={styles.flashCardTitle}>{item.title}</Text>
//       <Text style={styles.flashCardSubtitle}>{item.subtitle}</Text>
//       <TouchableOpacity style={styles.claimButton}>
//         <Text style={styles.claimText}>Claim</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Location Header */}
//       <View style={styles.topBar}>
//         <Text style={styles.locationText}>Location</Text>
//         <Text style={styles.locationValue}>{location.city}, {location.pincode}</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           <SearchIcon style={{ color: "#FFF" }} />
//         </TouchableOpacity>
//       </View>

//       {/* Flash Offers Carousel */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
//         {flashOffers.map((offer) => (
//           <View key={offer.id} style={styles.carouselItem}>
//             <Text style={styles.carouselTitle}>{offer.title}</Text>
//             <Text style={styles.carouselSubtitle}>{offer.subtitle}</Text>
//             <TouchableOpacity style={styles.claimButton}>
//               <Text style={styles.claimText}>Claim</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Categories Section */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Flash Sale */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Flash Sale</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={flashOffers}
//         horizontal
//         renderItem={renderFlashOffer}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   topBar: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   locationValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//     backgroundColor: '#4B0082',
//     padding: 10,
//     borderRadius: 8,
//   },
//   carousel: {
//     marginBottom: 20,
//   },
//   carouselItem: {
//     width: 250,
//     padding: 15,
//     backgroundColor: '#4B0082',
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   carouselTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 5,
//   },
//   carouselSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//     marginBottom: 15,
//   },
//   claimButton: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   claimText: {
//     color: '#4B0082',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#4B0082',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   flashCard: {
//     width: 200,
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     marginRight: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   flashCardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//     marginBottom: 5,
//   },
//   flashCardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 15,
//   },
// });

// export default ProductScreen;




// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Image,
// } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Dombivli',
//     pincode: '421201',
//   });

//   // Example categories with image URLs
//   // const categories = [
//   //   { id: 1, name: 'Clothes', icon: 'https://example.com/clothes.png' }, 
//   //   { id: 2, name: 'Electronics', icon: 'https://example.com/electronics.png' },
//   //   { id: 3, name: 'Shoes', icon: 'https://example.com/shoes.png' },
//   //   { id: 4, name: 'Watch', icon: 'https://example.com/watch.png' },
//   // ];

//   // const categories = [
//   //   { id: 1, name: 'Clothes', icon: 'https://img.icons8.com/color/96/t-shirt.png' }, 
//   //   { id: 2, name: 'Electronics', icon: 'https://img.icons8.com/color/96/laptop.png' },
//   //   { id: 3, name: 'Shoes', icon: 'https://img.icons8.com/color/96/running-shoe.png' },
//   //   { id: 4, name: 'Watch', icon: 'https://img.icons8.com/color/96/wristwatch.png' },
//   // ];

//   const categories = [
//     { id: 1, name: 'Tshirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' }, 
//     { id: 2, name: 'Frock', icon: 'https://img.icons8.com/color/96/laptop.png' },
//      { id: 3, name: 'Sarees', icon: 'https://img.icons8.com/color/96/sarees.png' }, 
//     //{ id: 3, name: 'Shoes', icon: 'https://via.placeholder.com/40x40.png?text=Shoes' },

//     { id: 4, name: 'Watch', icon: 'https://img.icons8.com/color/96/apple-watch.png' },
//   ];
  
  
//   const flashOffers = [
//     { id: 1, title: 'Limited Time!', subtitle: 'Get Special Offer Up to 40%' },
//     { id: 2, title: 'Flash Sale!', subtitle: 'Buy 1 Get 1 Free on Shoes' },
//     { id: 3, title: 'Mega Deal!', subtitle: '50% Off on Electronics' },
//   ];

//   const renderCategory = ({ item }: { item: { name: string, icon: string } }) => (
//     <View style={styles.categoryContainer}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} /> {/* Load image from URL */}
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashOffer = ({ item }: { item: { title: string; subtitle: string } }) => (
//     <View style={styles.flashCard}>
//       <Text style={styles.flashCardTitle}>{item.title}</Text>
//       <Text style={styles.flashCardSubtitle}>{item.subtitle}</Text>
//       <TouchableOpacity style={styles.claimButton}>
//         <Text style={styles.claimText}>Claim</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Location Header */}
//       <View style={styles.topBar}>
//         <Text style={styles.locationText}>Location</Text>
//         <Text style={styles.locationValue}>{location.city}, {location.pincode}</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           <Text style={{ color: "#FFF" }}>Search</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Flash Offers Carousel */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
//         {flashOffers.map((offer) => (
//           <View key={offer.id} style={styles.carouselItem}>
//             <Text style={styles.carouselTitle}>{offer.title}</Text>
//             <Text style={styles.carouselSubtitle}>{offer.subtitle}</Text>
//             <TouchableOpacity style={styles.claimButton}>
//               <Text style={styles.claimText}>Claim</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Categories Section */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Flash Sale */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Flash Sale</Text>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={flashOffers}
//         horizontal
//         renderItem={renderFlashOffer}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   topBar: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   locationValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//     backgroundColor: '#4B0082',
//     padding: 10,
//     borderRadius: 8,
//   },
//   carousel: {
//     marginBottom: 20,
//   },
//   carouselItem: {
//     width: 250,
//     padding: 15,
//     backgroundColor: '#4B0082',
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   carouselTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 5,
//   },
//   carouselSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//     marginBottom: 15,
//   },
//   claimButton: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   claimText: {
//     color: '#4B0082',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#4B0082',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryIcon: {
//     width: 40,  // Adjust image size as needed
//     height: 40,
//     marginBottom: 8,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   flashCard: {
//     width: 200,
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     marginRight: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   flashCardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4B0082',
//     marginBottom: 5,
//   },
//   flashCardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 15,
//   },
// });

// export default ProductScreen;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Image,
// } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Kalyan',
//     pincode: '421201',
//   });

//   const categories = [
//     { id: 1, name: 'Books', icon: 'https://img.icons8.com/color/96/book.png' },
//     { id: 2, name: 'Gold', icon: 'https://img.icons8.com/color/96/gold-bars.png' },
//     { id: 3, name: 'Electronics', icon: 'https://img.icons8.com/color/96/electronics.png' },
//     { id: 4, name: 'Sarees', icon:'https://icons8.com/icon/U3BJO4fkOkx5/saree'},
//   ];

//   const recentlyViewed = [
//     { id: 1, name: 'Sunswitch Sunscreen', image: 'https://img.icons8.com/color/96/face-cream.png' },
//     { id: 2, name: 'Traditional Saree', image: 'https://img.icons8.com/color/96/dress.png' },
//     { id: 3, name: 'Kids Dress', image: 'https://img.icons8.com/color/96/child-dress.png' },
//   ];

//   const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
//     <View style={styles.categoryContainer}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderRecentlyViewed = ({ item }: { item: { name: string; image: string } }) => (
//     <View style={styles.recentlyViewedItem}>
//       <Image source={{ uri: item.image }} style={styles.recentlyViewedImage} />
//       <Text style={styles.recentlyViewedText}>{item.name}</Text>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Profile and Coins */}
//       <View style={styles.profileSection}>
//         <Image
//           source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
//           style={styles.profileImage}
//         />
//         <View style={styles.profileDetails}>
//           <Text style={styles.profileName}>Unnikrishnan Nair</Text>
//           <Text style={styles.coinsText}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/coin.png' }}
//               style={styles.coinIcon}
//             />{' '}
//             0 Coins
//           </Text>
//         </View>
//         <View style={styles.profileActions}>
//           <TouchableOpacity>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/notification.png' }}
//               style={styles.actionIcon}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/like.png' }}
//               style={styles.actionIcon}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/shopping-cart.png' }}
//               style={styles.actionIcon}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search by Keyword or Product ID"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity style={styles.searchMicButton}>
//           <Image source={{ uri: 'https://img.icons8.com/color/48/microphone.png' }} style={styles.searchIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.searchCameraButton}>
//           <Image source={{ uri: 'https://img.icons8.com/color/48/camera.png' }} style={styles.searchIcon} />
//         </TouchableOpacity>
//       </View>

//       {/* Location */}
//       <View style={styles.locationContainer}>
//         <Text>Delivering to {location.city} - {location.pincode}</Text>
//       </View>

//       {/* Categories */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Recently Viewed */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Recently Viewed</Text>
//       </View>
//       <FlatList
//         data={recentlyViewed}
//         horizontal
//         renderItem={renderRecentlyViewed}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   profileDetails: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   profileName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   coinsText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   coinIcon: {
//     width: 16,
//     height: 16,
//   },
//   profileActions: {
//     flexDirection: 'row',
//   },
//   actionIcon: {
//     width: 30,
//     height: 30,
//     marginLeft: 10,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     padding: 10,
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchMicButton: {
//     marginLeft: 10,
//   },
//   searchCameraButton: {
//     marginLeft: 10,
//   },
//   searchIcon: {
//     width: 30,
//     height: 30,
//   },
//   locationContainer: {
//     padding: 10,
//   },
//   sectionHeader: {
//     paddingHorizontal: 10,
//     marginTop: 15,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryIcon: {
//     width: 50,
//     height: 50,
//     marginBottom: 8,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   recentlyViewedItem: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   recentlyViewedImage: {
//     width: 50,
//     height: 50,
//     marginBottom: 5,
//   },
//   recentlyViewedText: {
//     fontSize: 12,
//     textAlign: 'center',
//   },
// });

// export default ProductScreen;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Image,
// } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Kalyan',
//     pincode: '421201',
//   });

  
    
//   const categories = [
//     { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//     { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//     { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//     { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//     { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' }, // Hoodie alternative
//     { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//     { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//     { id: 9, name: 'Rings & Earings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },

    


//   ];
  


//   const recentlyViewed = [
//     { id: 1, name: 'Sunswitch Sunscreen', image: 'https://img.icons8.com/color/96/face-cream.png' },
//     { id: 2, name: 'Traditional Saree', image: 'https://img.icons8.com/color/96/dress.png' },
//     { id: 3, name: 'Kids Dress', image: 'https://img.icons8.com/color/96/child-dress.png' },
//   ];

//   const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
//     <View style={styles.categoryContainer}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderRecentlyViewed = ({ item }: { item: { name: string; image: string } }) => (
//     <View style={styles.recentlyViewedItem}>
//       <Image source={{ uri: item.image }} style={styles.recentlyViewedImage} />
//       <Text style={styles.recentlyViewedText}>{item.name}</Text>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Profile and Coins */}
//       <View style={styles.profileSection}>
//         <Image
//           source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
//           style={styles.profileImage}
//         />
//         <View style={styles.profileDetails}>
//           <Text style={styles.profileName}>Unnikrishnan Nair</Text>
//           <Text style={styles.coinsText}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/?size=100&id=63810&format=png&color=000000' }}
//               style={styles.coinIcon}
//             />{' '}
//             0 Coins
//           </Text>
//         </View>
//         <View style={styles.profileActions}>
//           <TouchableOpacity>
//             <Image
//               source={{ uri: 'https://img.icons8.com/?size=100&id=114436&format=png&color=000000' }}
//               style={styles.actionIcon}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/like.png' }}
//               style={styles.actionIcon}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/shopping-cart.png' }}
//               style={styles.actionIcon}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search by Keyword or Product ID"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//         />
//         <TouchableOpacity style={styles.searchMicButton}>
//           <Image source={{ uri: 'https://img.icons8.com/color/48/microphone.png' }} style={styles.searchIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.searchCameraButton}>
//           <Image source={{ uri: 'https://img.icons8.com/color/48/camera.png' }} style={styles.searchIcon} />
//         </TouchableOpacity>
//       </View>

//       {/* Location */}
//       <View style={styles.locationContainer}>
//         <Text>Delivering to {location.city} - {location.pincode}</Text>
//       </View>

//       {/* Categories */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.flatListContent}
//       />

//       {/* Recently Viewed */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Recently Viewed</Text>
//       </View>
//       <FlatList
//         data={recentlyViewed}
//         horizontal
//         renderItem={renderRecentlyViewed}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.flatListContent}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   profileDetails: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   profileName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   coinsText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   coinIcon: {
//     width: 16,
//     height: 16,
//   },
//   profileActions: {
//     flexDirection: 'row',
//   },
//   actionIcon: {
//     width: 30,
//     height: 30,
//     marginLeft: 10,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     padding: 10,
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchMicButton: {
//     marginLeft: 10,
//   },
//   searchCameraButton: {
//     marginLeft: 10,
//   },
//   searchIcon: {
//     width: 30,
//     height: 30,
//   },
//   locationContainer: {
//     padding: 10,
//   },
//   sectionHeader: {
//     paddingHorizontal: 10,
//     marginTop: 15,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   flatListContent: {
//     paddingHorizontal: 10,
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryIcon: {
//     width: 50,
//     height: 50,
//     marginBottom: 8,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   recentlyViewedItem: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   recentlyViewedImage: {
//     width: 50,
//     height: 50,
//     marginBottom: 5,
//   },
//   recentlyViewedText: {
//     fontSize: 12,
//     textAlign: 'center',
//   },
// });

// export default ProductScreen;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Image,
//   Alert,
// } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Kalyan',
//     pincode: '421201',
//   });

//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = () => {
//     Alert.alert('Search', `You searched for: ${searchQuery}`);
//   };

//   const categories = [
//     { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//     { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//     { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//     { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//     { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//     { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//     { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//   { id: 9, name: 'Rings & Earings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   ];

//   const recentlyViewed = [
//     { id: 1, name: 'Traditional Saree', image: 'https://img.icons8.com/color/96/dress.png' },
//     { id: 2, name: 'Men’s Shirt', image: 'https://img.icons8.com/color/96/shirt.png' },
//     { id: 3, name: 'Jeans', image: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 4, name: 'Shoes', image: 'https://img.icons8.com/color/96/shoes.png' },
//     { id: 5, name: 'Jewellery Set', image: 'https://img.icons8.com/color/96/rings.png' },
//   ];

//   const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
//     <View style={styles.categoryContainer}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderRecentlyViewed = ({ item }: { item: { name: string; image: string } }) => (
//     <View style={styles.recentlyViewedItem}>
//       <Image source={{ uri: item.image }} style={styles.recentlyViewedImage} />
//       <Text style={styles.recentlyViewedText}>{item.name}</Text>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Profile and Coins */}
//       <View style={styles.profileSection}>
//         <Image
//           source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
//           style={styles.profileImage}
//         />
//         <View style={styles.profileDetails}>
//           <Text style={styles.profileName}>Nitu Nair</Text>
//           <Text style={styles.coinsText}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/?size=100&id=63810&format=png&color=000000' }}
//               style={styles.coinIcon}
//             />{' '}
//             0 Coins
//           </Text>
//         </View>
//         <View style={styles.profileActions}>
//           <TouchableOpacity>
//             <Image
//               source={{ uri: 'https://img.icons8.com/?size=100&id=114436&format=png&color=000000' }}
//               style={styles.actionIcon}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/like.png' }}
//               style={styles.actionIcon}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/shopping-cart.png' }}
//               style={styles.actionIcon}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search by Keyword or Product ID"
//           style={styles.searchInput}
//           placeholderTextColor="#AAA"
//           value={searchQuery}
//           onChangeText={(text) => setSearchQuery(text)}
//         />
//         <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/48/search.png' }}
//             style={styles.searchIcon}
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Location */}
//       <View style={styles.locationContainer}>
//         <Text>Delivering to {location.city} - {location.pincode}</Text>
//       </View>

//       {/* Categories */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Categories</Text>
//       </View>
//       <FlatList
//         data={categories}
//         horizontal
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.flatListContent}
//       />

//       {/* Recently Viewed */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Recently Viewed</Text>
//       </View>
//       <FlatList
//         data={recentlyViewed}
//         horizontal
//         renderItem={renderRecentlyViewed}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.flatListContent}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   profileDetails: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   profileName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   coinsText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   coinIcon: {
//     width: 16,
//     height: 16,
//   },
//   profileActions: {
//     flexDirection: 'row',
//   },
//   actionIcon: {
//     width: 30,
//     height: 30,
//     marginLeft: 10,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     padding: 10,
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//   },
//   searchIcon: {
//     width: 30,
//     height: 30,
//   },
//   locationContainer: {
//     padding: 10,
//   },
//   sectionHeader: {
//     paddingHorizontal: 10,
//     marginTop: 15,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   flatListContent: {
//     paddingHorizontal: 10,
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryIcon: {
//     width: 50,
//     height: 50,
//     marginBottom: 8,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   recentlyViewedItem: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   recentlyViewedImage: {
//     width: 50,
//     height: 50,
//     marginBottom: 5,
//   },
//   recentlyViewedText: {
//     fontSize: 12,
//     textAlign: 'center',
//   },
// });

// export default ProductScreen;



// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Image,
//   Alert,
//   Modal,
// } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Kalyan',
//     pincode: '421201',
//   });

//   const [searchQuery, setSearchQuery] = useState('');
//   const [showFlashScreen, setShowFlashScreen] = useState(true);

//   useEffect(() => {
//     // Flash screen timeout
//     const timer = setTimeout(() => setShowFlashScreen(false), 3000); // Display for 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSearch = () => {
//     Alert.alert('Search', `You searched for: ${searchQuery}`);
//   };

//   const categories = [
//     { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//     { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//     { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//     { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//     { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//     { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//     { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//     { id: 9, name: 'Rings & Earings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   ];

//   const recentlyViewed = [
//     { id: 1, name: 'Traditional Saree', image: 'https://img.icons8.com/color/96/dress.png' },
//     { id: 2, name: 'Men’s Shirt', image: 'https://img.icons8.com/color/96/shirt.png' },
//     { id: 3, name: 'Jeans', image: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 4, name: 'Shoes', image: 'https://img.icons8.com/color/96/shoes.png' },
//     { id: 5, name: 'Jewellery Set', image: 'https://img.icons8.com/color/96/rings.png' },
//   ];

//   const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
//     <View style={styles.categoryContainer}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderRecentlyViewed = ({ item }: { item: { name: string; image: string } }) => (
//     <View style={styles.recentlyViewedItem}>
//       <Image source={{ uri: item.image }} style={styles.recentlyViewedImage} />
//       <Text style={styles.recentlyViewedText}>{item.name}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Flash Screen */}
//       <Modal visible={showFlashScreen} animationType="fade" transparent>
//         <View style={styles.flashScreenContainer}>
//           <Text style={styles.flashScreenText}>Welcome to Our Store!</Text>
//         </View>
//       </Modal>

//       {/* Main Content */}
//       <ScrollView>
//         {/* Profile and Coins */}
//         <View style={styles.profileSection}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
//             style={styles.profileImage}
//           />
//           <View style={styles.profileDetails}>
//             <Text style={styles.profileName}>Nitu Nair</Text>
//             <Text style={styles.coinsText}>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=63810&format=png&color=000000' }}
//                 style={styles.coinIcon}
//               />{' '}
//               0 Coins
//             </Text>
//           </View>
//           <View style={styles.profileActions}>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=114436&format=png&color=000000' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/like.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/shopping-cart.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Search Bar */}
//         <View style={styles.searchContainer}>
//           <TextInput
//             placeholder="Search by Keyword or Product ID"
//             style={styles.searchInput}
//             placeholderTextColor="#AAA"
//             value={searchQuery}
//             onChangeText={(text) => setSearchQuery(text)}
//           />
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/search.png' }}
//               style={styles.searchIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Location */}
//         <View style={styles.locationContainer}>
//           <Text>Delivering to {location.city} - {location.pincode}</Text>
//         </View>

//         {/* Categories */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Categories</Text>
//         </View>
//         <FlatList
//           data={categories}
//           horizontal
//           renderItem={renderCategory}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />

//         {/* Recently Viewed */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Recently Viewed</Text>
//         </View>
//         <FlatList
//           data={recentlyViewed}
//           horizontal
//           renderItem={renderRecentlyViewed}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//   },
//   flashScreenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#6200EA',
//     opacity: 0.95,
//   },
//   flashScreenText: {
//     color: '#FFF',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   profileDetails: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   profileName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   coinsText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   coinIcon: {
//     width: 16,
//     height: 16,
//   },
//   profileActions: {
//     flexDirection: 'row',
//   },
//   actionIcon: {
//     width: 30,
//     height: 30,
//     marginLeft: 10,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     padding: 10,
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 8,
//     color: '#000',
//   },
//   searchButton: {
//     marginLeft: 10,
//   },
//   searchIcon: {
//     width: 30,
//     height: 30,
//   },
//   locationContainer: {
//     padding: 10,
//   },
//   sectionHeader: {
//     paddingHorizontal: 10,
//     marginTop: 15,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   flatListContent: {
//     paddingHorizontal: 10,
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryIcon: {
//     width: 50,
//     height: 50,
//     marginBottom: 8,
//   },
//   categoryText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#000',
//   },
//   recentlyViewedItem: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   recentlyViewedImage: {
//     width: 50,
//     height: 50,
//     marginBottom: 5,
//   },
//   recentlyViewedText: {
//     fontSize: 12,
//     textAlign: 'center',
//   },
// });

// export default ProductScreen;



// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Image,
//   Alert,
//   Modal,
// } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Kalyan',
//     pincode: '421201',
//   });

//   const [searchQuery, setSearchQuery] = useState('');
//   const [showFlashScreen, setShowFlashScreen] = useState(true);

//   useEffect(() => {
//     // Flash screen timeout
//     const timer = setTimeout(() => setShowFlashScreen(false), 3000); // Display for 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSearch = () => {
//     Alert.alert('Search', `You searched for: ${searchQuery}`);
//   };

//   const categories = [
//     { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//     { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//     { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//     { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//     { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//     { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//     { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//     { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   ];

//   const flashcards = [
//     { id: 1, title: 'Summer Sale', description: 'Up to 50% off on all summer wear!', image: 'https://img.icons8.com/color/96/sale.png' },
//     { id: 2, title: 'New Arrivals', description: 'Check out our latest collection.', image: 'https://img.icons8.com/color/96/new.png' },
//     { id: 3, title: 'Exclusive Deals', description: 'Members get extra 10% off.', image: 'https://img.icons8.com/color/96/discount.png' },
//   ];

//   const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
//     <View style={styles.categoryContainer}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashcard = ({ item }: { item: { title: string; description: string; image: string } }) => (
//     <View style={styles.flashcard}>
//       <Image source={{ uri: item.image }} style={styles.flashcardImage} />
//       <Text style={styles.flashcardTitle}>{item.title}</Text>
//       <Text style={styles.flashcardDescription}>{item.description}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Flash Screen */}
//       <Modal visible={showFlashScreen} animationType="fade" transparent>
//         <View style={styles.flashScreenContainer}>
//           <Text style={styles.flashScreenText}>Welcome to Our Store!</Text>
//         </View>
//       </Modal>

//       {/* Main Content */}
//       <ScrollView>
//         {/* Profile and Coins */}
//         <View style={styles.profileSection}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
//             style={styles.profileImage}
//           />
//           <View style={styles.profileDetails}>
//             <Text style={styles.profileName}>Nitu Nair</Text>
//             <Text style={styles.coinsText}>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=63810&format=png&color=000000' }}
//                 style={styles.coinIcon}
//               />{' '}
//               0 Coins
//             </Text>
//           </View>
//           <View style={styles.profileActions}>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=114436&format=png&color=000000' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/like.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/shopping-cart.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Search Bar */}
//         <View style={styles.searchContainer}>
//           <TextInput
//             placeholder="Search by Keyword or Product ID"
//             style={styles.searchInput}
//             placeholderTextColor="#AAA"
//             value={searchQuery}
//             onChangeText={(text) => setSearchQuery(text)}
//           />
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/search.png' }}
//               style={styles.searchIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Location */}
//         <View style={styles.locationContainer}>
//           <Text>Delivering to {location.city} - {location.pincode}</Text>
//         </View>

//         {/* Categories */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Categories</Text>
//         </View>
//         <FlatList
//           data={categories}
//           horizontal
//           renderItem={renderCategory}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />

//         {/* Flashcards */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Flashcards</Text>
//         </View>
//         <FlatList
//           data={flashcards}
//           horizontal
//           renderItem={renderFlashcard}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   /* Add all existing styles here, plus new ones below: */

//   flashcard: {
//     backgroundColor: '#F5F5F5',
//     borderRadius: 10,
//     padding: 10,
//     marginRight: 10,
//     width: 200,
//     alignItems: 'center',
//     elevation: 3,
//   },
//   flashcardImage: {
//     width: 60,
//     height: 60,
//     marginBottom: 10,
//   },
//   flashcardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   flashcardDescription: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'center',
//   },
// });

// export default ProductScreen;



// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Image,
//   Alert,
//   Modal,
// } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Kalyan',
//     pincode: '421201',
//   });

//   const [searchQuery, setSearchQuery] = useState('');
//   const [showFlashScreen, setShowFlashScreen] = useState(true);

//   useEffect(() => {
//     // Flash screen timeout
//     const timer = setTimeout(() => setShowFlashScreen(false), 3000); // Display for 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSearch = () => {
//     Alert.alert('Search', `You searched for: ${searchQuery}`);
//   };

//   const categories = [
//     { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//     { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//     { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//     { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//     { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//     { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//     { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//     { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   ];

//   const flashcards = [
//     { id: 1, title: 'Summer Sale', description: 'Up to 50% off on all summer wear!', image: 'https://img.icons8.com/color/96/sale.png' },
//     { id: 2, title: 'New Arrivals', description: 'Check out our latest collection.', image: 'https://img.icons8.com/color/96/new.png' },
//     { id: 3, title: 'Winter Collection', description: 'Keep warm with our new winter wear!', image: 'https://img.icons8.com/color/96/winter.png' },
//   ];

//   return (
//     <ScrollView style={styles.container}>
//       {/* Flash Screen */}
//       {showFlashScreen && (
//         <View style={styles.flashcard}>
//           <Text>Loading...</Text>
//         </View>
//       )}

//       {/* Search bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search for products"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//         <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
//           <Text style={styles.searchIcon}>🔍</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Categories Section */}
//       <FlatList
//         horizontal
//         data={categories}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.categoryContainer}>
//             <Image style={styles.categoryIcon} source={{ uri: item.icon }} />
//             <Text style={styles.categoryName}>{item.name}</Text>
//           </View>
//         )}
//       />

//       {/* Flashcards Section */}
//       <FlatList
//         data={flashcards}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.flashcard}>
//             <Image source={{ uri: item.image }} style={styles.flashcardImage} />
//             <Text style={styles.flashcardTitle}>{item.title}</Text>
//             <Text style={styles.flashcardDescription}>{item.description}</Text>
//           </View>
//         )}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   flashcard: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     marginRight: 16,
//     width: 200,
//     alignItems: 'center',
//     elevation: 5,
//   },
//   flashcardImage: {
//     width: 80,
//     height: 80,
//     marginBottom: 10,
//   },
//   flashcardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   flashcardDescription: {
//     fontSize: 14,
//     color: '#777',
//     textAlign: 'center',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 8,
//   },
//   searchInput: {
//     flex: 1,
//     padding: 8,
//     borderRadius: 8,
//     backgroundColor: '#f0f0f0',
//   },
//   searchButton: {
//     marginLeft: 8,
//   },
//   searchIcon: {
//     fontSize: 20,
//     color: '#777',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 16,
//   },
//   categoryIcon: {
//     width: 50,
//     height: 50,
//   },
//   categoryName: {
//     marginTop: 8,
//     fontSize: 14,
//   },
// });

// export default ProductScreen;



// import React, { useState, useEffect } from 'react';
// import { Alert } from 'react-native';

// import {
  
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Image,
//   Modal,
// } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Kalyan',
//     pincode: '421201',
//   });

//   const [searchQuery, setSearchQuery] = useState('');
//   const [showFlashScreen, setShowFlashScreen] = useState(true);

//   useEffect(() => {
//     // Flash screen timeout
//     const timer = setTimeout(() => setShowFlashScreen(false), 3000); // Display for 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSearch = () => {
//     Alert.alert('Search', `You searched for: ${searchQuery}`);
//   };

//   const categories = [
//     { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//     { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//     { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//     { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//     { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//     { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//     { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//     { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   ];

//   const flashcards = [
//     { id: 1, title: 'Summer Sale', description: 'Up to 50% off on all summer wear!', image: 'https://img.icons8.com/color/96/sale.png' },
//     { id: 2, title: 'New Arrivals', description: 'Check out our latest collection.', image: 'https://img.icons8.com/color/96/new.png' },
//     { id: 3, title: 'Exclusive Deals', description: 'Members get extra 10% off.', image: 'https://img.icons8.com/color/96/discount.png' },
//   ];

//   const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
//     <View style={styles.categoryContainer}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashcard = ({ item }: { item: { title: string; description: string; image: string } }) => (
//     <View style={styles.flashcard}>
//       <Image source={{ uri: item.image }} style={styles.flashcardImage} />
//       <Text style={styles.flashcardTitle}>{item.title}</Text>
//       <Text style={styles.flashcardDescription}>{item.description}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Flash Screen */}
//       <Modal visible={showFlashScreen} animationType="fade" transparent>
//         <View style={styles.flashScreenContainer}>
//           <Text style={styles.flashScreenText}>Welcome to Our Store!</Text>
//         </View>
//       </Modal>

//       {/* Main Content */}
//       <ScrollView>
//         {/* Profile and Coins */}
//         <View style={styles.profileSection}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
//             style={styles.profileImage}
//           />
//           <View style={styles.profileDetails}>
//             <Text style={styles.profileName}>Nitu Nair</Text>
//             <Text style={styles.coinsText}>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=63810&format=png&color=000000' }}
//                 style={styles.coinIcon}
//               />{' '}
//               0 Coins
//             </Text>
//           </View>
//           <View style={styles.profileActions}>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=114436&format=png&color=000000' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/like.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/shopping-cart.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Search Bar */}
//         <View style={styles.searchContainer}>
//           <TextInput
//             placeholder="Search by Keyword or Product ID"
//             style={styles.searchInput}
//             placeholderTextColor="#AAA"
//             value={searchQuery}
//             onChangeText={(text) => setSearchQuery(text)}
//           />
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/search.png' }}
//               style={styles.searchIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Location */}
//         <View style={styles.locationContainer}>
//           <Text>Delivering to {location.city} - {location.pincode}</Text>
//         </View>

//         {/* Categories */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Categories</Text>
//         </View>
//         <FlatList
//           data={categories}
//           horizontal
//           renderItem={renderCategory}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />

//         {/* Flashcards */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Flashcards</Text>
//         </View>
//         <FlatList
//           data={flashcards}
//           horizontal
//           renderItem={renderFlashcard}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />
//       </ScrollView>

//       {/* Bottom Navigation Bar */}
//       <View style={styles.bottomNavBar}>
//         <TouchableOpacity style={styles.navItem}>
//           <Text style={styles.navText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Text style={styles.navText}>Categories</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Text style={styles.navText}>Mall</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Text style={styles.navText}>Video Finds</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Text style={styles.navText}>My Orders</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   /* Main container styles */
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   sectionHeader: {
//     marginVertical: 16,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },

//   /* Flashcard Styles */
//   flashcard: {
//     backgroundColor: '#F5F5F5',
//     borderRadius: 10,
//     padding: 10,
//     marginRight: 10,
//     width: 200,
//     alignItems: 'center',
//     elevation: 3,
//   },
//   flashcardImage: {
//     width: 60,
//     height: 60,
//     marginBottom: 10,
//   },
//   flashcardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   flashcardDescription: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'center',
//   },

//   /* Categories Styles */
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 16,
//   },
//   categoryIcon: {
//     width: 50,
//     height: 50,
//     marginBottom: 8,
//   },
//   categoryText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },

//   /* Profile & Search Styles */
//   profileSection: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 16,
//   },
//   profileDetails: {
//     flex: 1,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   coinsText: {
//     fontSize: 14,
//     color: '#888',
//   },
//   profileActions: {
//     flexDirection: 'row',
//     marginTop: 8,
//   },
//   actionIcon: {
//     width: 30,
//     height: 30,
//     marginRight: 10,
//   },

//   /* Bottom Navigation Bar Styles */
//   bottomNavBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 10,
//     backgroundColor: '#f8f8f8',
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   navText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     color: '#333',
//   },

//   /* Flash Screen Styles */
//   flashScreenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   flashScreenText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//   },

//   /* Search Bar Styles */
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   searchInput: {
//     flex: 1,
//     padding: 8,
//     fontSize: 16,
//     borderRadius: 4,
//     borderColor: '#ddd',
//     borderWidth: 1,
//   },
//   searchButton: {
//     padding: 8,
//   },
//   searchIcon: {
//     width: 24,
//     height: 24,
//   },
//   coinIcon: {
//     width: 24,
//     height: 24,
//     tintColor: 'gold',
//   },

//   /* Location Styles */
//   locationContainer: {
//     marginBottom: 16,
//     fontSize: 14,
//     color: '#666',
//   },

//   /* FlatList Content Style */
//   flatListContent: {
//     paddingLeft: 16,
//   },
// });
// export default ProductScreen;



// import React, { useState, useEffect } from 'react';
// import { Alert } from 'react-native';

// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Image,
//   Modal,
// } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Kalyan',
//     pincode: '421201',
//   });

//   const [searchQuery, setSearchQuery] = useState('');
//   const [showFlashScreen, setShowFlashScreen] = useState(true);
//   const [activeNavItem, setActiveNavItem] = useState('Home');

//   useEffect(() => {
//     // Flash screen timeout
//     const timer = setTimeout(() => setShowFlashScreen(false), 3000); // Display for 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSearch = () => {
//     Alert.alert('Search', `You searched for: ${searchQuery}`);
//   };

//   const categories = [
//     { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//     { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//     { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//     { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//     { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//     { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//     { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//     { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   ];

//   const flashcards = [
//     { id: 1, title: 'Summer Sale', description: 'Up to 50% off on all summer wear!', image: 'https://img.icons8.com/color/96/sale.png' },
//     { id: 2, title: 'New Arrivals', description: 'Check out our latest collection.', image: 'https://img.icons8.com/color/96/new.png' },
//     { id: 3, title: 'Exclusive Deals', description: 'Members get extra 10% off.', image: 'https://img.icons8.com/color/96/discount.png' },
//   ];

//   const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
//     <View style={styles.categoryContainer}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashcard = ({ item }: { item: { title: string; description: string; image: string } }) => (
//     <View style={styles.flashcard}>
//       <Image source={{ uri: item.image }} style={styles.flashcardImage} />
//       <Text style={styles.flashcardTitle}>{item.title}</Text>
//       <Text style={styles.flashcardDescription}>{item.description}</Text>
//     </View>
//   );

//   const handleNavItemPress = (item: string) => {
//     setActiveNavItem(item);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Flash Screen */}
//       <Modal visible={showFlashScreen} animationType="fade" transparent>
//         <View style={styles.flashScreenContainer}>
//           <Text style={styles.flashScreenText}>Welcome to Our Store!</Text>
//         </View>
//       </Modal>

//       {/* Main Content */}
//       <ScrollView>
//         {/* Profile and Coins */}
//         <View style={styles.profileSection}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
//             style={styles.profileImage}
//           />
//           <View style={styles.profileDetails}>
//             <Text style={styles.profileName}>Nitu Nair</Text>
//             <Text style={styles.coinsText}>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=63810&format=png&color=000000' }}
//                 style={styles.coinIcon}
//               />{' '}
//               0 Coins
//             </Text>
//           </View>
//           <View style={styles.profileActions}>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=114436&format=png&color=000000' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/like.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/shopping-cart.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Search Bar */}
//         <View style={styles.searchContainer}>
//           <TextInput
//             placeholder="Search by Keyword or Product ID"
//             style={styles.searchInput}
//             placeholderTextColor="#AAA"
//             value={searchQuery}
//             onChangeText={(text) => setSearchQuery(text)}
//           />
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/search.png' }}
//               style={styles.searchIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Location */}
//         <View style={styles.locationContainer}>
//           <Text>Delivering to {location.city} - {location.pincode}</Text>
//         </View>

//         {/* Categories */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Categories</Text>
//         </View>
//         <FlatList
//           data={categories}
//           horizontal
//           renderItem={renderCategory}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />

//         {/* Flashcards */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Flashcards</Text>
//         </View>
//         <FlatList
//           data={flashcards}
//           horizontal
//           renderItem={renderFlashcard}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />
//       </ScrollView>

//       {/* Bottom Navigation Bar */}
//       <View style={styles.bottomNavBar}>
//         <TouchableOpacity
//           style={[styles.navItem, activeNavItem === 'Home' && styles.activeNavItem]}
//           onPress={() => handleNavItemPress('Home')}>
//           <Text style={styles.navText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.navItem, activeNavItem === 'Categories' && styles.activeNavItem]}
//           onPress={() => handleNavItemPress('Categories')}>
//           <Text style={styles.navText}>Categories</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.navItem, activeNavItem === 'Mall' && styles.activeNavItem]}
//           onPress={() => handleNavItemPress('Mall')}>
//           <Text style={styles.navText}>Mall</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.navItem, activeNavItem === 'Video Finds' && styles.activeNavItem]}
//           onPress={() => handleNavItemPress('Video Finds')}>
//           <Text style={styles.navText}>Video Finds</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.navItem, activeNavItem === 'My Orders' && styles.activeNavItem]}
//           onPress={() => handleNavItemPress('My Orders')}>
//           <Text style={styles.navText}>My Orders</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F4F4F9',
//   },
//   flashScreenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   flashScreenText: {
//     fontSize: 24,
//     color: '#fff',
//   },
//   profileSection: {
//     flexDirection: 'row',
//     padding: 20,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     alignItems: 'center',
//   },
//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight: 15,
//   },
//   profileDetails: {
//     flex: 1,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   coinsText: {
//     fontSize: 14,
//     color: '#888',
//   },
//   profileActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   actionIcon: {
//     width: 30,
//     height: 30,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     backgroundColor: '#fff',
//   },
//   searchInput: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 25,
//   },
//   searchButton: {
//     marginLeft: 10,
//   },
//   searchIcon: {
//     width: 20,
//     height: 20,
//   },
//   locationContainer: {
//     padding: 15,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   sectionHeader: {
//     padding: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   flatListContent: {
//     paddingHorizontal: 15,
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryIcon: {
//     width: 50,
//     height: 50,
//     marginBottom: 5,
//   },
//   categoryText: {
//     fontSize: 12,
//     color: '#888',
//   },
//   flashcard: {
//     marginRight: 15,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     width: 200,
//     alignItems: 'center',
//   },
//   flashcardImage: {
//     width: 50,
//     height: 50,
//     marginBottom: 10,
//   },
//   flashcardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   flashcardDescription: {
//     fontSize: 14,
//     color: '#888',
//     textAlign: 'center',
//   },
//   bottomNavBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingVertical: 10,
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//   },
//   navItem: {
//     padding: 10,
//     alignItems: 'center',
//     borderRadius: 20,
//   },
//   activeNavItem: {
//     backgroundColor: '#d5c7e2',
//   },
//   navText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   coinIcon: {
//         width: 24,
//        height: 24,
//        tintColor: 'gold',
//        },
// });

// export default ProductScreen;




// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Image,
//   Modal,
//   Alert,
// } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Kalyan',
//     pincode: '421201',
//   });

//   const [searchQuery, setSearchQuery] = useState('');
//   const [showFlashScreen, setShowFlashScreen] = useState(true);
//   const [activeNavItem, setActiveNavItem] = useState('Home');

//   useEffect(() => {
//     const timer = setTimeout(() => setShowFlashScreen(false), 3000); // Flash screen timeout
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSearch = () => {
//     Alert.alert('Search', `You searched for: ${searchQuery}`);
//   };

//   const categories = [
//     { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//     { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//     { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//     { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//     { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//   { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
// { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
// { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },

//   ];

//   const bottomNavItems = [
//     { id: 'Home', label: 'Home', icon: 'https://img.icons8.com/color/96/home.png' },
//     { id: 'Categories', label: 'Categories', icon: 'https://img.icons8.com/color/96/category.png' },
//     { id: 'Mall', label: 'Mall', icon: 'https://img.icons8.com/color/96/shopping-mall.png' },
//     { id: 'Video Finds', label: 'Video', icon: 'https://img.icons8.com/color/96/video.png' },
//     { id: 'My Orders', label: 'Orders', icon: 'https://img.icons8.com/color/96/order-history.png' },
//   ];

//   const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
//     <View style={styles.categoryContainer}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const handleNavItemPress = (item: string) => {
//     setActiveNavItem(item);
//   };

//   return (
//     <View style={styles.container}>
//       <Modal visible={showFlashScreen} animationType="fade" transparent>
//         <View style={styles.flashScreenContainer}>
//           <Text style={styles.flashScreenText}>Welcome to Our Store!</Text>
//         </View>
//       </Modal>

//       <ScrollView>
//         <View style={styles.profileSection}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
//             style={styles.profileImage}
//           />
//           <View style={styles.profileDetails}>
//             <Text style={styles.profileName}>Nitu Nair</Text>
//             <Text style={styles.coinsText}>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=63810&format=png&color=000000' }}
//                 style={styles.coinIcon}
//               />{' '}
//               0 Coins
//             </Text>
//           </View>
//         </View>

//         <View style={styles.searchContainer}>
//           <TextInput
//             placeholder="Search by Keyword or Product ID"
//             style={styles.searchInput}
//             placeholderTextColor="#AAA"
//             value={searchQuery}
//             onChangeText={(text) => setSearchQuery(text)}
//           />
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/search.png' }}
//               style={styles.searchIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.locationContainer}>
//           <Text>Delivering to {location.city} - {location.pincode}</Text>
//         </View>

//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Categories</Text>
//         </View>
//         <FlatList
//           data={categories}
//           horizontal
//           renderItem={renderCategory}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />
//       </ScrollView>

//       <View style={styles.curvedBottomNavBar}>
//         {bottomNavItems.map((item) => (
//           <TouchableOpacity
//             key={item.id}
//             style={styles.navItem}
//             onPress={() => handleNavItemPress(item.id)}>
//             <Image
//               source={{ uri: item.icon }}
//               style={[
//                 styles.navIcon,
//                 activeNavItem === item.id && styles.activeNavIcon,
//               ]}
//             />
//             <Text
//               style={[
//                 styles.navLabel,
//                 activeNavItem === item.id && styles.activeNavLabel,
//               ]}>
//               {item.label}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F4F4F9',
//   },
//   flashScreenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   flashScreenText: {
//     fontSize: 24,
//     color: '#fff',
//   },
//   profileSection: {
//     flexDirection: 'row',
//     padding: 20,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight: 15,
//   },
//   profileDetails: {
//     flex: 1,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   coinsText: {
//     fontSize: 14,
//     color: '#888',
//   },
//   coinIcon: {
//     width: 20,
//     height: 20,
//     tintColor: 'gold',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     padding: 15,
//     backgroundColor: '#fff',
//   },
//   searchInput: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 25,
//   },
//   searchButton: {
//     marginLeft: 10,
//   },
//   searchIcon: {
//     width: 24,
//     height: 24,
//   },
//   locationContainer: {
//     padding: 15,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   sectionHeader: {
//     padding: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   flatListContent: {
//     paddingHorizontal: 15,
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   categoryIcon: {
//     width: 50,
//     height: 50,
//   },
//   categoryText: {
//     fontSize: 12,
//     color: '#888',
//   },
//   curvedBottomNavBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 70,
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 10,
//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   navIcon: {
//     width: 24,
//     height: 24,
//   },
//   navLabel: {
//     fontSize: 12,
//     color: '#888',
//   },
//   activeNavIcon: {
//     tintColor: '#6A0DAD',
//   },
//   activeNavLabel: {
//     color: '#6A0DAD',
//   },
// });

// export default ProductScreen;




// import React, { useState, useEffect } from 'react';
// import { Alert } from 'react-native';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Image,
//   Modal,
// } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Kalyan',
//     pincode: '421201',
//   });

//   const [searchQuery, setSearchQuery] = useState('');
//   const [showFlashScreen, setShowFlashScreen] = useState(true);
//   const [activeNavItem, setActiveNavItem] = useState('Home');

//   useEffect(() => {
//     // Flash screen timeout
//     const timer = setTimeout(() => setShowFlashScreen(false), 3000); // Display for 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSearch = () => {
//     Alert.alert('Search', `You searched for: ${searchQuery}`);
//   };

//   const categories = [
//     { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//     { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//     { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//     { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//     { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//     { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//     { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//     { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   ];

//   const flashcards = [
//     { id: 1, title: 'Summer Sale', description: 'Up to 50% off on all summer wear!', image: 'https://img.icons8.com/color/96/sale.png' },
//     { id: 2, title: 'New Arrivals', description: 'Check out our latest collection.', image: 'https://img.icons8.com/color/96/new.png' },
//     { id: 3, title: 'Exclusive Deals', description: 'Members get extra 10% off.', image: 'https://img.icons8.com/color/96/discount.png' },
//   ];

//   const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
//     <View style={styles.categoryContainer}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashcard = ({ item }: { item: { title: string; description: string; image: string } }) => (
//     <View style={styles.flashcard}>
//       <Image source={{ uri: item.image }} style={styles.flashcardImage} />
//       <Text style={styles.flashcardTitle}>{item.title}</Text>
//       <Text style={styles.flashcardDescription}>{item.description}</Text>
//     </View>
//   );

//   const handleNavItemPress = (item: string) => {
//     setActiveNavItem(item);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Flash Screen */}
//       <Modal visible={showFlashScreen} animationType="fade" transparent>
//         <View style={styles.flashScreenContainer}>
//           <Text style={styles.flashScreenText}>Welcome to Our Store!</Text>
//         </View>
//       </Modal>

//       {/* Main Content */}
//       <ScrollView>
//         {/* Profile and Coins */}
//         <View style={styles.profileSection}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
//             style={styles.profileImage}
//           />
//           <View style={styles.profileDetails}>
//             <Text style={styles.profileName}>Nitu Nair</Text>
//             <Text style={styles.coinsText}>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=63810&format=png&color=000000' }}
//                 style={styles.coinIcon}
//               />{' '}
//               0 Coins
//             </Text>
//           </View>
//           <View style={styles.profileActions}>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=114436&format=png&color=000000' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/like.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/shopping-cart.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Search Bar */}
//         <View style={styles.searchContainer}>
//           <TextInput
//             placeholder="Search by Keyword or Product ID"
//             style={styles.searchInput}
//             placeholderTextColor="#AAA"
//             value={searchQuery}
//             onChangeText={(text) => setSearchQuery(text)}
//           />
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/search.png' }}
//               style={styles.searchIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Location */}
//         <View style={styles.locationContainer}>
//           <Text>Delivering to {location.city} - {location.pincode}</Text>
//         </View>

//         {/* Categories */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Categories</Text>
//         </View>
//         <FlatList
//           data={categories}
//           horizontal
//           renderItem={renderCategory}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />

//         {/* Flashcards */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Flashcards</Text>
//         </View>
//         <FlatList
//           data={flashcards}
//           horizontal
//           renderItem={renderFlashcard}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />
//       </ScrollView>

//       {/* Curved Bottom Navigation Bar */}
//       <View style={styles.curvedBottomNavBar}>
//         {bottomNavItems.map((item) => (
//           <TouchableOpacity
//             key={item.id}
//             style={[styles.navItem, activeNavItem === item.id && styles.activeNavItem]}
//             onPress={() => handleNavItemPress(item.id)}
//           >
//             <Image source={{ uri: item.icon }} style={styles.navIcon} />
//             <Text style={styles.navText}>{item.label}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// const bottomNavItems = [
//   { id: 'Home', label: 'Home', icon: 'https://img.icons8.com/color/96/home.png' },
//   { id: 'Categories', label: 'Categories', icon: 'https://img.icons8.com/color/96/category.png' },
//   { id: 'Mall', label: 'Mall', icon: 'https://img.icons8.com/color/96/shopping-mall.png' },
//   { id: 'Video Finds', label: 'Video', icon: 'https://img.icons8.com/color/96/video.png' },
//   { id: 'My Orders', label: 'Orders', icon: 'https://img.icons8.com/color/96/order-history.png' },
// ];

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F4F4F9',
//   },
//   curvedBottomNavBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 70,
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//   },
//   navItem: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   activeNavItem: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#6A3DFF',
//   },
//   navIcon: {
//     width: 30,
//     height: 30,
//   },
//   navText: {
//     fontSize: 12,
//     color: '#6A3DFF',
//   },
//   profileSection: {
//     flexDirection: 'row',
//     padding: 15,
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     margin: 10,
//     elevation: 3,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   profileDetails: {
//     marginLeft: 15,
//     justifyContent: 'center',
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   coinsText: {
//     fontSize: 14,
//     color: '#888',
//   },
//   profileActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginLeft: 'auto',
//   },
//   actionIcon: {
//     width: 30,
//     height: 30,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 25,
//     margin: 15,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     paddingLeft: 10,
//     color: '#333',
//   },
//   searchButton: {
//     padding: 10,
//   },
//   searchIcon: {
//     width: 25,
//     height: 25,
//   },
//   locationContainer: {
//     backgroundColor: '#FFF',
//     padding: 15,
//     margin: 15,
//     borderRadius: 10,
//     elevation: 2,
//   },
//   sectionHeader: {
//     marginVertical: 10,
//     marginLeft: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#6A3DFF',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   categoryIcon: {
//     width: 60,
//     height: 60,
//   },
//   categoryText: {
//     marginTop: 5,
//     fontSize: 14,
//   },
//   flatListContent: {
//     paddingLeft: 15,
//   },
//   flashcard: {
//     backgroundColor: '#FFF',
//     margin: 10,
//     padding: 15,
//     borderRadius: 10,
//     width: 200,
//     elevation: 3,
//   },
//   flashcardImage: {
//     width: '100%',
//     height: 120,
//     resizeMode: 'contain',
//   },
//   flashcardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 5,
//   },
//   flashcardDescription: {
//     fontSize: 14,
//     color: '#555',
//   },
//   flashScreenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   flashScreenText: {
//     fontSize: 24,
//     color: '#FFF',
//     fontWeight: 'bold',
//   },
//   coinIcon: {
//       width: 20,
//       height: 20,
//       tintColor: 'gold',
//      },
// });

// export default ProductScreen;



// import React, { useState, useEffect } from 'react';
// import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList, ScrollView, ImageBackground } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Kalyan',
//     pincode: '421201',
//   });

//   const [searchQuery, setSearchQuery] = useState('');
//   const [showFlashScreen, setShowFlashScreen] = useState(true);
//   const [activeNavItem, setActiveNavItem] = useState('Home');

//   useEffect(() => {
//     // Flash screen timeout
//     const timer = setTimeout(() => setShowFlashScreen(false), 3000); // Display for 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSearch = () => {
//     Alert.alert('Search', `You searched for: ${searchQuery}`);
//   };

//   const categories = [
//     { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//     { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//     { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//     { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//     { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//     { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//     { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//     { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   ];

//   const flashcards = [
//     { id: 1, title: 'Summer Sale', description: 'Up to 50% off on all summer wear!', image: 'https://img.icons8.com/color/96/sale.png' },
//     { id: 2, title: 'New Arrivals', description: 'Check out our latest collection.', image: 'https://img.icons8.com/color/96/new.png' },
//     { id: 3, title: 'Exclusive Deals', description: 'Members get extra 10% off.', image: 'https://img.icons8.com/color/96/discount.png' },
//   ];

//   const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
//     <View style={styles.categoryContainer}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashcard = ({ item }: { item: { title: string; description: string; image: string } }) => (
//     <View style={styles.flashcard}>
//       <Image source={{ uri: item.image }} style={styles.flashcardImage} />
//       <Text style={styles.flashcardTitle}>{item.title}</Text>
//       <Text style={styles.flashcardDescription}>{item.description}</Text>
//     </View>
//   );

//   const handleNavItemPress = (item: string) => {
//     setActiveNavItem(item);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Flash Screen */}
//       <Modal visible={showFlashScreen} animationType="fade" transparent>
//         <View style={styles.flashScreenContainer}>
//           <Text style={styles.flashScreenText}>Welcome to Our Store!</Text>
//         </View>
//       </Modal>

//       {/* Main Content */}
//       <ScrollView>
//         {/* Profile and Coins */}
//         <View style={styles.profileSection}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
//             style={styles.profileImage}
//           />
//           <View style={styles.profileDetails}>
//             <Text style={styles.profileName}>Nitu Nair</Text>
//             <Text style={styles.coinsText}>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=63810&format=png&color=000000' }}
//                 style={styles.coinIcon}
//               />{' '}
//               0 Coins
//             </Text>
//           </View>
//           <View style={styles.profileActions}>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=114436&format=png&color=000000' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/like.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/shopping-cart.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Search Bar */}
//         <View style={styles.searchContainer}>
//           <TextInput
//             placeholder="Search by Keyword or Product ID"
//             style={styles.searchInput}
//             placeholderTextColor="#AAA"
//             value={searchQuery}
//             onChangeText={(text) => setSearchQuery(text)}
//           />
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/search.png' }}
//               style={styles.searchIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Location */}
//         <View style={styles.locationContainer}>
//           <Text>Delivering to {location.city} - {location.pincode}</Text>
//         </View>

//         {/* Categories */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Categories</Text>
//         </View>
//         <FlatList
//           data={categories}
//           horizontal
//           renderItem={renderCategory}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />

//         {/* Flashcards */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Flashcards</Text>
//         </View>
//         <FlatList
//           data={flashcards}
//           horizontal
//           renderItem={renderFlashcard}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />
//       </ScrollView>

//       {/* Curved Bottom Navigation Bar with Wave Background */}
//       <ImageBackground
//         source={{ uri: 'https://img.icons8.com/cloudinary/wave.png' }} // Your wave background image URL
//         style={styles.curvedBottomNavBar}
//       >
//         {bottomNavItems.map((item) => (
//           <TouchableOpacity
//             key={item.id}
//             style={[styles.navItem, activeNavItem === item.id && styles.activeNavItem]}
//             onPress={() => handleNavItemPress(item.id)}
//           >
//             <Image source={{ uri: item.icon }} style={styles.navIcon} />
//             <Text style={styles.navText}>{item.label}</Text>
//           </TouchableOpacity>
//         ))}
//       </ImageBackground>
//     </View>
//   );
// };

// const bottomNavItems = [
//   { id: 'Home', label: 'Home', icon: 'https://img.icons8.com/color/96/home.png' },
//   { id: 'Categories', label: 'Categories', icon: 'https://img.icons8.com/color/96/category.png' },
//   { id: 'Mall', label: 'Mall', icon: 'https://img.icons8.com/color/96/shopping-mall.png' },
//   { id: 'Video Finds', label: 'Video', icon: 'https://img.icons8.com/color/96/video.png' },
//   { id: 'My Orders', label: 'Orders', icon: 'https://img.icons8.com/color/96/order-delivered.png' },
// ];

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F0F0',
//   },
//   profileSection: {
//     flexDirection: 'row',
//     padding: 10,
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     margin: 10,
//     elevation: 3,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   profileDetails: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   coinsText: {
//     fontSize: 14,
//     color: '#888',
//   },
//   profileActions: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   actionIcon: {
//     width: 24,
//     height: 24,
//     marginLeft: 10,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#FFF',
//     padding: 8,
//     borderRadius: 20,
//     margin: 10,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 14,
//     paddingLeft: 10,
//     color: '#333',
//   },
//   searchButton: {
//     padding: 10,
//   },
//   searchIcon: {
//     width: 20,
//     height: 20,
//   },
//   locationContainer: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     margin: 10,
//     borderRadius: 8,
//     elevation: 2,
//   },
//   sectionHeader: {
//     marginVertical: 5,
//     marginLeft: 10,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#6A3DFF',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   categoryIcon: {
//     width: 40,
//     height: 40,
//   },
//   categoryText: {
//     marginTop: 5,
//     fontSize: 12,
//   },
//   flatListContent: {
//     paddingLeft: 10,
//   },
//   flashcard: {
//     backgroundColor: '#FFF',
//     margin: 8,
//     padding: 12,
//     borderRadius: 8,
//     width: 180,
//     elevation: 3,
//   },
//   flashcardImage: {
//     width: '100%',
//     height: 100,
//     resizeMode: 'contain',
//   },
//   flashcardTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   flashcardDescription: {
//     fontSize: 12,
//     color: '#555',
//   },
//   curvedBottomNavBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 15,
//     backgroundColor: 'transparent', // Keep this transparent as the background is set via ImageBackground
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     height: 80,
//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   activeNavItem: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#FFF',
//   },
//   navIcon: {
//     width: 24,
//     height: 24,
//   },
//   navText: {
//     fontSize: 10,
//     color: '#FFF',
//   },
//   flashScreenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//   },
//   flashScreenText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFF',
//   },
//   coinIcon: {
//     width: 15,
//     height: 15,
//   },
// });

// export default ProductScreen;




// import React, { useState, useEffect } from 'react';
// import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList, ScrollView, ImageBackground } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Kalyan',
//     pincode: '421201',
//   });

//   const [searchQuery, setSearchQuery] = useState('');
//   const [showFlashScreen, setShowFlashScreen] = useState(true);
//   const [activeNavItem, setActiveNavItem] = useState('Home');

//   useEffect(() => {
//     // Flash screen timeout
//     const timer = setTimeout(() => setShowFlashScreen(false), 3000); // Display for 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSearch = () => {
//     Alert.alert('Search', `You searched for: ${searchQuery}`);
//   };

//   const categories = [
//     { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//     { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//     { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//     { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//     { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//     { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//     { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//     { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   ];

//   const flashcards = [
//     { id: 1, title: 'Summer Sale', description: 'Up to 50% off on all summer wear!', image: 'https://img.icons8.com/color/96/sale.png' },
//     { id: 2, title: 'New Arrivals', description: 'Check out our latest collection.', image: 'https://img.icons8.com/color/96/new.png' },
//     { id: 3, title: 'Exclusive Deals', description: 'Members get extra 10% off.', image: 'https://img.icons8.com/color/96/discount.png' },
//   ];

//   const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
//     <View style={styles.categoryContainer}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashcard = ({ item }: { item: { title: string; description: string; image: string } }) => (
//     <View style={styles.flashcard}>
//       <Image source={{ uri: item.image }} style={styles.flashcardImage} />
//       <Text style={styles.flashcardTitle}>{item.title}</Text>
//       <Text style={styles.flashcardDescription}>{item.description}</Text>
//     </View>
//   );

//   const handleNavItemPress = (item: string) => {
//     setActiveNavItem(item);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Flash Screen */}
//       <Modal visible={showFlashScreen} animationType="fade" transparent>
//         <View style={styles.flashScreenContainer}>
//           <Text style={styles.flashScreenText}>Welcome to Our Store!</Text>
//         </View>
//       </Modal>

//       {/* Main Content */}
//       <ScrollView>
//         {/* Profile and Coins */}
//         <View style={styles.profileSection}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
//             style={styles.profileImage}
//           />
//           <View style={styles.profileDetails}>
//             <Text style={styles.profileName}>Nitu Nair</Text>
//             <Text style={styles.coinsText}>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=63810&format=png&color=000000' }}
//                 style={styles.coinIcon}
//               />{' '}
//               0 Coins
//             </Text>
//           </View>
//           <View style={styles.profileActions}>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=114436&format=png&color=000000' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/like.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/shopping-cart.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Search Bar */}
//         <View style={styles.searchContainer}>
//           <TextInput
//             placeholder="Search by Keyword or Product ID"
//             style={styles.searchInput}
//             placeholderTextColor="#AAA"
//             value={searchQuery}
//             onChangeText={(text) => setSearchQuery(text)}
//           />
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/search.png' }}
//               style={styles.searchIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Location */}
//         <View style={styles.locationContainer}>
//           <Text>Delivering to {location.city} - {location.pincode}</Text>
//         </View>

//         {/* Categories */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Categories</Text>
//         </View>
//         <FlatList
//           data={categories}
//           horizontal
//           renderItem={renderCategory}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />

//         {/* Flashcards */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Flashcards</Text>
//         </View>
//         <FlatList
//           data={flashcards}
//           horizontal
//           renderItem={renderFlashcard}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />
//       </ScrollView>

//       {/* Curved Bottom Navigation Bar with Wave Background */}
//       <ImageBackground
//         source={{ uri: 'C:\Users\ASUS\Desktop\TryTastic\TryTastic\src\assets\images\wave.png' }} // Your wave background image URL
//         style={styles.curvedBottomNavBar}
//       >
//         {bottomNavItems.map((item) => (
//           <TouchableOpacity
//             key={item.id}
//             style={[styles.navItem, activeNavItem === item.id && styles.activeNavItem]}
//             onPress={() => handleNavItemPress(item.id)}
//           >
//             <Image source={{ uri: item.icon }} style={styles.navIcon} />
//             <Text style={styles.navText}>{item.label}</Text>
//           </TouchableOpacity>
//         ))}
//       </ImageBackground>
//     </View>
//   );
// };

// const bottomNavItems = [
//   { id: 'Home', label: 'Home', icon: 'https://img.icons8.com/color/96/home.png' },
//   { id: 'Categories', label: 'Categories', icon: 'https://img.icons8.com/color/96/category.png' },
//   { id: 'Mall', label: 'Mall', icon: 'https://img.icons8.com/color/96/shopping-mall.png' },
//   { id: 'Video Finds', label: 'Video', icon: 'https://img.icons8.com/color/96/video.png' },
//   { id: 'My Orders', label: 'Orders', icon: 'https://img.icons8.com/color/96/order-delivered.png' },
// ];

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F0F0',
//   },
//   flashScreenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   flashScreenText: {
//     color: '#fff',
//     fontSize: 24,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     padding: 16,
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     margin: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 10,
//     elevation: 3,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   profileDetails: {
//     flex: 1,
//     marginLeft: 16,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   coinsText: {
//     fontSize: 14,
//     color: '#888',
//   },
//   profileActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginLeft: 8,
//   },
//   actionIcon: {
//     width: 24,
//     height: 24,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     backgroundColor: '#FFF',
//     margin: 10,
//     borderRadius: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   searchInput: {
//     flex: 1,
//     padding: 8,
//     fontSize: 16,
//     borderRadius: 15,
//   },
//   searchButton: {
//     padding: 8,
//   },
//   searchIcon: {
//     width: 24,
//     height: 24,
//   },
//   locationContainer: {
//     padding: 10,
//     backgroundColor: '#FFF',
//     margin: 10,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   sectionHeader: {
//     paddingHorizontal: 16,
//     marginVertical: 8,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   flatListContent: {
//     paddingHorizontal: 16,
//   },
//   categoryContainer: {
//     marginRight: 16,
//     alignItems: 'center',
//   },
//   categoryIcon: {
//     width: 50,
//     height: 50,
//   },
//   categoryText: {
//     fontSize: 14,
//     marginTop: 4,
//   },
//   flashcard: {
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     padding: 16,
//     marginRight: 16,
//     width: 250,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 10,
//     elevation: 3,
//   },
//   flashcardImage: {
//     width: 40,
//     height: 40,
//     marginBottom: 8,
//   },
//   flashcardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   flashcardDescription: {
//     fontSize: 12,
//     color: '#777',
//   },
//   curvedBottomNavBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 70,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//   },
//   navItem: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   activeNavItem: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#6A0DAD',
//   },
//   navIcon: {
//     width: 24,
//     height: 24,
//   },
//   navText: {
//     fontSize: 12,
//     marginTop: 4,
//   },
//   coinIcon: {
//       width: 15,
//       height: 15,
//      },
// });

// export default ProductScreen;

//good code

// import React, { useState, useEffect } from 'react';
// import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList, ScrollView, ImageBackground } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Kalyan',
//     pincode: '421201',
//   });

//   const [searchQuery, setSearchQuery] = useState('');
//   const [showFlashScreen, setShowFlashScreen] = useState(true);
//   const [activeNavItem, setActiveNavItem] = useState('Home');

//   useEffect(() => {
//     // Flash screen timeout
//     const timer = setTimeout(() => setShowFlashScreen(false), 3000); // Display for 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSearch = () => {
//     Alert.alert('Search', `You searched for: ${searchQuery}`);
//   };

//   const categories = [
//     { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//     { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//     { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//     { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//     { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//     { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//     { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//     { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   ];

//   const flashcards = [
//     { id: 1, title: 'Summer Sale', description: 'Up to 50% off on all summer wear!', image: 'https://img.icons8.com/color/96/sale.png' },
//     { id: 2, title: 'New Arrivals', description: 'Check out our latest collection.', image: 'https://img.icons8.com/color/96/new.png' },
//     { id: 3, title: 'Exclusive Deals', description: 'Members get extra 10% off.', image: 'https://img.icons8.com/color/96/discount.png' },
//   ];

//   const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
//     <View style={styles.categoryContainer}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashcard = ({ item }: { item: { title: string; description: string; image: string } }) => (
//     <View style={styles.flashcard}>
//       <Image source={{ uri: item.image }} style={styles.flashcardImage} />
//       <Text style={styles.flashcardTitle}>{item.title}</Text>
//       <Text style={styles.flashcardDescription}>{item.description}</Text>
//     </View>
//   );

//   const handleNavItemPress = (item: string) => {
//     setActiveNavItem(item);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Flash Screen */}
//       <Modal visible={showFlashScreen} animationType="fade" transparent>
//         <View style={styles.flashScreenContainer}>
//           <Text style={styles.flashScreenText}>Welcome to Our Store!</Text>
//         </View>
//       </Modal>

//       {/* Main Content */}
//       <ScrollView>
//         {/* Profile and Coins */}
//         <View style={styles.profileSection}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
//             style={styles.profileImage}
//           />
//           <View style={styles.profileDetails}>
//             <Text style={styles.profileName}>Nitu Nair</Text>
//             <Text style={styles.coinsText}>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=63810&format=png&color=000000' }}
//                 style={styles.coinIcon}
//               />{' '}
//               0 Coins
//             </Text>
//           </View>
//           <View style={styles.profileActions}>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=114436&format=png&color=000000' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/like.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/shopping-cart.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Search Bar */}
//         <View style={styles.searchContainer}>
//           <TextInput
//             placeholder="Search by Keyword or Product ID"
//             style={styles.searchInput}
//             placeholderTextColor="#AAA"
//             value={searchQuery}
//             onChangeText={(text) => setSearchQuery(text)}
//           />
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/search.png' }}
//               style={styles.searchIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Location */}
//         <View style={styles.locationContainer}>
//           <Text>Delivering to {location.city} - {location.pincode}</Text>
//         </View>

//         {/* Categories */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Categories</Text>
//         </View>
//         <FlatList
//           data={categories}
//           horizontal
//           renderItem={renderCategory}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />

//         {/* Flashcards */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Flashcards</Text>
//         </View>
//         <FlatList
//           data={flashcards}
//           horizontal
//           renderItem={renderFlashcard}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />
//       </ScrollView>

//       {/* Curved Bottom Navigation Bar with Wave Background */}
//       <ImageBackground
//         source={{ uri: 'https://img.icons8.com/cloudinary/wave.png' }} // Your wave background image URL
//         style={styles.curvedBottomNavBar}
//         imageStyle={styles.bottomNavImage}
//       >
//         {bottomNavItems.map((item) => (
//           <TouchableOpacity
//             key={item.id}
//             style={[styles.navItem, activeNavItem === item.id && styles.activeNavItem]}
//             onPress={() => handleNavItemPress(item.id)}
//           >
//             <Image source={{ uri: item.icon }} style={styles.navIcon} />
//             <Text style={styles.navText}>{item.label}</Text>
//           </TouchableOpacity>
//         ))}
//       </ImageBackground>
//     </View>
//   );
// };

// const bottomNavItems = [
//   { id: 'Home', label: 'Home', icon: 'https://img.icons8.com/color/96/home.png' },
//   { id: 'Categories', label: 'Categories', icon: 'https://img.icons8.com/color/96/category.png' },
//   { id: 'Mall', label: 'Mall', icon: 'https://img.icons8.com/color/96/shopping-mall.png' },
//   { id: 'Video Finds', label: 'Video', icon: 'https://img.icons8.com/color/96/video.png' },
//   { id: 'My Orders', label: 'Orders', icon: 'https://img.icons8.com/color/96/order-history.png' },
// ];

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   flashScreenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   flashScreenText: {
//     color: '#fff',
//     fontSize: 24,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     padding: 16,
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     margin: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 10,
//     elevation: 3,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   profileDetails: {
//     flex: 1,
//     marginLeft: 16,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   coinsText: {
//     fontSize: 14,
//     color: '#888',
//   },
//   profileActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginLeft: 8,
//   },
//   actionIcon: {
//     width: 24,
//     height: 24,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     backgroundColor: '#FFF',
//     margin: 10,
//     borderRadius: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   searchInput: {
//     flex: 1,
//     padding: 8,
//     fontSize: 16,
//     borderRadius: 15,
//   },
//   searchButton: {
//     padding: 8,
//   },
//   searchIcon: {
//     width: 24,
//     height: 24,
//   },
//   locationContainer: {
//     padding: 10,
//     backgroundColor: '#FFF',
//     margin: 10,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   sectionHeader: {
//     paddingHorizontal: 16,
//     marginVertical: 8,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   flatListContent: {
//     paddingHorizontal: 16,
//   },
//   categoryContainer: {
//     marginRight: 16,
//     alignItems: 'center',
//   },
//   categoryIcon: {
//     width: 50,
//     height: 50,
//   },
//   categoryText: {
//     fontSize: 14,
//     marginTop: 4,
//   },
//   flashcard: {
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     padding: 16,
//     marginRight: 16,
//     width: 250,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 10,
//     elevation: 3,
//   },
//   flashcardImage: {
//     width: 40,
//     height: 40,
//     marginBottom: 8,
//   },
//   flashcardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   flashcardDescription: {
//     fontSize: 12,
//     color: '#777',
//   },
//   curvedBottomNavBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 70,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//   },
//   bottomNavImage: {
//     resizeMode: 'cover',
//     flex: 1,
//   },
//   navItem: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   activeNavItem: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#6A0DAD',
//   },
//   navIcon: {
//     width: 24,
//     height: 24,
//   },
//   navText: {
//     fontSize: 12,
//     marginTop: 4,
//   },
//   coinIcon: {
//         width: 15,
//        height: 15,
//        },
// });

// export default ProductScreen;




// // import React, { useState, useEffect } from 'react';
// // // import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList, ScrollView, ImageBackground } from 'react-native';

// // // const ProductScreen: React.FC = () => {
// // //   const [location] = useState<{ city: string; pincode: string }>({
// // //     city: 'Kalyan',
// // //     pincode: '421201',
// // //   });

// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const [showFlashScreen, setShowFlashScreen] = useState(true);
// // //   const [activeNavItem, setActiveNavItem] = useState('Home');

// // //   useEffect(() => {
// // //     // Flash screen timeout
// // //     const timer = setTimeout(() => setShowFlashScreen(false), 3000); // Display for 3 seconds
// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   const handleSearch = () => {
// // //     Alert.alert('Search', `You searched for: ${searchQuery}`);
// // //   };

// // //   const categories = [
// // //     { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
// // //     { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
// // //     { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
// // //     { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
// // //     { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
// // //     { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
// // //     { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
// // //     { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
// // //     { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
// // //   ];

// //   const flashcards = [
// //     { id: 1, title: 'Summer Sale', description: 'Up to 50% off on all summer wear!', image: 'https://img.icons8.com/color/96/sale.png' },
// //     { id: 2, title: 'New Arrivals', description: 'Check out our latest collection.', image: 'https://img.icons8.com/color/96/new.png' },
// //     { id: 3, title: 'Exclusive Deals', description: 'Members get extra 10% off.', image: 'https://img.icons8.com/color/96/discount.png' },
// //   ];

// //   const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
// //     <View style={styles.categoryContainer}>
// //       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
// //       <Text style={styles.categoryText}>{item.name}</Text>
// //     </View>
// //   );

// //   const renderFlashcard = ({ item }: { item: { title: string; description: string; image: string } }) => (
// //     <View style={styles.flashcard}>
// //       <Image source={{ uri: item.image }} style={styles.flashcardImage} />
// //       <Text style={styles.flashcardTitle}>{item.title}</Text>
// //       <Text style={styles.flashcardDescription}>{item.description}</Text>
// //     </View>
// //   );

// //   const handleNavItemPress = (item: string) => {
// //     setActiveNavItem(item);
// //   };

// //   // New sections for images (Best Selling Products, Daily Deals, etc.)
// //   const sectionImages = [
// //     { id: 1, title: 'Best Selling Products', image: 'https://img.icons8.com/cloudinary/best-selling.png' },
// //     { id: 2, title: 'Trytastic Daily Deals', image: 'https://img.icons8.com/cloudinary/deals.png' },
// //     { id: 3, title: 'Premium Quality Range', image: 'https://img.icons8.com/cloudinary/premium-quality.png' },
// //     { id: 4, title: 'Low Price Store', image: 'https://img.icons8.com/cloudinary/low-price.png' },
// //     { id: 5, title: 'Trends', image: 'https://img.icons8.com/cloudinary/trends.png' },
// //   ];

// //   // Bottom Navigation Items
// //   const bottomNavItems = [
// //     { id: 'Home', name: 'Home', icon: 'https://img.icons8.com/color/48/home.png' },
// //     { id: 'Search', name: 'Search', icon: 'https://img.icons8.com/color/48/search.png' },
// //     { id: 'Cart', name: 'Cart', icon: 'https://img.icons8.com/color/48/shopping-cart.png' },
// //     { id: 'Profile', name: 'Profile', icon: 'https://img.icons8.com/color/48/user.png' },
// //   ];

// //   return (
// //     <View style={styles.container}>
// //       {/* Flash Screen */}
// //       <Modal visible={showFlashScreen} animationType="fade" transparent>
// //         <View style={styles.flashScreenContainer}>
// //           <Text style={styles.flashScreenText}>Welcome to Our Store!</Text>
// //         </View>
// //       </Modal>

// //       {/* Main Content */}
// //       <ScrollView>
// //         {/* Profile and Coins */}
// //         <View style={styles.profileSection}>
// //           <Image
// //             source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
// //             style={styles.profileImage}
// //           />
// //           <View style={styles.profileDetails}>
// //             <Text style={styles.profileName}>Nitu Nair</Text>
// //             <Text style={styles.coinsText}>
// //               <Image
// //                 source={{ uri: 'https://img.icons8.com/?size=100&id=63810&format=png&color=000000' }}
// //                 style={styles.coinIcon}  // Add this style in styles object
// //               />{' '}
// //               0 Coins
// //             </Text>
// //           </View>
// //           <View style={styles.profileActions}>
// //             <TouchableOpacity>
// //               <Image
// //                 source={{ uri: 'https://img.icons8.com/?size=100&id=114436&format=png&color=000000' }}
// //                 style={styles.actionIcon}
// //               />
// //             </TouchableOpacity>
// //             <TouchableOpacity>
// //               <Image
// //                 source={{ uri: 'https://img.icons8.com/color/48/like.png' }}
// //                 style={styles.actionIcon}
// //               />
// //             </TouchableOpacity>
// //             <TouchableOpacity>
// //               <Image
// //                 source={{ uri: 'https://img.icons8.com/color/48/shopping-cart.png' }}
// //                 style={styles.actionIcon}
// //               />
// //             </TouchableOpacity>
// //           </View>
// //         </View>

// //         {/* Search Bar */}
// //         <View style={styles.searchContainer}>
// //           <TextInput
// //             placeholder="Search by Keyword or Product ID"
// //             style={styles.searchInput}
// //             placeholderTextColor="#AAA"
// //             value={searchQuery}
// //             onChangeText={(text) => setSearchQuery(text)}
// //           />
// //           <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
// //             <Image
// //               source={{ uri: 'https://img.icons8.com/color/48/search.png' }}
// //               style={styles.searchIcon}
// //             />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Location */}
// //         <View style={styles.locationContainer}>
// //           <Text>Delivering to {location.city} - {location.pincode}</Text>
// //         </View>

// //         {/* New Image Sections */}
// //         {sectionImages.map((section) => (
// //           <View key={section.id} style={styles.sectionContainer}>
// //             <Text style={styles.sectionTitle}>{section.title}</Text>
// //             <Image source={{ uri: section.image }} style={styles.sectionImage} />
// //           </View>
// //         ))}

// //         {/* Categories */}
// //         <View style={styles.sectionContainer}>
// //           <Text style={styles.sectionTitle}>Categories</Text>
// //           <FlatList
// //             data={categories}
// //             renderItem={renderCategory}
// //             keyExtractor={(item) => item.id.toString()}
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //           />
// //         </View>

// //         {/* Flashcards */}
// //         <View style={styles.sectionContainer}>
// //           <Text style={styles.sectionTitle}>Flashcards</Text>
// //           <FlatList
// //             data={flashcards}
// //             renderItem={renderFlashcard}
// //             keyExtractor={(item) => item.id.toString()}
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //           />
// //         </View>
// //       </ScrollView>

// //       {/* Bottom Navigation Bar */}
// //       <ImageBackground
// //         source={{ uri: 'https://img.icons8.com/?size=100&id=16392&format=png&color=000000' }}
// //         style={styles.curvedBottomNavBar}
// //       >
// //         {bottomNavItems.map((item) => (
// //           <TouchableOpacity
// //             key={item.id}
// //             style={[styles.navItem, activeNavItem === item.name && styles.activeNavItem]}
// //             onPress={() => handleNavItemPress(item.name)}
// //           >
// //             <Image source={{ uri: item.icon }} style={styles.navIcon} />
// //             <Text style={styles.navText}>{item.name}</Text>
// //           </TouchableOpacity>
// //         ))}
// //       </ImageBackground>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'white',
// //   },
// //   flashScreenContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0, 0, 0, 0.6)',
// //   },
// //   flashScreenText: {
// //     fontSize: 24,
// //     color: 'white',
// //   },
// //   profileSection: {
// //     flexDirection: 'row',
// //     padding: 10,
// //     backgroundColor: '#F5F5F5',
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#EEE',
// //   },
// //   profileImage: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //   },
// //   profileDetails: {
// //     marginLeft: 10,
// //     justifyContent: 'center',
// //   },
// //   profileName: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   coinsText: {
// //     fontSize: 14,
// //     color: '#555',
// //   },
// //   profileActions: {
// //     flexDirection: 'row',
// //     marginLeft: 'auto',
// //     alignItems: 'center',
// //   },
// //   actionIcon: {
// //     width: 30,
// //     height: 30,
// //     marginHorizontal: 5,
// //   },
// //   searchContainer: {
// //     flexDirection: 'row',
// //     padding: 10,
// //     backgroundColor: '#FFF',
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#EEE',
// //   },
// //   searchInput: {
// //     flex: 1,
// //     height: 40,
// //     paddingHorizontal: 10,
// //     borderRadius: 20,
// //     borderWidth: 1,
// //     borderColor: '#DDD',
// //     backgroundColor: '#FFF',
// //   },
// //   searchButton: {
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginLeft: 10,
// //   },
// //   searchIcon: {
// //     width: 24,
// //     height: 24,
// //   },
// //   locationContainer: {
// //     padding: 10,
// //     backgroundColor: '#FFF',
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#EEE',
// //   },
// //   sectionContainer: {
// //     marginBottom: 20,
// //     alignItems: 'center',
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// //   sectionImage: {
// //     width: 100,
// //     height: 100,
// //     resizeMode: 'contain',
// //   },
// //   flatListContent: {
// //     paddingLeft: 10,
// //     paddingRight: 10,
// //   },
// //   categoryContainer: {
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 15,
// //   },
// //   categoryIcon: {
// //     width: 50,
// //     height: 50,
// //     marginBottom: 5,
// //   },
// //   categoryText: {
// //     fontSize: 14,
// //   },
// //   flashcard: {
// //     width: 200,
// //     padding: 15,
// //     margin: 10,
// //     backgroundColor: '#f7f7f7',
// //     borderRadius: 10,
// //     elevation: 2,
// //   },
// //   flashcardImage: {
// //     width: '100%',
// //     height: 100,
// //     resizeMode: 'contain',
// //   },
// //   flashcardTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginTop: 10,
// //   },
// //   flashcardDescription: {
// //     fontSize: 14,
// //     marginTop: 5,
// //   },
// //   curvedBottomNavBar: {
// //     position: 'absolute',
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     padding: 10,
// //   },
// //   bottomNavImage: {
// //     resizeMode: 'contain',
// //     height: '100%',
// //     width: '100%',
// //   },
// //   navItem: {
// //     flexDirection: 'column',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     padding: 10,
// //   },
// //   activeNavItem: {
// //     backgroundColor: 'lightgray',
// //   },
// //   navIcon: {
// //     width: 30,
// //     height: 30,
// //   },
// //   navText: {
// //     fontSize: 12,
// //     marginTop: 5,
// //   },
// //   sectionHeader: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     marginVertical: 10,
// //   },
// //   coinIcon: {
// //     width: 20,
// //     height: 20,
// //   },
// // });

// // export default ProductScreen;


// import React, { useState, useEffect } from 'react';
// import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList, ScrollView, ImageBackground } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Kalyan',
//     pincode: '421201',
//   });

//   const [searchQuery, setSearchQuery] = useState('');
//   const [showFlashScreen, setShowFlashScreen] = useState(true);
//   const [activeNavItem, setActiveNavItem] = useState('Home');

//   useEffect(() => {
//     // Flash screen timeout
//     const timer = setTimeout(() => setShowFlashScreen(false), 3000); // Display for 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSearch = () => {
//     Alert.alert('Search', `You searched for: ${searchQuery}`);
//   };

//   const categories = [
//     { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//     { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//     { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//     { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//     { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//     { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//     { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//     { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   ];

//   const sectionImages = [
//     { id: 1, title: 'Best Selling Products', image: 'https://img.icons8.com/cloudinary/best-selling.png' },
//     { id: 2, title: 'Trytastic Daily Deals', image: 'https://img.icons8.com/cloudinary/deals.png' },
//     { id: 3, title: 'Premium Quality Range', image: 'https://img.icons8.com/cloudinary/premium-quality.png' },
//     { id: 4, title: 'Low Price Store', image: 'https://img.icons8.com/cloudinary/low-price.png' },
//     { id: 5, title: 'Trends', image: 'https://img.icons8.com/cloudinary/trends.png' },
//   ];

//   const bottomNavItems = [
//     { id: 'Home', name: 'Home', icon: 'https://img.icons8.com/color/48/home.png' },
//     { id: 'Search', name: 'Search', icon: 'https://img.icons8.com/color/48/search.png' },
//     { id: 'Cart', name: 'Cart', icon: 'https://img.icons8.com/color/48/shopping-cart.png' },
//     { id: 'Profile', name: 'Profile', icon: 'https://img.icons8.com/color/48/user.png' },
//   ];

//   const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
//     <View style={styles.categoryContainer}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderSectionImage = ({ item }: { item: { title: string; image: string } }) => (
//     <View style={styles.sectionContainer}>
//       <Text style={styles.sectionTitle}>{item.title}</Text>
//       <Image source={{ uri: item.image }} style={styles.sectionImage} />
//     </View>
//   );

//   const handleNavItemPress = (item: string) => {
//     setActiveNavItem(item);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Flash Screen */}
//       <Modal visible={showFlashScreen} animationType="fade" transparent>
//         <View style={styles.flashScreenContainer}>
//           <Text style={styles.flashScreenText}>Welcome to Our Store!</Text>
//         </View>
//       </Modal>

//       {/* Main Content */}
//       <ScrollView>
//         {/* Location */}
//         <View style={styles.locationContainer}>
//           <Text>Delivering to {location.city} - {location.pincode}</Text>
//         </View>

//         {/* Categories */}
//         <View style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>Categories</Text>
//           <FlatList
//             data={categories}
//             renderItem={renderCategory}
//             keyExtractor={(item) => item.id.toString()}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//           />
//         </View>

//         {/* Recently Viewed */}
//         {sectionImages.map(renderSectionImage)}
//       </ScrollView>

//       {/* Bottom Navigation Bar */}
//       <View style={styles.curvedBottomNavBar}>
//         <FlatList
//           data={bottomNavItems}
//           horizontal
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               key={item.id}
//               style={[styles.navItem, activeNavItem === item.name && styles.activeNavItem]}
//               onPress={() => handleNavItemPress(item.name)}
//             >
//               <Image source={{ uri: item.icon }} style={styles.navIcon} />
//               <Text style={styles.navText}>{item.name}</Text>
//             </TouchableOpacity>
//           )}
//           showsHorizontalScrollIndicator={false}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   flashScreenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//   },
//   flashScreenText: {
//     fontSize: 24,
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   locationContainer: {
//     padding: 10,
//     backgroundColor: '#FFF',
//     borderBottomWidth: 1,
//     borderBottomColor: '#EEE',
//   },
//   sectionContainer: {
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//   },
//   sectionImage: {
//     width: 100,
//     height: 100,
//     resizeMode: 'contain',
//     borderRadius: 10,
//   },
//   categoryContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//     backgroundColor: '#f9f9f9',
//     padding: 10,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   categoryIcon: {
//     width: 50,
//     height: 50,
//     marginBottom: 5,
//   },
//   categoryText: {
//     fontSize: 14,
//     color: '#555',
//   },
//   curvedBottomNavBar: {
//     flexDirection: 'row',
//     padding: 10,
//     backgroundColor: '#EEE',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   navItem: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//   },
//   activeNavItem: {
//     backgroundColor: 'lightgray',
//     borderRadius: 10,
//   },
//   navIcon: {
//     width: 30,
//     height: 30,
//   },
//   navText: {
//     fontSize: 12,
//     marginTop: 5,
//     color: '#333',
//   },
// });

// export default ProductScreen;


// import React, { useState, useEffect } from 'react';
// import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList, ScrollView, ImageBackground } from 'react-native';

// const ProductScreen: React.FC = () => {
//   const [location] = useState<{ city: string; pincode: string }>({
//     city: 'Kalyan',
//     pincode: '421201',
//   });

//   const [searchQuery, setSearchQuery] = useState('');
//   const [showFlashScreen, setShowFlashScreen] = useState(true);
//   const [activeNavItem, setActiveNavItem] = useState('Home');

//   useEffect(() => {
//     // Flash screen timeout
//     const timer = setTimeout(() => setShowFlashScreen(false), 3000); // Display for 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSearch = () => {
//     Alert.alert('Search', `You searched for: ${searchQuery}`);
//   };

//   const categories = [
//     { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//     { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//     { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//     { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//     { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//     { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//     { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//     { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//     { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   ];

//   const flashcards = [
//     { id: 1, title: 'Summer Sale', description: 'Up to 50% off on all summer wear!', image: 'https://img.icons8.com/color/96/sale.png' },
//     { id: 2, title: 'New Arrivals', description: 'Check out our latest collection.', image: 'https://img.icons8.com/color/96/new.png' },
//     { id: 3, title: 'Exclusive Deals', description: 'Members get extra 10% off.', image: 'https://img.icons8.com/color/96/discount.png' },
//   ];

//   const sectionImages = [
//     { id: 1, title: 'Best Selling Products', image: 'https://img.icons8.com/cloudinary/best-selling.png' },
//     { id: 2, title: 'Trytastic Daily Deals', image: 'https://img.icons8.com/cloudinary/deals.png' },
//     { id: 3, title: 'Premium Quality Range', image: 'https://img.icons8.com/cloudinary/premium-quality.png' },
//     { id: 4, title: 'Low Price Store', image: 'https://img.icons8.com/cloudinary/low-price.png' },
//     { id: 5, title: 'Trends', image: 'https://img.icons8.com/cloudinary/trends.png' },
//   ];

//   const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
//     <View style={styles.categoryContainer}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );

//   const renderFlashcard = ({ item }: { item: { title: string; description: string; image: string } }) => (
//     <View style={styles.flashcard}>
//       <Image source={{ uri: item.image }} style={styles.flashcardImage} />
//       <Text style={styles.flashcardTitle}>{item.title}</Text>
//       <Text style={styles.flashcardDescription}>{item.description}</Text>
//     </View>
//   );

//   const renderSectionImage = ({ item }: { item: { title: string; image: string } }) => (
//     <View style={styles.sectionImageContainer}>
//       <Image source={{ uri: item.image }} style={styles.sectionImage} />
//       <Text style={styles.sectionImageTitle}>{item.title}</Text>
//     </View>
//   );

//   const handleNavItemPress = (item: string) => {
//     setActiveNavItem(item);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Flash Screen */}
//       <Modal visible={showFlashScreen} animationType="fade" transparent>
//         <View style={styles.flashScreenContainer}>
//           <Text style={styles.flashScreenText}>Welcome to Our Store!</Text>
//         </View>
//       </Modal>

//       {/* Main Content */}
//       <ScrollView>
//         {/* Profile and Coins */}
//         <View style={styles.profileSection}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
//             style={styles.profileImage}
//           />
//           <View style={styles.profileDetails}>
//             <Text style={styles.profileName}>Nitu Nair</Text>
//             <Text style={styles.coinsText}>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=63810&format=png&color=000000' }}
//                 style={styles.coinIcon}
//               />{' '}
//               0 Coins
//             </Text>
//           </View>
//           <View style={styles.profileActions}>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/?size=100&id=114436&format=png&color=000000' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/like.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={{ uri: 'https://img.icons8.com/color/48/shopping-cart.png' }}
//                 style={styles.actionIcon}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Search Bar */}
//         <View style={styles.searchContainer}>
//           <TextInput
//             placeholder="Search by Keyword or Product ID"
//             style={styles.searchInput}
//             placeholderTextColor="#AAA"
//             value={searchQuery}
//             onChangeText={(text) => setSearchQuery(text)}
//           />
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/48/search.png' }}
//               style={styles.searchIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Location */}
//         <View style={styles.locationContainer}>
//           <Text>Delivering to {location.city} - {location.pincode}</Text>
//         </View>

//         {/* Categories */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Categories</Text>
//         </View>
//         <FlatList
//           data={categories}
//           horizontal
//           renderItem={renderCategory}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />

//         {/* Flashcards */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Flashcards</Text>
//         </View>
//         <FlatList
//           data={flashcards}
//           horizontal
//           renderItem={renderFlashcard}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />

//         {/* Section Images */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Shop Sections</Text>
//         </View>
//         <FlatList
//           data={sectionImages}
//           horizontal
//           renderItem={renderSectionImage}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContent}
//         />
//       </ScrollView>

//       {/* Curved Bottom Navigation Bar with Wave Background */}
//       <ImageBackground
//         source={{ uri: 'https://img.icons8.com/cloudinary/wave.png' }} // Your wave background image URL
//         style={styles.curvedBottomNavBar}
//         imageStyle={styles.bottomNavImage}
//       >
//         {bottomNavItems.map((item) => (
//           <TouchableOpacity
//             key={item.id}
//             style={[styles.navItem, activeNavItem === item.id && styles.activeNavItem]}
//             onPress={() => handleNavItemPress(item.id)}
//           >
//             <Image source={{ uri: item.icon }} style={styles.navIcon} />
//             <Text style={styles.navText}>{item.label}</Text>
//           </TouchableOpacity>
//         ))}
//       </ImageBackground>
//     </View>
//   );
// };

// const bottomNavItems = [
//   { id: 'Home', label: 'Home', icon: 'https://img.icons8.com/color/96/home.png' },
//   { id: 'Categories', label: 'Categories', icon: 'https://img.icons8.com/color/96/category.png' },
//   { id: 'Mall', label: 'Mall', icon: 'https://img.icons8.com/color/96/shopping-mall.png' },
//   { id: 'Video Finds', label: 'Video', icon: 'https://img.icons8.com/color/96/video.png' },
//   { id: 'My Orders', label: 'Orders', icon: 'https://img.icons8.com/color/96/order-history.png' },
// ];

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   flashScreenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   flashScreenText: {
//     color: '#fff',
//     fontSize: 24,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     padding: 16,
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     margin: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 10,
//     elevation: 3,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   profileDetails: {
//     flex: 1,
//     marginLeft: 16,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   coinsText: {
//     fontSize: 14,
//     color: '#888',
//   },
//   profileActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginLeft: 8,
//   },
//   actionIcon: {
//     width: 24,
//     height: 24,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     backgroundColor: '#FFF',
//     margin: 10,
//     borderRadius: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   searchInput: {
//     flex: 1,
//     padding: 8,
//     fontSize: 16,
//     borderRadius: 15,
//   },
//   searchButton: {
//     padding: 8,
//   },
//   searchIcon: {
//     width: 24,
//     height: 24,
//   },
//   locationContainer: {
//     padding: 10,
//     backgroundColor: '#FFF',
//     margin: 10,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   sectionHeader: {
//     paddingHorizontal: 16,
//     marginVertical: 8,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   flatListContent: {
//     paddingHorizontal: 16,
//   },
//   categoryContainer: {
//     marginRight: 16,
//     alignItems: 'center',
//   },
//   categoryIcon: {
//     width: 50,
//     height: 50,
//   },
//   categoryText: {
//     fontSize: 14,
//     marginTop: 4,
//   },
//   flashcard: {
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     padding: 16,
//     marginRight: 16,
//     width: 250,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 10,
//     elevation: 3,
//   },
//   flashcardImage: {
//     width: 40,
//     height: 40,
//     marginBottom: 8,
//   },
//   flashcardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   flashcardDescription: {
//     fontSize: 12,
//     color: '#777',
//   },
//   curvedBottomNavBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 70,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//   },
//   bottomNavImage: {
//     resizeMode: 'cover',
//     flex: 1,
//   },
//   navItem: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   activeNavItem: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#6A0DAD',
//   },
//   navIcon: {
//     width: 24,
//     height: 24,
//   },
//   navText: {
//     fontSize: 12,
//     marginTop: 4,
//   },
//   coinIcon: {
//         width: 15,
//        height: 15,
//        },
//   sectionImageContainer: {
//     marginRight: 16,
//     alignItems: 'center',
//   },
//   sectionImage: {
//     width: 50,
//     height: 50,
//   },
//   sectionImageTitle: {
//     fontSize: 14,
//     marginTop: 4,
//   },
// });

// export default ProductScreen;


import React, { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList, ScrollView, ImageBackground } from 'react-native';
import {RootStackParamList} from'../navigation/types.ts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'; 
import Svg, { Path } from 'react-native-svg';
//import LinearGradient from 'react-native-linear-gradient';

const ProductScreen: React.FC = () => {
  const [location] = useState<{ city: string; pincode: string }>({
    city: 'Kalyan',
    pincode: '421201',
  });

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


  const [searchQuery, setSearchQuery] = useState('');
  const [showFlashScreen, setShowFlashScreen] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState('Home');

  useEffect(() => {
    // Flash screen timeout
    const timer = setTimeout(() => setShowFlashScreen(false), 3000); // Display for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = () => {
    Alert.alert('Search', `You searched for: ${searchQuery}`);
  };

  const handleNotificationPress = () => {
    navigation.navigate('Notification'); // Navigates to NotificationScreen
  };
  
 const handleWishListPress = () => {
    navigation.navigate('Wish'); // Navigates to WishListScreen
  };

  const handleCartPress = () => {
    navigation.navigate('Cart'); // Navigates to CartScreen
  };

  const handleUserPress = () => {
    navigation.navigate('User'); // Navigates to CartScreen
  };


  const handleSearchPress = () => {
    navigation.navigate('Search'); // Navigates to CartScreen
  };


  const categories = [
    { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
    { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
    { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
    { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
    { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
    { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
    { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
    { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
    { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
  ];

  const flashcards = [
    { id: 1, title: 'Summer Sale', description: 'Up to 50% off on all summer wear!', image: 'https://img.icons8.com/color/96/sale.png' },
    { id: 2, title: 'New Arrivals', description: 'Check out our latest collection.', image: 'https://img.icons8.com/color/96/new.png' },
    { id: 3, title: 'Exclusive Deals', description: 'Members get extra 10% off.', image: 'https://img.icons8.com/color/96/discount.png' },
  ];

  const sectionImages = [
    { id: 1, title: 'Best Selling Products', image: 'https://img.icons8.com/cloudinary/best-selling.png' },
    { id: 2, title: 'Trytastic Daily Deals', image: 'https://img.icons8.com/cloudinary/deals.png' },
    { id: 3, title: 'Premium Quality Range', image: 'https://img.icons8.com/cloudinary/premium-quality.png' },
    { id: 4, title: 'Low Price Store', image: 'https://img.icons8.com/cloudinary/low-price.png' },
    { id: 5, title: 'Trendz#', image: 'https://img.icons8.com/cloudinary/trends.png' },
  ];

  const renderCategory = ({ item }: { item: { name: string; icon: string } }) => (
    <View style={styles.categoryContainer}>
      <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </View>
  );

  const renderFlashcard = ({ item }: { item: { title: string; description: string; image: string } }) => (
    <View style={styles.flashcard}>
      <Image source={{ uri: item.image }} style={styles.flashcardImage} />
      <Text style={styles.flashcardTitle}>{item.title}</Text>
      <Text style={styles.flashcardDescription}>{item.description}</Text>
    </View>
  );

  const renderSectionImage = ({ item }: { item: { title: string; image: string } }) => (
    <View style={styles.sectionImageContainer}>
      <Image source={{ uri: item.image }} style={styles.sectionImage} />
      <Text style={styles.sectionImageTitle}>{item.title}</Text>
    </View>
  );

  

 
  const handleNavItemPress = (item: string) => {
    setActiveNavItem(item);
    if (item === 'Categories') {
      navigation.navigate('Category'); // Navigate to the Category Screen
    } else if (item === 'Mall') {
      navigation.navigate('Mall'); // Navigate to the Mall Screen
    } else if (item === 'Video Finds') {
      navigation.navigate('Video'); // Navigate to the Video Screen
    } else if (item === 'My Orders') {
      navigation.navigate('Order'); // Navigate to the Orders Screen
    }
  };
  

  


  return (
    <View style={styles.container}>
      {/* Flash Screen */}
      <Modal visible={showFlashScreen} animationType="fade" transparent>
        <View style={styles.flashScreenContainer}>
          <Text style={styles.flashScreenText}>Welcome to Our Store!</Text>
        </View>
      </Modal>

      {/* Main Content */}
      // Separate out section images into different sections
<ScrollView>
  {/* Profile and Coins */}
  <View style={styles.profileSection}>
    
    <TouchableOpacity onPress={handleUserPress}>
              <Image
                source={{ uri: 'https://img.icons8.com/color/96/user-female-circle.png' }} // Replace with your notification icon
                style={styles.profileImage}
              />
            </TouchableOpacity>
    <View style={styles.profileDetails}>
      <Text style={styles.profileName}>Nitu Nair</Text>
      <Text style={styles.coinsText}>
        <Image
          source={{ uri: 'https://img.icons8.com/?size=100&id=63810&format=png&color=000000' }}
          style={styles.coinIcon}
        />{' '}
        0 Coins
      </Text>
    </View>
    <View style={styles.profileActions}>
      
      <TouchableOpacity onPress={handleNotificationPress}>
              <Image
                source={{ uri: 'https://img.icons8.com/?size=100&id=114436&format=png&color=000000' }} // Replace with your notification icon
                style={styles.actionIcon}
              />
            </TouchableOpacity>
      <TouchableOpacity onPress={handleWishListPress}>
        <Image
          source={{ uri: 'https://img.icons8.com/color/48/like.png' }}
          style={styles.actionIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={ handleCartPress}>
        <Image
          source={{ uri: 'https://img.icons8.com/color/48/shopping-cart.png' }}
          style={styles.actionIcon}
        />
      </TouchableOpacity>
    </View>
  </View>

  
   

<View style={styles.searchContainer}>
      {/* Search Button */}
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => navigation.navigate('Search')} // Navigate directly to Search screen
        >
        <Image
          source={{ uri: 'https://img.icons8.com/color/48/search.png' }}
          style={styles.searchIcon}
        />
        <Text style={styles.searchText}>Search Product</Text>
      </TouchableOpacity>
    </View>


  {/* Location */}
  <View style={styles.locationContainer}>
    <Text>Delivering to {location.city} - {location.pincode}</Text>
  </View>

  {/* Categories */}
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>Categories</Text>
  </View>
  <FlatList
    data={categories}
    horizontal
    renderItem={renderCategory}
    keyExtractor={(item) => item.id.toString()}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.flatListContent}
  />

  {/* Flashcards */}
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>Flashcards</Text>
  </View>
  <FlatList
    data={flashcards}
    horizontal
    renderItem={renderFlashcard}
    keyExtractor={(item) => item.id.toString()}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.flatListContent}
  />

  {/* Shop Sections */}
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>Best Selling Products</Text>
  </View>
  <View style={styles.sectionImageContainer}>
    <Image
      source={{ uri: 'https://img.icons8.com/cloudinary/best-selling.png' }}
      style={styles.sectionImage}
    />
  </View>

  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>Trytastic Daily Deals</Text>
  </View>
  <View style={styles.sectionImageContainer}>
    <Image
      source={{ uri: 'https://img.icons8.com/cloudinary/deals.png' }}
      style={styles.sectionImage}
    />
  </View>

  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>Premium Quality Range</Text>
  </View>
  <View style={styles.sectionImageContainer}>
    <Image
      source={{ uri: 'https://img.icons8.com/cloudinary/premium-quality.png' }}
      style={styles.sectionImage}
    />
  </View>

  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>Low Price Store</Text>
  </View>
  <View style={styles.sectionImageContainer}>
    <Image
      source={{ uri: 'https://img.icons8.com/cloudinary/low-price.png' }}
      style={styles.sectionImage}
    />
  </View>

  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>#Trendz</Text>
  </View>
  <View style={styles.sectionImageContainer}>
    <Image
      source={{ uri: 'https://img.icons8.com/cloudinary/trends.png' }}
      style={styles.sectionImage}
    />
  </View>
</ScrollView>


      
      <ImageBackground
        source={{ uri: 'https://img.icons8.com/cloudinary/wave.png' }} // Your wave background image URL
        style={styles.curvedBottomNavBar}
        imageStyle={styles.bottomNavImage}
      >
        {bottomNavItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.navItem, activeNavItem === item.id && styles.activeNavItem]}
            onPress={() => handleNavItemPress(item.id)}
          >
            <Image source={{ uri: item.icon }} style={styles.navIcon} />
            <Text style={styles.navText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ImageBackground> 

      

  
    </View>
  );
};

const bottomNavItems = [
  { id: 'Home', label: 'Home', icon: 'https://img.icons8.com/color/96/home.png' },
  { id: 'Categories', label: 'Categories', icon: 'https://img.icons8.com/color/96/category.png' },
  { id: 'Mall', label: 'Mall', icon: 'https://img.icons8.com/color/96/shopping-mall.png' },
  { id: 'Video Finds', label: 'Video', icon: 'https://img.icons8.com/color/96/video.png' },
  { id: 'My Orders', label: 'Orders', icon: 'https://img.icons8.com/color/96/order-history.png' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#f8f8f8',
    backgroundColor: '#EDE7F6',
  },
  flashScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  flashScreenText: {
    color: '#fff',
    fontSize: 24,
  },
  profileSection: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileDetails: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  coinsText: {
    fontSize: 14,
    color: '#888',
  },
  profileActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 8,
  },
  actionIcon: {
    width: 24,
    height: 24,
  },
  
  searchInput: {
    flex: 1,
    padding: 8,
    fontSize: 16,
    borderRadius: 15,
  },
  
  locationContainer: {
    padding: 10,
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  flatListContent: {
    paddingHorizontal: 16,
  },
  categoryContainer: {
    marginRight: 16,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 50,
    height: 50,
  },
  categoryText: {
    fontSize: 14,
    marginTop: 4,
  },
  flashcard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    marginRight: 16,
    width: 250,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  flashcardImage: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  flashcardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  flashcardDescription: {
    fontSize: 12,
    color: '#777',
  },
  curvedBottomNavBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#C79BFF',
  },
  
  searchPlaceholder: {
    flex: 1,
    fontSize: 16,
    color: '#aaa',
  },
  
  
  bottomNavImage: {
    resizeMode: 'cover',
    flex: 1,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#6A0DAD',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
  coinIcon: {
        width: 15,
       height: 15,
       },
  sectionImageContainer: {
    marginRight: 16,
    alignItems: 'center',
  },
  sectionImage: {
    width: 50,
    height: 50,
  },
  sectionImageTitle: {
    fontSize: 14,
    marginTop: 4,
  },



  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF', // Blue background
    borderRadius: 10,
    margin: 10,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 8, // Spacing between icon and text
  },
  searchText: {
    fontSize: 16,
    color: '#000000', // White text color
  },
});

export default ProductScreen;
