import { View, Text } from 'react-native'
import { useState } from 'react';
import Device from './Device';
import Toggle from './Toggle'

 

export default function DeviceCard({name}) {
    
        const [switchValue, setSwitchValue] = useState(false);
      
        const toggleSwitch = (value) => {
          setSwitchValue(value);
        };
    
  return (
    <Device switchValue={switchValue} name={name} >
      <Toggle switchValue={switchValue} toggleSwitch={toggleSwitch}/>
    </Device>
  )
}