import React from 'react';
import { ScrollView } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';


import{ theme } from '../../global/styles/theme';
import { styles } from './style';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

type Props = {
    categorySelected: string;
}

const CategorySelect = ({categorySelected}: Props) => {
    return (
        <ScrollView
          horizontal
          style={styles.container}
          showHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingRight: 40}}        
         >
          {
              categories.map(category => {
                  <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                   />
              })
          }
         </ScrollView>
    );     
}

export default CategorySelect;
