// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';

// const categories = ['All', 'Shoes', 'Clothes', 'Electronics'];

// const wishlistItems = [
//   {
//     id: 1,
//     name: 'Nike Pegasus 39',
//     price: '$90.00',
//     image: 'https://img.icons8.com/?size=100&id=16584&format=png',
//   },
//   {
//     id: 2,
//     name: 'Nike Pegasus 40',
//     price: '$120.00',
//     image: 'https://img.icons8.com/?size=100&id=59495&format=png',
//   },
//   {
//     id: 3,
//     name: 'Nike Pegasus 38',
//     price: '$85.00',
//     image: 'https://img.icons8.com/?size=100&id=46940&format=png',
//   },
// ];

// const WishlistScreen = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string>('All');

//   const filteredItems =
//     selectedCategory === 'All'
//       ? wishlistItems
//       : wishlistItems.filter((item) => item.name.includes(selectedCategory));

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TextInput
//           placeholder="What are you looking for?"
//           style={styles.searchBar}
//         />
//       </View>

//       {/* Category Tabs */}
//       <FlatList
//         data={categories}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={[
//               styles.categoryTab,
//               selectedCategory === item && styles.selectedCategory,
//             ]}
//             onPress={() => setSelectedCategory(item)}
//           >
//             <Text
//               style={[
//                 styles.categoryText,
//                 selectedCategory === item && styles.selectedCategoryText,
//               ]}
//             >
//               {item}
//             </Text>
//           </TouchableOpacity>
//         )}
//         contentContainerStyle={styles.categoryContainer}
//       />

//       {/* Wishlist Items */}
//       <FlatList
//         data={filteredItems}
//         numColumns={2}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Image source={{ uri: item.image }} style={styles.itemImage} />
//             <Text style={styles.itemName}>{item.name}</Text>
//             <Text style={styles.itemPrice}>{item.price}</Text>
//           </View>
//         )}
//         contentContainerStyle={styles.itemList}
//       />

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity>
//           <Text style={styles.navText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.navText}>Wishlist</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.navText}>Cart</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.navText}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F9FA',
//   },
//   header: {
//     padding: 10,
//   },
//   searchBar: {
//     height: 40,
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     backgroundColor: '#EDEDED',
//   },
//   categoryContainer: {
//     paddingHorizontal: 10,
//     marginVertical: 10,
//   },
//   categoryTab: {
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     marginRight: 10,
//     borderRadius: 20,
//     backgroundColor: '#EDEDED',
//   },
//   selectedCategory: {
//     backgroundColor: '#6200EE',
//   },
//   categoryText: {
//     color: '#000',
//   },
//   selectedCategoryText: {
//     color: '#FFF',
//   },
//   itemList: {
//     paddingHorizontal: 10,
//   },
//   itemContainer: {
//     flex: 1,
//     margin: 5,
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#FFF',
//     alignItems: 'center',
//   },
//   itemImage: {
//     width: 100,
//     height: 100,
//     marginBottom: 10,
//   },
//   itemName: {
//     fontSize: 14,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
//   itemPrice: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#6200EE',
//   },
//   bottomNav: {
//     height: 60,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     borderTopWidth: 1,
//     borderColor: '#EDEDED',
//   },
//   navText: {
//     fontSize: 14,
//     color: '#6200EE',
//   },
// });

// export default WishlistScreen;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';

// const wishlistItems = [
//   { id: 1, name: 'T-Shirt', image: 'https://img.icons8.com/color/96/t-shirt.png' },
//   { id: 2, name: 'Jeans', image: 'https://img.icons8.com/color/96/jeans.png' },
//   { id: 3, name: 'Dress', image: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//   { id: 4, name: 'Saree', image: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//   { id: 5, name: 'Skirt', image: 'https://img.icons8.com/color/96/skirt.png' },
//   { id: 6, name: 'Hoodie', image: 'https://img.icons8.com/color/96/jacket.png' },
//   { id: 7, name: 'Shoes', image: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//   { id: 8, name: 'Necklace', image: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//   { id: 9, name: 'Earrings', image: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   { id: 10, name: 'Makeup', image: 'https://img.icons8.com/color/96/lipstick.png' },
//   { id: 11, name: 'Accessories', image: 'https://img.icons8.com/?size=100&id=46940&format=png&color=000000' },
// ];

// const WishlistScreen = () => {
//   const [likedItems, setLikedItems] = useState<number[]>([]);

//   const toggleLike = (id: number) => {
//     if (likedItems.includes(id)) {
//       setLikedItems(likedItems.filter((item) => item !== id));
//     } else {
//       setLikedItems([...likedItems, id]);
//     }
//   };

