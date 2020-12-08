import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "./components/Swiper";
import DogView from "./components/DogView";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <View style={styles.container}>
        <Route path="/" exact component={Swiper} />
        <Route path="/dogs/:id" exact component={DogView} />
      </View>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ed6a61",
    alignItems: "center",
    justifyContent: "center",
  },
});
