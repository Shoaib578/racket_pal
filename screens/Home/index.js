import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import styles from './styles'

class Home extends React.Component {
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Text>Home</Text>
            </SafeAreaView>
        )
    }
}

export default Home