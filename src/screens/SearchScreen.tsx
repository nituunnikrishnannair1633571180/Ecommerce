// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const SearchScreen: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [results, setResults] = useState<string[]>([]);
//   const navigation = useNavigation();

//   const sampleData = [
//     'Product 1',
//     'Product 2',
//     'Product 3',
//     'Product 4',
//     'Product 5',
//   ];

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//     if (query.trim()) {
//       const filteredResults = sampleData.filter(item =>
//         item.toLowerCase().includes(query.toLowerCase())
//       );
//       setResults(filteredResults);
//     } else {
//       setResults([]);
//     }
//   };

//   const handleSelect = (item: string) => {
//     // Navigate back to the product screen with the selected item
//     navigation.goBack();
//     console.log(`Selected: ${item}`); // Replace with desired action
//   };

//   return (
//     <View style={styles.container}>
//       {/* Search Input Box */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search for products"
//           placeholderTextColor="#aaa"
//           value={searchQuery}
//           onChangeText={handleSearch}
//         />
//       </View>

//       {/* Results List */}
//       <FlatList
//         data={results}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => handleSelect(item)} style={styles.resultItem}>
//             <Text style={styles.resultText}>{item}</Text>
//           </TouchableOpacity>
//         )}
//         ListEmptyComponent={() => (
//           <Text style={styles.emptyText}>
//             {searchQuery ? 'No results found' : 'Start typing to search'}
//           </Text>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 16,
//   },
//   searchContainer: {
//     backgroundColor: '#f0f0f0',
//     borderRadius: 10,
//     padding: 8,
//     marginBottom: 16,
//   },
//   searchInput: {
//     height: 40,
//     fontSize: 16,
//     color: '#333',
//   },
//   resultItem: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   resultText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   emptyText: {
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 16,
//     color: '#aaa',
//   },
// });

// export default SearchScreen;



// import React , { useState }  from 'react';
// import { View, Text, StyleSheet, ScrollView, Image,TouchableOpacity,TextInput } from 'react-native';

// const SearchScreen = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const recentlyViewed = [
//     { id: 1, name: 'Shirt X', image: 'https://img.icons8.com/ios/100/t-shirt.png' },
//     { id: 2, name: 'Sneakers', image: 'https://img.icons8.com/ios/100/sneakers.png' },
//     { id: 3, name: 'Elegant Dress', image: 'https://img.icons8.com/ios/100/dress.png' },
//   ];

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       {/* Search Bar */}
//       <View style={styles.searchBarContainer}>
//         <TextInput
//           style={styles.searchBar}
//           placeholder="Search products..."
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           <Text style={styles.searchButtonText}>Search</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Recently Viewed Section */}
//       <View style={styles.recentlyViewedContainer}>
//         <Text style={styles.sectionTitle}>Recently Viewed</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {recentlyViewed.map((item) => (
//             <View key={item.id} style={styles.recentlyViewedItem}>
//               <Image source={{ uri: item.image }} style={styles.recentlyViewedImage} />
//               <Text style={styles.recentlyViewedText}>{item.name}</Text>
//             </View>
//           ))}
//         </ScrollView>
//       </View>

//       {/* Popular Brands Section */}
//       <View style={styles.popularBrandsContainer}>
//         <Text style={styles.sectionTitle}>Popular Brands</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <View style={styles.brandItem}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/96/nike.png' }}
//               style={styles.brandIcon}
//             />
//           </View>
//           <View style={styles.brandItem}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/96/adidas.png' }}
//               style={styles.brandIcon}
//             />
//           </View>
//           <View style={styles.brandItem}>
//             <Image
//               source={{ uri: 'https://img.icons8.com/color/96/puma.png' }}
//               style={styles.brandIcon}
//             />
//           </View>
//         </ScrollView>
//       </View>

