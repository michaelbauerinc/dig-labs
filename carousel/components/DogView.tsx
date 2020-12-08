import React from "react";
import { Dimensions, Image, StyleSheet, TouchableWithoutFeedback, View, Text } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, {
  add,
  clockRunning,
  cond,
  debug,
  divide,
  eq,
  floor,
  not,
  set,
  useCode,
} from "react-native-reanimated";
import { snapPoint, timing, useClock, usePanGestureHandler, useValue } from "react-native-redash/lib/module/v1";
import { Link, useParams } from "react-router-dom";
let { width, height } = Dimensions.get("window");

export const assets = [
  require("./assets/3.jpg"),
  require("./assets/2.jpg"),
  require("./assets/4.jpg"),
  require("./assets/5.jpg"),
  require("./assets/1.jpg"),
];

let allDogNames = ["Leo"];

const snapPoints = assets.map((_, i) => i * -width);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
  },
  pictures: {
    width: width * assets.length,
    height,
    flexDirection: "row",
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
    fontWeight: "900",
  },
  body: {
    fontSize: 20,
    paddingTop: "5%",
    textAlign: "center",
    fontWeight: "900",
  },
});
const bodyText = "Adopt him and take him home today!";
const DogView = () => {
  let { id } = useParams();
  let titleText = `Good eye! This doggo's name is ${allDogNames[id - 1]}!`;

  return (
    <View>
      <Text style={styles.title}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Image style={styles.image} source={assets[id - 1]} />
      <Text style={styles.body}>{bodyText}</Text>
    </View>
  );
};

export default DogView;
