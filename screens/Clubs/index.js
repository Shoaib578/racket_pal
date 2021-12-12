import React from 'react'
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, ScrollView, ActivityIndicator, Button,Alert} from 'react-native'
import styles from './styles'
import Axios from 'axios'
import base_url from '../../base_url'
import AsyncStorage from '@react-native-async-storage/async-storage'
import GetLocation from 'react-native-get-location'

import Pdf from 'react-native-pdf';
class Clubs extends React.Component {
    state = {
        clubs:[],
        isLoading:true,
        network_error:false,
      
    }
    get_all_clubs = ()=>{
        Axios.get(base_url+'/apis/clubs/get_all_clubs')
        .then(res=>{
            console.log(res.data)
            this.setState({clubs:res.data.clubs,isLoading:false})
        })
        .catch(err=>{
            this.setState({network_error:true,isLoading:false})
        })
        
    }

  


   

    Search = (text)=>{
        Axios.get(base_url+'/apis/clubs/search_club?club_title='+text)
        .then(res=>{
            this.setState({clubs:res.data.clubs,isLoading:false})
        })
        .catch(err=>{
            this.setState({isLoading:false,network_error:true})

        })
    }
    componentDidMount(){
       
        this.get_all_clubs()

       
       
     
    }
    goToClubDetails(id) {
        this.props.navigation.navigate('ClubDetails',{id:id})
    }
    render(){
        if(this.state.network_error == false){

       
            return(
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    
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
                            this.get_all_clubs()
                        }
                    }} placeholder="Search" style={styles.InputField}/>
                   </View>
                   <Text style={styles.ClubsHeading}>Clubs</Text>
                    
                    {this.state.isLoading == false?<View>
                    {this.state.clubs.length>0?
                    <View style={{width:"100%",height:"100%",marginBottom:"40%"}}>

                     <FlatList
                     style={styles.AllClubs}
                     onEndReached={()=>(
                         <ActivityIndicator size="large" color="blue"/>
                     )}
                     numColumns={2}
                     data={this.state.clubs}
                     renderItem={({item}) => (
                         <TouchableOpacity onPress={() => this.goToClubDetails(item._id)} style={styles.ClubStyle}>
                               <Pdf
                               
                                source={{uri:base_url+'/uploads/'+item.buisiness_permit_document,caches:true}}
                                style={{width:'100%', height:150,borderRadius:4,}}
                            />
                             <Text style={styles.ClubName}>{item.club_name}</Text>
                         </TouchableOpacity>
                     )}/>
                     </View>
                     :null
                    }
                   </View>:
                   <ActivityIndicator size="large" color="blue" style={{marginTop:30}}/>
                   }
                   
                </SafeAreaView>
               
                </TouchableWithoutFeedback>
            )
       
    }else{
        return(
            <View style={{marginTop:30,alignSelf:'center',alignItems:'center'}}>
                <Text style={{color:'red',fontSize:18}}>Network Error Please</Text>
                <TouchableOpacity onPress={()=>{
                    this.setState({isLoading:true,network_error:false})
                    this.get_all_clubs()
                }}>
                    <Text style={{color:'blue',fontSize:18}}>Try Again</Text>
                </TouchableOpacity>
            </View>
        )
    }
        
    }
}

export default Clubs