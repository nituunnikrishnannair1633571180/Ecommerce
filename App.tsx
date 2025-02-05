/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from './src/screens/SplashScreen';
// import SignInScreen from './src/screens/SignInScreen';
// import SignUpScreen from './src/screens/SignUpScreen';
// import ProductScreen from './src/screens/ProductScreen';
// import WelcomeSwipeScreen from './src/screens/WelcomeSwipeScreen';
// import LocationScreen from './src/screens/LocationScreen';
// import { initDatabase } from './src/databases/Database';

// const Stack = createStackNavigator();

// const App = () => {
//   React.useEffect(() => {
//     initDatabase();
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Splash">
//         <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
//         <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
//         <Stack.Screen name="Product" component={ProductScreen} />
//         <Stack.Screen name="WelcomeScreen" component={WelcomeSwipeScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="LocationScreen" component={LocationScreen} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from './src/screens/SplashScreen';
// import SignInScreen from './src/screens/SignInScreen';
// import SignUpScreen from './src/screens/SignUpScreen';
// import ProductScreen from './src/screens/ProductScreen';
// import WelcomeSwipeScreen from './src/screens/WelcomeSwipeScreen';
// import AllowLocationScreen from './src/screens/AllowLocationScreen';
// import SelectLocationScreen from './src/screens/SelectLocationScreen';
// import { initDatabase } from './src/databases/Database';

// const Stack = createStackNavigator();

// const App = () => {
//   React.useEffect(() => {
//     initDatabase();
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SplashScreen">
//         <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
//         <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
//         <Stack.Screen name="Product" component={ProductScreen} />
//         <Stack.Screen name="WelcomeScreen" component={WelcomeSwipeScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="AllowLocation" component={AllowLocationScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SelectLocation" component={SelectLocationScreen} options={{ headerShown: false }} />
        
        
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


//good code
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from './src/screens/SplashScreen';
// import SignInScreen from './src/screens/SignInScreen';
// import SignUpScreen from './src/screens/SignUpScreen';
// import ProductScreen from './src/screens/ProductScreen';
// import VideoScreen from './src/screens/VideoScreen';
// import WelcomeSwipeScreen from './src/screens/WelcomeSwipeScreen';
// import AllowLocationScreen from './src/screens/AllowLocationScreen';
// import SelectLocationScreen from './src/screens/SelectLocationScreen';
// import CompleteProfileScreen from './src/screens/CompleteProfileScreen';
// import EnableNotificationScreen from './src/screens/EnableNotificationScreen';
// import CategoryScreen from './src/screens/CategoryScreen';
// import MallScreen from './src/screens/MallScreen';
// import OrderScreen from './src/screens/OrderScreen';
// import NotificationScreen from './src/screens/NotificationScreen';
// import WishListScreen from './src/screens/WishListScreen';
// import CartScreen from './src/screens/CartScreen';
// import PaymentScreen from './src/screens/PaymentScreen';
// import UserScreen from './src/screens/UserScreen';
// import RingDetectionScreen from './src/screens/RingDetectionScreen';
// import Size1022Screen from './src/screens/Size1022Screen';
// import Size992Screen from './src/screens/Size992Screen';
// import Size1156Screen from './src/screens/Size1156Screen';
// import BabyRingSizeScreen from './src/screens/BabyRingSizeScreen';
// 
// 
// import { initDatabase } from './src/databases/Database';
// 
// const Stack = createStackNavigator();
// 
// const App = () => {
  // React.useEffect(() => {
    // initDatabase();
  // }, []);
// 
  // return (
    // <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="SplashScreen"> */}
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Product" component={ProductScreen}options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Video" component={VideoScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="WelcomeScreen" component={WelcomeSwipeScreen} options={{ headerShown: false }} /> */}
         {/* <Stack.Screen name="SelectLocation" component={SelectLocationScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="AllowLocation" component={AllowLocationScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="EnableNotification" component={EnableNotificationScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Category" component={CategoryScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Mall" component={MallScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: false }} /> */}
{/*         */}
        {/* <Stack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Wish" component={WishListScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="User" component={UserScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="RingDetect" component={RingDetectionScreen} options={{ headerShown: false }} /> */}
{/*  */}
        {/* <Stack.Screen name="Size1022" component={Size1022Screen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Size992" component={Size992Screen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Size1156" component={Size1156Screen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="BRSize" component={BabyRingSizeScreen} options={{ headerShown: false }} /> */}
{/*          */}
      {/* </Stack.Navigator> */}
    {/* </NavigationContainer> */}
  // );
// };
// 
// export default App;
// 
// good code


