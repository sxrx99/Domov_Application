import React from 'react';
import tw from 'twrnc';
import { View, Text } from 'react-native';
import { useState , useEffect} from 'react';
import { loadFonts } from '../theme/constants.js';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import { colors } from '../theme/constants';
import { fetchWeatherForecast } from '../utils/Api/Weather.js';


const Card = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [weather, setWeather] = useState(null);
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
  
      let addressResponse = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      if (addressResponse.length > 0) {
        setAddress(addressResponse[0]);
      }
  
    })();
  }, []);
  
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (address) {
    text = `${address.region}, ${address.country}`;
  }

useEffect(() => {
  if (address) { // Check if address is not null
    fetchWeatherForecast({
      region: address.region,
      days: '7'
    }).then(data => {
      setWeather(data);
      // console.log('get forecast : ', data);
    });
  }
}, [address]); // Dependency added to trigger useEffect when address changes


  const fontsLoaded = loadFonts();
  if (!fontsLoaded) {
   return undefined;
  }

  

  return (
    <LinearGradient
     colors={[colors.grdgreen,colors.grdgrey]}
     start={{ x: 0, y: 0}} // Start from the left edge
     end={{ x: 1, y: 1 }}   // End at the right edge
     style={tw `flex flex-row flex-grow justify-between px-5 py-3  rounded-7 my-5 mt-7  h-32 border-0`} 
     >
      
      
      <View style={tw `flex-column justify-between`}>
        <View>
          <Text style={{fontFamily: 'Inter-Bold' ,fontSize:25,color:'#fff'}}>My Location</Text>
          <Text style={[ tw `text-13px`,{fontFamily: 'Inter-Regular' ,color:colors.extralightgrey}]}>{text}</Text>
        </View>
        <Text style={[ tw `text-13px`,{fontFamily: 'Inter-Regular' ,color:colors.extralightgrey}]}>{weather?.current?.condition?.text}</Text>
      </View>
      <View style={tw `h-full`}>
      <Text style={{fontFamily: 'Inter-Regular',color:'#fff',fontSize:50,paddingTop:15}}>{weather?.current?.temp_c}°</Text>
      </View>
     
 
    </LinearGradient>
    
      

  );
};

export default Card;
