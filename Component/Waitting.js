import React, { Component } from "react";
import { StyleSheet, Text, Image, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Login from "./User/Login";

export default class Waitting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({
        loading: !this.state.loading
      });
    }, 3000);
  }

  render() {
    return this.state.loading ? (
      <Login navigation={this.props.navigation} />
    ) : (
      <LinearGradient colors={["#313158", "#313158"]} style={styles.container}>
        <Image
          style={{
            height: "90%",
            width: "90%",
            resizeMode: "contain",
            marginLeft: 10
          }}
          source={require("../mainLogo.png")}
        />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  waitingText: {
    fontSize: 23,
    marginBottom: 13
  }
});
