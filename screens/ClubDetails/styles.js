import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        width:'100%',
        flex:1
    },

    backArrowMmargins:{
        marginLeft:'5%', 
        marginTop:'5%'
    },

    backArrow:{
        width:10, 
        height:18
    },

    ClubNameAndHeart:{
        width:'100%',
        paddingLeft:'5%',
        paddingRight:'5%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:'4%',
    },

    CoverImage:{
        width:'100%',
        height:'35%',
        backgroundColor:'blue',
    },

    ClubImage:{
        width:'100%',
        height:'100%',
        position:'absolute'
    },

    LikeHeart:{
        width:22.8, 
        height:19.6
    },

    ClubName:{
        fontSize:24, 
        color:'#181725'
    },

    ClubDetails:{
        paddingRight:'5%',
        paddingLeft:'5%',
        marginTop:'4%'
    },

    ClubDetailsText:{
        color:'#181725',
        fontSize:18,
        fontWeight:'600'
    },

    ClubCompleteDetail:{
        color:'#7C7C7C',
        fontSize:13
    },

    ReviewBox:{
        paddingLeft:'5%',
        paddingRight:'5%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:'5%'
    },

    ReviewText:{
        fontSize:20,
        fontWeight:'600',
        color:'#181725'
    },

    Rating:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:140
    }

})

export default styles