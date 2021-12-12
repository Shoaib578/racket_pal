import React from 'react'
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, ScrollView, ActivityIndicator} from 'react-native'
import styles from './styles'
import Axios from 'axios'
import base_url from '../../base_url'
import GetLocation from 'react-native-get-location'

import AsyncStorage from '@react-native-async-storage/async-storage'


class Players extends React.Component {
    state = {
     players:[],
     isLoading:true,
     network_error:false ,
      
    }

    get_all_players = ()=>{
        Axios.get(base_url+'/apis/players/get_players')
        .then(res=>{
            console.log(res.data.players)
            this.setState({players:res.data.players,isLoading:false})
        })
        .catch(err=>{
            console.log("this is the err" + err)
            this.setState({network_error:true,isLoading:false})
        })
    }
    Search = (text)=>{
        Axios.get(base_url+'/apis/players/search_players?search='+text)
        .then(res=>{
            this.setState({players:res.data.players,isLoading:false})
        })
        .catch(err=>{
            this.setState({isLoading:false,network_error:true})

        })
    }
   

    componentDidMount(){
        this.get_all_players()
        
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

                <TouchableOpacity  style={styles.SearchButton}>
                <Image source={require('../../assets/search.png')} style={styles.SearchIconStyle}/>
                </TouchableOpacity>

                <TextInput onChangeText={(val)=>{
                        if(val.length>0){
                            this.setState({isLoading:true})
                            this.Search(val)
                        }else{
                            this.get_all_players()
                        }
                    }}  placeholder="Search" style={styles.InputField}/>
               </View>
               <Text style={styles.PlayerHeading}>Players</Text>
               {this.state.isLoading == false?<View style={{width:"100%",height:"100%",marginBottom:"40%"}}>
                <FlatList
                
                numColumns={2}
                data={this.state.players}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PlayerDetails',{id:item._id})} style={styles.PlayerStyle}>
                        <Image style={{width:'100%', height:120,borderRadius:5}} source={{uri:base_url+'/uploads/'+item.person.profile_image}}/>

                        <Text style={styles.PlayerName}>{item.person.firstname}</Text>
                    </TouchableOpacity>
                )}/>
                </View>:<ActivityIndicator size="large" color="blue" style={{marginTop:30}}/>}
                
            </SafeAreaView>
           
            </TouchableWithoutFeedback>
        )
        }else{
            return(
                <View style={{marginTop:30,alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                    <Text style={{color:'red',fontSize:18}}>Network Error Please</Text>
                    <TouchableOpacity onPress={()=>{
                        this.setState({isLoading:true,network_error:false})
                        this.get_all_players()
                    }}>
                        <Text style={{color:'blue',fontSize:18}}>Try Again</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}

export default Players