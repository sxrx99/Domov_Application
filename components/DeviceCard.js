
import { useState } from 'react';
import Device from './Device';
import ToggleSwitch from './ToggleSwitch';




 

export default function DeviceCard({name, connect, sendVariableToFlat }) {
    
        const [switchValue, setSwitchValue] = useState(false);
      
        const toggleSwitch = (value) => {
          setSwitchValue(value);
          sendVariableToFlat(value);
        };

        
    
  return (
    <Device switchValue={switchValue} name={name} >
        <ToggleSwitch switchValue={switchValue} toggleSwitch={toggleSwitch} connected={connect}/>
    </Device>
    
  )
}