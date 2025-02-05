// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

// // Define the Category type
// interface Category {
//   id: number;
//   name: string;
//   icon: string;
// }

// const categories: Category[] = [
//   { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//   { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//   { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//   { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//   { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//   { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//   { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//   { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//   { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   { id: 10, name: 'Makeup', icon: 'https://img.icons8.com/color/96/lipstick.png' }, // Added Makeup
//   { id: 11, name: 'Accessories', icon: 'https://img.icons8.com/color/96/watch.png' }, // Added Accessories
// ];

// const CategoryScreen = () => {

//   // Use the Category type for item
//   const renderCategoryItem = ({ item }: { item: Category }) => (
//     <TouchableOpacity style={styles.categoryItem}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryLabel}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={categories}
//         renderItem={renderCategoryItem}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={3} // Adjust number of columns as needed
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f7f7f7',
//   },
//   listContainer: {
//     justifyContent: 'center',
//   },
//   categoryItem: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 16,
//     marginHorizontal: 8,
//   },
//   categoryIcon: {
//     width: 60,
//     height: 60,
//     resizeMode: 'contain',
//   },
//   categoryLabel: {
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

// export default CategoryScreen;



// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // To navigate back

// // Define the Category type
// interface Category {
//   id: number;
//   name: string;
//   icon: string;
// }

// const categories: Category[] = [
//   { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//   { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//   { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//   { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//   { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//   { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//   { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//   { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//   { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   { id: 10, name: 'Makeup', icon: 'https://img.icons8.com/color/96/lipstick.png' }, // Added Makeup
//   { id: 11, name: 'Accessories', icon: 'https://img.icons8.com/color/96/watch.png' }, // Added Accessories
// ];

// const CategoryScreen = () => {
//   const navigation = useNavigation();

//   // Use the Category type for item
//   const renderCategoryItem = ({ item }: { item: Category }) => (
//     <TouchableOpacity style={styles.categoryItem}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryLabel}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header with back arrow */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={styles.backButton}>{"< Back"}</Text>
//         </TouchableOpacity>
//         <Text style={styles.heading}>Categories</Text>
//       </View>

//       {/* FlatList for categories */}
//       <FlatList
//         data={categories}
//         renderItem={renderCategoryItem}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={3} // Adjust number of columns as needed
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f7f7f7',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//     paddingTop: 40, // To give some space from top
//   },
//   backButton: {
//     fontSize: 18,
//     color: '#007bff',
//     marginRight: 16,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   listContainer: {
//     justifyContent: 'center',
//   },
//   categoryItem: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 16,
//     marginHorizontal: 8,
//   },
//   categoryIcon: {
//     width: 60,
//     height: 60,
//     resizeMode: 'contain',
//   },
//   categoryLabel: {
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

// export default CategoryScreen;


// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // To navigate back

// // Define the Category type
// interface Category {
//   id: number;
//   name: string;
//   icon: string;
// }

// const categories: Category[] = [
//   { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//   { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//   { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//   { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//   { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//   { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//   { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//   { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//   { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   { id: 10, name: 'Makeup', icon: 'https://img.icons8.com/color/96/lipstick.png' }, // Added Makeup
//   { id: 11, name: 'Accessories', icon: 'https://img.icons8.com/color/96/watch.png' }, // Added Accessories
// ];

// const CategoryScreen = () => {
//   const navigation = useNavigation();

//   // Use the Category type for item
//   const renderCategoryItem = ({ item }: { item: Category }) => (
//     <TouchableOpacity style={styles.categoryItem}>
//       <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
//       <Text style={styles.categoryLabel}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header with only back arrow */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
        
// <Image
//   source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/back.png' }}
//   style={styles.backArrow}
// />

//         </TouchableOpacity>
//         <Text style={styles.heading}>Categories</Text>
//       </View>

//       {/* FlatList for categories */}
//       <FlatList
//         data={categories}
//         renderItem={renderCategoryItem}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={3} // Adjust number of columns as needed
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //padding: 16,
//     backgroundColor: '#EDE7F6',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//     paddingTop: 40, // To give some space from top
//   },
//   backArrow: {
//     width: 30,
//     height: 30,
//     resizeMode: 'contain',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginLeft: 16, // Add space for the heading text
//   },
//   listContainer: {
//     justifyContent: 'center',
//   },
//   categoryItem: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 16,
//     marginHorizontal: 8,
    
