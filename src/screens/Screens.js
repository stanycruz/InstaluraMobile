import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Login', () => require('./Login').default);
  Navigation.registerComponent(
    'Feed',
    () => require('../components/Feed').default,
  );
  Navigation.registerComponent(
    'PerfilUsuario',
    () => require('../components/Feed').default,
  );
}
