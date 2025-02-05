// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import GestureRecognizer from 'react-native-swipe-gestures';
// import { useNavigation, NavigationProp } from '@react-navigation/native';

// type RootStackParamList = {
//   SignIn: undefined;
//   // Add other screens if necessary
// };

// const WelcomeSwipeScreen = () => {
//   const [pageIndex, setPageIndex] = useState(0);
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

//   const screens = [
//     {
//       image: require('../assets/intro1.png'),
//       text: 'Discover amazing products at great prices.',
//     },
//     {
//       image: require('../assets/intro1.png'),
//       text: 'Enjoy fast delivery and easy returns.',
//     },
//     {
//       image: require('../assets/intro1.png'),
//       text: 'Shop with confidence and convenience.',
//     },
//   ];

//   const onSwipeLeft = () => {
//     if (pageIndex < screens.length - 1) {
//       setPageIndex(pageIndex + 1);
//     }
//   };

//   const onSwipeRight = () => {
//     if (pageIndex > 0) {
//       setPageIndex(pageIndex - 1);
//     }
//   };

//   const handleGetStarted = () => {
//     navigation.navigate('SignIn');
//   };

//   return (
//     <GestureRecognizer onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight} style={styles.container}>
//       <Image source={screens[pageIndex].image} style={styles.image} />
//       <Text style={styles.text}>{screens[pageIndex].text}</Text>
//       {pageIndex === screens.length - 1 && (
//         <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
//           <Text style={styles.buttonText}>Get Started</Text>
//         </TouchableOpacity>
//       )}
//     </GestureRecognizer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F3E5F5',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 30,
//   },
//   text: {
//     fontSize: 18,
//     color: '#7D3C98',
//     textAlign: 'center',
//     marginBottom: 40,
//   },
//   button: {
//     backgroundColor: '#7D3C98',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });

// export default WelcomeSwipeScreen;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import GestureRecognizer from 'react-native-swipe-gestures';
// import { useNavigation, NavigationProp } from '@react-navigation/native';
// import { LinearGradient } from 'expo-linear-gradient';


// type RootStackParamList = {
//   SignIn: undefined;
// };

// const WelcomeSwipeScreen = () => {
//   const [pageIndex, setPageIndex] = useState(0);
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

//   const screens = [
//     {
//       image: require('../assets/intro1.png'),
//       text: 'Discover amazing products at great prices.',
//       backgroundColor: '#F3E5F5',
//       color: '#7D3C98',
//     },
//     {
//       image: require('../assets/intro1.png'),
//       text: 'Enjoy fast delivery and easy returns.',
//       backgroundColor: '#E1BEE7',
//       color: '#6A1B9A',
//     },
//     {
//       image: require('../assets/intro1.png'),
//       text: 'Shop with confidence and convenience.',
//       backgroundColor: '#CE93D8',
//       color: '#4A148C',
//     },
//   ];

//   const onSwipeLeft = () => {
//     if (pageIndex < screens.length - 1) {
//       setPageIndex(pageIndex + 1);
//     }
//   };

//   const onSwipeRight = () => {
//     if (pageIndex > 0) {
//       setPageIndex(pageIndex - 1);
//     }
//   };

//   const handleGetStarted = () => {
//     navigation.navigate('SignIn');
//   };

//   return (
//     <GestureRecognizer onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight} style={[styles.container, { backgroundColor: screens[pageIndex].backgroundColor }]}>
//       {/* Background shapes */}
//       <View style={[styles.shape, styles.circle1]} />
//       <View style={[styles.shape, styles.circle2]} />
//       <View style={[styles.shape, styles.square1]} />
//       <View style={[styles.shape, styles.square2]} />

//       {/* Main Content */}
//       <Image source={screens[pageIndex].image} style={styles.image} />
//       <Text style={[styles.text, { color: screens[pageIndex].color }]}>{screens[pageIndex].text}</Text>

//       {/* Pagination Dots */}
//       <View style={styles.pagination}>
//         {screens.map((_, index) => (
//           <View key={index} style={[styles.dot, pageIndex === index && styles.activeDot]} />
//         ))}
//       </View>

//       {/* Get Started Button */}
//       {pageIndex === screens.length - 1 && (
//         <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
//           <Text style={styles.buttonText}>Get Started</Text>
//         </TouchableOpacity>
//       )}
//     </GestureRecognizer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 30,
//   },
//   text: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 40,
//   },
//   pagination: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#BDBDBD',
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     backgroundColor: '#7D3C98',
//   },
//   button: {
//     backgroundColor: '#7D3C98',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   shape: {
//     position: 'absolute',
//     opacity: 0.2,
//   },
//   // Background shapes
//   circle1: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     backgroundColor: '#D1C4E9',
//     top: 50,
//     left: 30,
//   },
//   circle2: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: '#B39DDB',
//     bottom: 100,
//     right: 50,
//   },
//   square1: {
//     width: 80,
//     height: 80,
//     backgroundColor: '#9575CD',
//     bottom: 150,
//     left: 80,
//   },
//   square2: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#7E57C2',
//     top: 150,
//     right: 40,
//     transform: [{ rotate: '15deg' }],
//   },
// });

