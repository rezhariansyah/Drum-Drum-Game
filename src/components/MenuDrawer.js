import React, { Component } from "react";
import {
  Platform,
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  AsyncStorage,
  Alert
} from "react-native";
import { NavigationEvents } from "react-navigation";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

class MenuDrawer extends Component {
  state = {
    token: null,
    email: "",
    name: "",
    id_user: ""
  };
  constructor(props) {
    super(props);
    AsyncStorage.getItem("name").then(value => {
      this.setState({ name: value });
    });
    AsyncStorage.getItem("token").then(value => {
      this.setState({ token: value });
    });
    AsyncStorage.getItem("email").then(value => {
      this.setState({ email: value });
    });
  }

  navLink(nav, text) {
    return (
      <TouchableOpacity
        style={{ height: 50 }}
        onPress={() => this.props.navigation.navigate(nav)}
      >
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const del = async () => {
      AsyncStorage.removeItem("name");
      AsyncStorage.removeItem("token");
      AsyncStorage.removeItem("email").then(() => {
        this.setState({ token: null });
        Alert.alert("Logout", "Logout Success", [
          { text: "OK", onPress: () => this.props.navigation.navigate("Home") }
        ]);
      });
    };
    console.log(this.state.token)
    return (
      <View style={styles.container}>
        
        <View style={styles.topLink}>
          <View style={styles.profile}>
            <View style={styles.imageView}>
              <Image
                style={{ width: 150, height: 150, marginBottom: 20 }}
                source={require("../assets/img/man.png")}
              />
              {this.state.token == null ? (
                <View style={{ alignItems: "center" }}>
                  <Text style={{ color: "white" }}>Full Name</Text>
                  <Text style={{ color: "white" }}>Email</Text>
                </View>
              ) : (
                <View>
                  <Text style={{ color: "white" }}>{this.state.name}</Text>
                  <Text style={{ color: "white" }}>{this.state.email}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
        <View style={styles.bottomLink}>
          <NavigationEvents
            onWillFocus={() =>
              AsyncStorage.getItem("token").then(value => {
                this.setState({ token: value });
              })
            }
          />
          {this.navLink("Settings", "Settings")}
          {this.state.token == null ? (
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Login</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={del.bind(this)}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Logout</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

export default MenuDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray"
  },
  link: {
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: "left"
  },
  topLink: {
    height: 300,
    backgroundColor: "#0F88F1"
  },
  bottomLink: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 400,
    color: "red"
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 25,
    borderBottomWidth: 1,
    borderColor: "grey"
  },
  imageView: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  buttonContainer: {
    backgroundColor: "#0F88F1",
    marginTop: 20,
    height: 40,
    borderRadius: 20,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal:"20%"
  }
});
