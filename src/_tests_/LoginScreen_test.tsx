import React from 'react';
import LoginScreen from '../Screens/Components/LoginScreen';
import {fireEvent, render} from '@testing-library/react-native';

describe("login screen",()=>{
    it("should go to userdata page on login",()=>{
        const navigation:any={navigate:()=>{}}
        spyOn(navigation, 'navigate');
        const page = render(<LoginScreen navigation={navigation} />)
        const loginButton=page.getByTestId('loginButton')
        fireEvent.press(loginButton)
        expect(navigation.navigate.toHaveBeenCalledwith("RegisterScreen"))
    })
})