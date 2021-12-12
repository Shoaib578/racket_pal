import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'FFFFFFF',
        width:'100%',
        flex:1
    },

    Map:{
        backgroundColor:'blue',
        width:'100%',
        height:250
    },

    CoachDetails:{
        width:'100%',
        paddingLeft:'5%',
        paddingRight:'5%',
        marginTop:'5%'
    },

    PlayerNameAndImage:{
        flexDirection:'row',
        alignItems:'center'
    },

    ProfileImage:{
        width:50,
        height:50,
        borderRadius:25,
    },

    CoachName:{
        fontSize:18,
        color:'#000000',
        fontWeight:'bold',
        marginLeft:10
    },

    Details:{
        marginLeft:'15.5%'
    },

    SportsInterest:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000000',
        marginLeft:5
    },

    Age:{
      fontSize:18,
      fontWeight:'bold',
      color:'#000000',
      marginLeft:5
    },

    Skill:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000000',
        marginLeft:5
    },

    SportsInterestBox:{
        marginTop:'4%',
        borderBottomColor:'#53B175',
        borderBottomWidth:2,
        width:'100%',
        height:40,
        justifyContent:'center'

    },

    AgeBox:{
        marginTop:'4%',
        borderBottomColor:'#53B175',
        borderBottomWidth:2,
        width:'100%',
        height:40,
        justifyContent:'center'
    },

    SkillBox:{
        marginTop:'4%',
        borderBottomColor:'#53B175',
        borderBottomWidth:2,
        width:'100%',
        height:40,
        justifyContent:'center'
    }
})

export default styles