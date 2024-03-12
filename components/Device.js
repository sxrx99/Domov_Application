import { View, Text } from 'react-native'
import React, { Children } from 'react'
import tw from 'twrnc';
import { loadFonts } from '../theme/constants';



export default function Device({ switchValue , name , Children}) {
    
    const fontsLoaded = loadFonts();
  
    if (!fontsLoaded) {
     return undefined;
    }
  
  return (
    <View style={[tw`h-53px border-0 p-3 my-2 flex flex-row justify-between rounded-4 `,{ backgroundColor: switchValue ? colors.maingreen : '#fff' }]}>
      <Text>{name}</Text>
      <View>
        {Children}
      </View>
    </View>
  )
}