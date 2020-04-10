import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Info from "./Info";

export default class Notification extends Component {
  render() {
    const { notification } = this.props;
    const n_List = notification.map(({ id, title, time }) => (
      <Info title={title} time={time} key={id} />
    ));
    return (
      <ScrollView
        style={{
          flexDirection: "column",
          height: "50%",
        }}
      >
        {n_List}
      </ScrollView>
    );
  }
}
