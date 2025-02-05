// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   Image,
//   Modal,
//   TextInput,
//   ScrollView
// } from 'react-native';
// import { Linking } from 'react-native';

// import { useCart } from './CartContext'; // Import CartContext hook

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
//   description: string;
//   seller: string;
//   quantity?: number; // Optional property
// }

// const Accessories = ({ navigation }: any) => {
//   const [location, setLocation] = useState('Kalyan - 421201');
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const { cart, addToCart } = useCart(); // Using CartContext for cart actions

//   const handleAddToCart = (product: Product) => {
//     const updatedProduct = { ...product, quantity: 1 }; // Default quantity to 1
//     addToCart(updatedProduct);
//   };

//   const products: Product[] = [

//             {
//       id: 1,
//       title: 'Rolex Oyster Perpetual',
//       image: 'https://via.placeholder.com/150/0000FF/808080?text=Rolex',
//       price: 12000.0,
//       description: 'A timeless classic with unmatched precision.',
//       seller: 'Rolex Official Store',
//     },
//     {
//       id: 2,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 3,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 4,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 5,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 6,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
    
//     {
//       id: 7,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 8,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 9,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     {
//       id: 10,
//       title: 'Casio G-Shock',
//       image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
//       price: 8000.0,
//       description: 'Rugged design and durable performance.',
//       seller: 'Casio Authorized Dealer',
//     },
//     // Product data...
//   ];

//   const renderProductCard = ({ item }: { item: Product }) => (
//     <TouchableOpacity
//       style={styles.productCard}
//       onPress={() => setSelectedProduct(item)}
//     >
//       <Image
//         source={{ uri: item.image }}
//         style={styles.productImage}
//         onError={() => console.log(`Failed to load image: ${item.image}`)}
//       />
//       <Text style={styles.productTitle} numberOfLines={1}>
//         {item.title}
//       </Text>
//       <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
     
//     </TouchableOpacity>
//   );

//   const renderProductDetails = () => {
//     if (!selectedProduct) return null;
  
//     const arLink = `https://wanna-watches.ar.wanna.fashion/?modelid=IW371611-O&wristmeasurement=true&showhint=wristmeasurement&startwithid=IW371611-O&mode=vto`;
  
//     return (
//       <View style={styles.detailsContainer}>
//         <ScrollView style={styles.productDetailsContainer}>
//           <TouchableOpacity
//             onPress={() => setSelectedProduct(null)}
//             style={styles.backButton}
//           >
//             <Text style={styles.backArrow}>← Back</Text>
//           </TouchableOpacity>
//           <Image
//             source={{ uri: selectedProduct.image }}
//             style={styles.productDetailsImage}
//           />
//           <Text style={styles.productDetailsTitle}>{selectedProduct.title}</Text>
//           <Text style={styles.productDetailsPrice}>
//             ₹{selectedProduct.price.toFixed(2)}
//           </Text>
//           <Text style={styles.productDetailsDescription}>
//             {selectedProduct.description}
//           </Text>
//           <Text style={styles.productDetailsSeller}>
//             Sold by: {selectedProduct.seller}
//           </Text>
//           <Text style={styles.productDetailsSize}>Size: Free Size</Text>
  
//           {/* AR Integration Button */}
//           <TouchableOpacity
//             style={styles.arButton}
//             onPress={() => Linking.openURL(arLink)}
//           >
//             <Text style={styles.arButtonText}>View in AR</Text>
//           </TouchableOpacity>
//         </ScrollView>
  
//         <View style={styles.actionButtonsContainer}>
//           <TouchableOpacity
//             style={styles.addToCartButton}
//             onPress={() => handleAddToCart(selectedProduct)}
//           >
//             <Text style={styles.addToCartText}>Add to Cart</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.buyNowButton}
//             onPress={() => navigation.navigate('Payment')}
//           >
//             <Text style={styles.buyNowText}>Buy Now</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };
  

