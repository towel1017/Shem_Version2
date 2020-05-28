import React from "react";

const userContext = React.createContext({
  userInfo: {
    id: "",
    pw: "",
    nick: "",
    email: "",
    phone: "",
  },
  handleChangeUser: () => {},
  handleLogin: () => {},
});

const registerContext = React.createContext({
  id: "",
  password: "",
  repw: "",
  email: "",
  nick: "",
  userPlus: () => {},
});

const homeContext = React.createContext({
  notification: [],
  coupon: [],
});
