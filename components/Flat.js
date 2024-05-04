import React, { useState , useEffect} from 'react';
import { View, Text, FlatList , StyleSheet} from 'react-native';
import ToggleCard from './ToggleCard';
import tw from 'twrnc';
import EmptyList from './EmptyList';
import { colors } from '../theme/constants';
import axios from 'axios';



export default function Flat() {
  const dataList = [
    { name: 'Garage door', devices: 1, key: 1 },
    { name: 'Garage lights', devices: 4, key: 2 }
  ];

  const [LightState, setLightState] = useState(false);
  const [GarageDoorState, setGarageDoorState] = useState(false);


  useEffect(() => {
    const fetchLedStates = async () => {
      try {
        const response = await axios.get(`http://192.168.4.1/state`);
        const {Light,GarageDoor } = response.data;
        setLightState(Light);
        setGarageDoorState(GarageDoor);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchLedStates(); // Call the function when the component mounts or updates
  }, []); // Empty dependency array ensures this effect runs only once (on mount) or on re-render if it changes


  const handleControlLed = async (device, action) => {
    try {
      await axios.post(`http://192.168.4.1/control/${device}/${action}`);
      // Update local state after successful control command
      if (device === 'Light') {
        setLightState(action === 'on');
      } else if (device === 'GarageDoor') {
        setGarageDoorState(action === 'on');
      }
    } catch (error) {
      console.error(`Error controlling LED ${device}:`, error);
    }
  };

  const getButtonStyle = (DeviceState) => {
    return {
      backgroundColor: DeviceState ? '#58E3B0' : 'grey',
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
      width: 200,
      alignItems: 'center',
    };
  };
 


  return (
    <View > 
      {dataList.length > 0 && (
        <Text style={[tw`ml-7 mr-55 text-18px mb-5 border-b pb-1`, { fontFamily: 'Inter-Regular', color: colors.maingrey, borderBottomColor: colors.maingrey }]}>  All scenes  </Text>
      ) }

      <FlatList
        data={dataList}
        renderItem={({ item }) => (
          <ToggleCard name={item.name} devices={item.devices}  />
        )}
        numColumns={2}
        ListEmptyComponent={() => (
          <EmptyList />
        )}
      />
    </View>
  );
}