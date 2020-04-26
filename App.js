import 'react-native-gesture-handler';
import React from 'react';
import Feed from './src/Views/Feed/Feed';
import Login from './src/Views/Login/Login';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const navigator = createStackNavigator({
  Login: {screen: Login},
  Feed: {screen: Feed},
});

const AppContainer = createAppContainer(navigator);

const App = () => {
  return <AppContainer />;
};

export default App;
