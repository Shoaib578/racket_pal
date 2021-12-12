import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import GetStarted from '../screens/GetStarted';
import EditProfile from '../screens/EditProfile'
import PlayerDetails from '../screens/PlayerDetails'
import CoachDetails from '../screens/CoachDetails';
import Profile from '../screens/Profile/index'
import Clubs from '../screens/Clubs/index'
import ClubDetails from '../screens/ClubDetails/index'
import Coaches from '../screens/Coaches/index'
import Players from '../screens/Players/index'
import Splash from '../screens/Spash';
import ForgotPassword from '../screens/ForgotPassword';
import OTP from '../screens/OTP';
import CreateNewPassword from '../screens/CreateNewPassword';
import styles from './styles'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigations() {
    return (
      <Tab.Navigator screenOptions={{
        tabBarStyle: {
          height: 60,
          justifyContent: 'center',

        },
        tabBarHideOnKeyboard:true
      }}>
        <Tab.Screen options={ ({route}) => ({
          headerShown:false,
          tabBarLabel:({focused}) => {
            if(focused){
            return (<Text style={styles.FocusedClubsLeabel}>Clubs</Text>)
          }else{
            return (<Text style={styles.ClubsLeabel}>Clubs</Text>)
          }
          },
          tabBarIcon:({focused}) => {
            if (focused) {
              return(
                <Icon name="sports-club" size={23} color="#53B175" />
              )
            }else{
              return(
                <Icon name="sports-club" size={23} color="#181725" />
              )
            }
          }
        })} name="Clubs" component={Clubs} />

          <Tab.Screen options={ ({route}) => ({
          headerShown:false,
          tabBarLabel:({focused}) => {
            if(focused){
            return (<Text style={styles.FocusedCoachesLeabel}>Coaches</Text>)
          }else{
            return (<Text style={styles.CoachesLeabel}>Coaches</Text>)
          }
          },
          tabBarIcon:({focused}) => {
            if (focused) {
              return(
                <MCIcon name="coach-lamp" size={24} color="#53B175" />
              )
            }else{
              return(
                <MCIcon name="coach-lamp" size={24} color="#181725" />
              )
            }
          }
        })} name="Coaches" component={Coaches} />
        
        <Tab.Screen options={ ({route}) => ({
          headerShown:false,
          tabBarLabel:({focused}) => {
            if(focused){
            return (<Text style={styles.FocusedPlayersLeabel}>Players</Text>)
          }else{
            return (<Text style={styles.PlayersLeabel}>Players</Text>)
          }
          },
          tabBarIcon:({focused}) => {
            if (focused) {
              return(
                <MIcon name="sports-handball" size={24} color="#53B175" />
              )
            }else{
              return(
                <MIcon name="sports-handball" size={24} color="#181725" />
              )
            }
          }
        })} name="Players" component={Players} />

         <Tab.Screen options={ ({route}) => ({
          headerShown:false,
          tabBarLabel:({focused}) => {
            if(focused){
            return (<Text style={styles.FocusedProfileLeabel}>Profile</Text>)
          }else{
            return (<Text style={styles.ProfileLeabel}>Profile</Text>)
          }
          },
          tabBarIcon:({focused}) => {
            if (focused) {
              return(
                <IIcon name="person-outline" size={24} color="#53B175" />
              )
            }else{
              return(
                <IIcon name="person-outline" size={24} color="#181725" />
              )
            }
          }
        })} name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }

const Routes = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen options={{headerShown:false}} name="GetStarted" component={GetStarted}/>
            <Stack.Screen options={{headerShown:false}} name="SignIn" component={SignIn}/>
            <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUp}/>
            <Stack.Screen options={{headerShown:false}} name="Home" component={BottomTabNavigations}/>
            <Stack.Screen options={{headerShown:false}} name="ClubDetails" component={ClubDetails}/>
            <Stack.Screen options={{headerShown:false}} name="EditProfile" component={EditProfile}/>
            <Stack.Screen options={{headerShown:false}} name="PlayerDetails" component={PlayerDetails}/>
            <Stack.Screen options={{headerShown:false}} name="CoachDetails" component={CoachDetails}/>
            <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash}/>
            <Stack.Screen options={{headerShown:false}} name="ForgotPassword" component={ForgotPassword}/>
            <Stack.Screen options={{headerShown:false}} name="OTP" component={OTP}/>
            <Stack.Screen options={{headerShown:false}} name="CreateNewPassword" component={CreateNewPassword}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes