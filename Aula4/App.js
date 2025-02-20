//imports
import { Text , View , Button,TextInput} from "react-native";
import PrimeiroComponentes , {SegundoComponentes} from "./components/VariosComponentes"
import Estilo  from "./components/Estilo";
import Somar from "./components/soma";

//code
export default function App(){
  return(
    <View stely={Estilo.container}>
      <Text stely={Estilo.textoPadrao}>Aula 04 - Mobile</Text>
      <PrimeiroComponentes/>
      <TextInput onChangeText={onChangeText} value={text}/>
      <Button title="Press me"/>
      <SegundoComponentes/>
      <Somar pNumero = {10}  sNumero = {15}/>
    </View>
  )
}

