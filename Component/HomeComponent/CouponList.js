import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CouponInfo from "./CouponInfo";
import { ScrollView } from "react-native-gesture-handler";

export default class CouponList extends Component {
  render() {
    const { coupon, searchInput } = this.props;
    const search_coupon = coupon.filter((c) => {
      return c.name.indexOf(searchInput) > -1;
    });
    const List = search_coupon.map(({ id, image, name, exp, user, money }) => (
      <CouponInfo
        id={id}
        image={image}
        name={name}
        exp={exp}
        user={user}
        money={money}
        key={id}
      />
    ));
    return <ScrollView style={styles.container}>{List}</ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "column",
    height: "50%",
  },
  waitingText: {
    fontSize: 23,
    marginBottom: 13,
  },
});