//   const renderWishlistItem = ({ item }: { item: typeof wishlistItems[0] }) => (
//     <View style={styles.itemContainer}>
//       <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.imageContainer}>
//         <Image source={{ uri: item.image }} style={styles.image} />
//         <TouchableOpacity
//           style={[styles.loveIcon, likedItems.includes(item.id) && styles.loveIconActive]}
//           onPress={() => toggleLike(item.id)}
//         >
//           <Text style={styles.loveIconText}>❤️</Text>
//         </TouchableOpacity>
//       </TouchableOpacity>
//       <Text style={styles.itemName}>{item.name}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>My Wishlist</Text>
//       <FlatList
//         data={wishlistItems}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderWishlistItem}
//         numColumns={2}
//         columnWrapperStyle={styles.row}
//         contentContainerStyle={styles.listContainer}
//         showsVerticalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#EDE7F6',
//     paddingHorizontal: 10,
//     paddingTop: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   row: {
//     justifyContent: 'space-between',
//   },
//   itemContainer: {
//     flex: 1,
//     alignItems: 'center',
//     marginBottom: 20,
//     paddingHorizontal: 5,
//   },
//   imageContainer: {
//     position: 'relative',
//   },
//   image: {
//     width: 120,
//     height: 120,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   loveIcon: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 3,
//   },
//   loveIconActive: {
//     backgroundColor: '#FF6B6B',
//   },
//   loveIconText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   itemName: {
//     fontSize: 14,
//     fontWeight: '500',
//     textAlign: 'center',
//   },
// });

// export default WishlistScreen;



// WishlistScreen.tsx
// import React, { useState, useEffect } from 'react';
// import {
//   Alert,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   FlatList,
//   ScrollView,
//   ImageBackground,
// } from 'react-native';
// import { RootStackParamList } from '../navigation/types';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';

// type WishlistScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Product'>; // or the correct screen

// const WishlistScreen = () => {
//   const navigation = useNavigation<WishlistScreenNavigationProp>();
//   const [likedItems, setLikedItems] = useState<number[]>([]);
//   const [activeNavItem, setActiveNavItem] = useState<string>('Home');

//   const handleNavItemPress = (item: string) => {
//     setActiveNavItem(item);
//     navigation.navigate(item as keyof RootStackParamList); // Type-safe navigation
//   };




// const wishlistItems = [
//   { id: 1, name: 'Nike Pegasus 39', image: 'https://example.com/shoe1.png', price: '$120.00', rating: 4.9 },
//   { id: 2, name: 'Nike Pegasus 4', image: 'https://example.com/shoe2.png', price: '$110.00', rating: 5.0 },
//   { id: 3, name: 'Nike Pegasus 3', image: 'https://example.com/shoe3.png', price: '$85.00', rating: 4.9 },
//   { id: 4, name: 'Nike Zoom Fly', image: 'https://example.com/shoe4.png', price: '$95.00', rating: 5.0 },
// ];

// const bottomNavItems = [
//   { id: 'Home', label: 'Home', icon: 'https://img.icons8.com/color/96/home.png' },
//   { id: 'Categories', label: 'Categories', icon: 'https://img.icons8.com/color/96/category.png' },
//   { id: 'Mall', label: 'Mall', icon: 'https://img.icons8.com/color/96/shopping-mall.png' },
//   { id: 'Video Finds', label: 'Video', icon: 'https://img.icons8.com/color/96/video.png' },
//   { id: 'My Orders', label: 'Orders', icon: 'https://img.icons8.com/color/96/order-history.png' },
// ];

// const WishlistScreen = () => {
//   const navigation = useNavigation();
//   const [likedItems, setLikedItems] = useState<number[]>([]);
//   const [activeNavItem, setActiveNavItem] = useState<string>('Home'); // Explicitly set the type as string

//   const toggleLike = (id: number) => {
//     if (likedItems.includes(id)) {
//       setLikedItems(likedItems.filter((item) => item !== id));
//     } else {
//       setLikedItems([...likedItems, id]);
//     }
//   };

//   const handleNavItemPress = (item: string) => { // Ensure item is of type string
//     setActiveNavItem(item);
//     if (item === 'Home') {
//       navigation.navigate('Product');
//     } else if (item === 'Categories') {
//       navigation.navigate('Category');
//     } else if (item === 'Mall') {
//       navigation.navigate('Mall');
//     } else if (item === 'Video Finds') {
//       navigation.navigate('Video');
//     } else if (item === 'My Orders') {
//       navigation.navigate('Order');
//     }
//   };