//       {/* Just For You Section */}
//       <View style={styles.justForYouContainer}>
//         <Text style={styles.sectionTitle}>Just for You</Text>
//         <View style={styles.dressContainer}>
//           <Image
//             source={{ uri: 'https://img.icons8.com/ios/100/dress.png' }}
//             style={styles.dressImage}
//           />
//           <View style={styles.dressDetails}>
//             <Text style={styles.dressName}>Elegant Dress</Text>
//             <Text style={styles.dressRating}>Rating: 4.5/5</Text>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     padding: 15,
//     backgroundColor: '#F5F5F5',
//   },
//   searchBarContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchBar: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#CCC',
//     borderRadius: 10,
//     padding: 10,
//     backgroundColor: '#FFF',
//   },
//   searchButton: {
//     backgroundColor: '#6200EE',
//     marginLeft: 10,
//     padding: 10,
//     borderRadius: 10,
//   },
//   searchButtonText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//   },
//   recentlyViewedContainer: {
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#6200EE',
//     marginBottom: 10,
//   },
//   recentlyViewedItem: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   recentlyViewedImage: {
//     width: 70,
//     height: 70,
//     borderRadius: 10,
//     marginBottom: 5,
//   },
//   recentlyViewedText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   popularBrandsContainer: {
//     marginBottom: 20,
//   },
//   brandItem: {
//     marginRight: 15,
//   },
//   brandIcon: {
//     width: 70,
//     height: 70,
//   },
//   justForYouContainer: {
//     marginBottom: 20,
//   },
//   dressContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   dressImage: {
//     width: 100,
//     height: 100,
//     marginRight: 15,
//   },
//   dressDetails: {
//     flex: 1,
//   },
//   dressName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   dressRating: {
//     fontSize: 14,
//     color: '#888',
//   },
// });

// export default SearchScreen;



import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation(); // For navigation

  const [searchQuery, setSearchQuery] = useState('');
  const recentlyViewed = [
    { id: 1, name: 'Shirt X', image: 'https://img.icons8.com/ios/100/t-shirt.png' },
    { id: 2, name: 'Sneakers', image: 'https://img.icons8.com/ios/100/sneakers.png' },
    { id: 3, name: 'Elegant Dress', image: 'https://img.icons8.com/ios/100/dress.png' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Header with Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/left.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search Products</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Recently Viewed Section */}
      <View style={styles.recentlyViewedContainer}>
        <Text style={styles.sectionTitle}>Recently Viewed</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recentlyViewed.map((item) => (
            <View key={item.id} style={styles.recentlyViewedItem}>
              <Image source={{ uri: item.image }} style={styles.recentlyViewedImage} />
              <Text style={styles.recentlyViewedText}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    
      <View style={styles.popularBrandsContainer}>
        <Text style={styles.sectionTitle}>Popular Brands</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.brandItem}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/96/nike.png' }}
              style={styles.brandIcon}
            />
          </View>
          <View style={styles.brandItem}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/96/adidas.png' }}
              style={styles.brandIcon}
            />
          </View>
          <View style={styles.brandItem}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/96/puma.png' }}
              style={styles.brandIcon}
            />
          </View>
        </ScrollView>
      </View>

      {/* Just For You Section */}
      <View style={styles.justForYouContainer}>
        <Text style={styles.sectionTitle}>Just for You</Text>
        <View style={styles.dressContainer}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios/100/dress.png' }}
            style={styles.dressImage}
          />
          <View style={styles.dressDetails}>
            <Text style={styles.dressName}>Elegant Dress</Text>
            <Text style={styles.dressRating}>Rating: 4.5/5</Text>
          </View>
          </View>
          </View>
           </ScrollView>


  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 15,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFF',
  },
  searchButton: {
    backgroundColor: '#6200EE',
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
  },
  searchButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  recentlyViewedContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 10,
  },
  recentlyViewedItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  recentlyViewedImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginBottom: 5,
  },
  recentlyViewedText: {
    fontSize: 14,
    color: '#333',
  },

  
    popularBrandsContainer: {
      marginBottom: 20,
    },
    brandItem: {
      marginRight: 15,
    },
    brandIcon: {
      width: 70,
      height: 70,
    },
    justForYouContainer: {
      marginBottom: 20,
    },
    dressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    },
    dressImage: {
      width: 100,
      height: 100,
      marginRight: 15,
    },
    dressDetails: {
      flex: 1,
    },
    dressName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    dressRating: {
      fontSize: 14,
      color: '#888',
    },
 
});

export default SearchScreen;
