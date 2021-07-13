import React from 'react';
import { 
  View,
  Text
  } from 'react-native';

import { styles } from './style';
import Avatar from '../Avatar';

const Profile = () => {
  const photoAddress = 'https://scontent.flad2-1.fna.fbcdn.net/v/t1.6435-9/182067079_1642988325901642_872353279439898561_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeG37KQv7iB1p5rN3WdX56oJ3J4M6HpKYtHcngzoekpi0SA2858APh3j2rs-LorkRbzSoVJOm5zKdSOj6pZdaRdu&_nc_ohc=7ldFs1Uo8Y4AX9Ml4fc&_nc_ht=scontent.flad2-1.fna&oh=62dfad81ce62163031815d01bdd84d43&oe=60F089B5'
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