import React, { useState } from "react";
import { 
  View, Text, TextInput, ScrollView, 
  TouchableOpacity, StyleSheet, Keyboard, Dimensions 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const recentSearches = ["Cafe", "Irish"];
  const topCategories = [
    "Breakfast and Brunch", "Coffee and Tea", "Chinese", "Indian", 
    "Latest Deals", "Restaurant Rewards", "Best Overall", "Nationwide Shipping",
    "Mexican", "Fast Food", "Healthy", "Pizza", "Sandwich", "Asian", "Bakery"
  ];

  const filters = ["All", "Restaurants", "Grocery", "Convenience", "Alcohol"];

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>{"< Back"}</Text>
      </TouchableOpacity>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Food, shopping, drinks, etc"
          placeholderTextColor="#888"
          style={styles.searchBar}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onFocus={() => setIsDropdownVisible(true)}
          onBlur={() => setTimeout(() => setIsDropdownVisible(false), 200)}
        />
      </View>

      {/* Dropdown List - Visible Only When Focused */}
      {isDropdownVisible && (
        <View style={styles.dropdownContainer}>
          {/* Filters Inside Dropdown */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
            {filters.map((filter, index) => (
              <TouchableOpacity key={index} style={styles.filterButton}>
                <Text style={styles.filterText}>{filter}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <ScrollView style={styles.listContainer} keyboardShouldPersistTaps="handled">
            {/* Recent Searches */}
            <Text style={styles.header}>Recent Searches</Text>
            {recentSearches.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.searchItem} 
                onPress={() => {
                  setSearchQuery(item);
                  setIsDropdownVisible(false);
                  Keyboard.dismiss();
                }}
              >
                <Ionicons name="search-outline" size={16} color="#888" />
                <Text style={styles.searchText}>{item}</Text>
              </TouchableOpacity>
            ))}

            {/* Top Categories */}
            <Text style={styles.header}>Top Categories</Text>
            {topCategories.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.searchItem} 
                onPress={() => {
                  setSearchQuery(item);
                  setIsDropdownVisible(false);
                  Keyboard.dismiss();
                }}
              >
                <Ionicons name="search-outline" size={16} color="#888" />
                <Text style={styles.searchText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 15, 
    backgroundColor: "#fff",
  },
  backButton: {
    fontSize: 18,
    color: "#007BFF",
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 10,
    zIndex: 100, 
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: { 
    flex: 1, 
    fontSize: 16, 
  },
  dropdownContainer: {
    position: "absolute", 
    top: 60, 
   
    width: width ,
    height: height, 
    backgroundColor: "#fff",
    borderRadius: 15, 
    elevation: 12, 
   
    zIndex: 1000, 
    padding: 15, 
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 50,
    paddingVertical: 5,
   
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  filterButton: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 5,
  },
  filterText: {
    fontSize: 14,
    fontWeight: "500",
  },
  listContainer: {
    flexGrow: 1,
  },
  header: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 10,
    color: "#333",
  },
  searchItem: { 
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  searchText: {
    fontSize: 16,
    marginLeft: 10,
  }
});

export default SearchScreen;
