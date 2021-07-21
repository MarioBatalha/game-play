import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import{ styles } from './style';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';

const Home = () => {
  const [category, setCategory] = useState(''); 

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
    return (
        <View>
          <View style={styles.header}>
            <Profile />
            <ButtonAdd />
          </View>

          <View>
            <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
            />
          </View>
        </View>
    );
}

export default Home;