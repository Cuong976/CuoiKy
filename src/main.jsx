import { StyleSheet, Text, View, SafeAreaView,ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Main() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={{uri: 'https://i.pinimg.com/564x/77/4a/24/774a2446a938bc4ad9a90687d638c199.jpg'}} style={styles.main}>
      <TouchableOpacity style={{width:'50%', height:50, alignItems:'center', justifyContent:'center', backgroundColor:'violet', borderRadius:120, top:'85%'}}
                        onPress={() => {navigation.navigate('DreamScreen')}}>
        <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>Next</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center'
    }
})