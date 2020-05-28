import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
export default class Mypage extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/**프로필 사진 */}
        <View style={styles.profileImage}>
          <Image
            source={require("../../../img/user.png")}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
          <Text
            style={{
              fontSize: 35,
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            유영재
          </Text>
          {/**판매 및 구매 쿠폰 수 */}
          <View style={styles.countView}>
            <View style={styles.count}>
              <Text style={styles.countName}>판매</Text>
              <Text style={styles.countText}>0</Text>
            </View>
            <View style={styles.count}>
              <Text style={styles.countName}>구매</Text>
              <Text style={styles.countText}>0</Text>
            </View>
          </View>
        </View>
        <ScrollView style={{ flex: 0.4, marginTop: 116 }}>
          {/**프로필 */}
          <TouchableOpacity style={setStyle.settingView}>
            <Text style={setStyle.setText}>프로필</Text>
            <Image
              style={{
                flex: 0.1,
                width: "8%",
                height: "60%",
                alignSelf: "center",
                marginRight: 8,
              }}
              source={require("../../../img/right-arrow.png")}
            />
          </TouchableOpacity>
          {/**나의 계좌 */}
          <TouchableOpacity style={setStyle.settingView}>
            <Text style={setStyle.setText}>나의 계좌</Text>
            <Image
              style={{
                flex: 0.1,
                width: "8%",
                height: "60%",
                alignSelf: "center",
                marginRight: 8,
              }}
              source={require("../../../img/right-arrow.png")}
            />
          </TouchableOpacity>
          {/**찜한 쿠폰 */}
          <TouchableOpacity style={setStyle.settingView}>
            <Text style={setStyle.setText}>찜한 쿠폰</Text>
            <Image
              style={{
                flex: 0.1,
                width: "8%",
                height: "60%",
                alignSelf: "center",
                marginRight: 8,
              }}
              source={require("../../../img/right-arrow.png")}
            />
          </TouchableOpacity>
          {/**보유 쿠폰 */}
          <TouchableOpacity style={setStyle.settingView}>
            <Text style={setStyle.setText}>보유 쿠폰</Text>
            <Image
              style={{
                flex: 0.1,
                width: "8%",
                height: "60%",
                alignSelf: "center",
                marginRight: 8,
              }}
              source={require("../../../img/right-arrow.png")}
            />
          </TouchableOpacity>
          {/**1대1 문의 */}
          <TouchableOpacity style={setStyle.settingView}>
            <Text style={setStyle.setText}>1대1 문의</Text>
            <Image
              style={{
                flex: 0.1,
                width: "8%",
                height: "60%",
                alignSelf: "center",
                marginRight: 8,
              }}
              source={require("../../../img/right-arrow.png")}
            />
          </TouchableOpacity>
          {/**설정 */}
          <TouchableOpacity style={setStyle.settingView}>
            <Text style={setStyle.setText}>설정</Text>
            <Image
              style={{
                width: "8%",
                height: "60%",
                alignSelf: "center",
                marginRight: 8,
              }}
              source={require("../../../img/right-arrow.png")}
            />
          </TouchableOpacity>
        </ScrollView>
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
  profileImage: {
    flex: 0.4,
    marginVertical: 30,
  },
  countView: {
    flex: 0.2,
    flexDirection: "row",
  },
  count: {
    width: "50%",
  },
  countName: {
    fontSize: 30,
    textAlign: "center",
  },
  countText: {
    fontSize: 60,
    color: "orange",
    textAlign: "center",
  },
});

const setStyle = StyleSheet.create({
  settingView: {
    borderTopWidth: 0.5,
    borderBottomWidth: 1,
    borderColor: "lightgray",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  setText: {
    fontSize: 28,
    color: "orange",
    padding: 20,
  },
});
