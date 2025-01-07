import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("homepage");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Self-Introduce</Text>
      <Text style={styles.subtitle}>
        My name is Tran Minh Tri, I'm a software engineer. I'm from Vietnam. Currently, I'm studying at HCMC University of Technology and Education.
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://th.bing.com/th/id/OIP.2fWUtSv5XDIpw6iEo9KycQHaH7?rs=1&pid=ImgDetMain",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  image: {
    width: 200, 
    height: 200, 
    marginTop: 20, 
  },
});