//     width: '30%',
//   },
//   categoryIcon: {
//     width: 60,
//     height: 60,
//     resizeMode: 'contain',
    
//     borderRadius: 30, // Make the icon round
//     marginBottom: 10,
//   },
//   categoryLabel: {
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   categoryName: {
//     fontSize: 16,
//     fontFamily: 'DancingScript-Regular', // You can change this to any cursive font you prefer
//     textAlign: 'center',
//   },
// });

// export default CategoryScreen;




// import React from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// const categories = [
//   { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//   { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//   { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//   { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//   { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//   { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//   { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//   { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//   { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   // Add more categories if needed
// ];

// const CategoryScreen = ({ navigation }: any) => {
//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.headerContainer}>
//         {/* Back arrow icon as an image */}
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/ios/50/000000/left.png' }} // Back arrow PNG from Icons8
//             style={styles.backArrow}
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Category</Text>
//       </View>

//       <View style={styles.categoryContainer}>
//         {categories.map((category) => (
//           <View key={category.id} style={styles.categoryItem}>
//             <Image source={{ uri: category.icon }} style={styles.categoryIcon} />
//             <Text style={styles.categoryName}>{category.name}</Text>
//           </View>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     paddingTop: 10,
//     paddingBottom: 20,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     paddingTop: 20,
//   },
//   backArrow: {
//     width: 30,
//     height: 30,
//     marginRight: 10,
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontFamily: 'DancingScript-Regular', // Cursive font for header
//     fontWeight: 'bold',
//   },
//   categoryContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-evenly',
//     marginTop: 20,
//   },
//   categoryItem: {
//     alignItems: 'center',
//     marginBottom: 20,
//     width: '30%', // Adjust based on how many categories fit per row
//   },
//   categoryIcon: {
//     width: 70,
//     height: 70,
//     borderRadius: 35, // Circle shape
//     marginBottom: 10,
//   },
//   categoryName: {
//     fontSize: 14,
//     fontFamily: 'DancingScript-Regular', // Cursive font for category names
//     textAlign: 'center',
//   },
// });

// export default CategoryScreen;




// import React, { useState, useEffect } from 'react';
// import {
  // Alert,
  // StyleSheet,
  // Text,
  // TouchableOpacity,
  // View,
  // Image,
  // FlatList,
  // ScrollView,
  // ImageBackground,
// } from 'react-native';
// import { RootStackParamList } from '../navigation/types';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { useNavigation } from '@react-navigation/native';
// 
// const categories = [
  // { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
  // { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
  // { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
  // { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
  // { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
  // { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
  // { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
  // { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
  // { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
  // { id: 10, name: 'Makeup', icon: 'https://img.icons8.com/color/96/lipstick.png' },
  // { id: 11, name: 'Accessories', icon: 'https://img.icons8.com/?size=100&id=46940&format=png&color=000000' },
// ];
// 
// const bottomNavItems = [
  // { id: 'Home', label: 'Home', icon: 'https://img.icons8.com/color/96/home.png' },
  // { id: 'Categories', label: 'Categories', icon: 'https://img.icons8.com/color/96/category.png' },
  // { id: 'Mall', label: 'Mall', icon: 'https://img.icons8.com/color/96/shopping-mall.png' },
  // { id: 'Video Finds', label: 'Video', icon: 'https://img.icons8.com/color/96/video.png' },
  // { id: 'My Orders', label: 'Orders', icon: 'https://img.icons8.com/color/96/order-history.png' },
// ];
// 
// const CategoryScreen = () => {
  // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // const [activeNavItem, setActiveNavItem] = useState<string>('Home');
// 
  // const Rings = () => {
    // navigation.navigate('RingDetect'); // Navigates to NotificationScreen
  // };
    // 
// 
  // const handleNavItemPress = (item: string) => {
    // setActiveNavItem(item);
    // if (item ==='Home'){
      // navigation.navigate('Product');
    // }else if (item === 'Categories') {
      // navigation.navigate('Category');
    // } else if (item === 'Mall') {
      // navigation.navigate('Mall');
    // } else if (item === 'Video Finds') {
      // navigation.navigate('Video');
    // } else if (item === 'My Orders') {
      // navigation.navigate('Order');
    // }
  //  };
// 
  //  const handleCategoryPress = (categoryName: string) => {
      // if (categoryName === 'Rings & Earrings') {
        // navigation.navigate('RingDetect'); // Navigate to RingDetectionScreen
      // }
      
    // };
// 
  // return (
    // <View style={{ flex: 1 }}>
      {/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
        {/* <View style={styles.headerContainer}> */}
          {/* <TouchableOpacity onPress={() => navigation.goBack()}> */}
            {/* <Image */}
              // source={{ uri: 'https://img.icons8.com/ios/50/000000/left.png' }}
              // style={styles.backArrow}
            // />
          {/* </TouchableOpacity> */}
{/*  */}
          {/* <Text style={styles.headerTitle}>Category</Text> */}
        {/* </View> */}
{/*  */}
        {/* <View style={styles.categoryContainer}> */}
          {/* {categories.map((category) => ( */}
            // <View key={category.id} style={styles.categoryItem}>
              {/* <Image source={{ uri: category.icon }} style={styles.categoryIcon} /> */}
              {/* <Text style={styles.categoryName}>{category.name}</Text> */}
            {/* </View> */}
          // ))}
        {/* </View> */}
      {/* </ScrollView> */}
{/*  */}
      {/* <ImageBackground source={{ uri: 'https://img.icons8.com/cloudinary/wave.png' }} */}
        // style={styles.curvedBottomNavBar}
        // imageStyle={styles.bottomNavImage} >
        {/* {bottomNavItems.map((item) => ( */}
          // <TouchableOpacity
            // key={item.id}
            // style={[styles.navItem, activeNavItem === item.id && styles.activeNavItem]}
            // onPress={() => handleNavItemPress(item.id)}
          // >
            {/* <Image source={{ uri: item.icon }} style={styles.navIcon} /> */}
            {/* <Text style={styles.navText}>{item.label}</Text> */}
          {/* </TouchableOpacity> */}
// 
          // 
        // ))}
      {/* </ImageBackground> */}
    {/* </View> */}
  // );
// };
// 
// const styles = StyleSheet.create({
  // scrollContainer: {
    // flexGrow: 1,
    // paddingTop: 10,
    // paddingBottom: 20,
    // backgroundColor: '#EDE7F6',
  // },
  // headerContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // paddingHorizontal: 15,
    // paddingTop: 20,
  // },
  // backArrow: {
    // width: 30,
    // height: 30,
    // marginRight: 10,
  // },
  // headerTitle: {
    // fontSize: 22,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
  // },
  // categoryContainer: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-evenly',
    // marginTop: 20,
  // },
  // categoryItem: {
    // alignItems: 'center',
    // marginBottom: 20,
    // width: '30%',
  // },
  // categoryIcon: {
    // width: 90,
    // height: 90,
    // borderRadius: 60,
    // borderWidth: 5,
    // borderColor: '#ddd',
    // marginBottom: 15,
  // },
  // categoryName: {
    // fontSize: 14,
    // fontStyle: 'italic',
    // textAlign: 'center',
  // },
  // actionIcon: {
    // width: 24,
    // height: 24,
  // },
  // curvedBottomNavBar: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    // height: 70,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    // backgroundColor: '#C79BFF',
  // },
  // bottomNavImage: {
    // resizeMode: 'cover',
  // },
  // navItem: {
    // alignItems: 'center',
  // },
  // activeNavItem: {
    // borderBottomWidth: 2,
    // borderBottomColor: '#6200EE',
  // },
  // navIcon: {
    // width: 30,
    // height: 30,
  // },
  // navText: {
    // fontSize: 12,
    // color: '#000',
  // },
// });
// 
// export default CategoryScreen;
// 



// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   ScrollView,
//   ImageBackground,
// } from 'react-native';
// import { RootStackParamList } from '../navigation/types';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { useNavigation } from '@react-navigation/native';

// const categories = [
//   { id: 1, name: 'T-Shirt', icon: 'https://img.icons8.com/color/96/t-shirt.png' },
//   { id: 2, name: 'Jeans', icon: 'https://img.icons8.com/color/96/jeans.png' },
//   { id: 3, name: 'Dress', icon: 'https://img.icons8.com/?size=100&id=59495&format=png&color=000000' },
//   { id: 4, name: 'Saree', icon: 'https://img.icons8.com/?size=100&id=U3BJO4fkOkx5&format=png&color=000000' },
//   { id: 5, name: 'Skirt', icon: 'https://img.icons8.com/color/96/skirt.png' },
//   { id: 6, name: 'Hoodie', icon: 'https://img.icons8.com/color/96/jacket.png' },
//   { id: 7, name: 'Shoes', icon: 'https://img.icons8.com/?size=100&id=16584&format=png&color=000000' },
//   { id: 8, name: 'Necklace', icon: 'https://img.icons8.com/?size=100&id=19731&format=png&color=000000' },
//   { id: 9, name: 'Rings & Earrings', icon: 'https://img.icons8.com/?size=100&id=ryo1MNae0iBt&format=png&color=000000' },
//   { id: 10, name: 'Makeup', icon: 'https://img.icons8.com/color/96/lipstick.png' },
//   { id: 11, name: 'Accessory', icon: 'https://img.icons8.com/?size=100&id=46940&format=png&color=000000' },
// ];

// const bottomNavItems = [
//   { id: 'Home', label: 'Home', icon: 'https://img.icons8.com/color/96/home.png' },
//   { id: 'Categories', label: 'Categories', icon: 'https://img.icons8.com/color/96/category.png' },
//   { id: 'Mall', label: 'Mall', icon: 'https://img.icons8.com/color/96/shopping-mall.png' },
//   { id: 'Video Finds', label: 'Video', icon: 'https://img.icons8.com/color/96/video.png' },
//   { id: 'My Orders', label: 'Orders', icon: 'https://img.icons8.com/color/96/order-history.png' },
// ];

// const CategoryScreen = () => {
//   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   const [activeNavItem, setActiveNavItem] = useState<string>('Home');

//   const handleNavItemPress = (item: string) => {
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

//   const handleCategoryPress = (categoryName: string) => {
//     if (categoryName === 'Rings & Earrings') {
//       navigation.navigate('RingDetect'); // Navigate to RingDetectionScreen
//     }
//     else if (categoryName === 'Accessory') {
//       navigation.navigate('Accessories'); // Navigate to RingDetectionScreen
//     }
//     // Add more conditions for other categories if needed
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.headerContainer}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/ios/50/000000/left.png' }}
//               style={styles.backArrow}
//             />
//           </TouchableOpacity>

//           <Text style={styles.headerTitle}>Category</Text>
//         </View>

//         <View style={styles.categoryContainer}>
//           {categories.map((category) => (
//             <TouchableOpacity
//               key={category.id}
//               style={styles.categoryItem}
//               onPress={() => handleCategoryPress(category.name)}
//             >
//               <Image source={{ uri: category.icon }} style={styles.categoryIcon} />
//               <Text style={styles.categoryName}>{category.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>

//       <ImageBackground
//         source={{ uri: 'https://img.icons8.com/cloudinary/wave.png' }}
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

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     paddingTop: 10,
//     paddingBottom: 20,
//     backgroundColor: '#EDE7F6',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     paddingTop: 20,
//   },
//   backArrow: {
//     width: 30,
//     height: 30,
//     marginRight: 10,
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//   },
//   categoryContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-evenly',
//     marginTop: 20,
//   },
//   categoryItem: {
//     alignItems: 'center',
//     marginBottom: 20,
//     width: '30%',
//   },
//   categoryIcon: {
//     width: 90,
//     height: 90,
//     borderRadius: 60,
//     borderWidth: 5,
//     borderColor: '#ddd',
//     marginBottom: 15,
//   },
//   categoryName: {
//     fontSize: 14,
//     fontStyle: 'italic',
//     textAlign: 'center',
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

// export default CategoryScreen;


import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { RootStackParamList } from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

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
  { id: 10, name: 'Makeup', icon: 'https://img.icons8.com/color/96/lipstick.png' },
  { id: 11, name: 'Accessory', icon: 'https://img.icons8.com/?size=100&id=46940&format=png&color=000000' },
];