//   const renderWishlistItem = ({ item }: { item: typeof wishlistItems[0] }) => (
//     <View style={styles.itemContainer}>
//       <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.imageContainer}>
//         <Image source={{ uri: item.image }} style={styles.image} />
//         <TouchableOpacity
//           style={[styles.loveIcon, likedItems.includes(item.id) && styles.loveIconActive]}
//           onPress={() => toggleLike(item.id)}
//         >
//           <Text style={styles.loveIconText}>❤️</Text>
//         </TouchableOpacity>
//       </TouchableOpacity>
//       <Text style={styles.itemName}>{item.name}</Text>
//       <Text style={styles.itemPrice}>{item.price}</Text>
//       <Text style={styles.itemRating}>{item.rating} ★</Text>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <Text style={styles.title}>My Wishlist</Text>
//         <FlatList
//           data={wishlistItems}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderWishlistItem}
//           numColumns={2}
//           columnWrapperStyle={styles.row}
//           contentContainerStyle={styles.listContainer}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>

//       {/* Bottom Navigation */}
//       <ImageBackground
//         source={{ uri: 'https://img.icons8.com/cloudinary/wave.png' }}
//         style={styles.curvedBottomNavBar}
//         imageStyle={styles.bottomNavImage}
//       >
//         {bottomNavItems.map((item) => (
//           <TouchableOpacity
//             key={item.id}
//             style={[styles.navItem, activeNavItem === item.id && styles.activeNavItem]}
//             onPress={() => handleNavItemPress(item.id)} // Pass item.id of type string
//           >
//             <Image source={{ uri: item.icon }} style={styles.navIcon} />
//             <Text style={styles.navText}>{item.label}</Text>
//           </TouchableOpacity>
//         ))}
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     paddingHorizontal: 10,
//     paddingTop: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   row: {
//     justifyContent: 'space-between',
//   },
//   itemContainer: {
//     flex: 1,
//     alignItems: 'center',
//     marginBottom: 20,
//     paddingHorizontal: 5,
//   },
//   imageContainer: {
//     position: 'relative',
//   },
//   image: {
//     width: 150,
//     height: 150,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   loveIcon: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 3,
//   },
//   loveIconActive: {
//     backgroundColor: '#FF6B6B',
//   },
//   loveIconText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   itemName: {
//     fontSize: 14,
//     fontWeight: '500',
//     textAlign: 'center',
//     marginTop: 5,
//   },
//   itemPrice: {
//     fontSize: 14,
//     fontWeight: '400',
//     color: '#888',
//     marginTop: 5,
//   },
//   itemRating: {
//     fontSize: 12,
//     fontWeight: '400',
//     color: '#FF6B6B',
//     marginTop: 5,
//   },

//   // Bottom Navigation Styles
//   curvedBottomNavBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 70,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#C79BFF',
//   },
//   bottomNavImage: {
//     resizeMode: 'cover',
//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   activeNavItem: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#6200EE',
//   },
//   navIcon: {
//     width: 30,
//     height: 30,
//   },
//   navText: {
//     fontSize: 12,
//     color: '#000',
//   },
// });

// export default WishlistScreen;



// import React, { useState } from 'react';
// import {
//   Alert,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   FlatList,
//   ScrollView,
//   ImageBackground,
// } from 'react-native';
// import { RootStackParamList } from '../navigation/types';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';

// /* type RootStackParamList = {
//   Product: undefined;
//   Category: undefined;
//   Mall: undefined;
//   Video: undefined;
//   Order: undefined;
// };
//  */
// type WishlistScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Product'>;

// const WishlistScreen = () => {
//   const navigation = useNavigation<WishlistScreenNavigationProp>();
//   const [likedItems, setLikedItems] = useState<number[]>([]);
//   const [activeNavItem, setActiveNavItem] = useState<string>('Home');

//   const wishlistItems = [
//     { id: 1, name: 'Nike Pegasus 39', image: 'https://example.com/shoe1.png', price: '$120.00', rating: 4.9 },
//     { id: 2, name: 'Nike Pegasus 4', image: 'https://example.com/shoe2.png', price: '$110.00', rating: 5.0 },
//     { id: 3, name: 'Nike Pegasus 3', image: 'https://example.com/shoe3.png', price: '$85.00', rating: 4.9 },
//     { id: 4, name: 'Nike Zoom Fly', image: 'https://example.com/shoe4.png', price: '$95.00', rating: 5.0 },
//   ];

//   const bottomNavItems = [
//     { id: 'Home', label: 'Home', icon: 'https://img.icons8.com/color/96/home.png' },
//     { id: 'Categories', label: 'Categories', icon: 'https://img.icons8.com/color/96/category.png' },
//     { id: 'Mall', label: 'Mall', icon: 'https://img.icons8.com/color/96/shopping-mall.png' },
//     { id: 'Video Finds', label: 'Video', icon: 'https://img.icons8.com/color/96/video.png' },
//     { id: 'My Orders', label: 'Orders', icon: 'https://img.icons8.com/color/96/order-history.png' },
//   ];

//   const handleNavItemPress = (item: string) => {
//     setActiveNavItem(item);
//     navigation.navigate(item as keyof RootStackParamList); // Type-safe navigation
//   };

