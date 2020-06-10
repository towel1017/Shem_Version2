import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FooterDot from "./Footer";
import { AntDesign } from "@expo/vector-icons";

export default class Explain3 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/ex3.png")} style={styles.image} />
        <TouchableOpacity
          activeOpacity={0.99}
          style={styles.sideArrow}
          onPress={() => {
            this.props.navigation.navigate("Explain2");
          }}
        >
          <AntDesign name="left" size={35} color="#C1C1C1" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.99}
          style={styles.sideArrowRight}
          onPress={() => {
            this.props.navigation.navigate("Start");
          }}
        >
          <AntDesign name="right" size={35} color="#C1C1C1" />
        </TouchableOpacity>
        <View style={styles.exView}>
          <Text style={styles.exText}>범죄 예방을 위한 실시간 정보 알림</Text>
          <Text style={styles.subText}>우리집에 누가 들어왔는지 캠을 통해</Text>
          <Text style={styles.subText}>실시간으로 사용자에게 전해집니다</Text>
        </View>
        <View style={styles.foot}>
          <FooterDot currentNum={3} />
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
    left: 0,
  },
  sideArrowRight: {
    alignSelf: "center",
    position: "absolute",
    left: "90%",
  },
});
