import React from 'react'
import {SafeAreaView, Image, View, TouchableOpacity, Text, ScrollView} from 'react-native'
import styles from './styles'
import SelectDropdown from 'react-native-select-dropdown'
import MIcon from 'react-native-vector-icons/MaterialIcons'
class SelectLocation extends React.Component {

    GoBack(){
        this.props.navigation.goBack()
    }

    GoToSign(){
        this.props.navigation.navigate('SignIn')
    }

    countries = ["Egypt", "Canada", "Australia", "Ireland"]

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={{marginBottom:'5%'}}>
                <TouchableOpacity onPress={() => this.GoBack()}>
                <Image style={styles.BackArrow} source={require('../../assets/backArrow.png')}/>
                </TouchableOpacity>
                <View style={styles.LocationMap}>
                <Image style={styles.LocationIcon} source={require('../../assets/LocationIcon.png')}/>
                <Text style={styles.SelectYourLocation}>Select Your Location</Text>
                <Text style={styles.LocationText}>Swithch on your location to stay in tune with what’s happening in your area</Text>
                </View>
                <Text style={styles.yourZone}>Your Zone</Text>
                <SelectDropdown
                renderDropdownIcon={() => (
                    <MIcon name="keyboard-arrow-down" color="#7C7C7C" size={23} />
                )}
                 defaultButtonText="Select Location"
                 buttonStyle={styles.dropDown}
	             data={this.countries}
	             onSelect={(selectedItem, index) => {
		         console.log(selectedItem, index)
	             }}
	            buttonTextAfterSelection={(selectedItem, index) => {
		        // text represented after item is selected
		        // if data array is an array of objects then return selectedItem.property to render after item is selected
		        return selectedItem
	            }}
	            rowTextForSelection={(item, index) => {
		        // text represented for each item in dropdown
		        // if data array is an array of objects then return item.property to represent item in dropdown
		        return item
	            }}
                />

                <Text style={styles.YourArea}>Your area</Text>
                <SelectDropdown
                renderDropdownIcon={() => (
                    <MIcon name="keyboard-arrow-down" color="#7C7C7C" size={23} />
                )}
                 defaultButtonText="Select Area"
                 buttonStyle={styles.dropDown}
	             data={this.countries}
	             onSelect={(selectedItem, index) => {
		         console.log(selectedItem, index)
	             }}
	            buttonTextAfterSelection={(selectedItem, index) => {
		        // text represented after item is selected
		        // if data array is an array of objects then return selectedItem.property to render after item is selected
		        return selectedItem
	            }}
	            rowTextForSelection={(item, index) => {
		        // text represented for each item in dropdown
		        // if data array is an array of objects then return item.property to represent item in dropdown
		        return item
	            }}
                />
                <TouchableOpacity onPress={() => this.GoToSign()} style={styles.SubmitButton}>
                    <Text style={styles.SubmitText}>Submit</Text>
                </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default SelectLocation