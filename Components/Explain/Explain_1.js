import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FooterDot from "./Footer";
import { AntDesign } from "@expo/vector-icons";

export default class Explain1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/ex1.png")} style={styles.image} />
        <TouchableOpacity
          activeOpacity={0.99}
          style={styles.sideArrow}
          onPress={() => {
            this.props.navigation.navigate("Explain2");
          }}
        >
          <AntDesign name="right" size={35} color="#C1C1C1" />
        </TouchableOpacity>
        <View style={styles.exView}>
          <Text style={styles.exText}>AI를 이용한 우리집 매니저</Text>
          <Text style={styles.subText}>AI 매니저를 통해서 우리집의 전력</Text>
          <Text style={styles.subText}>시스템을 통제할 수 있습니다</Text>
        </View>
        <View style={styles.foot}>
          <FooterDot currentNum={1} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  image: {
    flex: 0.7,
    marginTop: 120,
    resizeMode: "contain",
  },
  exView: {
    flex: 0.3,
  },
  exText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    marginTop: 60,
    color: "black",
  },
  subText: {
    textAlign: "center",
    fontSize: 25,
    color: "#9B9B9B",
    fontWeight: "bold",
  },
  foot: {
    flex: 0.05,
  },
  footdot: {
    backgroundColor: "lightgray",
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  sideArrow: {
    alignSelf: "center",
    position: "absolute",
    left: "90%",
  },
});
