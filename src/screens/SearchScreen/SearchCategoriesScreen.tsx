import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import breakfastImg from '../../../assets/images/breakfast.jpeg'; // Proveri putanju
import SearchScreen from './SearchScreen';
const prva = require('../../../assets/images/prva.png');
const druga = require('../../../assets/images/druga.png');
const treca = require('../../../assets/images/treca.png');
const cetvrta = require('../../../assets/images/cetvrta.png');
const peta = require('../../../assets/images/peta.png');
const sesta = require('../../../assets/images/sesta.png');

const categories = [
  { id: '1', name: 'Breakfast & brunch', image: prva },
  { id: '2', name: 'Coffee & tea', image: druga },
  { id: '3', name: 'Deals', image: treca },
  { id: '4', name: 'Restaurant Rewards', image: cetvrta },
  { id: '5', name: 'Best overall', image: peta },
  { id: '6', name: 'Shipped free', image: sesta },
];

const App = () => {
  return (
    <View style={styles.container}>
      <SearchScreen/>
     
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Top categories</Text>
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryItem}>
              <Image source={category.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.title}>All Categories</Text>
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryItem}>
              <Image source={category.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
  },
  searchBar: {
   
    height: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  searchText: {
    
    fontSize: 16,
    color: '#888',
  },
  scrollView: {
    top: 50,
    padding: 10, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '48%',
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'column', 
    borderRadius: 15, 
    overflow: 'hidden',
    shadowColor: '#000', 
  },
  categoryImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  categoryText: {
    height: 25,
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default App;
