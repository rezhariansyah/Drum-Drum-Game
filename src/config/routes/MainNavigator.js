import React from "react";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import HomeScreen from "../../screens/pages/Home";
import SettingScreen from "../../screens/pages/SettingScreen";
import LoginScreen from "../../screens/pages/Login";
import { Platform, Dimensions } from "react-native";
import MenuDrawer from "../../components/MenuDrawer";
import { Icon } from "native-base";
import Leaderboard from '../../screens/pages/Leaderboard';
import Register from "../../screens/pages/Register";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWitdh: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  }
};

const AppTabNavigator = createMaterialTopTabNavigator(
  {
    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="person" color={tintColor} size={24} />
        )
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={24} />
        )
      }
    },
    Leaderboard: {
      screen: Leaderboard,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="book" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarPosition: "bottom",
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'grey',
        upperCaseLabel: false,
        labelStyle: {
          fontSize: 9,
          marginTop: 1
        },
        style: {
          backgroundColor: '#1F85DE',
          elevation: 15,
          height: 50
        },
        indicatorStyle: {
          height: 0
        },
        showIcon: true
      }
  }
);

const AppStackNavigator = createStackNavigator(
  {
    Home: AppTabNavigator,
    Settings: {
      screen: SettingScreen
    },
    Login: {
      screen: LoginScreen
    },
    Leaderboard: {
      screen: Leaderboard
    },
    Register: {
      screen : Register
    }
  },
  {
    headerMode: "none"
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: AppStackNavigator,
    Settings: {
      screen: SettingScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  DrawerConfig
);

export default createAppContainer(AppDrawerNavigator);
