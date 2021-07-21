import React from 'react';
import { 
  View,
  Text, Image
  } from 'react-native';

import { styles } from './style';
import Avatar from '../Avatar';

const Profile = () => {
  const photoAddress = 'https://scontent.flad2-1.fna.fbcdn.net/v/t1.6435-1/p200x200/182067079_1642988325901642_872353279439898561_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=0rkvsqyt0SYAX8i97mQ&_nc_ht=scontent.flad2-1.fna&oh=b188d6ee8a2c42e3beed87d5818e9156&oe=60FCCEC3'
    return (
        <View style={styles.container}>

        <Avatar urlImage={photoAddress} />

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