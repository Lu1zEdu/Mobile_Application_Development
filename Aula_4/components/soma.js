import { Text , View} from "react-native";

export default function Somar ({pNumero,sNumero})  {
    let soma = pNumero + sNumero;
    return(
        <View>
            <Text>Primeiro Numero : {pNumero}</Text>
            <Text>Segundo Numero : {sNumero}</Text>
            <Text>Somando Numeros : {soma}</Text>
        </View>
    )
}