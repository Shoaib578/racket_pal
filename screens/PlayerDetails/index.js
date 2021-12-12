import React from "react";
import {Text, SafeAreaView, View, Image,ActivityIndicator} from 'react-native'
import styles from './styles'
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import base_url from '../../base_url'
import GetLocation from 'react-native-get-location'
import MapView,{Marker, PROVIDER_GOOGLE} from 'react-native-maps';

class PlayerDetails extends React.Component{
    state = {
       
        isLoading:true,
        player_details:''
    }

    get_player_details() {
        Axios.get(base_url+"/apis/players/view_player?player_id="+this.props.route.params.id)
        .then(res=>{
            console.log("this is the player "+res.data.player)
            this.setState({isLoading:false,player_details:res.data.player})
        })
     }


   

    componentDidMount(){
        this.get_player_details()
       
    }
    render(){
        if(!this.state.isLoading){

            return (
                <SafeAreaView style={styles.container}>
                    <View >
                    <MapView
                    style={styles.Map}
                    provider={PROVIDER_GOOGLE}
                  
    
                    region={{
                        latitude:this.state.player_details.person.latitude,
                        longitude: this.state.player_details.person.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        
                    }}
                    >
                        <Marker coordinate={{
                             latitude:this.state.player_details.person.latitude,
                             longitude: this.state.player_details.person.longitude,

                             
                        }}/>
                </MapView>
                    </View>
                    <View style={styles.CoachDetails}>
                        <View style={styles.PlayerNameAndImage}>
                            <Image style={styles.ProfileImage} source={{uri:base_url+'/uploads/'+this.state.player_details.person.profile_image}}/>
                            <Text style={styles.PlayerName}>{this.state.player_details.person.firstname} {this.state.player_details.person.lastname}</Text>
                        </View>
                        <View style={styles.Details}>
                        <View style={styles.SportsInterestBox}>
                            {this.state.player_details.sports.map(data=>{
                                return(
                                    <Text style={styles.SportsInterest} key={data}>Sports Interest: {data.name}</Text>
    
                                )
                            })}
                        </View>
                        <View style={styles.AgeBox}>
                        <Text style={styles.Age}>Age: {this.state.player_details.person.age}</Text>
                        </View>
                        <View style={styles.SkillBox}>
                        <Text style={styles.Skill}>Skill Level: {this.state.player_details.player.player_skill}</Text>
                        </View>
    
    
                        <View style={styles.SkillBox}>
                        <Text style={styles.Skill}>Gender: {this.state.player_details.person.gender}</Text>
                        </View>
    
    
                        </View>
                    </View>
                </SafeAreaView>
            )
        }else{
            return <ActivityIndicator size="large" color="blue" style={{marginTop:30,alignSelf: 'center'}}/>
        }
    }
}

export default PlayerDetails