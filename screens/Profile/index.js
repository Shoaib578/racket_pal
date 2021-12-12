import React from 'react'
import {Text, View, SafeAreaView, TouchableOpacity, Image, Alert} from 'react-native'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Axios  from 'axios'
import base_url from '../../base_url'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import GetLocation from 'react-native-get-location'

class Profile extends React.Component{
    state = {
        user_info:'',
       
    }
    sign_out = async()=>{
       await AsyncStorage.removeItem('user')
       this.props.navigation.reset({
        index:0,
        routes:[{name:'SignIn'}],
       
    });
    }
   
    change_user_location = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
          
            
            
                
                let formData = new FormData();
                formData.append("user_id",parse._id)
                formData.append('latitude',location.latitude)
                formData.append('longitude',location.longitude)
                
                Axios.post(base_url+'/apis/clubs/changeuserlocation',formData)
                .then(res=>{
                    Alert.alert(res.data.msg)
                })
            
        })
        .catch(error => {
           
            
            return Alert.alert("Please Turn on the location option")
           
        })
        
       
     
    }
    get_user_info = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        Axios.get(base_url +'/apis/user/profile_screen?user_id='+parse._id)
        .then(res=>{
            console.log(res.data.user)
            this.setState({user_info:res.data.user})
        })
    }
    componentDidMount(){
        this.get_user_info()
        this.props.navigation.addListener('focus',()=>{
            this.get_user_info()
          })
       
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.ProfileWithImage}>
                    
                    {this.state.user_info?<Image style={styles.ProfileImage} source={{uri:base_url+'/uploads/'+this.state.user_info.person.profile_image}}/>:<FontAwesome name="user" size={60} color="white" />}
                    
                    <View>
                    <View style={styles.NameWithEditButton}>
                    {this.state.user_info? <Text style={styles.Name}>{this.state.user_info.person.firstname} {this.state.user_info.person.lastname}</Text> :null}
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditProfile',{id:this.state.user_info._id})} style={{marginLeft:13}}>
                        <Image style={styles.EditIcon} source={require('../../assets/edit.png')}/>
                        </TouchableOpacity>
                    </View>
                    {this.state.user_info? <Text style={styles.Email}>{this.state.user_info.email}</Text>:null}
                    </View>
                </View>
                {/* <TouchableOpacity style={styles.GoBox}>
                    <Image style={styles.MyDetailsIcon} source={require('../../assets/myDetails.png')}/>
                    <Text style={styles.MyDetails}>My Details</Text>
                    <Image style={styles.goArrowIcon} source={require('../../assets/goArrow.png')}/>
                </TouchableOpacity> */}
                


                <TouchableOpacity onPress={this.change_user_location} style={styles.new_location_Button}>
                    <Text style={styles.new_location_text}>Upload your new location</Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={this.sign_out} style={styles.LogOutButton}>
                    <Image style={styles.LogoutIcon} source={require('../../assets/logoutIcon.png')}/>
                    <Text style={styles.LogoutText}>Log Out</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default Profile