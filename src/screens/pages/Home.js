import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuButton from "../../components/MenuButton";

class Home extends Component {
  render() {
    return (
      <View>
        <MenuButton navigation={this.props.navigation} />
        <View style={styles.container}>
          <Text>Home</Text>
        </View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop:70
  },
  text: {
    fontSize: 30
  }
});
