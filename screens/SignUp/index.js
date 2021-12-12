import React from 'react'
import {Text, SafeAreaView, View, TouchableOpacity, Image, TextInput, ScrollView, TouchableWithoutFeedback,Alert, Keyboard, ActivityIndicator} from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import * as ImagePicker from "react-native-image-picker"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SignIn from '../SignIn'
import styles from './styles'
import base_url from '../../base_url'
import Axios from 'axios'
import {Picker} from '@react-native-picker/picker';
import GetLocation from 'react-native-get-location'
class SignUp extends React.Component{
    state = {
        showPassword:true,
        firstname:'',
        password:'',
        email:'',
        lastname:'',
        image:'',
        age:'',
        gender:'',
        role:'',
        sports_interest:'',
        sports_interests:[],
        skill:'',
        
        isLoading:false,
        location_per:false,
        per_to_sign_up:false

    }
    SignUp  = ()=>{
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
           
            if(this.state.image.length<1 || this.state.firstname.length<1 || this.state.lastname.length <1 || this.state.email.length<1 || this.state.password.length<1 ||  this.state.gender.length<1 || this.state.role.length<1 || this.state.skill.length<1 || this.state.sports_interest.length<1){
               
                
                Alert.alert('Please Fill All the Field')
            }else{
                this.setState({per_to_sign_up:true})
                
    
                this.setState({isLoading: true})
                let formData = new FormData()
                formData.append('email',this.state.email)
                formData.append('password',this.state.password)
                formData.append('picture', {
                   name: this.state.image.fileName,
                   type: this.state.image.type,
                   uri: Platform.OS === 'ios' ? this.state.image.uri.replace('file://', '') : this.state.image.uri,
                 });
                
                 formData.append('role',this.state.role)
                 formData.append('firstname',this.state.firstname)
                 formData.append('lastname',this.state.lastname)
                 formData.append('age',this.state.age)
                 formData.append('gender',this.state.gender)
                
                 formData.append('player_skill',this.state.skill)
                 formData.append('sports_interest',this.state.sports_interest)
                 formData.append('latitude',location.latitude)
                 formData.append('longitude',location.longitude)
                 Axios.post(base_url+'/apis/user/register_user',formData)
                 .then(res=>{
                    this.setState({isLoading:false})
                   if(res.data.msg == "User Registered Successfully"){
                       this.setState({
                           email:"",
                           password:"",
                           gender:"",
                           age:"",
                           role:"",
                           firstname:"",
                           lastname:"",
                           image:'',
                           skill:'',
                           sports_interest:'',
                       })
                   }
                   
                   
                    Alert.alert(res.data.msg)
                    
                 })
    
                 .catch(err=>{
                     this.setState({isLoading:false})
                     Alert.alert("Something Went Wrong")
                 })
            }

            
        })
        .catch(error => {
         Alert.alert("Please Turn on the location option")
           
            
        })
    }


    get_all_sports_name = ()=>{
        Axios.get(base_url+'/apis/user/get_all_sports_interests')
        .then(res=>{
            
            this.setState({sports_interests:res.data.sports})
        })
    }

   

    componentDidMount(){
        this.get_all_sports_name()
       
      
      
    }

    choosePhoto(){
        const options = {
          noData:true
        };
        ImagePicker.launchImageLibrary(options, response => {
          console.log("response", response);
          if(response.assets){
          
         
            response.assets.map(data=>{
                this.setState({image:data})
            })
        }
         
        });
      }
    ToSignIn(){
        this.props.navigation.navigate('SignIn')
    }

    gender = ["Male", "Female"]
    
    roles = ["Player", "Coach"]
    render(){
        return(
            
            <SafeAreaView style={{flex:1, backgroundColor:'#FFFFFF'}}> 
            <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                <View style={styles.content}>
                <Text style={styles.LoginHeading}>Sign Up</Text>
                <Text style={styles.Enteryouremailsandpassword}>Enter your credentials to continue</Text>

                <TouchableOpacity style={{width:100, height:100, borderRadius:50, backgroundColor:'green', alignSelf:'center', marginTop:'6%',justifyContent:'center',alignItems:'center'}} onPress={() => this.choosePhoto()}>
                {this.state.image.uri?<Image style={{width:100, height:100, borderRadius:100, backgroundColor:'green'}} source={{uri: this.state.image.uri}}/>:<FontAwesome name="user" size={60} color="white" />}
                </TouchableOpacity>

                <View style={styles.UserNameInput}>
                <TextInput value={this.state.firstname} onChangeText={(e) => this.setState({firstname:e})} placeholderTextColor="#929292" placeholder="First Name" style={styles.InputField}/>
                </View>

                <View style={styles.UserNameInput}>
                <TextInput value={this.state.lastname} onChangeText={(e) => this.setState({lastname:e})} placeholderTextColor="#929292" placeholder="Last Name" style={styles.InputField}/>
                </View>

                <View style={styles.UserNameInput}>
                <TextInput value={this.state.age} onChangeText={(e) => this.setState({age:e})} keyboardType='numeric' placeholderTextColor="#929292" placeholder="Age" style={styles.InputField}/>
                </View>


               


                <View style={styles.EmailInput}>
                <TextInput value={this.state.email} onChangeText={(e) => this.setState({email:e})} placeholderTextColor="#929292" placeholder="Email" style={styles.InputField}/>
                </View>

                <View style={styles.PasswordInput}>
                {this.state.showPassword ?
                <TouchableOpacity onPress={() => this.setState({showPassword:!(this.state.showPassword)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => this.setState({showPassword:!(this.state.showPassword)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.CrossEyeImageStyle}/>
                </TouchableOpacity>
                }
                <TextInput value={this.state.password} onChangeText={(e) => this.setState({password:e})} secureTextEntry={this.state.showPassword} placeholderTextColor="#929292" placeholder="Password" style={styles.InputField}/>
                </View>
               
               
                <Picker
                selectedValue={this.state.gender}
                onValueChange={(itemValue, itemIndex) =>
                   this.setState({gender:itemValue})
                }>
                <Picker.Item label="Select Your Gender" value="" />

                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
                </Picker>
               


               

                <Picker
                selectedValue={this.state.role}
                onValueChange={(itemValue, itemIndex) =>
                   this.setState({role:itemValue})
                }>
                <Picker.Item label="Select Your Role" value="" />

                <Picker.Item label="Player" value='player' />
                <Picker.Item label="Coach" value="coach" />
                <Picker.Item label="Club" value="club" />

                </Picker>

                <Picker
                selectedValue={this.state.skill}
                onValueChange={(itemValue, itemIndex) =>
                   this.setState({skill:itemValue})
                }>
                <Picker.Item label="Select Your Skill Level" value="" />

                <Picker.Item label="Intermediate" value='Intermediate' />
                <Picker.Item label="Competent" value="Competent" />
                <Picker.Item label="Professional" value="Professional" />

                </Picker>


                
                <Picker
                selectedValue={this.state.sports_interest}
                onValueChange={(itemValue, itemIndex) =>
                   this.setState({sports_interest:itemValue})
                }>
                <Picker.Item label="Select Your Sports Interest" value="" />
                {this.state.sports_interests.map(data=>{
                    return(
                        <Picker.Item key={data._id} label={data.name} value={data._id} />

                    )
                })}
               
                </Picker>

                


             

                {this.state.isLoading?<ActivityIndicator size="large" color="blue"/>:null}
                <TouchableOpacity disabled={this.state.per_to_sign_up} onPress={this.SignUp} style={styles.SignUpButton}>
                    <Text style={styles.SignUpText}>Sign Up</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.DontHaveAnAccount}>
                    <Text style={styles.DonthaveanaccountText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => this.ToSignIn()}>
                    <Text style={styles.DonthaveanaccountSignInText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                </View>
                </TouchableWithoutFeedback>
                </ScrollView>
            </SafeAreaView>
            
            
        )
    }
}

export default SignUp