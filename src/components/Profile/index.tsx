import React from 'react';
import { 
  View,
  Text,
  Image
  } from 'react-native';

import { styles } from './style';
import Avatar from '../Avatar';

const Profile = () => {
    return (
        <View style={styles.container}>

        <Avatar urlImage='https://avatars.githubusercontent.com/u/37873239?v=4' />

          <View>
            <View style={styles.user}>
              <Text style={styles.greeting}>Olá,</Text>
              <Text style={styles.username}> Angélica Mateus</Text>
            </View>
            <Text style={styles.message}>Hoje é dia de victória</Text>
          </View>
            
        </View>
    );
}

export default Profile;