import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Flat from '../components/Flat2'
import tw from 'twrnc';


export default function SmartSwitchScreen() {
  return (
    <ScreenWrapper>
    <View style={tw `mx-5 flex flex-col `}>
      <Text>i am so smart hahahahahahahahah </Text>
      <Flat/>
    </View>
    </ScreenWrapper>
  )
}