//cart code

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ProductScreen from './src/screens/ProductScreen';
import VideoScreen from './src/screens/VideoScreen';
import WelcomeSwipeScreen from './src/screens/WelcomeSwipeScreen';
import AllowLocationScreen from './src/screens/AllowLocationScreen';
import SelectLocationScreen from './src/screens/SelectLocationScreen';
import CompleteProfileScreen from './src/screens/CompleteProfileScreen';
import EnableNotificationScreen from './src/screens/EnableNotificationScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import MallScreen from './src/screens/MallScreen';
import OrderScreen from './src/screens/OrderScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import WishListScreen from './src/screens/WishListScreen';
import CartScreen from './src/screens/CartScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import UserScreen from './src/screens/UserScreen';
import RingDetectionScreen from './src/screens/RingDetectionScreen';
import Size1022Screen from './src/screens/Size1022Screen';
import Size992Screen from './src/screens/Size992Screen';
import Size1156Screen from './src/screens/Size1156Screen';
import BabyRingSizeScreen from './src/screens/BabyRingSizeScreen';
import Accessories from './src/screens/Accessories';
import Search from './src/screens/SearchScreen';

import TShirt from './src/screens/TShirtScreen';
import Dress from './src/screens/DressScreen';
import Saree from './src/screens/SareeScreen';
import Skirt from './src/screens/SkirtScreen';
import Jewel from './src/screens/JewelleyScreen';
import MakeUp from './src/screens/MakeUpScreen';
import Shoes from './src/screens/ShoesScreen';
import Hoodie from './src/screens/HoodieScreen';
import Jeans from './src/screens/JeansScreen';



import { initDatabase } from './src/databases/Database';
import { CartProvider } from './src/screens/CartContext'; // Import CartProvider
import SearchScreen from './src/screens/SearchScreen';
import TShirtScreen from './src/screens/TShirtScreen';
import JeansScreen from './src/screens/JeansScreen';
import DressScreen from './src/screens/DressScreen';
import SareeScreen from './src/screens/SareeScreen';
import SkirtScreen from './src/screens/SkirtScreen';
import HoodieScreen from './src/screens/HoodieScreen';
import NecklaceScreen from './src/screens/NecklaceScreen';
import MakeUpScreen from './src/screens/MakeUpScreen';
import JewelleryScreen from './src/screens/JewelleyScreen';
import ShoesScreen from './src/screens/ShoesScreen';
//import Jewel from './src/screens/JewelleyScreen';


