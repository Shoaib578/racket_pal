import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        padding:'5%'
    },

    NewPassWordInfo:{
        marginTop:'15%',
    },

    CreateNewPassText:{
        color:'#333333',
        fontSize:28
    },

    PleaseSetYourPasswordForLogin:{
        fontSize:16,
        marginTop:'5%',
        color:'gray'
    },

    EnteringData:{
        width:'100%',
        marginTop:'15%'

    },

    PasswordInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:48,
        fontSize:17,
        borderRadius:6,
        marginTop:'3%',
        marginBottom:'7%',
        color:'#929292',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    PasswordPlaceholder:{
        fontSize:16,
        color:'#494949'
    },

    ConfirmPasswordInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:48,
        fontSize:17,
        borderRadius:6,
        marginTop:'3%',
        color:'#929292',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    imageStyle: {
        padding: 0,
        height: 24,
        width: 24,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

    InputField:{
        flex:1,
        fontSize:17,
        color:'#929292',
        paddingLeft:10
    },

    ContinueButton:{
        width:'100%',
        height:48,
        borderRadius:15,
        backgroundColor:'#53B175',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'25%'
    },

    ContinueButtonText:{
        color:'#fff',
        fontSize:20
    },

    EyeButton:{
        marginRight:15
    },

    LockButton:{
        marginLeft:15
    },

    LockImageStyle:{
        height: 17.5,
        width: 13.5,
        resizeMode: 'stretch',
    }
})

export default styles;