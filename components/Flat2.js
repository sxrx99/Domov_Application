import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc';
import { colors } from '../theme/constants';
import DeviceCard from './DeviceCard';



export default function Flat() {
  const dataList = [
    { name: 'Light 1' , key: 1 },
    { name: 'Light 2', key: 2 }
  ];
  return (
    <View > 
      

      <FlatList
        data={dataList}
        renderItem={({ item }) => (
          <DeviceCard name={item.name}  />
        )}
        numColumns={1}
        ListEmptyComponent={() => (
           <Text>no device available ...</Text>
        )}
      />
    </View>
  );
}
