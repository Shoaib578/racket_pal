import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        padding:'5%'
    },

    LoginHeading:{
        fontSize:26,
        color:'#181725'
    },

    content:{
        marginTop:'30%',
        fontWeight:'600'
    },

    Enteryouremailsandpassword:{
        color:'#7C7C7C',
        fontSize:16,
        marginTop:'2%'
    },

    EmailLabel:{
        color:'#7C7C7C',
        fontSize:16,
        marginTop:'3%'
    },

    EmailInput:{
        borderBottomColor:'#F2F2F7',
        borderBottomWidth:1.5,
        width:'100%',
        height:48,
        fontSize:17,
        marginTop:'3%',
        color:'#929292',
        flexDirection:'row-reverse',
        justifyContent:'space-between'
    },

    PasswordLabel:{
        color:'#7C7C7C',
        fontSize:16,
        marginTop:'6%'
    },

    PasswordInput:{
        borderBottomColor:'#F2F2F7',
        borderBottomWidth:2,
        width:'100%',
        height:48,
        fontSize:17,
        marginTop:'3%',
        color:'#929292',
        flexDirection:'row-reverse',
        justifyContent:'space-between'
    },

    imageStyle: {
        padding: 0,
        height: 24,
        width: 24,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

    CrossEyeImageStyle: {
        padding: 0,
        height: 18.92,
        width: 19.93,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

    InputField:{
        flex:1,
        fontSize:17,
        color:'#929292',
    },

    EyeButton:{
        margin:12,
        marginRight:20,
    },

    ForgotPassword:{
        color:'#181725',
        fontSize:14,
    },

    ForgotPasswordButton:{
        marginTop:'3%',
        width:'100%',
        alignItems:'space-between'
    },

    LoginButton:{
        width:'100%',
        height:60,
        backgroundColor:'#53B175',
        borderRadius:19,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'5%'
    },

    LoginText:{
        color:'#FFFFFF',
        fontSize:18
    },

    DontHaveAnAccount:{
        flexDirection:'row',
        width:'100%',
        flex:1,
        justifyContent:'center',
        marginTop:'7%'
    },

    DonthaveanaccountText:{
        fontSize:14,
        color:'#000000',
    },

    DonthaveanaccountSignUpText:{
        marginLeft:5,
        color:'#53B175'
    }


})

export default styles