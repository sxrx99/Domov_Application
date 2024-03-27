import { View, Text } from 'react-native'
import React, { Children } from 'react'
import tw from 'twrnc';
import { colors } from '../theme/constants';
import { loadFonts } from '../theme/constants';



export default function Device({ switchValue , name ,children}) {
    
    const fontsLoaded = loadFonts();
  
    if (!fontsLoaded) {
     return undefined;
    }
 
  return (
    <View style={[tw` border-0 py-3 px-5 my-2 flex flex-row justify-between rounded-4 shadow-lg `,{ backgroundColor: switchValue ? colors.maingreen : '#fff' }]}>
      <Text style={[tw `text-18px pt-2`,{fontFamily: 'Inter-Regular', color:switchValue ? '#fff' :colors.maingrey}]}>{name}</Text>
      <View>
        {children}
      </View>
    </View>
  
  )
}