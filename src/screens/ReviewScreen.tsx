import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Alert } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  ReviewScreen: { orderId: string };
  Product: { orderId: string };
};

type ReviewScreenRouteProp = RouteProp<RootStackParamList, 'ReviewScreen'>;
type ReviewScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ReviewScreen'>;

interface ReviewScreenProps {
  route: ReviewScreenRouteProp;
  navigation: ReviewScreenNavigationProp;
}

const ReviewScreen: React.FC<ReviewScreenProps> = ({ route, navigation }) => {
  const { orderId } = route.params;
  const [rating, setRating] = useState(0);

  const submitReview = () => {
   Alert.alert(`You rated ${rating} stars for Order ID: ${orderId}`);
    navigation.navigate('Product', { orderId }); // Navigate to Product screen with orderId
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Your Order</Text>
      <Text style={styles.orderId}>Order ID: {orderId}</Text>

      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Text style={[styles.star, rating >= star && styles.selectedStar]}>★</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={submitReview}>
        <Text style={styles.submitText}>Submit Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#6A0DAD' },
  orderId: { fontSize: 16, marginVertical: 4, color: '#333' },
  ratingContainer: { flexDirection: 'row', marginVertical: 20 },
  star: { fontSize: 40, color: 'gray', marginHorizontal: 5 },
  selectedStar: { color: 'gold' },
  submitButton: { backgroundColor: '#007AFF', padding: 12, borderRadius: 5 },
  submitText: { color: '#fff', fontSize: 16 },
});

export default ReviewScreen;
