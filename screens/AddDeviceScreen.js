
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native'; // Import Platform
import { colors } from '../theme/constants';
import { loadFonts } from '../theme/constants';
import Select from '../components/SelectList';
import tw from 'twrnc';


export default function LoginScreen() {
  const fontsLoaded = loadFonts();
  
  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={[styles.container]}>
      <View>
        <Select />
      </View>

      <View style={tw `flex-row w-[250px] justify-between mt-[130px]`}>

        
        <TouchableOpacity style={[styles.button, { backgroundColor: colors.maingreen }]}>
          <Text style={tw `text-white `}>Add</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={[styles.button, { backgroundColor: colors.navigation }]}>
          <Text style={tw `text-white `}>Cancel</Text>
        </TouchableOpacity>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 90,
    height: 38,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
});
