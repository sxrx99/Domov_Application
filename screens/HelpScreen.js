import { View, Text } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import tw from 'twrnc' ;


export default function HelpScreen() {
  return (
    <ScreenWrapper>

      <View style={tw `flex m-auto  `}>
    
     <View style={tw ` flex w-340px h-53px border rounded-15px justify-center`}>
      <Text>
       Visit our web site
      </Text>
     </View>

     <View style={tw `w-340px h-53px border rounded-15px mt-15px justify-center`}>
      <Text>
       Download user manual
      </Text>
     </View>

     </View>
    
    </ScreenWrapper>
  )
}