const bottomNavItems = [
  { id: 'Home', label: 'Home', icon: 'https://img.icons8.com/color/96/home.png' },
  { id: 'Categories', label: 'Categories', icon: 'https://img.icons8.com/color/96/category.png' },
  { id: 'Mall', label: 'Mall', icon: 'https://img.icons8.com/color/96/shopping-mall.png' },
  { id: 'Video Finds', label: 'Video', icon: 'https://img.icons8.com/color/96/video.png' },
  { id: 'My Orders', label: 'Orders', icon: 'https://img.icons8.com/color/96/order-history.png' },
];

const CategoryScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [activeNavItem, setActiveNavItem] = useState<string>('Home');

  const handleNavItemPress = (item: string) => {
    setActiveNavItem(item);
    if (item === 'Home') {
      navigation.navigate('Product');
    } else if (item === 'Categories') {
      navigation.navigate('Category');
    } else if (item === 'Mall') {
      navigation.navigate('Mall');
    } else if (item === 'Video Finds') {
      navigation.navigate('Video');
    } else if (item === 'My Orders') {
      navigation.navigate('Order');
    }
  };

  const handleCategoryPress = (categoryName: string) => {
    if (categoryName === 'Rings & Earrings') {
      navigation.navigate('RingDetect'); // Navigate to RingDetectionScreen
    }
    else if (categoryName === 'Accessory') {
      navigation.navigate('Accessories'); // Navigate to Accessories Screen
    }
    else if (categoryName === 'T-Shirt') {
      navigation.navigate('TShirt'); // Navigate to Accessories Screen
    }
    else if (categoryName === 'Jeans') {
      navigation.navigate('Jeans'); // Navigate to Accessories Screen
    }
    else if (categoryName === 'Dress') {
      navigation.navigate('Dress'); // Navigate to Accessories Screen
    }
    else if (categoryName === 'Saree') {
      navigation.navigate('Saree'); // Navigate to Accessories Screen
    }
    else if (categoryName === 'Skirt') {
      navigation.navigate('Skirt'); // Navigate to Accessories Screen
    }
    else if (categoryName === 'Hoodie') {
      navigation.navigate('Hoodie'); // Navigate to Accessories Screen
    }
    else if (categoryName === 'Shoes') {
      navigation.navigate('Shoes'); // Navigate to Accessories Screen
    }
    else if (categoryName === 'Necklace') {
      navigation.navigate('Jewel'); // Navigate to Accessories Screen
    }
    else if (categoryName === 'Makeup') {
      navigation.navigate('MakeUp'); // Navigate to Accessories Screen
    }
    // Add more conditions for other categories if needed
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.flashCardContainer}>
          <View style={styles.flashCard}>
            <Text style={styles.flashCardText}>Exclusive Deals Available!</Text>
            <Text style={styles.flashCardSubText}>Check out the latest offers on fashion and accessories.</Text>
          </View>
        </View>

        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios/50/000000/left.png' }}
              style={styles.backArrow}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Category</Text>
        </View>

        <View style={styles.categoryContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryItem}
              onPress={() => handleCategoryPress(category.name)}
            >
              <Image source={{ uri: category.icon }} style={styles.categoryIcon} />
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <ImageBackground
        source={{ uri: 'https://img.icons8.com/cloudinary/wave.png' }}
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

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#EDE7F6',
  },
  flashCardContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    zIndex: 1,
  },
  flashCard: {
    backgroundColor: '#F1C40F',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  flashCardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  flashCardSubText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  backArrow: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginBottom: 20,
    width: '30%',
  },
  categoryIcon: {
    width: 90,
    height: 90,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: '#ddd',
    marginBottom: 15,
  },
  categoryName: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
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
    backgroundColor: '#C79BFF',
  },
  bottomNavImage: {
    resizeMode: 'cover',
  },
  navItem: {
    alignItems: 'center',
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#6200EE',
  },
  navIcon: {
    width: 30,
    height: 30,
  },
  navText: {
    fontSize: 12,
    color: '#000',
  },
});

export default CategoryScreen;
