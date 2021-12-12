import React from 'react'
import {SafeAreaView, View, TouchableOpacity, Text, ImageBackground} from 'react-native'
import styles from './styles'

class GetStarted extends React.Component {
    getStarted(){
        this.props.navigation.navigate('SignIn')
    }
    render(){
        return(
            <ImageBackground style={styles.Background} source={require('../../assets/background3.webp')}>
                <View style={styles.TextAndGetStarted}>
                <Text style={styles.Welcometoracketpal}>Welcome to racketpal</Text>
                <TouchableOpacity onPress={() => this.getStarted()} style={styles.GetStartedButton}>
                    <Text style={styles.GetStartedText}>Get Started</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default GetStarted