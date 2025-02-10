import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/(auth)/LoginScreen">Log-in</Link>
      <Link href="/(auth)/RegisterScreen">Register</Link>
      <Link href="/(home)/EditProfileScreen">Edit Profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

