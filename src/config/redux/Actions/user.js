import Axios from "axios";
import urlApi from "../../urlAPI/urlAPI";
import { AsyncStorage } from "react-native";

export const registerUser = data => {
  // console.log(`dicoba dicoba`, data[0])
  return {
    type: "REGISTER_USER",
    payload: Axios.post(urlApi + `/user/register`, data)
  };
};

export const userLogin = (data) => {
  return {
      type: 'LOGIN_USER',
      payload: Axios.post(`${urlApi}/user/login`, data, {
          headers: {
              "authorization": "welcometoapp",
          }
      }).then( res => {
          const token = res.data.result.token;
          const id_user = res.data.result.id_user.toString();
          const fullname = res.data.result.fullname;
          const email = res.data.result.email;
          const role = res.data.result.role;
  
          AsyncStorage.setItem('id_user', id_user);
          AsyncStorage.setItem('name', fullname);
          AsyncStorage.setItem('email', email);
          AsyncStorage.setItem('token', token);
          AsyncStorage.setItem('role', role);
      })
  }

};

//get all user
export const highestScore = () => {
  return {
    type : "HIGHEST_SCORE",
    payload : Axios.get(urlApi + '/score')
  }
}