const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {
    initDatabase();
  }, []);

  return (
    <CartProvider> {/* Wrap the entire app in CartProvider */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Product" component={ProductScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Video" component={VideoScreen} options={{ headerShown: false }} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeSwipeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SelectLocation" component={SelectLocationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AllowLocation" component={AllowLocationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="EnableNotification" component={EnableNotificationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Category" component={CategoryScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Mall" component={MallScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Wish" component={WishListScreen} options={{ headerShown: false }} />
          <Stack.Screen name="User" component={UserScreen} options={{ headerShown: false }} />
          <Stack.Screen name="RingDetect" component={RingDetectionScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Size1022" component={Size1022Screen} options={{ headerShown: false }} />
          <Stack.Screen name="Size992" component={Size992Screen} options={{ headerShown: false }} />
          <Stack.Screen name="Size1156" component={Size1156Screen} options={{ headerShown: false }} />
          <Stack.Screen name="BRSize" component={BabyRingSizeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Accessories" component={Accessories} options={{ headerShown: false }} />
          <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TShirt" component={TShirtScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="Jeans" component={JeansScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="Dress" component={DressScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="Saree" component={SareeScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="Skirt" component={SkirtScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="Hoodie" component={HoodieScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="Jewel" component={JewelleryScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="MakeUp" component={MakeUpScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="Shoes" component={ShoesScreen} options={{ headerShown: false }} /> 
          
          
          
          
          
          
          
          
          
          
          
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;


// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from './src/screens/SplashScreen';
// import SignInScreen from './src/screens/SignInScreen';
// import SignUpScreen from './src/screens/SignUpScreen';
// import ProductScreen from './src/screens/ProductScreen';
// import WelcomeSwipeScreen from './src/screens/WelcomeSwipeScreen';
// import AllowLocationScreen from './src/screens/AllowLocationScreen';
// import SelectLocationScreen from './src/screens/SelectLocationScreen';
// import CompleteProfileScreen from './src/screens/CompleteProfileScreen';

// import { initDatabase } from './src/databases/Database';

// const Stack = createStackNavigator();

// const App = () => {
//   const [isDbReady, setIsDbReady] = useState(false);
//   const [dbError, setDbError] = useState<string | null>(null);

//   // Initialize the database on app load
//   useEffect(() => {
//     const initializeDatabase = async () => {
//       try {
//         await initDatabase();  // Initialize the database
//         setIsDbReady(true);     // Set the flag when DB is ready
//       } catch (error) {
//         setDbError(error.message);  // Handle errors by setting the error state
//       }
//     };

//     initializeDatabase(); // Run the database initialization
//   }, []);

//   if (!isDbReady) {
//     // Optionally, you could show a loading screen or handle DB initialization error
//     return (
//       <SplashScreen />
//     );
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SplashScreen">
//         <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Product" component={ProductScreen} />
//         <Stack.Screen name="WelcomeScreen" component={WelcomeSwipeScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SelectLocation" component={SelectLocationScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="AllowLocation" component={AllowLocationScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;






// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from './src/screens/SplashScreen';
// import SignInScreen from './src/screens/SignInScreen';
// import SignUpScreen from './src/screens/SignUpScreen';
// import ProductScreen from './src/screens/ProductScreen';
// import WelcomeSwipeScreen from './src/screens/WelcomeSwipeScreen';
// import AllowLocationScreen from './src/screens/AllowLocationScreen';
// import SelectLocationScreen from './src/screens/SelectLocationScreen';
// import CompleteProfileScreen from './src/screens/CompleteProfileScreen';

// import { initDatabase } from './src/databases/Database';

// const Stack = createStackNavigator();

// const App = () => {
//   const [isDbReady, setIsDbReady] = useState(false);
//   const [dbError, setDbError] = useState<string | null>(null);

//   // Initialize the database on app load
//   useEffect(() => {
//     const initializeDatabase = async () => {
//       try {
//         await initDatabase();  // Initialize the database
//         setIsDbReady(true);     // Set the flag when DB is ready
//       } catch (error: any) {
//         setDbError(error.message);  // Handle errors by setting the error state
//       }
//     };

//     initializeDatabase(); // Run the database initialization
//   }, []);

//   if (!isDbReady) {
//     // Optionally, you could show a loading screen or handle DB initialization error
//     return <SplashScreen />;
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SplashScreen">
//         <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Product" component={ProductScreen} />
//         <Stack.Screen name="WelcomeScreen" component={WelcomeSwipeScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SelectLocation" component={SelectLocationScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="AllowLocation" component={AllowLocationScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// // Database functions:

// import SQLite, { SQLiteDatabase, Transaction, ResultSet } from 'react-native-sqlite-storage';

// // Open the database
// export const openDb = async (): Promise<SQLiteDatabase> => {
//   try {
//     const db = await SQLite.openDatabase({ name: 'TryTastic.db', location: 'default' });
//     return db;
//   } catch (error: any) {
//     console.error('Failed to open database: ', error);
//     throw new Error('Failed to open database: ' + error.message);
//   }
// };

// // Initialize the database
// export const initDatabase = async () => {
//   try {
//     const db = await openDb();
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS users (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           username TEXT NOT NULL,
//           email TEXT NOT NULL UNIQUE,
//           password TEXT NOT NULL
//         );`
//       );
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS profiles (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           userId INTEGER NOT NULL,
//           fullName TEXT NOT NULL,
//           mobile TEXT NOT NULL,
//           countryCode TEXT NOT NULL,
//           FOREIGN KEY (userId) REFERENCES users (id)
//         );`
//       );
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS locations (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           userId INTEGER NOT NULL,
//           city TEXT,
//           pincode TEXT,
//           latitude REAL,
//           longitude REAL,
//           FOREIGN KEY (userId) REFERENCES users (id)
//         );`
//       );
//     });
//   } catch (error: any) {
//     console.error('Failed to initialize database: ', error);
//     throw new Error('Failed to initialize database: ' + error.message);
//   }
// };

// // Get UserId from Full Name
// export const getUserIdFromFullName = async (fullName: string): Promise<number | null> => {
//   try {
//     const db = await openDb();
//     return new Promise((resolve, reject) => {
//       db.transaction((tx: Transaction) => {
//         tx.executeSql(
//           `SELECT id FROM profiles WHERE fullName = ?;`,
//           [fullName],
//           (_, result: ResultSet) => {
//             if (result.rows.length > 0) {
//               resolve(result.rows.item(0).id); // Return the userId of the matching fullName
//             } else {
//               resolve(null); // User not found, returning null
//             }
//           },
//           (_, error) => {
//             reject('Error fetching user: ' + error.message);
//             return false;
//           }
//         );
//       });
//     });
//   } catch (error: any) {
//     console.error('Failed to fetch user ID: ', error);
//     throw new Error('Failed to fetch user ID: ' + error.message);
//   }
// };

// // Insert location details
// export const insertLocation = async (
//   userId: number,
//   city: string | null,
//   pincode: string | null,
//   latitude: number | null,
//   longitude: number | null
// ): Promise<ResultSet> => {
//   try {
//     const db = await openDb();
//     return new Promise((resolve, reject) => {
//       // Validate the input data before inserting
//       if (!userId || !city || !pincode) {
//         reject(new Error('Missing required data: userId, city, or pincode.'));
//         return;
//       }

//       db.transaction((tx: Transaction) => {
//         tx.executeSql(
//           `INSERT INTO locations (userId, city, pincode, latitude, longitude) VALUES (?, ?, ?, ?, ?);`,
//           [userId, city, pincode, latitude, longitude],
//           (_, result: ResultSet) => resolve(result),
//           (_, error) => {
//             reject('Error inserting location: ' + error.message);
//             return false;
//           }
//         );
//       });
//     });
//   } catch (error: any) {
//     console.error('Failed to insert location: ', error);
//     throw new Error('Failed to insert location: ' + error.message);
//   }
// };
