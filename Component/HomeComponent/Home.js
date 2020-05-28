import React, { Component, useContext, createContext } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CouponList from "./CouponList";
import Mypage from "./Mypage/Mypage";
import Notification from "./Notification/Notification";
import Search from "./Search/Search";
import PlusForm from "./PlusCoupon/Form";
import DefaultHome from "./DefaultHome";

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
          url: require("../../img/star.png"),
          title:
            "닉네임 님의 가입을 축하드립니다!\n어이쿠로 쿠폰을 자유롭게 거래해보세요!",
          time: "09:04",
        },
        {
          id: 2,
          url: require("../../img/meat.png"),
          title: "치킨쿠폰은 어떤가요?\n치킨쿠폰이 많이 등록되어있어요!",
          time: "16:12",
        },
        {
          id: 3,
          url: require("../../img/hand.png"),
          title: "등록한 쿠폰이 판매되었어요!\n다른 쿠폰도 올려보세요!",
          time: "21:47",
        },
        {
          id: 4,
          url: require("../../img/X.png"),
          title:
            "등록한 쿠폰기간이 만료되었습니다.\n자동으로 게시글이 내려가게 됩니다.",
          time: "13:25",
        },
      ],
      coupon: [[], [], [], [], [], []],
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
          return <DefaultHome />;
        case "notification":
          return <Notification notification={this.state.notification} />;
        case "user":
          return <Mypage />;
        case "plus":
          return <PlusForm />;
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
            <TouchableOpacity style={{ alignSelf: "flex-start" }}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "contain",
                }}
                source={require("../../img/left-arrow.png")}
              />
            </TouchableOpacity>
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
              activeOpacity={0.99}
              style={styles.iconTouch}
            >
              <Image
                style={styles.iconImage}
                source={
                  info === "home"
                    ? require("../../img/icon/c_home.png")
                    : require("../../img/icon/home.png")
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  clicked: { info: "search" },
                });
              }}
              activeOpacity={0.99}
              style={styles.iconTouch}
            >
              <Image
                style={styles.iconImage}
                source={
                  info === "search"
                    ? require("../../img/icon/c_search.png")
                    : require("../../img/icon/search.png")
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  clicked: { info: "plus" },
                });
              }}
              activeOpacity={0.99}
              style={styles.iconTouch}
            >
              <Image
                style={styles.iconImage}
                source={require("../../img/icon/plus.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  clicked: { info: "notification" },
                });
              }}
              activeOpacity={0.99}
              style={styles.iconTouch}
            >
              <Image
                style={styles.iconImage}
                source={
                  info === "notification"
                    ? require("../../img/icon/c_notification.png")
                    : require("../../img/icon/notification.png")
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  clicked: { info: "user" },
                });
              }}
              activeOpacity={0.99}
              style={styles.iconTouch}
            >
              <Image
                style={styles.iconImage}
                source={
                  info === "user"
                    ? require("../../img/icon/c_user.png")
                    : require("../../img/icon/user.png")
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
  header: {
    flex: 0.05,
    backgroundColor: "#FAFAFA",
    borderBottomColor: "lightgray",
    borderBottomWidth: 2,
    display: "flex",
  },
  main: {
    flex: 0.87,
    backgroundColor: "#FAFAFA",
  },
  footer: {
    flex: 0.08,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderTopWidth: 2,
    borderTopColor: "lightgray",
  },
  iconTouch: {
    flex: 0.2,
    resizeMode: "contain",
  },
  iconView: {
    flex: 1,
    marginLeft: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    borderColor: "black",
  },
  iconImage: {
    height: "60%",
    width: "60%",
    resizeMode: "contain",
  },
});
