import React, {Fragment} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import estilo from './estilo';

const Login: () => React$Node = () => {
  return (
    <Fragment>
      <View style={estilo.container}>
        <TextInput placeholder="Usuário" style={estilo.input} />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          style={estilo.input}
        />
      </View>
      <Button title="Entrar" />
    </Fragment>
  );
};

export default Login;
