import { View, Text,StyleSheet,TextInput} from 'react-native';
import React,{useEffect,useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';



export default function Search({text,onfilter,onfocus}) {
    const showInput=useRef();
  return (
    <View style={styles.search}>
      <TextInput
      ref={showInput}
      placeholder={'Search for Item'}
      placeholderTextColor={'gray'}
      onChangeText={onfilter}
      style={styles.TextStyle}/>
        <Icon 
        style={{position:'absolute',right:15}}
        name={'search'} size={15} 
        color={'#444444'}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    search: {
        flexDirection:'row',
        alignItems:'center',
        borderRadius:5,
        paddingHorizontal:5,
        marginVertical:10,
        backgroundColor:'#DEDEDE'
    },
    TextStyle: {
        width:'100%',
        backgroundColor:'#DEDEDE',
        color:'#3D3D3D',
        fontWeight: '400',
    },
  });