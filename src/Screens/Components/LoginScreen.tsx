// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
 
// Import React and Component
import React, {useState, createRef, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {userdata}  from '../../store/actions/app';




const LoginScreen = () => {
  
  const navigation = useNavigation();
  const dispatch:any = useDispatch();
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [errortext, setErrortext] = useState('');

  useEffect(() => {
    // Update the document title using the browser API
    // dispatch(fragrance())
  },[])

 const loginuser=async() => {
  try{
    let response=await auth().signInWithEmailAndPassword(email,Password)
    if(response){
      console.log('resonse---->',response)
      Alert.alert(' Login successfully')
      navigation.navigate('UsersList')
      dispatch(userdata({}))
    }

  }
  catch (error){
     console.log("error msg--->", error)
     Alert.alert(`${error}`)
  }
 }

  const handleSubmitPress=()=>{

  }
 
  return (
    <View style={{flex:1,marginTop:20}}>
      <Text style={{color:'#555555',marginTop:20,fontSize:20,textAlign:'center',justifyContent:'center'}}>Login Screen</Text>
    <View style={styles.mainBody}>
            <View style={styles.SectionStyle}>
              <TextInput
              value={email}
                style={styles.inputStyle}
                onChangeText={(email) =>
                  setEmail(email)
                }
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
              value={Password}
                style={styles.inputStyle}
                onChangeText={(Password) =>
                  setPassword(Password)
                }
                placeholder="Enter Password" 
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>

            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={loginuser}
              testID="loginButton"
              >  
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
              {/* <Text
              style={styles.registerTextStyle}
              onPress={() =>navigation.navigate('RegisterScreen')}>
            </Text> */}
            </TouchableOpacity>
    </View>
    </View>
  );
};
export default LoginScreen;
 
const styles = StyleSheet.create({
  mainBody: {
    flex:2,
    marginBottom:50,
    justifyContent: 'center',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    // color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});