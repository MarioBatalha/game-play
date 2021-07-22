import React from 'react';
import { Image } from 'react-native';
import { styles } from './style';


const GuildIcon = ({}: Props) => {
    const uri = 'https://designvault.io/wp-content/uploads/2021/03/discord-icon-200x200.png'
  return(
   <Image
      source={{uri}}
      style={styles.image}
      resizeNode='cover'
   />
  );
}

export default GuildIcon;