import React from "react";
import { Dimensions, Image, StyleSheet, TouchableWithoutFeedback, View, Text, Button } from "react-native";
import { Link, useParams } from "react-router-dom";
let { width, height } = Dimensions.get("window");

let allDogNames = ["Meatball", "Edgar", "Manny", "Duke", "Rosie"];

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
  },
  picture: {
    width,
    height,
    overflow: "hidden",
  },
  image: {
    width: 600,
    height: 400,
    alignSelf: "center",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    alignSelf: "center",
    width: "80%",
    fontWeight: "900",
  },
  body: {
    fontSize: 20,
    paddingTop: "5%",
    textAlign: "center",
    fontWeight: "900",
  },
  button: {
    marginTop: 20,
    width: "100px",
    alignSelf: "center",
  },
});
const Home = (props) => {
  let titleText =
    "Welcome to DoggoFinder!\n\n\n Swipe left and right to browse doggos. When you find one that you love, tap to go to their own personal page!";
  return (
    <View>
      <Text style={styles.title}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <View style={styles.button}>
        <Link to="/browse" style={{ textDecoration: "none" }}>
          <Button title="Begin" color="#FFA500" />
        </Link>
      </View>
    </View>
  );
};

export default Home;
