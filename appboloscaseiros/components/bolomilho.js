import * as React from 'react';
import {Text, View, Image, StyleSheet,ScrollView}from 'react-native';

export default function Bolomilho(){
  return(
    <View  style ={styles.container}>
    <Text style ={styles.titulo}> Bolo de milho</Text>
    <ScrollView>
    <Image style ={styles.imag3}  source={require('../assets/bolodemilho.jpg')}/>
<Text style ={styles.ta}>
  INGREDIENTES </Text>

  <Text>
2 xícaras de milho direto da espiga{'\n'}
1 xícara de farinha de trigo sem fermento{'\n'}
1 xícara de leite{'\n'}
1 e 1/2 xícara de açúcar{'\n'}
3 ovos inteiros{'\n'}
3 colheres (sopa) de margarina{'\n'}
1 pacotinho de coco ralado{'\n'}
1 colher (sopa) rasa de fermento{'\n'}
</Text>


<Text style ={styles.ta}>
MODO DE PREPARO</Text>
<Text>
Bata no liquidificador o milho retirado da espiga, o leite, os ovos e a margarina.{'\n'}

Bata bem até triturar o milho.{'\n'}

Em seguida, coloque a mistura na batedeira, acrescentando a farinha de trigo o açúcar,{'\n'} o coco ralado e, por último, o fermento.{'\n'}

Unte uma forma com um furo no meio e coloque para assar em forno preaquecido a 180º C.{'\n'}

Asse por mais ou menos 1 hora ou até dourar e quando espetar um garfo o mesmo sair limpo.{'\n'}

Retire do forno, espere esfriar um pouco para desenformar.{'\n'}
  </Text>
  </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#EBC79E',
  },
 titulo: {
    margin: 24,
    fontSize: 29,
    color: '#FF0000',
    
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imag3:{
    width:280,
    height:250,
    borderRadius:35
    
  },
  ta:{
        margin: 24,
    fontSize: 19,
    color: '#FF0000',
    
    fontWeight: 'bold',
    textAlign: 'center',
  },
 

   });