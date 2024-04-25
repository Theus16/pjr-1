import React , {useState} from "react";
import {View, Text, TextInput,Button }from "react-native";


export default function Form(){

   const [height,setHeight] = useState(null)
   const [weight,seyWeight] = useState(null)
   const [messageImc,setMessageImc] = useState("preencha seu  pesso e altura")
   const [inc,setImc,] = useState(null)
   const [textButton,setTexButton] = useState("calcular IMC")
 return(
    <View>
       <View>
       <Text>Altura</Text>
        <TextInput
       placeholder="Ex.1.75"
        keyboardType="numeric"
        />

        <Text>Peso</Text>
        <TextInput
        placeholder="Ex.85.766"
        keyboardType="numeric"
        />
        <Button
        title={textButton}
        />
       </View>
    </View>
);

}