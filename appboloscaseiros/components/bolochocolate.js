import * as React from 'react';
import { Text, View, Image, StyleSheet,ScrollView } from 'react-native';

export default function Bolochocolate() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.titulo}> Bolo de chocolate</Text>
      <ScrollView>
      <Image
        style={styles.imag}
        source={require('../assets/bolochocolate.jpg')}
      />
      <Text style={styles.ta}>INGREDIENTES </Text>
      <Text style={styles.subtitulo}>MASSA </Text>
      <Text>
        4 ovos{'\n'}4 colheres (sopa) de chocolate em pó{'\n'}2 colheres (sopa)
        de manteiga{'\n'}3 xícaras (chá) de farinha de trigo{'\n'}2 xícaras
        (chá) de açúcar{'\n'}2 colheres (sopa) de fermento{'\n'}1 xícara (chá)
        de leite{'\n'}
      </Text>
      <Text style={styles.subtitulo}>CALDA</Text>
      <Text>
        2 colheres (sopa) de manteiga{'\n'}7 colheres (sopa) de chocolate em pó
        {'\n'}2 latas de creme de leite com soro{'\n'}3 colheres (sopa) de
        açúcar{'\n'}
      </Text>

      <Text style={styles.ta}>MODO DE PREPARO</Text>

      <Text style={styles.subtitulo}>MASSA </Text>
      <Text>
        Em um liquidificador adicione os ovos, o chocolate em pó, a manteiga, a
        farinha de trigo,{'\n'} o açúcar e o leite, depois bata por 5 minutos.
        {'\n'}
        Adicione o fermento e misture com uma espátula delicadamente.{'\n'}
        Em uma forma untada, despeje a massa e asse em forno médio (180 ºC)
        preaquecido por cerca de 40 minutos.{'\n'} Não se esqueça de usar uma
        forma alta para essa receita: como leva duas colheres de fermento, ela
        cresce bastante!{'\n'} Outra solução pode ser colocar apenas uma colher
        de fermento e manter a sua receita em uma forma pequena.
      </Text>
 </ScrollView>
    </View>
         
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBC79E',
  },
  titulo: {
    margin: 24,
    fontSize: 29,
    color: '#FF0000',

    fontWeight: 'bold',
    textAlign: 'center',
  },
  imag: {
    width: 300,
    height: 200,
    borderRadius: 35,
  },
  ta: {
    margin: 24,
    fontSize: 19,
    color: '#FF0000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitulo: {
    backgroundColor: '#E6E8FA',
    color: '#5C4033',
    borderRadius: 10,
    textAlign: 'center',
    height: 29,
    width: 350,
    fontSize: 18,
    fontWeight: 'bold',
    top: 10,
    margin: 25,
  },
});
