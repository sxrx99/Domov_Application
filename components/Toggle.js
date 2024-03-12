import React, { useState } from 'react';
import { Switch, View, Text } from 'react-native';
import tw from 'twrnc';
import { colors } from '../theme/constants';

const Toggle = ({ switchValue, toggleSwitch}) => {
  // const [switchValue, setSwitchValue] = useState(false);

  // const toggleSwitch = (value) => {
  //   setSwitchValue(value);
  // };

  return (
    <View >
      <Text style={[{ color: switchValue ? '#fff' : 'rgba(60, 60, 67, 0.30)' , fontFamily : 'Inter-Regular'} , tw `text-18px`]}>
        {switchValue ? 'ON' : 'OFF'}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#767577" }}
        thumbColor="#f4f3f4"
        onValueChange={toggleSwitch}
        value={switchValue}
        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2}] }}
      />
    </View>
  );
};

export default Toggle;