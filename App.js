import React, {useState} from 'react';
import { View,Text, StyleSheet, Image,TouchableOpacity} from 'react-native';

function App(){
  const [image, setImage] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'Fallout: Guerra... A guerra nunca muda..', 
    'Max Payne 2: A morte é inevitável. Nosso medo dela nos faz jogar pelo seguro, bloqueia a emoção. É um jogo perdedor. Sem paixão, você já está morto.', 
    'The Legend of Zelda: O fluxo do tempo é sempre cruel, sua velocidade parece diferente para cada pessoa, mas ninguém pode mudá-la. Uma coisa que não muda com o tempo é a memória dos dias mais jovens.', 
    'Alan Wake: Se nossas vidas já estão escritas, seria preciso um homem corajoso para mudar o roteiro.',
    'Assassins Creed: Nada é verdade, tudo é permitido.',
    'Skyrim: O que é melhor - nascer bom, ou superar sua natureza maligna através de grande esforço?',
    'BioShock: Todos nós fazemos escolhas na vida, mas no final nossas escolhas nos fazem.',
    'Halo: Um herói não precisa falar. Quando ele se for, o mundo falará por ele.',
    'Half-Life 2: O homem certo no lugar errado pode fazer toda a diferença no mundo. Então acorde, senhor Freeman... acorde e sinta o cheiro das cinzas.',
    'Quem não ouve a melodia acha maluco quem dança...The last dance.'
  ];

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    setTextoFrase('"' + frases[numeroAleatorio] + '"' );
    setImage(require('./src/biscoitoAberto.png'));
  }

  function reiniciar(){
    setImage(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return(
    <View style={styles.container}>
      <Image
      source={image}
      style={styles.img}
      />

      <Text style={styles.textoFrase}>
          {textoFrase}
      </Text>
      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]} 
        onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Reiniciar biscoirto</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230,
  },
  textoFrase:{
    fontSize: 20,
    color: '#ff7b22',
    margin: 0,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#ff7b22',
    borderWidth: 2,
    borderRadius: 10,
  },
  btnTexto:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ff7b22',
  },
});

export default App;