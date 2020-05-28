import React, { Component } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class Waitting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  //첫 로딩 화면 전환
  // componentWillMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       loading: !this.state.loading,
  //     });
  //   }, 3000);
  // }

  render() {
    return (
      <LinearGradient colors={["#FF8A00", "#FF8A00"]} style={styles.container}>
        <Image
          style={{
            flex: 0.9,
            height: "88%",
            width: "90%",
            resizeMode: "contain",
            marginLeft: 10,
          }}
          source={require("../mainLogo.png")}
        />
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate("Login")}
            activeOpacity={0.99}
          >
            <Text style={styles.btnText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate("Signin")}
            activeOpacity={0.99}
          >
            <Text style={styles.btnText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  waitingText: {
    fontSize: 23,
    marginBottom: 13,
  },
  btnView: {
    flex: 0.2,
    width: "92%",
    flexDirection: "row",
  },
  btn: {
    flex: 1,
    margin: 6,
    marginTop: 15,
    marginBottom: 60,
    paddingVertical: 30,
    borderWidth: 3,
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "center",
  },
  btnText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