// export default WelcomeSwipeScreen;

// WelcomeScreen.tsx
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const WelcomeSwipeScreen: React.FC = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <View style={styles.backgroundShape} />

//       <Text style={styles.title}>Welcome to the App!</Text>
//       <Text style={styles.subtitle}>Your journey begins here.</Text>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('SignIn' as never)}
//       >
//         <Text style={styles.buttonText}>Get Started</Text>
//       </TouchableOpacity>
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
//   backgroundShape: {
//     position: 'absolute',
//     width: '150%',
//     height: '50%',
//     top: 0,
//     left: -50,
//     backgroundColor: '#FFCDD2',
//     borderBottomLeftRadius: 300,
//     borderBottomRightRadius: 300,
//   },
//   title: {
//     fontSize: 30,
//     color: '#6A1B9A',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: '#8E24AA',
//     textAlign: 'center',
//     marginBottom: 40,
//   },
//   button: {
//     backgroundColor: '#6A1B9A',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 25,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });

// export default WelcomeSwipeScreen;

// import React, { FC, useRef, useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type WelcomeSwipeScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'WelcomeSwipeScreen'>;
// };

// type Slide = {
//   title: string;
//   description: string;
// };

// const slides: Slide[] = [
//   {
//     title: "Welcome to Our App",
//     description: "Discover new features and functionality that make your life easier.",
//   },
//   {
//     title: "Stay Connected",
//     description: "Connect with people and stay up-to-date with the latest news.",
//   },
//   {
//     title: "Get Started",
//     description: "Set up your profile to personalize your experience.",
//   },
// ];

// const { width: screenWidth } = Dimensions.get('window');

// const WelcomeSwipeScreen: FC<WelcomeSwipeScreenProps> = ({ navigation }) => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const carouselRef = useRef(null);

//   const renderItem = ({ item }: { item: Slide }) => (
//     <View style={styles.slide}>
//       <Text style={styles.slideTitle}>{item.title}</Text>
//       <Text style={styles.slideDescription}>{item.description}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         ref={carouselRef}
//         data={slides}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth * 0.8}
//         onSnapToItem={(index) => setActiveSlide(index)}
//       />
//       <Pagination
//         dotsLength={slides.length}
//         activeDotIndex={activeSlide}
//         dotStyle={styles.dot}
//         inactiveDotStyle={styles.inactiveDot}
//       />
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('SignIn')}
//       >
//         <Text style={styles.buttonText}>Get Started</Text>
//       </TouchableOpacity>
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
//   slide: {
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   slideTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#4A4A4A',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   slideDescription: {
//     fontSize: 16,
//     color: '#4A4A4A',
//     textAlign: 'center',
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 8,
//     backgroundColor: '#A020F0',
//   },
//   inactiveDot: {
//     backgroundColor: '#D3D3D3',
//   },
//   button: {
//     width: '80%',
//     height: 50,
//     backgroundColor: '#A020F0',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default WelcomeSwipeScreen;

// import React, { FC, useRef, useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type WelcomeSwipeScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'WelcomeSwipeScreen'>;
// };

// type Slide = {
//   title: string;
//   description: string;
// };

// const slides: Slide[] = [
//   { title: "Welcome to Our App", description: "Discover new features and functionality that make your life easier." },
//   { title: "Stay Connected", description: "Connect with people and stay up-to-date with the latest news." },
//   { title: "Get Started", description: "Set up your profile to personalize your experience." },
// ];

// const { width: screenWidth } = Dimensions.get('window');

// const WelcomeSwipeScreen: FC<WelcomeSwipeScreenProps> = ({ navigation }) => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const carouselRef = useRef<Carousel<Slide> | null>(null);

//   const renderItem = ({ item, index }: { item: Slide; index: number }) => (
//     <View style={styles.slide}>
//       <Text style={styles.slideTitle}>{item.title}</Text>
//       <Text style={styles.slideDescription}>{item.description}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         ref={carouselRef}
//         data={slides}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth * 0.8}
//         onSnapToItem={(index) => setActiveSlide(index)}
//       />
//       <Pagination
//         dotsLength={slides.length}
//         activeDotIndex={activeSlide}
//         dotStyle={styles.dot}
//         inactiveDotStyle={styles.inactiveDot}
//       />
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
//         <Text style={styles.buttonText}>Get Started</Text>
//       </TouchableOpacity>
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
//   slide: {
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   slideTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#4A4A4A',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   slideDescription: {
//     fontSize: 16,
//     color: '#4A4A4A',
//     textAlign: 'center',
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 8,
//     backgroundColor: '#A020F0',
//   },
//   inactiveDot: {
//     backgroundColor: '#D3D3D3',
//   },
//   button: {
//     width: '80%',
//     height: 50,
//     backgroundColor: '#A020F0',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default WelcomeSwipeScreen;


// import React, { FC, useRef, useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type WelcomeSwipeScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'WelcomeSwipeScreen'>;
// };

// type Slide = {
//   title: string;
//   description: string;
// };

