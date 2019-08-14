import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";
import BackToHome from "../../components/BackToHome";
import { connect } from "react-redux";
import { userLogin } from "../../config/redux/Actions/user";
import { withNavigation } from "react-navigation";

class Login extends Component {
  state = {
    data: [],
    email: "",
    password: ""
  };
  constructor(props) {
    super(props);
  }

  render() {
    const Login = () => {
      this.state.data.push({
        email: this.state.email,
        password: this.state.password
      });
      add();
    };
    let add = async () => {
      await this.props.dispatch(userLogin(this.state.data[0])).then(() => {
        Alert.alert("Login", "Login Success", [
          { text: "OK", onPress: () => this.props.navigation.navigate("Home") }
        ]);
      });
    };
    return (
      <View style={styles.container}>
        <BackToHome navigation={this.props.navigation} />
        <View>
          <Image
            style={styles.logoUser}
            source={require("../../assets/img/drum.png")}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require("../../assets/img/letter.png")}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={Login.bind(this)}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text style={{ color: "#15A5E7" }}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    userLogin: state.userLogin
  };
};

export default connect(mapStateToProps)(withNavigation(Login));

const styles = StyleSheet.create({
  logoUser: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    marginBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#00b5ec"
  },
  loginText: {
    color: "white"
  }
});
