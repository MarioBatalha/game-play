import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import{ theme } from '../../global/styles/theme';
import { styles } from './style';

const ButtonAdd = ({ ...rest }: RectButtonProps) => {
    return (
        <RectButton
        style={styles.container}
        {...rest} 
        >
           <MaterialCommunityIcons
            name="plus" 
            size={24}
            color={theme.colors.heading}
            />  
        </RectButton>
    );     
}

export default ButtonAdd;
