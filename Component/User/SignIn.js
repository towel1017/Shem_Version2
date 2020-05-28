import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Axios from "axios";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      pw: null,
      re_pw: null,
      email: null,
      nick: null,
      phone: null,
    };
  }
  handleUserPlus = () => {
    const { id, pw, nick, email, phone } = this.state;
    if (this.state.pw === this.state.re_pw) {
      this.userPlus(id, pw, nick, email, phone);
    } else {
      alert("비밀번호가 다릅니다");
    }
  };
  userPlus = (id, pw, nick, email, phone) => {
    fetch("http://192.168.0.4:8000/account/sign-up/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        pw: pw,
        nickname: nick,
        email: email,
        phonenum: phone,
      }),
    }).then((res) => console.log(res));
  };
  render() {
    const { id, pw, re_pw, nick, phone, email } = this.state;
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../Logo_Image/mini_logo_register.png")}
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
          name="pw"
          style={{
            width: 330,
            height: 50,
            borderColor: "#DBDFE5",
            backgroundColor: "white",
            borderWidth: 1,
            marginBottom: 10,
            fontSize: 18,
          }}
          secureTextEntry={true}
          placeholder="비밀번호"
          textAlign="center"
          maxLength={20}
          value={pw}
          onChangeText={(val) => this.setState({ pw: val })}
        />
        <TextInput
          name="re_pw"
          style={{
            width: 330,
            height: 50,
            borderColor: "#DBDFE5",
            backgroundColor: "white",
            borderWidth: 1,
            marginBottom: 10,
            fontSize: 18,
          }}
          secureTextEntry={true}
          placeholder="비밀번호 재입력"
          textAlign="center"
          maxLength={20}
          value={re_pw}
          onChangeText={(val) => this.setState({ re_pw: val })}
        />
        <TextInput
          name="email"
          style={{
            width: 330,
            height: 50,
            borderColor: "#DBDFE5",
            backgroundColor: "white",
            borderWidth: 1,
            marginBottom: 10,
            fontSize: 18,
          }}
          placeholder="이메일"
          textAlign="center"
          maxLength={50}
          value={email}
          onChangeText={(val) => this.setState({ email: val })}
        />
        <TextInput
          name="nick"
          style={{
            width: 330,
            height: 50,
            borderColor: "#DBDFE5",
            backgroundColor: "white",
            borderWidth: 1,
            marginBottom: 10,
            fontSize: 18,
          }}
          placeholder="닉네임"
          textAlign="center"
          maxLength={10}
          value={nick}
          onChangeText={(val) => this.setState({ nick: val })}
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
        <TouchableOpacity activeOpacity={0.8} onClick={this.handleUserPlus}>
          <Text style={styles.register_btn}>회원가입</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3f3",
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
  },
  register_btn: {
    alignItems: "center",
    backgroundColor: "#313158",
    paddingHorizontal: 130,
    paddingVertical: 15,
    fontSize: 23,
    color: "white",
    marginTop: 50,
  },
});