//   const toggleLike = (id: number) => {
//     if (likedItems.includes(id)) {
//       setLikedItems(likedItems.filter((item) => item !== id));
//     } else {
//       setLikedItems([...likedItems, id]);
//     }
//   };

//   const renderWishlistItem = ({ item }: { item: typeof wishlistItems[0] }) => (
//     <View style={styles.itemContainer}>
//       <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.imageContainer}>
//         <Image source={{ uri: item.image }} style={styles.image} />
//         <TouchableOpacity
//           style={[styles.loveIcon, likedItems.includes(item.id) && styles.loveIconActive]}
//           onPress={() => toggleLike(item.id)}
//         >
//           <Text style={styles.loveIconText}>❤️</Text>
//         </TouchableOpacity>
//       </TouchableOpacity>
//       <Text style={styles.itemName}>{item.name}</Text>
//       <Text style={styles.itemPrice}>{item.price}</Text>
//       <Text style={styles.itemRating}>{item.rating} ★</Text>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <Text style={styles.title}>My Wishlist</Text>
//         <FlatList
//           data={wishlistItems}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderWishlistItem}
//           numColumns={2}
//           columnWrapperStyle={styles.row}
//           contentContainerStyle={styles.listContainer}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>

//       {/* Bottom Navigation */}
//       <ImageBackground
//         source={{ uri: 'https://img.icons8.com/cloudinary/wave.png' }}
//         style={styles.curvedBottomNavBar}
//         imageStyle={styles.bottomNavImage}
//       >
//         {bottomNavItems.map((item) => (
//           <TouchableOpacity
//             key={item.id}
//             style={[styles.navItem, activeNavItem === item.id && styles.activeNavItem]}
//             onPress={() => handleNavItemPress(item.id)} // Pass item.id of type string
//           >
//             <Image source={{ uri: item.icon }} style={styles.navIcon} />
//             <Text style={styles.navText}>{item.label}</Text>
//           </TouchableOpacity>
//         ))}
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     paddingHorizontal: 10,
//     paddingTop: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   row: {
//     justifyContent: 'space-between',
//   },
//   itemContainer: {
//     flex: 1,
//     alignItems: 'center',
//     marginBottom: 20,
//     paddingHorizontal: 5,
//   },
//   imageContainer: {
//     position: 'relative',
//   },
//   image: {
//     width: 150,
//     height: 150,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   loveIcon: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 3,
//   },
//   loveIconActive: {
//     backgroundColor: '#FF6B6B',
//   },
//   loveIconText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   itemName: {
//     fontSize: 14,
//     fontWeight: '500',
//     textAlign: 'center',
//     marginTop: 5,
//   },
//   itemPrice: {
//     fontSize: 14,
//     fontWeight: '400',
//     color: '#888',
//     marginTop: 5,
//   },
//   itemRating: {
//     fontSize: 12,
//     fontWeight: '400',
//     color: '#FF6B6B',
//     marginTop: 5,
//   },

//   // Bottom Navigation Styles
//   curvedBottomNavBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 70,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#C79BFF',
//   },
//   bottomNavImage: {
//     resizeMode: 'cover',
//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   activeNavItem: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#6200EE',
//   },
//   navIcon: {
//     width: 30,
//     height: 30,
//   },
//   navText: {
//     fontSize: 12,
//     color: '#000',
//   },
// });

// export default WishlistScreen;



// import React, { useState } from 'react';
// import {
//   Alert,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   FlatList,
//   ScrollView,
//   ImageBackground,
//   Linking, // Import Linking
// } from 'react-native';
// import { RootStackParamList } from '../navigation/types';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';

// type WishlistScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Product'>;

// const WishlistScreen = () => {
//   const navigation = useNavigation<WishlistScreenNavigationProp>();
//   const [likedItems, setLikedItems] = useState<number[]>([]);
//   const [activeNavItem, setActiveNavItem] = useState<string>('Home');

//   const wishlistItems = [
//     { id: 1, name: 'Nike Pegasus 39', image: 'https://example.com/shoe1.png', price: '$120.00', rating: 4.9, arLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66?sender_web_id=5909f787-9708-464a-a188-b4e1a94aa2ca&device_type=desktop&is_copy_url=true' },
//     { id: 2, name: 'Nike Pegasus 4', image: 'https://example.com/shoe2.png', price: '$110.00', rating: 5.0, arLink: 'https://snapchat.com/ar-link2' },
//     { id: 3, name: 'Nike Pegasus 3', image: 'https://example.com/shoe3.png', price: '$85.00', rating: 4.9, arLink: 'https://snapchat.com/ar-link3' },
//     { id: 4, name: 'Nike Zoom Fly', image: 'https://example.com/shoe4.png', price: '$95.00', rating: 5.0, arLink: 'https://snapchat.com/ar-link4' },
//   ];

