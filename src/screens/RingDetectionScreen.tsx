// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
// import Svg, { Circle } from 'react-native-svg';
// import Slider from '@react-native-community/slider';
// import { useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from '../navigation/types'; // Import the navigation types
// import { StackNavigationProp } from '@react-navigation/stack';

// // Define the navigation prop type
// type NavigationProp = StackNavigationProp<RootStackParamList, 'RingDetect'>;

// const RingDetectionSizeScreen = () => {
//   const [size, setSize] = useState(9.94); // Initial size in mm
//   const [circleRadius, setCircleRadius] = useState(50); // Initial radius in pixels
//   const [isManualInput, setIsManualInput] = useState(false); // To toggle between screens
//   const [manualSize, setManualSize] = useState(''); // Input for manual size
//   const navigation = useNavigation<NavigationProp>(); // Use the navigation hook with the correct type

//   const handleSliderChange = (value: number) => {
//     const newSize = parseFloat((value * 10).toFixed(2)); // Convert slider value to mm
//     setSize(newSize);
//     setCircleRadius(value * 50); // Adjust radius dynamically
//   };

//   const handleManualSubmit = () => {
//     const newSize = parseFloat(manualSize);
//     if (!isNaN(newSize) && newSize > 0) {
//       setSize(newSize); // Update ring size
//       setCircleRadius(newSize * 5); // Adjust circle radius
//       setIsManualInput(false); // Go back to main screen
//     }
//   };

//   const handleExplore = () => {
//     // Navigate based on the entered size
//     if (size === 9.92) {
//       navigation.navigate('Size992'); // Navigate to the screen for size 9.92
//     } else if (size === 10.22) {
//       navigation.navigate('Size1022'); // Navigate to the screen for size 10.22
//     } else if (size === 5.0) {
//       navigation.navigate('BRSize'); // Navigate to the screen for baby's ring size
//     } else if (size === 11.56) {
//       navigation.navigate('Size1156'); // Navigate to the screen for size 11.56
//     } else {
//       Alert.alert('Explore Rings!', `Your ring size is ${size}`);
//     }
//   };

//   if (isManualInput) {
//     // Manual Input Screen
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Enter Ring Size</Text>
//         <Text style={styles.description}>Enter the size of your ring in mm below:</Text>
//         <TextInput
//           style={styles.input}
//           keyboardType="numeric"
//           value={manualSize}
//           onChangeText={setManualSize}
//           placeholder="Enter size (e.g., 9.94)"
//         />
//         <TouchableOpacity style={styles.button} onPress={handleManualSubmit}>
//           <Text style={styles.buttonText}>OK</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     // Main Screen
//     <View style={styles.container}>
//       <Text style={styles.title}>Find out what size your ring is</Text>
//       <Text style={styles.description}>
//         Place the ring on the circle to accurately measure its diameter. Adjust
//         the slider until you get the desired size of the ring.
//       </Text>

//       {/* Circular Guide */}
//       <View style={styles.svgCard}>
//         <Svg height="180" width="180">
//           <Circle
//             cx="90"
//             cy="90"
//             r={circleRadius}
//             stroke="#A3A3A3"
//             strokeWidth="2"
//             fill="none"
//           />
//         </Svg>
//         <Text style={styles.sizeText}>{size} mm</Text>
//       </View>

//       {/* Slider */}
//       <Slider
//         style={styles.slider}
//         minimumValue={0.5}
//         maximumValue={2}
//         value={size / 10}
//         onValueChange={handleSliderChange}
//         minimumTrackTintColor="#7F3DFF"
//         maximumTrackTintColor="#E0E0E0"
//         thumbTintColor="#7F3DFF"
//       />

//       {/* Manual Input */}
//       <Text style={styles.manualText}>
//         Or enter your ring size manually{' '}
//         <Text style={styles.link} onPress={() => setIsManualInput(true)}>
//           here
//         </Text>
//       </Text>

