
import React from "react";
import {Text, SafeAreaView, View, Image, ActivityIndicator} from 'react-native'

import styles from './styles'
import MapView,{Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import base_url from '../../base_url'
import GetLocation from 'react-native-get-location'

class CoachDetails extends React.Component{
    state = {
        coach_details:"",
        isLoading:true,
     
        
    }
    
    get_coach_details() {
       Axios.get(base_url+"/apis/coaches/view_coach?coach_id="+this.props.route.params.id)
       .then(res=>{
           console.log(res.data.coach)
           this.setState({isLoading:false,coach_details:res.data.coach})
       })
    }
    

    componentDidMount(){
        this.get_coach_details()
       
    }
    render(){
        if(!this.state.isLoading){

        return (
            <SafeAreaView style={styles.container}>
                <View >
                <MapView
                style={styles.Map}
                provider={PROVIDER_GOOGLE}
                initialRegion={
                    {
                        latitude:this.state.coach_details.person.latitude,
                        longitude: this.state.coach_details.person.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }
                }

                region={{
                    latitude:this.state.coach_details.person.latitude,
                    longitude: this.state.coach_details.person.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                >
                    <Marker coordinate={{
                         latitude:this.state.coach_details.person.latitude,
                         longitude: this.state.coach_details.person.longitude,
                         
                    }}/>
            </MapView>
                </View>
                <View style={styles.CoachDetails}>
                    <View style={styles.PlayerNameAndImage}>
                        <Image style={styles.ProfileImage} source={{uri:base_url+'/uploads/'+this.state.coach_details.person.profile_image}}/>
                        <Text style={styles.CoachName}>{this.state.coach_details.person.firstname} {this.state.coach_details.person.lastname}</Text>
                    </View>
                    <View style={styles.Details}>
                    <View style={styles.SportsInterestBox}>
                        {this.state.coach_details.sports.map(data=>{
                            return(
                                <Text style={styles.SportsInterest} key={data}>Sports Interest: {data.name}</Text>

                            )
                        })}
                    </View>
                    <View style={styles.AgeBox}>
                    <Text style={styles.Age}>Age: {this.state.coach_details.person.age}</Text>
                    </View>
                    <View style={styles.SkillBox}>
                    <Text style={styles.Skill}>Skill Level: {this.state.coach_details.player.player_skill}</Text>
                    </View>


                    <View style={styles.SkillBox}>
                    <Text style={styles.Skill}>Gender: {this.state.coach_details.person.gender}</Text>
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

export default CoachDetails