//   const bottomNavItems = [
//     { id: 'Home', label: 'Home', icon: 'https://img.icons8.com/color/96/home.png' },
//     { id: 'Categories', label: 'Categories', icon: 'https://img.icons8.com/color/96/category.png' },
//     { id: 'Mall', label: 'Mall', icon: 'https://img.icons8.com/color/96/shopping-mall.png' },
//     { id: 'Video Finds', label: 'Video', icon: 'https://img.icons8.com/color/96/video.png' },
//     { id: 'My Orders', label: 'Orders', icon: 'https://img.icons8.com/color/96/order-history.png' },
//   ];

//   const handleNavItemPress = (item: string) => {
//     setActiveNavItem(item);
//     navigation.navigate(item as keyof RootStackParamList); // Type-safe navigation
//   };

//   const toggleLike = (id: number) => {
//     if (likedItems.includes(id)) {
//       setLikedItems(likedItems.filter((item) => item !== id));
//     } else {
//       setLikedItems([...likedItems, id]);
//     }
//   };

//   const renderWishlistItem = ({ item }: { item: { id: number; name: string; image: string; price: string; rating: number; arLink: string } }) => (
//     <View style={styles.itemContainer}>
//       <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.imageContainer}>
//         <Image source={{ uri: item.image }} style={styles.image} />
//         <TouchableOpacity
//           style={[styles.loveIcon, likedItems.includes(item.id) && styles.loveIconActive]}
//           onPress={() => toggleLike(item.id)}
//         >
//           <Text style={styles.loveIconText}>❤️</Text>
//         </TouchableOpacity>
//       </TouchableOpacity>
//       <Text style={styles.itemName}>{item.name}</Text>
//       <Text style={styles.itemPrice}>{item.price}</Text>
//       <Text style={styles.itemRating}>{item.rating} ★</Text>
//       <TouchableOpacity 
//         style={styles.arLinkButton}
//         onPress={() => Linking.openURL(item.arLink)} // Open AR link in Snapchat
//       >
//         <Text style={styles.arLinkText}>View in AR</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <Text style={styles.title}>My Wishlist</Text>
//         <FlatList
//           data={wishlistItems}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderWishlistItem}
//           numColumns={2}
//           columnWrapperStyle={styles.row}
//           contentContainerStyle={styles.listContainer}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>

//       {/* Bottom Navigation */}
//       <ImageBackground
//         source={{ uri: 'https://img.icons8.com/cloudinary/wave.png' }}
//         style={styles.curvedBottomNavBar}
//         imageStyle={styles.bottomNavImage}
//       >
//         {bottomNavItems.map((item) => (
//           <TouchableOpacity
//             key={item.id}
//             style={[styles.navItem, activeNavItem === item.id && styles.activeNavItem]}
//             onPress={() => handleNavItemPress(item.id)} // Pass item.id of type string
//           >
//             <Image source={{ uri: item.icon }} style={styles.navIcon} />
//             <Text style={styles.navText}>{item.label}</Text>
//           </TouchableOpacity>
//         ))}
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     paddingHorizontal: 10,
//     paddingTop: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   row: {
//     justifyContent: 'space-between',
//   },
//   itemContainer: {
//     flex: 1,
//     alignItems: 'center',
//     marginBottom: 20,
//     paddingHorizontal: 5,
//   },
//   imageContainer: {
//     position: 'relative',
//   },
//   image: {
//     width: 150,
//     height: 150,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   loveIcon: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 3,
//   },
//   loveIconActive: {
//     backgroundColor: '#FF6B6B',
//   },
//   loveIconText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   itemName: {
//     fontSize: 14,
//     fontWeight: '500',
//     textAlign: 'center',
//     marginTop: 5,
//   },
//   itemPrice: {
//     fontSize: 14,
//     fontWeight: '400',
//     color: '#888',
//     marginTop: 5,
//   },
//   itemRating: {
//     fontSize: 12,
//     fontWeight: '400',
//     color: '#FF6B6B',
//     marginTop: 5,
//   },
//   arLinkButton: {
//     backgroundColor: '#FF6B6B',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   arLinkText: {
//     fontSize: 14,
//     color: '#fff',
//     textAlign: 'center',
//   },

//   // Bottom Navigation Styles
//   curvedBottomNavBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 70,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#C79BFF',
//   },
//   bottomNavImage: {
//     resizeMode: 'cover',
//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   activeNavItem: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#6200EE',
//   },
//   navIcon: {
//     width: 30,
//     height: 30,
//   },
//   navText: {
//     fontSize: 12,
//     color: '#000',
//   },
// });

// export default WishlistScreen;



// import React, { useState } from 'react';
// import {
//   Alert,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   FlatList,
//   Linking,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';

// type RootStackParamList = {
//   Product: undefined;
//   Category: undefined;
//   Mall: undefined;
//   Video: undefined;
//   Order: undefined;
// };

