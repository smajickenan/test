import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Avatar, List, Divider } from "react-native-paper";

const menuItems = [
  { title: "Orders", icon: "history" },
  { title: "Your favourites", icon: "heart" },
  { title: "Restaurant Rewards", icon: "star" },
  { title: "Wallet", icon: "wallet" },
  { title: "Send a gift", icon: "gift" },
  {
    title: "Business preferences",
    icon: "briefcase",
    subtitle: "Make work meals quicker and easier",
  },
  { title: "Help", icon: "help-circle" },
  { title: "Promotions", icon: "tag" },
  { title: "Uber Pass", icon: "ticket", subtitle: "Join free for 1 month" },
  { title: "Deliver with Uber", icon: "truck" },
  { title: "Settings", icon: "cog" },
];

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Icon size={50} icon="account" />
        <Text style={styles.userName}>John Doe</Text>
      </View>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <>
            <List.Item
              title={item.title}
              description={() =>
                item.subtitle ? (
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                ) : null
              }
              left={(props) => <List.Icon {...props} icon={item.icon} />}
            />
            <Divider />
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  userName: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
  },
  subtitle: {
    color: "green",
  },
});
