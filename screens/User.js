import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useUser } from "../context/UserContext";

// Dummy user data

// Functional component for the User Screen
const UserScreen = () => {
  const { userDetails } = useUser();
  return (
    // Container view for the User Screen
    <View style={styles.container}>
      {/* User image */}
      <Image source={{ uri: userDetails.image }} style={styles.userImage} />

      {/* User details view */}
      <View style={styles.userDetails}>
        {/* User name */}
        <Text style={styles.userName}>{userDetails.name}</Text>

        {/* User email */}
        <Text style={styles.userEmail}>{userDetails.email}</Text>

        {/* User phone number */}
        <Text style={styles.userPhone}>{userDetails.phoneNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Style for the container view
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0", // Light gray background color
  },
  // Style for the user image
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  // Style for the user details view
  userDetails: {
    alignItems: "center",
    backgroundColor: "#fff", // White background color
    padding: 20,
    borderRadius: 15,
    elevation: 5, // Add elevation for a card-like effect
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  // Style for the user name text
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333", // Dark gray text color
  },
  // Style for the user email text
  userEmail: {
    fontSize: 18,
    marginBottom: 10,
    color: "#666", // Medium gray text color
  },
  // Style for the user phone number text
  userPhone: {
    fontSize: 16,
    color: "#888", // Light gray text color
  },
});

export default UserScreen;
