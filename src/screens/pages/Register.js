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
import { registerUser } from "../../config/redux/Actions/user";

class Register extends Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: "",
      fullname: ""
    };
  }

  register = async () => {
    let data = {
      email: this.state.email,
      fullname: this.state.fullname,
      password: this.state.password,
    }
    console.log(data)
    await this.props.dispatch(registerUser(data))
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={styles.container}>
        <BackToHome navigation={this.props.navigation} />

        <View style={{marginBottom:20}}>
            <Text style={{fontSize:20}}>Register Form</Text>
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require("../../assets/img/boy.png")}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Full Name"
            underlineColorAndroid="transparent"
            onChangeText={fullname => this.setState({ fullname })}
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
          onPress={() => this.register()}
        >
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    userList: state.userList
  };
};
export default connect(mapStateToProps)(Register);

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
