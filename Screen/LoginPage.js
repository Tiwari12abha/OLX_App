import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Ionicons';

///person
export default function LoginPage() {
  const navigation = useNavigation();
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [Remember, setRemember] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View
      style={{flex: 1, width: '100%', backgroundColor: 'white', padding: 20}}>
      <Text style={{fontSize: 40, fontWeight: 400, color: '#000000'}}>Hi</Text>
      <Text style={{fontSize: 40, fontWeight: 400, color: '#000000'}}>
        Welcome 
      </Text>
      <View style={{marginVertical: 50}}>
        <View>
          <View style={styles.input}>
            <View
              style={{
                justifyContent: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                paddingLeft: 10,
              }}>
              <Octicons name="person" size={22} color="black" />
              <TextInput
                style={{width: '100%', paddingLeft: 10}}
                placeholder=""
                onChangeText={txt => {
                  setName(txt);
                }}
              />
            </View>
          </View>
          <View
            style={[
              styles.labelContainer,
              {
                top: -9,
              },
            ]}>
            <Text
              style={[
                styles.label,
                {
                  fontSize: 16,
                },
              ]}>
              Your name
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <View style={styles.input}>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '90%',
                  paddingLeft: 10,
                }}>
                <Icon name="key-outline" size={22} color="black" />
                <TextInput
                  style={{width: '90%', paddingLeft: 10}}
                  placeholder=""
                  secureTextEntry={!showPassword}
                  placeholderTextColor={'#000'}
                  onChangeText={txt => {
                    setPassword(txt);
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={{paddingHorizontal: 8, paddingVertical: 8}}>
                <Icon
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={24}
                  color={showPassword ? 'gray' : 'black'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              styles.labelContainer,
              {
                top: -9,
              },
            ]}>
            <Text
              style={[
                styles.label,
                {
                  fontSize: 16,
                  // color: 'Red' ,
                },
              ]}>
              Password
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
          <TouchableOpacity style={styles.checkbox} onPress={() => {
          setRemember(!Remember);
        }}>
            {Remember && <Octicons name="check" size={18} color="white" />}
          </TouchableOpacity>
          <Text style={{fontSize: 14, fontWeight: 600,paddingTop:1}}>{"  "}Remember me</Text>
          </View>
          <TouchableOpacity  onPress={() => {
          console.log('hhh');
        }}>
          <Text style={{fontSize: 14, fontWeight: 600,paddingTop:1}} >Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={{
          alignItems: 'center',
          backgroundColor: '#0B0B45',
          borderRadius: 12,
          padding: 20,
          marginVertical: 8,
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 600}}>
          Log in
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:15}}>
      <View style={{borderBottomWidth:2,width:'35%',borderBottomColor:'#DADADA'}}></View>
      <Text  style={{fontSize: 10, fontWeight: 600,}}>Or Sign up with</Text>
      <View style={{borderBottomWidth:2,width:'35%',borderBottomColor:'#DADADA'}}></View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingVertical:15}}>
      <Text  style={{fontSize: 14, fontWeight: 600,}}>Don't have an account yet?</Text>
      <TouchableOpacity    onPress={() => {
          console.log('hhh');
        }}>
      <Text  style={{fontSize: 14, fontWeight: 800,color:'black'}}>Sign up</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    left: 16,
    top: -6,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
    color: '#000000',
    // color: 'black'
  },
  input: {
    // marginTop:20,
    padding: 10,
    borderColor: '#B9C4CA',
    borderWidth: 2,
    borderRadius: 10,
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
  },
  checkbox: {
    height: 25,
    width: 25,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#0B0B45',
    borderRadius: 50/2,
    alignItems:'center',
    
  },
});
