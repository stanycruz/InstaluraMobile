import {Navigation} from 'react-native-navigation';

export const goToAuth = () =>
  Navigation.setRoot({
    root: {
      component: {
        name: 'Login',
      },
    },
  });

export const goHome = () =>
  Navigation.setRoot({
    root: {
      component: {
        name: 'Feed',
      },
    },
  });

export const goUser = () =>
  Navigation.setRoot({
    root: {
      component: {
        name: 'PerfilUsuario',
      },
    },
  });
