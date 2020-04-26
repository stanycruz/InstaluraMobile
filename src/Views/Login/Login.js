import React, {Fragment, useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import estilo from './estilo';
import efetuarLogin from '../../api/login';

const Login = ({navigation}) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const tentarLogar = async () => {
    try {
      const token = await efetuarLogin(usuario, senha);
      await AsyncStorage.setItem('instalura_token', token);
      navigation.replace('Feed', {nome: usuario}); //navigation.push
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