//   return (
//     <View style={styles.container}>
//       {!selectedProduct && (
//         <>
//           <View style={styles.locationContainer}>
//             <TouchableOpacity onPress={() => setModalVisible(true)}>
//               <Text style={styles.locationText}>
//                 Delivering to {location} ▼
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <Modal
//             visible={isModalVisible}
//             transparent
//             animationType="slide"
//             onRequestClose={() => setModalVisible(false)}
//           >
//             <View style={styles.modalContainer}>
//               <View style={styles.modalContent}>
//                 <Text style={styles.modalTitle}>Enter New Location</Text>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter location"
//                   onChangeText={(text) => setLocation(text)}
//                   defaultValue={location}
//                 />
//                 <TouchableOpacity
//                   onPress={() => setModalVisible(false)}
//                   style={styles.saveButton}
//                 >
//                   <Text style={styles.saveButtonText}>Save</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Modal>
//           <FlatList
//             data={products}
//             renderItem={renderProductCard}
//             keyExtractor={(item) => item.id.toString()}
//             contentContainerStyle={styles.productList}
//             numColumns={2}
//             columnWrapperStyle={styles.row}
//           />
//         </>
//       )}
//       {selectedProduct && renderProductDetails()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   locationContainer: {
//     padding: 12,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   locationText: { fontSize: 16, fontWeight: '500', color: '#333' },
//   productList: { paddingHorizontal: 8, paddingTop: 8 },
//   row: { justifyContent: 'space-between' },
//   productCard: {
//     flex: 1,
//     margin: 8,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//   },
//   productImage: { height: 120, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
//   productTitle: { padding: 8, fontSize: 14, fontWeight: '500' },
//   productPrice: { padding: 8, fontSize: 16, fontWeight: 'bold', color: '#007AFF' },
//   detailsContainer: { flex: 1 },
//   productDetailsContainer: { padding: 16, flex: 1 },
//   productDetailsImage: { width: '100%', height: 200, borderRadius: 8 },
//   productDetailsTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 8 },
//   productDetailsPrice: { fontSize: 18, fontWeight: 'bold', color: '#007AFF' },
//   productDetailsDescription: { fontSize: 14, marginVertical: 8 },
//   productDetailsSeller: { fontSize: 14, marginVertical: 4 },
//   productDetailsSize: { fontSize: 14, marginVertical: 4 },
//   actionButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//     padding: 12,
//   },
//   addToCartButton: {
//     flex: 1,
//     backgroundColor: '#007AFF',
//     marginRight: 8,
//     padding: 12,
//     borderRadius: 8,
//   },
//   buyNowButton: {
//     flex: 1,
//     backgroundColor: 'green',
//     padding: 12,
//     borderRadius: 8,
//   },
//   addToCartText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   buyNowText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   backButton: { marginBottom: 8 },
//   backArrow: { fontSize: 16, color: '#007AFF' },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: { backgroundColor: '#fff', padding: 16, borderRadius: 8, width: '80%' },
//   modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
//   input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 8, marginBottom: 16 },
//   saveButton: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8 },
//   saveButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
//   arButton: { backgroundColor: '#FF5733', padding: 12, borderRadius: 8 },
//   arButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
// });

// export default Accessories;


import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Modal,
  TextInput,
  ScrollView
} from 'react-native';
import { Linking } from 'react-native';

import { useCart } from './CartContext'; // Import CartContext hook

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
//   description: string;
//   seller: string;
//   quantity?: number; // Optional property
// }
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  seller: string;
  arLink?: string; // Optional property to include AR link
  quantity?: number; // Optional property
}

