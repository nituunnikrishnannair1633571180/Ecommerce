// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// export type RootStackParamList = {
//   SignIn: undefined;
//   SignUp: undefined;
//   Product: undefined; // Add any other screens here
// };

// navigation/types.ts
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// export type RootStackParamList = {
//   Product: undefined; // No params expected
//   SignIn: undefined;  // No params expected
//   SignUp:undefined;
// };

// export type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// // Define the root stack with all screens and their navigation parameters
// export type RootStackParamList = {
//   Product: { location?: { latitude: number; longitude: number } | { city: string; state: string } }; 
//  // Product: undefined; // Screen expects no parameters
//   SignIn: undefined;  // Screen expects no parameters
//   SignUp: undefined;  // Screen expects no parameters
//   SplashScreen: undefined; // Add the splash screen if needed
//   WelcomeScreen: undefined; // Add welcome swipe screen if needed
//   LocationScreen: undefined;

// };

// // Type alias for screens that use NativeStackNavigationProp
// export type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SplashScreen'>;
// export type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// export type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
// export type ProductScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Product'>;
// export type WelcomeSwipeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'WelcomeScreen'>;
// export type LocationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LocationScreen'>;

// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// export type RootStackParamList = {
//   Product: undefined;
//   SignIn: undefined;
//   SignUp: undefined;
//   SplashScreen: undefined;
//   WelcomeScreen: undefined;
//   AllowLocation: undefined;  // Screen to request location permission
//   SelectLocation:  { latitude: number; longitude: number }; // Screen to manually select city or use current location
// };

// // Type aliases for navigation props
// export type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SplashScreen'>;
// export type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
// export type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
// export type ProductScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Product'>;
// export type WelcomeSwipeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'WelcomeScreen'>;
// export type AllowLocationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AllowLocation'>;
// export type SelectLocationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelectLocation'>;

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Product: undefined;
  
SignIn: undefined;
SignUp: undefined;
SplashScreen: undefined;
WelcomeScreen: undefined;
AllowLocation: undefined;  // Screen to request location permission
SelectLocation: undefined; // Screen to manually select city or use current location
CompleteProfile:undefined;
EnableNotification:undefined;
Category:undefined;
Order:undefined;
Mall:undefined;
Video:undefined;
Wish:undefined;
Notification:undefined;
Cart:undefined;
User:undefined;
RingDetect:undefined;
Size1022:undefined;
Size992:undefined;
BRSize:undefined;
Size1156:undefined;
Payment:undefined;
//Accessories:undefined;
Watches:undefined;
Accessories: { screen: string } | undefined;
Search:undefined;
TShirt:undefined;
Jeans:undefined;
Dress:undefined;
Saree:undefined;
Skirt:undefined;
Hoodie:undefined;
Shoes:undefined;
Jewel:undefined;
MakeUp:undefined;


VideoSearch:undefined;

  //SelectLocation: { latitude: number; longitude: number };
};

// Type aliases for navigation props
export type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SplashScreen'>;
export type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
export type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
export type ProductScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Product'>;
export type EnableNotificationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'EnableNotification'>;
export type WelcomeSwipeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'WelcomeScreen'>;
export type AllowLocationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AllowLocation'>;
export type SelectLocationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelectLocation'>;
export type CompleteProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CompleteProfile'>;
export type CategoryScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Category'>;
export type MallScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Mall'>;
export type OrderScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Order'>;
export type VideoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Video'>;

export type NotificationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Notification'>;
export type CartScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cart'>;
export type PaymentScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Payment'>;
export type WishListScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Wish'>;
export type UserScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'User'>;
export type RingDetectionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RingDetect'>;
export type AccessoriesNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Accessories'>;
export type WatchNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Watches'>;


export type Size1022ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Size1022'>;
export type Size992ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Size992'>;
export type Size1156ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Size1156'>;
export type BabyRingSizeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'BRSize'>;

export type SearchScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Search'>;

export type TShirtScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'TShirt'>;
export type JeansScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Jeans'>;
export type DressScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Dress'>;
export type SareeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Saree'>;
export type SkirtScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Skirt'>;
export type HoodieScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Hoodie'>;
export type ShoesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Shoes'>;
export type JewelleyScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Jewel'>;
export type MakeUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MakeUp'>;







