import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      searchHistory: ["gs25", "세븐일레븐", "공차", "아마스빈"],
    };
  }
  _getStyle() {
    return {
      flex: 0.08,
      height: this.state.value,
      backgroundColor: "#ffffff",
      opacity: 1,
      flexDirection: "row",
      borderWidth: 3,
      borderColor: "#FF8A00",
      borderRadius: 10,
      margin: 30,
    };
  }
  render() {
    return (
      <View style={styles.kinds}>
        <View style={this._getStyle()}>
          <View
            style={{
              flex: 0.15,
              alignContent: "center",
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <Image
              style={{ width: "70%", height: "70%", resizeMode: "contain" }}
              source={require("../../../img/icon/bar_search.png")}
            />
          </View>
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
        </View>
        <View style={styles.searchHistory}>
          <View style={{ margin: 20, flex: 0.1 }}>
            <Text style={{ fontSize: 21, fontWeight: "bold" }}>
              최근 검색어
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            {this.state.searchHistory.map((word) => (
              <View style={styles.wordView} key={word}>
                <Text style={styles.word}>{word}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  kinds: {
    flex: 1,
    flexDirection: "column",
  },
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  valueBox: {
    flex: 1,
    backgroundColor: "white",
    alignSelf: "stretch",
    textAlign: "center",
    paddingVertical: "10%",
  },
  value: {
    textAlign: "center",
    fontSize: 15,
  },
  searchHistory: {
    flex: 0.92,
    borderTopColor: "lightgray",
    borderTopWidth: 2,
    flexDirection: "column",
  },
  wordView: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "lightgray",
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginHorizontal: 5,
  },
  word: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
  },
});
