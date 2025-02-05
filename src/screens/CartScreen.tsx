// import React from 'react';
// import { View, Text } from 'react-native';

// const CartScreen = () => {
//   return (
//     <View>
//       <Text>Mall Screen</Text>
//     </View>
//   );
// };

// export default CartScreen;



// import React from 'react';
// import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
// import { useCart } from '../screens/CartContext';

// const CartScreen = () => {
//   const { cart } = useCart();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Your Cart</Text>
//       <FlatList
//         data={cart}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.cartItem}>
//             <Image source={{ uri: item.image }} style={styles.image} />
//             <View>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.price}>₹{item.price}</Text>
//               <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
//             </View>
//           </View>
//         )}
//         ListEmptyComponent={<Text style={styles.empty}>Your cart is empty.</Text>}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   cartItem: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   image: {
//     width: 80,
//     height: 80,
//     marginRight: 16,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   price: {
//     fontSize: 14,
//     color: 'green',
//   },
//   quantity: {
//     fontSize: 12,
//     color: 'gray',
//   },
//   empty: {
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 16,
//   },
// });

// export default CartScreen;







































// import React from 'react';
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useCart } from './CartContext';

// const CartScreen = () => {
//   const { cart, increaseQuantity, decreaseQuantity } = useCart();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Your Cart</Text>
//       <FlatList
//         data={cart}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.cartItem}>
//             <Image source={{ uri: item.image }} style={styles.image} />
//             <View style={styles.details}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.price}>₹{item.price.toFixed(2)}</Text>
//               <View style={styles.quantityContainer}>
//                 <TouchableOpacity
//                   onPress={() => decreaseQuantity(item.id)}
//                   style={styles.quantityButton}
//                 >
//                   <Text style={styles.quantityButtonText}>-</Text>
//                 </TouchableOpacity>
//                 <Text style={styles.quantity}>{item.quantity}</Text>
//                 <TouchableOpacity
//                   onPress={() => increaseQuantity(item.id)}
//                   style={styles.quantityButton}
//                 >
//                   <Text style={styles.quantityButtonText}>+</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         )}
//         ListEmptyComponent={<Text style={styles.empty}>Your cart is empty.</Text>}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16 },
//   header: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
//   cartItem: { flexDirection: 'row', marginBottom: 16 },
//   image: { width: 80, height: 80, marginRight: 16 },
//   details: { flex: 1 },
//   title: { fontSize: 16, fontWeight: 'bold' },
//   price: { fontSize: 14, color: 'green', marginBottom: 8 },
//   quantityContainer: { flexDirection: 'row', alignItems: 'center' },
//   quantityButton: {
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ddd',
//     borderRadius: 15,
//     marginHorizontal: 8,
//   },
//   quantityButtonText: { fontSize: 18, fontWeight: 'bold' },
//   quantity: { fontSize: 16, fontWeight: 'bold' },
//   empty: { textAlign: 'center', marginTop: 20, fontSize: 16 },
// });

// export default CartScreen;



import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCart } from './CartContext';

type RootStackParamList = {
  Payment: { total: string };
  Cart: undefined;
};

type CartScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cart'>;

interface CartScreenProps {
  navigation: CartScreenNavigationProp;
}

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * (item.quantity || 0), 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>₹{item.price.toFixed(2)}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={() => decreaseQuantity(item.id)}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity || 0}</Text>
                <TouchableOpacity
                  onPress={() => increaseQuantity(item.id)}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Your cart is empty.</Text>}
      />
      {cart.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.totalText}>Total: ₹{getTotal()}</Text>
          <TouchableOpacity
            style={styles.paymentButton}
            onPress={() => navigation.navigate('Payment', { total: getTotal() })}
          >
            <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  cartItem: { flexDirection: 'row', marginBottom: 16 },
  image: { width: 80, height: 80, marginRight: 16 },
  details: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: 'green', marginBottom: 8 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 15,
    marginHorizontal: 8,
  },
  quantityButtonText: { fontSize: 18, fontWeight: 'bold' },
  quantity: { fontSize: 16, fontWeight: 'bold' },
  empty: { textAlign: 'center', marginTop: 20, fontSize: 16 },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 16,
    alignItems: 'center',
  },
  totalText: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  paymentButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  paymentButtonText: { color: '#fff', fontSize: 16 },
});

export default CartScreen;

