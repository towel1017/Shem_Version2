import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default class DefaultHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {/*내 정보 보기*/}
        <View style={styles.componentItem}>
          <TouchableOpacity style={styles.ToMypage} activeOpacity={0.99}>
            <View style={{ flex: 1, flexDirection: "row", padding: 20 }}>
              <Image
                source={require("../../img/user.png")}
                style={{ width: "30%", height: "100%", resizeMode: "contain" }}
              />
              <View style={{ width: "70%" }}>
                <Text
                  style={{ fontSize: 23, fontWeight: "bold", color: "black" }}
                >
                  유영재
                </Text>
                <Text
                  style={{ fontSize: 23, fontWeight: "bold", color: "#828282" }}
                >
                  내 정보 보기
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/*보유 쿠폰*/}
        <View style={styles.componentItem}>
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.notifiName}>보유 쿠폰</Text>
              <TouchableOpacity activeOpacity={0.99} style={styles.plusOpe}>
                <Text style={styles.plusText}>+ 더보기</Text>
              </TouchableOpacity>
            </View>
            <View></View>
          </View>
        </View>
        {/** 찜한 쿠폰 */}
        <View style={styles.componentItem}>
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.notifiName}>찜한 쿠폰</Text>
              <TouchableOpacity activeOpacity={0.99} style={styles.plusOpe}>
                <Text style={styles.plusText}>+ 더보기</Text>
              </TouchableOpacity>
            </View>
            <View></View>
          </View>
        </View>
        {/** 알림 */}
        <View style={styles.componentItem}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.notifiName}>알림</Text>
            <TouchableOpacity activeOpacity={0.99} style={styles.plusOpe}>
              <Text style={styles.plusText}>+ 더보기</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/** 하단 쿠폰리스트 선택 바 */}
        <View style={styles.footerBar}>
          <View style={styles.itemView}>
            <View style={styles.lineView}>
              <TouchableOpacity style={styles.item} activeOpacity={0.99}>
                <Image
                  style={styles.itemImage}
                  source={require("../../img/convenience-store.png")}
                />
                <Text style={styles.itemText}>편의점</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item} activeOpacity={0.99}>
                <Image
                  style={styles.itemImage}
                  source={require("../../img/skincare.png")}
                />
                <Text style={styles.itemText}>화장품</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item} activeOpacity={0.99}>
                <Image
                  style={styles.itemImage}
                  source={require("../../img/online-shop.png")}
                />
                <Text style={styles.itemText}>쇼핑몰</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lineView}>
              <TouchableOpacity style={styles.item} activeOpacity={0.99}>
                <Image
                  style={styles.itemImage}
                  source={require("../../img/coffee-cup.png")}
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  카페
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  베이커리
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item} activeOpacity={0.99}>
                <Image
                  style={styles.itemImage}
                  source={require("../../img/food.png")}
                />
                <Text style={styles.itemText}>외식</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item} activeOpacity={0.99}>
                <Image
                  style={styles.itemImage}
                  source={require("../../img/ticket.png")}
                />
                <Text style={styles.itemText}>문화생활</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  componentItem: {
    flex: 0.2,
    height: "20%",
    marginHorizontal: 50,
    marginVertical: 10,
  },
  ToMypage: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "lightgray",
    borderRadius: 20,
  },
  footerBar: {
    flex: 0.4,
    width: "100%",
    height: "40%",
    backgroundColor: "orange",
  },
  itemView: {
    flexDirection: "column",
    margin: 40,
    alignContent: "center",
  },
  lineView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  item: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    margin: 5,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 20,
  },
  itemText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  itemImage: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10,
  },
  notifiName: {
    fontSize: 25,
    fontWeight: "bold",
  },
  plusText: {
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  plusOpe: {
    alignSelf: "flex-end",
  },
});
