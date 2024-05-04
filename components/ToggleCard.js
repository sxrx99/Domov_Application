import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import tw from 'twrnc';
import ToggleForDevicefrom from './ToggleForDevice';
import { loadFonts } from '../theme/constants';
import { colors } from '../theme/constants';
import Togglecontainer from './Togglecontainer';
import { useState } from 'react';

const ToggleCard = ({ name, devices }) => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };
 

  return (
    <Togglecontainer switchValue={switchValue} toggleSwitch={toggleSwitch} name={name} devices={devices}>
        <ToggleForDevicefrom switchValue={switchValue} toggleSwitch={toggleSwitch} connected={true}/>
    </Togglecontainer>
    
  );
};

export default ToggleCard;