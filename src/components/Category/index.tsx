import React, { FC } from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';

import { styles } from './style';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<Props>;
  hasCheckBox?: boolean;
  checked?: boolean;
}

const Category = ({
  title,
  icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: Props) => {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

  return(
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient 
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[ checked ? secondary85 : secondary50, secondary40 ]}
        >
          {
            hasCheckBox &&
            <View style={
              checked ? styles.checked : styles.check
            }/>
          }

          <Text style={styles.title}>
            { title }
          </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}

export default Category;