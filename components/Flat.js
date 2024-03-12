import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import ToggleCard from './ToggleCard';
import tw from 'twrnc';
import EmptyList from './EmptyList';
import { colors } from '../theme/constants';



export default function Flat() {
  const dataList = [
    // { name: 'Garage door', devices: 1, key: 1 },
    // { name: 'Garage lights', devices: 4, key: 2 }
  ];
  return (
    <View > 
      {dataList.length > 0 && (
        <Text style={[tw`ml-7 mr-55 text-18px mb-5 border-b pb-1`, { fontFamily: 'Inter-Regular', color: colors.maingrey, borderBottomColor: colors.maingrey }]}>  All scenes  </Text>
      ) }

      <FlatList
        data={dataList}
        renderItem={({ item }) => (
          <ToggleCard name={item.name} devices={item.devices} />
        )}
        numColumns={2}
        ListEmptyComponent={() => (
          <EmptyList />
        )}
      />
    </View>
  );
}
