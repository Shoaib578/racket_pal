
import React from 'react'
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator,TouchableWithoutFeedback, Keyboard, FlatList, ScrollView} from 'react-native'

import styles from './styles'
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import base_url from '../../base_url'
import GetLocation from 'react-native-get-location'

class Coaches extends React.Component {
    state = {
        coaches:[],
        isLoading:true,
        network_error:false,
        
    }

    get_all_coaches = ()=>{
        Axios.get(base_url+'/apis/coaches/get_all_coaches')
        .then(res=>{
            console.log(res.data.coaches)
            this.setState({coaches:res.data.coaches,isLoading:false})
        })
        .catch(err=>{
            this.setState({isLoading:false,network_error:true})
        })
    }
   
    Search = (text)=>{
        Axios.get(base_url+'/apis/coaches/search_coaches?search='+text)
        .then(res=>{
            this.setState({coaches:res.data.coaches,isLoading:false})
        })
        .catch(err=>{
            this.setState({isLoading:false,network_error:true})

        })
    }


    componentDidMount(){
        this.get_all_coaches()
       
    }
    render(){
        if(this.state.network_error == false){
            return(
               
                   
                <SafeAreaView style={styles.container}>
                    {/* <View style={styles.Location}>
                        <Image style={styles.mapIcon} source={require('../../assets/mapIcon.png')}/>
                        <Text style={styles.LocationName}>Dhaka, Banassre</Text>
                    </View> */}
                    <View style={styles.SearchInput}>
    
                    <TouchableOpacity style={styles.SearchButton}>
                    <Image source={require('../../assets/search.png')} style={styles.SearchIconStyle}/>
                    </TouchableOpacity>
    
                    <TextInput onChangeText={(val)=>{
                        if(val.length>0){
                            this.setState({isLoading:true})
                            this.Search(val)
                        }else{
                            this.get_all_coaches()
                        }
                    }} placeholder="Search" style={styles.InputField}/>
                   </View>
                   <Text style={styles.CoachHeading}>Coaches</Text>
                   {this.state.isLoading == false?<View>
    
                    {this.state.coaches.length>0? 
                    <View style={{width:"100%",marginBottom:'40%'}}>
                    <FlatList
                  
                    numColumns={2}
                    data={this.state.coaches}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('CoachDetails',{id:item._id})} style={styles.CoachStyle}>
                            <Image style={{width:'100%', height:120,borderRadius:5}} source={{uri:base_url+'/uploads/'+item.person.profile_image}}/>
                            <Text style={styles.CoachName}>{item.person.firstname}</Text>
                        </TouchableOpacity>
                    )}/>
                  </View>
                   :null}
                   </View>:
                       <ActivityIndicator size="large" color="blue" style={{marginTop:30}}/>
                   
                   }
    
                </SafeAreaView>
                
               
            )
        }else{
            return(
                <View style={{marginTop:50,alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                    <Text style={{color:'red',fontSize:18}}>Network Error Please</Text>
                    <TouchableOpacity onPress={()=>{
                        this.setState({isLoading:true,network_error:false})
                        this.get_all_coaches()
                    }}>
                        <Text style={{color:'blue',fontSize:18}}>Try Again</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        
    }
}

export default Coaches