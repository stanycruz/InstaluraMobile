import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens/Screens';
import {AsyncStorage} from 'react-native';
import {goToAuth, goHome} from './src/screens/Navigation';

registerScreens();

Navigation.events().registerAppLaunchedListener(() =>
  AsyncStorage.getItem('token').then(token => {
    if (token) {
      return goHome();
    }
    return goToAuth();
  }),
);
