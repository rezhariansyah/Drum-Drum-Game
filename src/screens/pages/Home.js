import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
  AsyncStorage
} from "react-native";
import { patchScore } from "../../config/redux/Actions/score";
import MenuButton from "../../components/MenuButton";
import Sound from "react-native-sound";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pattern: [],
      clicked: [],
      cekCombo: "",
      currentScore: 0,
      score: 0,
      id_user: 0
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("name").then(value => {
      this.setState({ name: value });
    });
    AsyncStorage.getItem("token").then(value => {
      this.setState({ token: value });
    });
    AsyncStorage.getItem("email").then(value => {
      this.setState({ email: value });
    });
    AsyncStorage.getItem("id_user", (error, result) => {
      this.setState({ id_user: result });
      console.warn(result);
    });
    var pattern = this.pattern();
    this.setState({ pattern: pattern });
  }

  getIndex = index => {
    this.state.clicked.push(index);

    for (let i = 0; i < this.state.clicked.length; i++) {
      if (
        Number(String(this.state.pattern).split(",")[i]) ===
        Number(this.state.clicked[i])
      ) {
        if (i === String(this.state.pattern).split(",").length - 1) {
          this.setState({
            score: this.state.score + 1
          });
          var pattern = this.pattern();
          this.setState({ pattern: pattern });
          this.setState({ clicked: [], cekCombo: "" });
          console.log(this.state);
        }
      } else {
        console.warn("ini id_user", this.state.id_user);
        if (this.state.id_user !== 0) {
          this.props.dispatch(
            patchScore({ score: this.state.score }, this.state.id_user)
          );
        }
        this.setState({ clicked: [], cekCombo: "", score: 0 });
      }
    }
  };

  sound1 = async () => {
    sound1 = new Sound(require("../../assets/sound/sound1.wav"), e => {
      if (e) {
        console.log("Error in SOUND", e);
        return;
      }
      sound1.play(() => sound1.release());
    });
    this.setState({
      cekCombo: () => {
        this.getIndex(1);
      }
    });
  };

  sound2 = async () => {
    sound2 = new Sound(require("../../assets/sound/sound1.wav"), e => {
      if (e) {
        console.log("Error in SOUND", e);
        return;
      }
      sound2.play(() => sound2.release());
    });
    this.setState({
      cekCombo: () => {
        this.getIndex(2);
      }
    });
  };

  sound3 = async () => {
    sound3 = new Sound(require("../../assets/sound/sound2.wav"), e => {
      if (e) {
        console.log("Error in SOUND", e);
        return;
      }
      sound3.play(() => sound3.release());
    });
    this.setState({
      cekCombo: () => {
        this.getIndex(3);
      }
    });
  };

  sound4 = async () => {
    sound4 = new Sound(require("../../assets/sound/sound4.wav"), e => {
      if (e) {
        console.log("Error in SOUND", e);
        return;
      }
      sound4.play(() => sound4.release());
    });
    this.setState({
      cekCombo: () => {
        this.getIndex(4);
      }
    });
  };

  pattern = () => {
    var array = [1, 4, 3, 1, 2].sort(function() {
      return 0.5 - Math.random();
    });

    return array;
  };

  render() {
    return (
      <View>
        <View>
          <MenuButton navigation={this.props.navigation} />
        </View>

        <View style={styles.container}>
          <Text style={{ fontSize: 20, color: "#0F88F1" }}>Scores</Text>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#0F88F1" }}>
            {this.state.score}
          </Text>
        </View>

        <View style={styles.pattern}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#cc2d45" }}>
            {this.state.pattern}
          </Text>
        </View>

        <View style={styles.symbals}>
          <TouchableOpacity
            onPressIn={this.sound1}
            style={{ width: 90, height: 90, marginHorizontal: 50 }}
          >
            <Image
              source={require("../../assets/img/cymbals.png")}
              style={{ width: 90, height: 90 }}
            />
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 17 }}
            >
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={this.sound2}
            style={{ width: 90, height: 90, marginHorizontal: 50 }}
          >
            <Image
              source={require("../../assets/img/cymbals.png")}
              style={{ width: 90, height: 90 }}
            />
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 17 }}
            >
              2
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pedals}>
          <TouchableOpacity
            onPressIn={this.sound3}
            style={{ width: 90, height: 90, marginHorizontal: 30 }}
          >
            <Image
              source={require("../../assets/img/bass-drum-left.png")}
              style={{ width: 110, height: 110 }}
            />
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 17 }}
            >
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={this.sound4}
            style={{ width: 90, height: 90, marginHorizontal: 30 }}
          >
            <Image
              source={require("../../assets/img/bass-drum.png")}
              style={{ width: 110, height: 110 }}
            />
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 17 }}
            >
              4
            </Text>
          </TouchableOpacity>
        </View>
        {this.state.cekCombo !== "" && this.state.cekCombo()}
        <ImageBackground
          source={require("../../assets/img/images.jpeg")}
          style={styles.backgroundHome}
        />
      </View>
    );
  }
}
const mapState = state => {
  return {
    pattern: state.pattern
  };
};
export default connect(mapState)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90
  },
  pattern: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90
  },
  symbals: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 110,
    flexDirection: "row",
    marginBottom: 25
  },
  pedals: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    flexDirection: "row"
  },
  text: {
    fontSize: 30
  },
  backgroundHome: {
    width: "100%",
    height: 200,
    position: "relative",
    top: 110,
    alignSelf: "center"
  }
});