// type WishlistScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Product'>;

// const WishlistScreen = () => {
//   const navigation = useNavigation<WishlistScreenNavigationProp>();
//   const [likedItems, setLikedItems] = useState<number[]>([]);
//   const [activeNavItem, setActiveNavItem] = useState<string>('Home');

//   const wishlistItems = [
//     {
//       id: 1,
//       name: 'Nike Pegasus 39',
//       image: 'https://example.com/shoe1.png',
//       price: '$120.00',
//       rating: 4.9,
//       arLink:
//         'https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=2e3ef1734ada4783ad32449bc0fa2b30&metadata=01',
//     },
//     {
//       id: 2,
//       name: 'Nike Pegasus 4',
//       image: 'https://example.com/shoe2.png',
//       price: '$110.00',
//       rating: 5.0,
//       arLink:
//         'https://www.snapchat.com/lens/d9e7a3a320744d688f9bc72b8b50f567?sender_web_id=5909f787-9708-464a-a188-b4e1a94aa2ca&device_type=desktop&is_copy_url=true',
//     },
//     {
//       id: 3,
//       name: 'Nike Pegasus 3',
//       image: 'https://example.com/shoe3.png',
//       price: '$85.00',
//       rating: 4.8,
//       arLink:
//         'https://www.snapchat.com/lens/428d55cd46d74f94a3795a13a68b07ab?sender_web_id=5909f787-9708-464a-a188-b4e1a94aa2ca&device_type=desktop&is_copy_url=true',
//     },
//   ];

//   const bottomNavItems = [
//     { id: 'Home', label: 'Home', icon: 'https://img.icons8.com/color/96/home.png' },
//     { id: 'Categories', label: 'Categories', icon: 'https://img.icons8.com/color/96/category.png' },
//     { id: 'Mall', label: 'Mall', icon: 'https://img.icons8.com/color/96/shopping-mall.png' },
//     { id: 'Video Finds', label: 'Video', icon: 'https://img.icons8.com/color/96/video.png' },
//     { id: 'My Orders', label: 'Orders', icon: 'https://img.icons8.com/color/96/order-history.png' },
//   ];

//   const handleNavItemPress = (item: string) => {
//     setActiveNavItem(item);
//     navigation.navigate(item as keyof RootStackParamList);
//   };

//   const toggleLike = (id: number) => {
//     if (likedItems.includes(id)) {
//       setLikedItems(likedItems.filter((item) => item !== id));
//     } else {
//       setLikedItems([...likedItems, id]);
//     }
//   };

//   const handleARLinkPress = async (arLink: string) => {
//     // Check if Snapchat is installed and handle the AR link accordingly
//     const supported = await Linking.canOpenURL(arLink);
//     if (supported) {
//       // If Snapchat is installed, it will open directly; otherwise, it will open in a browser
//       Linking.openURL(arLink).catch((err) => console.error('Failed to open AR link', err));
//     } else {
//       // If the link is not supported (no AR app installed), open it in the browser
//       Linking.openURL(arLink);
//     }
//   };

//   const renderWishlistItem = ({ item }: { item: { id: number; name: string; image: string; price: string; rating: number; arLink: string } }) => (
//     <View style={styles.itemContainer}>
//       <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.imageContainer}>
//         <Image source={{ uri: item.image }} style={styles.image} />
//         <TouchableOpacity
//           style={[styles.loveIcon, likedItems.includes(item.id) && styles.loveIconActive]}
//           onPress={() => toggleLike(item.id)}
//         >
//           <Text style={styles.loveIconText}>❤️</Text>
//         </TouchableOpacity>
//       </TouchableOpacity>
//       <Text style={styles.itemName}>{item.name}</Text>
//       <Text style={styles.itemPrice}>{item.price}</Text>
//       <Text style={styles.itemRating}>{item.rating} ★</Text>
//       <TouchableOpacity
//         style={styles.arLinkButton}
//         onPress={() => handleARLinkPress(item.arLink)} // Handle AR link press
//       >
//         <Text style={styles.arLinkText}>View in AR</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <Text style={styles.title}>My Wishlist</Text>
//         <FlatList
//           data={wishlistItems}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderWishlistItem}
//           numColumns={2}
//           columnWrapperStyle={styles.row}
//           contentContainerStyle={styles.listContainer}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNavContainer}>
//         {bottomNavItems.map((item) => (
//           <TouchableOpacity
//             key={item.id}
//             style={[styles.navItem, activeNavItem === item.id && styles.activeNavItem]}
//             onPress={() => handleNavItemPress(item.id)} // Pass item.id of type string
//           >
//             <Image source={{ uri: item.icon }} style={styles.navIcon} />
//             <Text style={styles.navText}>{item.label}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     paddingHorizontal: 10,
//     paddingTop: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   row: {
//     justifyContent: 'space-between',
//   },
//   itemContainer: {
//     flex: 1,
//     alignItems: 'center',
//     marginBottom: 20,
//     paddingHorizontal: 5,
//   },
//   imageContainer: {
//     position: 'relative',
//   },
//   image: {
//     width: 150,
//     height: 150,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   loveIcon: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 3,
//   },
//   loveIconActive: {
//     backgroundColor: '#FF6B6B',
//   },
//   loveIconText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   itemName: {
//     fontSize: 14,
//     fontWeight: '500',
//     textAlign: 'center',
//     marginTop: 5,
//   },
//   itemPrice: {
//     fontSize: 14,
//     fontWeight: '400',
//     color: '#888',
//     marginTop: 5,
//   },
//   itemRating: {
//     fontSize: 12,
//     fontWeight: '400',
//     color: '#FF6B6B',
//     marginTop: 5,
//   },
//   arLinkButton: {
//     backgroundColor: '#FF6B6B',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   arLinkText: {
//     fontSize: 14,
//     color: '#fff',
//     textAlign: 'center',
//   },
//   bottomNavContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 70,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#C79BFF',
//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   activeNavItem: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#6200EE',
//   },
//   navIcon: {
//     width: 30,
//     height: 30,
//   },
//   navText: {
//     fontSize: 12,
//     color: '#000',
//   },
// });

