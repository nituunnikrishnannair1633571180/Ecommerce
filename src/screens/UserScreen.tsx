/* import React from 'react';
import { View, Text } from 'react-native';

const MallScreen = () => {
  return (
    <View>
      <Text>Mall Screen</Text>
    </View>
  );
};

export default MallScreen;
 */


// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// const UserScreen = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Profile Section */}
//       <View style={styles.profileSection}>
//         <Image
//           source={{ uri: 'https://img.icons8.com/color/96/user-female-circle.png' }}
//           style={styles.profileImage}
//         />
//         <View style={styles.profileDetails}>
//           <Text style={styles.userName}>Nitu Nair</Text>
//           <View style={styles.smartCoins}>
//             <Text style={styles.smartCoinsText}>SmartCoins</Text>
//             <Text style={styles.coinsAmount}>0</Text>
//           </View>
//         </View>
//       </View>

//       {/* Action Buttons */}
//       <View style={styles.actionButtons}>
//         <TouchableOpacity style={styles.actionButton}>
//           <Text style={styles.actionButtonText}>Help Centre</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionButton}>
//           <Text style={styles.actionButtonText}>Change Language</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Categories */}
//       <View style={styles.categorySection}>
//         <Text style={styles.categoryTitle}>My Payments</Text>
//         <TouchableOpacity style={styles.categoryItem}>
//           <Text style={styles.categoryItemText}>Bank & UPI Details</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryItem}>
//           <Text style={styles.categoryItemText}>Payment & Refund</Text>
//         </TouchableOpacity>

//         <Text style={styles.categoryTitle}>My Activity</Text>
//         <TouchableOpacity style={styles.categoryItem}>
//           <Text style={styles.categoryItemText}>Wishlisted Products</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryItem}>
//           <Text style={styles.categoryItemText}>Shared Products</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryItem}>
//           <Text style={styles.categoryItemText}>Followed Shops</Text>
//         </TouchableOpacity>

