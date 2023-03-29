import * as React from 'react';
import { Text, View, Image, StyleSheet,ScrollView } from 'react-native';

export default function Bolofuba() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Bolo de fubá</Text>
      <ScrollView>
      <Image style={styles.imag2} source={require('../assets/bolofuba.jpg')} />
      <Text style={styles.ta}>INGREDIENTES </Text>

      <Text>
        4 ovos 2 xícaras (chá) de açúcar{'\n'}2 xícaras (chá) de trigo{'\n'}1
        xícara (chá) de fubá{'\n'}3 colheres (sopa) de margarina{'\n'}1 xícara
        (chá) de leite{'\n'}4 colheres (chá) de fermento{'\n'}
      </Text>

      <Text style={styles.ta}>MODO DE PREPARO</Text>
      <Text>
        Em uma batedeira, bata as claras em neve e acrescente o açúcar. Adicione
        as gemas, a margarina, o leite, a farinha de trigo, o fubá e continue
        batendo. Acrescente por último o fermento e misture com uma colher ou
        espátula. Despeje a massa em uma forma untada e deixe assar em forno
        médio (180° C), preaquecido, por aproximadamente 30 minutos.
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
  imag2: {
    width: 288,
    height: 300,
    borderRadius: 35,
  },
  ta: {
    margin: 24,
    fontSize: 19,
    color: '#FF0000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
