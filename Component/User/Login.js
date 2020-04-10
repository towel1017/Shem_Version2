import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Home from "../HomeComponent/Home";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [
        {
          id: "tlsdltkr2530",
          pw: "tlsdltkr44",
          nick: "신선한 새싹",
          phone: "01051412531",
        },
        { id: "dudwo4448", pw: "spawn12358", nick: "CK", phone: "01094741871" },
      ],
      input_id: null,
      password: null,
      cur: true,
      c_user: null,
    };
  }
  handleLogin = () => {
    const { navigation } = this.props;
    const { input_id, password, userInfo } = this.state;
    const c_user = userInfo.find(
      (user) => input_id === user.id && password === user.pw
    );
    if (c_user !== undefined) {
      this.setState({ cur: true, c_user: c_user });
    } else {
      alert("아이디나 비밀번호가 다릅니다");
    }
  };
  handleChangeUser = (user) => () => this.props.changeUser(user);
  render() {
    const { navigation } = this.props;
    const { container, logo, login_btn, facebook, google, footer } = styles;
    return this.state.cur ? (
      <Home />
    ) : (
      <View style={container}>
        <Image
          style={logo}
          source={require("../../Logo_Image/mini_logo1.png")}
        />
        <TextInput
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
          label="id"
          value={this.state.input_id}
          onChangeText={(val) => this.setState({ input_id: val })}
        />
        <TextInput
          style={{
            width: 330,
            height: 50,
            borderColor: "#DBDFE5",
            backgroundColor: "white",
            borderWidth: 1,
            marginBottom: 50,
            fontSize: 18,
          }}
          placeholder="비밀번호"
          label="password"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(val) => this.setState({ password: val })}
        />
        <TouchableOpacity
          style={login_btn}
          activeOpacity={0.8}
          onPress={this.handleLogin}
        >
          <Text style={{ color: "white", fontSize: 23 }}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={facebook} activeOpacity={0.8}>
          <Image
            style={{ width: 30, height: 30, marginRight: 80, marginLeft: 10 }}
            source={require("../../facebook.png")}
          />
          <Text style={{ color: "white", fontSize: 20 }}>페이스북 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={google} activeOpacity={0.5}>
          <Image
            style={{ width: 30, height: 30, marginRight: 90, marginLeft: 20 }}
            source={require("../../google.png")}
          />
          <Text style={{ color: "black", fontSize: 20 }}>구글 로그인</Text>
        </TouchableOpacity>
        <View style={footer}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Signin")}
          >
            <Text>회원가입</Text>
          </TouchableOpacity>
          <Text> / </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate("FindPw");
            }}
          >
            <Text>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F3F3F3",
    alignItems: "center",
  },
  logo: {
    height: "45%",
    width: "70%",
    resizeMode: "contain",
    marginTop: 30,
  },
  login_btn: {
    alignItems: "center",
    backgroundColor: "#313158",
    paddingHorizontal: 140,
    paddingVertical: 15,
  },
  facebook: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#3A5DAA",
    paddingRight: 100,
    paddingVertical: 15,
    marginTop: 8,
  },
  google: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    paddingRight: 115,
    paddingVertical: 15,
    marginTop: 8,
  },
  footer: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 5,
  },
});
