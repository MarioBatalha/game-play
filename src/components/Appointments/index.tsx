import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { categories } from '../../utils/Categories';

import { styles } from './style';
import Player from '../../assets/player.png';
import Calendar from '../../assets/calendar.png';
import GuildIcon from '../GuildIcon';
import { theme } from '../../global/styles/theme';


export type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: bool;
}

type AppointmentsProps = {
   id: string;
   guild: GuildProps;
   category: string;
   date: string;
   description: string;
}

type Porps = RectButtonProps & {
    date: AppointmentsProps
}
const Appointments = ({ data, ...rest }: Props) => {
  const [category] = categories.filter(item => item.id === data.category); 
  const { owner } = data.guild;
  const { primary, on} = theme.colors;
  return(
   <RectButton {...rest}>

   <View style={styles.container}>
     <GuildIcon />

     <View style={styles.content}>
       <View style={styles.header}>
         <Text style={styles.title}>
           {data.guild.name}
         </Text>

        <Text style={styles.title}>
         { category.title }
        </Text>
       </View >

       <View style={styles.footer}>
         <View style={styles.dateInfo}>
          <Image source={Calendar} />
          <Text style={styles.date}>
            {data.date}
          </Text>
         </View>

        <View style={styles.playerInfo}>
          <Image source={Player} />

          <Text style={[styles.player, { color: owner ? primary : on}]}>
            {owner ? 'Anfitrião' : 'Visitante'}
          </Text>
        </View>
       </View>
     </View>
   </View>
     
   </RectButton>
  );
}

export default Appointments;