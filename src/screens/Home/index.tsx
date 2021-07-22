import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import{ styles } from './style';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListHeader from '../../components/ListHeader';
import Appointments from '../../components/Appointments';
import ListDivider from '../../components/ListDivider';


const Home = () => {
  const [category, setCategory] = useState(''); 

  const appointments = [
    {
      id: 1,
      guild: {
        id: 1,
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 ás 20:40 min',
      description: 'É hoje que vamos ao challenger sem perder uma partida m10'
    },
    {
      id: 2,
      guild: {
        id: 2,
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 ás 20:40 min',
      description: 'É hoje que vamos ao challenger sem perder uma partida m10'
    },
    {
      id: 3,
      guild: {
        id: 3,
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 ás 20:40 min',
      description: 'É hoje que vamos ao challenger sem perder uma partida m10'
    },
  ]

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
    return (
        <View>
          <View style={styles.header}>
            <Profile />
            <ButtonAdd />
          </View>

            <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
            /> 

          <View style={styles.content}>
            <ListHeader title='Partidas agendadas' subtitle='Total 6' />

            <FlatList
                data={appointments}
                keyExtrator={item => item.id}
                renderItem={({ item }) => (
                  <Appointments data={item} />
              )}
                ItemsSeparatorComponent={() => <ListDivider />}
                style={styles.matches}
                showVerticalScrollIndicator={false}
            />
           </View>
        </View>
    );
}

export default Home;