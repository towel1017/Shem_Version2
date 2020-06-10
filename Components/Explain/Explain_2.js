import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FooterDot from "./Footer";

export default class Explain2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/ex2.png")} style={styles.image} />
        <TouchableOpacity
          activeOpacity={0.99}
          style={styles.sideArrow}
          onPress={() => {
            this.props.navigation.navigate("Explain3");
          }}
        >
          <AntDesign name="right" size={35} color="#C1C1C1" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.99}
          style={styles.sideArrowLeft}
          onPress={() => {
            this.props.navigation.navigate("Explain1");
          }}
        >
          <AntDesign name="left" size={35} color="#C1C1C1" />
        </TouchableOpacity>
        <View style={styles.exView}>
          <Text style={styles.exText}>내가 쓴 사용량과 전기요금을 한번에!</Text>
          <Text style={styles.subText}>
            데이터를 사용자가 편히 볼 수 있게끔
          </Text>
          <Text style={styles.subText}>그래프와 수치로 계산합니다</Text>
        </View>
        <View style={styles.foot}>
          <FooterDot currentNum={2} />
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
  sideArrowLeft: {
    alignSelf: "center",
    position: "absolute",
    left: 0,
  },
});
