import AppleAuthButton from "@/components/auth/AppleAuthButton";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import SmoothInfiniteScroll from "@/components/SmoothinfiniteScroll";
import { Fonts } from "@/constants/theme";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {
  const openWebBrowser = ( )=>{
Linking.openURL('https://galaxies.dev');
  };
  return (
    <View style={styles.container}>
      {/*Animated Portion */}
      <View style={styles.infiniteScrollContainer}> 
      <SmoothInfiniteScroll direction="down" />
      <SmoothInfiniteScroll direction="up" />
      <SmoothInfiniteScroll direction="down" />
      <LinearGradient
     colors={['transparent', '#d3d3d3']} // light grey
     style={{
    position: 'absolute',
    height: 200,
    left: 0,
    bottom: -19,
    right: 0,
  }}
/>
      </View>
    

<View style={styles.contentContainer}>

<Image source={require('@/assets/images/wolt-logo.png')} style={styles.brandLogo}/>
<Animated.Text entering={FadeInDown} style={styles.tagline}>Almost everything delivered</Animated.Text>
{/* Login buttons  */}
<View  style={styles.buttonContainer}>
  
<Animated.View entering={FadeInDown.delay(100)}>
  <AppleAuthButton />
</Animated.View>

<Animated.View entering={FadeInDown.delay(200)}>
  <GoogleAuthButton/>
</Animated.View>
<Animated.View entering={FadeInDown.delay(300)}>
  <Link href={'/(app)/(public)/other-options'} asChild>
<TouchableOpacity style={styles.otherButton}>
  <Text  style={styles.otherButtonText}>Other Options </Text>
</TouchableOpacity>
</Link>
</Animated.View>
 
</View>
<Animated.View  style={styles.privacyContainer} entering={FadeInDown.delay(400)}>
<Text  style={styles.privacyText}>Please visit{' '}
  <Text style={styles.privacyLink} onPress={openWebBrowser}>
    Wolt Privacy Statement
  </Text>
</Text>
</Animated.View>
</View>
</View>   
  );
}

const styles=StyleSheet.create({
container:{
flex:1,
},
infiniteScrollContainer:{
flex:0.8,
flexDirection:'row',
justifyContent: 'center',
alignItems:'center',
gap:4, 
},
contentContainer:{
flex:1,
alignItems: 'center',
paddingHorizontal:30,
paddingVertical:20,
},
buttonContainer:{
  gap: 12 ,
  width:'100%',
},
brandLogo:{
  width:'100%',
  height: 48,
  resizeMode: 'contain',
  marginBottom: 20,
},
tagline:{
  fontSize: 36,
  fontFamily: Fonts.brandBlack,
},
otherButton:  {
  backgroundColor: '#f0f0f0',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  paddingVertical: 17 ,
  borderRadius: 12 ,
  gap:4,
},

otherButtonText: {
        color: '#666',
        fontSize: 18,
        fontWeight:'600',
},

privacyContainer:{
marginTop: 30,
paddingHorizontal:20,
},
privacyText:{
  fontSize: 12,
  color:'#999',
  textAlign:'center',
  lineHeight:18,
},
privacyLink:{
  color:'#4285F4',
  textDecorationLine: 'underline',
},

});
