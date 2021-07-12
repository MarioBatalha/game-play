import React from 'react';
import { 
  View,
  Text,
  Image
  } from 'react-native';

import{ styles } from './style';
import Profile from '../../components/Profile';

const Home = () => {
    return (
        <View>
          <View style={styles.header}>
            <Profile />
          </View>
        </View>
    );
}

export default Home;