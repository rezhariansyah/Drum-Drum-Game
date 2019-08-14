import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity, Image, View } from "react-native";

class MenuButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.profilnavbar}
          onPress={() => this.props.navigation.toggleDrawer()}
        >
          <Image
            style={{
              flex:1,
              width: 32,
              height: 32,
              borderRadius: 100,
              overflow: "hidden"
            }}
            source={require("../assets/img/man.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default MenuButton;

const styles = StyleSheet.create({
  profilnavbar: {
    top: 5,
    left: 5,
    position: "absolute",
    padding: 11,
    flex:1
  }
});
