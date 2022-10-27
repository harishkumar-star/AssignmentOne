// Import React and Component
import React, {useState, createRef, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { userdata } from '../../store/actions/app';
import axios from 'axios';
  
 const RegisterScreen = () => {
    const navigation = useNavigation();
    const dispatch:any = useDispatch();
  const [userName, setUserName] = useState('');
  const [email, setemail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [Password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);
 
  const createUser=async() => {
    try{
      let response=await auth().createUserWithEmailAndPassword(email,Password)
      if(response){
    
        console.log('resonse---->',response)
        Alert.alert('account created successfully')
        navigation.navigate('LoginScreen')  
      }
  
    }
    catch (error){
       console.log("error msg--->", error)
       Alert.alert(`${error}`)
    }
   }
  
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Text style={styles.successTextStyle}>
          Registration Successful
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
        //   onPress={() => props.navigation.navigate('LoginScreen')}
          >
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#307ecc'}}>
        <Text style={{fontSize:20,marginTop:20,justifyContent:'center',textAlign:'center',color:'white'}}>Registration Screen</Text>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>

        <KeyboardAvoidingView enabled>
            <View style={{justifyContent:'center',alignContent:'center',marginTop:100}}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
              false
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
            value={email}
              style={styles.inputStyle}
              onChangeText={(email) => setemail(email)}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() =>
               false
              }
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
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
              false
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserAge) => setUserAge(UserAge)}
              underlineColorAndroid="#f000"
              placeholder="Enter Age"
              placeholderTextColor="#8b9cb5"
              keyboardType="numeric"
              returnKeyType="next"
              onSubmitEditing={() =>
                false
              }
              blurOnSubmit={false}
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            testID="registerbutton"
            
            activeOpacity={0.5}
            onPress={createUser}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>

            <Text
            style={{marginTop:5}}
            testID="registeredbtn"
              onPress={() =>navigation.navigate('LoginScreen')}>
                if already registered?? SiginIn
            </Text>
          </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;
 
const styles = StyleSheet.create({
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
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});