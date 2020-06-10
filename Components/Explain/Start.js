import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/shemicon.png")}
          style={styles.icon}
        />
        <Text style={styles.title}>우리집 전력관리 앱</Text>
        <TouchableOpacity
          style={styles.startBtn}
          activeOpacity={0.99}
          onPress={() => {
            this.props.navigation.navigate("Signin");
          }}
        >
          <Text style={styles.btnText}>시작하기</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#15D098",
  },
  icon: {
    flex: 0.25,
    alignSelf: "center",
    resizeMode: "contain",
    marginTop: 50,
  },
  title: {
    flex: 0.55,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    marginTop: 20,
  },
  btnText: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  startBtn: {
    marginTop: 200,
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: "#2EBF80",
    paddingVertical: 20,
    paddingHorizontal: 60,
  },
  iconView: {
    width: 110,
    height: 110,
    borderRadius: 15,
    alignSelf: "center",
    backgroundColor: "#2EBF80",
  },
});
