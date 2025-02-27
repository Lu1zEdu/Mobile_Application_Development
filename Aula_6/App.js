
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nomeAluno, setNomeAluno] = useState('');
  const [emailAluno, setEmailAluno] = useState('');

  const [pessoa, setPessoa] = useState({
    nome :"", email :""
  });


  function mostrar(var1 , var2){
    setPessoa.apply(var1, var2)
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/linux-154544_640.png')}
        style={styles.imagem}
      />
      <Text style={styles.text}>Linux</Text>
      <View style={styles.inputs}>
        <TextInput
          placeholder='Digite seu nome'
          style={styles.input}
          value={nomeAluno}
          maxLength={100}
          onChangeText={(value) => setNomeAluno(value)}
        />
        <TextInput
          placeholder='Digite seu email'
          style={styles.input}
          value={emailAluno}
          maxLength={100}
          keyboardType="email-address"
          onChangeText={(value) => setEmailAluno(value)}
        />
        <Button 
          title="Proximo"
          onPress={() => alert('Next button clicked')}
        />
      </View>
      <View style={styles.inputs}>
        <Text style={styles.text}>{nomeAluno}</Text>
        <Text style={styles.text}>{emailAluno}</Text>
      </View>
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
  imagem: {
    resizeMode: "center",
    width: 250,
  },
  input: {
    backgroundColor: "#fff",
    width: 300,
    borderRadius: 7,
    paddingLeft: 10,
    borderWidth: 3,
    borderColor: "black",
    fontSize: 15,
    marginBottom: 10,  // Added margin for better spacing between inputs
  },
  text: {
    padding: 20
  },
  inputs: {
    padding: 20,
    width: '80%',  // Adjusted width for better responsiveness
  }
});
