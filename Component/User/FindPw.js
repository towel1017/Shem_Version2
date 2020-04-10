import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class Findpw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      phone: null,
    };
  }
  render() {
    const { id, phone } = this.state;
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../Logo_Image/mini_logo_find_pw.png")}
        />
        <TextInput
          name="id"
          style={{
            width: 330,
            height: 50,
            borderColor: "#DBDFE5",
            backgroundColor: "white",
            borderWidth: 1,
            marginBottom: 10,
            fontSize: 18,
          }}
          placeholder="아이디"
          textAlign="center"
          maxLength={16}
          value={id}
          onChangeText={(val) => this.setState({ id: val })}
        />
        <TextInput
          name="phone"
          style={{
            width: 330,
            height: 50,
            borderColor: "#DBDFE5",
            backgroundColor: "white",
            borderWidth: 1,
            marginBottom: 10,
            fontSize: 18,
          }}
          placeholder="전화번호"
          textAlign="center"
          keyboardType="number-pad"
          value={phone}
          onChangeText={(val) => this.setState({ phone: val })}
        />
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.register_btn}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    justifyContent: "center",
  },
  waitingText: {
    fontSize: 23,
    marginBottom: 13,
  },
  logo: {
    height: "35%",
    width: "60%",
    resizeMode: "contain",
    marginTop: -50,
    marginBottom: 50,
  },
  register_btn: {
    alignItems: "center",
    backgroundColor: "#313158",
    paddingHorizontal: 120,
    paddingVertical: 15,
    fontSize: 20,
    color: "white",
    marginTop: 50,
  },
});
