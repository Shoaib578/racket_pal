
import React from 'react'
import {SafeAreaView, Text, View, Image, TouchableOpacity,TextInput, TouchableWithoutFeedback, Keyboard, FlatList, ScrollView, ImageBackground, Dimensions, ActivityIndicator} from 'react-native'
import FAIcon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'
import Pdf from 'react-native-pdf';
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import base_url from '../../base_url'
import GetLocation from 'react-native-get-location'

class ClubDetails extends React.Component {
    state = {
        isLoading: true,
        club:"",
        network_error:false,
       
    }
    GoBack(){
        this.props.navigation.goBack()
    }

   

    get_club_details(){
        
        Axios.get(base_url+'/apis/clubs/view_club?club_id='+this.props.route.params.id)
        .then(res=>{

            this.setState({club:res.data.club,isLoading:false})
        })
        .catch(err=>{
            console.log("this is the error"+err)
            this.setState({isLoading:false,network_error:true})
        })
    }

    componentDidMount(){
        this.get_club_details()
       
    }


    render(){
        if(this.state.network_error == false){
            
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.CoverImage}>
                {this.state.isLoading == false?<Pdf
                               source={{uri:base_url+'/uploads/'+this.state.club.buisiness_permit_document,caches:true}}
                               style={styles.ClubImage}
                           />:null}
                    <TouchableOpacity onPress={() => this.GoBack()} style={styles.backArrowMmargins}>
                    <Image style={styles.backArrow} source={require('../../assets/backArrow.png')}/>
                    </TouchableOpacity>
                </View>
                {this.state.isLoading == false?<ScrollView>
                <View style={styles.ClubNameAndHeart}>
                    <Text style={styles.ClubName}>{this.state.club.club_name}</Text>
                  
                </View>
                <View style={styles.ClubDetails}>
                    <Text style={styles.ClubDetailsText}>Club Details</Text>
                    <Text>{this.state.club.description}</Text>
                </View>
                
                </ScrollView>:
                <ActivityIndicator size="large" color="blue"/>
                }
            </SafeAreaView>
        )
    }else{
        return <View style={{marginTop:50,alignSelf:'center',alignItems:'center'}}>
        <Text style={{color:'red',fontSize:18}}>Network Error Please</Text>
        <TouchableOpacity onPress={()=>{
            this.setState({isLoading:true,network_error:false})
            this.get_club_details()
        }}>
            <Text style={{color:'blue',fontSize:18}}>Try Again</Text>
        </TouchableOpacity>
    </View>
    }

    }
}

export default ClubDetails