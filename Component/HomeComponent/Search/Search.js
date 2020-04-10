import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Picker } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };
  }
  _getStyle() {
    return {
      width: "100%",
      height: this.state.value,
      backgroundColor: "#ffffff",
      opacity: 1,
      flexDirection: "row",
      borderWidth: 1,
      borderColor: "lightgray",
    };
  }
  render() {
    return (
      <View style={this._getStyle()}>
        <Icon name="md-search" size={30} style={{ padding: 10 }} />
        <TextInput
          style={{
            flex: 1,
            fontSize: 20,
          }}
          placeholder="검색"
          underlineColorAndroid="transparent"
          value={this.props.searchInput}
          onChangeText={(val) => this.props.changeSearch(val)}
        />
        <Picker>
          <Picker.Item label="음식" value="food" />
          <Picker.Item label="" value="food" />
          <Picker.Item label="음식" value="food" />
        </Picker>
      </View>
    );
  }
}

const Styles = StyleSheet.create({});
