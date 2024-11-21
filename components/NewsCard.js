import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const NewsCard = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/news/NewsDetail",
        params: { news: item.title },
      }}
    >
      <View style={styles.card}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 390, 
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 8,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150, 
    borderRadius: 8,
    resizeMode: "cover",
  },
  title: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 1, 
  },
  description: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginTop: 1, 
    lineHeight: 18, 
    overflow: "hidden", 
    height: 40, 
  },
});

export default NewsCard;