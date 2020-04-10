import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';

export default class Changepw extends Component {
  constructor(props) {
      super(props);
      this.state = {
          pw : null,
          re_pw : null
      }
  }
  handleChange = (e) => {
      this.setState({
          [e.target.name] : e.target.value
      })
  }
  render() {
    const {pw, re_pw} = this.state;
    return (
        <View style={styles.container}>
           <Image 
            style={styles.logo}
            source={require('../../Logo_Image/mini_logo_change_pw.png')}
          />
          <TextInput
            style={{width: 330, height: 50, borderColor: '#DBDFE5', backgroundColor : "white", borderWidth: 1, marginBottom: 10, fontSize: 18 }}
            placeholder="비밀번호"
            secureTextEntry={true}
            textAlign="center"
            name="pw"
            value={pw}
            onChange={this.handleChange}
          />
          <TextInput
            style={{width: 330, height: 50, borderColor: '#DBDFE5', backgroundColor : "white", borderWidth: 1, marginBottom: 10, fontSize: 18 }}
            secureTextEntry={true}
            placeholder="비밀번호 확인"
            textAlign="center"
            name="re_pw"
            value={re_pw}
            onChange={this.handleChange}
          />
          <TouchableOpacity 
            activeOpacity={0.8}>
          <Text style={styles.register_btn}>
              비밀번호 찾기
          </Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  waitingText : {
    fontSize : 23,
    marginBottom : 13,
  },
  logo : {
    height:'35%',width:'60%',resizeMode:'contain',
    marginTop : -50,
    marginBottom: 50
  },
  register_btn : {
    alignItems : 'center',
    backgroundColor : "#313158",
    paddingHorizontal: 120,
    paddingVertical: 15,
    fontSize: 20,
    color: "white",
    marginTop: 50
  }
});
