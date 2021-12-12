import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
    },

    Location:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        justifyContent:'center',
        marginTop:'8%'
    },

    mapIcon:{
        width:15.13,
        height:18.17
    },

    LocationName:{
        color:'#4C4F4D',
        fontSize:18,
        marginLeft:5
    },

    SearchInput:{
        backgroundColor:'#F2F2F7',
        width:'90%',
        height:48,
        fontSize:17,
        borderRadius:15,
        marginTop:'7%',
        color:'#929292',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:'5%',
        marginRight:'5%'
    },

    SearchButton:{
        marginLeft:15
    },

    SearchIconStyle:{
        height: 18.21,
        width: 18.21,
        resizeMode: 'stretch',
    },

    InputField:{
        flex:1,
        fontSize:17,
        color:'#929292',
        paddingLeft:10
    },

    PlayerHeading:{
        color:'#181725',
        fontSize:24,
        marginTop:'4%',
        marginLeft:'5%'
    },

    PlayerStyle:{
        width:'40%',
        height:200,
      
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderRadius:18,
        marginLeft:'5%',
        marginRight:'5%',
        marginTop:'4%',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    PlayerName:{
        fontSize:16,
        color:'#181725',
        marginTop:15
    },

    AllPplayers:{
        width:'100%',
    }
})

export default styles