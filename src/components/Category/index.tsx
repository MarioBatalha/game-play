import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';
import{ theme } from '../../global/styles/theme';
import { styles } from './style';

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked: boolean;
}

const Category = ({
    title,
    icon: Icon,
    checked = false,
    ...rest
}: Props) => { 
    const { secondary50, secondary70 } = theme.colors;
  return (
    <RectButton {..rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
        >
        <View style={[styles.content, {opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check}>
            <Icon 
              height={48}
              width={48}
            />
          </View>
          <Text style={styles.title}>
            { title }
          </Text>
        </View>
          
        </LinearGradient>
    </RectButton>
  );
}

export default Category;



