import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userView}>
          <TouchableOpacity activeOpacity={0.99}>
            <View style={styles.iconView}>
              <FontAwesome5
                name="user"
                size={26}
                color="white"
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.userTextView}>
            <Text style={styles.homeText}>MYHOME</Text>
            <Text style={styles.moreText}>우리집 정보 보기</Text>
          </View>
          <TouchableOpacity style={styles.aiView} activeOpacity={0.99}>
            <Text style={styles.aiText}>AI 매니저</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.elecView}></View>
        <View style={styles.secView}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
  },
  userView: {
    flex: 0.1,
    flexDirection: "row",
    marginTop: 50,
    marginHorizontal: 35,
    paddingBottom: 20,
    borderBottomColor: "#CDCDCD",
    borderBottomWidth: 1,
  },
  elecView: { flex: 0.5 },
  secView: { flex: 0.4 },
  iconView: {
    flex: 0.1,
  },
  icon: {
    backgroundColor: "#83C9AE",
    borderRadius: 200,
    padding: 20,
    paddingVertical: 18,
  },
  userTextView: {
    flex: 0.68,
    alignSelf: "center",
    marginLeft: 8,
    paddingRight: 20,
  },
  homeText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#2EBF80",
  },
  moreText: {
    color: "#A5A5A5",
    fontWeight: "bold",
    fontSize: 12,
  },
  aiView: {
    flex: 0.4,
    alignSelf: "center",
    borderRadius: 18,
    padding: 7,
    paddingVertical: 15,
    backgroundColor: "#41A07C",
  },
  aiText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
