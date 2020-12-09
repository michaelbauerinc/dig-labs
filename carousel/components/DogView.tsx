import React from "react";
import { Dimensions, Image, StyleSheet, TouchableWithoutFeedback, View, Text, Button, ScrollView } from "react-native";
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
    width: "80%",
    height: 400,
    alignSelf: "center",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "900",
    width: "80%",
    alignSelf: "center",
  },
  body: {
    fontSize: 20,
    paddingTop: "5%",
    textAlign: "center",
    fontWeight: "900",
    width: "80%",
    alignSelf: "center",
  },
  button: {
    marginTop: 20,
    paddingBottom: "20px",
    width: "100px",
    alignSelf: "center",
  },
});
const DogView = (props) => {
  let { id } = useParams();
  let titleText = `Good eye! This doggo's name is ${allDogNames[id - 1]}!`;
  const bodyText = "Adopt this good boy/girl and take them home today!";
  let url = props.location.state.url;
  return (
    <ScrollView>
      <Text style={styles.title}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Image style={styles.image} source={{ uri: url }} />
      <Text style={styles.body}>{bodyText}</Text>
      <View style={styles.button}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button title="Back" color="#FFA500" />
        </Link>
      </View>
    </ScrollView>
  );
};

export default DogView;
