import React from "react";
import {Text,  SafeAreaView, TouchableOpacity, View, Keyboard, Alert,TouchableWithoutFeedback, TextInput, ActivityIndicator} from 'react-native'
import styles from './styles'
import base_url from "../../base_url";
import Axios from 'axios'
class ForgotPassword extends React.Component{
    state = {
        email:'',
        isLoading:false
    }
    VerifyOTP = (id,otp)=>{
        this.props.navigation.navigate('OTP',{user_id:id,otp:otp})
    }

    ForgotPassword = ()=>{
        this.setState({isLoading:true})
        let formData =new FormData();
        formData.append("email",this.state.email)
        Axios.post(base_url +'/apis/user/forgot_password',formData)
        .then(res=>{
            this.setState({isLoading:false})
            if(res.data.msg == "Verification Code Sent"){
                this.VerifyOTP(res.data.user_id,res.data.otp)

            }else{
                return Alert.alert(res.data.msg)
            }
        })
    }
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.ForgotPassInfo}>
                    <Text style={styles.ForgotPassText}>Forgot password</Text>
                    <Text style={styles.EnterEmailToResetPassText}>Please enter your email address to reset your password</Text>
                </View>
                <View style={styles.EnteringData}>
                    <TextInput onChangeText={(e) => this.setState({email:e})} style={styles.EmailInput} placeholderTextColor="#929292" placeholder="Email"/>
                    
                    {this.state.isLoading?<ActivityIndicator size="large" color="blue"/>:null}
            <TouchableOpacity onPress={() => this.ForgotPassword()} style={styles.ContinueButton}>
                    <Text style={styles.ContinueButtonText}>Continue</Text>
            </TouchableOpacity>
                </View>
            </SafeAreaView>
            </TouchableWithoutFeedback>
        )
    }
}

export default ForgotPassword;