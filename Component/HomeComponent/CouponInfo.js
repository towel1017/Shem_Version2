import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class CouponInfo extends Component {
  render() {
    const { name, exp, image, user, money } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Text style={{ fontSize: 30 }}>{image}</Text>
        </View>
        <View style={styles.infoView}>
          <View style={styles.name}>
            <Text style={{ fontSize: 15 }}>{name}</Text>
          </View>
          <View style={styles.exp}>
            <Text style={{ fontSize: 15 }}>유효기한 : {exp}</Text>
          </View>
          <View style={styles.user}>
            <Text style={{ fontSize: 15 }}>{user}</Text>
          </View>
          <View style={{ alignSelf: "flex-end" }}>
            <Text style={{ fontSize: 18, color: "#313158", marginTop: 25 }}>
              가격 : {money}원
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    borderWidth: 3,
    borderColor: "lightgray",
    margin: 5,
    height: 120,
  },
  imageView: {
    width: "27%",
    height: "90%",
    margin: 6,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  infoView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
});
