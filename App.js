import React, {useState} from 'react';
import {TouchableOpacity,ImageBackground, StyleSheet, Text, View} from 'react-native';
  
  let tempo = null;
  let segundos = 0;
  let decimos = 0;
  let centesimos = 0;

  const APP = () => {
  
  const [numero, definenumero] = useState("00.00");
  const [botao, defineBotao] = useState("Iniciar");
 
  function iniciar(){
    if(tempo !== null) {
      clearInterval(tempo);
      tempo = null;
      defineBotao("Continuar");
    
    }else{
        tempo = setInterval(() => {
            
            centesimos++;
            
            if( centesimos == 10){
              centesimos = 0;
              decimos++;
            }
            if(decimos == 10){
              decimos = 0;
              segundos++;
            }
            
            let formato = 
              (segundos < 10 ? "0" + segundos : segundos) 
              + ":" +
              (decimos < 10 ? "" + decimos : decimos)
              + "" +
              (centesimos < 10 ? "" + centesimos : centesimos);

           definenumero(formato);
      },10);
      
    defineBotao("Parar");
    }
  }
  function zerar(){
    if(tempo !== null){
      
      clearInterval(tempo);
      tempo = null;
      defineBotao("Iniciar");
      definenumero("00.00");
      decimos = 0;
      segundos = 0;
    
    }else{

     
      definenumero("00.00");
      decimos = 0;
      segundos = 0;
      defineBotao("Iniciar");
    }
  }

return(

  <View style={styles.box}>
      <View style={styles.boxRelogio}>
        <ImageBackground source={require('./assets/cronometro.png')} style={styles.relogio}><Text style={styles.contador}>{numero}</Text></ImageBackground>
      </View>
      
      <TouchableOpacity style={styles.button}><Text style={styles.textoBotao} onPress={iniciar} >{botao}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.textoBotao} onPress={zerar}>Zerar</Text></TouchableOpacity>
  </View>
)};

const styles = StyleSheet.create({
contador:{
  color:'white',
  alignContent:'center',
  textAlign:'center',
  fontSize:40,
  paddingTop:120,
},
boxRelogio:{
  textAlign:'center',
  width:200,
  height:250,
},
relogio:{
    width:'100%', 
    height:'100%',
},  
box:{
  backgroundColor:'black',
  alignItems:'center',
  justifyContent:'center',
  width:'100%',
  height:'100%',
},
textoBotao:{
    color:'white'
},
button: {
    marginTop:20,
    width:150,
    height:50,
    borderWidth:2,
    borderRadius:35,
    alignItems: "center",
    padding: 15,
    borderColor:'white'
},
});

export default APP;