// export default WishlistScreen;
// import React from 'react';
// import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

// const handleARLinkPress = async (snapchatLink: string, webArLink: string) => {
//   try {
//     // Check if Snapchat is installed by attempting to open the Snapchat link
//     const supported = await Linking.canOpenURL(snapchatLink);

//     if (supported) {
//       // If Snapchat is installed, open AR in the Snapchat app
//       Linking.openURL(snapchatLink).catch((err) => {
//         console.error('Failed to open AR link in Snapchat', err);
//       });
//     } else {
//       // If Snapchat is not installed, open WebAR in the browser
//       Linking.openURL(webArLink).catch((err) => {
//         console.error('Failed to open AR link in browser', err);
//       });
//     }
//   } catch (error) {
//     console.error('Error opening AR link', error);
//   }
// };

// const WishlistScreen = () => {
//   const wishlistItems = [
//     {
//       id: 1,
//       name: 'Nike Pegasus 39',
//       image: 'https://example.com/shoe1.png',
//       price: '$120.00',
//       rating: 4.9,
//       snapchatARLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66',
//       webArLink: 'https://wanna-shoes.ar.wanna.fashion/?modelid=L929282X15-7586%2CXXW08J0HL60SHAB999%2C3W2S0HQ5VNWN71%2CWNSHOE001%2CWNSHOE002&startwithid=XXW08J0HL60SHAB999&mode=vto', // This should be the WebAR link (e.g., 8th Wall URL)
//     },
//     {
//       id: 2,
//       name: 'Nike Watch',
//       image: 'https://example.com/shoe1.png',
//       price: '$120.00',
//       rating: 4.9,
//       snapchatARLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66',
//       webArLink: 'https://wanna-watches.ar.wanna.fashion/?modelid=IW371611-O&wristmeasurement=true&showhint=wristmeasurement&startwithid=IW371611-O&mode=vto', // This should be the WebAR link (e.g., 8th Wall URL)
//     },
//     {
//       id: 3,
//       name: 'Nike dress',
//       image: 'https://example.com/shoe1.png',
//       price: '$120.00',
//       rating: 4.9,
//       snapchatARLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66',
//       webArLink: 'https://wanna-clothes.ar.wanna.fashion/?experience=3d&showonboarding=3d&modelid=WNCLO01', // This should be the WebAR link (e.g., 8th Wall URL)
//     },
//     {
//       id: 4,
//       name: 'Nike jewellery',
//       image: 'https://example.com/shoe1.png',
//       price: '$120.00',
//       rating: 4.9,
//       snapchatARLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66',
//       webArLink: 'https://wanna-watches.ar.wanna.fashion/?mode=3d&showonboarding=3d&startwithid=WBQA7GWMIX1ZOO00', // This should be the WebAR link (e.g., 8th Wall URL)
//     },

//     {
//       id: 5,
//       name: 'Nike bracelet',
//       image: 'https://example.com/shoe1.png',
//       price: '$120.00',
//       rating: 4.9,
//       snapchatARLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66',
//       webArLink: 'https://wanna-scarves.ar.wanna.fashion/?modelid=WNNECK001&mode=3d&showonboarding=3d', // This should be the WebAR link (e.g., 8th Wall URL)
//     },
//     {
//     id: 6,
//       name: 'Nike Pearl Necklace',
//       image: 'https://example.com/shoe1.png',
//       price: '$120.00',
//       rating: 4.9,
//       snapchatARLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66',
//       webArLink: 'https://skfb.ly/ptoJN', // This should be the WebAR link (e.g., 8th Wall URL)
//     },
//    {
//     id: 7,
//       name: 'Nike Pearl Necklace',
//       image: 'https://example.com/shoe1.png',
//       price: '$120.00',
//       rating: 4.9,
//       snapchatARLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66',
//       webArLink: 'https://skfb.ly/ptoK9', // This should be the WebAR link (e.g., 8th Wall URL)
//     },
      

