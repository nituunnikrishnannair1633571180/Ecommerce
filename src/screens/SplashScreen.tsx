// import React, { useEffect } from 'react';
// import { View, Image, Text, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SplashScreenNavigationProp } from '../navigation/types'; // Adjust the import path accordingly

// const SplashScreen = () => {
//   const navigation = useNavigation<SplashScreenNavigationProp>();

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
//       if (isLoggedIn === 'true') {
//         navigation.navigate('Product');
//       } else {
//         navigation.navigate('SignIn');
//       }
//     };

//     const timer = setTimeout(checkLoginStatus, 2000);
//     return () => clearTimeout(timer);
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       {/* Decorative shapes */}
//       <View style={[styles.shape, styles.circle1]} />
//       <View style={[styles.shape, styles.circle2]} />
//       <View style={[styles.shape, styles.square1]} />
//       <View style={[styles.shape, styles.square2]} />

//       {/* Main content */}
//       <Image source={require('../assets/trytasticlogo.png')} style={styles.logo} />
//       <Text style={styles.tagline}>Shop Smart, Shop Virtual</Text>
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
//   logo: {
//     width: 150,
//     height: 150,
//     marginBottom: 20,
//   },
//   tagline: {
//     fontSize: 18,
//     color: '#7D3C98',
//     marginBottom: 40,
//   },
//   shape: {
//     position: 'absolute',
//     opacity: 0.5,
//   },
//   circle1: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#D1C4E9',
//     top: 40,
//     left: 30,
//   },
//   circle2: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#9575CD',
//     bottom: 50,
//     right: 40,
//   },
//   square1: {
//     width: 60,
//     height: 60,
//     backgroundColor: '#B39DDB',
//     top: 100,
//     right: 30,
//   },
//   square2: {
//     width: 40,
//     height: 40,
//     backgroundColor: '#7E57C2',
//     bottom: 100,
//     left: 50,
//   },
// });

// export default SplashScreen;


// import React, { useEffect } from 'react';
// import { View, Image, Text, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SplashScreenNavigationProp } from '../navigation/types'; // Adjust the import path accordingly

// const SplashScreen = () => {
//   const navigation = useNavigation<SplashScreenNavigationProp>();

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
//       if (isLoggedIn === 'true') {
//         navigation.navigate('Product');
//       } else {
//         navigation.navigate('SignIn');
//       }
//     };

//     const timer = setTimeout(checkLoginStatus, 2000);
//     return () => clearTimeout(timer);
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       {/* Decorative shapes */}
//       <View style={[styles.shape, styles.circle1]} />
//       <View style={[styles.shape, styles.circle2]} />
//       <View style={[styles.shape, styles.circle3]} />
//       <View style={[styles.shape, styles.circle4]} />
//       <View style={[styles.shape, styles.square1]} />
//       <View style={[styles.shape, styles.square2]} />
//       <View style={[styles.shape, styles.square3]} />
//       <View style={[styles.shape, styles.square4]} />

//       {/* Main content */}
//       <Image source={require('../assets/trytasticlogo.png')} style={styles.logo} />
//       <Text style={styles.tagline}>Shop Smart, Shop Virtual</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F3E5F5',
//     overflow: 'hidden',
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     marginBottom: 20,
//     zIndex: 2,
//   },
//   tagline: {
//     fontSize: 18,
//     color: '#7D3C98',
//     marginBottom: 40,
//     zIndex: 2,
//   },
//   shape: {
//     position: 'absolute',
//     opacity: 0.3,
//   },
//   // Circle shapes with different positions and sizes
//   circle1: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     backgroundColor: '#E1BEE7',
//     top: -60,
//     left: -50,
//   },
//   circle2: {
//     width: 140,
//     height: 140,
//     borderRadius: 70,
//     backgroundColor: '#D1C4E9',
//     top: 150,
//     right: -30,
//   },
//   circle3: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#9575CD',
//     bottom: 120,
//     left: 20,
//   },
//   circle4: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#B39DDB',
//     bottom: 50,
//     right: 90,
//   },
//   // Square shapes with different positions and rotations
//   square1: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#7E57C2',
//     top: 100,
//     right: 50,
//     transform: [{ rotate: '20deg' }],
//   },
//   square2: {
//     width: 70,
//     height: 70,
//     backgroundColor: '#9E69C7',
//     top: 250,
//     left: 60,
//     transform: [{ rotate: '-15deg' }],
//   },
//   square3: {
//     width: 50,
//     height: 50,
//     backgroundColor: '#B39DDB',
//     bottom: 150,
//     right: 10,
//     transform: [{ rotate: '10deg' }],
//   },
//   square4: {
//     width: 60,
//     height: 60,
//     backgroundColor: '#CE93D8',
//     bottom: 60,
//     left: 100,
//     transform: [{ rotate: '-10deg' }],
//   },
// });