//         <Text style={styles.categoryTitle}>Others</Text>
//         <TouchableOpacity style={styles.categoryItem}>
//           <Text style={styles.categoryItemText}>Meesho Balance</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryItem}>
//           <Text style={styles.categoryItemText}>Become a Supplier</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryItem}>
//           <Text style={styles.categoryItemText}>Settings</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryItem}>
//           <Text style={styles.categoryItemText}>Rate Meesho</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryItem}>
//           <Text style={styles.categoryItemText}>Legal and Policies</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryItem}>
//           <Text style={styles.categoryItemText}>Logout</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Footer */}
//       <View style={styles.footer}>
//         <Image
//           source={{ uri: 'https://example.com/illustration.png' }} // Replace with your image URL
//           style={styles.footerImage}
//         />
//         <Text style={styles.footerText}>Made with love for Bharat</Text>
//         <Text style={styles.footerVersion}>App Version: 20.7 (625)</Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius: 8,
//   },
//   profileImage: {
//     width: 64,
//     height: 64,
//     borderRadius: 32,
//     marginRight: 16,
//   },
//   profileDetails: {
//     flex: 1,
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   smartCoins: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   smartCoinsText: {
//     fontSize: 14,
//     color: '#555',
//     marginRight: 8,
//   },
//   coinsAmount: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#ff8800',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   actionButton: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginHorizontal: 4,
//   },
//   actionButtonText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   categorySection: {
//     marginBottom: 16,
//   },
//   categoryTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#555',
//     marginBottom: 8,
//     marginTop: 16,
//   },
//   categoryItem: {
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   categoryItemText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   footer: {
//     alignItems: 'center',
//     marginTop: 16,
//     padding: 16,
//   },
//   footerImage: {
//     width: 100,
//     height: 100,
//     marginBottom: 8,
//   },
//   footerText: {
//     fontSize: 14,
//     color: '#555',
//     textAlign: 'center',
//   },
//   footerVersion: {
//     fontSize: 12,
//     color: '#888',
//     textAlign: 'center',
//     marginTop: 4,
//   },
// });

// export default UserScreen;




// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const UserScreen = () => {
//   const navigation = useNavigation();

//   const handleActionPress = (action: string) => {
//     Alert.alert(`${action}`, `You clicked ${action}`, [{ text: "OK" }]);
//   };

//   const navigateToScreen = (screenName: string) => {
//     navigation.navigate(screenName); 
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Profile Section */}
//       <View style={styles.profileSection}>
//         <Image
//           source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
//           style={styles.profileImage}
//         />
//         <View style={styles.profileDetails}>
//           <Text style={styles.userName}>Unnikrishnan Nair</Text>
//           <View style={styles.smartCoins}>
//             <Text style={styles.smartCoinsText}>SmartCoins</Text>
//             <Text style={styles.coinsAmount}>0</Text>
//           </View>
//         </View>
//       </View>

//       {/* Action Buttons */}
//       <View style={styles.actionButtons}>
//         <TouchableOpacity style={styles.actionButton} onPress={() => handleActionPress('Help Centre')}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/fluency/48/help.png' }}
//             style={styles.actionIcon}
//           />
//           <Text style={styles.actionButtonText}>Help Centre</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionButton} onPress={() => handleActionPress('Change Language')}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/48/language.png' }}
//             style={styles.actionIcon}
//           />
//           <Text style={styles.actionButtonText}>Change Language</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Categories */}
//       <View style={styles.categorySection}>
//         <Text style={styles.categoryTitle}>My Payments</Text>
//         <TouchableOpacity style={styles.categoryItem} onPress={() => navigateToScreen('BankDetailsScreen')}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/48/card.png' }}
//             style={styles.categoryIcon}
//           />
//           <Text style={styles.categoryItemText}>Bank & UPI Details</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryItem} onPress={() => navigateToScreen('PaymentRefundScreen')}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/48/money.png' }}
//             style={styles.categoryIcon}
//           />
//           <Text style={styles.categoryItemText}>Payment & Refund</Text>
//         </TouchableOpacity>

//         <Text style={styles.categoryTitle}>My Activity</Text>
//         <TouchableOpacity style={styles.categoryItem} onPress={() => navigateToScreen('WishlistedProductsScreen')}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/48/heart.png' }}
//             style={styles.categoryIcon}
//           />
//           <Text style={styles.categoryItemText}>Wishlisted Products</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryItem} onPress={() => navigateToScreen('SharedProductsScreen')}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/48/share.png' }}
//             style={styles.categoryIcon}
//           />
//           <Text style={styles.categoryItemText}>Shared Products</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryItem} onPress={() => navigateToScreen('FollowedShopsScreen')}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/48/shop.png' }}
//             style={styles.categoryIcon}
//           />
//           <Text style={styles.categoryItemText}>Followed Shops</Text>
//         </TouchableOpacity>

//         <Text style={styles.categoryTitle}>Others</Text>
//         <TouchableOpacity style={styles.categoryItem} onPress={() => handleActionPress('Meesho Balance')}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/48/wallet.png' }}
//             style={styles.categoryIcon}
//           />
//           <Text style={styles.categoryItemText}>Meesho Balance</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryItem} onPress={() => handleActionPress('Become a Supplier')}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/48/supplier.png' }}
//             style={styles.categoryIcon}
//           />
//           <Text style={styles.categoryItemText}>Become a Supplier</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryItem} onPress={() => navigateToScreen('SettingsScreen')}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/48/settings.png' }}
//             style={styles.categoryIcon}
//           />
//           <Text style={styles.categoryItemText}>Settings</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryItem} onPress={() => handleActionPress('Rate Meesho')}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/48/rating.png' }}
//             style={styles.categoryIcon}
//           />
//           <Text style={styles.categoryItemText}>Rate Meesho</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.categoryItem} onPress={() => handleActionPress('Legal and Policies')}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/48/legal.png' }}
//             style={styles.categoryIcon}
//           />
//           <Text style={styles.categoryItemText}>Legal and Policies</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.categoryItem}
//           onPress={() => Alert.alert('Logout', 'Are you sure you want to logout?', [
//             { text: 'Cancel', style: 'cancel' },
//             { text: 'Logout', onPress: () => console.log('Logged out') },
//           ])}
//         >
//           <Image
//             source={{ uri: 'https://img.icons8.com/color/48/logout-rounded-left.png' }}
//             style={styles.categoryIcon}
//           />
//           <Text style={styles.categoryItemText}>Logout</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Footer */}
//       <View style={styles.footer}>
//         <Image
//           source={{ uri: 'https://img.icons8.com/color/96/india.png' }} // Replace with your image URL
//           style={styles.footerImage}
//         />
//         <Text style={styles.footerText}>Made with love for Bharat</Text>
//         <Text style={styles.footerVersion}>App Version: 20.7 (625)</Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   // Same styles as before, add these:
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius: 8,
//   },
//   profileImage: {
//     width: 64,
//     height: 64,
//     borderRadius: 32,
//     marginRight: 16,
//   },
//   profileDetails: {
//     flex: 1,
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   smartCoins: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   smartCoinsText: {
//     fontSize: 14,
//     color: '#555',
//     marginRight: 8,
//   },
//   coinsAmount: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#ff8800',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   actionButton: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginHorizontal: 4,
//   },
//   actionButtonText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   categorySection: {
//     marginBottom: 16,
//   },
//   categoryTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#555',
//     marginBottom: 8,
//     marginTop: 16,
//   },
//   categoryItem: {
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   categoryItemText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   footer: {
//     alignItems: 'center',
//     marginTop: 16,
//     padding: 16,
//   },
//   footerImage: {
//     width: 100,
//     height: 100,
//     marginBottom: 8,
//   },
//   footerText: {
//     fontSize: 14,
//     color: '#555',
//     textAlign: 'center',
//   },
//   footerVersion: {
//     fontSize: 12,
//     color: '#888',
//     textAlign: 'center',
//     marginTop: 4,
//   },

//   actionIcon: {
//     width: 24,
//     height: 24,
//     marginBottom: 4,
//   },
//   categoryIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 8,
//   },
//   // categoryItem: {
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   //   backgroundColor: '#fff',
//   //   padding: 12,
//   //   borderRadius: 8,
//   //   marginBottom: 8,
//   // },
// });



// export default UserScreen;


import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the types of screens in your stack
type RootStackParamList = {
  BankDetailsScreen: undefined;
  PaymentRefundScreen: undefined;
  WishlistedProductsScreen: undefined;
  SharedProductsScreen: undefined;
  FollowedShopsScreen: undefined;
  SettingsScreen: undefined;
};

// Define the type for the navigation prop
type UserScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const UserScreen = () => {
  const navigation = useNavigation<UserScreenNavigationProp>();

  const handleActionPress = (action: string) => {
    Alert.alert(`${action}`, `You clicked ${action}`, [{ text: "OK" }]);
  };

  const navigateToScreen = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://img.icons8.com/color/96/user-male-circle.png' }}
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.userName}>Unnikrishnan Nair</Text>
          <View style={styles.smartCoins}>
            <Text style={styles.smartCoinsText}>SmartCoins</Text>
            <Text style={styles.coinsAmount}>0</Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleActionPress('Help Centre')}>
          <Image
            source={{ uri: 'https://img.icons8.com/fluency/48/help.png' }}
            style={styles.actionIcon}
          />
          <Text style={styles.actionButtonText}>Help Centre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleActionPress('Change Language')}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/language.png' }}
            style={styles.actionIcon}
          />
          <Text style={styles.actionButtonText}>Change Language</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>My Payments</Text>
        <TouchableOpacity style={styles.categoryItem} onPress={() => navigateToScreen('BankDetailsScreen')}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/card.png' }}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryItemText}>Bank & UPI Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem} onPress={() => navigateToScreen('PaymentRefundScreen')}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/money.png' }}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryItemText}>Payment & Refund</Text>
        </TouchableOpacity>

        <Text style={styles.categoryTitle}>My Activity</Text>
        <TouchableOpacity style={styles.categoryItem} onPress={() => navigateToScreen('WishlistedProductsScreen')}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/heart.png' }}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryItemText}>Wishlisted Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem} onPress={() => navigateToScreen('SharedProductsScreen')}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/share.png' }}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryItemText}>Shared Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem} onPress={() => navigateToScreen('FollowedShopsScreen')}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/shop.png' }}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryItemText}>Followed Shops</Text>
        </TouchableOpacity>

        <Text style={styles.categoryTitle}>Others</Text>
        <TouchableOpacity style={styles.categoryItem} onPress={() => handleActionPress('Meesho Balance')}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/wallet.png' }}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryItemText}>Meesho Balance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem} onPress={() => handleActionPress('Become a Supplier')}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/supplier.png' }}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryItemText}>Become a Supplier</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem} onPress={() => navigateToScreen('SettingsScreen')}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/settings.png' }}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem} onPress={() => handleActionPress('Rate Meesho')}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/rating.png' }}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryItemText}>Rate Meesho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem} onPress={() => handleActionPress('Legal and Policies')}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/legal.png' }}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryItemText}>Legal and Policies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => Alert.alert('Logout', 'Are you sure you want to logout?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Logout', onPress: () => console.log('Logged out') },
          ])}
        >
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/logout-rounded-left.png' }}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryItemText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Image
          source={{ uri: 'https://img.icons8.com/color/96/india.png' }}
          style={styles.footerImage}
        />
        <Text style={styles.footerText}>Made with love for Bharat</Text>
        <Text style={styles.footerVersion}>App Version: 20.7 (625)</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  profileDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  smartCoins: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  smartCoinsText: {
    fontSize: 14,
    color: '#555',
    marginRight: 8,
  },
  coinsAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff8800',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  categorySection: {
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 8,
    marginTop: 16,
  },
  categoryItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryItemText: {
    fontSize: 14,
    color: '#333',
  },
  footer: {
    alignItems: 'center',
    marginTop: 16,
    padding: 16,
  },
  footerImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  footerText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  footerVersion: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 4,
  },

  actionIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  categoryIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  // categoryItem: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#fff',
  //   padding: 12,
  //   borderRadius: 8,
  //   marginBottom: 8,
  // },
});

export default UserScreen;
