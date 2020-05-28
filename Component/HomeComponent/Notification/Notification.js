import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Info from "./Info";

export default class Notification extends Component {
  render() {
    const { notification } = this.props;
    const n_List = notification.map(({ id, title, time, url }) => (
      <Info title={title} time={time} url={url} key={id} />
    ));
    return (
      <ScrollView
        style={{
          flexDirection: "column",
          height: "50%",
        }}
      >
        <Text
          style={{
            margin: 10,
            marginLeft: 20,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          알림
        </Text>
        {n_List}
      </ScrollView>
    );
  }
}
