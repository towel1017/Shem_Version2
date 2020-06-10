import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Navigation } from "react-native-navigation";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const startText = "우리집 관리를\n시작해 볼까요?";
    return (
      <View style={styles.container}>
        <AntDesign
          name="close"
          size={30}
          color="black"
          style={styles.back}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={styles.titleView}>
          <Text style={styles.title}>{startText}</Text>
        </View>
        <View style={styles.introView}>
          <Text>현재 회원등록이 필요해요:)</Text>
        </View>
        <View styles={styles.inputView}>
          <TextInput
            placeholder="이름을 입력해 주세요"
            style={styles.textInput}
          />
          <TextInput
            placeholder="이메일을 입력해 주세요"
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity style={styles.btnCon}>
          <Text style={styles.conText}>계속하기</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 20,
  },
  back: {
    marginTop: 40,
  },
  title: {
    flex: 0.5,
    fontSize: 40,
    fontWeight: "bold",
  },
  textInput: {
    fontSize: 30,
    marginVertical: 12,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#868686",
  },
  titleView: {
    flex: 0.5,
    marginTop: 100,
    marginLeft: 20,
  },
  introView: {
    marginBottom: 10,
  },
  inputView: {
    flex: 0.3,
  },
  btnCon: {
    flex: 0.13,
    borderWidth: 2,
    borderColor: "#868686",
    marginTop: 30,
    alignSelf: "center",
    paddingHorizontal: 140,
    paddingVertical: 8,
    marginTop: 150,
  },
  conText: {
    marginTop: 10,
    color: "#868686",
    textAlign: "center",
    fontSize: 23,
  },
});