// export default SplashScreen;

// import React, { useEffect } from 'react';
// import { View, Image, Text, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SplashScreenNavigationProp } from '../navigation/types'; // Adjust the import path accordingly

// const SplashScreen = () => {
//   const navigation = useNavigation<SplashScreenNavigationProp>();

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
//       if (isLoggedIn === 'true') {
//         navigation.navigate('Product');
//       } else {
//         navigation.navigate('SignIn');
//       }
//     };

//     const timer = setTimeout(checkLoginStatus, 2000);
//     return () => clearTimeout(timer);
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       {/* Decorative shapes */}
//       <View style={[styles.shape, styles.circle1]} />
//       <View style={[styles.shape, styles.circle2]} />
//       <View style={[styles.shape, styles.circle3]} />
//       <View style={[styles.shape, styles.circle4]} />
//       <View style={[styles.shape, styles.circle5]} />
//       <View style={[styles.shape, styles.circle6]} />
//       <View style={[styles.shape, styles.circle7]} />
//       <View style={[styles.shape, styles.square1]} />
//       <View style={[styles.shape, styles.square2]} />
//       <View style={[styles.shape, styles.square3]} />
//       <View style={[styles.shape, styles.square4]} />
//       <View style={[styles.shape, styles.square5]} /> {/* New square */}
//       <View style={[styles.shape, styles.square6]} /> {/* New square */}
//       <View style={[styles.shape, styles.square7]} /> {/* New square */}

//       {/* Main content */}
//       <Image source={require('../assets/trytasticlogo.png')} style={styles.logo} />
//       <Text style={styles.tagline}>Shop Smart, Shop Virtual</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F3E5F5',
//     overflow: 'hidden',
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     marginBottom: 20,
//     zIndex: 2,
//   },
//   tagline: {
//     fontSize: 18,
//     color: '#7D3C98',
//     marginBottom: 40,
//     zIndex: 2,
//   },
//   shape: {
//     position: 'absolute',
//     opacity: 0.3,
//   },
//   // Circle shapes with different positions and sizes
//   circle1: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     backgroundColor: '#E1BEE7',
//     top: -60,
//     left: -50,
//   },
//   circle2: {
//     width: 140,
//     height: 140,
//     borderRadius: 70,
//     backgroundColor: '#D1C4E9',
//     top: 150,
//     right: -30,
//   },
//   circle3: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#9575CD',
//     bottom: 120,
//     left: 20,
//   },
//   circle4: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#B39DDB',
//     bottom: 50,
//     right: 90,
//   },
//   circle5: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#E0BBE4',
//     top: 200,
//     left: 60,
//   },
//   circle6: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     backgroundColor: '#C5CAE9',
//     bottom: 200,
//     right: 60,
//   },
//   circle7: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: '#D4A5A5',
//     top: 80,
//     right: 90,
//   },
//   // Square shapes with different positions and rotations
//   square1: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#7E57C2',
//     top: 100,
//     right: 50,
//     transform: [{ rotate: '20deg' }],
//   },
//   square2: {
//     width: 70,
//     height: 70,
//     backgroundColor: '#9E69C7',
//     top: 250,
//     left: 60,
//     transform: [{ rotate: '-15deg' }],
//   },
//   square3: {
//     width: 50,
//     height: 50,
//     backgroundColor: '#B39DDB',
//     bottom: 150,
//     right: 10,
//     transform: [{ rotate: '10deg' }],
//   },
//   square4: {
//     width: 60,
//     height: 60,
//     backgroundColor: '#CE93D8',
//     bottom: 60,
//     left: 100,
//     transform: [{ rotate: '-10deg' }],
//   },
//   square5: {
//     width: 80,
//     height: 80,
//     backgroundColor: '#AB47BC',
//     top: 60,
//     left: -40,
//     transform: [{ rotate: '25deg' }],
//   },
//   square6: {
//     width: 90,
//     height: 90,
//     backgroundColor: '#BA68C8',
//     bottom: 100,
//     right: 40,
//     transform: [{ rotate: '-20deg' }],
//   },
//   square7: {
//     width: 70,
//     height: 70,
//     backgroundColor: '#D1C4E9',
//     top: 180,
//     left: 130,
//     transform: [{ rotate: '15deg' }],
//   },
// });

// export default SplashScreen;

// import React, { useEffect } from 'react';
// import { View, Image, Text, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SplashScreenNavigationProp } from '../navigation/types';

// const SplashScreen = () => {
//   const navigation = useNavigation<SplashScreenNavigationProp>();

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
//       navigation.navigate(isLoggedIn === 'true' ? 'Product' : 'SignIn');
//     };
//     const timer = setTimeout(checkLoginStatus, 2000);
//     return () => clearTimeout(timer);
//   }, [navigation]);

