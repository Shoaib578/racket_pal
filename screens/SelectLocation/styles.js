import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        paddingLeft:'5%',
        paddingRight:'5%',
        paddingTop:'5%'
    },

    LocationIcon:{
        width:224.69,
        height:170.69
    },

    LocationMap:{
        width:'100%',
        alignItems:'center',
        marginTop:'10%'
    },

    BackArrow:{
        width:10,
        height:18
    },

    SelectYourLocation:{
        color:'#181725',
        fontSize:26,
        fontWeight:'600',
        marginTop:'5%'
    },

    LocationText:{
        color:'#7C7C7C',
        fontSize:16,
        marginTop:'3%',
        textAlign:'center'
    },

    yourZone:{
        color:'#7C7C7C',
        fontSize:16,
        fontWeight:'600',
        marginTop:'7%'
    },

    dropDown:{
        marginTop:'3%',
        width:'100%',
        backgroundColor:'#FFFFFF',
        borderBottomColor:'#7C7C7C',
        borderBottomWidth:0.7,
      },

      YourArea:{
        color:'#7C7C7C',
        fontSize:16,
        fontWeight:'600',
        marginTop:'7%'
      },

      SubmitButton:{
        width:'100%',
        height:50,
        backgroundColor:'#53B175',
        borderRadius:19,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'5%'
      },

      SubmitText:{
        color:'#FFFFFF',
        fontSize:18
    },
})

export default styles