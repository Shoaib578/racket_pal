import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

class Splash extends React.Component{

    state = {
        isLoggedIn:false
    }
    isLoggedIn = async()=>{
        const user = await AsyncStorage.getItem('user')
        
        const parse = JSON.parse(user)
     
        if(parse == null){
          this.setState({isLoggedIn:false})
        }else{
          this.setState({isLoggedIn:true})
        }

        if(this.state.isLoggedIn){
            this.props.navigation.reset({
                index:0,
                routes:[{name:'Home'}],
               
            });
        }else{
            this.props.navigation.reset({
                index:0,
                routes:[{name:'GetStarted'}],
               
            });
        }

        
        }

    componentDidMount(){
        setTimeout(()=>{
           
            this.isLoggedIn()
        },1000)
          
      }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Text style={styles.Racketpal}>Racketpal</Text>
            </SafeAreaView>
        )
    }
}

export default Splash