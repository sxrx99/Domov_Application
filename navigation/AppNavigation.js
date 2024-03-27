import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View ,Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AddDeviceScreen from '../screens/AddDeviceScreen';
import HelpScreen from '../screens/HelpScreen';
import SmartSwitchScreen from '../screens/SmartSwitchScreen';
import tw from 'twrnc';
import { colors } from '../theme/constants';
import HomeIcon from '../assets/svgs/homeIcon';
import Smartswitch from '../assets/svgs/smartswitch';
import Help from '../assets/svgs/help';
import AddDevice from '../assets/svgs/addDevice';
const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown:false ,
  tabBarShowLabel:false,
  tabBarStyle : {

    position : "absolute ",
    bottom : 0,
    right : 0,
    left : 0,
    elevation : 0,
    height : 62,
    background : '#fff',
    padding:6,
  },
}

export default function AppNavigation() {
  return (
   
    <Tab.Navigator 
    screenOptions={screenOptions}
  >

         <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ 
          
          tabBarIcon: ({focused}) => {
            return(
              <View style={{alignitems :  ' center ', justifycontent: 'center '}}>
                <View style={tw `ml-1 `}>
                 <HomeIcon />  
                </View>
                <Text style={{fontSize:11 , color : focused ? colors.maingreen : colors.maingrey,paddingBottom:5}}>Home</Text> 
              </View>
            )
            
            
            },
          tabBarLabelStyle: { color: colors.navigation},
        }}
      />
{/* <Tab.Screen
        name="Add device"
        component={AddDeviceScreen}
        options={{ 
          headerShown:false ,
          tabBarIcon: ({ focused }) => {
            return (

              <View style={{alignitems :  ' center ', justifycontent: 'center '}}>
              <View style={tw `ml-3 `}>
               <AddDevice color={focused ? colors.maingreen : colors.maingrey}/>
              </View>
              <Text style={{fontSize:11 , color : focused ? colors.maingreen : colors.maingrey,paddingBottom:10}}>Add device</Text> 
            </View>
         
                 
                
           
            )
          },
          tabBarLabelStyle: { color: colors.navigation},
        }}
      /> */}

     <Tab.Screen
        name="Smart switch"
        component={SmartSwitchScreen}
        options={{
          headerShown:false,
          tabBarIcon: ({focused}) => (
            <View style={{alignitems :  ' center ', justifycontent: 'center '}}>
              <View style={tw `ml-5 `}>
               <Smartswitch/>
              </View>
              <Text style={{fontSize:11 , color : focused ? colors.maingreen : colors.maingrey,paddingBottom:10}}>Smart switch</Text> 
            </View>
            
          ),
          tabBarLabelStyle: { color: colors.navigation },
        }}
      />



<Tab.Screen
  name="Help"
  component={HelpScreen}
  options={{
    headerShown: false,
    tabBarIcon: ({ focused }) => (
      <View style={{alignitems :  ' center ', justifycontent: 'center '}}>
              <View >
              <Help/>
              </View>
              <Text style={{fontSize:11 , color : focused ? colors.maingreen : colors.maingrey,paddingBottom:10}}>Help</Text> 
            </View>
      
    ),
    tabBarLabelStyle: { color: colors.navigation }, // Set text color
  }}
/>

      
    </Tab.Navigator>

   
    
  );
}
