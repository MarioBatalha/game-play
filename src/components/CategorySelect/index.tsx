import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';


import{ theme } from '../../global/styles/theme';
import { styles } from './style';
import categories  from '../../utils/Categories';
import Category from '../Category';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
}

const CategorySelect = ({categorySelected, setCategory}: Props) => {
    return (
        <View
          horizontal
          style={styles.container}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingRight: 40}}        
         >
          {
              categories.map(category => {
                  <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    onPress={() => setCategory(category.id)}
                   />
              })
          }
            <Text>Menu scrolling</Text>
         </View>
    );     
}

export default CategorySelect;