const JewelleryScreen = ({ navigation }: any) => {
  const [location, setLocation] = useState('Kalyan - 421201');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { cart, addToCart } = useCart(); // Using CartContext for cart actions

  const handleAddToCart = (product: Product) => {
    const updatedProduct = { ...product, quantity: 1 }; // Default quantity to 1
    addToCart(updatedProduct);
  };

  const products: Product[] = [
    {
      id: 1,
      title: 'White Pearl NeckLace',
      image: 'https://via.placeholder.com/150/0000FF/808080?text=Rolex',
      price: 12000.0,
      description: 'A timeless classic with unmatched precision.',
      seller: 'Rolex Official Store',
      arLink: 'https://wanna-scarves.ar.wanna.fashion/?modelid=WNNECK001&mode=3d&showonboarding=3d',
    },
    {
      id: 2,
      title: 'Casio G-Shock',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Casio',
      price: 8000.0,
      description: 'Rugged design and durable performance.',
      seller: 'Casio Authorized Dealer',
      arLink: 'https://wanna-watches.ar.wanna.fashion/?mode=3d&showonboarding=3d&startwithid=WBQA7GWMIX1ZOO00',
    },
    {
      id: 3,
      title: 'Shoe 3',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Shoes',
      price: 5000.0,
      description: 'Stylish and comfortable footwear.',
      seller: 'Shoe Store',
      arLink: 'https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=c8516c2b2d28457198d1369466451205&metadata=01',
    },
    {
      id: 4,
      title: 'Shoe 4',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Shoes',
      price: 6000.0,
      description: 'Durable and trendy design.',
      seller: 'Shoe Store',
      arLink: 'https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8ba6a896d34f4c1f80c76d138322e612&metadata=01',
    },
    {
      id: 5,
      title: 'Shoe 5',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Shoes',
      price: 5500.0,
      description: 'Classic style with premium material.',
      seller: 'Shoe Store',
      arLink: 'https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=477477cb85a3420e8c6d30ba9f6f0647&metadata=01',
    },
    {
      id: 6,
      title: 'Shoe 6',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Shoes',
      price: 5200.0,
      description: 'Elegant design for all occasions.',
      seller: 'Shoe Store',
      arLink: 'https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=2e3ef1734ada4783ad32449bc0fa2b30&metadata=01',
    },
    {
      id: 7,
      title: 'Shoe 7',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Shoes',
      price: 7000.0,
      description: 'Sophisticated and modern style.',
      seller: 'Shoe Store',
      arLink: 'https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=dcbb0462ed7546dca5a1c26c8b6e3cad&metadata=01',
    },
    {
      id: 8,
      title: 'Shoe 8',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Shoes',
      price: 7200.0,
      description: 'High-quality footwear for comfort.',
      seller: 'Shoe Store',
      arLink: 'https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=86691394e784435889ce27e4c66346e2&metadata=01',
    },
    {
      id: 9,
      title: 'Shoe 9',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Shoes',
      price: 7300.0,
      description: 'Perfect blend of style and durability.',
      seller: 'Shoe Store',
      arLink: 'https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0cb7a1e3c6aa44cba0997ba35402da01&metadata=01',
    },
    {
      id: 10,
      title: 'Shoe 10',
      image: 'https://via.placeholder.com/150/FF0000/808080?text=Shoes',
      price: 7500.0,
      description: 'Modern and comfortable fit.',
      seller: 'Shoe Store',
      arLink: 'https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=918eeb459e18455783a65d7295f455a0&metadata=01',
    },
  ];

  const renderProductCard = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => setSelectedProduct(item)}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        onError={() => console.log(`Failed to load image: ${item.image}`)}
      />
      <Text style={styles.productTitle} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  const renderProductDetails = () => {
    if (!selectedProduct) return null;

    return (
      <View style={styles.detailsContainer}>
        <ScrollView style={styles.productDetailsContainer}>
          <TouchableOpacity
            onPress={() => setSelectedProduct(null)}
            style={styles.backButton}
          >
            <Text style={styles.backArrow}>← Back</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: selectedProduct.image }}
            style={styles.productDetailsImage}
          />
          <Text style={styles.productDetailsTitle}>{selectedProduct.title}</Text>
          <Text style={styles.productDetailsPrice}>
            ₹{selectedProduct.price.toFixed(2)}
          </Text>
          <Text style={styles.productDetailsDescription}>
            {selectedProduct.description}
          </Text>
          <Text style={styles.productDetailsSeller}>
            Sold by: {selectedProduct.seller}
          </Text>
          <Text style={styles.productDetailsSize}>Size: Free Size</Text>

          {/* AR Integration Button */}
          <TouchableOpacity
            style={styles.arButton}
            onPress={() => Linking.openURL(selectedProduct.arLink || '')}
          >
            <Text style={styles.arButtonText}>View in AR</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => handleAddToCart(selectedProduct)}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buyNowButton}
            onPress={() => navigation.navigate('Payment')}
          >
            <Text style={styles.buyNowText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {!selectedProduct && (
        <>
          <View style={styles.locationContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.locationText}>
                Delivering to {location} ▼
              </Text>
            </TouchableOpacity>
          </View>
          <Modal
            visible={isModalVisible}
            transparent
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Enter New Location</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter location"
                  onChangeText={(text) => setLocation(text)}
                  defaultValue={location}
                />
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={styles.saveButton}
                >
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <FlatList
            data={products}
            renderItem={renderProductCard}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.productList}
            numColumns={2}
            columnWrapperStyle={styles.row}
          />
        </>
      )}
      {selectedProduct && renderProductDetails()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  locationContainer: {
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  locationText: { fontSize: 16, fontWeight: '500', color: '#333' },
  productList: { paddingHorizontal: 8, paddingTop: 8 },
  row: { justifyContent: 'space-between' },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  productImage: { height: 120, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  productTitle: { padding: 8, fontSize: 14, fontWeight: '500' },
  productPrice: { padding: 8, fontSize: 16, fontWeight: 'bold', color: '#007AFF' },
  detailsContainer: { flex: 1 },
  productDetailsContainer: { padding: 16, flex: 1 },
  productDetailsImage: { width: '100%', height: 200, borderRadius: 8 },
  productDetailsTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 8 },
  productDetailsPrice: { fontSize: 18, fontWeight: 'bold', color: '#007AFF' },
  productDetailsDescription: { fontSize: 14, marginVertical: 8 },
  productDetailsSeller: { fontSize: 14, marginVertical: 4 },
  productDetailsSize: { fontSize: 14, marginVertical: 4 },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 12,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    marginRight: 8,
    padding: 12,
    borderRadius: 8,
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
  },
  addToCartText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  buyNowText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  backButton: { marginBottom: 8 },
  backArrow: { fontSize: 16, color: '#007AFF' },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: { backgroundColor: '#fff', padding: 16, borderRadius: 8, width: '80%' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 8, marginBottom: 16 },
  saveButton: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8 },
  saveButtonText: { color: '#fff', textAlign: 'center' },
  arButton: {
    backgroundColor: '#FF6200',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  arButtonText: { color: '#fff', fontWeight: 'bold' },
});

export default JewelleryScreen;

