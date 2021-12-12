import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        padding:'5%'
    },

    ForgotPassInfo:{
        marginTop:'15%',
    },

    ForgotPassText:{
        color:'#333333',
        fontSize:28
    },

    EnterEmailToResetPassText:{
        fontSize:16,
        marginTop:'6%',
        color:'gray'
    },

    EnteringData:{
        width:'100%',
        marginTop:'20%'

    },

    EmailInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:48,
        fontSize:17,
        borderRadius:6,
        color:'#929292',
        paddingLeft:10,
        
    },

    ContinueButton:{
        width:'100%',
        height:48,
        borderRadius:15,
        backgroundColor:'#53B175',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'20%'
    },

    ContinueButtonText:{
        color:'#fff',
        fontSize:20
    }
})

export default styles;