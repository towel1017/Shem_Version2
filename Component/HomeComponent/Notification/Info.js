import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class Info extends Component {
  render() {
    const { title, time } = this.props;
    return (
      <View style={styles.container}>
        <Icon name="md-star" size={80} style={styles.icon} />
        <View
          style={{
            flexDirection: "column",
            height: "100%",
            width: "90%",
            margin: 5,
          }}
        >
          <Text style={{ fontSize: 15, marginVertical: 5 }}>{title}</Text>
          <Text style={{ fontSize: 12, marginVertical: 5 }}>{time}</Text>
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
    borderWidth: 1,
    alignItems: "center",
    alignContent: "center",
  },
  icon: {
    width: "20%",
    height: "100%",
    margin: 8,
    marginHorizontal: 18,
  },
});
