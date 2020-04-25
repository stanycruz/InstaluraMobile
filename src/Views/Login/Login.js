import React, {Fragment, useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import estilo from './estilo';
import efetuarLogin from '../../api/login';

const Login: () => React$Node = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const tentarLogar = async () => {
    try {
      await efetuarLogin(usuario, senha);
    } catch (error) {
      setMensagemErro(error.message);
    }
  };

  return (
    <Fragment>
      <View style={estilo.container}>
        <TextInput
          placeholder="Usuário"
          onChangeText={texto => setUsuario(texto)}
          style={estilo.input}
        />
        <TextInput
          placeholder="Senha"
          onChangeText={texto => setSenha(texto)}
          secureTextEntry={true}
          style={estilo.input}
        />
        <Text>{mensagemErro}</Text>
      </View>
      <View style={estilo.botaoView}>
        <Button title="Entrar" onPress={tentarLogar} />
      </View>
    </Fragment>
  );
};

export default Login;
