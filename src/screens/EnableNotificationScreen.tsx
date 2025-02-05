import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { EnableNotificationScreenNavigationProp} from '../navigation/types'; // Adjust the path accordingly

type EnableNotificationScreenProps = {
  navigation: EnableNotificationScreenNavigationProp;
};

const EnableNotificationScreen: React.FC<EnableNotificationScreenProps> = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleAllowNotifications = () => {
    Alert.alert("Notifications Enabled", "You will receive real-time updates on your order.");
    setNotificationsEnabled(true);
    // Navigate to the Product screen after enabling notifications
    navigation.navigate('Product');
  };

  const handleMaybeLater = () => {
    Alert.alert("Notification Skipped", "You can enable notifications later from settings.");
    // Navigate to the Product screen if the user skips
    navigation.navigate('Product');
  };

  return (
    <View style={styles.container}>

<Image
        source={require('../assets/images/noti.png')} // Path to your image asset
        style={styles.image}
        resizeMode="contain" // Ensure the image is scaled correctly
      />
      <Text style={styles.title}>Enable Notification Access</Text>
      <Text style={styles.description}>
        Enable notifications to receive real-time updates on your order.
      </Text>

      {/* Image with resizeMode */}
      {/* <Image
        source={require('../assets/images/noti.png')} // Path to your image asset
        style={styles.image}
        resizeMode="contain" // Ensure the image is scaled correctly
      />
 */}
      {!notificationsEnabled ? (
        <View>
          <TouchableOpacity style={styles.button} onPress={handleAllowNotifications}>
            <Text style={styles.buttonText}>Allow Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleMaybeLater}>
            <Text style={styles.buttonText}>Maybe Later</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.successText}>Notifications are enabled!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EDE7F6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#A020F0',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successText: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  image: {
    width: 200,  // Adjust width as needed
    height: 200, // Adjust height as needed
    marginBottom: 20,
  },
});

export default EnableNotificationScreen;
