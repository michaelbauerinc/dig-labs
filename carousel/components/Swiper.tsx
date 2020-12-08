import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, TouchableWithoutFeedback, View, ActivityIndicator } from "react-native";
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
import { Link } from "react-router-dom";
let { width, height } = Dimensions.get("window");

export let assets = [
  require("./assets/3.jpg"),
  require("./assets/2.jpg"),
  require("./assets/4.jpg"),
  require("./assets/5.jpg"),
  require("./assets/1.jpg"),
];

const snapPoints = assets.map((_, i) => i * -width);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#1E90FF",
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
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});

const Swiper = () => {
  const [loading, setLoading] = useState(true);
  const clock = useClock();
  const index = useValue(0);
  const offsetX = useValue(0);
  const translateX = useValue(0);
  const { gestureHandler, state, velocity, translation } = usePanGestureHandler();
  const to = snapPoint(translateX, velocity.x, snapPoints);
  let test;
  // let test = await fetch("https://dog.ceo/api/breeds/image/random");
  // console.log(test.body);
  useEffect(() => {
    async function getAssets() {
      for (let i of [0, 1, 2, 3, 4]) {
        test = await fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => assets.splice(i, i, data.message));
      }
      setLoading(false);
      return assets;
    }
    getAssets();
  }, []);
  useCode(
    () => [
      cond(eq(state, State.ACTIVE), [set(translateX, add(offsetX, translation.x))]),
      cond(eq(state, State.END), [
        set(translateX, timing({ clock, from: translateX, to })),
        set(offsetX, translateX),
        cond(not(clockRunning(clock)), [set(index, floor(divide(translateX, -width)))]),
      ]),
    ],
    []
  );

  if (loading) {
    return <ActivityIndicator size="large" color="white" />;
  }
  return (
    <View style={styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <Animated.View style={[styles.pictures, { transform: [{ translateX }] }]}>
            {assets.map((source, i) => (
              <TouchableWithoutFeedback key={source}>
                <View key={source} style={styles.picture}>
                  <Link
                    to={{
                      pathname: `/dogs/${i + 1}`,
                      state: {
                        url: source,
                      },
                    }}
                  >
                    <Image style={styles.image} source={{ uri: source }} />
                  </Link>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Swiper;