//       {/* Explore Button */}
//       <TouchableOpacity style={styles.button} onPress={handleExplore}>
//         <Text style={styles.buttonText}>Explore rings</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#FFF',
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 14,
//     color: '#555',
//     textAlign: 'center',
//     marginBottom: 20,
//     lineHeight: 20,
//   },
//   svgCard: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#F9F9F9',
//     padding: 20,
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     marginVertical: 20,
//   },
//   sizeText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 8,
//     color: '#333',
//   },
//   slider: {
//     width: '100%',
//     height: 40,
//     marginVertical: 20,
//   },
//   manualText: {
//     fontSize: 14,
//     color: '#555',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   link: {
//     color: '#7F3DFF',
//     textDecorationLine: 'underline',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#DDD',
//     borderRadius: 8,
//     padding: 10,
//     fontSize: 16,
//     marginVertical: 20,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: '#7F3DFF',
//     paddingVertical: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default RingDetectionSizeScreen;





// import React, { useState, useCallback } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
// import Svg, { Circle } from 'react-native-svg';
// import Slider from '@react-native-community/slider';
// import { useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from '../navigation/types';
// import { StackNavigationProp } from '@react-navigation/stack';

// type NavigationProp = StackNavigationProp<RootStackParamList, 'RingDetect'>;

// const RingDetectionSizeScreen = () => {
//   const [size, setSize] = useState(9.94); // Initial size in mm
//   const [circleRadius, setCircleRadius] = useState(50); // Initial radius in pixels
//   const [isManualInput, setIsManualInput] = useState(false);
//   const [manualSize, setManualSize] = useState('');
//   const navigation = useNavigation<NavigationProp>();

//   const handleSliderChange = useCallback((value: number) => {
//     const newSize = parseFloat((value * 10).toFixed(2));
//     setSize(newSize);
//     setCircleRadius(value * 50);
//   }, []);

//   const handleManualSubmit = () => {
//     const newSize = parseFloat(manualSize);
//     if (!isNaN(newSize) && newSize > 0) {
//       setSize(newSize);
//       setCircleRadius(newSize * 5);
//       setIsManualInput(false);
//     }
//   };

//   const handleExplore = () => {
//     if (size === 9.92) {
//       navigation.navigate('Size992');
//     } else if (size === 10.22) {
//       navigation.navigate('Size1022');
//     } else if (size === 5.0) {
//       navigation.navigate('BRSize');
//     } else if (size === 11.56) {
//       navigation.navigate('Size1156');
//     } else {
//       Alert.alert('Explore Rings!', `Your ring size is ${size}`);
//     }
//   };

//   if (isManualInput) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Enter Ring Size</Text>
//         <Text style={styles.description}>Enter the size of your ring in mm below:</Text>
//         <TextInput
//           style={styles.input}
//           keyboardType="numeric"
//           value={manualSize}
//           onChangeText={setManualSize}
//           placeholder="Enter size (e.g., 9.94)"
//         />
//         <TouchableOpacity style={styles.button} onPress={handleManualSubmit}>
//           <Text style={styles.buttonText}>OK</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Find out what size your ring is</Text>
//       <Text style={styles.description}>
//         Place the ring on the circle to accurately measure its diameter. Adjust
//         the slider until you get the desired size of the ring.
//       </Text>

//       <View style={styles.svgCard}>
//         <Svg height="180" width="180">
//           <Circle
//             cx="90"
//             cy="90"
//             r={circleRadius}
//             stroke="#A3A3A3"
//             strokeWidth="2"
//             fill="none"
//           />
//         </Svg>
//         <Text style={styles.sizeText}>{size} mm</Text>
//       </View>

//       <Slider
//         style={styles.slider}
//         minimumValue={0.5}
//         maximumValue={2}
//         value={size / 10}
//         onValueChange={handleSliderChange}
//         minimumTrackTintColor="#7F3DFF"
//         maximumTrackTintColor="#E0E0E0"
//         thumbTintColor="#7F3DFF"
//       />

//       <Text style={styles.manualText}>
//         Or enter your ring size manually{' '}
//         <Text style={styles.link} onPress={() => setIsManualInput(true)}>
//           here
//         </Text>
//       </Text>

