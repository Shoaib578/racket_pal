import React from 'react'
import {Text, SafeAreaView, View, TouchableOpacity, Image, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Alert} from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import * as ImagePicker from "react-native-image-picker"
import styles from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'
import  Axios  from 'axios'
import base_url from '../../base_url'
import {Picker} from '@react-native-picker/picker';

class EditProfile extends React.Component{
    state = {
        showPassword:true,
        firstname:'',
        email:'',
        lastname:'',
        age:'',
        image:'',
        password:'',
        isLoading:true,
        user:'',
        gender:'',
        role:'',
        sports_interest:'',
        sports_interests:[],
        skill:'',
        updating_loading:false

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


      get_all_sports_name = ()=>{
        Axios.get(base_url+'/apis/user/get_all_sports_interests')
        .then(res=>{
            
            this.setState({sports_interests:res.data.sports})
        })
    }
      get_user_info = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        Axios.get(base_url+'/apis/user/profile_screen?user_id='+parse._id)
        .then(res=>{
          
            this.setState({isLoading:false,user:res.data.user,
                gender:res.data.user.person.gender,
                skill:res.data.user.player.player_skill,
                age:res.data.user.person.age,
                firstname:res.data.user.person.firstname,
                lastname:res.data.user.person.lastname,
                email:res.data.user.email,
             


                
            })

            if(res.data.user.is_coach == 1){
              
                this.setState({role:'coach'})
            }else if(res.data.user.is_player == 1){
                this.setState({role:'player'})
            }else if(res.data.user.is_club == 1){
                this.setState({role:'club'})
            }   

            console.log('this is the role '+res.data.user.is_player)
            
            res.data.user.sports.map(data=>{
                console.log(data.name)
                this.setState({sports_interest:data._id})
            })
        })



      }

      update = ()=>{
         
          this.setState({updating_loading:true})
            let formData = new FormData()
            formData.append('user_id',this.props.route.params.id)

            if(this.state.image.uri){
                formData.append('picture', {
                    name: this.state.image.fileName,
                    type: this.state.image.type,
                    uri: Platform.OS === 'ios' ? this.state.image.uri.replace('file://', '') : this.state.image.uri,
                });
            }
           

            formData.append('email',this.state.email)
            formData.append('password',this.state.password)

            formData.append('age',this.state.age)
            formData.append('firstname',this.state.firstname)
            formData.append('lastname',this.state.lastname)
            formData.append('role',this.state.role)
            formData.append('gender',this.state.gender)
            
            
            formData.append('sports_interest',this.state.sports_interest)
             formData.append('player_skill',this.state.skill)
         
          Axios.post(base_url+'/apis/user/update_profile',formData)
          .then(res=>{
            this.setState({updating_loading:false})

              Alert.alert(res.data.msg)
          })
         
      }

      componentDidMount(){
          this.get_user_info()
          this.get_all_sports_name()
      }
    ToSignIn(){
        this.props.navigation.navigate('SignIn')
    }


    render(){
        if(this.state.isLoading == false){

        return(
            
            <SafeAreaView style={{flex:1, backgroundColor:'#FFFFFF'}}> 
            <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                <View style={styles.content}>
                <Text style={styles.LoginHeading}>Update Profile</Text>
                <Text style={styles.Enteryouremailsandpassword}>Update your profile</Text>

                <TouchableOpacity style={{width:100, height:100, borderRadius:50, backgroundColor:'green', alignSelf:'center', marginTop:'6%',justifyContent:'center',alignItems:'center'}} onPress={() => this.choosePhoto()}>
                {this.state.image.uri?<Image style={{width:100, height:100, borderRadius:100, backgroundColor:'green'}} source={{uri: this.state.image.uri}}/>:<Image style={{width:100, height:100, borderRadius:100, backgroundColor:'green'}} source={{uri:base_url+'/uploads/'+ this.state.user.person.profile_image}}/>}
                </TouchableOpacity>

                <View style={styles.UserNameInput}>
                <TextInput onChangeText={(e) => this.setState({firstname:e})} value={this.state.firstname} placeholderTextColor="#929292" placeholder="First Name" style={styles.InputField}/>
                </View>

                <View style={styles.UserNameInput}>
                <TextInput onChangeText={(e) => this.setState({lastname:e})} value={this.state.lastname} placeholderTextColor="#929292" placeholder="Last Name" style={styles.InputField}/>
                </View>

                <View style={styles.UserNameInput}>
                <TextInput onChangeText={(e) => this.setState({age:e})} value={this.state.age.toString()} placeholderTextColor="#929292" placeholder="Age" style={styles.InputField}/>
                </View>

                <View style={styles.EmailInput}>
                <TextInput onChangeText={(e) => this.setState({email:e})} value={this.state.email} placeholderTextColor="#929292" placeholder="Email" style={styles.InputField}/>
                </View>


                <View>
                    <Text>Gender</Text>
                <Picker
                selectedValue={this.state.gender}
                onValueChange={(itemValue, itemIndex) =>
                   this.setState({gender:itemValue})
                }>
                <Picker.Item label="Select Your Gender" value="" />

                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
                </Picker>
                </View>
               


               
                <View style={{marginTop:5}}>
                <Text>Role</Text>
                <Picker
                selectedValue={this.state.role}
                onValueChange={(itemValue, itemIndex) =>
                   this.setState({role:itemValue})
                }>
                
                

                <Picker.Item label="Player" value='player' />
                <Picker.Item label="Coach" value="coach" />
                <Picker.Item label="Club" value="club" />

                </Picker>
                </View>

                <View style={{marginTop:5}}>
                <Text>Skill Level</Text>
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
                </View>


                <View style={{marginTop:5}}>
                    <Text>Sports Interest</Text>
                <Picker
                selectedValue={this.state.sports_interest}
                onValueChange={(itemValue, itemIndex) =>
                   this.setState({sports_interest:itemValue})
                }>
                
                {this.state.sports_interests.map(data=>{
                    if(data._id == this.state.sports_interest){
                        return(
                            <Picker.Item key={data._id} label={data.name} value={data._id} />
    
                        )
                    }else {
                        return(
                            <Picker.Item key={data._id} label={data.name} value={data._id} />
    
                        )
                    }
                   
                })}
               
                </Picker>
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
                <TextInput onChangeText={(e) => this.setState({password:e})} secureTextEntry={this.state.showPassword} placeholderTextColor="#929292" placeholder="Password" style={styles.InputField}/>
                </View>


                {this.state.updating_loading?<ActivityIndicator size="large" color="blue" style={{alignSelf:'center'}}/>:null}
                <TouchableOpacity onPress={this.update} style={styles.SignUpButton}>
                    <Text style={styles.SignUpText}>Update</Text>
                </TouchableOpacity>
                </View>
                </View>
                </TouchableWithoutFeedback>
                </ScrollView>
            </SafeAreaView>
            
            
        )
    }else{
        return(
            <ActivityIndicator size="large" color="blue" style={{alignSelf: 'center',marginTop:30}}/>
        )
    }

    }
}

export default EditProfile