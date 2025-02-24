import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import ListaAlunos from './src/components/ListaAlunos';
import Quadrado from './src/components/Quadrado';

export default function App() {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("");

  function clicou() {  
    console.log("O botão foi clicado:", count);
  }

  function resetar() {
    setCount(0);
  }

  return (
    <View style={styles.container}>
      <Text>Hoje é segunda-feira</Text>
      <Text>Botão de Incremento: {count}</Text>
      <Button 
        title="Aumentar" 
        onPress={() => {
          clicou(); 
          setCount(count + 10);
        }} 
      />

      <Button 
        title="Resetar" 
        onPress={resetar} 
        color="red"
      />

      <StatusBar style="auto" />

      {/*<ListaAlunos/> */}

      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
        style={styles.input}
      />
      <Text>Nome Digitado: {nome}</Text>
      <Quadrado  />
      <Quadrado cor="#FF5733" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    width: '80%',
    paddingLeft: 10,
  }
});
