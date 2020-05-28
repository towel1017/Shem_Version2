import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Picker,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import DatePicker from "react-native-datepicker";

const today = new Date();

export default class PlusForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      cost: 0,
      price: 0,
      pin: null,
      exd: null,
      category: "normal",
      date: null,
    };
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {/*상품*/}
        <View style={styles.itemView}>
          <Text style={styles.name}>상품</Text>
          <View style={styles.ImageExp}>
            <TouchableOpacity style={styles.ImageForm}>
              <View>
                <Text
                  style={{
                    fontSize: 40,
                    color: "#FF8A00",
                    textAlign: "center",
                  }}
                >
                  +
                </Text>
                <Text style={styles.plusText}>사진</Text>
              </View>
            </TouchableOpacity>
            <TextInput
              name="id"
              style={styles.loreForm}
              placeholder="상품설명"
              textAlign="left"
            />
          </View>
        </View>
        {/* 가격*/}
        <View style={styles.itemView}>
          <Text style={styles.name}>가격</Text>
          <View style={priceStyle.priceForm}>
            <Text style={priceStyle.money}>원가</Text>
            <TextInput
              style={priceStyle.moneyInput}
              placeholder="금액"
              keyboardType="number-pad"
            />
            <Text style={priceStyle.won}>원</Text>
          </View>
          <View style={priceStyle.priceForm}>
            <Text style={priceStyle.money}>정가</Text>
            <TextInput
              style={priceStyle.moneyInput}
              placeholder="금액"
              keyboardType="number-pad"
            />
            <Text style={priceStyle.won}>원</Text>
          </View>
        </View>
        {/* PIN번호*/}
        <View style={styles.itemView}>
          <Text style={styles.name}>PIN 번호</Text>
          <View style={styles.pinView}>
            <TextInput
              style={styles.pinInput}
              placeholder="번호"
              placeholderTextColor="black"
              keyboardType="number-pad"
            />
          </View>
        </View>
        {/* 유효기간*/}
        <View style={styles.itemView}>
          <Text style={styles.name}>유효기간</Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "lightgray",
              flexDirection: "row",
            }}
          >
            <DatePicker
              style={{ width: 200 }}
              mode="date"
              date={this.state.date}
              format="YYYY-MM-DD"
              minDate={today}
              maxDate="2100-12-31"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                },
              }}
              style={{
                width: "90%",
                borderWidth: 0,
              }}
              placeholder="유효기간"
              onDateChange={(val) => this.setState({ date: val })}
            />
            <Text style={{ fontSize: 20 }}>까지</Text>
          </View>
        </View>
        {/* 카테고리*/}
        <View style={styles.itemView}>
          <Text style={styles.name}>카테고리</Text>
          <Picker
            style={{ width: "100%" }}
            prompt="카테고리를 선택해주세요"
            selectedValue={this.state.category}
            onValueChange={(val) => this.setState({ category: val })}
          >
            <Picker.Item label="없음" value="normal" />
            <Picker.Item label="편의점" value="comStore" />
            <Picker.Item label="화장품" value="faceshop" />
            <Picker.Item label="쇼핑몰" value="shopping" />
            <Picker.Item label="카페/베이커리" value="cafe" />
            <Picker.Item label="외식" value="rest" />
            <Picker.Item label="문화생활" value="ticket" />
          </Picker>
        </View>
        <View style={styles.commitView}>
          <TouchableOpacity style={styles.cancelButton} activeOpacity={0.99}>
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                fontWeight: "bold",
                color: "#FDB866",
              }}
            >
              취소
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.commitButton} activeOpacity={0.99}>
            <Text style={styles.btnText}>등록</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
  },
  itemView: {
    flex: 0.2,
    height: "20%",
    margin: 15,
    marginVertical: 25,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
  },
  ImageExp: {
    flex: 1,
    flexDirection: "row",
    marginTop: 8,
  },
  ImageForm: {
    width: 90,
    height: 90,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "lightgray",
    textAlign: "center",
    textAlignVertical: "center",
  },
  loreForm: {
    width: "75%",
    height: 90,
    borderColor: "#A4A4A4",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    fontSize: 18,
    paddingHorizontal: 8,
  },
  plusText: {
    textAlign: "center",
    color: "#FF8A00",
    fontSize: 20,
  },
  pinView: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginTop: 10,
  },
  pinInput: {
    textAlign: "left",
    fontSize: 20,
  },
  commitView: {
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
  },
  cancelButton: {
    flex: 3.5,
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    margin: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "orange",
  },
  commitButton: {
    flex: 6.5,
    backgroundColor: "#FDB866",
    paddingVertical: 15,
    margin: 8,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});

const priceStyle = StyleSheet.create({
  priceForm: {
    flexDirection: "row",
    borderColor: "#BEC2C4",
    borderBottomWidth: 1,
    margin: 10,
  },
  money: {
    fontSize: 20,
  },
  won: {
    fontSize: 20,
    color: "#FF8A00",
  },
  moneyInput: {
    width: "85%",
    textAlign: "right",
    marginRight: 8,
    fontSize: 20,
  },
});
