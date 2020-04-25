import {Platform} from 'react-native';

const efetuarLogin = async (usuario, senha) => {
  let url = 'localhost';
  if (Platform.OS === 'android') {
    //url = '10.0.2.2';
  }

  const cabecalhoHTTP = {
    method: 'POST',
    body: JSON.stringify({
      userName: usuario,
      password: senha,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  };
  const resposta = await fetch(`http://${url}:3030/users/login`, cabecalhoHTTP);

  if (resposta.ok) {
    // deu certo
  } else {
    throw new Error('Não foi possível logar.');
  }
  console.warn(resposta);
};

export default efetuarLogin;
