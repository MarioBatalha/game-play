import React from 'react';
import { 
  View,
  Text,
  Image
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';
import { styles }  from './style'; 

const SignIn = () => {
  const navigation = useNavigation();

   const handleSignIn = () => {
     navigation.navigate('Home');
   }
  return (
    <View style={styles.container}>

      <Image 
        style={styles.image}
        source={IllustrationImg}
        resizeMode='stretch'
       />

       <View style={styles.content}>
          <Text style={styles.title}>
          Conecte-se {'\n'} 
          e organize suas{'\n'}
          jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{`\n`}
            Favoritos com seus amigos
          </Text>

       <ButtonIcon
       title='Entrar com Discord'
       onPress={handleSignIn}
        />

       </View>
    </View>
  );
}

export default SignIn;



