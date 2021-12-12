import React from "react";
import {Text, Image,  SafeAreaView, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, TextInput, Alert,ScrollView,ActivityIndicator} from 'react-native'
import styles from './styles'
import  Axios  from "axios";
import base_url from "../../base_url";

class CreateNewPassword extends React.Component{

    state = {
        showPass: true,
        showRetypePass:true,
        password:'',
        confirmpassword:'',
        isLoading:false
    }

    create_new_password = ()=>{

        if(this.state.password.length>0 && this.state.confirmpassword == this.state.password ){
            this.setState({isLoading:true})
            let formData = new FormData();
            formData.append('password',this.state.password)
            formData.append('user_id',this.props.route.params.user_id)
            Axios.post(base_url+'/apis/user/create_new_password',formData)
            .then(res=>{
                this.setState({isLoading:false})

                Alert.alert(res.data.msg)
                if(res.data.msg == "Password Has Been Updated"){
                    this.props.navigation.reset({
                        index:0,
                        routes:[{name:'SignIn'}],
                       
                    });
                }

            })
            .catch(err=>{
                this.setState({isLoading:false})
                Alert.alert("Something Went Wrong")
            })

        }else{
            Alert.alert("Please Confirm Your Password")
        }

    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.NewPassWordInfo}>
                    <Text style={styles.CreateNewPassText}>Create New Password</Text>
                    <Text style={styles.PleaseSetYourPasswordForLogin}>Please set your password for login</Text>
                </View>
                <View style={styles.EnteringData}>
                
                <Text style={styles.PasswordPlaceholder}>Password</Text>
                <View style={styles.PasswordInput}>

                <TouchableOpacity style={styles.LockButton}>
                <Image source={require('../../assets/lock.png')} style={styles.LockImageStyle}/>
                </TouchableOpacity>

                <TextInput onChangeText={(e) => this.setState({password:e})} secureTextEntry={this.state.showPass} style={styles.InputField}/>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                
               </View>

               <Text style={styles.PasswordPlaceholder}>Retype Password</Text>
               <View style={styles.ConfirmPasswordInput}>

               <TouchableOpacity style={styles.LockButton}>
                <Image source={require('../../assets/lock.png')} style={styles.LockImageStyle}/>
                </TouchableOpacity>

                <TextInput  onChangeText={(e) => this.setState({confirmpassword:e})} secureTextEntry={this.state.showRetypePass} style={styles.InputField}/>

                {this.state.showRetypePass == true ? 
                <TouchableOpacity onPress={() => this.setState({showRetypePass:!(this.state.showRetypePass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showRetypePass:!(this.state.showRetypePass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>}
                
               </View>
               {this.state.isLoading?<ActivityIndicator size="large" color="blue"/>:null}
            <TouchableOpacity onPress={this.create_new_password} style={styles.ContinueButton}>
                    <Text style={styles.ContinueButtonText}>Continue</Text>
            </TouchableOpacity>

                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default CreateNewPassword;