import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Leaderboard from "react-native-leaderboard";
import { connect } from "react-redux";
import { highestScore } from "../../config/redux/Actions/user";


class Leaderboards extends Component {
  state = {
    userList: [],
    index: '',
    id_user: null,
    name: '',
    scores: ''
  };

  componentDidMount = async () => {
    await this.props.dispatch(highestScore());
    this.setState({
      userList: this.props.userList,
    });
    AsyncStorage.getItem('id_user').then((value) => {
      this.setState({ id_user: value })
    });
    AsyncStorage.getItem('fullname').then((value) => {
      this.setState({ fullname: value })
    });
    this.subs = [
      this.props.navigation.addListener('willBlur', async () => {
        await this.props.dispatch(highestScore());
        this.setState({
          userList: this.props.userList,
        })
      }),
      this.props.navigation.addListener('willFocus', async () => {
        await this.props.dispatch(highestScore());
        this.setState({
          userList: this.props.userList,
        })
      }),
    ]
  };

  componentWillUnmount = () => {
    this.subs.forEach(sub => {
      sub.remove();
    });
  };

  render() {
    console.log(this.state.userList);
    
    return (
      <ScrollView>
        <View style={{ backgroundColor: "#0F88F1" }}>
          <View style={styles.container}>
            <Image
              style={styles.img}
              source={require("../../assets/img/man.png")}
            />
            <Text style={{color:"white", fontSize:20}}>Lord {this.state.userList[0] && this.state.userList[0].fullname}</Text>
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
                color: "white",
                marginLeft:15
              }}
            >
              1
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
              {this.state.userList[0] && this.state.userList[0].score}
            </Text>
          </View>
          <View>
            <Leaderboard
              data={this.state.userList}
              sortBy="score"
              labelBy="fullname"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    userList: state.User.userList[0]
  };
};
export default connect(mapStateToProps)(Leaderboards);

const styles = StyleSheet.create({
  img: {
    width: 110,
    height: 110,
    borderRadius: 100,
    overflow: "hidden",
    marginBottom:10,
    marginHorizontal: "40%",
    marginTop: 50
  },
  container: {
    flex: 1,
    backgroundColor: "#0F88F1",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginBottom: 20
  },
  text: {
    fontSize: 30
  },
  text1: {
    position: "absolute",
    marginVertical: "12%",
    marginHorizontal: "12%",
    marginTop: 75
  },
  text2: {
    position: "absolute",
    marginVertical: "12%",
    marginLeft: "73%",
    marginTop: 75
  }
});
