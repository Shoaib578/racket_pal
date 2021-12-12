import React from 'react'
import {Text, SafeAreaView, View, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback,ActivityIndicator, Keyboard, ScrollView, Alert} from 'react-native'
import base_url from '../../base_url'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import  Axios  from 'axios'

class SignIn extends React.Component{
    state = {
        showPassword:true,
        email:'',
        password:'',
        isLoading:false
    }
    signUp(){
        this.props.navigation.navigate('SignUp')
    }

    Login(){
        if(!this.state.email.includes('@') || this.state.email.length<4){
            return Alert.alert('Invalid Email')
        }

        if(this.state.password.length <1){
            return Alert.alert('Please Enter the Password')
        }

        this.setState({isLoading:true})
        let formData = new FormData()
        formData.append('email',this.state.email)
        formData.append('password',this.state.password)
        Axios.post(base_url+'/apis/user/login_user',formData)
        .then(async(res)=>{
            this.setState({isLoading:false})
            if(res.data.msg == "logged in Succesfully"){
                
               await AsyncStorage.setItem('user',JSON.stringify(res.data.user))
                this.props.navigation.reset({
                    index:0,
                    routes:[{name:'Home'}],
                   
                });
            }else{
                return Alert.alert(res.data.msg)
            }
        })
        .catch(err=>{
            this.setState({isLoading:false})
            return Alert.alert("Something Went Wrong")
        })
        
    }

    ForgotPass(){
        this.props.navigation.navigate('ForgotPassword')
    }
    render(){
        return(
            <ScrollView style={{flex:1, backgroundColor:'#FFFFFF'}}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                <Text style={styles.LoginHeading}>Login</Text>
                <Text style={styles.Enteryouremailsandpassword}>Enter your emails and password</Text>
                <Text style={styles.EmailLabel}>Email</Text>

                <View style={styles.EmailInput}>
                <TextInput onChangeText={(e) => this.setState({email:e})} placeholderTextColor="#929292" placeholder="Email" style={styles.InputField}/>
                </View>

                <Text style={styles.PasswordLabel}>Password</Text>
                <View style={styles.PasswordInput}>
                {this.state.showPassword ?
                <TouchableOpacity onPress={() => this.setState({showPassword:!(this.state.showPassword)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => this.setState({showPassword:!(this.state.showPassword)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.CrossEyeImageStyle}/>
                </TouchableOpacity>
                }
                <TextInput onChangeText={(e) => this.setState({password:e})} secureTextEntry={this.state.showPassword} placeholderTextColor="#929292" placeholder="Password" style={styles.InputField}/>
                </View>
                <View style={styles.ForgotPasswordButton}>
                <TouchableOpacity onPress={() => this.ForgotPass()}>
                <Text style={styles.ForgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                </View>
                {this.state.isLoading?<ActivityIndicator color="blue" size="large" />:null}
                <TouchableOpacity onPress={() => this.Login()} style={styles.LoginButton}>
                    <Text style={styles.LoginText}>log In</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.DontHaveAnAccount}>
                    <Text style={styles.DonthaveanaccountText}>Don’t have an account?</Text>
                    <TouchableOpacity onPress={() => this.signUp()}>
                    <Text style={styles.DonthaveanaccountSignUpText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            </TouchableWithoutFeedback>
            </ScrollView>
        )
    }
}

export default SignIn