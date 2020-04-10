import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Animated,
  TextInput,
} from "react-native";
import CouponList from "./CouponList";
import Mypage from "./Mypage/Mypage";
import Notification from "./Notification/Notification";

import Search from "./Search/Search";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Animated.Value(0),
      footerValue: true,
      position: new Animated.ValueXY({ x: 0, y: 0 }),
      searchInput: "",
      clicked: {
        info: "home",
      },
      notification: [
        {
          id: 1,
          title: "찜 해둔 쿠폰이 올라왔어요!\n어서 구매하세요!",
          time: "3:22",
        },
        {
          id: 2,
          title: "올려둔 쿠폰이 판매되었어요!\n다른 것도 올려보세요!",
          time: "5:32",
        },
        {
          id: 3,
          title: "치킨쿠폰은 어떤가요?\n치킨쿠폰이 많이 등록되어있어요!",
          time: "3:22",
        },
      ],
      coupon: [
        {
          id: 1,
          image: "+",
          name: "베스킨라벤스 뭐시기 쿠폰",
          exp: "2020 - 05 - 23",
          user: "tlsdltkr2530",
          money: 20000,
        },
        {
          id: 2,
          image: "+",
          name: "도윤이와 뽀뽀권",
          exp: "2020 - 01 - 14",
          user: "chaow1425",
          money: 20000,
        },
        {
          id: 3,
          image: "+",
          name: "하악하악 책 쿠폰",
          exp: "2020 - 10 - 31",
          user: "dudwo4448",
          money: 20000,
        },
        {
          id: 4,
          image: "+",
          name: "여러가지 쿠폰들",
          exp: "2020 - 07 - 31",
          user: "aalset104",
          money: 20000,
        },
        {
          id: 5,
          image: "+",
          name: "영재축산 뽑기권",
          exp: "2020 - 10 - 31",
          user: "alqprof",
          money: 20000,
        },
        {
          id: 6,
          image: "+",
          name: "준명이와 햄버거 푸파 쿠폰",
          exp: "2022 - 11 - 01",
          user: "dudwo4448",
          money: 20000,
        },
      ],
    };
  }

  footerOpe = () => {
    this.setState({
      footerValue: !this.state.footerValue,
    });
  };
  handleSearchChange = (val) => {
    this.setState({
      searchInput: val,
    });
  };
  render() {
    const { info } = this.state.clicked;
    const { clicked } = this.state;
    const componentChange = () => {
      switch (clicked.info) {
        case "home":
          return (
            <CouponList
              coupon={this.state.coupon}
              clicked={clicked}
              searchInput={this.state.searchInput}
            />
          );
        case "notification":
          return <Notification notification={this.state.notification} />;
        case "user":
          return <Mypage />;
        case "search":
          return (
            <Search
              searchInput={this.state.searchInput}
              changeSearch={this.handleSearchChange}
            />
          );
      }
    };
    return (
      <View style={styles.container}>
        {this.state.footerValue === false ? null : (
          <View style={styles.header}>
            <Text style={styles.headerText}>어이쿠</Text>
          </View>
        )}
        <View style={styles.main}>{componentChange()}</View>
        <Animated.View style={styles.footer}>
          <View style={styles.iconView}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  clicked: { info: "home" },
                });
              }}
              activeOpacity={0.9}
              style={{
                height: "50%",
                width: "20%",
                resizeMode: "contain",
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  resizeMode: "contain",
                }}
                source={
                  info === "home"
                    ? require("../../Logo_Image/home_logo/choice_icon1.png")
                    : require("../../Logo_Image/home_logo/icon1.png")
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  clicked: { info: "search" },
                });
              }}
              activeOpacity={0.9}
              style={{
                height: "50%",
                width: "20%",
                resizeMode: "contain",
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  resizeMode: "contain",
                }}
                source={
                  info === "search"
                    ? require("../../Logo_Image/home_logo/choice_icon2.png")
                    : require("../../Logo_Image/home_logo/icon2.png")
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  clicked: { info: "" },
                });
              }}
              activeOpacity={0.9}
              style={{
                height: "50%",
                width: "20%",
                resizeMode: "contain",
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  resizeMode: "contain",
                }}
                source={require("../../Logo_Image/home_logo/icon4.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  clicked: { info: "notification" },
                });
              }}
              activeOpacity={0.9}
              style={{
                height: "50%",
                width: "20%",
                resizeMode: "contain",
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  resizeMode: "contain",
                }}
                source={
                  info === "notification"
                    ? require("../../Logo_Image/home_logo/choice_icon3.png")
                    : require("../../Logo_Image/home_logo/icon3.png")
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  clicked: { info: "user" },
                });
              }}
              activeOpacity={0.9}
              style={{
                height: "50%",
                width: "20%",
                resizeMode: "contain",
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  resizeMode: "contain",
                }}
                source={
                  info === "user"
                    ? require("../../Logo_Image/home_logo/choice_icon5.png")
                    : require("../../Logo_Image/home_logo/icon5.png")
                }
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  headerText: {
    fontSize: 40,
    marginBottom: 13,
    padding: 8,
    color: "#222242",
    marginTop: 24,
  },
  header: {
    height: "10%",
    backgroundColor: "#FAFAFA",
    borderBottomColor: "lightgray",
    borderBottomWidth: 2,
    display: "flex",
  },
  main: {
    height: "82%",
    backgroundColor: "#FAFAFA",
  },
  footer: {
    height: "8%",
    backgroundColor: "#313158",
  },
  iconView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "black",
  },
});
