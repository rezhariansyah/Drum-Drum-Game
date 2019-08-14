import React, { Component } from "react";
import { StyleSheet, Text, Image, View, AsyncStorage } from "react-native";
import MenuButton from "../../components/MenuButton";
import {
  Form,
  Label,
  Item,
  Input,
  Container,
  Header,
  Content,
  Button
} from "native-base";
import { NavigationEvents } from "react-navigation";

class SettingScreen extends Component {
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

  render() {
    return (
      <Container>
        <NavigationEvents
          onWillFocus={() =>
            AsyncStorage.getItem("name").then(value => {
              this.setState({ name: value });
            })
          }
        />
        <NavigationEvents
          onWillFocus={() =>
            AsyncStorage.getItem("token").then(value => {
              this.setState({ token: value });
            })
          }
        />
        <NavigationEvents
          onWillFocus={() =>
            AsyncStorage.getItem("email").then(value => {
              this.setState({ email: value });
            })
          }
        />
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <View style={styles.container}>
            <Image
              style={styles.profileImage}
              source={require("../../assets/img/man.png")}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text style={{ fontSize: 17 }}>Edit Profile</Text>
          </View>
          <Form style={styles.formInput}>
            {this.state.token == null ? (
              <View>
                <Item inlineLabel>
                  <Label>Full Name :</Label>
                  <Input />
                </Item>
                <Item inlineLabel>
                  <Label>Email :</Label>
                  <Input />
                </Item>
                <Item inlineLabel last>
                  <Label>ID Card :</Label>
                  <Input />
                </Item>
                <Item inlineLabel last>
                  <Label>New Password :</Label>
                  <Input />
                </Item>
              </View>
            ) : (
              <View>
                <Item inlineLabel>
                  <Label>Full Name : {this.state.name}</Label>
                  <Input />
                </Item>
                <Item inlineLabel>
                  <Label>Email : {this.state.email}</Label>
                  <Input />
                </Item>
                <Item inlineLabel last>
                  <Label>New Password :</Label>
                  <Input />
                </Item>
              </View>
            )}
          </Form>
          <View style={styles.save}>
            <Button style={styles.buttonSave} rounded danger>
              <Text>Cancel</Text>
            </Button>
            <Button
              style={styles.buttonSave}
              rounded
              info
              onPress={() => alert("baba")}
            >
              <Text>Save</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 45
  },
  profileImage: {
    width: 180,
    height: 180
  },
  text: {
    fontSize: 30
  },
  formInput: {
    marginHorizontal: 10
  },
  buttonSave: {
    width: 80,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    margin: 8,
    marginTop: 0
  },
  save: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
    marginHorizontal: 100
  }
});
