import {useFonts} from 'expo-font'

export const colors = {
    navigation : '#727B7A' , //hadi tae hadok li mlta7t f bottom tab
    mainbg :'#D9D9D9',  //hadi l bg tae klch gae l'app basically
    maingreen : '#58E3B0',
    maingrey : '#84908F',
    grdgreen: '#4AC296',
    grdgrey: '#C0C4C4',
    lightgrey: '#3C3C43',
    greybtn:' #606766',
    extralightgrey : '#EBEBF5'
    //##C9CED7  didn't find where it's used 

}



export const loadFonts = () => {
  const [fontsLoaded] = useFonts({
    'Roboto' : require('../assets/fonts/Roboto-Medium.ttf'),
    'Inter-Extralight' :  require('../assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-thin' :  require('../assets/fonts/Inter-Thin.ttf'),
    'Inter-Regular' :  require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold' :  require('../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-light' : require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Black' : require('../assets/fonts/Inter-Black.ttf'),
    'Inter-Bold' :require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold' : require('../assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-Medium' :  require('../assets/fonts/Inter-Medium.ttf'),
  });

  return fontsLoaded;
};



export const apiKey = 'cece9adfa8ee480b832130219240703';