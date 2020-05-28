import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default class Info extends Component {
  render() {
    const { title, time, url } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={url}
          style={{ width: "20%", height: "100%", resizeMode: "contain" }}
        />
        <View
          style={{
            flexDirection: "column",
            height: "100%",
            width: "90%",
            marginHorizontal: 5,
          }}
        >
          <Text style={{ fontSize: 15 }}>{title}</Text>
          <Text style={{ fontSize: 12 }}>{time}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderColor: "lightgray",
    borderWidth: 2,
    alignItems: "center",
    alignContent: "center",
    margin: 5,
    marginHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 10,
  },
  icon: {
    width: "20%",
    height: "100%",
    margin: 8,
  },
});
