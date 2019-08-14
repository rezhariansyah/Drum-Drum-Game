import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity
} from "react-native";
import Leaderboard from "react-native-leaderboard";
import MenuButton from "../../components/MenuButton";

class HistoryScreen extends Component {
  state = {
    data: [
      { userName: "Joe", highScore: 52 },
      { userName: "Jenny", highScore: 120 }
    ]
  };

  render() {
    return (
      <View style={{backgroundColor:"#0F88F1"}}>
        <View>
          <MenuButton navigation={this.props.navigation} />
        </View>
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={require("../../assets/img/man.png")}
          />
        </View>
        <View style={styles.text1}>
          <Text
            style={{
              fontSize: 20,
              color: "white"
            }}
          >
            Rank{" "}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "white"
            }}
          >
            100
          </Text>
        </View>
        <View style={styles.text2}>
          <Text
            style={{
              fontSize: 20,
              color: "white"
            }}
          >
            Point{" "}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "white"
            }}
          >
            1000
          </Text>
        </View>
        <View>
          <Leaderboard
            data={this.state.data}
            sortBy="highScore"
            labelBy="userName"
          />
        </View>
      </View>
    );
  }
}

export default HistoryScreen;

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    overflow: "hidden",
    marginVertical: "15%",
    marginHorizontal: "40%",
    marginTop:30
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: 100,
    marginBottom: 50
  },
  text: {
    fontSize: 30
  },
  text1: {
    position: "absolute",
    marginVertical: "12%",
    marginHorizontal: "12%",
    marginTop: 75,
  },
  text2: {
    position: "absolute",
    marginVertical: "12%",
    marginLeft: "73%",
    marginTop: 75,
  }
});