//     // Add more items here...
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>My Wishlist</Text>

//       {wishlistItems.map((item) => (
//         <View key={item.id} style={styles.itemContainer}>
//           <Text style={styles.itemName}>{item.name}</Text>
//           <Text style={styles.itemPrice}>{item.price}</Text>

//           {/* Button to open AR */}
//           <TouchableOpacity
//             style={styles.arButton}
//             onPress={() => handleARLinkPress(item.snapchatARLink, item.webArLink)}
//           >
//             <Text style={styles.arButtonText}>View in AR</Text>
//           </TouchableOpacity>
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   itemContainer: {
//     marginBottom: 20,
//     padding: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   itemName: {
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   itemPrice: {
//     fontSize: 16,
//     color: '#888',
//   },
//   arButton: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: '#6200EE',
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   arButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default WishlistScreen;





import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';

const handleARLinkPress = async (snapchatLink: string, webArLink: string) => {
  try {
    const supported = await Linking.canOpenURL(snapchatLink);

    if (supported) {
      Linking.openURL(snapchatLink).catch((err) => {
        console.error('Failed to open AR link in Snapchat', err);
      });
    } else {
      Linking.openURL(webArLink).catch((err) => {
        console.error('Failed to open AR link in browser', err);
      });
    }
  } catch (error) {
    console.error('Error opening AR link', error);
  }
};

const WishlistScreen = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'Nike Pegasus 39',
      image: 'https://example.com/shoe1.png',
      price: '$120.00',
      rating: 4.9,
      snapchatARLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66',
      webArLink: 'https://wanna-shoes.ar.wanna.fashion/?modelid=L929282X15-7586%2CXXW08J0HL60SHAB999%2C3W2S0HQ5VNWN71%2CWNSHOE001%2CWNSHOE002&startwithid=XXW08J0HL60SHAB999&mode=vto',
    },
    {
      id: 2,
      name: 'Nike Watch',
      image: 'https://example.com/shoe1.png',
      price: '$120.00',
      rating: 4.9,
      snapchatARLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66',
      webArLink: 'https://wanna-watches.ar.wanna.fashion/?modelid=IW371611-O&wristmeasurement=true&showhint=wristmeasurement&startwithid=IW371611-O&mode=vto',
    },
    {
      id: 3,
      name: 'Nike Dress',
      image: 'https://example.com/shoe1.png',
      price: '$120.00',
      rating: 4.9,
      snapchatARLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66',
      webArLink: 'https://wanna-clothes.ar.wanna.fashion/?experience=3d&showonboarding=3d&modelid=WNCLO01',
    },
    {
      id: 4,
      name: 'Nike Jewelry',
      image: 'https://example.com/shoe1.png',
      price: '$120.00',
      rating: 4.9,
      snapchatARLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66',
      webArLink: 'https://wanna-watches.ar.wanna.fashion/?mode=3d&showonboarding=3d&startwithid=WBQA7GWMIX1ZOO00',
    },
    {
      id: 5,
      name: 'Nike Bracelet',
      image: 'https://example.com/shoe1.png',
      price: '$120.00',
      rating: 4.9,
      snapchatARLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66',
      webArLink: 'https://wanna-scarves.ar.wanna.fashion/?modelid=WNNECK001&mode=3d&showonboarding=3d',
    },
    {
      id: 6,
      name: 'Nike Pearl Necklace',
      image: 'https://example.com/shoe1.png',
      price: '$120.00',
      rating: 4.9,
      snapchatARLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66',
      webArLink: 'https://skfb.ly/ptoJN',
    },
    {
      id: 7,
      name: 'Nike Pearl Necklace (Gold)',
      image: 'https://example.com/shoe1.png',
      price: '$120.00',
      rating: 4.9,
      snapchatARLink: 'https://www.snapchat.com/lens/ecdcbc0133f9496b9af77d7abc4cfe66',
      webArLink: 'https://skfb.ly/ptoK9',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Wishlist</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {wishlistItems.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <TouchableOpacity
              style={styles.arButton}
              onPress={() => handleARLinkPress(item.snapchatARLink, item.webArLink)}
            >
              <Text style={styles.arButtonText}>View in AR</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContent: {
    paddingBottom: 20, // Adds spacing at the bottom
  },
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  itemName: {
    fontSize: 18,
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
  arButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#6200EE',
    borderRadius: 5,
    alignItems: 'center',
  },
  arButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default WishlistScreen;

