import React from 'react';
import { 
  View,
  Text,
  Image
  } from 'react-native';

import{ styles } from './style';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';

const Home = () => {
    return (
        <View>
          <View style={styles.header}>
            <Profile />
            <ButtonAdd />
          </View>

          <View>
            <CategorySelect />
          </View>
        </View>
    );
}

export default Home;