import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class FooterDot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { currentNum } = this.props;
    const { footerDot, current } = styles;
    return (
      <View style={styles.container}>
        <View style={currentNum === 1 ? current : footerDot} />
        <View style={currentNum === 2 ? current : footerDot} />
        <View style={currentNum === 3 ? current : footerDot} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  current: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: "#84E8A6",
  },
  footerDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: "#E2E2E2",
  },
});
