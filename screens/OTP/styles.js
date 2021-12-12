import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        padding:'5%'
    },

    OTPInfo:{
        marginTop:'15%',
    },

    OTPText:{
        color:'#333333',
        fontSize:28
    },

    VerifyOTPText:{
        fontSize:16,
        marginTop:'6%',
        color:'gray'
    },

    EnteringData:{
        width:'100%',
        marginTop:'5%'

    },

    OTPInputBoxes:{
        width:'100%',
        alignItems:'center',
        marginTop:'20%'
    },

    otpView: {
        width: '100%',
        height: '30%',
        color: 'black',
      },
      EachInputFieldStyle: {
        width: 75,
        height: 70,
        color: 'black',
        backgroundColor: '#F2F2F7',
        fontSize: 24
      },

    ContinueButton:{
        width:'100%',
        height:48,
        borderRadius:15,
        backgroundColor:'#53B175',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%'
    },

    ContinueButtonText:{
        color:'#fff',
        fontSize:20
    },

    ResendLink:{
        marginLeft:5
    },

    DidntRecievedTheCode:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%'
    },

    DidntRecievedTheCodeResendLink:{
        color:'#5FA7C0',
        fontSize:18,
        textDecorationLine:'underline'
    },

    DidntRecievedTheCodeText:{
        fontSize:18
    },
})

export default styles;