//   const shapes = [
//     { style: styles.circle, size: 200, color: '#E1BEE7', position: { top: -60, left: -50 } },
//     { style: styles.circle, size: 140, color: '#D1C4E9', position: { top: 150, right: -30 } },
//     { style: styles.circle, size: 100, color: '#9575CD', position: { bottom: 120, left: 20 } },
//     { style: styles.square, size: 100, color: '#7E57C2', position: { top: 100, right: 50 }, rotate: '20deg' },
//     { style: styles.square, size: 70, color: '#9E69C7', position: { top: 250, left: 60 }, rotate: '-15deg' },
//     // Add more shapes as needed
//   ];

//   return (
//     <View style={styles.container}>
//       {shapes.map((shape, index) => (
//         <View
//           key={index}
//           style={[
//             shape.style,
//             {
//               width: shape.size,
//               height: shape.size,
//               backgroundColor: shape.color,
//               borderRadius: shape.style === styles.circle ? shape.size / 2 : 0,
//               ...shape.position,
//               transform: [{ rotate: shape.rotate || '0deg' }]
//             }
//           ]}
//         />
//       ))}
//       <Image source={require('../assets/trytasticlogo.png')} style={styles.logo} />
//       <Text style={styles.tagline}>Shop Smart, Shop Virtual</Text>
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
//   logo: {
//     width: 150,
//     height: 150,
//     marginBottom: 20,
//     zIndex: 2,
//   },
//   tagline: {
//     fontSize: 18,
//     color: '#7D3C98',
//     marginBottom: 40,
//     zIndex: 2,
//   },
//   circle: {
//     position: 'absolute',
//     opacity: 0.3,
//   },
//   square: {
//     position: 'absolute',
//     opacity: 0.3,
//   },
// });

// export default SplashScreen;

import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GestureRecognizer from 'react-native-swipe-gestures';
import { SplashScreenNavigationProp } from '../navigation/types';

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        navigation.navigate('Product');
      }
    };
    const timer = setTimeout(checkLoginStatus, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  const shapes = [
    { style: styles.circle, size: 200, color: '#E1BEE7', position: { top: -60, left: -50 } },
    { style: styles.circle, size: 140, color: '#D1C4E9', position: { top: 150, right: -30 } },
    { style: styles.circle, size: 100, color: '#9575CD', position: { bottom: 120, left: 20 } },
    { style: styles.circle, size: 80, color: '#B39DDB', position: { bottom: 50, right: 90 } },
    { style: styles.circle, size: 70, color: '#E0BBE4', position: { top: 200, left: 60 } },
    { style: styles.circle, size: 90, color: '#C5CAE9', position: { bottom: 200, right: 60 } },
    { style: styles.circle, size: 120, color: '#D4A5A5', position: { top: 80, right: 90 } },
    { style: styles.square, size: 100, color: '#7E57C2', position: { top: 100, right: 50 }, rotate: '20deg' },
    { style: styles.square, size: 70, color: '#9E69C7', position: { top: 250, left: 60 }, rotate: '-15deg' },
    { style: styles.square, size: 50, color: '#B39DDB', position: { bottom: 150, right: 10 }, rotate: '10deg' },
    { style: styles.square, size: 60, color: '#CE93D8', position: { bottom: 60, left: 100 }, rotate: '-10deg' },
    { style: styles.square, size: 80, color: '#AB47BC', position: { top: 60, left: -40 }, rotate: '25deg' },
    { style: styles.square, size: 90, color: '#BA68C8', position: { bottom: 100, right: 40 }, rotate: '-20deg' },
    { style: styles.square, size: 70, color: '#D1C4E9', position: { top: 180, left: 130 }, rotate: '15deg' },
    // Additional shapes can be added here
  ];

  const onSwipeLeft = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <GestureRecognizer onSwipeLeft={onSwipeLeft} style={styles.container}>
      {shapes.map((shape, index) => (
        <View
          key={index}
          style={[
            shape.style,
            {
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.color,
              borderRadius: shape.style === styles.circle ? shape.size / 2 : 0,
              ...shape.position,
              transform: [{ rotate: shape.rotate || '0deg' }],
            },
          ]}
        />
      ))}
      <Image source={require('../assets/trytasticlogo.png')} style={styles.logo} />
      <Text style={styles.tagline}>Shop Smart, Shop Virtual</Text>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3E5F5',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    zIndex: 2,
  },
  tagline: {
    fontSize: 18,
    color: '#7D3C98',
    marginBottom: 40,
    zIndex: 2,
  },
  circle: {
    position: 'absolute',
    opacity: 0.3,
  },
  square: {
    position: 'absolute',
    opacity: 0.3,
  },
});

export default SplashScreen;