//       <TouchableOpacity style={styles.button} onPress={handleExplore}>
//         <Text style={styles.buttonText}>Explore rings</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#FFF',
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 14,
//     color: '#555',
//     textAlign: 'center',
//     marginBottom: 20,
//     lineHeight: 20,
//   },
//   svgCard: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#F9F9F9',
//     padding: 20,
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     marginVertical: 20,
//   },
//   sizeText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 8,
//     color: '#333',
//   },
//   slider: {
//     width: '100%',
//     height: 40,
//     marginVertical: 20,
//   },
//   manualText: {
//     fontSize: 14,
//     color: '#555',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   link: {
//     color: '#7F3DFF',
//     textDecorationLine: 'underline',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#DDD',
//     borderRadius: 8,
//     padding: 10,
//     fontSize: 16,
//     marginVertical: 20,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: '#7F3DFF',
//     paddingVertical: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default RingDetectionSizeScreen;




import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList, 'RingDetect'>;

const RingDetectionSizeScreen = () => {
  const [size, setSize] = useState(9.94); // Initial size in mm
  const [circleRadius, setCircleRadius] = useState(50); // Initial radius in pixels
  const [isManualInput, setIsManualInput] = useState(false);
  const [manualSize, setManualSize] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const handleSliderChange = (value: number) => {
    // Update size without affecting the circle radius
    const newSize = parseFloat((value * 10).toFixed(2));
    setSize(newSize);
  };

  const handleSlidingComplete = (value: number) => {
    // Update circle radius after the slider interaction is complete
    setCircleRadius(value * 50);
  };

  const handleManualSubmit = () => {
    const newSize = parseFloat(manualSize);
    if (!isNaN(newSize) && newSize > 0) {
      setSize(newSize);
      setCircleRadius(newSize * 5);
      setIsManualInput(false);
    }
  };

  const handleExplore = () => {
    if (size === 9.92) {
      navigation.navigate('Size992');
    } else if (size === 10.22) {
      navigation.navigate('Size1022');
    } else if (size === 5.0) {
      navigation.navigate('BRSize');
    } else if (size === 11.56) {
      navigation.navigate('Size1156');
    } else if (size === 9.22) {
      navigation.navigate('Size1022');
    }else if (size === 9.94) {
      navigation.navigate('Size1022');
    }else {
      Alert.alert('Explore Rings!', `Your ring size is ${size}`);
    }
  };

  if (isManualInput) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter Ring Size</Text>
        <Text style={styles.description}>Enter the size of your ring in mm below:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={manualSize}
          onChangeText={setManualSize}
          placeholder="Enter size (e.g., 9.94)"
        />
        <TouchableOpacity style={styles.button} onPress={handleManualSubmit}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find out what size your ring is</Text>
      <Text style={styles.description}>
        Place the ring on the circle to accurately measure its diameter. Adjust
        the slider until you get the desired size of the ring.
      </Text>

      <View style={styles.svgCard}>
        <Svg height="180" width="180">
          <Circle
            cx="90"
            cy="90"
            r={circleRadius}
            stroke="#A3A3A3"
            strokeWidth="2"
            fill="none"
          />
        </Svg>
        <Text style={styles.sizeText}>{size} mm</Text>
      </View>

      <Slider
        style={styles.slider}
        minimumValue={0.5}
        maximumValue={2}
        value={size / 10}
        onValueChange={handleSliderChange}
        onSlidingComplete={handleSlidingComplete}
        minimumTrackTintColor="#7F3DFF"
        maximumTrackTintColor="#E0E0E0"
        thumbTintColor="#7F3DFF"
      />

      <Text style={styles.manualText}>
        Or enter your ring size manually{' '}
        <Text style={styles.link} onPress={() => setIsManualInput(true)}>
          here
        </Text>
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleExplore}>
        <Text style={styles.buttonText}>Explore rings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  svgCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginVertical: 20,
  },
  sizeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#333',
  },
  slider: {
    width: '100%',
    height: 40,
    marginVertical: 20,
  },
  manualText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 10,
  },
  link: {
    color: '#7F3DFF',
    textDecorationLine: 'underline',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#7F3DFF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RingDetectionSizeScreen;