// const slides: Slide[] = [
//   { title: "Welcome to Our App", description: "Discover new features and functionality that make your life easier." },
//   { title: "Stay Connected", description: "Connect with people and stay up-to-date with the latest news." },
//   { title: "Get Started", description: "Set up your profile to personalize your experience." },
// ];

// const { width: screenWidth } = Dimensions.get('window');

// const WelcomeSwipeScreen: FC<WelcomeSwipeScreenProps> = ({ navigation }) => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const carouselRef = useRef<Carousel<Slide> | null>(null);

//   const renderItem = ({ item }: { item: Slide }) => (
//     <View style={styles.slide}>
//       <Text style={styles.slideTitle}>{item.title}</Text>
//       <Text style={styles.slideDescription}>{item.description}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         ref={carouselRef}
//         data={slides}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth * 0.8}
//         onSnapToItem={(index) => setActiveSlide(index)}
//       />
//       <Pagination
//         dotsLength={slides.length}
//         activeDotIndex={activeSlide}
//         dotStyle={styles.dot}
//         inactiveDotStyle={styles.inactiveDot}
//       />
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
//         <Text style={styles.buttonText}>Get Started</Text>
//       </TouchableOpacity>
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
//   slide: {
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     backgroundColor: '#F3E5F5',
//   },
//   slideTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#4A4A4A',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   slideDescription: {
//     fontSize: 16,
//     color: '#4A4A4A',
//     textAlign: 'center',
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 8,
//     backgroundColor: '#A020F0',
//   },
//   inactiveDot: {
//     backgroundColor: '#D3D3D3',
//   },
//   button: {
//     width: '80%',
//     height: 50,
//     backgroundColor: '#A020F0',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default WelcomeSwipeScreen;

// import React, { FC } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type WelcomeSwipeScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'WelcomeSwipeScreen'>;
// };

// type Slide = {
//   title: string;
//   description: string;
// };

// const slides: Slide[] = [
//   { title: "Welcome to Our App", description: "Discover new features and functionality that make your life easier." },
//   { title: "Stay Connected", description: "Connect with people and stay up-to-date with the latest news." },
//   { title: "Get Started", description: "Set up your profile to personalize your experience." },
// ];

// const WelcomeSwipeScreen: FC<WelcomeSwipeScreenProps> = ({ navigation }) => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {slides.map((slide, index) => (
//         <View key={index} style={styles.slide}>
//           <Text style={styles.slideTitle}>{slide.title}</Text>
//           <Text style={styles.slideDescription}>{slide.description}</Text>
//         </View>
//       ))}
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
//         <Text style={styles.buttonText}>Get Started</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
//   slide: {
//     width: '80%',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     backgroundColor: '#F3E5F5',
//     marginBottom: 20,
//   },
//   slideTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#4A4A4A',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   slideDescription: {
//     fontSize: 16,
//     color: '#4A4A4A',
//     textAlign: 'center',
//   },
//   button: {
//     width: '80%',
//     height: 50,
//     backgroundColor: '#A020F0',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default WelcomeSwipeScreen;

// import React, { FC } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';

// type WelcomeSwipeScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'WelcomeScreen'>;
// };

// type Slide = {
//   title: string;
//   description: string;
// };

// const slides: Slide[] = [
//   { title: "Welcome to Our App", description: "Discover new features and functionality that make your life easier." },
//   { title: "Stay Connected", description: "Connect with people and stay up-to-date with the latest news." },
//   { title: "Get Started", description: "Set up your profile to personalize your experience." },
// ];

// const WelcomeSwipeScreen: FC<WelcomeSwipeScreenProps> = ({ navigation }) => {
//   return (
//     <ScrollView horizontal pagingEnabled style={styles.scrollContainer}>
//       {slides.map((slide, index) => (
//         <View key={index} style={styles.slide}>
//           <Text style={styles.title}>{slide.title}</Text>
//           <Text style={styles.description}>{slide.description}</Text>
//           {index === slides.length - 1 && (
//             <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.button}>
//               <Text style={styles.buttonText}>Get Started</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flex: 1,
//   },
//   slide: {
//     width: Dimensions.get('window').width,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 16,
//     marginVertical: 15,
//     textAlign: 'center',
//   },
//   button: {
//     marginTop: 20,
//     padding: 15,
//     backgroundColor: '#A020F0',
//     borderRadius: 25,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default WelcomeSwipeScreen;

import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type WelcomeSwipeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'WelcomeScreen'>; // Use 'WelcomeSwipe' here
};//WelcomeScreen

type Slide = {
  title: string;
  description: string;
};

const slides: Slide[] = [
  { title: "Welcome to Our App", description: "Discover new features and functionality that make your life easier." },
  { title: "Stay Connected", description: "Connect with people and stay up-to-date with the latest news." },
  { title: "Get Started", description: "Set up your profile to personalize your experience." },
];

const WelcomeSwipeScreen: FC<WelcomeSwipeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView horizontal pagingEnabled style={styles.scrollContainer}>
      {slides.map((slide, index) => (
        <View key={index} style={styles.slide}>
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.description}>{slide.description}</Text>
          {index === slides.length - 1 && (
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  slide: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 15,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#A020F0',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default WelcomeSwipeScreen;

