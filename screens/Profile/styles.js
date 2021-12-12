import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        paddingRight:'5%',
        paddingLeft:'5%'
    },

    ProfileWithImage:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:'10%',
        paddingBottom:'10%',
        borderBottomColor:'#7C7C7C',
        borderBottomWidth:0.5,

    },

    NameWithEditButton:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:'10%',
    },

    Email:{
        color:'#7C7C7C',
        fontSize:16,
        marginLeft:'10%'

    },

    Name:{
        color:'#181725',
        fontSize:20
    },

    EditIcon:{
        width:15,
        height:15,
    },

    ProfileImage:{
        width:63.44,
        height:64.32,
        borderRadius:27
    },

    GoBox:{
        width:'100%',
        height:60,
        borderBottomColor:'#7C7C7C',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
    },

    MyDetailsIcon:{
        width:20,
        height:15.02
    },

    MyDetails:{
        fontSize:18,
        color:'#181725',
        fontWeight:'600',
        marginLeft:'5%'
    },

    goArrowIcon:{
        width:8.4,
        height:13.45,
        marginLeft:150
    },

    LogOutButton:{
        width:'100%',
        flexDirection:'row',
        height:70,
        backgroundColor:'#F2F3F2',
        borderRadius:19,
        alignItems:'center',
        // marginTop:'5%'
        marginTop:20
    },
    new_location_Button:{
        width:'100%',
        justifyContent:'center',
        height:70,
        backgroundColor:'#F2F3F2',
        borderRadius:19,
        alignItems:'center',
        // marginTop:'5%'
        marginTop:'60%'
    },
    new_location_text:{
        color:'#53B175',
        fontSize:20,
    },
    LogoutText:{
        color:'#53B175',
        fontSize:20,
        marginLeft:'30%'
    },

    LogoutIcon:{
        width:18,
        height:18,
        marginLeft:25
    },

    BellIcon:{
        width:17.98,
        height:20
    }
})

export default styles